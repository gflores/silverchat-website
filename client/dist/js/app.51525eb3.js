(function(e){function s(s){for(var n,c,f=s[0],o=s[1],j=s[2],i=0,b=[];i<f.length;i++)c=f[i],a[c]&&b.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(s);while(b.length)b.shift()();return r.push.apply(r,j||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],n=!0,f=1;f<t.length;f++){var o=t[f];0!==a[o]&&(n=!1)}n&&(r.splice(s--,1),e=c(c.s=t[0]))}return e}var n={},a={app:0},r=[];function c(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)c.d(t,n,function(s){return e[s]}.bind(null,n));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],o=f.push.bind(f);f.push=s,f=f.slice();for(var j=0;j<f.length;j++)s(f[j]);var d=o;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},4678:function(e,s,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=r(e);return t(s)}function r(e){var s=n[e];if(!(s+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("router-view")},r=[],c=(t("5c0b"),t("2877")),f={},o=Object(c["a"])(f,a,r,!1,null,null,null),j=o.exports,d=t("8c4f"),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("router-link",{attrs:{to:"/"}},[e._v("\n    Home\n  ")]),t(e.page,{tag:"component"})],1)},b=[],l={props:["page"],data:function(){return{show:!0}},methods:{}},u=l,m=Object(c["a"])(u,i,b,!1,null,null,null),p=(m.exports,function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)}),v=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[t("header",[t("img",{staticClass:"logo",attrs:{src:"images/logo.png"}})]),t("div",{staticClass:"flex"},[t("section",{staticClass:"s1"},[t("div",{staticClass:"title"},[e._v("Speak and sell "),t("br"),e._v("to your traffic")]),t("div",{staticClass:"subtitle"},[e._v("Direct voice or video calls from anyone visiting your website.")]),t("div",{staticClass:"direct-call"}),t("div",{staticClass:"fine-text"},[e._v("Currently in closed beta")])]),t("section",{staticClass:"s2"},[t("div",{staticClass:"coming-soon"},[e._v("Coming Soon...")])])])])}],h={},g=h,y=(t("f331"),Object(c["a"])(g,p,v,!1,null,"1385cab0",null)),k=y.exports;n["a"].use(d["a"]);var _=new d["a"]({mode:"history",base:"/",routes:[{path:"/",component:k}]}),w=t("c1df"),z=t.n(w),x=(t("8ded"),{});n["a"].mixin({data:function(){return{store:x}},methods:{},computed:{}}),n["a"].mixin({methods:{moment:z.a}}),n["a"].config.productionTip=!1,new n["a"]({router:_,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var n=t("5e27"),a=t.n(n);a.a},"5e27":function(e,s,t){},"82b8":function(e,s,t){},f331:function(e,s,t){"use strict";var n=t("82b8"),a=t.n(n);a.a}});
//# sourceMappingURL=app.51525eb3.js.map