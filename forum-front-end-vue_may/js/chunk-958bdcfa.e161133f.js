(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("AdminNav"),t.isLoading?n("Spinner"):[n("table",{staticClass:"table"},[n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("Role")]),n("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])]),n("tbody",t._l(t.userData,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(e.isAdmin?"Admin":"User"))]),n("td",[t.currentUser.id!==e.id?n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v(" "+t._s(e.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])})),0)])]],2)},a=[],s=n("5530"),i=n("1da1"),c=(n("d3b7"),n("25f0"),n("d9e2"),n("d81d"),n("96cf"),n("e04c")),u=n("be6c"),o=n("2fa3"),d=n("2f62"),l=n("2375"),m={components:{AdminNav:c["a"],Spinner:l["a"]},data:function(){return{userData:[],isLoading:!0}},methods:{fetchUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].users.get();case 3:n=e.sent,r=n.data,t.userData=r.users,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},toggleUserRole:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,i,c,d,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.userId,a=t.isAdmin,n.prev=1,i=!a,n.next=5,u["a"].users.update({userId:r,isAdmin:i.toString()});case 5:if(c=n.sent,d=c.data,l=c.statusText,console.log(d),"OK"===l&&"success"===d.status){n.next=11;break}throw new Error(l);case 11:e.userData=e.userData.map((function(t){return t.id===r?Object(s["a"])(Object(s["a"])({},t),{},{isAdmin:!t.isAdmin}):t})),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](1),console.log(n.t0),o["a"].fire({icon:"error",title:"無法更新，請稍後再試"});case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))()}},created:function(){this.fetchUser()},computed:Object(s["a"])({},Object(d["b"])(["currentUser","isAuthenticated"]))},f=m,p=n("2877"),v=Object(p["a"])(f,r,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,n){"use strict";n("b0c0");var r=n("2fa3");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,n=t.name;return r["b"].put("/admin/categories/".concat(e),{name:n})},delete:function(t){return r["b"].delete("/admin/categories/".concat(t))}},restaurants:{create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},get:function(){return r["b"].get("/admin/restaurants")},delete:function(t){return r["b"].delete("/admin/restaurants/".concat(t))},getOne:function(t){return r["b"].get("/admin/restaurants/".concat(t))},update:function(t){var e=t.restaurantId,n=t.formData;return r["b"].put("/admin/restaurants/".concat(e),n)}},users:{get:function(){return r["b"].get("/admin/users/")},update:function(t){var e=t.userId,n=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:n})}}}},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,s=n("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("h1",[t._v("餐廳後台")]),n("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=n("2877"),i={},c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.e161133f.js.map