(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215996ae"],{1495:function(e,t,o){"use strict";o("d5ed")},b5ef:function(e,t,o){},d5ed:function(e,t,o){},e688:function(e,t,o){"use strict";o("b5ef")},ee09:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("navigation",{attrs:{userId:e.currentUser.id}}),o("div",{staticClass:"main"},[o("userTitle",{attrs:{userName:e.user.name,tweetNum:e.user.tweetsCount}}),o("navTabsFollow",{attrs:{userId:Number(e.$route.params.id)}}),o("div",{staticClass:"tweet-wrap"},e._l(e.followships,(function(t){return o("div",{key:t.id,staticClass:"tweet-card"},[o("div",{staticClass:"tweet-avatar"},[o("img",{attrs:{src:e._f("emptyAvatar")(t.followingUser.avatar),alt:""}})]),o("div",{staticClass:"tweet-content"},[o("div",{staticClass:"tweet-title"},[o("div",{staticClass:"tweet-name-group"},[o("p",{staticClass:"tweet-name"},[o("b",[e._v(e._s(t.followingUser.name))])]),t.isFollowed?o("div",{staticClass:"btn active",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.unFollow(t.followingId)}}},[e._v("正在跟隨")]):o("div",{staticClass:"btn",on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.addFollow(t.followingId)}}},[e._v("跟隨")])])]),o("div",{staticClass:"tweet-text"},[o("p",[e._v(" "+e._s(t.followingUser.introduction)+" ")])])])])})),0)],1),o("followTopTypeB",{key:e.componentKey,on:{"addFollow-From-followTop":e.addFollowFromfollowTop,"unFollow-From-followTop":e.unFollowFromfollowTop}})],1)},i=[],r=o("5530"),l=o("2909"),s=o("1da1"),a=(o("96cf"),o("b0c0"),o("d81d"),o("7db0"),o("d3b7"),o("3d01")),c=o("7e59"),u=o("8e6e"),w=o("477d"),f=o("2708"),d=o("1602"),p=o("2f62"),h=o("2fa3"),m=o("b025"),v={name:"selfPageFollowing",components:{navigation:a["a"],followTopTypeB:c["a"],userTitle:u["a"],navTabsFollow:w["a"]},data:function(){return{user:{name:"",tweetNum:-1},followships:[],componentKey:0}},methods:{fetchUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var n,i,r,l,s,a,c,u,w,f,p,h,m,v;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].getUser(e);case 3:n=o.sent,i=n.data,r=i.id,l=i.account,s=i.name,a=i.email,c=i.role,u=i.introduction,w=i.avatar,f=i.cover,p=i.followingCount,h=i.followerCount,m=i.isFollowing,v=i.tweetsCount,t.user={id:r,account:l,name:s,email:a,role:c,introduction:u,avatar:w,cover:f,followingCount:p,followerCount:h,isFollowing:m,tweetsCount:v},o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log("error",o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()},fetchUserFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].getUserFollowings(e);case 3:n=o.sent,t.followships=Object(l["a"])(n.data),t.followships.length<1&&h["a"].fire({icon:"info",title:"這個人沒有追蹤任何人"}),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log("error",o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()},isThisMe:function(e){this.isMe=this.currentUser.id==e},addFollow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,m["a"].addFollow({id:e});case 3:t.followships=t.followships.map((function(t){return t.followingId===e?Object(r["a"])(Object(r["a"])({},t),{},{isFollowed:!0}):t})),t.forceRenderFollowTop(),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),h["a"].fire({icon:"error",title:"無法follow此人，請稍後再試"});case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},unFollow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,m["a"].unFollow({followingId:e});case 3:t.followships=t.followships.map((function(t){return t.followingId===e?Object(r["a"])(Object(r["a"])({},t),{},{isFollowed:!1}):t})),t.forceRenderFollowTop(),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),h["a"].fire({icon:"error",title:"無法unFollow此人，請稍後再試"});case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()},forceRenderFollowTop:function(){this.componentKey+=1},addFollowFromfollowTop:function(e){if(this.$route.params.id==this.currentUser.id)this.followships.find((function(t){return t.followingId===e.id}))?this.followships=this.followships.map((function(t){return t.followingId===e.id?Object(r["a"])(Object(r["a"])({},t),{},{isFollowed:!0}):t})):this.followships.push({followingId:e.id,followingUser:{id:e.id,name:e.name,account:e.account,avatar:e.avatar,introduction:e.introduction},isFollowed:!0});else{var t=this.followships.find((function(t){return t.followingId===e.id}));t&&(this.followships=this.followships.map((function(t){return t.followingId===e.id?Object(r["a"])(Object(r["a"])({},t),{},{isFollowed:!0}):t})))}},unFollowFromfollowTop:function(e){this.$route.params.id,this.currentUser.id,this.followships.find((function(t){return t.followingId===e.id}))&&(this.followships=this.followships.map((function(t){return t.followingId===e.id?Object(r["a"])(Object(r["a"])({},t),{},{isFollowed:!0}):t})))}},computed:Object(r["a"])({},Object(p["b"])(["currentUser"])),created:function(){var e=localStorage.getItem("token");e||(h["a"].fire({icon:"warning",title:"請登入"}),this.$router.push("/login"));var t=this.$route.params.id;this.fetchUser(t),this.fetchUserFollowing(t),this.isThisMe(t)},watch:{"$route.params.id":{handler:function(e){this.fetchUser(e),this.fetchUserFollowing(e),this.isThisMe(e)},immediate:!0}},mixins:[f["b"],f["a"]]},g=v,b=(o("1495"),o("e688"),o("2877")),F=Object(b["a"])(g,n,i,!1,null,"4cad7d42",null);t["default"]=F.exports}}]);
//# sourceMappingURL=chunk-215996ae.0bf917b6.js.map