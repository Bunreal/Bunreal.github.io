(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2174a749"],{"0460":function(e,t,a){},"138a":function(e,t,a){},1653:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[e.isClickPopupReplyTweet?a("popupReply",{attrs:{tweet:e.tweetPopup,user:e.user},on:{"close-PopupReply":e.closePopupReply,"after-create-reply":e.afterCreateReply}}):e._e(),a("navigation",{attrs:{userId:e.currentUser.id}}),a("div",{staticClass:"main"},[a("userTitle",{attrs:{userName:e.user.name,tweetNum:2}}),e.isMe?a("userInfo",{attrs:{"initial-user":e.user}}):a("userInfoOther",{attrs:{"initial-user":e.user}}),a("navTabs",{attrs:{userId:e.currentUser.id}}),a("div",{staticClass:"tweet-wrap"},e._l(e.likes,(function(t){return a("div",{key:t.id,staticClass:"tweet-card"},[e._m(0,!0),a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"tweet-name-group"},[a("router-link",{staticClass:"tweet-name",attrs:{to:{name:"SelfPage",params:{id:t.Tweet.User.id}}}},[a("b",[e._v(e._s(t.Tweet.User.name))])]),a("p",{staticClass:"tweet-account fz14"},[e._v(" @"+e._s(t.Tweet.User.account)+"・3 小時 ")])],1),a("router-link",{staticClass:"tweet-text",attrs:{to:{name:"tweet",params:{id:t.TweetId}}}},[a("p",[e._v(" "+e._s(t.Tweet.description)+" ")])]),a("div",{staticClass:"tweet-count"},[a("div",{staticClass:"tweet-reply",on:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.openPopupReply(t.TweetId)}}},[e._m(1,!0),a("p",{staticClass:"fz14"},[a("b",[e._v(e._s(t.replyCount))])])]),a("div",{staticClass:"tweet-like"},[e._m(2,!0),a("p",{staticClass:"fz14"},[a("b",[e._v(e._s(t.likeCount))])])])])],1)])})),0)],1),a("followTop")],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-avatar"},[s("img",{attrs:{src:a("9c85"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-reply-img"},[s("img",{attrs:{src:a("f5b6"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tweet-like-img"},[s("img",{attrs:{src:a("3c8a"),alt:""}})])}],i=a("5530"),n=a("2909"),o=a("1da1"),p=(a("96cf"),a("b0c0"),a("7db0"),a("d3b7"),a("d9e2"),a("3d01")),c=a("447a"),u=a("5372"),l=a("87fa"),A=a("8e6e"),d=a("fc26"),f=a("f8df"),w=a("1602"),m=a("6783"),v=a("2708"),g=a("2f62"),C=a("2fa3"),h={name:"mainPageLikes",components:{navigation:p["a"],followTop:c["a"],userInfo:u["a"],userTitle:A["a"],navTabs:d["a"],userInfoOther:l["a"],popupReply:f["a"]},data:function(){return{user:{id:-1,account:"",name:"",email:"",role:"",introduction:"",avatar:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",cover:"https://dummyimage.com/600x400/a1a1a1/fff.jpg&text=+",followingCount:-1,followerCount:-1,isFollowing:!1,createdAt:"",updatedAt:""},likes:[],tweetPopup:{},isMe:!0,isClickPopupReplyTweet:!1}},methods:{fetchUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,i,n,o,p,c,u,l,A,d,f,m,v,g,C;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].getUser(e);case 3:s=a.sent,r=s.data.data.user,i=r.id,n=r.account,o=r.name,p=r.email,c=r.role,u=r.introduction,l=r.avatar,A=r.cover,d=r.isFollowing,f=r.createdAt,m=r.updatedAt,v=s.data.data,g=v.followingCount,C=v.followerCount,t.user={id:i,account:n,name:o,email:p,role:c,introduction:u,avatar:l,cover:A,followingCount:g,followerCount:C,isFollowing:d,createdAt:f,updatedAt:m},a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("error",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},fetchUserLikes:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w["a"].getUserLikes(e);case 3:s=a.sent,console.log("like res",s),t.likes=Object(n["a"])(s.data.data.tweets),t.likes.length<1&&C["a"].fire({icon:"info",title:"目前沒有喜歡的內容"}),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("error",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},isThisMe:function(e){this.isMe=this.currentUser.id==e},openPopupReply:function(e){console.log(e),this.tweetPopup=this.likes.find((function(t){return t.TweetId===e})),this.isClickPopupReplyTweet=!0},closePopupReply:function(e){var t=e.isClickPopupReplyTweet;this.isClickPopupReplyTweet=t},afterCreateReply:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,s=e.comment,r=e.tweetId,a.next=4,m["a"].postTweetsReply({comment:s,tweetId:r});case 4:if(i=a.sent,"Success"===i.data.status){a.next=7;break}throw new Error(i.message);case 7:t.$router.push({name:"tweet",params:{id:r}}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),C["a"].fire({icon:"error",title:"無法新增此筆tweetReply"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}},computed:Object(i["a"])({},Object(g["b"])(["currentUser"])),created:function(){var e=localStorage.getItem("token");e||(C["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var t=this.$route.params.id;this.fetchUser(t),this.fetchUserLikes(t),this.isThisMe(t)},watch:{"$route.params.id":{handler:function(e){this.fetchUser(e),this.fetchUserLikes(e),this.isThisMe(e)},immediate:!0}},mixins:[v["b"]]},R=h,y=(a("3425"),a("2877")),x=Object(y["a"])(R,s,r,!1,null,"2a4f233c",null);t["default"]=x.exports},3425:function(e,t,a){"use strict";a("138a")},"3c8a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VZLbhNBEK3q6WEREJgbmBPEYsUKYi4Qs2SFvYsgKIOUoAgleBwbFGILJoodZZf4BM4NMmLBgg3mBs4NLMECxZ5uqtq28GfGmSQWsMiT7Pl0db2qmvo0wDX+AXDaouM4icCeywBa8/wcaPiuOh3/wNtuhckvr24saMCUQJjXWp+CgGZ1p3R8YfLltbcroLVLEonJXehWd7YKg8clZz0pbfuQbhfGRTVAC7XOVSslPxb58uuNPGh06bZN2+ugwCfJNinKIuBi3yC/Wi6mmdiy7RNSlNRIRIrkNTRRYILkF0kuY4xAzNZ2tupTyY3HoD1WFAgrfbDttobXl9bdpKWCE9SQRARPacgYYq3rdlc6nue2h+VfrG46JPeJHVEQpPfL75uh5I7jJjp28I2VdS3r3jhxmAH9V8cUhScQgSEDTLQG78WwUGAHxgv6HUURM3iNwpvje44QGfoKpqBWKXr0KTgiC5zEoeRa6ZS5UgjhHHACkZE5NmKaoX+U93SeibnM4JUcERBgSkqhakMM7JWLRxAXCBM6Rz3XcGpeapGAv4ARcux9F1BKJWHWQDRRFUK0QskJPv9ZlvUIZgyqeZNPsvuzGUouA+lzVpJgZjgrrwpuu1xFpNv3PK8dSm4aBBrvEx15MwszAnW3Z3xVCCNVJCYl9a65oliZhffcfsnrLPeD/bHqmCDvDQDtmy4nbztwRUj7RoOvVEmF8TURtqFryZzpSKjzz9fepOCSMAMKdCrM60hy7liUdMZSBKtxmfAbo3uTEXhAhcmIqM2mH9PAMOG3b53ABdD7zpYJNxlQiGq/YpoS2bFyHDLyP/VybfMQYhIP5jsx71YrW26ULJ6rbHh8IhzLsx+54VqNIubhVKuUstN0n0s+bgAfi4JOJz1+juNGQuoafMqJQxybfGCADFTDZC8ZwAnJGWwOmTfu5LVW/bKkUJdLsUo0NvkA5CEdKjHf4+mPyd6Zrk0GFGqVd15cXRZcEF+/fPbvP3xcR6XuIuIDIv5FHeSD7Mqnex+LPlzjf8dv3gtecMwCXM4AAAAASUVORK5CYII="},"7db0":function(e,t,a){"use strict";var s=a("23e7"),r=a("b727").find,i=a("44d2"),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(n)},"9c85":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVhSURBVHgB3VrrUSNHEG4tbyhAzkAZ3PGTAspSBLYj8F0EHBH4iAAuAuMIfI4AuXj9tC4Cbwji/Qb3t7etGg09Oz0rXR3lr2pBrObRX793lgaNCScnJ637+/t2lmVv+M82X83n5+dmo9FoOsPy8urx/S93d3fdTqeT0xjQoBGwv7/fnJ6e3mSB3/GfLaqHnK/PrIRPo5CqReTg4KDNGv2Nvmp+nNhjQtt1CCURYQu0Jicnd5jEz/RtkUzITOT4+Hjz8fHxo+fz3xI577W9tra2ZxlsInJ4eLjDvz7Q98Hu+vr6VmxQJREE89TU1D5/fEvfFz12Nfa0Tj80IEjkFZEQVJLJQrNeGQngbSmTCtUidWOCg5O4rhBntuLi4ljcA7jW0MPDAz09PRFrtrhwrwbUmHlB5Ojo6B1v8DslAALPzs7SzMzMQHALbm9v6fr6uiCXiC0ms+veGNoVdaI0X4sMgNBzc3MFiVEAMrgS0GeLrrh1ZtL9lkmgWrfIAFhhaWmp+O0DLgPXgaZF2yDN6xcu5wPKgDXPzs6s1kFrBPf/RW4MLFJa41/LKiESiAFoFr9D/o85IrgPuNrl5SVZwXt0NjY2usW6crO0RhQaCa74dH5+Xmg0FsTQOIT1XQlrJLoXlf3e18/4kWKNZrM5RIJb8UIwV3i4kQQ/xoIcxvhuMz8/P4ivq6srurm5oVTw2j+gthQSsd+aUi1cwiUBDV5cXAyRwPfLy8tDYxEbuOe7IuZjLqxRh4Qre7Eya/Cn2ATxbVcI3xWqEgCstLCwMHQPJEAAbhna0yDXr8X6VreCEBKgcCdYwhdU07oPCA1XiwF7IcNZgp9dtJVxGmvHBkJIIQE30Bb33S4EVP4YxPoYa1mTPaOTcQBG+yl3cwSln5UmJibMRdFCRJQitScGcMh48JvYQCliyPOaWywuLpIVEA7EQ8B3bo3RCqiy5o+wWys2UBbT8ryk2BRUCecrpYq0AE+tJiIQFAGutQ9ahbasp0GLMwsRHDuZVAl30FwKm1pM721auKi2lhZnxm66afYJjYglEH2E2nYQTHkE8AEi/dgg6WR9pLoVLBGq4PLgpd23wEQEtUODxX/dNZC6q6C5XGhvF2zJ3GyRwAJkgXTHMe0ioWhzY+B184x//G0YSHWBuWhnLA9Mmntp7qbM+wIivdjA0GIxgvgezyiaVpGl/CYS8N3L0pfxWr2MN+lSTWg+LYDwp6enQRLokrVeCu4lc7C+xZJ4PZGVD/A51QAykC+o1InQ8zcShLT6bjPqzkc8JTwx5uCQlZP/sMzwgxuCQuuIAWyKrrjf7794YhRAaL/VRxH0rSLrGuPqL/wuVuAY2CUjtNoBdwARWEIjgMKJR2QtJqAc9Fep/ZpAZB+omE8XcZ7Vjk2UIIXwuEIBL0c/0LglTUP7UEao+Aawxwd17/Fh0CixQNu8YTs2U05BoEUQgi/L+RVIypXabkivZUm3ArwMks9Du/Fx6Z9MyPQ2ChuDTEp1r4IUzTrWKORxv2FXweFwtNIDEpCpZ1EaqrJcALlrDeCF/TlWcLyyQwmoOj0MQdI0UnjqITa77Xv/lZzqyPzWdpcHb1IiYq8VIDBiAFdVoqgCz/nEx6QvzuGCEcmW+Yde14seoMdxsaJ9EUzeeM2FifR60CtlUvH/fxnqom7MjAOhmPBh6guwEDIF1Wwu64AJQPtbFhKAucFBuoN5OfOYGsxRwCQ+c2Zb8d8TVqHWsQUOvrmif5ST8DGii1ZJ3kKlYNR/c8I/2XwoX0u0qB5yPEagi60K5hhGIuICpHCyjwPl8jy5RQ45+Dzfh6B9nBPgEZszYnd1dTWnMeA/QzFJCr4A/G0AAAAASUVORK5CYII="},f5b6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7VZdbtNAEJ611zwgUfkG+AakN3BOQDgB6VtFjeqqJOpDmji0oEoN4EhplLeUG7QnINwgnABzgzzXaw+zGxcldn4dixf4HpL17ux+87M7MwD/Ktg2wq7rmg/GU0tDzVy0LgQPBr4XwIZYSy4JxZO9YwSsMgQLNsMoBvjav764hbzkTq15DIgeSSlLESCgDWMWwyQtixrJIJrAWIk+/8hHYVge+FfBVuROvdECZF5ydFeE3N/Upc67ho0aGyaemsQQlfvXH8cbkT8SIyNLYzzodS5HkAOkBHmNtaQCIgz30x7Q0hsO3TMrsXgSaXo5L7EE7fUoFG0amtwwhun1DLluGFJT2hO3B1eb39yVCgCOaGjLcCwld13PpDhUpbtvOh98KAoIbfU/DcFicqELW00ijKBAqNCheiGlpeR0/dRijPEPKBwsoB/z6PTy+WLyBBjjBArnjjNnzpEjMCXANGbCX8AcOUMM1CTTXkDRQJX5JjefGr8WkvOIq4tBabEiczoUBOe0UZEpms79Pjs/R+77HhHjPQ1NwfdcKAqaNs0dAHdLySUizj31LBi2jurN17AjVHECLMncka5yGXKZ1WIGJ3JMd+DWqTdbkBNT5VElK5mq0+vLq5qKExsmsQo0Bnf0BO9lw6CUXFPhEosVcRzBQf9ztravrOeHZ56lC+ExxrLuR9budd57mT1UmJIiYoMspxGcLCJeSz6rhBFFNnngZdIw2HQvRr3OxZwrpZupBPvT5gPHQuevVhWnrXq4R0V4FP2cJVetlvFMWluZSmGXh9yTr2fVWRx2xNvaeVUgfKGhuW3zkZucejbLqZ1/Qxlb5T/sGg/rrS2EPOnPrF1aLQ12grRW39+l1doaMs5val4J/iMnfgM24i34Qh8jkgAAAABJRU5ErkJggg=="},f8df:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popupReply-wrap"},[s("div",{staticClass:"overlay",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReply.apply(null,arguments)}}}),s("div",{staticClass:"popupReply"},[s("div",{staticClass:"popupReply-colse"},[s("div",{staticClass:"popupReply-colse-img",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closePopupReply.apply(null,arguments)}}},[s("img",{attrs:{src:a("3e02"),alt:""}})])]),s("div",{staticClass:"popupReply-text-wrap"},[s("div",{staticClass:"popupReply-user"},[s("div",{staticClass:"popupReply-avatar"},[s("div",{staticClass:"popupReply-avatar-img"},[s("img",{attrs:{src:e._f("emptyImage")(e.user.avatar),alt:""}})])]),s("div",{staticClass:"popupReply-content"},[s("div",{staticClass:"popupReply-name-group"},[s("p",{staticClass:"popupReply-name"},[s("b",[e._v(e._s(e.user.name))])]),s("p",{staticClass:"popupReply-account fz14"},[e._v(" @"+e._s(e.user.account)+"・"+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])]),s("div",{staticClass:"popupReply-text"},[s("p",[e._v(" "+e._s(e.tweet.description)+" ")]),s("p",{staticClass:"reply-to fz14"},[s("span",[e._v("回覆")]),e._v(" @"+e._s(e.user.name))])])])]),s("div",{staticClass:"popupReply-again-inner"},[s("div",{staticClass:"popupReply-again-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(e.user.avatar),alt:""}})]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.popupText,expression:"popupText"}],attrs:{name:"",id:"",maxlength:"80",placeholder:"推你的回覆"},domProps:{value:e.popupText},on:{input:function(t){t.target.composing||(e.popupText=t.target.value)}}})]),s("div",{staticClass:"popupReply-btn-wrap"},[e.popupText.length>=80?s("div",{staticClass:"post-text-num-warning"},[e._v(" 字數不可超過 80 字 ")]):e._e(),e.noZero?s("div",{staticClass:"post-text-num-warning"},[e._v("不得為空白")]):e._e(),s("div",{staticClass:"btn popupReply-btn active",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._v(" 推文 ")])])])])])},r=[],i=(a("498a"),a("2708")),n={name:"popupReply",props:{tweet:{type:Object,required:!0},user:{type:Object,required:!0}},data:function(){return{popupText:"",noZero:!1}},watch:{popupText:function(){this.popupText&&(this.noZero=!1)}},methods:{closePopupReply:function(){this.$emit("close-PopupReply",{isClickPopupReplyTweet:!1})},handleSubmit:function(){this.popupText.trim()?this.$emit("after-create-reply",{tweetId:this.tweet.id,comment:this.popupText}):this.noZero=!0}},mixins:[i["b"],i["a"]]},o=n,p=(a("f9fe"),a("2877")),c=Object(p["a"])(o,s,r,!1,null,"3aab9174",null);t["a"]=c.exports},f9fe:function(e,t,a){"use strict";a("0460")}}]);
//# sourceMappingURL=chunk-2174a749.bb745698.js.map