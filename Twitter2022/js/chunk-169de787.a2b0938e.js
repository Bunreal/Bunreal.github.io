(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-169de787"],{a2c3:function(t,e,a){},b6a5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{attrs:{action:""},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._m(0),t._m(1),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"account"}},[t._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{id:"account",name:"account",type:"text",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),a("div",{staticClass:"input-bottomline"})]),a("div",{staticClass:"form-label-group"},[a("label",{attrs:{for:"password"}},[t._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"請輸入密碼",required:"",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"input-bottomline"})]),t._m(2),a("nav",[a("router-link",{attrs:{to:"/"}},[a("p",{staticClass:"login-btn"},[t._v("前台登入")])])],1)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("e5ce"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h3",[t._v("後台登入")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"confirm-btn",attrs:{type:"submit"}},[a("p",[t._v("登入")])])}],o=a("1da1"),s=(a("96cf"),a("2fa3")),i=a("be6c"),c={data:function(){return{account:"",password:""}},methods:{handleSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,"root"===t.account){e.next=5;break}return console.log("you are not admin"),s["a"].fire({icon:"warning",title:"請輸入管理員的帳密"}),e.abrupt("return");case 5:return e.next=7,i["a"].signInAdmin({account:t.account,password:t.password});case 7:a=e.sent,n=a.data,localStorage.setItem("token",n.data.token),s["a"].fire({icon:"success",title:"成功登入"}),t.$router.push("/admin/adminTweetList"),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0),s["a"].fire({icon:"error",title:"登入失敗"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}},u=c,l=(a("d916"),a("2877")),d=Object(l["a"])(u,n,r,!1,null,"1b3626cc",null);e["default"]=d.exports},be6c:function(t,e,a){"use strict";var n=a("2fa3"),r=function(){return localStorage.getItem("token")};e["a"]={signInAdmin:function(t){var e=t.account,a=t.password;return n["b"].post("/api/admin/users",{account:e,password:a})},getUsersAdmin:function(){return n["b"].get("/api/admin/users",{headers:{Authorization:"Bearer ".concat(r())}})},getTweetsAdmin:function(){return n["b"].get("/api/admin/tweets",{headers:{Authorization:"Bearer ".concat(r())}})},deleteTweetsAdmin:function(t){return n["b"].delete("/api/admin/tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(r())}})}}},d916:function(t,e,a){"use strict";a("a2c3")}}]);
//# sourceMappingURL=chunk-169de787.a2b0938e.js.map