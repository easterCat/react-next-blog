(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2qu3":function(e,t,n){"use strict";var r=n("p0XB"),i=n("/HRN"),s=n("WaGi"),o=n("ZDA2"),l=n("/+P4"),a=n("N9n2"),u=n("XXOK"),h=n("UXZV"),c=n("eVuF"),p=n("pLtp"),d=n("hfKm"),f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};d(t,"__esModule",{value:!0});var g=f(n("q1tI")),m=n("jwwS"),b=[],k=[],y=!1;function _(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function x(e){var t={loading:!1,loaded:{},error:null},n=[];try{p(e).forEach(function(r){var i=_(e[r]);i.loading?t.loading=!0:(t.loaded[r]=i.loaded,t.error=i.error),n.push(i.promise),i.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(r){t.error=r}return t.promise=c.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function w(e,t){return g.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function v(e,t){var n,c=h({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},t),p=null;function d(){return p||(p=e(c.loader)),p.promise}if(!y&&"function"===typeof c.webpack){var f=c.webpack();k.push(function(e){var t=!0,n=!1,r=void 0;try{for(var i,s=u(f);!(t=(i=s.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return d()}}catch(l){n=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}})}return(n=function(t){function n(t){var r;return i(this,n),(r=o(this,l(n).call(this,t))).retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),p=e(c.loader),r._loadModule()},d(),r.state={error:p.error,pastDelay:!1,timedOut:!1,loading:p.loading,loaded:p.loaded},r}return a(n,t),s(n,[{key:"UNSAFE_componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&r(c.modules)&&c.modules.forEach(function(t){e.context(t)}),p.loading){"number"===typeof c.delay&&(0===c.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},c.delay)),"number"===typeof c.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},c.timeout));var t=function(){e._mounted&&(e.setState({error:p.error,loaded:p.loaded,loading:p.loading}),e._clearTimeouts())};p.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?g.default.createElement(c.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?c.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return d()}}]),n}(g.default.Component)).contextType=m.LoadableContext,n}function S(e){return v(_,e)}function $(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return c.all(n).then(function(){if(e.length)return $(e,t)})}S.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(x,e)},S.preloadAll=function(){return new c(function(e,t){$(b).then(e,t)})},S.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new c(function(t){var n=function(){return y=!0,t()};$(k,e).then(n,n)})},window.__NEXT_PRELOADREADY=S.preloadReady,t.default=S},"80FK":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),s=n("MI3g"),o=n("a7VT"),l=n("Tit0"),a=n("q1tI"),u=n.n(a),h=n("AT/M"),c=n("3Hq7"),p=n("a6RD"),d=n.n(p),f=n("DlQD"),g=n.n(f),m=u.a.createElement,b=d()(function(){return n.e(16).then(n.t.bind(null,"xj1T",7))},{loadableGenerated:{webpack:function(){return["xj1T"]},modules:["react-highlight"]}});g.a&&g.a.setOptions({gfm:!0,tables:!0,breaks:!0});var k=function(e,t){return function(n){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).renderMarkdown=t.renderMarkdown.bind(Object(h.a)(t)),t}return Object(l.a)(a,n),Object(i.a)(a,[{key:"renderMarkdown",value:function(e){return m(c.a,null,m("h1",null,t.title),m("h3",null,"\u5f53\u524did=>",e),m("div",{className:"markdown"},1===e||"1"===e?m(b,{innerHTML:!0},g()(t.content)):m("div",{dangerouslySetInnerHTML:{__html:g()(t.content)}})))}},{key:"render",value:function(){return m(e,{renderMarkdown:this.renderMarkdown})}}]),a}(u.a.Component)},y=n("nOHt"),_=u.a.createElement,x=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this,e))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return _("div",null,this.props.renderMarkdown(this.props.router.query.id))}}]),t}(a.Component);x=k(x=Object(y.withRouter)(x),{title:"Deploy apps with ZEIT now",content:"\n          Deploying apps to ZEIT now is pretty easy.\n          Simply run the following command from your app root:\n          ~~~bash\n          npm i -g now # one time command\n          now\n          ~~~\n        "});t.default=x},DlQD:function(e,t,n){(function(t){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:m,table:m,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=p(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=p(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=p(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=p(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=p(n._paragraph).replace("hr",n.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",n._tag).getRegex(),n.blockquote=p(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:m,paragraph:p(n.normal._paragraph).replace("hr",n.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",n.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,i,s,o,l,a,u,c,p,d,f,g,m,b,_,x;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){var w=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),w&&"paragraph"===w.type?w.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:y(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(a={type:"table",header:k(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),f=0;f<a.align.length;f++)/^ *-+: *$/.test(a.align[f])?a.align[f]="right":/^ *:-+: *$/.test(a.align[f])?a.align[f]="center":/^ *:-+ *$/.test(a.align[f])?a.align[f]="left":a.align[f]=null;for(f=0;f<a.cells.length;f++)a.cells[f]=k(a.cells[f],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),u={type:"list_start",ordered:b=(o=s[2]).length>1,start:b?+o:"",loose:!1},this.tokens.push(u),c=[],r=!1,m=(s=s[0].match(this.rules.item)).length,f=0;f<m;f++)d=(a=s[f]).length,~(a=a.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(d-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+d+"}","gm"),"")),f!==m-1&&(l=n.bullet.exec(s[f+1])[0],(o.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==o)&&(e=s.slice(f+1).join("\n")+e,f=m-1)),i=r||/\n\n(?!\s*$)/.test(a),f!==m-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),i&&(u.loose=!0),x=void 0,(_=/^\[[ xX]\] /.test(a))&&(x=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),p={type:"list_item_start",task:_,checked:x,loose:i},c.push(p),this.tokens.push(p),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(m=c.length,f=0;f<m;f++)c[f].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):h(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),g=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(a={type:"table",header:k(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),f=0;f<a.align.length;f++)/^ *-+: *$/.test(a.align[f])?a.align[f]="right":/^ *:-+: *$/.test(a.align[f])?a.align[f]="center":/^ *:-+ *$/.test(a.align[f])?a.align[f]="left":a.align[f]=null;for(f=0;f<a.cells.length;f++)a.cells[f]=k(a.cells[f].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var i={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function s(e,t){if(this.options=t||w.defaults,this.links=e,this.rules=i.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}function o(e){this.options=e||w.defaults}function l(){}function a(e){this.tokens=[],this.token=null,this.options=e||w.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new u}function u(){this.seen={}}function h(e,t){if(t){if(h.escapeTest.test(e))return e.replace(h.escapeReplace,function(e){return h.replacements[e]})}else if(h.escapeTestNoEncode.test(e))return e.replace(h.escapeReplaceNoEncode,function(e){return h.replacements[e]});return e}function c(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function d(e,t,n){if(e){try{var r=decodeURIComponent(c(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!g.test(n)&&(n=function(e,t){f[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=y(e,"/",!0));return e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}i._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",i.em=p(i.em).replace(/punctuation/g,i._punctuation).getRegex(),i._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,i._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,i._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,i.autolink=p(i.autolink).replace("scheme",i._scheme).replace("email",i._email).getRegex(),i._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,i.tag=p(i.tag).replace("comment",n._comment).replace("attribute",i._attribute).getRegex(),i._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,i._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,i._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,i.link=p(i.link).replace("label",i._label).replace("href",i._href).replace("title",i._title).getRegex(),i.reflink=p(i.reflink).replace("label",i._label).getRegex(),i.normal=b({},i),i.pedantic=b({},i.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",i._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",i._label).getRegex()}),i.gfm=b({},i.normal,{escape:p(i.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),i.gfm.url=p(i.gfm.url,"i").replace("email",i.gfm._extended_email).getRegex(),i.breaks=b({},i.gfm,{br:p(i.br).replace("{2,}","*").getRegex(),text:p(i.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),s.rules=i,s.output=function(e,t,n){return new s(t,n).output(e)},s.prototype.output=function(e){for(var t,n,r,i,o,l,a="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),a+=h(o[1]);else if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),e=e.substring(o[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):h(o[0]):o[0];else if(o=this.rules.link.exec(e)){var u=_(o[2],"()");if(u>-1){var c=4+o[1].length+u;o[2]=o[2].substring(0,u),o[0]=o[0].substring(0,c).trim(),o[3]=""}e=e.substring(o[0].length),this.inLink=!0,r=o[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],i=t[3]):i="":i=o[3]?o[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(o,{href:s.escapes(r),title:s.escapes(i)}),this.inLink=!1}else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),a+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),a+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),a+=this.renderer.codespan(h(o[2].trim(),!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),a+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),a+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),r="@"===o[2]?"mailto:"+(n=h(this.mangle(o[1]))):n=h(o[1]),a+=this.renderer.link(r,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.inRawBlock?a+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):h(o[0]):o[0]):a+=this.renderer.text(h(this.smartypants(o[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===o[2])r="mailto:"+(n=h(o[0]));else{do{l=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(l!==o[0]);n=h(o[0]),r="www."===o[1]?"http://"+n:n}e=e.substring(o[0].length),a+=this.renderer.link(r,null,n)}return a},s.escapes=function(e){return e?e.replace(s.rules._escapes,"$1"):e},s.prototype.outputLink=function(e,t){var n=t.href,r=t.title?h(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,h(e[1]))},s.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e},s.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+h(r,!0)+'">'+(n?e:h(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:h(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+h(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},o.prototype.image=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,n){return""+n},l.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new s(e.links,this.options),this.inlineText=new s(e.links,b({},this.options,{renderer:new l})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop(),this.token},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o,l);case"list_item_start":s="";var a=this.token.loose,u=this.token.checked,h=this.token.task;for(this.token.task&&(s+=this.renderer.checkbox(u));"list_item_end"!==this.next().type;)s+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(s,h,u);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}},u.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},h.escapeTest=/[&<>"']/,h.escapeReplace=/[&<>"']/g,h.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,h.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function b(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function k(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function y(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var i=e.charAt(e.length-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function _(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return-1}function x(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function w(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),x(t=b({},w.defaults,t||{}));var i,s,o=t.highlight,l=0;try{i=r.lex(e,t)}catch(c){return n(c)}s=i.length;var u=function(e){if(e)return t.highlight=o,n(e);var r;try{r=a.parse(i,t)}catch(c){e=c}return t.highlight=o,e?n(e):n(null,r)};if(!o||o.length<3)return u();if(delete t.highlight,!s)return u();for(;l<i.length;l++)!function(e){"code"!==e.type?--s||u():o(e.text,e.lang,function(t,n){return t?u(t):null==n||n===e.text?--s||u():(e.text=n,e.escaped=!0,void(--s||u()))})}(i[l])}else try{return t&&(t=b({},w.defaults,t)),x(t),a.parse(r.lex(e,t),t)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||w.defaults).silent)return"<p>An error occurred:</p><pre>"+h(c.message+"",!0)+"</pre>";throw c}}m.exec=m,w.options=w.setOptions=function(e){return b(w.defaults,e),w},w.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=a,w.parser=a.parse,w.Renderer=o,w.TextRenderer=l,w.Lexer=r,w.lexer=r.lex,w.InlineLexer=s,w.inlineLexer=s.output,w.Slugger=u,w.parse=w,e.exports=w}(this||"undefined"!==typeof window&&window)}).call(this,n("yLpj"))},a6RD:function(e,t,n){"use strict";var r=n("pLtp"),i=n("UXZV"),s=n("eVuF"),o=n("hfKm"),l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var a=l(n("q1tI")),u=l(n("2qu3")),h=!1;function c(e,t){if(delete t.webpack,delete t.modules,!h)return e(t);var n=t.loading;return function(){return a.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=c,t.default=function(e,t){var n=u.default,o={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof s?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=i({},o,e)),o=i({},o,t),"object"===typeof e&&!(e instanceof s)&&(e.render&&(o.render=function(t,n){return e.render(n,t)}),e.modules)){n=u.default.Map;var l={},a=e.modules();r(a).forEach(function(e){var t=a[e];"function"!==typeof t.then?l[e]=t:l[e]=function(){return t.then(function(e){return e.default||e})}}),o.loader=l}if(o.loadableGenerated&&delete(o=i({},o,o.loadableGenerated)).loadableGenerated,"boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,c(n,o);delete o.ssr}return n(o)}},jwwS:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var s=i(n("q1tI"));t.LoadableContext=s.createContext(null)},"vZ+X":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marked/[id]",function(){return n("80FK")}])}},[["vZ+X",1,0]]]);