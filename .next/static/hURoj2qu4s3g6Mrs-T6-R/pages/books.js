(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"11Xw":function(e,t){e.exports=function(){const e=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let t=[];for(let n=0;n<35;n++)t[n]=7===n||12===n||17===n||22===n?"-":e[Math.floor(Math.random()*e.length-1)];return t.join("")}},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5AOK":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),a=n("O40h"),i=n("4IMT"),s=n.n(i),u=n("pWf2"),c=n.n(u),f=n("0iUn"),p=n("sLSF"),l=n("MI3g"),d=n("a7VT"),h=n("AT/M"),A=n("Tit0"),m=n("vYYK"),v=n("q1tI"),y=n.n(v),b=n("YFqc"),g=n.n(b),x=n("3Hq7"),w=n("vDqi"),S=n.n(w),T=n("TSYQ"),k=n.n(T),N=n("11Xw"),O=n.n(N),E=y.a.createElement,R=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o))),Object(m.a)(Object(h.a)(n),"state",{loading:!0,active:"hot",loadingMore:!1,hasMore:!0}),n}return Object(A.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props&&this.props.shows&&this.setState({loading:!1})}},{key:"changeActive",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,t=this.props.shows;return E(x.a,null,E("div",null,E("div",{className:"books-banner"},E("img",{src:"/static/images/banner.jpg",alt:"banner"})),E("div",{className:"books"},E("div",{className:"books-left"},E("div",{className:"left-home-order"},E("span",{onClick:function(){return e.changeActive("hot")},className:k()({active:"hot"===this.state.active})},"\u63a8\u8350\u4e66\u7c4d"),E("i",{className:"line"}),E("span",{onClick:function(){return e.changeActive("new")},className:k()({active:"new"===this.state.active})},"\u6211\u8d2d\u4e70\u7684\u4e66\u7c4d")),E("ul",{className:"books-list"},t.map(function(e){return E(g.a,{href:"/book/".concat(e.id)},E("li",{className:"books-item",key:O()()},E("div",{className:"books-item-left"},E("img",{src:"data:image/jpeg;base64,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",alt:""})),E("div",{className:"books-item-right"},E("div",{className:"books-item-name"},"\u6211\u672a\u5b8c\u6210\u7684\u95ee\u9898"),E("div",{className:"books-item-desc"},"\u901a\u8fc7\u5b9e\u8df5\u5feb\u901f\u4e0a\u624b SwiftUI \u53ca Combine \u54cd\u5e94\u5f0f\u7f16\u7a0b\u6846\u67b6\uff0c\u638c\u63e1\u4e0b\u4e00\u4ee3\u5ba2\u6237\u7aef UI \u5f00\u53d1\u6280\u672f\u3002 WWDC 2019 \u4e0a Apple \u516c\u5e03\u4e86\u58f0\u660e\u5f0f\u5168\u65b0\u754c\u9762\u6846\u67b6 SwiftUI\uff0c\u4ee5\u53ca\u914d\u5957\u7684\u54cd\u5e94\u5f0f\u7f16\u7a0b\u6846\u67b6 Combine\u3002\u5bf9\u4e8e Apple \u5e73\u53f0\u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u6b21\u5168\u65b0\u7684\u8f6c\u53d8\u548c\u6311\u6218\u3002\u672c\u4e66\u901a\u8fc7\u51e0\u4e2a\u5177\u4f53\u7684\u5b9e\u6218\u4f8b\u5b50\uff0c\u7531\u6d45\u5165\u6df1\u4ecb\u7ecd\u4e86 SwiftUI \u548c Combine \u6846\u67b6\u7684\u4f7f\u7528\u65b9\u5f0f\u53ca\u6838\u5fc3\u601d\u60f3\uff0c\u5e2e\u52a9\u60a8\u987a\u5229\u6b65\u5165\u4ee4\u4eba\u6fc0\u52a8\u7684 Apple \u5f00\u53d1\u65b0\u65f6\u4ee3\u3002"),E("div",{className:"books-item-avatar"},E(c.a,{size:20,src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),E("span",null," \u90ed\u5bcc\u57ce")),E("div",{className:"books-item-read"},E(s.a,{type:"danger",shape:"round"},"\u9605\u8bfb")),E("div",{className:"books-item-price"},E("span",null,"\xa5 19.9"),E("span",null,"14 \u7ae0\u8282 \xb7 222 \u4eba\u8d2d\u4e70")))))}))))))}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=e.sent,n=t.data,e.abrupt("return",{shows:n.map(function(e){return e.show})});case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(v.Component);t.default=R},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),i=n("UnBK"),s=n("SntB");function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=u},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(a)}),e.exports=s}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("eVuF"),o=n.n(r);function a(e,t,n,r,a,i,s){try{var u=e[i](s),c=u.value}catch(f){return void n(f)}u.done?t(c):o.a.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new o.a(function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)})}}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr"),s=n("2SVd"),u=n("5oMp");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},pWf2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=s(n("TSYQ")),a=s(n("Pbn2")),i=n("vgIT");function s(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,h(t).apply(this,arguments))).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,n=e.avatarNode.offsetWidth;0===t||0===n||e.lastChildrenWidth===t&&e.lastNodeWidth===n||(e.lastChildrenWidth=t,e.lastNodeWidth=n,e.setState({scale:n-8<t?(n-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var n,i,s=t.getPrefixCls,u=e.props,c=u.prefixCls,l=u.shape,d=u.size,h=u.src,A=u.srcSet,v=u.icon,y=u.className,b=u.alt,g=m(u,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),x=e.state,w=x.isImgExist,S=x.scale,T=(x.mounted,s("avatar",c)),k=(0,o.default)((p(n={},"".concat(T,"-lg"),"large"===d),p(n,"".concat(T,"-sm"),"small"===d),n)),N=(0,o.default)(T,y,k,(p(i={},"".concat(T,"-").concat(l),l),p(i,"".concat(T,"-image"),h&&w),p(i,"".concat(T,"-icon"),v),i)),O="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px"),fontSize:v?d/2:18}:{},E=e.props.children;if(h&&w)E=r.createElement("img",{src:h,srcSet:A,onError:e.handleImgLoadError,alt:b});else if(v)E=r.createElement(a.default,{type:v});else{if(e.avatarChildren||1!==S){var R="scale(".concat(S,") translateX(-50%)"),j={msTransform:R,WebkitTransform:R,transform:R},U="number"===typeof d?{lineHeight:"".concat(d,"px")}:{};E=r.createElement("span",{className:"".concat(T,"-string"),ref:function(t){return e.avatarChildren=t},style:f(f({},U),j)},E)}else{E=r.createElement("span",{className:"".concat(T,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},E)}}return r.createElement("span",f({},g,{style:f(f({},O),g.style),className:N,ref:function(t){return e.avatarNode=t}}),E)},e}var n,s,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r.Component),n=t,(s=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return r.createElement(i.ConfigConsumer,null,this.renderAvatar)}}])&&l(n.prototype,s),u&&l(n,u),t}();t.default=v,v.defaultProps={shape:"circle",size:"default"}},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),i=n("w0Vi"),s=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+h)}if(l.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,c,r),l=null}},l.onabort=function(){l&&(c(u("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(u("Network Error",e,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var A=n("eqyj"),m=(e.withCredentials||s(e.url))&&e.xsrfCookieName?A.read(e.xsrfCookieName):void 0;m&&(p[e.xsrfHeaderName]=m)}if("setRequestHeader"in l&&r.forEach(p,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"===typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),c(e),l=null)}),void 0===f&&(f=null),l.send(f)})}},u47H:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books",function(){return n("5AOK")}])},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=n("x86X"),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function s(e){return null!==e&&"object"===typeof e}function u(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:s,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("SntB");function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var u=s(n("JEQr"));u.Axios=a,u.create=function(e){return s(i(u.defaults,e))},u.Cancel=n("endd"),u.CancelToken=n("jfS+"),u.isCancel=n("Lmem"),u.all=function(e){return Promise.all(e)},u.spread=n("DfZB"),e.exports=u,e.exports.default=u}},[["u47H",1,0]]]);