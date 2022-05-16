export class Queue<T> {
	private _count: number = 0;
	private _lowestCount: number = 0;
	private _items: any = {};

	public enqueue(element: T) {
		this._items[this._count] = element;
		this._count++;
	}

	public dequeue(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this._items[this._lowestCount];
		delete this._items[this._lowestCount];
		this._lowestCount++;
		return result;
	}

	public peek(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}

		return this._items[this._lowestCount];
	}

	public isEmpty(): boolean {
		return this.size() === 0;
	}

	public size(): number {
		return this._count - this._lowestCount;
	}

	public toString(): string {
		if (this.isEmpty()) {
			return "";
		}

		let str = `${this._items[this._lowestCount]}`;
		for (let i = this._lowestCount + 1; i < this._count; i++) {
			str = `${str},${this._items[i]}`;
		}
		return str;
	}
}
