(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"],{"0412":function(e,t,n){"use strict";n.r(t);var i=n("0f59"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"0f59":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,r,s,o=500,u=0,f={props:{top:{type:Number,default:0}},data:function(){return{pageDeviation:0,pageTransition:0,refreshReady:!1,refreshing:!1}},computed:{pageTop:function(){return e.upx2px(this.top)}},created:function(){e.getSystemInfo({success:function(e){console.log(n(e," at components\\mix-pulldown-refresh\\mix-pulldown-refresh.vue:74")),r=e.platform,o=e.windowHeight}})},methods:{pageTouchstart:function(e){s=!1,this.pageTransition=0,i=e.touches[0].pageY},pageTouchmove:function(e){s||(a=.4*(e.touches[0].pageY-i),a>=0&&(this.pageDeviation=a,this.$emit("setEnableScroll",!1)),a>=50&&!1===this.refreshReady?this.refreshReady=!0:a<50&&!0===this.refreshReady&&(this.refreshReady=!1),"ios"===r&&e.touches[0].pageY>o+10&&this.pageTouchend())},pageTouchend:function(){s=!0,0!==a&&(this.pageTransition=.3,a>=50?this.startPulldownRefresh():this.pageDeviation=0,!0===this.refreshReady&&(this.refreshReady=!1),this.$emit("setEnableScroll",!0),i=a=0)},startPulldownRefresh:function(){+new Date-u<100||(u=+new Date,this.refreshing=!0,this.pageDeviation=e.upx2px(90),this.$emit("refresh"))},endPulldownRefresh:function(){this.refreshing=!1,this.pageDeviation=e.upx2px(0)}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"71fd":function(e,t,n){},"8a0e":function(e,t,n){"use strict";n.r(t);var i=n("a5eb"),a=n("0412");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("bbca");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},a5eb:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},bbca:function(e,t,n){"use strict";var i=n("71fd"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component',
    {
        'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8a0e"))
        })
    },
    [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]
]);                
