(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5cHW":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),a=e.n(r),u=e("O40h"),i=e("q1tI"),c=e.n(i),s=e("3Hq7"),o=e("QEfL"),l=c.a.createElement;function f(n){var t=n.item;return l(s.a,null,l("h1",null,t.title),l("p",null,"URL:"," ",l("a",{target:"_blank",href:t.url},t.url)))}f.getInitialProps=function(){var n=Object(u.a)(a.a.mark(function n(t){var e,r,u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,n.next=3,Object(o.a)();case 3:return r=n.sent,n.next=6,r.child("item").child(e.id).once("value");case 6:return u=(u=n.sent).val(),n.abrupt("return",{item:u});case 9:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),t.default=f},HNyQ:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/firebase/[id]",function(){return e("5cHW")}])},O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e("eVuF"),a=e.n(r);function u(n,t,e,r,u,i,c){try{var s=n[i](c),o=s.value}catch(l){return void e(l)}s.done?t(o):a.a.resolve(o).then(r,u)}function i(n){return function(){var t=this,e=arguments;return new a.a(function(r,a){var i=n.apply(t,e);function c(n){u(i,r,a,c,s,"next",n)}function s(n){u(i,r,a,c,s,"throw",n)}c(void 0)})}}},QEfL:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e("ln6h"),a=e.n(r),u=e("O40h");function i(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.t.bind(null,"Wcq6",7));case 2:return t=n.sent,n.next=5,e.e(18).then(e.bind(null,"Zs65"));case 5:try{t.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"})}catch(r){/already exists/.test(r.message)||console.error("Firebase initialization error",r.stack)}return n.abrupt("return",t.database().ref("v0"));case 7:case"end":return n.stop()}},n)}))).apply(this,arguments)}}},[["HNyQ",1,0]]]);