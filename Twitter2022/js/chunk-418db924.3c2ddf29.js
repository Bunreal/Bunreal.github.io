(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-418db924"],{"22de":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e.isClickPopupReplyTweet?a("popupReply",{attrs:{tweet:e.tweetPopup,user:e.user},on:{"close-PopupReply":e.closePopupReply,"after-create-reply":e.afterCreateReply}}):e._e(),a("navigation",{attrs:{userId:e.currentUser.id}}),a("div",{staticClass:"main"},[a("userTitle",{attrs:{userName:e.user.name,tweetNum:e.currentUser.tweetCount}}),e.isMe?a("userInfo",{attrs:{"initial-user":e.user}}):a("userInfoOther",{attrs:{"initial-user":e.user}}),a("navTabs",{attrs:{userId:e.currentUser.id}}),a("div",{staticClass:"tweet-wrap"},e._l(e.tweets,(function(t){return a("div",{key:t.id,staticClass:"tweet-card"},[a("div",{staticClass:"tweet-avatar"},[a("img",{attrs:{src:e._f("emptyAvatar")(e.user.avatar),alt:""}})]),a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"tweet-name-group"},[a("p",{staticClass:"tweet-name"},[a("b",[e._v(e._s(e.user.name))])]),a("p",{staticClass:"tweet-account fz14"},[e._v(" @"+e._s(e.user.account)+"・"+e._s(e._f("fromNow")(t.createdAt))+" ")])]),a("router-link",{staticClass:"tweet-text",attrs:{to:{name:"tweet",params:{id:t.id}}}},[a("p",[e._v(" "+e._s(t.description)+" ")])]),a("div",{staticClass:"tweet-count"},[a("div",{staticClass:"tweet-reply",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.openPopupReply(t.id)}}},[e._m(0,!0),a("p",{staticClass:"fz14"},[a("b",[e._v(e._s(t.Replies))])])]),t.isLiked?e._e():a("div",{staticClass:"tweet-like",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.addLike(t.id)}}},[e._m(1,!0),a("p",{staticClass:"fz14"},[a("b",[e._v(e._s(t.Likes))])])]),t.isLiked?a("div",{staticClass:"tweet-like",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.unLike(t.id)}}},[e._m(2,!0),a("p",{staticClass:"fz14"},[a("b",[e._v(e._s(t.Likes))])])]):e._e()])],1)])})),0)],1),a("followTop",{attrs:{userId:e.currentUser.id}})],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-reply-img"},[s("img",{attrs:{src:a("f5b6"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-like-img"},[s("img",{attrs:{src:a("3c8a"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-like-img"},[s("img",{attrs:{src:a("7e3a"),alt:""}})])}],i=a("2909"),n=a("5530"),o=a("1da1"),c=(a("96cf"),a("d9e2"),a("d81d"),a("b0c0"),a("7db0"),a("d3b7"),a("3d01")),p=a("447a"),u=a("5372"),l=a("87fa"),d=a("8e6e"),A=a("fc26"),f=a("f8df"),w=a("1602"),m=a("6783"),v=a("2708"),g=a("2f62"),h=a("2fa3"),C={name:"SelfPage",components:{navigation:c["a"],followTop:p["a"],userInfo:u["a"],userTitle:d["a"],navTabs:A["a"],userInfoOther:l["a"],popupReply:f["a"]},data:function(){return{user:{id:-1,account:"",name:"",email:"",role:"",introduction:"",avatar:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",cover:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",followingCount:-1,followerCount:-1,isFollowing:!1,createdAt:"",updatedAt:""},tweets:[],isMe:!0,isClickPopupEditModal:!1,isClickPopupReplyTweet:!1,tweetPopup:{}}},methods:{addLike:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].addLike({TweetId:e});case 3:if(s=a.sent,"Success"===s.data.status){a.next=6;break}throw new Error(s.data.message);case 6:console.log("TweetId",e),t.tweets=t.tweets.map((function(t){return t.id===e?Object(n["a"])(Object(n["a"])({},t),{},{isLiked:!0,Likes:t.Likes+1}):t})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),h["a"].fire({icon:"error",title:"無法like此筆tweet，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},unLike:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].unLike({TweetId:e});case 3:if(s=a.sent,"Success"===s.data.status){a.next=6;break}throw new Error(s.data.message);case 6:t.tweets=t.tweets.map((function(t){return t.id===e?Object(n["a"])(Object(n["a"])({},t),{},{isLiked:!1,Likes:t.Likes-1}):t})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),h["a"].fire({icon:"error",title:"無法unlike此筆tweet，請稍後再試"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},fetchUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,i,n,o,c,p,u,l,d,A,f,m,v,g,h;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].getUser(e);case 3:s=a.sent,r=s.data.data.user,i=r.id,n=r.account,o=r.name,c=r.email,p=r.role,u=r.introduction,l=r.avatar,d=r.cover,A=r.isFollowing,f=r.createdAt,m=r.updatedAt,v=s.data.data,g=v.followingCount,h=v.followerCount,t.user={id:i,account:n,name:o,email:c,role:p,introduction:u,avatar:l,cover:d,followingCount:g,followerCount:h,isFollowing:A,createdAt:f,updatedAt:m},a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("error",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},fetchTweets:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].getUserTweets(e);case 3:s=a.sent,t.tweets=Object(i["a"])(s.data.data.tweets),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log("error",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},openPopupReply:function(e){this.tweetPopup=this.tweets.find((function(t){return t.id===e})),this.isClickPopupReplyTweet=!0},closePopupReply:function(e){var t=e.isClickPopupReplyTweet;this.isClickPopupReplyTweet=t},afterCreateReply:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,s=e.comment,r=e.tweetId,a.next=4,m["a"].postTweetsReply({comment:s,tweetId:r});case 4:if(i=a.sent,"Success"===i.data.status){a.next=7;break}throw new Error(i.message);case 7:t.$router.push({name:"tweet",params:{id:r}}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),h["a"].fire({icon:"error",title:"無法新增此筆tweetReply"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},isThisMe:function(e){this.isMe=this.currentUser.id==e}},computed:Object(n["a"])({},Object(g["b"])(["currentUser"])),created:function(){var e=localStorage.getItem("token");e||(h["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var t=this.$route.params.id;this.fetchUser(t),this.fetchTweets(t),this.isThisMe(t),console.log(this.currentUser)},watch:{"$route.params.id":{handler:function(e){this.fetchUser(e),this.fetchTweets(e),this.isThisMe(e)},immediate:!0}},mixins:[v["b"],v["a"]]},R=C,b=(a("7dfa"),a("2877")),y=Object(b["a"])(R,s,r,!1,null,"5ff243e2",null);t["default"]=y.exports},"3c8a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VZLbhNBEK3q6WEREJgbmBPEYsUKYi4Qs2SFvYsgKIOUoAgleBwbFGILJoodZZf4BM4NMmLBgg3mBs4NLMECxZ5uqtq28GfGmSQWsMiT7Pl0db2qmvo0wDX+AXDaouM4icCeywBa8/wcaPiuOh3/wNtuhckvr24saMCUQJjXWp+CgGZ1p3R8YfLltbcroLVLEonJXehWd7YKg8clZz0pbfuQbhfGRTVAC7XOVSslPxb58uuNPGh06bZN2+ugwCfJNinKIuBi3yC/Wi6mmdiy7RNSlNRIRIrkNTRRYILkF0kuY4xAzNZ2tupTyY3HoD1WFAgrfbDttobXl9bdpKWCE9SQRARPacgYYq3rdlc6nue2h+VfrG46JPeJHVEQpPfL75uh5I7jJjp28I2VdS3r3jhxmAH9V8cUhScQgSEDTLQG78WwUGAHxgv6HUURM3iNwpvje44QGfoKpqBWKXr0KTgiC5zEoeRa6ZS5UgjhHHACkZE5NmKaoX+U93SeibnM4JUcERBgSkqhakMM7JWLRxAXCBM6Rz3XcGpeapGAv4ARcux9F1BKJWHWQDRRFUK0QskJPv9ZlvUIZgyqeZNPsvuzGUouA+lzVpJgZjgrrwpuu1xFpNv3PK8dSm4aBBrvEx15MwszAnW3Z3xVCCNVJCYl9a65oliZhffcfsnrLPeD/bHqmCDvDQDtmy4nbztwRUj7RoOvVEmF8TURtqFryZzpSKjzz9fepOCSMAMKdCrM60hy7liUdMZSBKtxmfAbo3uTEXhAhcmIqM2mH9PAMOG3b53ABdD7zpYJNxlQiGq/YpoS2bFyHDLyP/VybfMQYhIP5jsx71YrW26ULJ6rbHh8IhzLsx+54VqNIubhVKuUstN0n0s+bgAfi4JOJz1+juNGQuoafMqJQxybfGCADFTDZC8ZwAnJGWwOmTfu5LVW/bKkUJdLsUo0NvkA5CEdKjHf4+mPyd6Zrk0GFGqVd15cXRZcEF+/fPbvP3xcR6XuIuIDIv5FHeSD7Mqnex+LPlzjf8dv3gtecMwCXM4AAAAASUVORK5CYII="},6485:function(e,t,a){},"7db0":function(e,t,a){"use strict";var s=a("23e7"),r=a("b727").find,i=a("44d2"),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(n)},"7dfa":function(e,t,a){"use strict";a("cb83")},"7e3a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHdSURBVHgB7ZbNbcIwFIDfc0KqcmIENoARYIMcEZfCBGUDYILCBIULicSFDcgIdIOwASeKiOLXZwRSoE5wEKE98F2i2M/5/PwTG+DJH4BZleS6lbhcdpGodnhH/IqkDF59P9TFR61WgyyrbnG8BFhzu5XteYvc8rjdfmfZAIgqmkYDazYbnt6/W61qCfETEBuaT4UkZbfk+4HmO1pxn1gAWRAFnFVTiR0hlhxfzQrn0eig500z5YeMAUZgACKOuBPuNfGRjYyipjOfr04FIllLnY4a4h4YQkQ9Q7GiImz7I1lwJo/3ezfHx/LDa0ItYq2cxXUomIh3j1bOc1iDB3Iml1Ku4YFcZr6BgkEpQ72c9y4UjL3b6bea9fIS8KO47Dk5XCw2WjlOJqoigKIgOvvDiV/1Uo6hGHFo+/4EsuSHAwAxgPvLh5dFQhcXxXEX7jn3mqxT5eq8lpqe3kpE1NSVi7QGjuepky31ImAK/7KHaZcPkdXQcpwu7/0QbhUTjUuz2SCtPvMapThcFhCXfKupQg542qY8ep2smKvyWzpgIlYIMEDN2Z4XDfd0dS1WDbWJWGGUeZKo3R5wo76maqN2yHGhGpFbrlDTYPHNViC+KSmv6LG93Y6S/+0n/5YffUfReIUCgMcAAAAASUVORK5CYII="},a784:function(e,t,a){"use strict";a("6485")},cb83:function(e,t,a){},f5b6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7VZdbtNAEJ611zwgUfkG+AakN3BOQDgB6VtFjeqqJOpDmji0oEoN4EhplLeUG7QnINwgnABzgzzXaw+zGxcldn4dixf4HpL17ux+87M7MwD/Ktg2wq7rmg/GU0tDzVy0LgQPBr4XwIZYSy4JxZO9YwSsMgQLNsMoBvjav764hbzkTq15DIgeSSlLESCgDWMWwyQtixrJIJrAWIk+/8hHYVge+FfBVuROvdECZF5ydFeE3N/Upc67ho0aGyaemsQQlfvXH8cbkT8SIyNLYzzodS5HkAOkBHmNtaQCIgz30x7Q0hsO3TMrsXgSaXo5L7EE7fUoFG0amtwwhun1DLluGFJT2hO3B1eb39yVCgCOaGjLcCwld13PpDhUpbtvOh98KAoIbfU/DcFicqELW00ijKBAqNCheiGlpeR0/dRijPEPKBwsoB/z6PTy+WLyBBjjBArnjjNnzpEjMCXANGbCX8AcOUMM1CTTXkDRQJX5JjefGr8WkvOIq4tBabEiczoUBOe0UZEpms79Pjs/R+77HhHjPQ1NwfdcKAqaNs0dAHdLySUizj31LBi2jurN17AjVHECLMncka5yGXKZ1WIGJ3JMd+DWqTdbkBNT5VElK5mq0+vLq5qKExsmsQo0Bnf0BO9lw6CUXFPhEosVcRzBQf9ztravrOeHZ56lC+ExxrLuR9budd57mT1UmJIiYoMspxGcLCJeSz6rhBFFNnngZdIw2HQvRr3OxZwrpZupBPvT5gPHQuevVhWnrXq4R0V4FP2cJVetlvFMWluZSmGXh9yTr2fVWRx2xNvaeVUgfKGhuW3zkZucejbLqZ1/Qxlb5T/sGg/rrS2EPOnPrF1aLQ12grRW39+l1doaMs5val4J/iMnfgM24i34Qh8jkgAAAABJRU5ErkJggg=="},f8df:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popupReply-wrap"},[s("div",{staticClass:"overlay",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReply.apply(null,arguments)}}}),s("div",{staticClass:"popupReply"},[s("div",{staticClass:"popupReply-colse"},[s("div",{staticClass:"popupReply-colse-img",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReply.apply(null,arguments)}}},[s("img",{attrs:{src:a("3e02"),alt:""}})])]),s("div",{staticClass:"popupReply-text-wrap"},[s("div",{staticClass:"popupReply-user"},[s("div",{staticClass:"popupReply-avatar"},[s("div",{staticClass:"popupReply-avatar-img"},[s("img",{attrs:{src:e._f("emptyAvatar")(e.user.avatar),alt:""}})])]),s("div",{staticClass:"popupReply-content"},[s("div",{staticClass:"popupReply-name-group"},[s("p",{staticClass:"popupReply-name"},[s("b",[e._v(e._s(e.user.name))])]),s("p",{staticClass:"popupReply-account fz14"},[e._v(" @"+e._s(e.user.account)+"・"+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])]),s("div",{staticClass:"popupReply-text"},[s("p",[e._v(" "+e._s(e.tweet.description)+" ")]),s("p",{staticClass:"reply-to fz14"},[s("span",[e._v("回覆")]),e._v(" @"+e._s(e.user.name))])])])]),s("div",{staticClass:"popupReply-again-inner"},[s("div",{staticClass:"popupReply-again-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(e.user.avatar),alt:""}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.popupText,expression:"popupText"}],attrs:{name:"",id:"",maxlength:"80",placeholder:"推你的回覆"},domProps:{value:e.popupText},on:{input:function(t){t.target.composing||(e.popupText=t.target.value)}}})]),s("div",{staticClass:"popupReply-btn-wrap"},[e.popupText.length>=80?s("div",{staticClass:"post-text-num-warning"},[e._v(" 字數不可超過 80 字 ")]):e._e(),e.noZero?s("div",{staticClass:"post-text-num-warning"},[e._v("不得為空白")]):e._e(),s("div",{staticClass:"btn popupReply-btn active",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._v(" 推文 ")])])])])])},r=[],i=(a("498a"),a("2708")),n={name:"popupReply",props:{tweet:{type:Object,required:!0},user:{type:Object,required:!0}},data:function(){return{popupText:"",noZero:!1}},watch:{popupText:function(){this.popupText&&(this.noZero=!1)}},methods:{closePopupReply:function(){this.$emit("close-PopupReply",{isClickPopupReplyTweet:!1})},handleSubmit:function(){this.popupText.trim()?this.$emit("after-create-reply",{tweetId:this.tweet.TweetId,comment:this.popupText}):this.noZero=!0}},mixins:[i["b"],i["a"]]},o=n,c=(a("a784"),a("2877")),p=Object(c["a"])(o,s,r,!1,null,"1e5d2237",null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-418db924.3c2ddf29.js.map