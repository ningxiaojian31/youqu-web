(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myCollect"],{"1fd6":function(e,t,n){},"31de":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a")),o=u(n("769f")),i=u(n("b635"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,u,"next",e)}function u(e){l(o,r,a,i,u,"throw",e)}i(void 0)})}}var c,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},m=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},v=0,h=!1,b={components:{mixPulldownRefresh:f,mixLoadMore:m,mixAdvert:d},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[],invList:[],currentPage:1,pageSize:10,userId:""}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=s(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,e.getStorage({key:"user",success:function(e){n.userId=e.data.id}}),v=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){},methods:{toPersonal:function(t){r("log","userId:"+t," at pages\\me\\myCollect.vue:125"),e.navigateTo({url:"../me/personal?userId="+t})},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/pages/index/publish/publish"})},loadTabbars:function(){var e=i.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadInvList("add")},loadInvList:function(t){var n=this,a=this,i=this.tabBars[this.tabCurrentIndex];if("add"===t){if(2===i.loadMoreStatus)return;i.loadMoreStatus=1}else"refresh"===t&&(i.refreshing=!0);var u={currentPage:this.currentPage,pageSize:this.pageSize,userId:a.userId},l=o.default.apiHost+"/invitation/tInvitation/front/collect/list?currentPage="+u.currentPage+"&pageSize="+u.pageSize+"&userId="+u.userId,s="GET";o.default.request(l,null,s).then(function(e){r("log","请求列表成功=============="," at pages\\me\\myCollect.vue:181"),setTimeout(function(){var r=null;r=e.data.data;for(var o=r.records,u=0;u<o.length;u++)if(null!=o[u].invImage&&""!=o[u].invImage){var l=o[u].invImage.split(",");o[u].invImage=l}"refresh"===t&&(a.invList=[]),a.invList=o,"refresh"===t&&(n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),i.refreshing=!1,i.loadMoreStatus=0),"add"===t&&(i.loadMoreStatus=a.invList.length<10?2:0)},0)}).catch(function(t){e.showToast({title:"服务器异常...稍后再试",duration:2e3})})},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},r=t.invVideo?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(r,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){r("log","刷新......"," at pages\\me\\myCollect.vue:248"),this.loadInvList("refresh")},loadMore:function(){r("log","触底......"," at pages\\me\\myCollect.vue:253"),this.loadInvList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=s(a.default.mark(function e(t){var n,r,o,i,u,l=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(h&&(clearTimeout(h),h=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof c){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:c=e.sent;case 7:c.scrollLeft,r=0,o=0,i=0;case 11:if(!(i<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+i);case 14:u=e.sent,r+=u.width,i===n&&(o=u.width);case 17:i++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),h=setTimeout(function(){l.scrollLeft=r-o/2>v/2?r-o/2-v/2:0,"object"===typeof t&&(l.tabCurrentIndex=n),l.tabCurrentIndex=n;var e=l.tabBars[l.tabCurrentIndex];0!==l.tabCurrentIndex&&!0!==e.loaded&&(l.loadInvList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,r){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},"3dc5":function(e,t,n){"use strict";(function(e){n("b554"),n("921b");r(n("66fd"));var t=r(n("7bb3"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"45b4":function(e,t,n){"use strict";n.r(t);var r=n("31de"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"7bb3":function(e,t,n){"use strict";n.r(t);var r=n("c6ba"),a=n("45b4");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("86c0");var i,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=l.exports},"86c0":function(e,t,n){"use strict";var r=n("1fd6"),a=n.n(r);a.a},c6ba:function(e,t,n){"use strict";var r={"mix-pulldown-refresh":()=>Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e")),"mix-load-more":()=>n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})}},[["3dc5","common/runtime","common/vendor"]]]);