(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024ce8bf"],{"8c89":function(t,e,s){},"92bc":function(t,e,s){},c01e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[t.isClickPopupReplyList?a("popupReplyList",{attrs:{tweet:t.tweet,user:t.user},on:{"close-PopupReplyList":t.closePopupReplyList,"after-create-reply-list":t.afterCreateReplyList}}):t._e(),a("navigation"),a("div",{staticClass:"reply-wrap"},[a("router-link",{staticClass:"reply-title",attrs:{to:"/tweets"}},[a("div",{staticClass:"reply-forward"},[a("img",{attrs:{src:s("cd4d"),alt:""}})]),a("h4",[t._v("推文")])]),a("div",{staticClass:"reply"},[a("div",{staticClass:"reply-inner"},[a("router-link",{staticClass:"reply-user",attrs:{to:{name:"SelfPage",params:{id:t.tweet.User.id}}}},[a("div",{staticClass:"reply-avatar"},[a("img",{attrs:{src:t.tweet.User.avatar,alt:""}})]),a("div",{staticClass:"reply-name-group"},[a("p",{staticClass:"reply-name"},[a("b",[t._v(t._s(t.tweet.User.name))])]),a("p",{staticClass:"reply-account fz14"},[t._v(" @"+t._s(t.tweet.User.account)+"・"+t._s(t._f("fromNow")(t.tweet.createdAt))+" ")])])]),a("div",{staticClass:"reply-text"},[t._v(" "+t._s(t.tweet.description)+" ")]),a("p",{staticClass:"fz14 reply-time"},[t._v(t._s(t.tweet.updatedAt))])],1),t._m(0),a("div",{staticClass:"reply-count-btn"},[a("div",{staticClass:"reply-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openPopupReplyList.apply(null,arguments)}}},[a("img",{attrs:{src:s("f5b6"),alt:""}})]),t.tweet.isLiked?a("div",{staticClass:"like-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.unLike(t.tweet.id)}}},[a("img",{attrs:{src:s("7e3a"),alt:""}})]):t._e(),t.tweet.isLiked?t._e():a("div",{staticClass:"like-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addLike(t.tweet.id)}}},[a("img",{attrs:{src:s("3c8a"),alt:""}})])])]),a("div",{staticClass:"reply-tweet-wrap"},t._l(t.replies,(function(e){return a("div",{key:e.id,staticClass:"reply-tweet-card"},[a("div",{staticClass:"reply-tweet-avatar"},[a("img",{attrs:{src:e.User.avatar,alt:""}})]),a("div",{staticClass:"reply-tweet-content"},[a("div",{staticClass:"reply-tweet-name-group"},[a("p",{staticClass:"reply-tweet-name"},[a("b",[t._v(t._s(e.User.name))]),a("span",[t._v("@"+t._s(e.User.account)+"・"+t._s(t._f("fromNow")(e.createdAt)))])]),a("p",{staticClass:"reply-to fz14"},[a("span",[t._v("回覆")]),t._v(" @"+t._s(e.User.name)+" ")])]),a("div",{staticClass:"reply-tweet-text"},[a("p",[t._v(" "+t._s(e.comment)+" ")])]),t._m(1,!0)])])})),0)],1),a("followTop")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-count"},[s("div",{staticClass:"reply-num"}),s("div",{staticClass:"like-num"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reply-tweet-count"},[a("div",{staticClass:"reply-tweet-reply"},[a("div",{staticClass:"reply-tweet-reply-img"},[a("img",{attrs:{src:s("f5b6"),alt:""}})]),a("p",{staticClass:"fz14"},[a("b",[t._v("0")])])]),a("div",{staticClass:"reply-tweet-like"},[a("div",{staticClass:"reply-tweet-like-img"},[a("img",{attrs:{src:s("3c8a"),alt:""}})]),a("p",{staticClass:"fz14"})])])}],r=s("1da1"),p=(s("b0c0"),s("96cf"),s("2708")),n=s("2fa3"),l=s("3d01"),c=s("447a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popupReply-wrap"},[a("div",{staticClass:"overlay",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.closePopupReplyList.apply(null,arguments)}}}),a("div",{staticClass:"popupReply"},[a("div",{staticClass:"popupReply-colse"},[a("div",{staticClass:"popupReply-colse-img",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.closePopupReplyList.apply(null,arguments)}}},[a("img",{attrs:{src:s("3e02"),alt:""}})])]),a("div",{staticClass:"popupReply-text-wrap"},[a("div",{staticClass:"popupReply-user"},[a("div",{staticClass:"popupReply-avatar"},[a("div",{staticClass:"popupReply-avatar-img"},[a("img",{attrs:{src:t.tweet.User.avatar,alt:""}})])]),a("div",{staticClass:"popupReply-content"},[a("div",{staticClass:"popupReply-name-group"},[a("p",{staticClass:"popupReply-name"},[a("b",[t._v(t._s(t.tweet.User.name))])]),a("p",{staticClass:"popupReply-account fz14"},[t._v(" @"+t._s(t.tweet.User.account)+"・"+t._s(t._f("fromNow")(t.tweet.createdAt))+" ")])]),a("div",{staticClass:"popupReply-text"},[a("p",[t._v(" "+t._s(t.tweet.description)+" ")]),a("p",{staticClass:"reply-to fz14"},[a("span",[t._v("回覆")]),t._v(" @"+t._s(t.tweet.User.name)+" ")])])])]),a("div",{staticClass:"popupReply-again-inner"},[a("div",{staticClass:"popupReply-again-avatar"},[a("img",{attrs:{src:t.user.avatar,alt:""}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.popupText,expression:"popupText"}],attrs:{name:"",id:"",maxlength:"80",placeholder:"推你的回覆"},domProps:{value:t.popupText},on:{input:function(e){e.target.composing||(t.popupText=e.target.value)}}})]),a("div",{staticClass:"popupReply-btn-wrap"},[t.popupText.length>=80?a("div",{staticClass:"post-text-num-warning"},[t._v(" 字數不可超過 80 字 ")]):t._e(),t.popupText.length<=0?a("div",{staticClass:"post-text-num-warning"},[t._v(" 不得為空白 ")]):t._e(),a("div",{staticClass:"btn popupReply-btn active",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")])])])])])},u=[],d=(s("498a"),{name:"popupReplyList",props:{tweet:{type:Object,required:!0},user:{type:Object,required:!0}},data:function(){return{popupText:""}},methods:{closePopupReplyList:function(){this.$emit("close-PopupReplyList",{isClickPopupReplyList:!1})},handleSubmit:function(){console.log("handleSubmit33"),this.popupText.trim()&&this.$emit("after-create-reply-list",{tweetId:this.tweet.id,comment:this.popupText})}},mixins:[p["a"]]}),v=d,m=(s("c8d5"),s("2877")),w=Object(m["a"])(v,o,u,!1,null,"ef109fc6",null),f=w.exports,y=s("6783"),C=s("1602"),g={status:"success",user:{id:1,account:"user1",name:"user1",email:"user1@example.com",password:"$2a$10$DRteVVsafLSZdoetjOpfdeSYGf3t5SuswRL3sRrSvdGpS3ACmU5NG",role:"user",introduction:"Deleniti est id inventore.",avatar:"https://loremflickr.com/320/240/people/?random=73.0908396968221",cover:"https://loremflickr.com/320/240/restaurant,food/?random=79.46570629965461",createdAt:"2022-05-13T15:55:16.000Z",updatedAt:"2022-05-13T15:55:16.000Z"}},A={name:"tweet",components:{navigation:l["a"],followTop:c["a"],popupReplyList:f},data:function(){return{isClickPopupReplyList:!1,tweet:{},replies:{},user:g.user}},methods:{addLike:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,C["a"].addLike({tweetId:t});case 3:a=s.sent,console.log(a),e.tweet.isLiked=!0,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),n["a"].fire({icon:"error",title:"無法like此筆tweet，請稍後再試"});case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},fetchTweet:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,y["a"].getTweet(t);case 3:a=s.sent,i=a.data,r=i.data.tweet,e.tweet=r,console.log("this.tweet",e.tweet),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),n["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},fetchTweetReplies:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,y["a"].getTweetReplies(t);case 3:a=s.sent,i=a.data,r=i.data.replies,e.replies=r,console.log("replies",r),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),n["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},afterCreateReplyList:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,a=t.comment,i=t.tweetId,s.next=4,y["a"].postTweetsReply({comment:a,tweetId:i});case 4:r=s.sent,console.log("data",r),console.log("replies",e.replies),e.replies.unshift({comment:a,tweetId:i,User:{id:e.user.id,account:e.user.account,name:e.user.name,avatar:e.user.avatar},createdAt:new Date}),e.isClickPopupReplyList=!1,s.next=14;break;case 11:s.prev=11,s.t0=s["catch"](0),n["a"].fire({icon:"error",title:"無法新增此筆tweetReply"});case 14:case"end":return s.stop()}}),s,null,[[0,11]])})))()},openPopupReplyList:function(){console.log(this.isClickPopupReplyList),this.isClickPopupReplyList=!0},closePopupReplyList:function(t){var e=t.isClickPopupReplyList;this.isClickPopupReplyList=e}},created:function(){var t=this.$route.params.id;this.fetchTweet(t),this.fetchTweetReplies(t)},mixins:[p["a"]]},R=A,h=(s("e4af"),Object(m["a"])(R,a,i,!1,null,"7aa9b7e6",null));e["default"]=h.exports},c8d5:function(t,e,s){"use strict";s("8c89")},cd4d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dSxCQAgEAPA4CTZfylHUYu3ULBRgwg5SJuAyANmgS05IisvEAxwKicuostXevluho+Q8AAhfiKPHI9IEMJjZ5+rIuYyEJF8+1IAAAAASUVORK5CYII="},e4af:function(t,e,s){"use strict";s("92bc")}}]);
//# sourceMappingURL=chunk-024ce8bf.de77e8b9.js.map