(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325f3f68"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),a=r("da84"),o=r("c65b"),i=r("e330"),c=r("1626"),s=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=a.Error,f=i(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return f(this,t);var r=o(e,this,t);if(null!==r&&!s(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1456:function(t,e,r){},1602:function(t,e,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};e["a"]={getUser:function(t){return n["b"].get("/api/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})},getUserTweets:function(t){return n["b"].get("/api/users/".concat(t,"/tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserReplies:function(t){return n["b"].get("/api/users/".concat(t,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserLikes:function(t){return n["b"].get("/api/users/".concat(t,"/likes"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserFollowers:function(t){return n["b"].get("/api/users/".concat(t,"/followers"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserFollowings:function(t){return n["b"].get("/api/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(a())}})},addLike:function(t){var e=t.TweetId;return n["b"].post("/api/tweets/".concat(e,"/like"),null,{headers:{Authorization:"Bearer ".concat(a())}})},unLike:function(t){var e=t.TweetId;return n["b"].post("/api/tweets/".concat(e,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(a())}})},getTop:function(){return n["b"].get("/api/users/top10",{headers:{Authorization:"Bearer ".concat(a())}})},getFollowing:function(t){return n["b"].get("/api/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(a())}})}}},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}r("d9e2");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||o(t)||i(t)||c()}},"477d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.tabs,(function(e){return r("li",{key:e.id,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)},a=[],o=(r("a9e3"),{props:{userId:{type:Number,required:!0}},data:function(){return{tabs:[{id:1,title:"跟隨者",path:"/user/".concat(this.userId,"/Follower")},{id:2,title:"正在跟隨",path:"/user/".concat(this.userId,"/Following")}]}}}),i=o,c=(r("917a"),r("2877")),s=Object(c["a"])(i,n,a,!1,null,"1d4bb378",null);e["a"]=s.exports},"4df4":function(t,e,r){"use strict";var n=r("da84"),a=r("0366"),o=r("c65b"),i=r("7b0b"),c=r("9bdd"),s=r("e95a"),u=r("68ee"),l=r("07fa"),f=r("8418"),d=r("9a1f"),p=r("35a1"),v=n.Array;t.exports=function(t){var e=i(t),r=u(this),n=arguments.length,h=n>1?arguments[1]:void 0,b=void 0!==h;b&&(h=a(h,n>2?arguments[2]:void 0));var g,w,A,m,x,y,I=p(e),T=0;if(!I||this==v&&s(I))for(g=l(e),w=r?new this(g):v(g);g>T;T++)y=b?h(e[T],T):e[T],f(w,T,y);else for(m=d(e,I),x=m.next,w=r?new this:[];!(A=o(x,m)).done;T++)y=b?c(m,h,[A.value,T],!0):A.value,f(w,T,y);return w.length=T,w}},6043:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},"7e59":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"followTop"},[t._m(0),t._l(t.tops,(function(e){return r("div",{key:e.is,staticClass:"followTop-wrap"},[r("div",{staticClass:"followTop-card"},[r("router-link",{staticClass:"followTop-avatar",attrs:{to:{name:"SelfPage",params:{id:e.id}}}},[r("img",{attrs:{src:t._f("emptyAvatar")(e.avatar),alt:""}})]),r("router-link",{staticClass:"followTop-name-wrap",attrs:{to:{name:"SelfPage",params:{id:e.id}}}},[r("p",{staticClass:"followTop-name"},[r("b",[t._v(t._s(e.name))])]),r("p",{staticClass:"fz14 followTop-account"},[t._v("@"+t._s(e.account))])]),e.id==t.testId?r("div",{staticClass:"followTop-btn-wrap"},[r("div",{staticClass:"btn active followTop-btn special-you"},[t._v("你很受歡迎")])]):e.isFollowed?r("div",{staticClass:"followTop-btn-wrap"},[r("div",{staticClass:"btn active followTop-btn",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.unFollow(e.id)}}},[t._v(" 正在跟隨 ")])]):r("div",{staticClass:"followTop-btn-wrap"},[r("div",{staticClass:"btn followTop-btn",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.addFollow(e.id)}}},[t._v(" 跟隨 ")])])],1)])}))],2)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"followTop-title"},[r("h4",[t._v("跟隨誰")])])}],o=r("5530"),i=r("1da1"),c=(r("d81d"),r("7db0"),r("d3b7"),r("96cf"),r("1602")),s=r("b025"),u=r("2fa3"),l=r("2708"),f=r("2f62"),d={data:function(){return{tops:{},testId:-1}},methods:{featchTop:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getTop();case 3:r=e.sent,n=r.data,t.tops=n,t.testId=t.currentUser.id,console.log("this.tops",t.tops),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法取得Tops資料，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addFollow:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s["a"].addFollow({id:t});case 3:e.tops=e.tops.map((function(e){return e.id===t?Object(o["a"])(Object(o["a"])({},e),{},{isFollowed:!0}):e})),n=e.tops.find((function(e){return e.id===t})),console.log(n),e.$emit("addFollow-From-followTop",n),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),u["a"].fire({icon:"error",title:"無法follow此人，請稍後再試"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},unFollow:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s["a"].unFollow({followingId:t});case 3:e.tops=e.tops.map((function(e){return e.id===t?Object(o["a"])(Object(o["a"])({},e),{},{isFollowed:!1}):e})),n=e.tops.find((function(e){return e.id===t})),console.log(n),e.$emit("unFollow-From-followTop",n),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),u["a"].fire({icon:"error",title:"無法unFollow此人，請稍後再試"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},computed:Object(o["a"])({},Object(f["b"])(["currentUser"])),created:function(){this.featchTop()},mixins:[l["a"]]},p=d,v=(r("bcaa"),r("9206"),r("2877")),h=Object(v["a"])(p,n,a,!1,null,"7412bf97",null);e["a"]=h.exports},"8e6e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-title"},[n("img",{attrs:{src:r("6043"),alt:""},on:{click:function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"user-name"},[n("h5",[t._v(t._s(t.userName))]),n("p",[t._v(t._s(t.tweetNum)+"推文")])])])},a=[],o=(r("a9e3"),{props:{userName:{type:String,required:!0},tweetNum:{type:Number,reqired:!0}}}),i=o,c=(r("a65e"),r("2877")),s=Object(c["a"])(i,n,a,!1,null,"34594ff6",null);e["a"]=s.exports},"917a":function(t,e,r){"use strict";r("cd1d")},9206:function(t,e,r){"use strict";r("1456")},9263:function(t,e,r){"use strict";var n=r("c65b"),a=r("e330"),o=r("577e"),i=r("ad6d"),c=r("9f7f"),s=r("5692"),u=r("7c73"),l=r("69f3").get,f=r("fce3"),d=r("107c"),p=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,h=v,b=a("".charAt),g=a("".indexOf),w=a("".replace),A=a("".slice),m=function(){var t=/a/,e=/b*/g;return n(v,t,"a"),n(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),x=c.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],I=m||y||x||f||d;I&&(h=function(t){var e,r,a,c,s,f,d,I=this,T=l(I),k=o(t),C=T.raw;if(C)return C.lastIndex=I.lastIndex,e=n(h,C,k),I.lastIndex=C.lastIndex,e;var E=T.groups,_=x&&I.sticky,R=n(i,I),B=I.source,F=0,O=k;if(_&&(R=w(R,"y",""),-1===g(R,"g")&&(R+="g"),O=A(k,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==b(k,I.lastIndex-1))&&(B="(?: "+B+")",O=" "+O,F++),r=new RegExp("^(?:"+B+")",R)),y&&(r=new RegExp("^"+B+"$(?!\\s)",R)),m&&(a=I.lastIndex),c=n(v,_?r:I,O),_?c?(c.input=A(c.input,F),c[0]=A(c[0],F),c.index=I.lastIndex,I.lastIndex+=c[0].length):I.lastIndex=0:m&&c&&(I.lastIndex=I.global?c.index+c[0].length:a),y&&c&&c.length>1&&n(p,c[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&E)for(c.groups=f=u(null),s=0;s<E.length;s++)d=E[s],f[d[0]]=c[d[1]];return c}),t.exports=h},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){a(t,"throw",i)}}},"9f7f":function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=i||n((function(){return!o("a","y").sticky})),s=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:i}},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},a65e:function(t,e,r){"use strict";r("eeb7")},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b025:function(t,e,r){"use strict";var n=r("2fa3"),a=function(){return localStorage.getItem("token")};e["a"]={addFollow:function(t){var e=t.id;return n["b"].post("/api/followships",{id:e},{headers:{Authorization:"Bearer ".concat(a())}})},unFollow:function(t){var e=t.followingId;return n["b"].delete("/api/followships/".concat(e),{headers:{Authorization:"Bearer ".concat(a())}})}}},bcaa:function(t,e,r){"use strict";r("e0aa")},cd1d:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e0aa:function(t,e,r){},eeb7:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("e8b5"),i=r("68ee"),c=r("861d"),s=r("23cb"),u=r("07fa"),l=r("fc6a"),f=r("8418"),d=r("b622"),p=r("1dde"),v=r("f36a"),h=p("slice"),b=d("species"),g=a.Array,w=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,n,a,d=l(this),p=u(d),h=s(t,p),A=s(void 0===e?p:e,p);if(o(d)&&(r=d.constructor,i(r)&&(r===g||o(r.prototype))?r=void 0:c(r)&&(r=r[b],null===r&&(r=void 0)),r===g||void 0===r))return v(d,h,A);for(n=new(void 0===r?g:r)(w(A-h,0)),a=0;h<A;h++,a++)h in d&&f(n,a,d[h]);return n.length=a,n}})},fce3:function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-325f3f68.fa273ba9.js.map