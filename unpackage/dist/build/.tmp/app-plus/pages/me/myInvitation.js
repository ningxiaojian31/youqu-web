(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myInvitation"],{"08e9":function(e,t,n){"use strict";n.r(t);var a=n("4561"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},"27df":function(e,t,n){"use strict";var a=n("2a3e"),r=n.n(a);r.a},"2a3e":function(e,t,n){},"3df3":function(e,t,n){"use strict";(function(e){n("b554"),n("921b");a(n("66fd"));var t=a(n("cd31"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},4561:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),i=u(n("769f")),o=u(n("b635"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,i,o){try{var u=e[i](o),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,u,"next",e)}function u(e){s(i,a,r,o,u,"throw",e)}o(void 0)})}}var c,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},v=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},h=0,m=!1,p={components:{mixPulldownRefresh:f,mixLoadMore:v,mixAdvert:d},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[],invList:[],currentPage:1,pageSize:10,userId:""}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=l(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,e.getStorage({key:"user",success:function(e){n.userId=e.data.id}}),h=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){},methods:{toPersonal:function(){var t=this;e.navigateTo({url:"../me/personal?userId="+t.userId})},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/pages/index/publish/publish"})},loadTabbars:function(){var e=o.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadInvList("add")},loadInvList:function(t){var n=this,r=this,o=this.tabBars[this.tabCurrentIndex];if("add"===t){if(2===o.loadMoreStatus)return;o.loadMoreStatus=1}else"refresh"===t&&(o.refreshing=!0);var u={currentPage:this.currentPage,pageSize:this.pageSize},s={userId:r.userId},l=i.default.apiHost+"/invitation/tInvitation/list?currentPage="+u.currentPage+"&pageSize="+u.pageSize,c="POST";i.default.request(l,s,c).then(function(e){a("log","请求列表成功=============="," at pages\\me\\myInvitation.vue:182"),setTimeout(function(){var a=null;a=e.data.data;for(var i=a.records,u=0;u<i.length;u++)if(null!=i[u].invImage&&""!=i[u].invImage){var s=i[u].invImage.split(",");i[u].invImage=s}"refresh"===t&&(r.invList=[]),r.invList=i,"refresh"===t&&(n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),o.refreshing=!1,o.loadMoreStatus=0),"add"===t&&(o.loadMoreStatus=r.invList.length<10?2:0)},0)}).catch(function(t){e.showToast({title:"服务器异常...稍后再试",duration:2e3})})},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},a=t.invVideo?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(a,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){a("log","刷新......"," at pages\\me\\myInvitation.vue:249"),this.loadInvList("refresh")},loadMore:function(){a("log","触底......"," at pages\\me\\myInvitation.vue:254"),this.loadInvList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=l(r.default.mark(function e(t){var n,a,i,o,u,s=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(m&&(clearTimeout(m),m=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof c){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:c=e.sent;case 7:c.scrollLeft,a=0,i=0,o=0;case 11:if(!(o<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+o);case 14:u=e.sent,a+=u.width,o===n&&(i=u.width);case 17:o++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),m=setTimeout(function(){s.scrollLeft=a-i/2>h/2?a-i/2-h/2:0,"object"===typeof t&&(s.tabCurrentIndex=n),s.tabCurrentIndex=n;var e=s.tabBars[s.tabCurrentIndex];0!==s.tabCurrentIndex&&!0!==e.loaded&&(s.loadInvList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,a){var r=e.createSelectorQuery().select("#"+t);r.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},cd31:function(e,t,n){"use strict";n.r(t);var a=n("fcba"),r=n("08e9");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("27df");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},fcba:function(e,t,n){"use strict";var a={"mix-pulldown-refresh":()=>Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e")),"mix-load-more":()=>n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})}},[["3df3","common/runtime","common/vendor"]]]);