(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/build/',b(b.s=27)})([function(a){a.exports=require('redux-store-controller')},function(a){a.exports=require('fs')},function(a){a.exports=require('path')},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(12);class e{static init(){return new Promise((a)=>{d.app.on('ready',a)})}static createWindow(a){null!=e.mainWindow||(e.mainWindow=new d.BrowserWindow(a))}static pathApp(a){e.mainWindow.loadURL(a)}static openDevTools(){e.mainWindow.webContents.openDevTools()}static eventHand(){d.app.on('window-all-closed',d.app.quit),e.mainWindow.on('closed',e.close)}static reload(){e.mainWindow.reload()}static close(){e.mainWindow=null}}b.default=e,e.mainWindow=null},function(a,b,c){var d=c(19),e=c(49),f=c(50),g=d?d.toStringTag:void 0;a.exports=function(a){return null==a?void 0===a?'[object Undefined]':'[object Null]':g&&g in Object(a)?e(a):f(a)}},function(a,b,c){var d=c(20),e='object'==typeof self&&self&&self.Object===Object&&self,f=d||e||Function('return this')();a.exports=f},function(a){a.exports=function(a){var b=typeof a;return null!=a&&('object'==b||'function'==b)}},function(a,b,c){var d=c(18),e=c(23);a.exports=function(a){return null!=a&&e(a.length)&&!d(a)}},function(a){a.exports=function(a){return null!=a&&'object'==typeof a}},function(a){a.exports=require('express')},function(a){a.exports=require('ip')},function(a){a.exports=require('child_process')},function(a){a.exports=require('electron')},function(a){a.exports=require('request')},function(a){a.exports=require('tar-fs')},function(a,b,c){var d=c(16),e=c(21),f=Object.prototype,g=f.hasOwnProperty;a.exports=function(a,b,c){var f=a[b];g.call(a,b)&&e(f,c)&&(c!==void 0||b in a)||d(a,b,c)}},function(a,b,c){var d=c(17);a.exports=function(a,b,c){'__proto__'==b&&d?d(a,b,{configurable:!0,enumerable:!0,value:c,writable:!0}):a[b]=c}},function(a,b,c){var d=c(47),e=function(){try{var a=d(Object,'defineProperty');return a({},'',{}),a}catch(a){}}();a.exports=e},function(a,b,c){var d=c(4),e=c(6);a.exports=function(a){if(!e(a))return!1;var b=d(a);return b=='[object Function]'||b=='[object GeneratorFunction]'||b=='[object AsyncFunction]'||b=='[object Proxy]'}},function(a,b,c){var d=c(5),e=d.Symbol;a.exports=e},function(a){var b='object'==typeof global&&global&&global.Object===Object&&global;a.exports=b},function(a){a.exports=function(a,b){return a===b||a!==a&&b!==b}},function(a){a.exports=function(a){return a}},function(a){a.exports=function(a){return'number'==typeof a&&-1<a&&0==a%1&&a<=9007199254740991}},function(a){var b=/^(?:0|[1-9]\d*)$/;a.exports=function(a,c){var d=typeof a;return c=null==c?9007199254740991:c,!!c&&('number'==d||'symbol'!=d&&b.test(a))&&-1<a&&0==a%1&&a<c}},function(a){var b=Object.prototype;a.exports=function(a){var c=a&&a.constructor,d='function'==typeof c&&c.prototype||b;return a===d}},function(a){a.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],!a.children&&(a.children=[]),Object.defineProperty(a,'loaded',{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,'id',{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}var e=c(28),f=d(e),g=c(29),h=d(g);new f.default({loaderList:h.default})},function(a){a.exports=require('bbt-loader')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=c(30),g=d(f),h=c(37),i=d(h),j=c(40),k=d(j),l=c(42),m=d(l),n=c(44),o=d(n),p=c(80),q=d(p),r=c(82),s=d(r);b.default=[{step:0,parts:[{name:'storeList',type:'data',controller:q.default},{name:'subscriptionMap',type:'data',controller:s.default},{name:'stores',type:'class',controller:e.StoreController,params:['storeList','subscriptionMap']}]},{step:1,parts:[{name:'electronController',type:'init',controller:o.default,params:['stores','selfName']},{name:'serverController',type:'init',controller:g.default,params:['stores','selfName']},{name:'updateController',type:'class',controller:i.default,params:['stores','selfName','ws']},{name:'updateSelfController',type:'class',controller:k.default,params:['stores','selfName']}]},{step:2,parts:[{name:'ws',type:'init',controller:m.default,params:['stores']}]}]},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(31),e=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=class{constructor(a){this.static=null,this.static=new e.default(a)}async init(){await this.static.init()}}},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(32),f=d(e),g=c(9),h=d(g),i=c(33),j=d(i),k=c(10),l=d(k),m=c(0),n=c(34),o=d(n);class p extends m.ControllerStateStore{constructor(...a){var b;return b=super(...a),this.app=(0,h.default)(),this.server=f.default.createServer(this.app),this.ip=l.default.address(),this.api=null,b}async init(){try{await this.start(),this.initMiddleware(),this.initView(),this.initApi(),this.initGetHandlers()}catch(a){global.console.log(a)}}start(){const a=`${new Date} Server ${this.ip} is listening on port ${this.state.server.port}`;return new Promise((b)=>{this.server.listen(this.state.server.port,this.ip,()=>{global.console.log(a),b()})})}initMiddleware(){this.app.use(j.default.json()),this.app.use(j.default.urlencoded({extended:!1})),this.app.use((a,b,c)=>{b.header('Access-Control-Allow-Origin','*'),b.header('Access-Control-Allow-Credentials',!0),b.header('Access-Control-Allow-Methods','GET, POST'),b.header('Access-Control-Allow-Headers','Cache-Control'),c()})}initView(){this.app.use('/public',h.default.static(`public`))}initApi(){this.api=new o.default({stores:this.stores,name:'config'}),this.api.init(),this.app.use('/api',this.api.router)}initGetHandlers(){this.app.get('/favicon.ico',(a,b)=>b.sendStatus(204))}}b.default=p},function(a){a.exports=require('http')},function(a){a.exports=require('body-parser')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(11),f=c(9),g=c(0),h=c(35),i=d(h),j=c(3),k=d(j);class l extends g.ControllerStateStore{constructor(...a){var b;return b=super(...a),this.router=new f.Router,b}init(){this.router.post('/reboot',(a,b)=>{l.reboot(),b.end()}),this.router.post('/refresh',(a,b)=>{l.refresh(),b.end()}),this.router.post('/config',(a,b)=>{b.send(l.config())}),this.router.post('/screenShot',(a,b)=>{b.send(l.screenShot())})}static config(){return this.state}static reboot(){(0,e.exec)('shutdown -r',()=>{})}static refresh(){k.default.reload()}static screenShot(){return i.default.snap()}}b.default=l},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(36),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f{static snap(){return new Promise((a,b)=>{(0,e.default)().then(f.parse).then(a).catch(b)})}static parse(a){return a.toString('base64')}}b.default=f},function(a){a.exports=require('screenshot-desktop')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(1),f=d(e),g=c(2),h=d(g),i=c(0),j=c(38),k=d(j);class l extends i.ControllerStateStore{constructor(...a){var b;return b=super(...a),this.config=JSON.parse(f.default.readFileSync(h.default.resolve('config.json'))),b}async stateDidUpdate(){if(this.state.time!==this.config.update.content){const{packageName:a,path:b}=this.state,c=this.stores.updateContent,d=new k.default({packageName:a,path:b});await d.init(c),l.saveObjInJson(this.state.time),await this.sendStatus()}}async sendStatus(){const a=this.stores.wsClient.getStore.socket;null===a||a.emit('PLAYER_UPDATE_STATUS',{action:'Success',package:'Content'})}static saveObjInJson(a){const b=h.default.resolve('config.json'),c=f.default.readFileSync(b),d=JSON.parse(c);d.update.content=a;const e=JSON.stringify(d);f.default.writeFileSync(b,e)}}b.default=l},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(13),f=d(e),g=c(1),h=d(g),i=c(39),j=d(i),k=c(14),l=d(k),m=c(3),n=d(m);class o{constructor(a){this.packageName=null,this.path=null,this.request=null,this.packageName=a.packageName,this.path=a.path}async init(){this.request=new f.default.get(this.path),this.request.on('error',o.errorHandler).on('response',o.requestResponse.bind(this))}static requestResponse(a){const b=o.responseEvent(a);!0===b?this.pipe():this.unlink()}unlink(){try{h.default.unlinkSync(this.path)}catch(a){throw a}}async pipe(){this.cleanDir(),console.log(`download tar`);const a=`./public/${this.packageName}/`;try{this.request.pipe(l.default.extract(a)).on('finish',()=>{n.default.reload(),console.log('restart app')})}catch(a){throw a}}async cleanDir(){console.log('Clean Directory');const a=`./public/${this.packageName}/`;j.default.sync(a)}static responseEvent(a){return 200===a.statusCode&&o.checkHeader(a.headers)||(o.errorHandler(`archive not found`),!1)}static checkHeader(a){return'application/x-tar'===a['content-type']}static errorHandler(a){console.log(`UpdateLoader: ${a}`)}}b.default=o},function(a){a.exports=require('rimraf')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(1),f=d(e),g=c(2),h=d(g),i=c(0),j=c(41),k=d(j);class l extends i.ControllerStateStore{constructor(...a){var b;return b=super(...a),this.config=JSON.parse(f.default.readFileSync(h.default.resolve('config.json'))),b}async stateDidUpdate(){if(this.state.time!==this.config.update.player){l.saveObjInJson(this.state.time);const{path:a}=this.state,b=new k.default({path:a});await b.init(),await this.sendStatus()}}async sendStatus(){const a=this.stores.wsClient.getStore.socket;null===a||a.emit('PLAYER_UPDATE_STATUS',{action:'Success',package:'Player'})}static saveObjInJson(a){const b=h.default.resolve('config.json'),c=f.default.readFileSync(b),d=JSON.parse(c);d.update.player=a;const e=JSON.stringify(d);f.default.writeFileSync(b,e)}}b.default=l},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(13),f=d(e),g=c(1),h=d(g),i=c(11),j=c(14),k=d(j);class l{constructor(a){this.path=null,this.request=null,this.path=a.path}async init(){this.request=new f.default.get(this.path),this.request.on('error',l.errorHandler).on('response',l.requestResponse.bind(this))}static requestResponse(a){const b=l.responseEvent(a);!0===b?this.pipe():this.unlink()}unlink(){try{h.default.unlinkSync(this.path)}catch(a){throw a}}async pipe(){console.log(`download self tar`);try{this.request.pipe(k.default.extract('./')).on('finish',()=>{l.checkOS()})}catch(a){throw a}}static checkOS(){const a=process.platform;'win32'===a?(0,i.exec)('npm install',()=>{console.log('npm install win'),l.restartPlayerWin()}).on('exit',(a)=>{1===a&&l.restartPlayerWin()}):(0,i.exec)('sudo npm install',()=>{console.log('npm install linux'),l.restartPlayerLinux()}).on('exit',(a)=>{1===a&&l.restartPlayerLinux()})}static restartPlayerLinux(){(0,i.exec)('sudo reboot',()=>{console.log('reboot player')})}static restartPlayerWin(){(0,i.exec)('shutdown -r',()=>{console.log('reboot player')})}static responseEvent(a){return 200===a.statusCode&&l.checkHeader(a.headers)||(l.errorHandler(`self-archive not found`),!1)}static checkHeader(a){return'application/x-tar'===a['content-type']}static errorHandler(a){console.log(`UpdateSelf: ${a}`)}}b.default=l},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(43),f=d(e),g=c(1),h=d(g),i=c(2),j=d(i);b.default=class{constructor(a){this.config=JSON.parse(h.default.readFileSync(j.default.resolve('config.json'))),this.stores=a.stores}async init(){this.connectServer(),this.initBaseHandlers(),this.initCustomHandlers()}connectServer(){this.socket=(0,f.default)(`ws://${this.config.module.host}:${this.config.module.port}`)}initBaseHandlers(){this.socket.on('disconnect',()=>{this.detachFromStore()}),this.socket.on('connect',()=>{global.console.log('connect'),this.appendToStore(),this.sendIntro()})}initCustomHandlers(){this.socket.on('PLAYER_SELF',(a)=>{this.stores.updateSelf.set(a)}),this.socket.on('PLAYER_CONTENT',(a)=>{this.stores.updateContent.set(a)})}sendIntro(){this.socket.emit('INTRO',{data:'player'})}appendToStore(){this.stores.wsClient.set({socket:this.socket})}detachFromStore(){this.stores.wsClient.set({socket:null})}}},function(a){a.exports=require('socket.io-client')},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(2),f=d(e),g=c(45),h=d(g),i=c(10),j=d(i),k=c(12),l=c(46),m=d(l),n=c(0),o=c(3),p=d(o);class q extends n.ControllerStateStore{constructor(...a){var b;return b=super(...a),this.browser=p.default,b}async init(){await this.browser.init(),this.start()}start(){const{scaleFactor:a}=k.screen.getPrimaryDisplay();console.log(a,1/a);const b=(0,m.default)(this.state.electron.options,{webPreferences:{zoomFactor:1/a,webSecurity:!1,allowRunningInsecureContent:!0}});this.browser.createWindow(b),this.pathApp(),this.openDevTools(),this.browser.eventHand()}pathApp(a=null){const b='string'==typeof a?a:this.state.electron.defaultPath,c={pathname:f.default.join(`//${j.default.address()}:3000/${b}/index.html`),protocol:'http'};console.log(h.default.format(c)),this.browser.pathApp(h.default.format(c))}openDevTools(){!0!==this.state.electron.devTool||this.browser.openDevTools()}reload(a=null){null==a?this.browser.reload():this.browser.pathApp(a)}}b.default=q},function(a){a.exports=require('url')},function(a,b,c){var d=c(15),e=c(55),f=c(56),g=c(7),h=c(25),i=c(65),j=Object.prototype,k=j.hasOwnProperty,l=f(function(a,b){if(h(b)||g(b))return void e(b,i(b),a);for(var c in b)k.call(b,c)&&d(a,c,b[c])});a.exports=l},function(a,b,c){var d=c(48),e=c(54);a.exports=function(a,b){var c=e(a,b);return d(c)?c:void 0}},function(a,b,c){var d=c(18),e=c(51),f=c(6),g=c(53),h=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,j=Function.prototype,k=Object.prototype,l=j.toString,m=k.hasOwnProperty,n=RegExp('^'+l.call(m).replace(h,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');a.exports=function(a){if(!f(a)||e(a))return!1;var b=d(a)?n:i;return b.test(g(a))}},function(a,b,c){var d=c(19),e=Object.prototype,f=e.hasOwnProperty,g=e.toString,h=d?d.toStringTag:void 0;a.exports=function(a){var b=f.call(a,h),c=a[h];try{a[h]=void 0}catch(a){}var d=g.call(a);return b?a[h]=c:delete a[h],d}},function(a){var b=Object.prototype,c=b.toString;a.exports=function(a){return c.call(a)}},function(a,b,c){var d=c(52),e=function(){var a=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||'');return a?'Symbol(src)_1.'+a:''}();a.exports=function(a){return!!e&&e in a}},function(a,b,c){var d=c(5),e=d['__core-js_shared__'];a.exports=e},function(a){var b=Function.prototype,c=b.toString;a.exports=function(a){if(null!=a){try{return c.call(a)}catch(a){}try{return a+''}catch(a){}}return''}},function(a){a.exports=function(a,b){return null==a?void 0:a[b]}},function(a,b,c){var d=c(15),e=c(16);a.exports=function(a,b,c,f){var g=!c;c||(c={});for(var h=-1,i=b.length;++h<i;){var j=b[h],k=f?f(c[j],a[j],j,c,a):void 0;k===void 0&&(k=a[j]),g?e(c,j,k):d(c,j,k)}return c}},function(a,b,c){var d=c(57),e=c(64);a.exports=function(a){return d(function(b,c){var d=-1,f=c.length,g=1<f?c[f-1]:void 0,h=2<f?c[2]:void 0;for(g=3<a.length&&'function'==typeof g?(f--,g):void 0,h&&e(c[0],c[1],h)&&(g=3>f?void 0:g,f=1),b=Object(b);++d<f;){var i=c[d];i&&a(b,i,d,g)}return b})}},function(a,b,c){var d=c(22),e=c(58),f=c(60);a.exports=function(a,b){return f(e(a,b,d),a+'')}},function(a,b,c){var d=c(59),e=Math.max;a.exports=function(a,b,c){return b=e(void 0===b?a.length-1:b,0),function(){for(var f=arguments,g=-1,h=e(f.length-b,0),i=Array(h);++g<h;)i[g]=f[b+g];g=-1;for(var j=Array(b+1);++g<b;)j[g]=f[g];return j[b]=c(i),d(a,this,j)}}},function(a){a.exports=function(a,b,c){switch(c.length){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2]);}return a.apply(b,c)}},function(a,b,c){var d=c(61),e=c(63),f=e(d);a.exports=f},function(a,b,c){var d=c(62),e=c(17),f=c(22),g=e?function(a,b){return e(a,'toString',{configurable:!0,enumerable:!1,value:d(b),writable:!0})}:f;a.exports=g},function(a){a.exports=function(a){return function(){return a}}},function(a){var b=Date.now;a.exports=function(a){var c=0,d=0;return function(){var e=b(),f=16-(e-d);if(d=e,!(0<f))c=0;else if(++c>=800)return arguments[0];return a.apply(void 0,arguments)}}},function(a,b,c){var d=c(21),e=c(7),f=c(24),g=c(6);a.exports=function(a,b,c){if(!g(c))return!1;var h=typeof b;return!('number'==h?!(e(c)&&f(b,c.length)):!('string'==h&&b in c))&&d(c[b],a)}},function(a,b,c){var d=c(66),e=c(77),f=c(7);a.exports=function(a){return f(a)?d(a):e(a)}},function(a,b,c){var d=c(67),e=c(68),f=c(70),g=c(71),h=c(24),i=c(73),j=Object.prototype,k=j.hasOwnProperty;a.exports=function(a,b){var c=f(a),j=!c&&e(a),l=!c&&!j&&g(a),m=!c&&!j&&!l&&i(a),n=c||j||l||m,o=n?d(a.length,String):[],p=o.length;for(var q in a)(b||k.call(a,q))&&!(n&&('length'==q||l&&('offset'==q||'parent'==q)||m&&('buffer'==q||'byteLength'==q||'byteOffset'==q)||h(q,p)))&&o.push(q);return o}},function(a){a.exports=function(a,b){for(var c=-1,d=Array(a);++c<a;)d[c]=b(c);return d}},function(a,b,c){var d=c(69),e=c(8),f=Object.prototype,g=f.hasOwnProperty,h=f.propertyIsEnumerable,i=d(function(){return arguments}())?d:function(a){return e(a)&&g.call(a,'callee')&&!h.call(a,'callee')};a.exports=i},function(a,b,c){var d=c(4),e=c(8);a.exports=function(a){return e(a)&&d(a)=='[object Arguments]'}},function(a){var b=Array.isArray;a.exports=b},function(a,b,c){(function(a){var d=c(5),e=c(72),f='object'==typeof b&&b&&!b.nodeType&&b,g=f&&'object'==typeof a&&a&&!a.nodeType&&a,h=g&&g.exports===f,i=h?d.Buffer:void 0,j=i?i.isBuffer:void 0;a.exports=j||e}).call(b,c(26)(a))},function(a){a.exports=function(){return!1}},function(a,b,c){var d=c(74),e=c(75),f=c(76),g=f&&f.isTypedArray,h=g?e(g):d;a.exports=h},function(a,b,c){var d=c(4),e=c(23),f=c(8),g={};g['[object Float32Array]']=g['[object Float64Array]']=g['[object Int8Array]']=g['[object Int16Array]']=g['[object Int32Array]']=g['[object Uint8Array]']=g['[object Uint8ClampedArray]']=g['[object Uint16Array]']=g['[object Uint32Array]']=!0,g['[object Arguments]']=g['[object Array]']=g['[object ArrayBuffer]']=g['[object Boolean]']=g['[object DataView]']=g['[object Date]']=g['[object Error]']=g['[object Function]']=g['[object Map]']=g['[object Number]']=g['[object Object]']=g['[object RegExp]']=g['[object Set]']=g['[object String]']=g['[object WeakMap]']=!1,a.exports=function(a){return f(a)&&e(a.length)&&!!g[d(a)]}},function(a){a.exports=function(a){return function(b){return a(b)}}},function(a,b,c){(function(a){var d=c(20),e='object'==typeof b&&b&&!b.nodeType&&b,f=e&&'object'==typeof a&&a&&!a.nodeType&&a,g=f&&f.exports===e,h=g&&d.process,i=function(){try{var a=f&&f.require&&f.require('util').types;return a?a:h&&h.binding&&h.binding('util')}catch(a){}}();a.exports=i}).call(b,c(26)(a))},function(a,b,c){var d=c(25),e=c(78),f=Object.prototype,g=f.hasOwnProperty;a.exports=function(a){if(!d(a))return e(a);var b=[];for(var c in Object(a))g.call(a,c)&&'constructor'!=c&&b.push(c);return b}},function(a,b,c){var d=c(79),e=d(Object.keys,Object);a.exports=e},function(a){a.exports=function(a,b){return function(c){return a(b(c))}}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(81),e=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=[{name:'config',options:{initState:e.default}},{name:'updateContent',options:{initState:{time:null}}},{name:'updateSelf',options:{initState:{time:null}}},{name:'wsClient',options:{socket:null}}]},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default={server:{port:3e3},electron:{defaultPath:'public/intertop/',devTools:!1,options:{fullscreen:!0,frame:!1}},player:{timeShot:1500},content:{path:'/public/intertop/index.html'}}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.default=[{class:'config',storesRules:[{store:'config'}]},{class:'electronController',storesRules:[{store:'config',fields:['electron']}]},{class:'serverController',storesRules:[{store:'config',fields:['server']}]},{class:'updateController',storesRules:[{store:'updateContent'}]},{class:'updateSelfController',storesRules:[{store:'updateSelf'}]}]}]);