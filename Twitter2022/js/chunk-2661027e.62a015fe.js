(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2661027e"],{"0dd4":function(t,e,a){},"22de":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("navigation"),a("div",{staticClass:"main"},[a("userTitle",{attrs:{userName:t.user.name,tweetNum:t.tweets.length}}),t.isMe?a("userInfo",{attrs:{"initial-user":t.user}}):a("userInfoOther",{attrs:{"initial-user":t.user}}),a("navTabs",{attrs:{userId:t.$route.params.id}}),a("div",{staticClass:"tweet-wrap"},t._l(t.tweets,(function(e){return a("div",{key:e.id,staticClass:"tweet-card"},[t._m(0,!0),a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"tweet-name-group"},[a("p",{staticClass:"tweet-name"},[a("b",[t._v(t._s(t.user.name))])]),a("p",{staticClass:"tweet-account fz14"},[t._v("@"+t._s(t.user.account)+"・"+t._s(t._f("fromNow")(e.createdAt)))])]),a("div",{staticClass:"tweet-text"},[a("p",[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"tweet-count"},[a("a",{staticClass:"tweet-reply",attrs:{href:"#"}},[t._m(1,!0),a("p",{staticClass:"fz14"},[a("b",[t._v(t._s(e.replyCount))])])]),a("a",{staticClass:"tweet-like",attrs:{href:"#"}},[t._m(2,!0),a("p",{staticClass:"fz14"},[a("b",[t._v(t._s(e.likeCount))])])])])])])})),0)],1),a("followTop")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tweet-avatar"},[s("img",{attrs:{src:a("9c85"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tweet-reply-img"},[s("img",{attrs:{src:a("f5b6"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tweet-like-img"},[s("img",{attrs:{src:a("3c8a"),alt:""}})])}],i=a("5530"),n=a("2909"),c=a("1da1"),o=(a("96cf"),a("b0c0"),a("3d01")),u=a("447a"),A=a("5372"),l=a("87fa"),f=a("8e6e"),d=a("fc26"),w=a("2708"),g=a("1602"),m=a("2f62"),h=a("2fa3"),p={name:"selfPage",components:{navigation:o["a"],followTop:u["a"],userInfo:A["a"],userTitle:f["a"],navTabs:d["a"],userInfoOther:l["a"]},data:function(){return{user:{id:-1,account:"",name:"",email:"",role:"",introduction:"",avatar:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",cover:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",followingCount:-1,followerCount:-1,isFollowing:!1,createdAt:"",updatedAt:""},tweets:[],isMe:!0,isClickPopupEditModal:!1}},methods:{fetchUser:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s,r,i,n,c,o,u,A,l,f,d,w,m,h,p,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g["a"].getUser(t);case 3:s=a.sent,console.log("response in selfPage",s),r=s.data.data.user,i=r.id,n=r.account,c=r.name,o=r.email,u=r.role,A=r.introduction,l=r.avatar,f=r.cover,d=r.isFollowing,w=r.createdAt,m=r.updatedAt,h=s.data.data,p=h.followingCount,v=h.followerCount,e.user={id:i,account:n,name:c,email:o,role:u,introduction:A,avatar:l,cover:f,followingCount:p,followerCount:v,isFollowing:d,createdAt:w,updatedAt:m},a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("error",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},fetchTweets:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g["a"].getUserTweets(t);case 3:s=a.sent,e.tweets=Object(n["a"])(s.data.data.tweets),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log("error",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},isThisMe:function(t){this.isMe=this.currentUser.id==t}},computed:Object(i["a"])({},Object(m["b"])(["currentUser"])),created:function(){var t=localStorage.getItem("token");t||(h["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var e=this.$route.params.id;this.fetchUser(e),this.fetchTweets(e),this.isThisMe(e)},watch:{"$route.params.id":{handler:function(t){this.fetchUser(t),this.fetchTweets(t),this.isThisMe(t)},immediate:!0}},mixins:[w["a"]]},v=p,C=(a("43c9"),a("2877")),b=Object(C["a"])(v,s,r,!1,null,"88d31f98",null);e["default"]=b.exports},"3c8a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VZLbhNBEK3q6WEREJgbmBPEYsUKYi4Qs2SFvYsgKIOUoAgleBwbFGILJoodZZf4BM4NMmLBgg3mBs4NLMECxZ5uqtq28GfGmSQWsMiT7Pl0db2qmvo0wDX+AXDaouM4icCeywBa8/wcaPiuOh3/wNtuhckvr24saMCUQJjXWp+CgGZ1p3R8YfLltbcroLVLEonJXehWd7YKg8clZz0pbfuQbhfGRTVAC7XOVSslPxb58uuNPGh06bZN2+ugwCfJNinKIuBi3yC/Wi6mmdiy7RNSlNRIRIrkNTRRYILkF0kuY4xAzNZ2tupTyY3HoD1WFAgrfbDttobXl9bdpKWCE9SQRARPacgYYq3rdlc6nue2h+VfrG46JPeJHVEQpPfL75uh5I7jJjp28I2VdS3r3jhxmAH9V8cUhScQgSEDTLQG78WwUGAHxgv6HUURM3iNwpvje44QGfoKpqBWKXr0KTgiC5zEoeRa6ZS5UgjhHHACkZE5NmKaoX+U93SeibnM4JUcERBgSkqhakMM7JWLRxAXCBM6Rz3XcGpeapGAv4ARcux9F1BKJWHWQDRRFUK0QskJPv9ZlvUIZgyqeZNPsvuzGUouA+lzVpJgZjgrrwpuu1xFpNv3PK8dSm4aBBrvEx15MwszAnW3Z3xVCCNVJCYl9a65oliZhffcfsnrLPeD/bHqmCDvDQDtmy4nbztwRUj7RoOvVEmF8TURtqFryZzpSKjzz9fepOCSMAMKdCrM60hy7liUdMZSBKtxmfAbo3uTEXhAhcmIqM2mH9PAMOG3b53ABdD7zpYJNxlQiGq/YpoS2bFyHDLyP/VybfMQYhIP5jsx71YrW26ULJ6rbHh8IhzLsx+54VqNIubhVKuUstN0n0s+bgAfi4JOJz1+juNGQuoafMqJQxybfGCADFTDZC8ZwAnJGWwOmTfu5LVW/bKkUJdLsUo0NvkA5CEdKjHf4+mPyd6Zrk0GFGqVd15cXRZcEF+/fPbvP3xcR6XuIuIDIv5FHeSD7Mqnex+LPlzjf8dv3gtecMwCXM4AAAAASUVORK5CYII="},"43c9":function(t,e,a){"use strict";a("0dd4")},f5b6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7VZdbtNAEJ611zwgUfkG+AakN3BOQDgB6VtFjeqqJOpDmji0oEoN4EhplLeUG7QnINwgnABzgzzXaw+zGxcldn4dixf4HpL17ux+87M7MwD/Ktg2wq7rmg/GU0tDzVy0LgQPBr4XwIZYSy4JxZO9YwSsMgQLNsMoBvjav764hbzkTq15DIgeSSlLESCgDWMWwyQtixrJIJrAWIk+/8hHYVge+FfBVuROvdECZF5ydFeE3N/Upc67ho0aGyaemsQQlfvXH8cbkT8SIyNLYzzodS5HkAOkBHmNtaQCIgz30x7Q0hsO3TMrsXgSaXo5L7EE7fUoFG0amtwwhun1DLluGFJT2hO3B1eb39yVCgCOaGjLcCwld13PpDhUpbtvOh98KAoIbfU/DcFicqELW00ijKBAqNCheiGlpeR0/dRijPEPKBwsoB/z6PTy+WLyBBjjBArnjjNnzpEjMCXANGbCX8AcOUMM1CTTXkDRQJX5JjefGr8WkvOIq4tBabEiczoUBOe0UZEpms79Pjs/R+77HhHjPQ1NwfdcKAqaNs0dAHdLySUizj31LBi2jurN17AjVHECLMncka5yGXKZ1WIGJ3JMd+DWqTdbkBNT5VElK5mq0+vLq5qKExsmsQo0Bnf0BO9lw6CUXFPhEosVcRzBQf9ztravrOeHZ56lC+ExxrLuR9budd57mT1UmJIiYoMspxGcLCJeSz6rhBFFNnngZdIw2HQvRr3OxZwrpZupBPvT5gPHQuevVhWnrXq4R0V4FP2cJVetlvFMWluZSmGXh9yTr2fVWRx2xNvaeVUgfKGhuW3zkZucejbLqZ1/Qxlb5T/sGg/rrS2EPOnPrF1aLQ12grRW39+l1doaMs5val4J/iMnfgM24i34Qh8jkgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-2661027e.62a015fe.js.map