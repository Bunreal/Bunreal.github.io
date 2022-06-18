(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fdfc446"],{be6c:function(t,e,a){"use strict";a("b0c0");var n=a("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return n["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){return n["b"].delete("/admin/categories/".concat(t))}},restaurants:{create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},delete:function(t){return n["b"].delete("/admin/restaurants/".concat(t))},getOne:function(t){return n["b"].get("/admin/restaurants/".concat(t))},update:function(t){var e=t.restaurantId,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return n["b"].get("/admin/users/")},update:function(t){var e=t.userId,a=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},e01a:function(t,e,a){"use strict";var n=a("23e7"),r=a("83ab"),s=a("da84"),i=a("e330"),o=a("1a2d"),c=a("1626"),u=a("3a9b"),d=a("577e"),l=a("9bf2").f,m=a("e893"),g=s.Symbol,p=g&&g.prototype;if(r&&c(g)&&(!("description"in p)||void 0!==g().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(p,this)?new g(t):void 0===t?g():g(t);return""===t&&(f[e]=!0),e};m(v,g),v.prototype=p,p.constructor=v;var b="Symbol(test)"==String(g("test")),h=i(p.toString),_=i(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),C=i("".slice);l(p,"description",{configurable:!0,get:function(){var t=_(this),e=h(t);if(o(f,t))return"";var a=b?C(e,7,-1):w(e,y,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:v})}},f91c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),a("li",[a("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),a("li",[a("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),a("div",{staticClass:"col-md-8"},[a("p",[t._v(t._s(t.restaurant.description))])])]),a("hr"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])],1)},r=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("b0c0"),a("a4d3"),a("e01a"),a("2708")),c=a("be6c"),u=a("2375"),d={name:"AdminRestaurant",mixins:[o["a"]],components:{Spinner:u["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},mounted:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].restaurants.getOne(t);case 3:n=a.sent,console.log(n),r=n.data.restaurant,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{id:r.id,name:r.name,categoryName:r.Category.name,image:r.image,openingHours:r.opening_hours,tel:r.tel,address:r.address,description:r.description}),e.isLoading=!1,a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),e.isLoading=!1,console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()}},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()}},l=d,m=a("2877"),g=Object(m["a"])(l,n,r,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-3fdfc446.25661114.js.map