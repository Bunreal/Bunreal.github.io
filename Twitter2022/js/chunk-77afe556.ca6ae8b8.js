(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77afe556"],{"25da":function(e,t,a){},"3c8a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VZLbhNBEK3q6WEREJgbmBPEYsUKYi4Qs2SFvYsgKIOUoAgleBwbFGILJoodZZf4BM4NMmLBgg3mBs4NLMECxZ5uqtq28GfGmSQWsMiT7Pl0db2qmvo0wDX+AXDaouM4icCeywBa8/wcaPiuOh3/wNtuhckvr24saMCUQJjXWp+CgGZ1p3R8YfLltbcroLVLEonJXehWd7YKg8clZz0pbfuQbhfGRTVAC7XOVSslPxb58uuNPGh06bZN2+ugwCfJNinKIuBi3yC/Wi6mmdiy7RNSlNRIRIrkNTRRYILkF0kuY4xAzNZ2tupTyY3HoD1WFAgrfbDttobXl9bdpKWCE9SQRARPacgYYq3rdlc6nue2h+VfrG46JPeJHVEQpPfL75uh5I7jJjp28I2VdS3r3jhxmAH9V8cUhScQgSEDTLQG78WwUGAHxgv6HUURM3iNwpvje44QGfoKpqBWKXr0KTgiC5zEoeRa6ZS5UgjhHHACkZE5NmKaoX+U93SeibnM4JUcERBgSkqhakMM7JWLRxAXCBM6Rz3XcGpeapGAv4ARcux9F1BKJWHWQDRRFUK0QskJPv9ZlvUIZgyqeZNPsvuzGUouA+lzVpJgZjgrrwpuu1xFpNv3PK8dSm4aBBrvEx15MwszAnW3Z3xVCCNVJCYl9a65oliZhffcfsnrLPeD/bHqmCDvDQDtmy4nbztwRUj7RoOvVEmF8TURtqFryZzpSKjzz9fepOCSMAMKdCrM60hy7liUdMZSBKtxmfAbo3uTEXhAhcmIqM2mH9PAMOG3b53ABdD7zpYJNxlQiGq/YpoS2bFyHDLyP/VybfMQYhIP5jsx71YrW26ULJ6rbHh8IhzLsx+54VqNIubhVKuUstN0n0s+bgAfi4JOJz1+juNGQuoafMqJQxybfGCADFTDZC8ZwAnJGWwOmTfu5LVW/bKkUJdLsUo0NvkA5CEdKjHf4+mPyd6Zrk0GFGqVd15cXRZcEF+/fPbvP3xcR6XuIuIDIv5FHeSD7Mqnex+LPlzjf8dv3gtecMwCXM4AAAAASUVORK5CYII="},"61ec":function(e,t,a){"use strict";a("25da")},6783:function(e,t,a){"use strict";a("a4d3"),a("e01a");var s=a("2fa3"),r=function(){return localStorage.getItem("token")};t["a"]={getTweets:function(){return s["b"].get("/api/tweets",{headers:{Authorization:"Bearer ".concat(r())}})},postTweets:function(e){var t=e.description;return s["b"].post("/api/tweets",{description:t},{headers:{Authorization:"Bearer ".concat(r())}})},getTweetReplies:function(e){return s["b"].get("/api/tweets/".concat(e,"/replies"),{headers:{Authorization:"Bearer ".concat(r())}})},postTweetsReply:function(e){var t=e.comment,a=e.tweetId;return s["b"].post("/api/tweets/".concat(a,"/replies"),{comment:t,tweetId:a},{headers:{Authorization:"Bearer ".concat(r())}})},getTweet:function(e){return s["b"].get("/api/tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})}}},"7e3a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHdSURBVHgB7ZbNbcIwFIDfc0KqcmIENoARYIMcEZfCBGUDYILCBIULicSFDcgIdIOwASeKiOLXZwRSoE5wEKE98F2i2M/5/PwTG+DJH4BZleS6lbhcdpGodnhH/IqkDF59P9TFR61WgyyrbnG8BFhzu5XteYvc8rjdfmfZAIgqmkYDazYbnt6/W61qCfETEBuaT4UkZbfk+4HmO1pxn1gAWRAFnFVTiR0hlhxfzQrn0eig500z5YeMAUZgACKOuBPuNfGRjYyipjOfr04FIllLnY4a4h4YQkQ9Q7GiImz7I1lwJo/3ezfHx/LDa0ItYq2cxXUomIh3j1bOc1iDB3Iml1Ku4YFcZr6BgkEpQ72c9y4UjL3b6bea9fIS8KO47Dk5XCw2WjlOJqoigKIgOvvDiV/1Uo6hGHFo+/4EsuSHAwAxgPvLh5dFQhcXxXEX7jn3mqxT5eq8lpqe3kpE1NSVi7QGjuepky31ImAK/7KHaZcPkdXQcpwu7/0QbhUTjUuz2SCtPvMapThcFhCXfKupQg542qY8ep2smKvyWzpgIlYIMEDN2Z4XDfd0dS1WDbWJWGGUeZKo3R5wo76maqN2yHGhGpFbrlDTYPHNViC+KSmv6LG93Y6S/+0n/5YffUfReIUCgMcAAAAASUVORK5CYII="},"9de5":function(e,t,a){"use strict";a("de33")},c01e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap"},[e.isClickPopupTweet?s("popupTweet",{attrs:{user:e.user},on:{"close-PopupTweet":e.closePopupTweet,"after-create-tweet":e.afterCreateTweet}}):e._e(),e.isClickPopupReplyList?s("popupReplyList",{attrs:{tweet:e.tweet,user:e.user},on:{"close-PopupReplyList":e.closePopupReplyList,"after-create-reply-list":e.afterCreateReplyList}}):e._e(),s("navigation",{attrs:{userId:e.currentUser.id},on:{"after-open-tweet":e.afterOpenTweet}}),s("div",{staticClass:"reply-wrap"},[s("router-link",{staticClass:"reply-title",attrs:{to:"/tweets"}},[s("div",{staticClass:"reply-forward"},[s("img",{attrs:{src:a("cd4d"),alt:""}})]),s("h4",[e._v("推文")])]),s("div",{staticClass:"reply"},[s("div",{staticClass:"reply-inner"},[s("router-link",{staticClass:"reply-user",attrs:{to:{name:"SelfPage",params:{id:e.tweet.User.id}}}},[s("div",{staticClass:"reply-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(e.tweet.User.avatar),alt:""}})]),s("div",{staticClass:"reply-name-group"},[s("p",{staticClass:"reply-name"},[s("b",[e._v(e._s(e.tweet.User.name))])]),s("p",{staticClass:"reply-account fz14"},[e._v("@"+e._s(e.tweet.User.account))])])]),s("div",{staticClass:"reply-text"},[e._v(" "+e._s(e.tweet.description)+" ")]),s("p",{staticClass:"fz14 reply-time"},[e._v(e._s(e._f("ampm")(e.tweet.createdAt)))])],1),s("div",{staticClass:"reply-count"},[s("div",{staticClass:"reply-num"},[s("span",[e._v(e._s(e.replies.length))]),e._v(" 回覆 ")]),s("div",{staticClass:"like-num"},[s("span",[e._v(" "+e._s(e.tweet.totalLikes))]),e._v(" 喜歡次數 ")])]),s("div",{staticClass:"reply-count-btn"},[s("div",{staticClass:"reply-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.openPopupReplyList.apply(null,arguments)}}},[s("img",{attrs:{src:a("f5b6"),alt:""}})]),e.tweet.isLiked?s("div",{staticClass:"like-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.unLike(e.tweet.id)}}},[s("img",{attrs:{src:a("7e3a"),alt:""}})]):e._e(),e.tweet.isLiked?e._e():s("div",{staticClass:"like-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addLike(e.tweet.id)}}},[s("img",{attrs:{src:a("3c8a"),alt:""}})])])]),s("div",{staticClass:"reply-tweet-wrap"},e._l(e.replies,(function(t){return s("div",{key:t.id,staticClass:"reply-tweet-card"},[s("div",{staticClass:"reply-tweet-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(t.User.avatar),alt:""}})]),s("div",{staticClass:"reply-tweet-content"},[s("div",{staticClass:"reply-tweet-name-group"},[s("p",{staticClass:"reply-tweet-name"},[s("b",[e._v(e._s(t.User.name))]),s("span",[e._v("@"+e._s(t.User.account)+"・"+e._s(e._f("fromNow")(t.createdAt)))])]),s("p",{staticClass:"reply-to fz14"},[s("span",[e._v("回覆")]),e._v(" @"+e._s(t.User.name)+" ")])]),s("div",{staticClass:"reply-tweet-text"},[s("p",[e._v(" "+e._s(t.comment)+" ")])]),s("div",{staticClass:"reply-tweet-count"},[e._m(0,!0),s("div",{staticClass:"reply-tweet-like"},[e._m(1,!0),s("p",{staticClass:"fz14"},[s("b",[e._v(e._s(t.LikedUsers.length))])])])])])])})),0)],1),s("followTop",{attrs:{userId:e.currentUser.id}})],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reply-tweet-reply"},[s("div",{staticClass:"reply-tweet-reply-img"},[s("img",{attrs:{src:a("f5b6"),alt:""}})]),s("p",{staticClass:"fz14"},[s("b",[e._v("0")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reply-tweet-like-img"},[s("img",{attrs:{src:a("3c8a"),alt:""}})])}],i=a("5530"),n=a("1da1"),p=(a("a4d3"),a("e01a"),a("d9e2"),a("b0c0"),a("96cf"),a("2708")),c=a("2fa3"),o=a("3d01"),l=a("447a"),u=a("3b59"),A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popupReply-wrap"},[s("div",{staticClass:"overlay",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReplyList.apply(null,arguments)}}}),s("div",{staticClass:"popupReply"},[s("div",{staticClass:"popupReply-colse"},[s("div",{staticClass:"popupReply-colse-img",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReplyList.apply(null,arguments)}}},[s("img",{attrs:{src:a("3e02"),alt:""}})])]),s("div",{staticClass:"popupReply-text-wrap"},[s("div",{staticClass:"popupReply-user"},[s("div",{staticClass:"popupReply-avatar"},[s("div",{staticClass:"popupReply-avatar-img"},[s("img",{attrs:{src:e._f("emptyImage")(e.tweet.User.avatar),alt:""}})])]),s("div",{staticClass:"popupReply-content"},[s("div",{staticClass:"popupReply-name-group"},[s("p",{staticClass:"popupReply-name"},[s("b",[e._v(e._s(e.tweet.User.name))])]),s("p",{staticClass:"popupReply-account fz14"},[e._v(" @"+e._s(e.tweet.User.account)+"・"+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])]),s("div",{staticClass:"popupReply-text"},[s("p",[e._v(" "+e._s(e.tweet.description)+" ")]),s("p",{staticClass:"reply-to fz14"},[s("span",[e._v("回覆")]),e._v(" @"+e._s(e.tweet.User.name)+" ")])])])]),s("div",{staticClass:"popupReply-again-inner"},[s("div",{staticClass:"popupReply-again-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(e.user.avatar),alt:""}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.popupText,expression:"popupText"}],attrs:{name:"",id:"",maxlength:"80",placeholder:"推你的回覆"},domProps:{value:e.popupText},on:{input:function(t){t.target.composing||(e.popupText=t.target.value)}}})]),s("div",{staticClass:"popupReply-btn-wrap"},[e.popupText.length>=80?s("div",{staticClass:"post-text-num-warning"},[e._v(" 字數不可超過 80 字 ")]):e._e(),e.noZero?s("div",{staticClass:"post-text-num-warning"},[e._v("不得為空白")]):e._e(),s("div",{staticClass:"btn popupReply-btn active",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._v(" 推文 ")])])])])])},w=[],d=(a("498a"),{name:"popupReplyList",props:{tweet:{type:Object,required:!0},user:{type:Object,required:!0}},data:function(){return{popupText:"",noZero:!1}},watch:{popupText:function(){this.popupText&&(this.noZero=!1)}},methods:{closePopupReplyList:function(){this.$emit("close-PopupReplyList",{isClickPopupReplyList:!1})},handleSubmit:function(){console.log("handleSubmit33"),this.popupText.trim()?this.$emit("after-create-reply-list",{tweetId:this.tweet.id,comment:this.popupText}):this.noZero=!0}},mixins:[p["b"],p["a"]]}),v=d,f=(a("9de5"),a("2877")),m=Object(f["a"])(v,A,w,!1,null,"e9b34556",null),g=m.exports,h=a("6783"),C=a("1602"),y=a("2f62"),R={name:"tweet",components:{navigation:o["a"],followTop:l["a"],popupTweet:u["a"],popupReplyList:g},data:function(){return{user:{},tweets:[],tweet:{User:{id:0},totalLikes:0},replies:{},isClickPopupTweet:!1,isClickPopupReplyList:!1}},methods:{fetchTweet:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h["a"].getTweet(e);case 3:s=a.sent,r=s.data,i=r.data.tweet,t.tweet=i,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},fetchTweetReplies:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h["a"].getTweetReplies(e);case 3:s=a.sent,r=s.data,i=r.data.replies,t.replies=i,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},afterCreateTweet:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,s=e.description,a.next=4,h["a"].postTweets({description:s});case 4:if(r=a.sent,"Success"===r.data.status){a.next=7;break}throw new Error(r.message);case 7:i=r.data.data.tweet.id,t.tweets.unshift({description:s,id:i,User:{id:t.user.id,account:t.user.account,name:t.user.name,avatar:t.user.avatar},createdAt:new Date,totalLikes:0,totalReplies:0}),t.$router.push("/tweets"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法新增此筆tweet"});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},afterCreateReplyList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,s=e.comment,r=e.tweetId,a.next=4,h["a"].postTweetsReply({comment:s,tweetId:r});case 4:if(i=a.sent,"Success"===i.data.status){a.next=7;break}throw new Error(i.message);case 7:t.replies.unshift({comment:s,tweetId:r,User:{id:t.user.id,account:t.user.account,name:t.user.name,avatar:t.user.avatar},LikedUsers:[],createdAt:new Date}),t.isClickPopupReplyList=!1,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法新增此筆tweetReply"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},addLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C["a"].addLike({tweetId:e});case 3:if(s=a.sent,"Success"===s.data.status){a.next=6;break}throw new Error(s.data.message);case 6:t.tweet.isLiked=!0,t.tweet.totalLikes=t.tweet.totalLikes+1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法like此筆tweet，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},unLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C["a"].unLike({tweetId:e});case 3:if(s=a.sent,"Success"===s.data.status){a.next=6;break}throw new Error(s.data.message);case 6:t.tweet.isLiked=!1,t.tweet.totalLikes=t.tweet.totalLikes-1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法like此筆tweet，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},afterOpenTweet:function(e){var t=e.isClickPopupTweet;this.isClickPopupTweet=t},openPopupTweet:function(){this.isClickPopupTweet=!0},closePopupTweet:function(e){var t=e.isClickPopupTweet;this.isClickPopupTweet=t},openPopupReplyList:function(){this.isClickPopupReplyList=!0},closePopupReplyList:function(e){var t=e.isClickPopupReplyList;this.isClickPopupReplyList=t}},created:function(){var e=localStorage.getItem("token");e||(c["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var t=this.$route.params.id;this.fetchTweet(t),this.fetchTweetReplies(t),this.user=this.currentUser},computed:Object(i["a"])({},Object(y["b"])(["currentUser"])),mixins:[p["b"],p["a"]]},b=R,k=(a("61ec"),Object(f["a"])(b,s,r,!1,null,"2df789b6",null));t["default"]=k.exports},cd4d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dSxCQAgEAPA4CTZfylHUYu3ULBRgwg5SJuAyANmgS05IisvEAxwKicuostXevluho+Q8AAhfiKPHI9IEMJjZ5+rIuYyEJF8+1IAAAAASUVORK5CYII="},de33:function(e,t,a){},f5b6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7VZdbtNAEJ611zwgUfkG+AakN3BOQDgB6VtFjeqqJOpDmji0oEoN4EhplLeUG7QnINwgnABzgzzXaw+zGxcldn4dixf4HpL17ux+87M7MwD/Ktg2wq7rmg/GU0tDzVy0LgQPBr4XwIZYSy4JxZO9YwSsMgQLNsMoBvjav764hbzkTq15DIgeSSlLESCgDWMWwyQtixrJIJrAWIk+/8hHYVge+FfBVuROvdECZF5ydFeE3N/Upc67ho0aGyaemsQQlfvXH8cbkT8SIyNLYzzodS5HkAOkBHmNtaQCIgz30x7Q0hsO3TMrsXgSaXo5L7EE7fUoFG0amtwwhun1DLluGFJT2hO3B1eb39yVCgCOaGjLcCwld13PpDhUpbtvOh98KAoIbfU/DcFicqELW00ijKBAqNCheiGlpeR0/dRijPEPKBwsoB/z6PTy+WLyBBjjBArnjjNnzpEjMCXANGbCX8AcOUMM1CTTXkDRQJX5JjefGr8WkvOIq4tBabEiczoUBOe0UZEpms79Pjs/R+77HhHjPQ1NwfdcKAqaNs0dAHdLySUizj31LBi2jurN17AjVHECLMncka5yGXKZ1WIGJ3JMd+DWqTdbkBNT5VElK5mq0+vLq5qKExsmsQo0Bnf0BO9lw6CUXFPhEosVcRzBQf9ztravrOeHZ56lC+ExxrLuR9budd57mT1UmJIiYoMspxGcLCJeSz6rhBFFNnngZdIw2HQvRr3OxZwrpZupBPvT5gPHQuevVhWnrXq4R0V4FP2cJVetlvFMWluZSmGXh9yTr2fVWRx2xNvaeVUgfKGhuW3zkZucejbLqZ1/Qxlb5T/sGg/rrS2EPOnPrF1aLQ12grRW39+l1doaMs5val4J/iMnfgM24i34Qh8jkgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-77afe556.ca6ae8b8.js.map