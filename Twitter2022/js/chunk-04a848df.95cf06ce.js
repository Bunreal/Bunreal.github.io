(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a848df"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),a=r("da84"),i=r("c65b"),s=r("e330"),o=r("1626"),c=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=a.Error,d=s(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!o(e))return d(this,t);var r=i(e,this,t);if(null!==r&&!c(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"276e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[r("navigation",{attrs:{userId:t.currentUser.id}}),r("div",{staticClass:"main"},[r("userTitle",{attrs:{userName:t.user.name}}),r("navTabsFollow",{attrs:{userId:t.currentUser.id}}),r("div",{staticClass:"tweet-wrap"},t._l(t.followships,(function(e){return r("div",{key:e.id,staticClass:"tweet-card"},[t._m(0,!0),r("div",{staticClass:"tweet-content"},[r("div",{staticClass:"tweet-title"},[r("div",{staticClass:"tweet-name-group"},[r("p",{staticClass:"tweet-name"},[r("b",[t._v(t._s(e.name))])]),r("div",{staticClass:"btn active"},[t._v("正在跟隨")])])]),r("div",{staticClass:"tweet-text"},[r("p",[t._v(" "+t._s(e.introduction)+" ")])])])])})),0)],1),r("followTop")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tweet-avatar"},[n("img",{attrs:{src:r("9c85"),alt:""}})])}],i=r("5530"),s=r("2909"),o=r("1da1"),c=(r("96cf"),r("b0c0"),r("3d01")),u=r("447a"),l=r("8e6e"),d=r("477d"),f=r("2708"),A=r("1602"),p=r("2f62"),v=r("2fa3"),h={name:"selfPageFollower",components:{navigation:c["a"],followTop:u["a"],userTitle:l["a"],navTabsFollow:d["a"]},data:function(){return{user:{name:"",tweetNum:-1},followships:[]}},methods:{fetchUser:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a,i,s,o,c,u,l,d,f,p,v,h,g,w;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A["a"].getUser(t);case 3:n=r.sent,a=n.data.data.user,i=a.id,s=a.account,o=a.name,c=a.email,u=a.role,l=a.introduction,d=a.avatar,f=a.cover,p=a.followingCount,v=a.followerCount,h=a.isFollowing,g=a.createdAt,w=a.updatedAt,e.user={id:i,account:s,name:o,email:c,role:u,introduction:l,avatar:d,cover:f,followingCount:p,followerCount:v,isFollowing:h,createdAt:g,updatedAt:w},r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},fetchUserFollower:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A["a"].getUserFollowers(t);case 3:n=r.sent,e.followships=Object(s["a"])(n.data.data.user),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log("error",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},isThisMe:function(t){this.isMe=this.currentUser.id==t}},computed:Object(i["a"])({},Object(p["b"])(["currentUser"])),created:function(){var t=localStorage.getItem("token");t||(v["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var e=this.$route.params.id;this.fetchUser(e),this.fetchUserFollower(e),this.isThisMe(e)},watch:{"$route.params.id":{handler:function(t){this.fetchUser(t),this.fetchUserFollower(t),this.isThisMe(t)},immediate:!0}},mixins:[f["b"]]},g=h,w=(r("2c4d"),r("a941"),r("2877")),x=Object(w["a"])(g,n,a,!1,null,"8fe02e8a",null);e["default"]=x.exports},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function s(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}r("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||s(t)||o()}},"2c4d":function(t,e,r){"use strict";r("7c60")},"477d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.tabs,(function(e){return r("li",{key:e.id,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)},a=[],i=(r("a9e3"),{props:{userId:{type:Number,required:!0}},data:function(){return{tabs:[{id:1,title:"跟隨者",path:"/user/".concat(this.userId,"/Follower")},{id:2,title:"正在跟隨",path:"/user/".concat(this.userId,"/Following")}]}}}),s=i,o=(r("b9bc"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,"1a4905db",null);e["a"]=c.exports},"4df4":function(t,e,r){"use strict";var n=r("da84"),a=r("0366"),i=r("c65b"),s=r("7b0b"),o=r("9bdd"),c=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),f=r("9a1f"),A=r("35a1"),p=n.Array;t.exports=function(t){var e=s(t),r=u(this),n=arguments.length,v=n>1?arguments[1]:void 0,h=void 0!==v;h&&(v=a(v,n>2?arguments[2]:void 0));var g,w,x,b,m,C,I=A(e),E=0;if(!I||this==p&&c(I))for(g=l(e),w=r?new this(g):p(g);g>E;E++)C=h?v(e[E],E):e[E],d(w,E,C);else for(b=f(e,I),m=b.next,w=r?new this:[];!(x=i(m,b)).done;E++)C=h?o(b,v,[x.value,E],!0):x.value,d(w,E,C);return w.length=E,w}},6043:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},"6abc":function(t,e,r){},"7c60":function(t,e,r){},"890c":function(t,e,r){},"898f":function(t,e,r){},"8e6e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-title"},[n("img",{attrs:{src:r("6043"),alt:""},on:{click:function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"user-name"},[n("h5",[t._v(t._s(t.userName))]),n("p",[t._v(t._s(t.tweetNum)+"推文")])])])},a=[],i=(r("a9e3"),{props:{userName:{type:String,required:!0},tweetNum:{type:Number,reqired:!0}}}),s=i,o=(r("9873"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,"38bde15e",null);e["a"]=c.exports},9263:function(t,e,r){"use strict";var n=r("c65b"),a=r("e330"),i=r("577e"),s=r("ad6d"),o=r("9f7f"),c=r("5692"),u=r("7c73"),l=r("69f3").get,d=r("fce3"),f=r("107c"),A=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,h=a("".charAt),g=a("".indexOf),w=a("".replace),x=a("".slice),b=function(){var t=/a/,e=/b*/g;return n(p,t,"a"),n(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),m=o.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],I=b||C||m||d||f;I&&(v=function(t){var e,r,a,o,c,d,f,I=this,E=l(I),y=i(t),R=E.raw;if(R)return R.lastIndex=I.lastIndex,e=n(v,R,y),I.lastIndex=R.lastIndex,e;var Q=E.groups,U=m&&I.sticky,B=n(s,I),T=I.source,F=0,j=y;if(U&&(B=w(B,"y",""),-1===g(B,"g")&&(B+="g"),j=x(y,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==h(y,I.lastIndex-1))&&(T="(?: "+T+")",j=" "+j,F++),r=new RegExp("^(?:"+T+")",B)),C&&(r=new RegExp("^"+T+"$(?!\\s)",B)),b&&(a=I.lastIndex),o=n(p,U?r:I,j),U?o?(o.input=x(o.input,F),o[0]=x(o[0],F),o.index=I.lastIndex,I.lastIndex+=o[0].length):I.lastIndex=0:b&&o&&(I.lastIndex=I.global?o.index+o[0].length:a),C&&o&&o.length>1&&n(A,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&Q)for(o.groups=d=u(null),c=0;c<Q.length;c++)f=Q[c],d[f[0]]=o[f[1]];return o}),t.exports=v},9873:function(t,e,r){"use strict";r("890c")},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(s){a(t,"throw",s)}}},"9c85":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVhSURBVHgB3VrrUSNHEG4tbyhAzkAZ3PGTAspSBLYj8F0EHBH4iAAuAuMIfI4AuXj9tC4Cbwji/Qb3t7etGg09Oz0rXR3lr2pBrObRX793lgaNCScnJ637+/t2lmVv+M82X83n5+dmo9FoOsPy8urx/S93d3fdTqeT0xjQoBGwv7/fnJ6e3mSB3/GfLaqHnK/PrIRPo5CqReTg4KDNGv2Nvmp+nNhjQtt1CCURYQu0Jicnd5jEz/RtkUzITOT4+Hjz8fHxo+fz3xI577W9tra2ZxlsInJ4eLjDvz7Q98Hu+vr6VmxQJREE89TU1D5/fEvfFz12Nfa0Tj80IEjkFZEQVJLJQrNeGQngbSmTCtUidWOCg5O4rhBntuLi4ljcA7jW0MPDAz09PRFrtrhwrwbUmHlB5Ojo6B1v8DslAALPzs7SzMzMQHALbm9v6fr6uiCXiC0ms+veGNoVdaI0X4sMgNBzc3MFiVEAMrgS0GeLrrh1ZtL9lkmgWrfIAFhhaWmp+O0DLgPXgaZF2yDN6xcu5wPKgDXPzs6s1kFrBPf/RW4MLFJa41/LKiESiAFoFr9D/o85IrgPuNrl5SVZwXt0NjY2usW6crO0RhQaCa74dH5+Xmg0FsTQOIT1XQlrJLoXlf3e18/4kWKNZrM5RIJb8UIwV3i4kQQ/xoIcxvhuMz8/P4ivq6srurm5oVTw2j+gthQSsd+aUi1cwiUBDV5cXAyRwPfLy8tDYxEbuOe7IuZjLqxRh4Qre7Eya/Cn2ATxbVcI3xWqEgCstLCwMHQPJEAAbhna0yDXr8X6VreCEBKgcCdYwhdU07oPCA1XiwF7IcNZgp9dtJVxGmvHBkJIIQE30Bb33S4EVP4YxPoYa1mTPaOTcQBG+yl3cwSln5UmJibMRdFCRJQitScGcMh48JvYQCliyPOaWywuLpIVEA7EQ8B3bo3RCqiy5o+wWys2UBbT8ryk2BRUCecrpYq0AE+tJiIQFAGutQ9ahbasp0GLMwsRHDuZVAl30FwKm1pM721auKi2lhZnxm66afYJjYglEH2E2nYQTHkE8AEi/dgg6WR9pLoVLBGq4PLgpd23wEQEtUODxX/dNZC6q6C5XGhvF2zJ3GyRwAJkgXTHMe0ioWhzY+B184x//G0YSHWBuWhnLA9Mmntp7qbM+wIivdjA0GIxgvgezyiaVpGl/CYS8N3L0pfxWr2MN+lSTWg+LYDwp6enQRLokrVeCu4lc7C+xZJ4PZGVD/A51QAykC+o1InQ8zcShLT6bjPqzkc8JTwx5uCQlZP/sMzwgxuCQuuIAWyKrrjf7794YhRAaL/VRxH0rSLrGuPqL/wuVuAY2CUjtNoBdwARWEIjgMKJR2QtJqAc9Fep/ZpAZB+omE8XcZ7Vjk2UIIXwuEIBL0c/0LglTUP7UEao+Aawxwd17/Fh0CixQNu8YTs2U05BoEUQgi/L+RVIypXabkivZUm3ArwMks9Du/Fx6Z9MyPQ2ChuDTEp1r4IUzTrWKORxv2FXweFwtNIDEpCpZ1EaqrJcALlrDeCF/TlWcLyyQwmoOj0MQdI0UnjqITa77Xv/lZzqyPzWdpcHb1IiYq8VIDBiAFdVoqgCz/nEx6QvzuGCEcmW+Yde14seoMdxsaJ9EUzeeM2FifR60CtlUvH/fxnqom7MjAOhmPBh6guwEDIF1Wwu64AJQPtbFhKAucFBuoN5OfOYGsxRwCQ+c2Zb8d8TVqHWsQUOvrmif5ST8DGii1ZJ3kKlYNR/c8I/2XwoX0u0qB5yPEagi60K5hhGIuICpHCyjwPl8jy5RQ45+Dzfh6B9nBPgEZszYnd1dTWnMeA/QzFJCr4A/G0AAAAASUVORK5CYII="},"9f7f":function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp,s=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),o=s||n((function(){return!i("a","y").sticky})),c=s||n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:s}},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:a})},a941:function(t,e,r){"use strict";r("898f")},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b9bc:function(t,e,r){"use strict";r("6abc")},d28b:function(t,e,r){var n=r("746f");n("iterator")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("e8b5"),s=r("68ee"),o=r("861d"),c=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),A=r("1dde"),p=r("f36a"),v=A("slice"),h=f("species"),g=a.Array,w=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var r,n,a,f=l(this),A=u(f),v=c(t,A),x=c(void 0===e?A:e,A);if(i(f)&&(r=f.constructor,s(r)&&(r===g||i(r.prototype))?r=void 0:o(r)&&(r=r[h],null===r&&(r=void 0)),r===g||void 0===r))return p(f,v,x);for(n=new(void 0===r?g:r)(w(x-v,0)),a=0;v<x;v++,a++)v in f&&d(n,a,f[v]);return n.length=a,n}})},fce3:function(t,e,r){var n=r("d039"),a=r("da84"),i=a.RegExp;t.exports=n((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-04a848df.95cf06ce.js.map