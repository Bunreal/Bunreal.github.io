(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d36bf8c"],{"0af3":function(e,t,o){"use strict";o("2348")},2348:function(e,t,o){},"276e":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("navigation",{attrs:{userId:e.currentUser.id}}),o("div",{staticClass:"main"},[o("userTitle",{attrs:{userName:e.user.name,tweetNum:e.user.tweetsCount}}),o("navTabsFollow",{attrs:{userId:Number(e.$route.params.id)}}),o("div",{staticClass:"tweet-wrap"},e._l(e.followships,(function(t){return o("div",{key:t.id,staticClass:"tweet-card"},[o("div",{staticClass:"tweet-avatar"},[o("img",{attrs:{src:e._f("emptyAvatar")(t.followerUser.avatar),alt:""}})]),o("div",{staticClass:"tweet-content"},[o("div",{staticClass:"tweet-title"},[o("div",{staticClass:"tweet-name-group"},[o("p",{staticClass:"tweet-name"},[o("b",[e._v(e._s(t.followerUser.name))])]),t.isFollowed?o("div",{staticClass:"btn active",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.unFollow(t.followerId)}}},[e._v("正在跟隨")]):o("div",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.addFollow(t.followerId)}}},[e._v("跟隨")])])]),o("div",{staticClass:"tweet-text"},[o("p",[e._v(" "+e._s(t.followerUser.introduction)+" ")])])])])})),0)],1),o("followTopTypeB",{key:e.componentKey,on:{"addFollow-From-followTop":e.addFollowFromfollowTop,"unFollow-From-followTop":e.unFollowFromfollowTop}})],1)},n=[],a=o("5530"),l=o("2909"),s=o("1da1"),i=(o("96cf"),o("b0c0"),o("d81d"),o("3d01")),c=o("7e59"),u=o("8e6e"),w=o("477d"),f=o("2708"),d=o("1602"),p=o("2f62"),h=o("2fa3"),m=o("b025"),v={name:"selfPageFollower",components:{navigation:i["a"],followTopTypeB:c["a"],userTitle:u["a"],navTabsFollow:w["a"]},data:function(){return{user:{name:"",tweetNum:-1},followships:[],componentKey:0}},methods:{fetchUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var r,n,a,l,s,i,c,u,w,f,p,h,m,v;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].getUser(e);case 3:r=o.sent,n=r.data,a=n.id,l=n.account,s=n.name,i=n.email,c=n.role,u=n.introduction,w=n.avatar,f=n.cover,p=n.followingCount,h=n.followerCount,m=n.isFollowing,v=n.tweetsCount,t.user={id:a,account:l,name:s,email:i,role:c,introduction:u,avatar:w,cover:f,followingCount:p,followerCount:h,isFollowing:m,tweetsCount:v},o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log("error",o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()},fetchUserFollower:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].getUserFollowers(e);case 3:r=o.sent,t.followships=Object(l["a"])(r.data),t.followships.length<1&&h["a"].fire({icon:"info",title:"沒有人正在追蹤這個人"}),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log("error",o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()},isThisMe:function(e){this.isMe=this.currentUser.id==e},addFollow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,m["a"].addFollow({id:e});case 3:t.followships=t.followships.map((function(t){return t.followerId===e?Object(a["a"])(Object(a["a"])({},t),{},{isFollowed:!0}):t})),t.forceRenderFollowTop(),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),h["a"].fire({icon:"error",title:"無法follow此人，請稍後再試"});case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},unFollow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,m["a"].unFollow({followingId:e});case 3:t.followships=t.followships.map((function(t){return t.followerId===e?Object(a["a"])(Object(a["a"])({},t),{},{isFollowed:!1}):t})),t.forceRenderFollowTop(),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),h["a"].fire({icon:"error",title:"無法unFollow此人，請稍後再試"});case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},forceRenderFollowTop:function(){this.componentKey+=1},addFollowFromfollowTop:function(e){console.log(e.id),this.followships=this.followships.map((function(t){return t.followerId===e.id?(console.log("user",t),Object(a["a"])(Object(a["a"])({},t),{},{isFollowed:!0})):t}))},unFollowFromfollowTop:function(e){this.followships=this.followships.map((function(t){return t.followerId===e.id?(console.log("user",t),Object(a["a"])(Object(a["a"])({},t),{},{isFollowed:!1})):t}))}},computed:Object(a["a"])({},Object(p["b"])(["currentUser"])),created:function(){var e=localStorage.getItem("token");e||(h["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var t=this.$route.params.id;this.fetchUser(t),this.fetchUserFollower(t),this.isThisMe(t)},watch:{"$route.params.id":{handler:function(e){this.fetchUser(e),this.fetchUserFollower(e),this.isThisMe(e)},immediate:!0}},mixins:[f["b"],f["a"]]},F=v,b=(o("8068"),o("0af3"),o("2877")),g=Object(b["a"])(F,r,n,!1,null,"7d2e3d16",null);t["default"]=g.exports},7121:function(e,t,o){},8068:function(e,t,o){"use strict";o("7121")}}]);
//# sourceMappingURL=chunk-2d36bf8c.30609c0d.js.map