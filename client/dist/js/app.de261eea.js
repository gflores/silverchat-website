(function(e){function s(s){for(var n,r,o=s[0],f=s[1],i=s[2],d=0,j=[];d<o.length;d++)r=o[d],a[r]&&j.push(a[r][0]),a[r]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);l&&l(s);while(j.length)j.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,s=0;s<c.length;s++){for(var t=c[s],n=!0,o=1;o<t.length;o++){var f=t[o];0!==a[f]&&(n=!1)}n&&(c.splice(s--,1),e=r(r.s=t[0]))}return e}var n={},a={app:0},c=[];function r(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)r.d(t,n,function(s){return e[s]}.bind(null,n));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=s,o=o.slice();for(var i=0;i<o.length;i++)s(o[i]);var l=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},4678:function(e,s,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=c(e);return t(s)}function c(e){var s=n[e];if(!(s+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("router-view")},c=[],r=(t("5c0b"),t("2877")),o={},f=Object(r["a"])(o,a,c,!1,null,null,null),i=f.exports,l=t("8c4f"),d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("router-link",{attrs:{to:"/"}},[e._v("\n    Home\n  ")]),t(e.page,{tag:"component"})],1)},j=[],u={props:["page"],data:function(){return{show:!0}},methods:{}},b=u,m=Object(r["a"])(b,d,j,!1,null,null,null),h=(m.exports,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[e._m(0),t("div",{staticClass:"flex"},[t("section",{staticClass:"s1"},[e._m(1),t("div",{staticClass:"subtitle"},[e._v("Instant voice or video calls from anyone visiting your website.")]),e._m(2),0==e.instantCallButtonClicked?t("div",{staticClass:"fine-text"},[e._v("Try instant calling !")]):e._e()]),e._m(3)])])}),p=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",[t("img",{staticClass:"logo",attrs:{src:"images/logo.png"}})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"title"},[e._v("Speak and sell"),t("br"),e._v("to your traffic")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"direct-call"},[t("div",{staticClass:"silverchat-location"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"s2"},[t("div",{staticClass:"coming-soon"},[e._v("Contact:"),t("br"),e._v("+65 8138 3605")])])}],v={data:function(){return{instantCallButtonClicked:!1}},methods:{clickDirectCall:function(){console.log("hello"),this.instantCallButtonClicked=!0}}},g=v,_=(t("71ce"),Object(r["a"])(g,h,p,!1,null,"7a90b89b",null)),y=_.exports;n["a"].use(l["a"]);var k=new l["a"]({mode:"history",base:"/",routes:[{path:"/",component:y}]}),w=t("c1df"),z=t.n(w),C=(t("8ded"),{});n["a"].mixin({data:function(){return{store:C}},methods:{},computed:{icLandingUrl:function(){return Object({NODE_ENV:"production",VUE_APP_SERVER_URL:"https://client.silverchat.co/",BASE_URL:"/"}).VUE_APP_IC_LANDING_URL}}}),n["a"].mixin({methods:{moment:z.a}}),n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var n=t("5e27"),a=t.n(n);a.a},"5e27":function(e,s,t){},"71ce":function(e,s,t){"use strict";var n=t("fd59"),a=t.n(n);a.a},fd59:function(e,s,t){}});
//# sourceMappingURL=app.de261eea.js.map