/* * 加密工具已经升级了一个版本，目前为 jsjiami.com.v6 ，主要加强了算法; * 已经打算把这个工具基础功能一直免费下去。还希望支持我。 * 另外 jsjiami.com.v6 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v6 不能去掉，其他都没有任何绑定。 * 誓死不会加入任何后门，JsJiami.com 加密的使命就是为了保护你们的Javascript 。 */ var _0xodq='jsjiami.com.v6',_0xodq_=['_0xodq'],_0x13ed=[_0xodq,'\x73\x63\x6f\x70\x65','\x61\x72\x72\x61\x79\x49\x74\x65\x72\x61\x74\x6f\x72\x49\x6d\x70\x6c','\x6c\x65\x6e\x67\x74\x68','\x61\x72\x72\x61\x79\x49\x74\x65\x72\x61\x74\x6f\x72','\x6d\x61\x6b\x65\x49\x74\x65\x72\x61\x74\x6f\x72','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x74\x65\x72\x61\x74\x6f\x72','\x63\x61\x6c\x6c','\x56\x45\x52\x54\x45\x58\x5f\x53\x48\x41\x44\x45\x52','\x46\x52\x41\x47\x4d\x45\x4e\x54\x5f\x53\x48\x41\x44\x45\x52','\x63\x72\x65\x61\x74\x65\x50\x72\x6f\x67\x72\x61\x6d','\x61\x74\x74\x61\x63\x68\x53\x68\x61\x64\x65\x72','\x6c\x69\x6e\x6b\x50\x72\x6f\x67\x72\x61\x6d','\x67\x65\x74\x50\x72\x6f\x67\x72\x61\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72','\x4c\x49\x4e\x4b\x5f\x53\x54\x41\x54\x55\x53','\x67\x65\x74\x50\x72\x6f\x67\x72\x61\x6d\x49\x6e\x66\x6f\x4c\x6f\x67','\x64\x65\x6c\x65\x74\x65\x50\x72\x6f\x67\x72\x61\x6d','\x64\x65\x6c\x65\x74\x65\x53\x68\x61\x64\x65\x72','\x75\x73\x65\x50\x72\x6f\x67\x72\x61\x6d','\x70\x72\x6f\x67\x72\x61\x6d','\x63\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72','\x73\x68\x61\x64\x65\x72\x53\x6f\x75\x72\x63\x65','\x63\x6f\x6d\x70\x69\x6c\x65\x53\x68\x61\x64\x65\x72','\x67\x65\x74\x53\x68\x61\x64\x65\x72\x50\x61\x72\x61\x6d\x65\x74\x65\x72','\x43\x4f\x4d\x50\x49\x4c\x45\x5f\x53\x54\x41\x54\x55\x53','\x67\x65\x74\x53\x68\x61\x64\x65\x72\x49\x6e\x66\x6f\x4c\x6f\x67','\x63\x72\x65\x61\x74\x65\x42\x75\x66\x66\x65\x72','\x62\x69\x6e\x64\x42\x75\x66\x66\x65\x72','\x41\x52\x52\x41\x59\x5f\x42\x55\x46\x46\x45\x52','\x62\x75\x66\x66\x65\x72\x44\x61\x74\x61','\x53\x54\x41\x54\x49\x43\x5f\x44\x52\x41\x57','\x42\x59\x54\x45\x53\x5f\x50\x45\x52\x5f\x45\x4c\x45\x4d\x45\x4e\x54','\x67\x65\x74\x41\x74\x74\x72\x69\x62\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x61\x5f\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x76\x65\x72\x74\x65\x78\x41\x74\x74\x72\x69\x62\x50\x6f\x69\x6e\x74\x65\x72','\x46\x4c\x4f\x41\x54','\x65\x6e\x61\x62\x6c\x65\x56\x65\x72\x74\x65\x78\x41\x74\x74\x72\x69\x62\x41\x72\x72\x61\x79','\x61\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64','\x61\x63\x74\x69\x76\x65\x54\x65\x78\x74\x75\x72\x65','\x54\x45\x58\x54\x55\x52\x45\x30','\x62\x69\x6e\x64\x54\x65\x78\x74\x75\x72\x65','\x54\x45\x58\x54\x55\x52\x45\x5f\x32\x44','\x74\x65\x78\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x69','\x54\x45\x58\x54\x55\x52\x45\x5f\x4d\x49\x4e\x5f\x46\x49\x4c\x54\x45\x52','\x4c\x49\x4e\x45\x41\x52','\x54\x45\x58\x54\x55\x52\x45\x5f\x4d\x41\x47\x5f\x46\x49\x4c\x54\x45\x52','\x54\x45\x58\x54\x55\x52\x45\x5f\x57\x52\x41\x50\x5f\x53','\x43\x4c\x41\x4d\x50\x5f\x54\x4f\x5f\x45\x44\x47\x45','\x54\x45\x58\x54\x55\x52\x45\x5f\x57\x52\x41\x50\x5f\x54','\x74\x65\x78\x49\x6d\x61\x67\x65\x32\x44','\x52\x47\x42','\x55\x4e\x53\x49\x47\x4e\x45\x44\x5f\x42\x59\x54\x45','\x75\x6e\x69\x66\x6f\x72\x6d\x31\x69','\x63\x6c\x65\x61\x72','\x43\x4f\x4c\x4f\x52\x5f\x42\x55\x46\x46\x45\x52\x5f\x42\x49\x54','\x64\x72\x61\x77\x41\x72\x72\x61\x79\x73','\x54\x52\x49\x41\x4e\x47\x4c\x45\x5f\x53\x54\x52\x49\x50','\x61\x74\x74\x72\x69\x62\x75\x74\x65\x20\x76\x65\x63\x34\x20\x61\x5f\x50\x6f\x73\x69\x74\x69\x6f\x6e\x3b\x61\x74\x74\x72\x69\x62\x75\x74\x65\x20\x76\x65\x63\x32\x20\x61\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x3b\x76\x61\x72\x79\x69\x6e\x67\x20\x76\x65\x63\x32\x20\x76\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x3b\x76\x6f\x69\x64\x20\x6d\x61\x69\x6e\x28\x29\x20\x7b\x67\x6c\x5f\x50\x6f\x73\x69\x74\x69\x6f\x6e\x20\x3d\x20\x61\x5f\x50\x6f\x73\x69\x74\x69\x6f\x6e\x3b\x76\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x20\x3d\x20\x61\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x3b\x7d','\x23\x69\x66\x64\x65\x66\x20\x47\x4c\x5f\x45\x53\x0a\x70\x72\x65\x63\x69\x73\x69\x6f\x6e\x20\x6d\x65\x64\x69\x75\x6d\x70\x20\x66\x6c\x6f\x61\x74\x3b\x0a\x23\x65\x6e\x64\x69\x66\x0a\x75\x6e\x69\x66\x6f\x72\x6d\x20\x73\x61\x6d\x70\x6c\x65\x72\x32\x44\x20\x75\x5f\x53\x61\x6d\x70\x6c\x65\x72\x3b\x76\x61\x72\x79\x69\x6e\x67\x20\x76\x65\x63\x32\x20\x76\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x3b\x76\x6f\x69\x64\x20\x6d\x61\x69\x6e\x28\x29\x20\x7b\x67\x6c\x5f\x46\x72\x61\x67\x43\x6f\x6c\x6f\x72\x20\x3d\x20\x74\x65\x78\x74\x75\x72\x65\x32\x44\x28\x75\x5f\x53\x61\x6d\x70\x6c\x65\x72\x2c\x20\x76\x5f\x54\x65\x78\x43\x6f\x6f\x72\x64\x29\x3b\x7d','\x63\x6c\x65\x61\x72\x43\x6f\x6c\x6f\x72','\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x75\x72\x65','\x67\x65\x74\x55\x6e\x69\x66\x6f\x72\x6d\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x75\x5f\x53\x61\x6d\x70\x6c\x65\x72','\x63\x72\x65\x61\x74\x65\x49\x6d\x61\x67\x65','\x6f\x6e\x6c\x6f\x61\x64','\x73\x72\x63','\x6e\x65\x78\x74','\x76\x61\x6c\x75\x65','\x64\x72\x61\x77\x49\x6d\x67','\x7a\x6a\x73\x6a\x69\x44\x61\x6d\x46\x68\x69\x42\x2e\x56\x63\x6f\x58\x6d\x2e\x76\x36\x62\x48\x53\x7a\x4b\x4d\x4c\x53\x77\x3d\x3d'];function _0x1503(_0x64efdb,_0x106be9){_0x64efdb=~~'0x'['concat'](_0x64efdb['slice'](0x0));var _0x368e0c=_0x13ed[_0x64efdb];return _0x368e0c;};(function(_0x23a5f2,_0x2c81f2){var _0x2d16f7=0x0;for(_0x2c81f2=_0x23a5f2['shift'](_0x2d16f7>>0x2);_0x2c81f2&&_0x2c81f2!==(_0x23a5f2['pop'](_0x2d16f7>>0x3)+'')['replace'](/[zDFhBVXbHSzKMLSw=]/g,'');_0x2d16f7++){_0x2d16f7=_0x2d16f7^0xfec30;}}(_0x13ed,_0x1503));var r=r||{};r[_0x1503('0')]={},r[_0x1503('1')]=function(_0x3443b0){var _0x10df63=0x0;return function(){return _0x10df63<_0x3443b0[_0x1503('2')]?{'\x64\x6f\x6e\x65':!0x1,'\x76\x61\x6c\x75\x65':_0x3443b0[_0x10df63++]}:{'\x64\x6f\x6e\x65':!0x0};};},r[_0x1503('3')]=function(_0x6f1f61){return{'\x6e\x65\x78\x74':r[_0x1503('1')](_0x6f1f61)};},r[_0x1503('4')]=function(_0x1cbd8b){var _0x3f3349=_0x1503('5')!=typeof Symbol&&Symbol[_0x1503('6')]&&_0x1cbd8b[Symbol[_0x1503('6')]];return _0x3f3349?_0x3f3349[_0x1503('7')](_0x1cbd8b):r[_0x1503('3')](_0x1cbd8b);};var e,t,a,n=new Float32Array([-0x1,0x1,0x0,0x0,-0x1,-0x1,0x0,0x1,0x1,0x1,0x1,0x0,0x1,-0x1,0x1,0x1]),o=!0x1;function u(_0x1633d2,_0x38d139,_0x209791){return!!(_0x38d139=function(_0x1633d2,_0x38d139,_0x209791){if(_0x38d139=i(_0x1633d2,_0x1633d2[_0x1503('8')],_0x38d139),_0x209791=i(_0x1633d2,_0x1633d2[_0x1503('9')],_0x209791),!_0x38d139||!_0x209791)return null;var _0x4f0677=_0x1633d2[_0x1503('a')]();return _0x4f0677?(_0x1633d2[_0x1503('b')](_0x4f0677,_0x38d139),_0x1633d2[_0x1503('b')](_0x4f0677,_0x209791),_0x1633d2[_0x1503('c')](_0x4f0677),_0x1633d2[_0x1503('d')](_0x4f0677,_0x1633d2[_0x1503('e')])?_0x4f0677:(_0x1633d2[_0x1503('f')](_0x4f0677),_0x1633d2[_0x1503('10')](_0x4f0677),_0x1633d2[_0x1503('11')](_0x209791),_0x1633d2[_0x1503('11')](_0x38d139),null)):null;}(_0x1633d2,_0x38d139,_0x209791))&&(_0x1633d2[_0x1503('12')](_0x38d139),_0x1633d2[_0x1503('13')]=_0x38d139,!0x0);}function i(_0x2d4985,_0x4a7c23,_0x4f3158){return null==(_0x4a7c23=_0x2d4985[_0x1503('14')](_0x4a7c23))?null:(_0x2d4985[_0x1503('15')](_0x4a7c23,_0x4f3158),_0x2d4985[_0x1503('16')](_0x4a7c23),_0x2d4985[_0x1503('17')](_0x4a7c23,_0x2d4985[_0x1503('18')])?_0x4a7c23:(_0x2d4985[_0x1503('19')](_0x4a7c23),_0x2d4985[_0x1503('11')](_0x4a7c23),null));}function l(_0x68a94d,_0x3138fc){var _0x18a0a2=_0x3138fc||new Float32Array([-0x1,0x1,0x0,0x1,-0x1,-0x1,0x0,0x0,0x1,0x1,0x1,0x1,0x1,-0x1,0x1,0x0]),_0x47bdc1=_0x68a94d[_0x1503('1a')]();return _0x47bdc1?(_0x68a94d[_0x1503('1b')](_0x68a94d[_0x1503('1c')],_0x47bdc1),_0x68a94d[_0x1503('1d')](_0x68a94d[_0x1503('1c')],_0x18a0a2,_0x68a94d[_0x1503('1e')]),_0x18a0a2=_0x18a0a2[_0x1503('1f')],0x0>(_0x47bdc1=_0x68a94d[_0x1503('20')](_0x68a94d[_0x1503('13')],_0x1503('21')))?-0x1:(_0x68a94d[_0x1503('22')](_0x47bdc1,0x2,_0x68a94d[_0x1503('23')],!0x1,0x4*_0x18a0a2,0x0),_0x68a94d[_0x1503('24')](_0x47bdc1),0x0>(_0x47bdc1=_0x68a94d[_0x1503('20')](_0x68a94d[_0x1503('13')],_0x1503('25')))?-0x1:(_0x68a94d[_0x1503('22')](_0x47bdc1,0x2,_0x68a94d[_0x1503('23')],!0x1,0x4*_0x18a0a2,0x2*_0x18a0a2),_0x68a94d[_0x1503('24')](_0x47bdc1),0x4))):-0x1;}function T(_0x171506,_0x4745f6,_0x504327,_0x179161,_0x300e31){_0x171506[_0x1503('26')](_0x171506[_0x1503('27')]),_0x171506[_0x1503('28')](_0x171506[_0x1503('29')],_0x504327),_0x171506[_0x1503('2a')](_0x171506[_0x1503('29')],_0x171506[_0x1503('2b')],_0x171506[_0x1503('2c')]),_0x171506[_0x1503('2a')](_0x171506[_0x1503('29')],_0x171506[_0x1503('2d')],_0x171506[_0x1503('2c')]),_0x171506[_0x1503('2a')](_0x171506[_0x1503('29')],_0x171506[_0x1503('2e')],_0x171506[_0x1503('2f')]),_0x171506[_0x1503('2a')](_0x171506[_0x1503('29')],_0x171506[_0x1503('30')],_0x171506[_0x1503('2f')]),_0x171506[_0x1503('31')](_0x171506[_0x1503('29')],0x0,_0x171506[_0x1503('32')],_0x171506[_0x1503('32')],_0x171506[_0x1503('33')],_0x300e31),_0x171506[_0x1503('34')](_0x179161,0x0),_0x171506[_0x1503('35')](_0x171506[_0x1503('36')]),_0x171506[_0x1503('37')](_0x171506[_0x1503('38')],0x0,_0x4745f6);}function E(_0x1e398e,_0x321404,_0x2848d3){return _0x321404?u(_0x321404,_0x1503('39'),_0x1503('3a'))?0x0>(_0x2848d3=l(_0x321404,_0x2848d3))?-0x1:(_0x321404[_0x1503('3b')](0x1,0x1,0x1,0x1),_0x1e398e=(_0x2848d3=r[_0x1503('4')](function(_0x2424a8,_0x1e398e,_0x321404){var _0x2848d3=_0x2424a8[_0x1503('3c')]();if(!_0x2848d3)return[null,null,null,!0x1];var _0x351f42=_0x2424a8[_0x1503('3d')](_0x2424a8[_0x1503('13')],_0x1503('3e'));if(!_0x351f42)return[null,null,null,!0x1];var _0x263794=wx[_0x1503('3f')]();return _0x263794?(_0x263794[_0x1503('40')]=function(){T(_0x2424a8,_0x1e398e,e,_0x351f42,_0x263794),a=_0x263794;},_0x263794[_0x1503('41')]=_0x321404,[_0x2848d3,_0x351f42,!0x0]):[null,null,null,!0x1];}(_0x321404,_0x2848d3,_0x1e398e)))[_0x1503('42')]()[_0x1503('43')],_0x321404=_0x2848d3[_0x1503('42')]()[_0x1503('43')],(_0x2848d3=_0x2848d3[_0x1503('42')]()[_0x1503('43')])?[_0x1e398e,_0x321404,_0x2848d3]:-0x1):-0x1:[-0x1];}exports[_0x1503('44')]=function(_0x31076c,_0x476871){if(!o){var _0x24b11c=r[_0x1503('4')](E(_0x31076c,_0x476871,n));if(e=_0x24b11c[_0x1503('42')]()[_0x1503('43')],t=_0x24b11c[_0x1503('42')]()[_0x1503('43')],0x0>_0x24b11c[_0x1503('42')]()[_0x1503('43')])return;o=!0x0;}0x0>(_0x24b11c=l(_0x476871,n))||a&&T(_0x476871,_0x24b11c,e,t,a);};