(function(e){function t(t){for(var a,i,c=t[0],o=t[1],d=t[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79df");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("a-layout",[s("a-layout-content",[s("router-view")],1),s("a-layout-footer",{staticClass:"footer",staticStyle:{"background-color":"transparent",padding:"0.2rem"}},[s("a",{attrs:{href:"https://github.com/litterGuy/pp-tracking-demo"}},[e._v("PP-Tracking-车辆追踪（https://github.com/litterGuy/pp-tracking-demo）")])])],1)],1)},r=[],i=(s("034f"),s("2877")),c={},o=Object(i["a"])(c,n,r,!1,null,null,null),d=o.exports,f=s("8c4f"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("a-row",[s("a-col",{attrs:{lg:10,md:10,sm:9}},[s("div",{staticClass:"left-wrapper"},[s("div",{staticClass:"upimg-dragger"},[s("a-upload-dragger",{attrs:{name:"file",action:"/tools/ocr_text/",accept:".mp4, .mkv",beforeUpload:e.beforeUpload,listType:"picture",showUploadList:!1},on:{change:e.handleChange}},[s("p",[e._v("点击、拖动")])])],1),s("div",{staticClass:"up-img-preview"},[s("video",{attrs:{src:e.upImage,controls:"controls",width:"500",height:"400",alt:"预览视频",hidden:e.previewImgHidden}})])])]),s("a-col",{attrs:{lg:3,md:4,sm:6}},[s("div",{staticClass:"split"},[s("div",{staticClass:"divider"}),s("div",{staticClass:"btn-group"},[s("a-button",{attrs:{loading:e.isDetecting},on:{click:e.handleUpload}},[e._v("识别")])],1)])]),s("a-col",{attrs:{lg:11,md:10,sm:9}},[s("div",{staticClass:"right-wrapper"},[s("div",{staticClass:"detected-img",attrs:{hidden:e.hiddenDetectedImg}},[s("a-divider",{attrs:{orientation:"left"}},[e._v("检测预览")]),s("img",{attrs:{src:e.detectedImg,alt:"检测结果图片"}})],1),s("div",{staticClass:"ocr-raw",attrs:{hidden:e.hiddenProcess}},[s("a-divider",{attrs:{orientation:"left"}},[e._v("识别进度")]),s("a-progress",{attrs:{percent:e.trackProgress,status:"active"}})],1),s("div",{staticClass:"ocr-text",attrs:{hidden:e.hiddenCarNum}},[s("a-divider",{attrs:{orientation:"left"}},[e._v("识别车辆数")]),s("a-alert",{attrs:{message:e.trackNums,type:"success"}})],1),s("div",{staticClass:"ocr-text",attrs:{hidden:e.hiddenCongested}},[s("a-divider",{attrs:{orientation:"left"}},[e._v("是否拥堵")]),s("a-alert",{attrs:{message:e.trackCongested,type:"success"}})],1)])])],1)],1)},u=[],b=(s("4160"),s("b0c0"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("2b3d"),s("53ca")),h=s("f23d"),j=s("bc3a");function p(e){var t=null;return void 0!=window.createObjectURL?t=window.createObjectURL(e):void 0!=window.URL?t=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t}a["a"].use(h["a"]);var m={name:"Index",data:function(){return{websock:null,upImage:"",fileList:[],detectedImg:"",trackProgress:0,trackNums:"",trackCongested:"",isDetecting:!1,uploading:!1,previewImgHidden:!0,hiddenDetectedImg:!0,hiddenProcess:!0,hiddenCarNum:!0,hiddenCongested:!0}},created:function(){this.initWebSocket()},destroyed:function(){this.websock.close()},methods:{handleChange:function(e){var t=e.file.status;"uploading"!==t&&(this.$data.fileList=[e.file],this.$data.upImage=p(e.file),this.$data.previewImgHidden=!1,console.log("success")),"done"===t?(console.log("done"),this.$message.success("".concat(e.file.name," file uploaded successfully."))):"error"===t&&(this.$message.error("".concat(e.file.name," file upload failed.")),console.log("error"))},beforeUpload:function(e){return this.fileList=[e],!1},handleUpload:function(){if(this.fileList.length<1)this.$message.warning("还没有选择视频");else{var e=new FormData;this.fileList.forEach((function(t){e.append("file",t)})),this.isDetecting=!0,this.uploading=!0;var t=this;j({url:"/api/tracking/",method:"post",headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","X-Requested-With":"XMLHttpRequest"},transformRequest:{},data:e}).then((function(e){t.$message.success("成功! 耗时："+e.data["data"]["speed_time"]+" 秒"),t.$data.uploading=!1})).catch((function(e){var s=e.response["msg"]||e.message;t.$message.error("错误："+s),t.$data.hiddenDetectedImg=!0,t.$data.hiddenProcess=!0,t.$data.hiddenCarNum=!0}))}},initWebSocket:function(){var e="ws://"+location.host+"/ws";this.websock=new WebSocket(e),this.websock.onmessage=this.websocketonmessage,this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onclose=this.websocketclose},websocketonopen:function(){var e={test:"12345"};this.websocketsend(JSON.stringify(e))},websocketonerror:function(){this.initWebSocket()},websocketonmessage:function(e){if(this.isJsonString(e.data)){var t=JSON.parse(e.data);if(this.hiddenDetectedImg=!1,this.hiddenProcess=!1,this.hiddenCarNum=!1,this.hiddenCongested=!1,"end"in t)return this.$data.trackProgress=100,void(this.isDetecting=!1);if("progressing"in t)this.$data.trackProgress=(t["frame_id"]+1)/t["frame_count"]*100;else{this.$data.detectedImg=t["image_base64"],this.$data.trackProgress=(t["frame_id"]+1)/t["frame_count"]*100,this.$data.trackNums=t["id_set"].length;var s="顺畅";1==t["status"]&&(s="拥堵"),this.$data.trackCongested=s}}},websocketsend:function(e){this.websock.send(e)},websocketclose:function(e){console.log("断开连接",e)},isJsonString:function(e){try{if("object"==Object(b["a"])(JSON.parse(e)))return!0}catch(t){}return!1}},watch:{fileList:function(e,t){e.length<=0&&(this.hiddenDetectedImg=!0,this.hiddenProcess=!0,this.hiddenCarNum=!0,this.hiddenCongested=!0)}}},g=m,v=(s("8fc1"),Object(i["a"])(g,l,u,!1,null,null,null)),w=v.exports;a["a"].use(f["a"]);var k=[{path:"/",name:"Index",component:w}],y=new f["a"]({mode:"history",base:"/",routes:k}),C=y,O=s("5efb"),_=s("98c5"),P=s("b558"),z=s("9a63"),$=s("e32c"),I=s("0c63"),S=s("a79d"),U=s("39ab"),x=(s("202f"),s("bc3a")),L=s.n(x),T=s("998c"),N=s.n(T);a["a"].use(N.a),a["a"].use(O["a"]),a["a"].use(_["a"]),a["a"].use(P["a"]),a["a"].use(z["a"]),a["a"].use($["a"]),a["a"].use(I["a"]),a["a"].use(S["a"]),a["a"].use(U["a"]),a["a"].config.productionTip=!1,L.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",L.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",L.a.defaults.transformRequest=[function(e){var t="";for(var s in e)t+=encodeURIComponent(s)+"="+encodeURIComponent(e[s])+"&";return t}],new a["a"]({router:C,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,s){},"8fc1":function(e,t,s){"use strict";var a=s("9272"),n=s.n(a);n.a},9272:function(e,t,s){}});
//# sourceMappingURL=app.c30ab3c0.js.map