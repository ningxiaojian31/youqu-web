(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/netty/main_chat"],{"07b8":function(t,e,n){},"2ab7":function(t,e,n){"use strict";var a=n("07b8"),s=n.n(a);s.a},8230:function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},9884:function(t,e,n){"use strict";(function(t){n("b554"),n("921b");a(n("66fd"));var e=a(n("9e81"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9e81":function(t,e,n){"use strict";n.r(e);var a=n("8230"),s=n("d6a3");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("2ab7");var i,u=n("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=c.exports},d6a3:function(t,e,n){"use strict";n.r(e);var a=n("fe03"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},fe03:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("3137"));var s=o(n("769f"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("components/footer").then(n.bind(null,"5c39"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/chatmsg")]).then(n.bind(null,"f0d0"))},c={components:{mtFooter:i,chatMsg:u},data:function(){return{userList:[],groupList:[],chatList:[],isLoad:!1,userId:"",socketTask:null,is_open_socket:!1,ops:{url:null,data:null}}},onLoad:function(){var e=this;this.connectSocketInit();var n="";t.getStorage({key:"user",success:function(t){n=t.data.token,e.userId=t.data.id.toString()}}),""==n&&t.navigateTo({url:"/pages/shilu-login/login"})},onPullDownRefresh:function(){a("log","下拉刷新==="," at pages\\netty\\main_chat.vue:119"),this.loadChatSnapshot(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},mounted:function(){},onShow:function(){this.loadChatSnapshot()},methods:{playMusic:function(t){audioClass.play(t)},goItem:function(e){if(e.friendid==this.userId){var n=e.friendid;e.friendid=e.userid,e.userid=n,t.navigateTo({url:"chat?userid="+e.userid+"&friendid="+e.friendid+"&nickname="+e.nickname+"&image="+e.image+"&username="+e.username}),a("log","开始跳转----1111"," at pages\\netty\\main_chat.vue:144")}else{JSON.stringify(e);t.navigateTo({url:"chat?userid="+e.userid+"&friendid="+e.friendid+"&nickname="+e.nickname+"&image="+e.image+"&username="+e.username}),a("log","开始跳转----2222"," at pages\\netty\\main_chat.vue:150")}},connectSocketInit:function(){var e=this,n=this;this.socketTask=t.connectSocket({url:s.default.wsHost,success:function(t){a("log","websocket连接成功"," at pages\\netty\\main_chat.vue:166")}}),this.socketTask.onOpen(function(t){a("log","WebSocket连接正常打开中...！"," at pages\\netty\\main_chat.vue:172"),null!=e.socketTask&&void 0!=e.socketTask&&(Vue.prototype.socketTask=e.socketTask);var o=s.default.getMessage(s.default.MSG_TYPE_CONN,n.userId,null,null,null,null);a("log","发送用户关联通道信息================"," at pages\\netty\\main_chat.vue:180"),n.chat(JSON.stringify(o)),e.socketTask.onMessage(function(t){a("log","收到服务器内容："+t.data," at pages\\netty\\main_chat.vue:186")}),setInterval(function(){n.keepalive()},1e4)}),this.socketTask.onMessage(function(t){a("log","收到服务器内容："+t.data," at pages\\netty\\main_chat.vue:196"),n.loadChatSnapshot()}),this.socketTask.onClose(function(){a("log","已经被关闭了"," at pages\\netty\\main_chat.vue:203")})},closeSocket:function(){this.socketTask.close({success:function(t){this.is_open_socket=!1,a("log","关闭成功",t," at pages\\netty\\main_chat.vue:212")},fail:function(t){a("log","关闭失败",t," at pages\\netty\\main_chat.vue:215")}})},chat:function(t){var e=this;null!=this.socketTask&&void 0!=this.socketTask?(e.socketTask.send({data:t,success:function(){},fail:function(){}}),JSON.parse(t).type==s.default.MSG_TYPE_SEND&&e.loadChatSnapshot()):(e.connectSocketInit(),e.socketTask.send({data:t,success:function(){},fail:function(){}}))},keepalive:function(){var t=s.default.getMessage(s.default.MSG_TYPE_KEEPALIVE,null,null,null,null,null);a("log","发送心跳包================"," at pages\\netty\\main_chat.vue:260"),this.chat(JSON.stringify(t))},loadChatSnapshot:function(){var t=this,e=s.default.apiHost+"/chat/chatrecord/findListByUserId?userid="+t.userId,n="GET";s.default.request(e,null,n).then(function(e){for(var n=e.data,s=0;s<n.length;s++)Vue.set(t.chatList,s,n[s]);a("log","登录人："+t.userId," at pages\\netty\\main_chat.vue:275"),a("log","信息："+JSON.stringify(t.chatList)," at pages\\netty\\main_chat.vue:276")})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["9884","common/runtime","common/vendor"]]]);