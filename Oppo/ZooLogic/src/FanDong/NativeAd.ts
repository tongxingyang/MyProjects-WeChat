import { Queue } from "./queue";
import FdMgr from "./FdMgr";

export type NativeAdEntity = {
	ad: any;
	adInfo: any;
	isClick: boolean;
	posId: string;
	displayDuration: number;
	displayTime: number;
};
export default class NativeAd {
	private readonly loadNextDelay: number = 5000;

	private _entities: Queue<NativeAdEntity> = null;
	private _displayEntities: NativeAdEntity[] = [];

	private _posIds: string[] = [];
	private _usedPosIds: string[] = [];
	private _errorPosIds: string[] = [];
	private _posIdCount: number = 0;

	constructor() {
		this._entities = new Queue();
		this._posIds = FdMgr.jsonConfig.array_nativeId;
		this._posIdCount = this._posIds.length;
		this.loadAd(this._posIds);

		// 每10s检查加载错误情况
		Laya.timer.loop(10000, this, () => {
			this.checkError();
		})
	}

	private getFreePosIds(): string[] {
		let posIds: string[] = [];
		for (let i = 0; i < this._posIdCount; i++) {
			const id = this._posIds[i];
			if (this._usedPosIds.indexOf(id) == -1 && this._errorPosIds.indexOf(id) == -1) {
				posIds.push(id);
			}
		}

		if (posIds.length == 0) {
			posIds = this._errorPosIds.concat();
		}
		this._errorPosIds = [];
		posIds = posIds.sort((a: string, b: string) => {
			return Math.random() < 0.5 ? 1 : -1;
		});
		return posIds;
	}

	private createAd(posId: string, onComplete: Function) {
		if (!posId) {
			onComplete && onComplete(null);
			return;
		}

		this._usedPosIds.push(posId);
		const ad = this.createNativeAd(posId);
		ad.onLoad((res: any) => {
			const entity: NativeAdEntity = {
				ad,
				posId,
				adInfo: res.adList[0],
				isClick: false,
				displayDuration: 0,
				displayTime: 0,
			};

			this.log('loaded:', posId, ', ad:', entity.adInfo);

			onComplete && onComplete(entity);
		});
		ad.onError((err: any) => {
			this._usedPosIds.splice(this._usedPosIds.indexOf(posId), 1);
			this._errorPosIds.push(posId);
			this.log('error:', posId, ', msg:', err.msg);
			onComplete && onComplete(null);

			ad.destroy();
		});
		ad.load();

		this.log('create:', posId);
	}

	private destoryAd(entity: NativeAdEntity) {
		if (entity && entity.ad) {
			this._usedPosIds.splice(this._usedPosIds.indexOf(entity.posId), 1);
			this.log(`destroy -- posId:${entity.posId}, adId:${entity.adInfo.adId}`);

			entity.ad.destroy && entity.ad.destroy();
			entity = null;
		}
	}

	private loadAd(posIds: string[]) {
		if (posIds && posIds.length > 0) {
			this.log('load ad:', posIds.toString());
			posIds.forEach((posId) => {
				this.createAd(posId, (entity: NativeAdEntity) => {
					if (entity) {
						this._entities.enqueue(entity);
					}
				});
			});
		}
	}

	public async showAd(): Promise<NativeAdEntity> {
		const create = (): Promise<NativeAdEntity> => {
			this.log('create for show');

			return new Promise((resolve) => {
				const posIds = this.getFreePosIds();
				if (posIds && posIds.length > 0) {
					this.createAd(posIds[0], (entity: NativeAdEntity) => {
						resolve(entity);
					});
				} else {
					resolve(null);
				}
			});
		};

		const entity = this._displayEntities.shift() || this._entities.dequeue() || (await create());
		if (entity) {
			entity.displayTime = Date.now();
			if (entity.displayDuration == 0) {
				const adId = entity.adInfo.adId;
				entity.ad.reportAdShow({ adId });
			}
		}

		this._displayEntities.push(entity);

		if (!this.checkAdEnough()) {
			this.loadAd(this.getFreePosIds());
		}
		
		return entity;
	}

	public clickAd(adId: string) {
		const entity = this.getDisplayEntity(adId);
		if (entity) {
			entity.isClick = true;

			const adId = entity.adInfo.adId;
			entity.ad.reportAdClick({ adId });

			this.log('clicked:', adId);
		}
	}

	public hideAd(adId: string) {
		const entity = this.getDisplayEntity(adId);
		if (entity) {
			entity.displayDuration += (Date.now() - entity.displayTime) / 1000;

			if (entity.isClick || entity.displayDuration >= FdMgr.jsonConfig.account_refBotNativeAd) {
				this.destoryAd(entity);
				this._displayEntities.splice(this._displayEntities.indexOf(entity), 1);

				if (!this.checkAdEnough()) {
					this.loadAd(this.getFreePosIds());
				}
			}
		}
	}

	private getDisplayEntity(adId: string): NativeAdEntity {
		let entity: NativeAdEntity;
		for (let i = this._displayEntities.length - 1; i >= 0; i--) {
			if (this._displayEntities[i].adInfo.adId === adId) {
				entity = this._displayEntities[i];
				break;
			}
		}

		return entity;
	}

	public async lateTrigger() {
		let isTrigger = false;

		const displayCount = this._displayEntities.length;
		if (displayCount > 0) {
			for (let i = displayCount - 1; i >= 0; i--) {
				const entity = this._displayEntities[i];
				if (entity && !entity.isClick) {
					const adId = entity.adInfo.adId;
					entity.ad.reportAdClick({ adId });
					isTrigger = true;
					console.log('trigger displaying native ad');
					break;
				}
			}
		}

		if (!isTrigger) {
			const entity = await this.showAd();
			if (entity) {
				this.clickAd(entity.adInfo.adId);
				Laya.timer.frameOnce(1, this, () => {
					this.hideAd(entity.adInfo.adId);
				})
				console.log('trigger new native ad');
				return;
			}

			console.log('fail to trigger native ad');
		}
	}

	private checkAdEnough(): boolean {
		return this._entities.size() >= Math.ceil(this._posIdCount / 2);
	}

	private log(...args) {
		console.log('[native-ad] -- ', ...args);
	}

	private checkError() {
		if (this._errorPosIds.length >= Math.max(1, this._posIdCount - 2)) {
			const posIds = this._errorPosIds.concat();
			this._errorPosIds = [];
			this.loadAd(posIds);
		}
	}

	public get isAllError() {
		return this._errorPosIds.length >= this._posIdCount
	}

	//原生广告
	public createNativeAd(adUnitId: string): any {
		if (!adUnitId) return null;
		return window['qg'].createNativeAd && window['qg'].createNativeAd({ adUnitId });
	}
}
