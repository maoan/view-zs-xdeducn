(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"44adce4a"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="static/css/"+({about:"about"}[t]||t)+"."+{about:"2f0d1cd3"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1309:function(t,e,n){},"51d8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",{staticClass:"page_hd",attrs:{type:"flex",align:"center"}},[n("van-col",[n("img",{staticClass:"avator",attrs:{src:t.avator}})]),n("van-col",{staticClass:"page_cont"},[n("van-row",{attrs:{type:"flex",justify:"space-around"}},[n("van-col",{attrs:{span:"18"}},[n("span",{staticClass:"page_title"},[t._v(" "+t._s(t.ptitle)+" "),n("span",{staticStyle:{"font-size":"14px","margin-left":"3px"}},[t._v(t._s(t.callname))])])]),n("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"6"}},[t.personinfoable?n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.onpushpage}},[t.qrable?n("van-icon",{attrs:{name:"qr",size:"16px"}}):t._e(),t.editable?n("van-icon",{attrs:{name:"records",size:"16px"}}):t._e(),n("van-icon",{attrs:{name:"arrow",size:"16px"}})],1):t._e()])],1),n("span",{staticClass:"page_desc"},[t._v(t._s(t.pdesc))])],1)],1)},r=[],o={name:"page-head",methods:{onpushpage:function(){this.$router.push(this.pushpage)}},props:{avator:String,ptitle:String,pdesc:String,callname:String,personinfoable:Boolean,qrable:Boolean,editable:Boolean,pushpage:String}},s=o,i=(n("8a84"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"27e69f3a",null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("b970"),o=(n("157a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"xdzs-app"}},[n("div",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"page_ft"},[n("div",{staticClass:"footer_text"},[t._v("Copyright © 2019-"+t._s((new Date).getFullYear())+" "),n("a",{staticClass:"text-primary",staticStyle:{"text-decoration":"none"},attrs:{href:"https://zsb.xidian.edu.cn",target:"_blank"}},[t._v("西电招生办")])])])])}),s=[],i=(n("034f"),n("2877")),c={},u=Object(i["a"])(c,o,s,!1,null,null,null),l=u.exports,p=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",{staticClass:"home__title "},[t._v("路由页")]),n("h2",{staticClass:"home__desc"},[t._v("按照用户身份和是否首次登录的情况自动路由到对应的页面。")]),n("van-divider"),n("div",[n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/"}},[t._v("路由页（本页）")])],1),n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/stuFirst"}},[t._v("学生首次登录")])],1),n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/teaFirst"}},[t._v("教师首次登录")])],1),n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/stuMain"}},[t._v("学生主页")])],1),n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/teaMain"}},[t._v("教师主页")])],1),n("div",{staticClass:"home-nav__block"},[n("router-link",{attrs:{to:"/stuinfoList"}},[t._v("考生信息管理")])],1)])],1)},f=[],v=(n("cccb"),{}),h=Object(i["a"])(v,d,f,!1,null,null,null),m=h.exports;a["a"].use(p["a"]);var b=[{path:"/",name:"home",component:m},{path:"/stuFirst",name:"stuFirst",component:function(){return n.e("about").then(n.bind(null,"fb00"))}},{path:"/teaFirst",name:"teaFirst",component:function(){return n.e("about").then(n.bind(null,"db25"))}},{path:"/stuMain",name:"stuMain",component:function(){return n.e("about").then(n.bind(null,"7ae9"))}},{path:"/teaMain",name:"teaMain",component:function(){return n.e("about").then(n.bind(null,"38a6"))}},{path:"/stuinfoList",name:"stuinfoList",component:function(){return n.e("about").then(n.bind(null,"6577"))}},{path:"/zshddetails",name:"zshddetails",component:function(){return n.e("about").then(n.bind(null,"f087"))}}],_=new p["a"]({routes:b}),g=_,y=n("51d8");a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({router:g,pagehead:y["a"],render:function(t){return t(l)}}).$mount("#xdzs-app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},"8a84":function(t,e,n){"use strict";var a=n("1309"),r=n.n(a);r.a},cccb:function(t,e,n){"use strict";var a=n("5ced"),r=n.n(a);r.a}});
//# sourceMappingURL=app.873ddc5d.js.map