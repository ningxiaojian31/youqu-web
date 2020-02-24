"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************!*\
  !*** D:/uniapp/youqu-web/main.js?{"page":"pages%2Fnvue%2Fnvue"} ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_nvue_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/nvue/nvue.nvue?mpType=page */ 9);

        
        
        
        _pages_nvue_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_nvue_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/nvue/nvue'
        _pages_nvue_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_nvue_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** D:/uniapp/youqu-web/pages.json?{"type":"style"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** D:/uniapp/youqu-web/pages.json?{"type":"stat"} ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__DA7D006"});

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** D:/uniapp/youqu-web/main.js?{"type":"appStyle"} ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!*******************************************************************!*\
  !*** D:/uniapp/youqu-web/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('https://at.alicdn.com/t/font_811242_mgntzq2j5hb.eot?t=1552273344806#iefix') format('embedded-opentype'), \r\n  url('https://at.alicdn.com/t/font_811242_mgntzq2j5hb.woff?t=1552273344806') format('woff'),\r\n  url('https://at.alicdn.com/t/font_811242_mgntzq2j5hb.ttf?t=1552273344806') format('truetype'), \r\n  url('https://at.alicdn.com/t/font_811242_mgntzq2j5hb.svg?t=1552273344806#iconfont') format('svg')"
    },
    {
      "fontFamily": "yticon",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('https://at.alicdn.com/t/font_1078604_3mrhac2o3oi.ttf') format('truetype')"
    }
  ],
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "lineHeight:before": 1.5
  },
  "icon-guangjie": {
    "content:before": "\"\\e600\""
  },
  "icon-appreciate": {
    "content:before": "\"\\e644\""
  },
  "icon-check": {
    "content:before": "\"\\e645\""
  },
  "icon-close": {
    "content:before": "\"\\e646\""
  },
  "icon-edit": {
    "content:before": "\"\\e649\""
  },
  "icon-emoji": {
    "content:before": "\"\\e64a\""
  },
  "icon-favorfill": {
    "content:before": "\"\\e64b\""
  },
  "icon-favor": {
    "content:before": "\"\\e64c\""
  },
  "icon-loading": {
    "content:before": "\"\\e64f\""
  },
  "icon-locationfill": {
    "content:before": "\"\\e650\""
  },
  "icon-location": {
    "content:before": "\"\\e651\""
  },
  "icon-phone": {
    "content:before": "\"\\e652\""
  },
  "icon-roundcheckfill": {
    "content:before": "\"\\e656\""
  },
  "icon-roundcheck": {
    "content:before": "\"\\e657\""
  },
  "icon-roundclosefill": {
    "content:before": "\"\\e658\""
  },
  "icon-roundclose": {
    "content:before": "\"\\e659\""
  },
  "icon-roundrightfill": {
    "content:before": "\"\\e65a\""
  },
  "icon-roundright": {
    "content:before": "\"\\e65b\""
  },
  "icon-search": {
    "content:before": "\"\\e65c\""
  },
  "icon-taxi": {
    "content:before": "\"\\e65d\""
  },
  "icon-timefill": {
    "content:before": "\"\\e65e\""
  },
  "icon-time": {
    "content:before": "\"\\e65f\""
  },
  "icon-unfold": {
    "content:before": "\"\\e661\""
  },
  "icon-warnfill": {
    "content:before": "\"\\e662\""
  },
  "icon-warn": {
    "content:before": "\"\\e663\""
  },
  "icon-camerafill": {
    "content:before": "\"\\e664\""
  },
  "icon-camera": {
    "content:before": "\"\\e665\""
  },
  "icon-commentfill": {
    "content:before": "\"\\e666\""
  },
  "icon-comment": {
    "content:before": "\"\\e64f\""
  },
  "icon-likefill": {
    "content:before": "\"\\e668\""
  },
  "icon-like": {
    "content:before": "\"\\e669\""
  },
  "icon-notificationfill": {
    "content:before": "\"\\e66a\""
  },
  "icon-notification": {
    "content:before": "\"\\e66b\""
  },
  "icon-order": {
    "content:before": "\"\\e66c\""
  },
  "icon-samefill": {
    "content:before": "\"\\e66d\""
  },
  "icon-same": {
    "content:before": "\"\\e66e\""
  },
  "icon-deliver": {
    "content:before": "\"\\e671\""
  },
  "icon-evaluate": {
    "content:before": "\"\\e672\""
  },
  "icon-pay": {
    "content:before": "\"\\e673\""
  },
  "icon-send": {
    "content:before": "\"\\e675\""
  },
  "icon-shop": {
    "content:before": "\"\\e676\""
  },
  "icon-ticket": {
    "content:before": "\"\\e677\""
  },
  "icon-wang": {
    "content:before": "\"\\e678\""
  },
  "icon-back": {
    "content:before": "\"\\e679\""
  },
  "icon-cascades": {
    "content:before": "\"\\e67c\""
  },
  "icon-discover": {
    "content:before": "\"\\e67e\""
  },
  "icon-list": {
    "content:before": "\"\\e682\""
  },
  "icon-more": {
    "content:before": "\"\\e684\""
  },
  "icon-scan": {
    "content:before": "\"\\e689\""
  },
  "icon-settings": {
    "content:before": "\"\\e68a\""
  },
  "icon-questionfill": {
    "content:before": "\"\\e690\""
  },
  "icon-question": {
    "content:before": "\"\\e691\""
  },
  "icon-shopfill": {
    "content:before": "\"\\e697\""
  },
  "icon-form": {
    "content:before": "\"\\e699\""
  },
  "icon-wangfill": {
    "content:before": "\"\\e69a\""
  },
  "icon-pic": {
    "content:before": "\"\\e69b\""
  },
  "icon-filter": {
    "content:before": "\"\\e69c\""
  },
  "icon-footprint": {
    "content:before": "\"\\e69d\""
  },
  "icon-top": {
    "content:before": "\"\\e69e\""
  },
  "icon-pulldown": {
    "content:before": "\"\\e69f\""
  },
  "icon-pullup": {
    "content:before": "\"\\e6a0\""
  },
  "icon-right": {
    "content:before": "\"\\e6a3\""
  },
  "icon-refresh": {
    "content:before": "\"\\e6a4\""
  },
  "icon-moreandroid": {
    "content:before": "\"\\e6a5\""
  },
  "icon-deletefill": {
    "content:before": "\"\\e6a6\""
  },
  "icon-refund": {
    "content:before": "\"\\e6ac\""
  },
  "icon-cart": {
    "content:before": "\"\\e6af\""
  },
  "icon-qrcode": {
    "content:before": "\"\\e6b0\""
  },
  "icon-remind": {
    "content:before": "\"\\e6b2\""
  },
  "icon-delete": {
    "content:before": "\"\\e6b4\""
  },
  "icon-profile": {
    "content:before": "\"\\e6b7\""
  },
  "icon-home": {
    "content:before": "\"\\e6b8\""
  },
  "icon-cartfill": {
    "content:before": "\"\\e6b9\""
  },
  "icon-discoverfill": {
    "content:before": "\"\\e6ba\""
  },
  "icon-homefill": {
    "content:before": "\"\\e6bb\""
  },
  "icon-message": {
    "content:before": "\"\\e6bc\""
  },
  "icon-addressbook": {
    "content:before": "\"\\e6bd\""
  },
  "icon-link": {
    "content:before": "\"\\e6bf\""
  },
  "icon-lock": {
    "content:before": "\"\\e6c0\""
  },
  "icon-unlock": {
    "content:before": "\"\\e6c2\""
  },
  "icon-vip": {
    "content:before": "\"\\e6c3\""
  },
  "icon-weibo": {
    "content:before": "\"\\e6c4\""
  },
  "icon-activity": {
    "content:before": "\"\\e6c5\""
  },
  "icon-big": {
    "content:before": "\"\\e6c7\""
  },
  "icon-friendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "icon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "icon-friendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "icon-friend": {
    "content:before": "\"\\e6cc\""
  },
  "icon-goods": {
    "content:before": "\"\\e6cd\""
  },
  "icon-selection": {
    "content:before": "\"\\e6ce\""
  },
  "icon-tmall": {
    "content:before": "\"\\e6cf\""
  },
  "icon-explore": {
    "content:before": "\"\\e6d2\""
  },
  "icon-present": {
    "content:before": "\"\\e6d3\""
  },
  "icon-squarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "icon-square": {
    "content:before": "\"\\e6d5\""
  },
  "icon-squarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "icon-round": {
    "content:before": "\"\\e6d7\""
  },
  "icon-roundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "icon-roundadd": {
    "content:before": "\"\\e6d9\""
  },
  "icon-add": {
    "content:before": "\"\\e6da\""
  },
  "icon-notificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "icon-explorefill": {
    "content:before": "\"\\e6dd\""
  },
  "icon-fold": {
    "content:before": "\"\\e6de\""
  },
  "icon-game": {
    "content:before": "\"\\e6df\""
  },
  "icon-redpacket": {
    "content:before": "\"\\e6e0\""
  },
  "icon-selectionfill": {
    "content:before": "\"\\e6e1\""
  },
  "icon-similar": {
    "content:before": "\"\\e6e2\""
  },
  "icon-appreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "icon-infofill": {
    "content:before": "\"\\e6e4\""
  },
  "icon-info": {
    "content:before": "\"\\e6e5\""
  },
  "icon-tao": {
    "content:before": "\"\\e6e8\""
  },
  "icon-mobiletao": {
    "content:before": "\"\\e6e9\""
  },
  "icon-forwardfill": {
    "content:before": "\"\\e6ea\""
  },
  "icon-forward": {
    "content:before": "\"\\e607\""
  },
  "icon-rechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "icon-recharge": {
    "content:before": "\"\\e6ed\""
  },
  "icon-vipcard": {
    "content:before": "\"\\e6ee\""
  },
  "icon-voice": {
    "content:before": "\"\\e6ef\""
  },
  "icon-voicefill": {
    "content:before": "\"\\e6f0\""
  },
  "icon-friendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "icon-wifi": {
    "content:before": "\"\\e6f2\""
  },
  "icon-share": {
    "content:before": "\"\\e656\""
  },
  "icon-wefill": {
    "content:before": "\"\\e6f4\""
  },
  "icon-we": {
    "content:before": "\"\\e6f5\""
  },
  "icon-lightauto": {
    "content:before": "\"\\e6f6\""
  },
  "icon-lightforbid": {
    "content:before": "\"\\e6f7\""
  },
  "icon-lightfill": {
    "content:before": "\"\\e6f8\""
  },
  "icon-camerarotate": {
    "content:before": "\"\\e6f9\""
  },
  "icon-light": {
    "content:before": "\"\\e6fa\""
  },
  "icon-barcode": {
    "content:before": "\"\\e6fb\""
  },
  "icon-flashlightclose": {
    "content:before": "\"\\e6fc\""
  },
  "icon-flashlightopen": {
    "content:before": "\"\\e6fd\""
  },
  "icon-searchlist": {
    "content:before": "\"\\e6fe\""
  },
  "icon-service": {
    "content:before": "\"\\e6ff\""
  },
  "icon-sort": {
    "content:before": "\"\\e700\""
  },
  "icon-1212": {
    "content:before": "\"\\e702\""
  },
  "icon-down": {
    "content:before": "\"\\e703\""
  },
  "icon-mobile": {
    "content:before": "\"\\e704\""
  },
  "icon-mobilefill": {
    "content:before": "\"\\e705\""
  },
  "icon-copy": {
    "content:before": "\"\\e706\""
  },
  "icon-countdownfill": {
    "content:before": "\"\\e707\""
  },
  "icon-countdown": {
    "content:before": "\"\\e708\""
  },
  "icon-noticefill": {
    "content:before": "\"\\e709\""
  },
  "icon-notice": {
    "content:before": "\"\\e70a\""
  },
  "icon-qiang": {
    "content:before": "\"\\e70b\""
  },
  "icon-upstagefill": {
    "content:before": "\"\\e70e\""
  },
  "icon-upstage": {
    "content:before": "\"\\e70f\""
  },
  "icon-babyfill": {
    "content:before": "\"\\e710\""
  },
  "icon-baby": {
    "content:before": "\"\\e711\""
  },
  "icon-brandfill": {
    "content:before": "\"\\e712\""
  },
  "icon-brand": {
    "content:before": "\"\\e713\""
  },
  "icon-choicenessfill": {
    "content:before": "\"\\e714\""
  },
  "icon-choiceness": {
    "content:before": "\"\\e715\""
  },
  "icon-clothesfill": {
    "content:before": "\"\\e716\""
  },
  "icon-clothes": {
    "content:before": "\"\\e717\""
  },
  "icon-creativefill": {
    "content:before": "\"\\e718\""
  },
  "icon-creative": {
    "content:before": "\"\\e719\""
  },
  "icon-female": {
    "content:before": "\"\\e71a\""
  },
  "icon-keyboard": {
    "content:before": "\"\\e71b\""
  },
  "icon-male": {
    "content:before": "\"\\e71c\""
  },
  "icon-newfill": {
    "content:before": "\"\\e71d\""
  },
  "icon-new": {
    "content:before": "\"\\e71e\""
  },
  "icon-pullleft": {
    "content:before": "\"\\e71f\""
  },
  "icon-pullright": {
    "content:before": "\"\\e720\""
  },
  "icon-rankfill": {
    "content:before": "\"\\e721\""
  },
  "icon-rank": {
    "content:before": "\"\\e722\""
  },
  "icon-bad": {
    "content:before": "\"\\e723\""
  },
  "icon-cameraadd": {
    "content:before": "\"\\e724\""
  },
  "icon-focus": {
    "content:before": "\"\\e725\""
  },
  "icon-friendfill": {
    "content:before": "\"\\e726\""
  },
  "icon-cameraaddfill": {
    "content:before": "\"\\e727\""
  },
  "icon-jianzhi": {
    "content:before": "\"\\e66f\""
  },
  "icon-apps": {
    "content:before": "\"\\e729\""
  },
  "icon-paintfill": {
    "content:before": "\"\\e72a\""
  },
  "icon-paint": {
    "content:before": "\"\\e72b\""
  },
  "icon-picfill": {
    "content:before": "\"\\e72c\""
  },
  "icon-refresharrow": {
    "content:before": "\"\\e72d\""
  },
  "icon-markfill": {
    "content:before": "\"\\e730\""
  },
  "icon-mark": {
    "content:before": "\"\\e731\""
  },
  "icon-presentfill": {
    "content:before": "\"\\e732\""
  },
  "icon-repeal": {
    "content:before": "\"\\e733\""
  },
  "icon-album": {
    "content:before": "\"\\e734\""
  },
  "icon-peoplefill": {
    "content:before": "\"\\e735\""
  },
  "icon-people": {
    "content:before": "\"\\e736\""
  },
  "icon-servicefill": {
    "content:before": "\"\\e737\""
  },
  "icon-repair": {
    "content:before": "\"\\e738\""
  },
  "icon-file": {
    "content:before": "\"\\e739\""
  },
  "icon-repairfill": {
    "content:before": "\"\\e73a\""
  },
  "icon-taoxiaopu": {
    "content:before": "\"\\e73b\""
  },
  "icon-attentionfill": {
    "content:before": "\"\\e73c\""
  },
  "icon-attention": {
    "content:before": "\"\\e73d\""
  },
  "icon-commandfill": {
    "content:before": "\"\\e73e\""
  },
  "icon-command": {
    "content:before": "\"\\e73f\""
  },
  "icon-communityfill": {
    "content:before": "\"\\e740\""
  },
  "icon-community": {
    "content:before": "\"\\e741\""
  },
  "icon-read": {
    "content:before": "\"\\e742\""
  },
  "icon-suan": {
    "content:before": "\"\\e743\""
  },
  "icon-hua": {
    "content:before": "\"\\e744\""
  },
  "icon-ju": {
    "content:before": "\"\\e745\""
  },
  "icon-tian": {
    "content:before": "\"\\e748\""
  },
  "icon-calendar": {
    "content:before": "\"\\e74a\""
  },
  "icon-cut": {
    "content:before": "\"\\e74b\""
  },
  "icon-magic": {
    "content:before": "\"\\e74c\""
  },
  "icon-backwardfill": {
    "content:before": "\"\\e74d\""
  },
  "icon-playfill": {
    "content:before": "\"\\e74f\""
  },
  "icon-stop": {
    "content:before": "\"\\e750\""
  },
  "icon-tagfill": {
    "content:before": "\"\\e751\""
  },
  "icon-tag": {
    "content:before": "\"\\e752\""
  },
  "icon-group": {
    "content:before": "\"\\e753\""
  },
  "icon-all": {
    "content:before": "\"\\e755\""
  },
  "icon-backdelete": {
    "content:before": "\"\\e756\""
  },
  "icon-hotfill": {
    "content:before": "\"\\e757\""
  },
  "icon-hot": {
    "content:before": "\"\\e60e\""
  },
  "icon-post": {
    "content:before": "\"\\e759\""
  },
  "icon-radiobox": {
    "content:before": "\"\\e75b\""
  },
  "icon-rounddown": {
    "content:before": "\"\\e75c\""
  },
  "icon-upload": {
    "content:before": "\"\\e75d\""
  },
  "icon-writefill": {
    "content:before": "\"\\e760\""
  },
  "icon-write": {
    "content:before": "\"\\e761\""
  },
  "icon-radioboxfill": {
    "content:before": "\"\\e763\""
  },
  "icon-punch": {
    "content:before": "\"\\e764\""
  },
  "icon-shake": {
    "content:before": "\"\\e765\""
  },
  "icon-add1": {
    "content:before": "\"\\e767\""
  },
  "icon-move": {
    "content:before": "\"\\e768\""
  },
  "icon-safe": {
    "content:before": "\"\\e769\""
  },
  "icon-haodian": {
    "content:before": "\"\\e76d\""
  },
  "icon-mao": {
    "content:before": "\"\\e76e\""
  },
  "icon-qi": {
    "content:before": "\"\\e76f\""
  },
  "icon-ye": {
    "content:before": "\"\\e770\""
  },
  "icon-juhuasuan": {
    "content:before": "\"\\e771\""
  },
  "icon-taoqianggou": {
    "content:before": "\"\\e772\""
  },
  "icon-tianmao": {
    "content:before": "\"\\e773\""
  },
  "icon-activityfill": {
    "content:before": "\"\\e775\""
  },
  "icon-crownfill": {
    "content:before": "\"\\e776\""
  },
  "icon-crown": {
    "content:before": "\"\\e777\""
  },
  "icon-goodsfill": {
    "content:before": "\"\\e778\""
  },
  "icon-messagefill": {
    "content:before": "\"\\e779\""
  },
  "icon-profilefill": {
    "content:before": "\"\\e77a\""
  },
  "icon-sound": {
    "content:before": "\"\\e77b\""
  },
  "icon-sponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "icon-sponsor": {
    "content:before": "\"\\e77d\""
  },
  "icon-upblock": {
    "content:before": "\"\\e77e\""
  },
  "icon-weblock": {
    "content:before": "\"\\e77f\""
  },
  "icon-weunblock": {
    "content:before": "\"\\e780\""
  },
  "icon-1111": {
    "content:before": "\"\\e782\""
  },
  "icon-myfill": {
    "content:before": "\"\\e78c\""
  },
  "icon-emojifill": {
    "content:before": "\"\\e78d\""
  },
  "icon-emojiflashfill": {
    "content:before": "\"\\e78e\""
  },
  "icon-flashbuyfill-copy": {
    "content:before": "\"\\e78f\""
  },
  "icon-text": {
    "content:before": "\"\\e791\""
  },
  "icon-goodsfavor": {
    "content:before": "\"\\e794\""
  },
  "icon-musicfill": {
    "content:before": "\"\\e795\""
  },
  "icon-musicforbidfill": {
    "content:before": "\"\\e796\""
  },
  "icon-xiamiforbid": {
    "content:before": "\"\\e797\""
  },
  "icon-xiami": {
    "content:before": "\"\\e798\""
  },
  "icon-roundleftfill": {
    "content:before": "\"\\e799\""
  },
  "icon-triangledownfill": {
    "content:before": "\"\\e79b\""
  },
  "icon-triangleupfill": {
    "content:before": "\"\\e79c\""
  },
  "icon-roundleftfill-copy": {
    "content:before": "\"\\e79e\""
  },
  "icon-pulldown1": {
    "content:before": "\"\\e79f\""
  },
  "icon-weixin": {
    "content:before": "\"\\e614\""
  },
  "icon-emojilight": {
    "content:before": "\"\\e7a1\""
  },
  "icon-keyboardlight": {
    "content:before": "\"\\e7a3\""
  },
  "icon-recordfill": {
    "content:before": "\"\\e7a4\""
  },
  "icon-recordlight": {
    "content:before": "\"\\e7a5\""
  },
  "icon-record": {
    "content:before": "\"\\e7a6\""
  },
  "icon-roundaddlight": {
    "content:before": "\"\\e7a7\""
  },
  "icon-soundlight": {
    "content:before": "\"\\e7a8\""
  },
  "icon-cardboardfill": {
    "content:before": "\"\\e7a9\""
  },
  "icon-cardboard": {
    "content:before": "\"\\e7aa\""
  },
  "icon-formfill": {
    "content:before": "\"\\e7ab\""
  },
  "icon-telephone": {
    "content:before": "\"\\e627\""
  },
  "icon-coin": {
    "content:before": "\"\\e7ac\""
  },
  "icon-sortlight": {
    "content:before": "\"\\e7ad\""
  },
  "icon-cardboardforbid": {
    "content:before": "\"\\e7af\""
  },
  "icon-circlefill": {
    "content:before": "\"\\e7b0\""
  },
  "icon-circle": {
    "content:before": "\"\\e7b1\""
  },
  "icon-attentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "icon-attentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "icon-attentionfavorfill": {
    "content:before": "\"\\e7b4\""
  },
  "icon-attentionfavor": {
    "content:before": "\"\\e7b5\""
  },
  "icon-shoplight": {
    "content:before": "\"\\e7b8\""
  },
  "icon-voicelight": {
    "content:before": "\"\\e7b9\""
  },
  "icon-attentionfavorfill-copy": {
    "content:before": "\"\\e7ba\""
  },
  "icon-full": {
    "content:before": "\"\\e7bc\""
  },
  "icon-mail": {
    "content:before": "\"\\e7bd\""
  },
  "icon-peoplelist": {
    "content:before": "\"\\e7be\""
  },
  "icon-goodsnewfill": {
    "content:before": "\"\\e7bf\""
  },
  "icon-goodsnew": {
    "content:before": "\"\\e7c0\""
  },
  "icon-medalfill": {
    "content:before": "\"\\e7c1\""
  },
  "icon-medal": {
    "content:before": "\"\\e7c2\""
  },
  "icon-newsfill": {
    "content:before": "\"\\e7c3\""
  },
  "icon-newshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "icon-newshot": {
    "content:before": "\"\\e7c5\""
  },
  "icon-news": {
    "content:before": "\"\\e7c6\""
  },
  "icon-videofill": {
    "content:before": "\"\\e7c7\""
  },
  "icon-video": {
    "content:before": "\"\\e7c8\""
  },
  "icon-askfill": {
    "content:before": "\"\\e7c9\""
  },
  "icon-ask": {
    "content:before": "\"\\e7ca\""
  },
  "icon-exit": {
    "content:before": "\"\\e7cb\""
  },
  "icon-skinfill": {
    "content:before": "\"\\e7cc\""
  },
  "icon-skin": {
    "content:before": "\"\\e7cd\""
  },
  "icon-moneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "icon-usefullfill": {
    "content:before": "\"\\e7cf\""
  },
  "icon-usefull": {
    "content:before": "\"\\e7d0\""
  },
  "icon-moneybag": {
    "content:before": "\"\\e7d1\""
  },
  "icon-redpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "icon-subscription": {
    "content:before": "\"\\e7d4\""
  },
  "icon-my_light": {
    "content:before": "\"\\e7d5\""
  },
  "icon-community_light": {
    "content:before": "\"\\e7d6\""
  },
  "icon-cart_light": {
    "content:before": "\"\\e7d7\""
  },
  "icon-we_light": {
    "content:before": "\"\\e7d8\""
  },
  "icon-home_fill_light": {
    "content:before": "\"\\e7d9\""
  },
  "icon-cart_fill_light": {
    "content:before": "\"\\e7da\""
  },
  "icon-community_fill_light": {
    "content:before": "\"\\e7db\""
  },
  "icon-my_fill_light": {
    "content:before": "\"\\e7dc\""
  },
  "icon-we_fill_light": {
    "content:before": "\"\\e7dd\""
  },
  "icon-skin_light": {
    "content:before": "\"\\e7de\""
  },
  "icon-search_light": {
    "content:before": "\"\\e7df\""
  },
  "icon-scan_light": {
    "content:before": "\"\\e7e0\""
  },
  "icon-people_list_light": {
    "content:before": "\"\\e7e1\""
  },
  "icon-message_light": {
    "content:before": "\"\\e7e2\""
  },
  "icon-close_light": {
    "content:before": "\"\\e7e3\""
  },
  "icon-add_light": {
    "content:before": "\"\\e7e4\""
  },
  "icon-profile_light": {
    "content:before": "\"\\e7e5\""
  },
  "icon-service_light": {
    "content:before": "\"\\e7e6\""
  },
  "icon-friend_add_light": {
    "content:before": "\"\\e7e7\""
  },
  "icon-edit_light": {
    "content:before": "\"\\e7e8\""
  },
  "icon-camera_light": {
    "content:before": "\"\\e7e9\""
  },
  "icon-hot_light": {
    "content:before": "\"\\e7ea\""
  },
  "icon-refresh_light": {
    "content:before": "\"\\e7eb\""
  },
  "icon-back_light": {
    "content:before": "\"\\e7ec\""
  },
  "icon-share_light": {
    "content:before": "\"\\e7ed\""
  },
  "icon-comment_light": {
    "content:before": "\"\\e7ee\""
  },
  "icon-appreciate_light": {
    "content:before": "\"\\e7ef\""
  },
  "icon-favor_light": {
    "content:before": "\"\\e7f0\""
  },
  "icon-appreciate_fill_light": {
    "content:before": "\"\\e7f1\""
  },
  "icon-comment_fill_light": {
    "content:before": "\"\\e7f2\""
  },
  "icon-wang_light": {
    "content:before": "\"\\e7f3\""
  },
  "icon-more_android_light": {
    "content:before": "\"\\e7f4\""
  },
  "icon-friend_light": {
    "content:before": "\"\\e7f5\""
  },
  "icon-more_light": {
    "content:before": "\"\\e7f6\""
  },
  "icon-goods_favor_light": {
    "content:before": "\"\\e7f7\""
  },
  "icon-goods_new_fill_light": {
    "content:before": "\"\\e7f8\""
  },
  "icon-goods_new_light": {
    "content:before": "\"\\e7f9\""
  },
  "icon-goods_light": {
    "content:before": "\"\\e7fa\""
  },
  "icon-medal_fill_light": {
    "content:before": "\"\\e7fb\""
  },
  "icon-medal_light": {
    "content:before": "\"\\e7fc\""
  },
  "icon-news_fill_light": {
    "content:before": "\"\\e7fd\""
  },
  "icon-news_hot_fill_light": {
    "content:before": "\"\\e7fe\""
  },
  "icon-news_hot_light": {
    "content:before": "\"\\e7ff\""
  },
  "icon-news_light": {
    "content:before": "\"\\e800\""
  },
  "icon-video_fill_light": {
    "content:before": "\"\\e801\""
  },
  "icon-message_fill_light": {
    "content:before": "\"\\e802\""
  },
  "icon-form_light": {
    "content:before": "\"\\e803\""
  },
  "icon-video_light": {
    "content:before": "\"\\e804\""
  },
  "icon-search_list_light": {
    "content:before": "\"\\e805\""
  },
  "icon-form_fill_light": {
    "content:before": "\"\\e806\""
  },
  "icon-global_light": {
    "content:before": "\"\\e807\""
  },
  "icon-global": {
    "content:before": "\"\\e808\""
  },
  "icon-favor_fill_light": {
    "content:before": "\"\\e809\""
  },
  "icon-delete_light": {
    "content:before": "\"\\e80a\""
  },
  "icon-back_android": {
    "content:before": "\"\\e80b\""
  },
  "icon-back_android_light": {
    "content:before": "\"\\e80c\""
  },
  "icon-down_light": {
    "content:before": "\"\\e80d\""
  },
  "icon-round_close_light": {
    "content:before": "\"\\e80e\""
  },
  "icon-round_close_fill_light": {
    "content:before": "\"\\e80f\""
  },
  "icon-expressman": {
    "content:before": "\"\\e810\""
  },
  "icon-punch_light": {
    "content:before": "\"\\e811\""
  },
  "icon-evaluate_fill": {
    "content:before": "\"\\e812\""
  },
  "icon-furniture": {
    "content:before": "\"\\e813\""
  },
  "icon-dress": {
    "content:before": "\"\\e814\""
  },
  "icon-coffee": {
    "content:before": "\"\\e815\""
  },
  "icon-sports": {
    "content:before": "\"\\e816\""
  },
  "icon-wxzone": {
    "content:before": "\"\\e604\""
  },
  "icon-group_light": {
    "content:before": "\"\\e817\""
  },
  "icon-location_light": {
    "content:before": "\"\\e818\""
  },
  "icon-attention_light": {
    "content:before": "\"\\e819\""
  },
  "icon-group_fill_light": {
    "content:before": "\"\\e81a\""
  },
  "icon-group_fill": {
    "content:before": "\"\\e81b\""
  },
  "icon-play_forward_fill": {
    "content:before": "\"\\e81c\""
  },
  "icon-ketang": {
    "content:before": "\"\\e618\""
  },
  "icon-subscription_light": {
    "content:before": "\"\\e81d\""
  },
  "icon-deliver_fill": {
    "content:before": "\"\\e81e\""
  },
  "icon-notice_forbid_fill": {
    "content:before": "\"\\e81f\""
  },
  "icon-qr_code_light": {
    "content:before": "\"\\e820\""
  },
  "icon-qq": {
    "content:before": "\"\\e602\""
  },
  "icon-chat-right": {
    "content:before": "\"\\e635\""
  },
  "icon-wenzi": {
    "content:before": "\"\\e660\""
  },
  "icon-settings_light": {
    "content:before": "\"\\e821\""
  },
  "icon-job": {
    "content:before": "\"\\e61b\""
  },
  "icon-pick": {
    "content:before": "\"\\e822\""
  },
  "icon-form_favor_light": {
    "content:before": "\"\\e823\""
  },
  "icon-round_comment_light": {
    "content:before": "\"\\e824\""
  },
  "icon-qzone": {
    "content:before": "\"\\e84a\""
  },
  "icon-moban": {
    "content:before": "\"\\ea1a\""
  },
  "icon-phone_light": {
    "content:before": "\"\\e825\""
  },
  "icon-round_down_light": {
    "content:before": "\"\\e826\""
  },
  "icon-friend_settings_light": {
    "content:before": "\"\\e827\""
  },
  "icon-change": {
    "content:before": "\"\\e828\""
  },
  "icon-godown": {
    "content:before": "\"\\e612\""
  },
  "icon-round_list_light": {
    "content:before": "\"\\e829\""
  },
  "icon-ticket_fill": {
    "content:before": "\"\\e82a\""
  },
  "icon-chat-left": {
    "content:before": "\"\\e601\""
  },
  "icon-round_friend_fill": {
    "content:before": "\"\\e82b\""
  },
  "icon-round_crown_fill": {
    "content:before": "\"\\e82c\""
  },
  "icon-round_link_fill": {
    "content:before": "\"\\e82d\""
  },
  "icon-round_light_fill": {
    "content:before": "\"\\e82e\""
  },
  "icon-round_favor_fill": {
    "content:before": "\"\\e82f\""
  },
  "icon-round_menu_fill": {
    "content:before": "\"\\e830\""
  },
  "icon-round_location_fill": {
    "content:before": "\"\\e831\""
  },
  "icon-round_pay_fill": {
    "content:before": "\"\\e832\""
  },
  "icon-round_like_fill": {
    "content:before": "\"\\e833\""
  },
  "icon-round_people_fill": {
    "content:before": "\"\\e834\""
  },
  "icon-round_pay": {
    "content:before": "\"\\e835\""
  },
  "icon-round_rank_fill": {
    "content:before": "\"\\e836\""
  },
  "icon-round_redpacket_fill": {
    "content:before": "\"\\e837\""
  },
  "icon-round_skin_fill": {
    "content:before": "\"\\e838\""
  },
  "icon-round_record_fill": {
    "content:before": "\"\\e839\""
  },
  "icon-round_ticket_fill": {
    "content:before": "\"\\e83a\""
  },
  "icon-round_redpacket": {
    "content:before": "\"\\e83b\""
  },
  "icon-round_text_fill": {
    "content:before": "\"\\e83c\""
  },
  "icon-round_ticket": {
    "content:before": "\"\\e83d\""
  },
  "icon-round_transfer_fill": {
    "content:before": "\"\\e83e\""
  },
  "icon-subtitle_block_light": {
    "content:before": "\"\\e83f\""
  },
  "icon-warn_light": {
    "content:before": "\"\\e840\""
  },
  "icon-round_transfer": {
    "content:before": "\"\\e841\""
  },
  "icon-vip_code_light": {
    "content:before": "\"\\e842\""
  },
  "icon-subtitle_unblock_light": {
    "content:before": "\"\\e843\""
  },
  "icon-round_shop_fill": {
    "content:before": "\"\\e844\""
  },
  "icon-oppose_fill_light": {
    "content:before": "\"\\e845\""
  },
  "icon-oppose_light": {
    "content:before": "\"\\e846\""
  },
  "icon-book": {
    "content:before": "\"\\e7d2\""
  },
  "icon-require": {
    "content:before": "\"\\e60d\""
  },
  "icon-password": {
    "content:before": "\"\\e61a\""
  },
  "icon-living": {
    "content:before": "\"\\e847\""
  },
  "icon-goods_hot_fill": {
    "content:before": "\"\\e848\""
  },
  "icon-ticket_money_fill": {
    "content:before": "\"\\e849\""
  },
  "icon-goup": {
    "content:before": "\"\\e603\""
  },
  "icon-quanzhi": {
    "content:before": "\"\\e746\""
  },
  "_p": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "_ol": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "_ul": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "_li": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "_a": {
    "textDecoration": "none"
  },
  "d-userbox": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "12rpx",
    "paddingBottom": "12rpx",
    "borderBottom": "1px solid #eee",
    "alignItems": "center"
  },
  "d-userbox-head": {
    "width": "144rpx",
    "height": "144rpx",
    "marginRight": "24rpx",
    "borderRadius": 50
  },
  "d-userbox-nick": {
    "fontSize": "38.4rpx",
    "color": "#323232",
    "marginBottom": "12rpx"
  },
  "d-userbox-follows": {
    "display": "flex",
    "flexDirection": "row",
    "color": "#646464"
  },
  "d-img": {
    "width": 100
  },
  "d-title": {
    "fontSize": "38.4rpx",
    "marginBottom": "19.2rpx",
    "color": "#323232"
  },
  "d-tools": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "24rpx",
    "color": "#555555",
    "fontSize": "33.6rpx"
  },
  "d-content": {
    "fontSize": "33.6rpx",
    "color": "#646464",
    "lineHeight": 1.5,
    "marginBottom": "24rpx"
  },
  "market-price": {
    "color": "#929292",
    "textDecoration": "line-through",
    "fontStyle": "italic",
    "fontSize": "33.6rpx"
  },
  "row-box": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx"
  },
  "row-box-hd": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottom": "1px solid #eee",
    "paddingTop": "19.2rpx",
    "paddingBottom": "19.2rpx",
    "fontSize": "38.4rpx"
  },
  "row-box-more": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "33.6rpx",
    "marginRight": "12rpx",
    "color": "#646464",
    "display:after": "inline-flex",
    "fontFamily:after": "iconfont",
    "content:after": "\"\\e6a3\"",
    "color:after": "#999999",
    "fontSize:after": "38.4rpx"
  },
  "paylist": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "paylist-item": {
    "border": "1px solid #eee",
    "borderRadius": "48rpx",
    "marginBottom": "24rpx",
    "textAlign": "center",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "color": "#646464",
    "cursor": "pointer",
    "width": 31,
    "marginRight": 2
  },
  "paylist-item-active": {
    "color": "#ff6600",
    "border": "1px solid #f60"
  },
  "emptyData": {
    "paddingTop": "48rpx",
    "paddingRight": "48rpx",
    "paddingBottom": "48rpx",
    "paddingLeft": "48rpx",
    "fontSize": "48rpx",
    "textAlign": "center",
    "color": "#646464"
  },
  "kslist": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24rpx"
  },
  "kslist-label": {
    "marginRight": "14.4rpx",
    "color": "#646464"
  },
  "kslist-item": {
    "border": "1px solid #eee",
    "paddingTop": "9.6rpx",
    "paddingRight": "19.2rpx",
    "paddingBottom": "9.6rpx",
    "paddingLeft": "19.2rpx",
    "marginRight": "24rpx"
  },
  "kslist-active": {
    "color": "#007AFF"
  },
  "fixedAdd": {
    "position": "fixed",
    "bottom": "240rpx",
    "right": "7.2rpx",
    "width": "108rpx",
    "height": "108rpx",
    "textAlign": "center",
    "boxSizing": "border-box",
    "backgroundColor": "rgba(240,85,75,0.82)",
    "color": "#ffffff",
    "fontFamily": "iconfont",
    "fontSize": "33.6rpx",
    "paddingTop": "12rpx",
    "borderRadius": "24rpx",
    "content:before": "\"\\e7e8\"",
    "display:before": "block",
    "fontSize:before": "38.4rpx"
  },
  "animated-toggle": {
    "animationName": "toggle",
    "animationDuration": 2
  },
  "animated-hide": {
    "animationName": "hide"
  },
  "animated-show": {
    "animationName": "show"
  },
  "animated-slideInLeft": {
    "animationName": "slideInLeft"
  },
  "animated-slideOutLeft": {
    "animationName": "slideOutLeft"
  },
  "animated-slideInRight": {
    "animationName": "slideInRight"
  },
  "animated-slideOutRight": {
    "animationName": "slideOutRight"
  },
  "animated-rotateIn": {
    "WebkitAnimationName": "rotateIn",
    "animationName": "rotateIn"
  },
  "animated": {
    "WebkitAnimationDuration": 1,
    "animationDuration": 1,
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both"
  },
  "comment-hd": {
    "display": "block",
    "paddingTop": "19.2rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "19.2rpx",
    "paddingLeft": "0rpx",
    "backgroundColor": "#F20C00",
    "color": "#ffffff",
    "width": "216rpx",
    "fontSize": "33.6rpx",
    "textAlign": "center"
  },
  "comment-item": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottom": "1px solid #ddd",
    "marginBottom": "12rpx",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "backgroundColor": "#ffffff"
  },
  "comment-item-head": {
    "marginRight": "12rpx",
    "width": "72rpx",
    "height": "72rpx"
  },
  "comment-item-nick": {
    "fontSize": "38.4rpx",
    "color": "#007AFF",
    "lineHeight": 1,
    "marginBottom": "14.4rpx"
  },
  "comment-item-tools": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "12rpx",
    "lineHeight": 1
  },
  "comment-item-addr": {
    "marginRight": "12rpx",
    "color": "#969696",
    "fontSize": "28.8rpx"
  },
  "comment-item-time": {
    "color": "#969696",
    "fontSize": "28.8rpx"
  },
  "comment-item-content": {
    "color": "#646464",
    "fontSize": "33.6rpx",
    "lineHeight": 1.5,
    "cursor": "pointer",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "comment-formbox": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#eeeeee",
    "paddingTop": "12rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "0rpx"
  },
  "comment-input-btn": {
    "position": "relative",
    "height": "96rpx",
    "lineHeight": "96rpx",
    "marginTop": "12rpx",
    "marginLeft": "24rpx",
    "marginRight": "24rpx",
    "borderRadius": "72rpx",
    "paddingLeft": "72rpx",
    "backgroundColor": "#ffffff",
    "border": "1px solid #ccc",
    "cursor": "pointer",
    "color": "#444444",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e761\"",
    "display:before": "inline-flex",
    "fontSize:before": "38.4rpx",
    "position:before": "relative",
    "left:before": "-48rpx"
  },
  "comment-formbox-form": {
    "display": "none"
  },
  "comment-formbox-textarea": {
    "height": "192rpx",
    "display": "flex",
    "position": "relative",
    "paddingTop": "12rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx",
    "width": 90,
    "marginTop": 0,
    "marginBottom": 0,
    "border": "1px solid #ddd",
    "borderRadius": "12rpx",
    "color": "#323232",
    "backgroundColor": "#ffffff"
  },
  "comment-formbox-btns": {
    "textAlign": "center",
    "paddingTop": "24rpx",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "comment-formbox-bt": {
    "width": "192rpx",
    "lineHeight": "86.4rpx",
    "textAlign": "center",
    "marginRight": "48rpx",
    "display": "inline-block",
    "backgroundColor": "#555555",
    "color": "#ffffff",
    "borderRadius": "24rpx",
    "cursor": "pointer"
  },
  "input-flex": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "1",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "backgroundColor": "#ffffff"
  },
  "input-flex-label": {
    "width": "192rpx",
    "lineHeight": "86.4rpx",
    "fontSize": "38.4rpx",
    "color": "#333333",
    "display": "block"
  },
  "input-flex-require": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "alignItems": "center",
    "fontFamily": "iconfont",
    "content:after": "\"\\e60d\"",
    "color:after": "#FF0000",
    "position:after": "absolute",
    "left:after": "-24rpx",
    "fontSize:after": "28.8rpx",
    "transform:after": "scale(0.5)"
  },
  "input-flex-txt": {
    "flex": 1,
    "lineHeight": "86.4rpx",
    "color": "#646464"
  },
  "input-flex-text": {
    "flex": 1,
    "height": "86.4rpx",
    "boxSizing": "border-box",
    "display": "block",
    "border": "1px solid #eee",
    "paddingTop": 0,
    "paddingRight": "12rpx",
    "paddingBottom": 0,
    "paddingLeft": "12rpx",
    "fontSize": "33.6rpx",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": "240rpx"
  },
  "input-flex-select": {
    "flex": 1,
    "height": "86.4rpx",
    "boxSizing": "border-box",
    "display": "block",
    "border": "1px solid #eee",
    "paddingTop": 0,
    "paddingRight": "12rpx",
    "paddingBottom": 0,
    "paddingLeft": "12rpx",
    "fontSize": "33.6rpx",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": "240rpx",
    "WebkitAppearance": "menulist-button",
    "backgroundColor": "#ffffff",
    "color": "#323232"
  },
  "input-flex-note": {
    "marginLeft": "7.2rpx",
    "color": "#666666",
    "justifyContent": "center"
  },
  "input-flex-btn": {
    "width": "240rpx",
    "height": "86.4rpx",
    "lineHeight": "86.4rpx",
    "backgroundColor": "#007bff",
    "boxSizing": "border-box",
    "borderTopRightRadius": "24rpx",
    "borderBottomRightRadius": "24rpx",
    "marginLeft": "-12rpx",
    "color": "#ffffff",
    "fontSize": "33.6rpx",
    "textAlign": "center",
    "cursor": "pointer",
    "zIndex": 2
  },
  "textarea-flex": {
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "marginBottom": "12rpx"
  },
  "textarea-flex-label": {
    "marginBottom": "24rpx",
    "color": "#323232"
  },
  "textarea-flex-text": {
    "height": "480rpx",
    "border": "1px solid #eee",
    "borderRadius": "12rpx",
    "paddingTop": "12rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx"
  },
  "radio-flex": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "radio": {
    "width": "48rpx",
    "height": "48rpx",
    "display": "inline-flex",
    "position": "relative"
  },
  "radioList-item": {
    "borderBottom": "1px solid #eee",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "cursor": "pointer",
    "alignItems": "center",
    "display": "flex",
    "flexDirection": "row",
    "color": "#646464",
    "fontFamily:before": "iconfont",
    "fontSize:before": "43.2rpx",
    "marginRight:before": "7.2rpx",
    "content:before": "\"\\e763\"",
    "color:before": "#aaaaaa"
  },
  "radioList-item-active": {
    "fontFamily:before:before": "iconfont",
    "fontSize:before:before": "43.2rpx",
    "marginRight:before:before": "7.2rpx",
    "content:before": "\"\\e75b\"",
    "color:before": "#0034FF"
  },
  "checkbox-flex": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "checkbox": {
    "width": "48rpx",
    "height": "48rpx",
    "display": "inline-flex",
    "position": "relative"
  },
  "numbox": {
    "display": "flex",
    "flexDirection": "row",
    "boxSizing": "border-box",
    "width": "240rpx"
  },
  "numbox-minus": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box",
    "display": "block",
    "width": "72rpx",
    "fontSize": "43.2rpx",
    "cursor": "pointer",
    "textAlign": "center"
  },
  "numbox-plus": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box",
    "display": "block",
    "width": "72rpx",
    "fontSize": "43.2rpx",
    "cursor": "pointer",
    "textAlign": "center"
  },
  "numbox-num": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "paddingTop": "1",
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "marginTop": "0rpx",
    "marginRight": "0rpx",
    "marginBottom": "0rpx",
    "marginLeft": "0rpx",
    "textAlign": "center",
    "borderRadius": 0,
    "borderLeft": "0rpx",
    "borderRight": "0rpx",
    "boxShadow": "none",
    "color": "#666666"
  },
  "numbox-minus-small": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box"
  },
  "numbox-plus-small": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box"
  },
  "numbox-num-small": {
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "1px solid #eee",
    "boxSizing": "border-box"
  },
  "switch-group": {
    "display": "inline-flex",
    "flexDirection": "row",
    "width": "153.6rpx",
    "height": "72rpx",
    "border": "4.8rpx solid #ddd",
    "borderRadius": "48rpx",
    "backgroundColor": "#ffffff",
    "boxSizing": "border-box",
    "position": "relative"
  },
  "switch-left": {
    "width": 100,
    "visibility": "hidden",
    "lineHeight": "72rpx",
    "color": "#646464",
    "position": "absolute",
    "right": "0rpx",
    "textAlign": "left",
    "top": "-4.8rpx",
    "left": "-4.8rpx",
    "bottom": "0rpx",
    "paddingLeft": "24rpx",
    "content:after": "\".\"",
    "width:after": "72rpx",
    "height:after": "72rpx",
    "backgroundColor:after": "#007BFF",
    "borderRadius:after": "48rpx",
    "color:after": "#007BFF",
    "position:after": "absolute",
    "top:after": "0rpx",
    "right:after": "-4.8rpx"
  },
  "switch-right": {
    "width": 100,
    "visibility": "hidden",
    "lineHeight": "72rpx",
    "color": "#646464",
    "position": "absolute",
    "right": "0rpx",
    "textAlign": "right",
    "top": "-4.8rpx",
    "left": "-4.8rpx",
    "bottom": "0rpx",
    "paddingRight": "24rpx",
    "paddingLeft": "72rpx",
    "content:after:before": "\".\"",
    "width:after:before": "72rpx",
    "height:after:before": "72rpx",
    "backgroundColor:after:before": "#007BFF",
    "borderRadius:after:before": "48rpx",
    "color:after:before": "#007BFF",
    "position:after:before": "absolute",
    "top:after:before": "0rpx",
    "left:before": "-4.8rpx"
  },
  "switch-active": {
    "visibility": "visible"
  },
  "upimg-box": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "flexWrap": "wrap"
  },
  "upimg-btn": {
    "width": "144rpx",
    "height": "144rpx",
    "lineHeight": "144rpx",
    "fontSize": "76.8rpx",
    "textAlign": "center",
    "border": "1px solid #eee",
    "marginRight": "24rpx",
    "color": "#646464",
    "alignItems": "center",
    "justifyContent": "center",
    "cursor": "pointer"
  },
  "upimg-btn-icon": {
    "fontStyle": "normal",
    "fontFamily:before": "iconfont",
    "color:before": "#969696",
    "fontSize:before": "57.6rpx",
    "fontWeight:before": "100",
    "content:before": "\"\\e6da\""
  },
  "upimg-list": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "upimg-item": {
    "position": "relative",
    "width": "144rpx",
    "height": "144rpx",
    "marginRight": "24rpx",
    "marginBottom": "24rpx"
  },
  "upimg-del": {
    "position": "absolute",
    "top": "1",
    "right": "1",
    "justifyContent": "center",
    "alignItems": "center",
    "display:after": "flex",
    "fontFamily:after": "iconfont",
    "flexDirection:after": "column",
    "content:after": "\"\\e646\"",
    "width:after": "48rpx",
    "height:after": "48rpx",
    "lineHeight:after": "48rpx",
    "textAlign:after": "center",
    "cursor:after": "pointer",
    "fontSize:after": "28.8rpx",
    "color:after": "#FF0000",
    "backgroundColor:after": "#e0e0e0",
    "opacity:after": 0.6
  },
  "upimg-img": {
    "width": "144rpx",
    "height": "144rpx"
  },
  "g-hd-1": {
    "fontWeight": "bold",
    "fontSize": "38.4rpx",
    "color": "#323232",
    "borderBottom": "1px solid #eee",
    "paddingBottom": "24rpx",
    "marginBottom": "24rpx"
  },
  "g-hd-2": {
    "fontWeight": "bold",
    "fontSize": "33.6rpx",
    "color": "#323232",
    "borderBottom": "1px solid #eee",
    "paddingBottom": "14.4rpx",
    "marginBottom": "14.4rpx"
  },
  "g-hd-3": {
    "fontSize": "33.6rpx",
    "color": "#323232",
    "borderBottom": "1px solid #eee",
    "paddingBottom": "12rpx",
    "marginBottom": "12rpx"
  },
  "g-search-box": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": "12rpx",
    "height": "86.4rpx",
    "borderBottom": "1px solid #ddd",
    "backgroundColor": "#ffffff"
  },
  "g-search-input": {
    "flex": 1,
    "border": 0,
    "paddingLeft": "12rpx",
    "paddingRight": "12rpx"
  },
  "g-search-btn": {
    "width": "96rpx",
    "justifyContent": "center",
    "alignItems": "center",
    "fontFamily:before": "iconfont",
    "color:before": "#646464",
    "fontSize:before": "43.2rpx"
  },
  "g-order": {
    "marginTop": 0,
    "marginRight": "12rpx",
    "marginBottom": 0,
    "marginLeft": "12rpx",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e79c\"",
    "lineHeight:before": 1,
    "color:before": "#dddddd",
    "fontFamily:after": "iconfont",
    "content:after": "\"\\e79b\"",
    "lineHeight:after": 1,
    "marginTop:after": "-16.8rpx",
    "color:after": "#dddddd"
  },
  "g-order-up": {
    "color:before": "#ff6600"
  },
  "g-order-down": {
    "color:before:after": "#ff6600"
  },
  "g-order-active": {
    "color:before:after": "#ff6600"
  },
  "row-item": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "24rpx",
    "paddingBottom": "24rpx",
    "borderBottom": "1px solid #eee",
    "paddingLeft": "12rpx",
    "paddingRight": "12rpx",
    "position": "relative",
    "alignItems": "center",
    "color": "#646464",
    "cursor": "pointer",
    "fontSize": "33.6rpx",
    "display:after": "inline-flex",
    "fontFamily:after": "iconfont",
    "content:after": "\"\\e6a3\"",
    "color:after": "#999999"
  },
  "row-item-text": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "24rpx",
    "paddingBottom": "24rpx",
    "borderBottom": "1px solid #eee",
    "paddingLeft": "12rpx",
    "paddingRight": "12rpx",
    "position": "relative",
    "alignItems": "center",
    "color": "#646464",
    "cursor": "initial",
    "fontSize": "33.6rpx"
  },
  "row-item-icon": {
    "marginRight": "7.2rpx",
    "fontFamily": "iconfont",
    "fontStyle": "normal",
    "color": "#646464",
    "fontSize": "43.2rpx"
  },
  "row-item-title": {
    "flex": 1,
    "fontSize": "38.4rpx"
  },
  "flexlist-item": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "12rpx",
    "paddingBottom": "12rpx",
    "borderBottom": "1px solid #eee",
    "paddingLeft": "12rpx",
    "paddingRight": "12rpx",
    "paddingTop": "12rpx",
    "backgroundColor": "#ffffff"
  },
  "flexlist-img": {
    "width": "144rpx",
    "height": "144rpx",
    "marginRight": "24rpx"
  },
  "flexlist-title": {
    "fontSize": "38.4rpx",
    "color": "#323232",
    "marginBottom": "12rpx"
  },
  "flexlist-ks": {
    "marginTop": "-7.2rpx",
    "color": "#ff6600",
    "fontSize": "28.8rpx",
    "marginBottom": "7.2rpx"
  },
  "flexlist-desc": {
    "fontSize": "28.8rpx",
    "color": "#969696",
    "marginBottom": "12rpx"
  },
  "flexlist-row": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "color": "#646464",
    "fontSize": "33.6rpx",
    "marginBottom": "12rpx"
  },
  "mtlist": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingTop": "0rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx"
  },
  "mtlist-item": {
    "width": 50,
    "paddingRight": "12rpx",
    "marginBottom": "24rpx",
    "boxSizing": "border-box"
  },
  "mtlist-item-bd": {
    "backgroundColor": "#ffffff",
    "paddingBottom": "12rpx"
  },
  "mtlist-item-pd": {
    "paddingTop": "0rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "12rpx"
  },
  "mtlist-imgbox": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx",
    "boxSizing": "border-box"
  },
  "mtlist-img": {
    "maxWidth": 100
  },
  "mtlist-item-money": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginBottom": "12rpx",
    "paddingTop": "12rpx"
  },
  "mtlist-item-money-flex": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "33.6rpx",
    "color": "#ed6d53",
    "alignItems": "flex-end"
  },
  "mtlist-item-money_money": {
    "fontSize": "48rpx",
    "lineHeight": 1
  },
  "mtlist-item-money_num": {
    "color": "#646464",
    "fontSize": "33.6rpx"
  },
  "mtlist-title": {
    "fontSize": "38.4rpx",
    "color": "#323232",
    "marginBottom": "12rpx"
  },
  "mtlist-desc": {
    "color": "#646464"
  },
  "sglist-item": {
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx",
    "backgroundColor": "#ffffff",
    "marginBottom": "12rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "sglist-img": {
    "width": 100,
    "borderRadius": "24rpx",
    "marginBottom": "12rpx"
  },
  "sglist-title": {
    "color": "#323232",
    "marginBottom": "12rpx",
    "fontSize": "38.4rpx"
  },
  "sglist-imglist": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "sglist-imglist-img": {
    "width": "144rpx",
    "height": "144rpx",
    "marginBottom": "24rpx",
    "marginRight": "24rpx"
  },
  "sglist-desc": {
    "color": "#646464",
    "fontSize": "33.6rpx",
    "marginBottom": "12rpx"
  },
  "sglist-user": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "color": "#646464"
  },
  "sglist-nick": {
    "color": "#323232",
    "fontSize": "38.4rpx"
  },
  "sglist-uhead": {
    "borderRadius": 50,
    "height": "96rpx",
    "width": "96rpx",
    "marginRight": "12rpx"
  },
  "sglist-ft": {
    "textAlign": "center",
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "14.4rpx",
    "paddingRight": "14.4rpx",
    "paddingBottom": "14.4rpx",
    "paddingLeft": "14.4rpx",
    "fontSize": "33.6rpx"
  },
  "sglist-ft-love": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "fontFamily:before": "\"iconfont\"",
    "display:before": "inline-block",
    "marginRight:before": "9.6rpx",
    "fontSize:before": "33.6rpx",
    "content:before": "\"\\e669\"",
    "flex": 1,
    "borderRight": "1px solid #eee"
  },
  "sglist-ft-cm": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "fontFamily:before:before": "\"iconfont\"",
    "display:before:before": "inline-block",
    "marginRight:before:before": "9.6rpx",
    "fontSize:before:before": "33.6rpx",
    "content:before": "\"\\e667\"",
    "flex": 1,
    "borderRight": "1px solid #eee"
  },
  "sglist-ft-view": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "fontFamily:before:before:before": "\"iconfont\"",
    "display:before:before:before": "inline-block",
    "marginRight:before:before:before": "9.6rpx",
    "fontSize:before:before:before": "33.6rpx",
    "content:before": "\"\\e819\""
  },
  "flex-table": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottom": "1px solid #eee",
    "paddingTop": "19.2rpx",
    "paddingBottom": "19.2rpx"
  },
  "flex-table-label": {
    "marginRight": "24rpx",
    "color": "#323232",
    "fontSize": "38.4rpx",
    "fontWeight": "500",
    "minWidth": "192rpx",
    "textAlign": "right"
  },
  "flex-table-box": {
    "flex": 1,
    "paddingTop": "4.8rpx",
    "fontSize": "33.6rpx",
    "color": "#646464"
  },
  "loadMore": {
    "cursor": "pointer",
    "textAlign": "center",
    "lineHeight": "86.4rpx",
    "color": "#646464"
  },
  "m-navPic": {
    "display": "flex",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "paddingTop": "24rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "0rpx",
    "flexWrap": "wrap"
  },
  "m-navPic-item": {
    "width": 25,
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx",
    "textAlign": "center",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "marginBottom": "36rpx",
    "boxSizing": "border-box"
  },
  "m-navPic-img": {
    "width": "144rpx",
    "height": "144rpx",
    "marginBottom": "12rpx",
    "lineHeight": 1
  },
  "m-navPic-icon": {
    "fontFamily": "iconfont",
    "marginBottom": "12rpx",
    "fontSize:before": "72rpx",
    "color:before": "#ed6d53"
  },
  "m-navPic-title": {
    "fontSize": "33.6rpx",
    "color": "#323232"
  },
  "alert-mask": {
    "backgroundColor": "#333333",
    "opacity": 0.2,
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 998
  },
  "confirm-group": {
    "display": "none",
    "zIndex": 999
  },
  "alert-group": {
    "display": "none",
    "zIndex": 999
  },
  "alert": {
    "position": "fixed",
    "top": 50,
    "width": "624rpx",
    "left": 50,
    "marginLeft": "-312rpx",
    "marginTop": "-240rpx",
    "zIndex": 9999,
    "paddingTop": "0rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "0rpx",
    "fontSize": "33.6rpx",
    "borderRadius": "48rpx"
  },
  "alert-bd": {
    "backgroundColor": "#ffffff"
  },
  "alert-active": {
    "display": "flex"
  },
  "alert-header": {
    "fontSize": "38.4rpx",
    "width": 100,
    "textAlign": "center",
    "height": "86.4rpx",
    "lineHeight": "86.4rpx",
    "backgroundColor": "#fafafa",
    "borderTopLeftRadius": "12rpx",
    "borderTopRightRadius": "12rpx"
  },
  "alert-msg": {
    "backgroundColor": "#ffffff",
    "paddingTop": "48rpx",
    "paddingRight": "48rpx",
    "paddingBottom": "48rpx",
    "paddingLeft": "48rpx",
    "textAlign": "center",
    "fontSize": "38.4rpx"
  },
  "alert-close": {
    "position": "absolute",
    "right": "12rpx",
    "top": "12rpx"
  },
  "alert-ft": {
    "width": 100,
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "height": "96rpx",
    "textAlign": "center",
    "backgroundColor": "#fafafa",
    "borderBottomLeftRadius": "12rpx",
    "borderBottomRightRadius": "12rpx"
  },
  "alert-ft-btn": {
    "display": "inline-flex",
    "flex": 1,
    "marginTop": "12rpx",
    "marginRight": "0rpx",
    "marginBottom": "0rpx",
    "marginLeft": "0rpx",
    "fontSize": "38.4rpx",
    "height": "72rpx",
    "lineHeight": "72rpx",
    "border": "0rpx",
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx",
    "color": "#007aff",
    "fontWeight": "600",
    "cursor": "pointer",
    "textAlign": "center"
  },
  "alert-ft-success": {
    "color": "#007aff"
  },
  "alert-ft-fail": {
    "color": "#007aff"
  },
  "toast": {
    "position": "fixed",
    "bottom": "240rpx",
    "left": "0rpx",
    "right": "0rpx",
    "zIndex": 9999,
    "lineHeight": "96rpx",
    "width": "480rpx",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#1E1E1E",
    "marginTop": 0,
    "marginBottom": 0
  },
  "toast-active": {
    "display": "flex"
  },
  "toast-success": {
    "backgroundColor": "#27AE60"
  },
  "toast-error": {
    "backgroundColor": "#C0392B"
  },
  "toast-info": {
    "backgroundColor": "#F1C40F"
  },
  "modal-group": {
    "display": "none"
  },
  "modal-mask": {
    "backgroundColor": "#333333",
    "opacity": 0.2,
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 998
  },
  "modal": {
    "position": "fixed",
    "left": "12rpx",
    "right": "12rpx",
    "top": 50,
    "marginTop": "-456rpx",
    "backgroundColor": "#ffffff",
    "border": "1px solid #ddd",
    "borderRadius": "48rpx",
    "zIndex": 999
  },
  "modal-header": {
    "borderBottom": "1px solid #eee",
    "paddingTop": "0rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "36rpx",
    "marginBottom": "24rpx",
    "fontWeight": "bold",
    "display": "flex",
    "flexDirection": "row",
    "lineHeight": "120rpx"
  },
  "modal-title": {
    "flex": 1,
    "fontSize": "38.4rpx"
  },
  "modal-close": {
    "fontFamily": "iconfont",
    "width": "120rpx",
    "height": "120rpx",
    "lineHeight": "120rpx",
    "color": "#646464",
    "textAlign": "center",
    "cursor": "pointer"
  },
  "modal-body": {
    "paddingTop": "0rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "48rpx",
    "paddingLeft": "36rpx",
    "maxHeight": "768rpx",
    "overflowY": "auto"
  },
  "header-row": {
    "height": "105.6rpx",
    "clear": "both",
    "display": "none"
  },
  "header-row-show": {
    "height": "105.6rpx",
    "clear": "both"
  },
  "header": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "display": "none",
    "flexDirection": "row",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "16.8rpx",
    "paddingBottom": "16.8rpx",
    "alignItems": "center",
    "zIndex": 998,
    "boxShadow": "0 1px 14.4rpx #ccc",
    "height": "105.6rpx"
  },
  "header-show": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "display": "flex",
    "flexDirection": "row",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "16.8rpx",
    "paddingBottom": "16.8rpx",
    "alignItems": "center",
    "zIndex": 998,
    "boxShadow": "0 1px 14.4rpx #ccc",
    "height": "105.6rpx"
  },
  "header-logo": {
    "width": "72rpx",
    "height": "72rpx",
    "marginRight": "12rpx",
    "marginLeft": "12rpx"
  },
  "header-search-box": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "flex": 1
  },
  "header-search-icon": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontFamily": "iconfont",
    "position": "absolute",
    "left": "12rpx",
    "top": "0rpx",
    "bottom": 0,
    "width": "48rpx",
    "color": "#646464",
    "fontSize": "33.6rpx"
  },
  "header-search": {
    "boxSizing": "border-box",
    "flex": 1,
    "height": "81.6rpx",
    "lineHeight": "81.6rpx",
    "border": "1px solid #ddd",
    "borderBottomLeftRadius": "12rpx",
    "borderTopLeftRadius": "12rpx",
    "borderBottomRightRadius": 0,
    "borderTopRightRadius": 0,
    "paddingLeft": "62.4rpx",
    "fontSize": "33.6rpx",
    "color": "#646464",
    "backgroundColor": "#fafafa"
  },
  "header-search-btn": {
    "height": "81.6rpx",
    "lineHeight": "81.6rpx",
    "marginRight": "4.8rpx",
    "border": 0,
    "borderRadius": 0,
    "borderBottomRightRadius": "12rpx",
    "borderTopRightRadius": "12rpx",
    "paddingTop": "0rpx",
    "paddingRight": "28.8rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "28.8rpx",
    "backgroundColor": "#e0e0e0",
    "color": "#666666",
    "fontSize": "33.6rpx",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "cursor": "pointer"
  },
  "header-back": {
    "marginRight": "12rpx",
    "cursor": "pointer",
    "position": "absolute",
    "fontFamily:after": "\"iconfont\"",
    "content:after": "\"\\e679\"",
    "width:after": "72rpx",
    "height:after": "72rpx",
    "lineHeight:after": "72rpx",
    "justifyContent:after": "center",
    "color:after": "#646464",
    "display:after": "inline-flex",
    "fontSize:after": "48rpx"
  },
  "header-back-fixed": {
    "position": "fixed",
    "left": "0rpx",
    "top": "12rpx",
    "width": "96rpx",
    "height": "96rpx",
    "borderRadius": 50,
    "lineHeight": "96rpx",
    "color": "#646464",
    "fontSize": "48rpx",
    "textAlign": "center",
    "cursor": "pointer",
    "fontFamily:after": "\"iconfont\"",
    "content:after": "\"\\e679\""
  },
  "header-title": {
    "color": "#333333",
    "fontSize": "38.4rpx",
    "textAlign": "center",
    "flex": 1,
    "lineHeight": "72rpx",
    "height": "72rpx",
    "overflow": "hidden",
    "paddingTop": "0rpx",
    "paddingRight": "72rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "72rpx"
  },
  "header-right": {
    "marginRight": "12rpx",
    "color": "#646464",
    "lineHeight": "72rpx"
  },
  "header-right-btn": {
    "marginRight": "12rpx",
    "color": "#969696",
    "lineHeight": "62.4rpx",
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx",
    "border": "1px solid #969696",
    "borderRadius": "12rpx",
    "cursor": "pointer",
    "position": "absolute",
    "right": "12rpx"
  },
  "header-fixtop": {
    "position": "fixed",
    "top": "0rpx",
    "right": 0,
    "display": "flex",
    "flexDirection": "row",
    "zIndex": 9990
  },
  "header-fixtop-icon": {
    "fontFamily:before": "iconfont",
    "color:before": "#ffffff",
    "fontSize:before": "43.2rpx",
    "marginRight:before": "24rpx",
    "height:before": "105.6rpx",
    "lineHeight:before": "105.6rpx"
  },
  "footer-row": {
    "height": "120rpx"
  },
  "footer": {
    "position": "fixed",
    "bottom": "0rpx",
    "left": "0rpx",
    "right": "0rpx",
    "zIndex": 100,
    "backgroundColor": "#fafafa",
    "borderTop": "1px solid #eee",
    "fontSize": "33.6rpx",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "footer-item": {
    "display": "flex",
    "flexDirection": "column",
    "position": "relative",
    "textAlign": "center",
    "flex": 1,
    "textDecoration": "none",
    "color": "#929292",
    "paddingTop": "16.8rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "16.8rpx",
    "paddingLeft": "0rpx",
    "lineHeight": 1.4,
    "height": "120rpx",
    "boxSizing": "border-box",
    "fontFamily:before": "\"iconfont\"",
    "fontSize:before": "38.4rpx",
    "fontStyle:before": "normal",
    "WebkitFontSmoothing:before": "antialiased",
    "MozOsxFontSmoothing:before": "grayscale",
    "color:before": "#929292",
    "lineHeight:before": 1,
    "marginBottom:before": "1"
  },
  "footer-item-num": {
    "color": "#929292",
    "position": "absolute",
    "right": "7.2rpx",
    "top": "9.6rpx",
    "borderRadius": 50,
    "border": "1px solid #eee",
    "width": "38.4rpx",
    "height": "38.4rpx",
    "fontSize": "28.8rpx",
    "lineHeight": "38.4rpx"
  },
  "footer-add": {
    "fontFamily:after": "iconfont",
    "content:after": "\"\\e6da\"",
    "fontSize:after": "43.2rpx",
    "position:after": "absolute",
    "width:after": "86.4rpx",
    "height:after": "86.4rpx",
    "lineHeight:after": "86.4rpx",
    "top:after": "-38.4rpx",
    "left:after": 50,
    "marginLeft:after": "-43.2rpx",
    "zIndex:after": 99,
    "backgroundColor:after": "#d3d3d3",
    "color:after": "#666666",
    "borderRadius:after": 50,
    "content:before": "\"a\"",
    "visibility:before": "hidden"
  },
  "footer-active": {
    "color": "#007bff",
    "color:before": "#007bff"
  },
  "footerBox": {
    "position": "fixed",
    "bottom": "0rpx",
    "left": "0rpx",
    "right": "0rpx",
    "zIndex": 100,
    "backgroundColor": "#fafafa",
    "borderTop": "1px solid #eee",
    "fontSize": "33.6rpx",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "footerFix": {
    "position": "fixed",
    "bottom": "0rpx",
    "left": "0rpx",
    "right": "0rpx",
    "zIndex": 100
  },
  "tabs-border": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottom": "1px solid #eee",
    "lineHeight": "86.4rpx",
    "paddingTop": "0rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "12rpx",
    "backgroundColor": "#ffffff"
  },
  "tabs-border-item": {
    "flex": 1,
    "textAlign": "center",
    "cursor": "pointer"
  },
  "tabs-border-item-inner": {
    "paddingTop": "0rpx",
    "paddingRight": "48rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "48rpx"
  },
  "tabs-border-active": {
    "borderBottom": "1px solid #f60"
  },
  "tabs-border-box": {
    "display": "none",
    "flexDirection": "column"
  },
  "tabs-border-box-active": {
    "display": "flex"
  },
  "tabs-toggle": {
    "backgroundColor": "#ffffff",
    "paddingTop": "0rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "12rpx"
  },
  "tabs-toggle-hd": {
    "lineHeight": "86.4rpx",
    "flex": 1,
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "borderBottom": "1px solid #f0f0f0",
    "fontFamily:after": "iconfont",
    "content:after": "\"\\e661\"",
    "color:after": "#646464",
    "fontSize:after": "33.6rpx",
    "position:after": "absolute",
    "right:after": "1"
  },
  "tabs-toggle-hd-active": {
    "marginBottom": "12rpx",
    "borderBottom": "1px solid #fafafa",
    "content:after": "\"\\e6de\""
  },
  "tabs-toggle-box": {
    "display": "none",
    "paddingBottom": "24rpx"
  },
  "tabs-toggle-active": {
    "display": "block",
    "borderBottom": "1px solid #eee"
  },
  "tab-select-section": {
    "display": "block",
    "position": "relative"
  },
  "tab-select": {
    "borderBottom": "1px solid #ccc",
    "backgroundColor": "#ffffff",
    "color": "#0088CC",
    "display": "flex",
    "flexDirection": "row"
  },
  "tab-select-item": {
    "display": "flex",
    "flexDirection": "row",
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative",
    "paddingTop": "36rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "36rpx",
    "paddingLeft": "0rpx",
    "fontSize": "33.6rpx",
    "cursor": "pointer"
  },
  "tab-select-label": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "marginRight": "7.2rpx",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "38.4rpx",
    "color": "#646464"
  },
  "tab-select-t3up": {
    "display": "inline-block",
    "width": 0,
    "height": 0,
    "borderLeft": "9.6rpx solid transparent",
    "borderRight": "9.6rpx solid transparent",
    "borderBottom": "14.4rpx solid #323232",
    "marginLeft": "12rpx",
    "marginTop": "7.2rpx"
  },
  "tab-select-t3down": {
    "width": 0,
    "height": 0,
    "display": "inline-block",
    "borderLeft": "9.6rpx solid transparent",
    "borderRight": "9.6rpx solid transparent",
    "borderTop": "14.4rpx solid #323232",
    "marginLeft": "12rpx",
    "marginTop": "7.2rpx"
  },
  "tab-select-b": {
    "width": "1",
    "height": "38.4rpx",
    "background": "#ccc",
    "marginRight": "12rpx",
    "marginLeft": "12rpx"
  },
  "tab-select-box": {
    "display": "none",
    "border": "1px solid #ccc",
    "borderLeft": "0rpx",
    "borderRight": "0rpx",
    "position": "absolute",
    "top": "120rpx",
    "left": "0rpx",
    "right": "0rpx",
    "paddingTop": "12rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx",
    "backgroundColor": "#ffffff",
    "zIndex": 999
  },
  "tab-select-catbox": {
    "display": "flex",
    "flexDirection": "row"
  },
  "tab-select-box-item": {
    "height": "96rpx",
    "lineHeight": "96rpx",
    "display": "block",
    "textDecoration": "none",
    "color": "#999999",
    "fontSize": 0.9,
    "paddingLeft": "7.2rpx",
    "cursor": "pointer",
    "borderBottom": "1px solid #ccc"
  },
  "tab-select-box1": {
    "width": "240rpx",
    "backgroundColor": "#f9f9f9",
    "float": "left"
  },
  "tab-select-box2": {
    "flex": 1,
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx",
    "backgroundColor": "#ffffff",
    "float": "left"
  },
  "tab-select-box-pd": {
    "paddingTop": "0rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "24rpx"
  },
  "tab-select-box1item": {
    "height": "96rpx",
    "lineHeight": "96rpx",
    "display": "block",
    "textDecoration": "none",
    "color": "#999999",
    "fontSize": "33.6rpx",
    "paddingLeft": "7.2rpx",
    "cursor": "pointer"
  },
  "tab-select-box1item-active": {
    "color": "#1AB9AC"
  },
  "tab-select-box2item": {
    "height": "96rpx",
    "display": "none",
    "lineHeight": "96rpx",
    "textDecoration": "none",
    "color": "#999999",
    "fontSize": "33.6rpx",
    "borderBottom": "1px solid #ccc",
    "cursor": "pointer"
  },
  "tab-select-box2item-active": {
    "color": "#239EF7"
  },
  "tab-select-show": {
    "display": "block"
  },
  "raty-group": {
    "display": "flex",
    "flexDirection": "row"
  },
  "raty-label": {
    "marginRight": "24rpx"
  },
  "raty-row": {
    "position": "relative",
    "height": "40.8rpx"
  },
  "raty-item": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "display": "flex",
    "flexDirection": "row"
  },
  "raty-no": {
    "backgroundSize": 100,
    "width": "40.8rpx",
    "height": "40.8rpx",
    "backgroundRepeat": "no-repeat",
    "cursor": "pointer",
    "backgroundImage": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAdBJREFUSIm91rtrFFEUwOFvk1VJ8EWK/AGCQQUfGBUCivhEN66pfKGNVSxEbNPY2FhY2miVRhttLCxMobAgaCFYpFAsRAu1sfCBD8RHcWdxMszM7tx1c5qZc8498+OeOefcW2u1WiLkMB7gR9XAgRgazuBQTGA9ImYwgdVwt2pwzA53YgRNDC8GsJk8l6OxGMDJ1PvJfgPXYl1Kb2BFP4FHM/qQfynuC3Ayx1YprVWAq4QKzcpBrO72I3VMYSJlG8TKHH0US3K+sQxP8Dl5H87EtWUppuuYwz6cF5o5RsY6+J/jGOYH8A0XhOnxLhJYJjexHfMs/Idz2Ig7/wn0HdPC3P3SNmaL5oOw9bP41APspVAXN7KOoiqdxRY8ioDdxjY8y3OWtcUr7MbVCrBZHFeSnU59+EtIc7eyvtOCbhr/SAXgDqzpBThq4VDoJDUhpdHARsGat7hfEHOqF+BUju0hxoWL1Dl8zfg3YUMMcAj7U/ofXMYBvE/069iKp5nYEzHAvcI1glCpTVwSKjctL4T/fAW/E1vhkVUGbB+2j4Vd3CtZ+xMz2IPXwjAfrwKsCe1wTWj+NyWwtLSwGbcUpLXoXjqGi8KYqiofcRq78px/AS4ERUV8O+XDAAAAAElFTkSuQmCC)"
  },
  "raty-yes": {
    "backgroundSize": 100,
    "width": "40.8rpx",
    "height": "40.8rpx",
    "backgroundRepeat": "no-repeat",
    "cursor": "pointer",
    "backgroundImage": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAx1JREFUSIm1lU9IFFEcx39vZvbtzOyYrq2sorsiIZFQUiFamVlUlBVkRJmpoKcudYgOWQQF0alLXboEC1qElxKC8FSiUVEQIf3DEnN3dVtd3dJt3J15816HsNx11J2N/Z3mfX+/7+/zHvP+IPYQLEdIbLyic3m3vKpv1qpXsI4DkIyxDgAmAcAlq17OqsEvt2OFfCmVDH+zVW9GQIHNnhHYHMohH71+ud2VdaDdCLcCAPAsjjCdvph1oMMY3bTwLRn+pqwCg1LzPtEYxwvjHPKpOCC3FmUNiOnk2SQzS4CNRi9nDSgbgdql2tjxrAADcpvHQUacqbpCPrsDcltpun3QxJOjNzCd2f1PYjwHupI0ZprMs1+KQobzzJrE+SKNgkgQ6BzHdB4AAAFFHJvn/4KAoCn73juCzjlv2ulkQ772shKApTvRpBCNEAYAvFw+zhdrEVx7smS+pxct3KUTYmOnS+u/jmnU8lFZKX7Ytn6bs1XUeNTuMAAAWnx5++W28lx96Gmu/q7kf0EUYZjCe+65E32ti3Vk9lqExUN3XYlnHTxTUSawOF+kT+O61uL5np7UnCkQACAona5z6q8fO8iXNVZgP22bg7O2jTUetWvcLL8sEODPy+AgX5+v1Qar0oFFbVVfnfqb8pVqVtwgXtWnUWSfSQcGAIDZdOFqNavuSNkY25Yu0EFGlaB0alfGwIDUUuEgIxb+IQM7nerMGIhZ9DwAXaJrnNOYEyoiZh6FDGe+QtEINKRqMWF9NCwe3hLF1e6w/cB9isSkvGT4xaDUdMQy0C+35ytkeNEmQBCx1w/O4O2FHrV7yKv6qDvR1zIhNh5U+TI1aaI0fMEy0EZ/nONZHAEAELSGhcSj11yJ/jqv6tMW15XMP+iL2OsLIrju1UI7hXyusQwUaegEAMAvYV3su3h4e1H80dXlar2qT3VpA9smpGPnNK6AiEYIj0snW8xqTQ++X27nCuO9WkzY8CEmrN/hVX2x5WCpEZDbPDn6+wEDOSbXaoPVqXnTFXIsvn8G77ydr72otAIDAPCoXYE8/W1Zgnd3meV/Ax9BMLJHjs9pAAAAAElFTkSuQmCC)"
  },
  "raty-yes-half": {
    "backgroundSize:before": 100,
    "width:before": "40.8rpx",
    "height:before": "40.8rpx",
    "backgroundRepeat:before": "no-repeat",
    "cursor:before": "pointer",
    "width": "19.2rpx",
    "height": "40.8rpx",
    "overflow": "hidden",
    "backgroundImage:before": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAx1JREFUSIm1lU9IFFEcx39vZvbtzOyYrq2sorsiIZFQUiFamVlUlBVkRJmpoKcudYgOWQQF0alLXboEC1qElxKC8FSiUVEQIf3DEnN3dVtd3dJt3J15816HsNx11J2N/Z3mfX+/7+/zHvP+IPYQLEdIbLyic3m3vKpv1qpXsI4DkIyxDgAmAcAlq17OqsEvt2OFfCmVDH+zVW9GQIHNnhHYHMohH71+ud2VdaDdCLcCAPAsjjCdvph1oMMY3bTwLRn+pqwCg1LzPtEYxwvjHPKpOCC3FmUNiOnk2SQzS4CNRi9nDSgbgdql2tjxrAADcpvHQUacqbpCPrsDcltpun3QxJOjNzCd2f1PYjwHupI0ZprMs1+KQobzzJrE+SKNgkgQ6BzHdB4AAAFFHJvn/4KAoCn73juCzjlv2ulkQ772shKApTvRpBCNEAYAvFw+zhdrEVx7smS+pxct3KUTYmOnS+u/jmnU8lFZKX7Ytn6bs1XUeNTuMAAAWnx5++W28lx96Gmu/q7kf0EUYZjCe+65E32ti3Vk9lqExUN3XYlnHTxTUSawOF+kT+O61uL5np7UnCkQACAona5z6q8fO8iXNVZgP22bg7O2jTUetWvcLL8sEODPy+AgX5+v1Qar0oFFbVVfnfqb8pVqVtwgXtWnUWSfSQcGAIDZdOFqNavuSNkY25Yu0EFGlaB0alfGwIDUUuEgIxb+IQM7nerMGIhZ9DwAXaJrnNOYEyoiZh6FDGe+QtEINKRqMWF9NCwe3hLF1e6w/cB9isSkvGT4xaDUdMQy0C+35ytkeNEmQBCx1w/O4O2FHrV7yKv6qDvR1zIhNh5U+TI1aaI0fMEy0EZ/nONZHAEAELSGhcSj11yJ/jqv6tMW15XMP+iL2OsLIrju1UI7hXyusQwUaegEAMAvYV3su3h4e1H80dXlar2qT3VpA9smpGPnNK6AiEYIj0snW8xqTQ++X27nCuO9WkzY8CEmrN/hVX2x5WCpEZDbPDn6+wEDOSbXaoPVqXnTFXIsvn8G77ydr72otAIDAPCoXYE8/W1Zgnd3meV/Ax9BMLJHjs9pAAAAAElFTkSuQmCC)",
    "content:before": "\".\"",
    "color:before": "#ffffff",
    "display:before": "block"
  },
  "btn": {
    "paddingTop": "19.2rpx",
    "paddingRight": "48rpx",
    "paddingBottom": "19.2rpx",
    "paddingLeft": "48rpx",
    "backgroundColor": "#007AFF",
    "color": "#ffffff",
    "fontSize": "33.6rpx",
    "display": "inline-flex",
    "cursor": "pointer",
    "borderRadius": "24rpx",
    "textAlign": "center",
    "lineHeight": 1
  },
  "btn-small": {
    "paddingTop": "19.2rpx",
    "paddingRight": "28.8rpx",
    "paddingBottom": "19.2rpx",
    "paddingLeft": "28.8rpx",
    "fontSize": "33.6rpx",
    "backgroundColor": "#007AFF",
    "color": "#ffffff",
    "display": "inline-flex",
    "cursor": "pointer",
    "lineHeight": 1,
    "borderRadius": "12rpx",
    "textAlign": "center"
  },
  "btn-mini": {
    "paddingTop": "9.6rpx",
    "paddingRight": "9.6rpx",
    "paddingBottom": "9.6rpx",
    "paddingLeft": "9.6rpx",
    "fontSize": "28.8rpx",
    "backgroundColor": "#007AFF",
    "color": "#ffffff",
    "display": "inline-flex",
    "cursor": "pointer",
    "lineHeight": 1.5,
    "textAlign": "center",
    "borderRadius": "12rpx"
  },
  "btn-icon": {
    "display": "flex",
    "flexDirection": "row",
    "fontFamily:before": "iconfont",
    "display:before": "inline-flex",
    "fontSize:before": "33.6rpx",
    "marginRight:before": "12rpx"
  },
  "btn-row-submit": {
    "marginTop": "48rpx",
    "marginBottom": "48rpx",
    "backgroundColor": "#007bff",
    "textAlign": "center",
    "paddingTop": "28.8rpx",
    "paddingRight": "0rpx",
    "paddingBottom": "28.8rpx",
    "paddingLeft": "0rpx",
    "lineHeight": 1,
    "color": "#ffffff",
    "fontSize": "38.4rpx",
    "borderRadius": "14.4rpx",
    "cursor": "pointer",
    "display": "block",
    "boxSizing": "border-box",
    "width": 96
  },
  "btn-group": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "btn-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007bff",
    "borderColor": "#007bff"
  },
  "btn-secondary": {
    "color": "#ffffff",
    "backgroundColor": "#6c757d",
    "borderColor": "#6c757d"
  },
  "btn-success": {
    "color": "#ffffff",
    "backgroundColor": "#28a745",
    "borderColor": "#28a745"
  },
  "btn-info": {
    "color": "#ffffff",
    "backgroundColor": "#17a2b8",
    "borderColor": "#17a2b8"
  },
  "btn-warning": {
    "color": "#212529",
    "backgroundColor": "#ffc107",
    "borderColor": "#ffc107"
  },
  "btn-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dc3545",
    "borderColor": "#dc3545"
  },
  "btn-light": {
    "color": "#999999",
    "backgroundColor": "#f8f9fa",
    "borderColor": "#f8f9fa"
  },
  "btn-dark": {
    "color": "#ffffff",
    "backgroundColor": "#343a40",
    "borderColor": "#343a40"
  },
  "btn-disable": {
    "backgroundColor": "#eeeeee",
    "color": "#999999"
  },
  "btn-outline-primary": {
    "color": "#007bff",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #007bff"
  },
  "btn-outline-secondary": {
    "color": "#6c757d",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #6c757d"
  },
  "btn-outline-success": {
    "color": "#28a745",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #28a745"
  },
  "btn-outline-info": {
    "color": "#17a2b8",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #17a2b8"
  },
  "btn-outline-warning": {
    "color": "#ffc107",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #ffc107"
  },
  "btn-outline-danger": {
    "color": "#dc3545",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #dc3545"
  },
  "btn-outline-light": {
    "color": "#f8f9fa",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #f8f9fa"
  },
  "btn-outline-dark": {
    "color": "#343a40",
    "backgroundColor": "rgba(0,0,0,0)",
    "backgroundImage": "none",
    "border": "1px solid #343a40"
  },
  "btn-link": {
    "fontWeight": "400",
    "color": "#007bff",
    "backgroundColor": "rgba(0,0,0,0)",
    "border": 0
  },
  "btn-round": {
    "width": "144rpx",
    "height": "144rpx",
    "backgroundColor": "#ff6600",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": 50,
    "color": "#ffffff",
    "fontFamily": "iconfont",
    "fontSize:before": "57.6rpx"
  },
  "btn-love": {
    "cursor": "pointer",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "24rpx",
    "paddingBottom": 0,
    "paddingLeft": "24rpx",
    "height": "86.4rpx",
    "border": "1px solid #aaa",
    "color": "#333333",
    "borderRadius": "24rpx",
    "fontSize": "33.6rpx",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e669\"",
    "fontSize:before": "33.6rpx",
    "marginRight:before": "7.2rpx"
  },
  "btn-love-active": {
    "color": "#ff3300",
    "color:before": "#ff3300"
  },
  "btn-fav": {
    "cursor": "pointer",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "33.6rpx",
    "paddingTop": 0,
    "paddingRight": "24rpx",
    "paddingBottom": 0,
    "paddingLeft": "24rpx",
    "height": "86.4rpx",
    "border": "1px solid #aaa",
    "color": "#333333",
    "borderRadius": "24rpx",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e64c\"",
    "fontSize:before": "33.6rpx",
    "marginRight:before": "7.2rpx"
  },
  "btn-fav-active": {
    "color": "#ff3300",
    "color:before": "#ff3300"
  },
  "btn-fav-small": {
    "height": "62.4rpx"
  },
  "btn-love-small": {
    "height": "62.4rpx"
  },
  "btn-share": {
    "cursor": "pointer",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "24rpx",
    "paddingBottom": 0,
    "paddingLeft": "24rpx",
    "height": "86.4rpx",
    "backgroundColor": "rgba(0,0,0,0)",
    "border": "1px solid #00BCD4",
    "color": "#00BCD4",
    "borderRadius": "24rpx",
    "fontSize": "33.6rpx",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e7ed\"",
    "fontSize:before": "33.6rpx",
    "marginRight:before": "7.2rpx"
  },
  "btn-comment": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "33.6rpx",
    "paddingTop": 0,
    "paddingRight": "24rpx",
    "paddingBottom": 0,
    "paddingLeft": "24rpx",
    "height": "86.4rpx",
    "border": "1px solid #aaa",
    "color": "#333333",
    "borderRadius": "24rpx",
    "fontFamily:before": "iconfont",
    "content:before": "\"\\e7ee\"",
    "fontSize:before": "33.6rpx",
    "marginRight:before": "7.2rpx",
    "cursor": "pointer"
  },
  "btn-comment-active": {
    "color": "#ff3300",
    "color:before": "#ff3300"
  },
  "btn-comment-small": {
    "height": "62.4rpx"
  },
  "btn-buy": {
    "width": "86.4rpx",
    "height": "86.4rpx",
    "lineHeight": "86.4rpx",
    "color": "#ffffff",
    "textAlign": "center",
    "borderRadius": 50,
    "backgroundColor": "#007bff",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "btn-buy-small": {
    "width": "60rpx",
    "height": "60rpx",
    "lineHeight": "60rpx",
    "backgroundColor": "rgba(0,0,0,0)",
    "border": "1px solid #007bff",
    "fontSize:before": "33.6rpx"
  },
  "pointer": {
    "cursor": "pointer"
  },
  "none": {
    "display": "none"
  },
  "yes": {
    "cursor": "pointer",
    "display:after": "inline-block",
    "fontFamily:after": "iconfont",
    "fontSize:after": "38.4rpx",
    "color:after": "#15aba5",
    "content:after": "\"\\e645\""
  },
  "no": {
    "cursor": "pointer",
    "display:after:after": "inline-block",
    "fontFamily:after:after": "iconfont",
    "fontSize:after:after": "38.4rpx",
    "color:after:after": "#15aba5",
    "content:after": "\"\\e646\"",
    "color:after": "#cccccc"
  },
  "flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "flex-col": {
    "display": "flex",
    "flexDirection": "column"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-ai-stretch": {
    "alignItems": "stretch"
  },
  "flex-ai-start": {
    "alignItems": "flex-start"
  },
  "flex-ai-end": {
    "alignItems": "flex-end"
  },
  "flex-ai-center": {
    "alignItems": "center"
  },
  "flex-jc-start": {
    "justifyContent": "flex-start"
  },
  "flex-jc-end": {
    "justifyContent": "flex-end"
  },
  "flex-jc-center": {
    "justifyContent": "center"
  },
  "flex-jc-bettwen": {
    "justifyContent": "space-between"
  },
  "flex-center": {
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "fr": {
    "float": "right"
  },
  "fl": {
    "float": "left"
  },
  "clearfix": {
    "clear": "both",
    "display": "flex",
    "width": 100
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "pos-fixed": {
    "position": "fixed"
  },
  "pos-abs": {
    "position": "absolute"
  },
  "pos-relative": {
    "position": "relative"
  },
  "wh-30": {
    "width": "72rpx",
    "height": "72rpx"
  },
  "wh-40": {
    "width": "96rpx",
    "height": "96rpx"
  },
  "wh-60": {
    "width": "144rpx",
    "height": "144rpx"
  },
  "wh-100": {
    "width": "240rpx",
    "height": "240rpx"
  },
  "wh-150": {
    "width": "360rpx",
    "height": "360rpx"
  },
  "wh-200": {
    "width": "480rpx",
    "height": "480rpx"
  },
  "wmax": {
    "maxWidth": 100
  },
  "w60": {
    "width": "144rpx"
  },
  "w100": {
    "width": "240rpx"
  },
  "w150": {
    "width": "360rpx"
  },
  "h30": {
    "height": "72rpx"
  },
  "h60": {
    "height": "144rpx"
  },
  "h100": {
    "height": "240rpx"
  },
  "h160": {
    "height": "384rpx"
  },
  "h200": {
    "height": "480rpx"
  },
  "f36": {
    "fontSize": "86.4rpx"
  },
  "f28": {
    "fontSize": "67.2rpx"
  },
  "f22": {
    "fontSize": "52.8rpx"
  },
  "f20": {
    "fontSize": "48rpx"
  },
  "f18": {
    "fontSize": "43.2rpx"
  },
  "f16": {
    "fontSize": "38.4rpx"
  },
  "f14": {
    "fontSize": "33.6rpx"
  },
  "f12": {
    "fontSize": "28.8rpx"
  },
  "fw-600": {
    "fontWeight": "600"
  },
  "cl1": {
    "color": "#323232"
  },
  "cl2": {
    "color": "#646464"
  },
  "cl3": {
    "color": "#969696"
  },
  "cl-f30": {
    "color": "#ff3300"
  },
  "cl-red": {
    "color": "#c12725"
  },
  "cl-primary": {
    "color": "#007bff"
  },
  "cl-secondary": {
    "color": "#6c757d"
  },
  "cl-success": {
    "color": "#28a745"
  },
  "cl-danger": {
    "color": "#dc3545"
  },
  "cl-warning": {
    "color": "#ffc107"
  },
  "cl-info": {
    "color": "#17a2b8"
  },
  "cl-light": {
    "color": "#f8f9fa"
  },
  "cl-dark": {
    "color": "#343a40"
  },
  "cl-muted": {
    "color": "#6c757d"
  },
  "cl-white": {
    "color": "#ffffff"
  },
  "cl-money": {
    "color": "#FF6600"
  },
  "cl-num": {
    "color": "#ff7700"
  },
  "bg-ef": {
    "backgroundColor": "#efefef"
  },
  "bg-fff": {
    "backgroundColor": "#ffffff"
  },
  "bg-f30": {
    "backgroundColor": "#ff3300"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "bg-royal": {
    "backgroundColor": "#8a6de9"
  },
  "bg-disabled": {
    "backgroundColor": "#FBFBFB"
  },
  "pd-5": {
    "paddingTop": "12rpx",
    "paddingRight": "12rpx",
    "paddingBottom": "12rpx",
    "paddingLeft": "12rpx"
  },
  "pdl-5": {
    "paddingLeft": "12rpx"
  },
  "pdr-5": {
    "paddingRight": "12rpx"
  },
  "pdt-5": {
    "paddingTop": "12rpx"
  },
  "pdb-5": {
    "paddingBottom": "12rpx"
  },
  "pd-10": {
    "paddingTop": "24rpx",
    "paddingRight": "24rpx",
    "paddingBottom": "24rpx",
    "paddingLeft": "24rpx"
  },
  "pdl-10": {
    "paddingLeft": "24rpx"
  },
  "pdr-10": {
    "paddingRight": "24rpx"
  },
  "pdt-10": {
    "paddingTop": "24rpx"
  },
  "pdb-10": {
    "paddingBottom": "24rpx"
  },
  "pdb-30": {
    "paddingBottom": "72rpx"
  },
  "pdt-0": {
    "paddingTop": "0rpx"
  },
  "mg-5": {
    "marginTop": "12rpx",
    "marginRight": "12rpx",
    "marginBottom": "12rpx",
    "marginLeft": "12rpx"
  },
  "mgb-5": {
    "marginBottom": "12rpx"
  },
  "mgt-5": {
    "marginTop": "12rpx"
  },
  "mgl-5": {
    "marginLeft": "12rpx"
  },
  "mgr-5": {
    "marginRight": "12rpx"
  },
  "mg-10": {
    "marginTop": "24rpx",
    "marginRight": "24rpx",
    "marginBottom": "24rpx",
    "marginLeft": "24rpx"
  },
  "mgb-10": {
    "marginBottom": "24rpx"
  },
  "mgt-10": {
    "marginTop": "24rpx"
  },
  "mgl-10": {
    "marginLeft": "24rpx"
  },
  "mgr-10": {
    "marginRight": "24rpx"
  },
  "mgr-20": {
    "marginRight": "48rpx"
  },
  "mgb-20": {
    "marginBottom": "48rpx"
  },
  "mgl-20": {
    "marginLeft": "48rpx"
  },
  "mgt-20": {
    "marginTop": "48rpx"
  },
  "mgb-0": {
    "marginBottom": "0rpx"
  },
  "bd-mp-5": {
    "borderBottom": "1px solid #eee",
    "paddingBottom": "12rpx",
    "marginBottom": "12rpx"
  },
  "bd-mp-10": {
    "borderBottom": "1px solid #eee",
    "paddingBottom": "24rpx",
    "marginBottom": "24rpx"
  },
  "bd-mp-0": {
    "borderBottom": 0,
    "paddingBottom": 0,
    "marginBottom": 0
  },
  "bd": {
    "border": "1px solid #dee2e6"
  },
  "bdt": {
    "borderTop": "1px solid #dee2e6"
  },
  "bdr": {
    "borderRight": "1px solid #dee2e6"
  },
  "bdb": {
    "borderBottom": "1px solid #dee2e6"
  },
  "bdl": {
    "borderLeft": "1px solid #dee2e6"
  },
  "bd-0": {
    "border": 0
  },
  "bdt-0": {
    "borderTop": 0
  },
  "bdr-0": {
    "borderRight": 0
  },
  "bdb-0": {
    "borderBottom": 0
  },
  "bdl-0": {
    "borderLeft": 0
  },
  "bd-primary": {
    "borderColor": "#007bff"
  },
  "bd-secondary": {
    "borderColor": "#6c757d"
  },
  "bd-success": {
    "borderColor": "#28a745"
  },
  "bd-info": {
    "borderColor": "#17a2b8"
  },
  "bd-warning": {
    "borderColor": "#ffc107"
  },
  "bd-danger": {
    "borderColor": "#dc3545"
  },
  "bd-light": {
    "borderColor": "#f8f9fa"
  },
  "bd-dark": {
    "borderColor": "#343a40"
  },
  "bd-white": {
    "borderColor": "#ffffff"
  },
  "bd-radius-5": {
    "borderRadius": "12rpx"
  },
  "bd-radius-10": {
    "borderRadius": "24rpx"
  },
  "bd-radius-20": {
    "borderRadius": "48rpx"
  },
  "bd-radius-50": {
    "borderRadius": 50
  },
  "fixFoot": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "fixFoot-row": {
    "height": "80"
  },
  "chatbox": {
    "display": "flex",
    "flexDirection": "row",
    "marginBottom": "10"
  },
  "chatbox-nick-a": {
    "color": "#666666",
    "marginRight": "10"
  },
  "chatbox-nick-b": {
    "color": "#666666",
    "marginLeft": "10"
  },
  "chatbox-desc-a": {
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "backgroundColor": "#efefef",
    "borderRadius": "20",
    "position": "relative",
    "flexDirection": "row",
    "fontFamily:after": "iconfont",
    "position:after": "absolute",
    "color:after": "#efefef",
    "content:after": "\"\\e601\"",
    "left:after": "-6",
    "top:after": "3"
  },
  "chatbox-desc-b": {
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "backgroundColor": "#efefef",
    "borderRadius": "20",
    "position": "relative",
    "flexDirection": "row",
    "marginLeft": "30",
    "textAlign": "right",
    "fontFamily:after:after": "iconfont",
    "position:after:after": "absolute",
    "color:after:after": "#efefef",
    "content:after": "\"\\e635\"",
    "right:after": "-6",
    "top:after": "10"
  },
  "imgList": {
    "backgroundColor": "#ffffff",
    "paddingTop": "10",
    "paddingRight": "0",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignContent": "center",
    "position": "fixed",
    "left": "0",
    "right": "0",
    "top": "44",
    "bottom": "50"
  },
  "imgList-item": {
    "width": 33.33,
    "paddingRight": "20",
    "marginBottom": "20"
  },
  "imgList-img": {
    "width": 100,
    "borderRadius": 50
  },
  "imEmo": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-0": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "0"
  },
  "imEmo-1": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-30"
  },
  "imEmo-2": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-60"
  },
  "imEmo-3": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-90"
  },
  "imEmo-4": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-120"
  },
  "imEmo-5": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-150"
  },
  "imEmo-6": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-180"
  },
  "imEmo-7": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-210"
  },
  "imEmo-8": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-240"
  },
  "imEmo-9": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-270"
  },
  "imEmo-10": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-300"
  },
  "imEmo-11": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-330"
  },
  "imEmo-12": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-360"
  },
  "imEmo-13": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-390"
  },
  "imEmo-14": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-420"
  },
  "imEmo-15": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-450"
  },
  "imEmo-16": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-480"
  },
  "imEmo-17": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-510"
  },
  "imEmo-18": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-540"
  },
  "imEmo-19": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-570"
  },
  "imEmo-20": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-600"
  },
  "imEmo-21": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-630"
  },
  "imEmo-22": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-660"
  },
  "imEmo-23": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-690"
  },
  "imEmo-24": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-720"
  },
  "imEmo-25": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-750"
  },
  "imEmo-26": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-780"
  },
  "imEmo-27": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-810"
  },
  "imEmo-28": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-840"
  },
  "imEmo-29": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-870"
  },
  "imEmo-30": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-900"
  },
  "imEmo-31": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-930"
  },
  "imEmo-32": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-960"
  },
  "imEmo-33": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-990"
  },
  "imEmo-34": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1020"
  },
  "imEmo-35": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1050"
  },
  "imEmo-36": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1080"
  },
  "imEmo-37": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1110"
  },
  "imEmo-38": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1140"
  },
  "imEmo-39": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1170"
  },
  "imEmo-40": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1200"
  },
  "imEmo-41": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1230"
  },
  "imEmo-42": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1260"
  },
  "imEmo-43": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1290"
  },
  "imEmo-44": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1320"
  },
  "imEmo-45": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1350"
  },
  "imEmo-46": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1380"
  },
  "imEmo-47": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer",
    "backgroundPositionY": "-1410"
  },
  "imEmo-48": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-49": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-50": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-51": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-52": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-53": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-54": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-55": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-56": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-57": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-58": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-59": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-60": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-61": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-62": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-63": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-64": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-65": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-66": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-67": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-68": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-69": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-70": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-71": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-72": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-73": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-74": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-75": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-76": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-77": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-78": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-79": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-80": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-81": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-82": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-83": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-84": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-85": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-86": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-87": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-88": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-89": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-90": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-91": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-92": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-93": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-94": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-95": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-96": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-97": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "imEmo-98": {
    "background": "url(static/emo.gif) no-repeat",
    "backgroundSize": 100,
    "width": "30",
    "height": "30",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "cursor": "pointer"
  },
  "emoFixbox": {
    "position": "fixed",
    "left": "5",
    "right": "5",
    "bottom": "100",
    "backgroundColor": "#ffffff",
    "border": "1px solid #ddd",
    "WebkitBorderRadius": "20",
    "borderRadius": "20",
    "zIndex": 999
  },
  "uni-tabbar": {
    "flexDirection": "row"
  },
  "uni-picker-view-wrapper": {
    "flexDirection": "row"
  },
  "uni-swiper-dots": {
    "flexDirection": "row"
  },
  "yticon": {
    "fontFamily": "\"yticon\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "icon-huifu": {
    "content:before": "\"\\e68b\""
  },
  "icon-dianzan-ash": {
    "content:before": "\"\\e617\""
  },
  "icon-iconfontshanchu1": {
    "content:before": "\"\\e619\""
  },
  "icon-iconfontweixin": {
    "content:before": "\"\\e611\""
  },
  "icon-shang": {
    "content:before": "\"\\e624\""
  },
  "icon-shouye": {
    "content:before": "\"\\e626\""
  },
  "icon-shanchu4": {
    "content:before": "\"\\e622\""
  },
  "icon-xiaoxi": {
    "content:before": "\"\\e618\""
  },
  "icon-jiantour-copy": {
    "content:before": "\"\\e600\""
  },
  "icon-fenxiang2": {
    "content:before": "\"\\e61e\""
  },
  "icon-pingjia": {
    "content:before": "\"\\e67b\""
  },
  "icon-daifukuan": {
    "content:before": "\"\\e68f\""
  },
  "icon-pinglun-copy": {
    "content:before": "\"\\e612\""
  },
  "icon-shoucang": {
    "content:before": "\"\\e645\""
  },
  "icon-xuanzhong2": {
    "content:before": "\"\\e62f\""
  },
  "icon-icon-test": {
    "content:before": "\"\\e60c\""
  },
  "icon-bianji": {
    "content:before": "\"\\e646\""
  },
  "icon-zuoshang": {
    "content:before": "\"\\e613\""
  },
  "icon-jia2": {
    "content:before": "\"\\e60a\""
  },
  "icon-sousuo": {
    "content:before": "\"\\e7ce\""
  },
  "icon-arrow-fine-up": {
    "content:before": "\"\\e601\""
  },
  "icon-lishijilu": {
    "content:before": "\"\\e6b9\""
  },
  "icon-xiatubiao--copy": {
    "content:before": "\"\\e608\""
  },
  "icon-shoucang_xuanzhongzhuangtai": {
    "content:before": "\"\\e6a9\""
  },
  "icon-jia1": {
    "content:before": "\"\\e61c\""
  },
  "icon-bangzhu1": {
    "content:before": "\"\\e63d\""
  },
  "icon-arrow-left-bottom": {
    "content:before": "\"\\e602\""
  },
  "icon-arrow-right-bottom": {
    "content:before": "\"\\e603\""
  },
  "icon-arrow-left-top": {
    "content:before": "\"\\e604\""
  },
  "icon-icon--": {
    "content:before": "\"\\e744\""
  },
  "icon-zuojiantou-up": {
    "content:before": "\"\\e605\""
  },
  "icon-xia": {
    "content:before": "\"\\e62d\""
  },
  "icon--jianhao": {
    "content:before": "\"\\e60b\""
  },
  "icon-Group-": {
    "content:before": "\"\\e688\""
  },
  "icon-you": {
    "content:before": "\"\\e606\""
  },
  "icon-tuijian": {
    "content:before": "\"\\e610\""
  },
  "icon-bangzhu": {
    "content:before": "\"\\e679\""
  },
  "icon-shezhi1": {
    "content:before": "\"\\e61d\""
  },
  "icon-fork": {
    "content:before": "\"\\e61b\""
  },
  "icon-iLinkapp-": {
    "content:before": "\"\\e654\""
  },
  "icon-saomiao": {
    "content:before": "\"\\e60d\""
  },
  "icon-shezhi": {
    "content:before": "\"\\e60f\""
  },
  "icon-shouhoutuikuan": {
    "content:before": "\"\\e631\""
  },
  "icon-gouwuche": {
    "content:before": "\"\\e609\""
  },
  "icon-dizhi": {
    "content:before": "\"\\e614\""
  },
  "icon-xingxing": {
    "content:before": "\"\\e70b\""
  },
  "icon-zuanshi": {
    "content:before": "\"\\e615\""
  },
  "icon-zuo": {
    "content:before": "\"\\e63c\""
  },
  "icon-shoucang2": {
    "content:before": "\"\\e62e\""
  },
  "icon-yishouhuo": {
    "content:before": "\"\\e71a\""
  }
}

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** D:/uniapp/youqu-web/pages/nvue/nvue.nvue?mpType=page ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nvue.nvue?vue&type=template&id=253a85ff&mpType=page */ 10);
/* harmony import */ var _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nvue.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./nvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 34).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./nvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 34).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "965bd900",
  false,
  _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/pages/nvue/nvue.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=template&id=253a85ff&mpType=page ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=template&id=253a85ff&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=template&id=253a85ff&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "div",
        { staticClass: ["content"] },
        [
          _c("div", { staticClass: ["page-header"] }, [
            _c("div", { style: { height: _vm.statusBarHeight } }),
            _c("div", { staticClass: ["page-header-wrapper"] }, [
              _c("div", { staticClass: ["page-header-left"] }, [
                _c("u-text", { staticClass: ["logo", "yticon"] }, [_vm._v("")])
              ]),
              _c("div", { staticClass: ["page-header-center"] }, [
                _c("u-text", { staticClass: ["search-input"] }, [
                  _vm._v("输入关键字搜索")
                ])
              ]),
              _c(
                "div",
                { staticClass: ["page-header-right"] },
                [
                  _c("u-image", {
                    staticClass: ["contribute-icon"],
                    attrs: {
                      src:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC20lEQVRoQ+1Y7VEVQRDsjkAzUCNQIgAjUCNQIhAjECNQIhAjQCIQMsAIxAwggraa2qXO43bvdu+LenVbxQ/q7e5Nz/TM9CyxI4s7ggMbkMcWyS0iW0Rm8sBGrZkcW33tqIhIeg7gI4BXHRZcATgheV1tXcHBaiCSbPwvAE8z37sB8JqkQc26qoBIsvF/AohbAF2GGugTAI7IHkmDmm0VAwkgHIlIp3ckf7YtDBG7CGCuSO7NhgIolyiSvgP4EIz6RPJbykBJ3uf9XqckD+cCk42IJCfyEQAndXv9IBkBJe2TdAzg80gApq4dcZK6JwlE0lsAZ4mD5yT9+6Al6RTA+0Gb85s6aewjOSDm/RsAvwE0c+CCpLlftELOHPRUudSdPrcPIOnAHBAb68NfSJoeq60GPS9JGtSDtQFZMjxTRcQNrS0z/L9Lb7LJhZxwjsV+48pjjhd3+amApJx/SNLV6L8V9Jd7RyeXATj3fHawBhsLxJ50kndpKRtx1I5Ih/5qypcoWQy8SIONAlKTA5JMm5cADOC43fUlubl+DXcPli2LAmnJkWTjajXaTnp20DWqg/LyWxqRRjSSH4t3Soo9qnevzywdEQVDs0IyGHZPMZK9Cnw0EEn7JC+HREdSBOJBKithJLmieRTA7EAaQm+QRJHkSuRBqnd/w8O3JHMT5p0PR0WkgsdRZF6TfJGLoiSX72cASkeB8mSvAHJPl9wQ1ZL0vTRcPCLhg825w3nixL+TJKFZuofEjj8oGmsBMd8Nxhort849Lg99kFg0R5pWh+boJuY8aK6/oeM/0Gg9OVXfEEtzpMuQQKdYlW5qlO8q1BrSb2r2rEatGmMfNbWmAjQ2IrGUumMXT3VTgQj3+F3Nf8mSnXt88CAUnzwntqvqOs84B6mC0ffSaC/4NTE1tlZZVHHIDvVLY3I87pXQFR9d5cgGZBW3Zz66RWSLyEwe2Kg1k2Orr92ZiPwDeAycQswzKBAAAAAASUVORK5CYII="
                    }
                  }),
                  _c("u-text", { staticClass: ["contribute-text"] }, [
                    _vm._v("投稿")
                  ])
                ],
                1
              )
            ])
          ]),
          _c("uni-tab-bar", {
            attrs: {
              drag: true,
              tabBars: _vm.tabBars,
              tabIndex: _vm.tabCurrentIndex
            },
            on: { tabChange: _vm.tabChange }
          }),
          _c(
            "u-slider",
            {
              staticClass: ["slider"],
              attrs: { index: _vm.tabCurrentIndex, infinite: false },
              on: { change: _vm.tabChange }
            },
            _vm._l(_vm.tabBars, function(tabItem, tabIndex) {
              return _c(
                "list",
                {
                  key: tabIndex,
                  staticClass: ["list-content"],
                  on: { loadmore: _vm.loadMore }
                },
                [
                  _c(
                    "refresh",
                    {
                      staticClass: ["loading"],
                      attrs: { display: tabItem.refreshing ? "show" : "hide" },
                      on: { refresh: _vm.onRefresh }
                    },
                    [
                      tabItem.refreshing
                        ? _c("loading-indicator", {
                            staticClass: ["loading-icon"]
                          })
                        : _vm._e(),
                      _c("u-text", { staticClass: ["loading-text"] }, [
                        _vm._v(
                          _vm._s(
                            tabItem.refreshing ? "正在加载.." : "下拉刷新数据"
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._l(tabItem.newsList, function(item, index) {
                    return _c(
                      "cell",
                      {
                        key: index,
                        staticClass: ["news-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                        on: {
                          click: function($event) {
                            _vm.navToDetails(item)
                          }
                        }
                      },
                      [
                        _c(
                          "u-text",
                          { class: ["title", "title" + item.type] },
                          [_vm._v(_vm._s(item.title))]
                        ),
                        item.images.length > 0
                          ? _c(
                              "div",
                              {
                                class: [
                                  "img-list",
                                  "img-list" + item.type,
                                  item.images.length === 1 && item.type === 3
                                    ? "img-list-single"
                                    : ""
                                ]
                              },
                              _vm._l(item.images, function(imgItem, imgIndex) {
                                return _c(
                                  "div",
                                  {
                                    key: imgIndex,
                                    class: [
                                      "img-wrapper",
                                      "img-wrapper" + item.type,
                                      item.images.length === 1 &&
                                      item.type === 3
                                        ? "img-wrapper-single"
                                        : ""
                                    ]
                                  },
                                  [
                                    _c("u-image", {
                                      staticClass: ["img"],
                                      attrs: { src: imgItem }
                                    }),
                                    _c(
                                      "view",
                                      { staticClass: ["video-tip"] },
                                      [
                                        _c("u-image", {
                                          staticClass: ["video-tip-icon"],
                                          attrs: {
                                            src:
                                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEC0lEQVRoQ+2ajVEVMRDHdzuwA6ACpQKxArECtQKxAqECoQKhAqECoQKxAqEDrWCdn7Nx8vJy+bp3T4YhM2+O8S7J/rO7//2IKo9k6CPBIU9Acpo0s10ReSkiPA8mtH0tIncicqOqPDcyZmvEhX8rIu8cQI9gtyJyKSIXc0ENA3EAnxxAj/BT356LyEdV/TWyWDcQM3smIgA4mtjwXkQ4aX4Mngj3QkSYy5PfTmb+laoeLg7EzBDga8aEEB4TOVfVAKAoj2sUc+QXQC0PxMzY8Esi3W8ROVbV05FTDHPMDC1AEBzEcqY1AeLMQQxtXANuZvjMa/cb/i6Oqo9kQKCFI1WtLl7bfOq9mUHd3/w9ND1F5f+WKAJxn/gebQiIg1Y/mAEEUsDX8J0zVZ0iljoQZydAYLuMrYCIwXOQrYc2qREzw4E/RAu/X9KcRrUX5mWBODX+jBY/UdXjuZuNznd5PnscepNjtikgODJpRzCp3VFaHBU+MTEOkSDMIJ0hFKyMNSAZbZA2NMUJn7ujqjebABDWyDDnXpqb5YDEvnGvqsHZi7I5CMgBxiHDxRx5bmSYGZlyyADWmCwHBN8IwjdRH5Im3B+En5UIJuYFBeMnjFtV3Y/frwDJmNV+K/1NAGEvIv+pqp7MUU1GthXzSoHE+VSzWRU0EsuOaUDhw+aWmNdKOEiBxOzQlYkWNJIqAiAI0V0dmhkZNvkXYyUkpEDYhFJ17cOaWXQACUtxaPhgc9JpZvFBr+Rg/xNI8B+0w0lXR0LDzUCIoE0bNPpISdC1uJD7uJQVlzTyEIFQgFGhMpo10pVfDfgIwlAiU9s0af4h+gglARkE8WURZ98G/V65Fhal3zgg3qnqXpVK/IMG0/rhAOYExDh9KgZEcqy4DtlEirKpTgutqLjsnk5RnEaLWeaUhiY0srFOS1KxrqVPtTS+2by8xsdsnkONNN5G0pDCQcVmtcaoLYVVV63e0zDo8L+0OVgvrNy84lIXemRiM022CtjynWsabVCwMdpKXQeSOlZXcGwRsPWbJAgyLZvOPOh2UKZWn6xYS0Dibl/IVF+1VoytJ15wbqyCtmkwKdIZGnZZE+9tmbLI4mC8VRuDAG8xpo00sQFDi2iRJrabU2jGBYVVmbMKxJ0/dzfSXeGVzM3ZiRZt2tGsgmDdJiAFMGiHNPxijk+YGV1NsuHgD82aCB82A4lomdohvf8jrQm3s61XbzgzAMJtVXwWOPZhD7F0AXEwnBrqjzv1sRCACnfp/HvIdsNlTbiDn+pgDuVn3UCCxN4wA1Bods+xrr8R26/yuuuULh8p8D0nSzsTE8ldOZcAhttgKsUhAEM+Ujty1xIm1PJfOK7nCh/LM2xaNVDbfv8EZNsnXtvvDyrmF1FIBKIwAAAAAElFTkSuQmCC"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          : _c("div", { staticClass: ["img-empty"] }),
                        _c("div", { class: ["bot", "bot" + item.type] }, [
                          _c("u-text", { staticClass: ["author"] }, [
                            _vm._v(_vm._s(item.author))
                          ]),
                          _c("u-text", { staticClass: ["time"] }, [
                            _vm._v(_vm._s(item.time))
                          ])
                        ])
                      ]
                    )
                  }),
                  _c(
                    "cell",
                    {
                      staticClass: ["load-more-wrapper"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [
                      _c("mix-load-more", {
                        attrs: { status: tabItem.loadMoreStatus }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!************************************************************************************!*\
  !*** D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












































































var _index = _interopRequireDefault(__webpack_require__(/*! @/common/index */ 14));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! @/components/tab-nvue/tabbar.nvue */ 16));
var _mixLoadMore = _interopRequireDefault(__webpack_require__(/*! @/components/mix-load-more/mix-load-more.nvue */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var domModule = weex.requireModule('dom');var _default = { /**
                                                            * 大部分js可以复用vue中写的
                                                            * 直接混入即可
                                                            */mixins: [_index.default], components: { uniTabBar: _tabbar.default, mixLoadMore: _mixLoadMore.default }, data: function data() {return { statusBarHeight: '0wx' //状态栏占位高度
    };}, beforeCreate: function beforeCreate() {var domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': "yticon", 'src': "url('https://at.alicdn.com/t/font_1078604_3mrhac2o3oi.ttf')" });}, created: function created() {var _this = this; //获取状态栏高度给顶部占位节点
    uni.getSystemInfo({ success: function success(res) {_this.statusBarHeight = res.statusBarHeight + 'wx';} }); //获取数据，方法通过mixin混入
    this.loadTabbars();}, methods: { tabChange: function tabChange(e) {this.tabCurrentIndex = e.index; //第一次切换tab，动画结束后需要加载数据
      var tabItem = this.tabBars[this.tabCurrentIndex];if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {this.loadNewsList('add');tabItem.loaded = true;}}, //下拉刷新
    onRefresh: function onRefresh(e) {this.loadNewsList('refresh');}, //加载更多
    loadMore: function loadMore(tabItem) {this.loadNewsList('add');} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 14 */
/*!*******************************************!*\
  !*** D:/uniapp/youqu-web/common/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _json = _interopRequireDefault(__webpack_require__(/*! @/json */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: {
    tabBars: [],
    tabCurrentIndex: 0 },


  methods: {
    loadTabbars: function loadTabbars() {
      var tabList = _json.default.tabList;
      tabList.forEach(function (item) {
        item.newsList = [];
        item.loadMoreStatus = 0; //加载更多 0加载前，1加载中，2没有更多了
        item.refreshing = 0;
      });
      this.tabBars = tabList;
      this.loadNewsList('add');
    },
    //新闻列表
    loadNewsList: function loadNewsList(type) {var _this = this;
      var tabItem = this.tabBars[this.tabCurrentIndex];

      //type add 加载更多 refresh下拉刷新
      if (type === 'add') {
        if (tabItem.loadMoreStatus === 2) {
          tabItem.loadMoreStatus = 1;
          setTimeout(function () {
            tabItem.loadMoreStatus = 2;
          }, 100);
          return;
        }
        tabItem.loadMoreStatus = 1;
      } else

      if (type === 'refresh') {
        tabItem.refreshing = true;
      }


      //setTimeout模拟异步请求数据
      setTimeout(function () {
        var list = _json.default.newsList;
        list.sort(function (a, b) {
          return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
        });
        if (type === 'refresh') {
          tabItem.newsList = []; //刷新前清空数组
        }
        list.forEach(function (item) {
          tabItem.newsList.push(item);
        });
        //下拉刷新 关闭刷新动画
        if (type === 'refresh') {
          _this.$refs.mixPulldownRefresh && _this.$refs.mixPulldownRefresh.endPulldownRefresh();

          tabItem.refreshing = false;

          tabItem.loadMoreStatus = 0;
        }
        //上滑加载 处理状态
        if (type === 'add') {
          tabItem.loadMoreStatus = tabItem.newsList.length > 40 ? 2 : 0;
        }
      }, 600);
    },
    //新闻详情
    navToDetails: function navToDetails(item) {
      var data = {
        id: item.id,
        title: item.title,
        author: item.author,
        time: item.time };

      var url = item.videoSrc ? 'videoDetails' : 'details';
      uni.navigateTo({
        url: "/pages/details/".concat(url, "?data=").concat(JSON.stringify(data)) });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 15 */
/*!***********************************!*\
  !*** D:/uniapp/youqu-web/json.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var tabList = [{
  name: '最新',
  id: '1' },
{
  name: '推荐',
  id: '2' }];

var newsList = [{
  id: 1,
  title: '从亲密无间到相爱相杀，这就是人类一败涂地的真相',
  author: 'TapTap',
  images: [
  'http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg',
  'http://fc-feed.cdn.bcebos.com/0/pic/dc4b0610241d7016279f4f4652ea0886.jpg',
  'http://fc-feed.cdn.bcebos.com/0/pic/0f6effa42536fb5c2ca945bd46c59335.jpg'],

  time: '2小时前',
  type: 3 },


{
  id: 2,
  title: '别再玩手机了，赶紧学前端，晚一年能少掉5根头发',
  author: '爱考过',
  images: [
  'https://paimgcdn.baidu.com/v.777468F4BED7DDDA5B4958C671B07659?src=http%3A%2F%2Ffc-feed.cdn.bcebos.com%2F0%2Fpic%2F0bcc93ff9222cafa4526c980c17f69ec.jpg&rz=ar_3_370_245'],

  time: '30分钟前',
  type: 1 },

{
  id: 3,
  title: '将府公园成居民身边“大绿肺”',
  author: '新京报',
  images: [
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1692298215,2450965851&fm=15&gp=0.jpg'],

  time: '2小时前',
  type: 3 },

{
  id: 4,
  title: '骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠',
  author: '神说要唱歌',
  images: [
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEbAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxb738WD708b0AVRn3pFTc3PSp1AAxWpzkZ2qST+VREln6VYaMM2T+VMERDE5oAYqfLnPNKq5PNSYpcDNMQtJRRmgBaUdabmlBpjJVGePWtiOAFneJD5UbjLDopPb6VjgALknDEZFbGnSmaCSFp1giCZJP8bDmk9QWxapaajbkVvUZpw61iIj1eNyILor8ksYXd/tLwf6VmR8vuIrYviX0qFCScTNj24q9p3hW4axlv7sGG3jjMgXo74GfwFbc1lqWk2ZlnY3N7L5dvC8jkDhRnFdjpXgRmCyahLt9Yo+v4mr/AIKuBPp8qeRFH5ZH+rGM5Gef8a61AKynN3saRityvZaZa2MIitoEjQeg6/WrqpSjilWRGdkDAsvUA8isyxQgp2ylFOpBYbtpNntUlFAELIrDBGR6GqFzpMEwO0bG9R0rUxSEUXA5G70ya3yWXK/3h0qg0eK7pkBBBGR6Gsu70aKXLRfI3p2q1IVjlSMUmKuXNpJBIUkUg1VYYNVcQ2popCrAg4IqClBIouB1mnXy3KbHOJQPzq/szXGQTtG4ZTgjoa6ywvFu4A3AccMKljRBdaRZ3MgkeICQfxLwT9fWsXVfCMFype0byJMfd6qf8K6zGaQrSUmJxT3PHL7R7rTpilxEyHsex+hqg6EV7RdWcN1E0U0Suh7MK4XXfCstmGntAZYByV6sv+IreFRbM5p0mtUcZjBpHOY2z6VNKmOlVZSRx2rVsytqQg4qS3I89M9DUOeadE2JUJHAaoRbNiwyba5/3ay84cVo2EoWC4B7iszqwHqashIa7c5q+JA0+R0AFZ8ny8ehxUkbkDIqUU0aTOAOtRF9wqr5hI5qaMgrVImxatuJBW7LcXC2a+Su4fxY7Vz44HFTR308SFFcgGmS1cRiwusqckmtCTEdtskJJ3g5Has5MpG0p69s+taGPMud0ny9D7dKxk9TRbFuIZijx/Fz9K1Y2DRIR2+WsiJwFDHua0UkX7GWBxySKykMz759iysfvHOK5W6XJZq6iXFxFnGcdawb6IINo5ANOLLRlsuID65qtIgKA9Kszt0Wqz8itCyFeFoJpeaTBqyRpPNJT1TPJOBR8qtwcikA3FFSCPIzvopXApqalBqBTipA2KQEmaTeBTC2ajJFAWJWcE8U3f8ANUQNLnmgdh5bNAamUvamA8NTgaizThmgC5BD5pVV+8etaUSR2V3DKy70HVW5yaZp1v5cPmMPmb+VSzIZQ7D+D7v1FZ31AuGNoXaNlC45AB7HkU4D060Rk3FnFdFssD5ZHoP4f61t6F4dbVZVuJSyWqHqDgufb/GlLRjUbst+HtIaGManqMsKQxklUIBx9fT+dZOu+IrjUJpVWRo7YHCxg44Hc+pNdd4njitfDTwQxqkYKqFA4A6n9Aa8vu0f7NHcRnfA3Vh/A3o3p/WiDTepo1ZWR0NlqtzpNzFJbyY3RqWQ/db2NenaZqEOo2cdzCflYcjup7ivHZ2Mlx8v3Y0UM3YADrXofghNmjPLlvnkIw3bH/66qqop6Cp36m3rmq/2VpxmVQ0rEJGD0ye59qpeFHlkF1JNKskjlSzA5yeetYniy8W71a3scqY4B5kgLYG49vy/nXVaHYix09BtCvJ87gdie34dKi1kVe8jXFO7UwUuazLH0VHuo3UgJM0uaj3UbuaLgPNNIo3UvWmBVurSO6jKSD6HuK5e+sZLWTawyD0PY12JFV7m3S4iMbjIP6U0xWOGYYpuavX1o9tM0bD6H1FUTxVXJFVq0tOvDbTq+fl6MPasrNSxvg0wO8RwyhgcgjIp9Yui3fmRGBjyvI+lbQrNlCEVG6ZqakIzTCxw/ifwp9oje709AJurRDo30964K7tJYABIhUkZHvXuDJmsbWdDttUs3hZFR8lkcDlW9a0jUa0ZlOknqjxZ+DTA3Oa0dV06fT7x7e4TbIh/Aj1HtWYetaIxZcjn2I4H8QqNW+YfWq4bkU8mtCBZ2zM2Omaen3RVcnJJqeM/IKQ2SA1KjYqu3JUe9Sg4ouSWRLxShs1XDU8HincDRlWN/IRW4OB/9etYQeWsZb5uvbtiueRg6RqTg/wn1rds7hZLYGRsNGCoGetYstoR142ocADvSpNtttuTkcnPvU0BWQszZx7VUcLG8u8kAjK571IIvabEHjnkkbag4HuawNTQhsjpnpW3bXIGlpGFw28sW9azNQG5S1LqUjnZMlzRJARAGPWlJ/ek+9LIzOgFWWUo1LAjGSDyKkUtGpDJ8tLAu2RskGnTsx+VcVotiHuQlywwVqJgMcDBp5DbQQcj2oZcH5V496AEVVIyTz9aKvW8CtCpK80VPMUYYNO61GDzTgaQDulRsacWxTCcmmCFFFJQKQxwpTTR1p4FMQqjmtdNFu1gguZY9kEp4JPOPpRodjFPcfaLri2h5Yf3z2UVr6pq5nkBlO1F+5GvYUm7FJEIGBxwBShkH8QqK0nguJCGOMfdU961lAAwAAPauaU7Ox6OHwDqq7djOsTEZZYJGHlYJHPQnv8AhXpqanbWfhpb+GL9zHCGEa8Y7Y/OvP5LaKQ7iuGHIYcEVmvqN/Y/abVLl9soIdWOQwPfB6GqU1MdXByo67o6bWvG1vf6VPbNZOrsvyNvBCt2NcRbX8kRYqzKeASv8X1HQ1DIS44bB7g0yLCOBICFJHPpzWsYxtZnHUi07o0DeMyMuCSDnGAqg/Qda9L8Oatpll4bgX7bCZliMki7xu3dSPrXlUzrJMyx9CxOfxqxao0jiJRnnGfSnOKSHSg5ux2vh6OXU9YWaZlLzyeZICMnaOT9Owr01DXFeCtOS3tWvc5MmUQZ/hB5P4n+VdYLqFW2tKgb0LCsZO70G4cjaL2aoatqP9m2L3WwOExld23irAkBHWsTxTCtxoNwSMmLEg/D/wCtmpW4nsZbeOWE522eYsDB8zBzTx45i72Un4OK4WR8cDgVF5prblRHMz0VPG9qfvW0w+hBq5B4u0uUgNK8Wf76ECvLxKfWnrMR3pcqDmZ7JbX9tdLmCeOQf7LA1aVq8aguTkNFLscdGVsGvRdEubqawSeO6+1oeCkgCup7jI/rUuNilK50eaQ1Xt7uObKjKuv3kYYIqfNQMo6jZrdwEdHXlTXITIUYgjBBxXdN0rm9ctRHKJlGFfr9aaYNGESaFakfrTd1WQadhcm3uEkB6Hn6V2SMGUEHIPSvPo3wa67TLsPpyO7YCAhie2KllI1gaM8VTi1C1m/1dzE30cVYEgI4OakZIRUbrTt3FB5ouBzPifw/HrNkdqgXMYzG3r7GvK9Q02WydfMUgOMqT+o+oPFe7MoNYeuaDb6rYSwlAkhJdHA6N6/jVxnYicEzxXGDSk8Vbu7OS2neKRSroxVgfUVWMfHvXTF6HK9yIAk4HWp2HlyBPb9ajUFHyByKUBnJ6ls54pX1Cw/PzrUgNIIJSQSAv1p4gbu/5CjmQ1BsAfWnA5X5efSmSQL5bZZunrUUDjywFJwOKE7icGtR1vKySg+h6GtI7zMpIILcgGqAUCUOO9a6FZ4g+zkDANQ9CjZsYXkgkc4AGDS6pGklrhRlgM59Kt6WoNv5eRgLk+9RXMJmgmVeOMVm3qStzKt5G+zxpxxxVXUGCQt3JqZ1a2dEbgKao30nmAYPAFPqWjLQBpwD0qz5YVciooV/ebjU0jBYs02My5AY5y+flp7jeAw6YqK5bcc9qSGQhvLJ4NaRYmuo8fKCBSHJPNOc/hTQeabEa1sn+jpkc4oqRMlFI6YorG5Vjjs0oNIQQuccUgNWMcxzRTSacOlMBaKAM1Yt7Oa6kEcETyOeyjNAEAGa0LOxafDvlU/U1aTSGtLgJdbN4GditnH1q+B2FRKVtAGxRrFGI0yFHaqF0wNw5z6CtCWOd4N8UbeWW2mXHyj8aSPSI+C7kn2rJyS3O3CYeVR3RlKyhs5Ga2tOvSxEUhz/AHWpw0u377j+NOTS4klV1JGDnFZynFnr0aFWDujQrG1TEV5HNtzgAketbNUtQtTPHuT7y9vWog7M6cRBuNkZF5aqwFxBzE/p29qpgMOn5GrdtdNZSMhG6JuqntV9rO2uk8yBtpPp0/Kt+a2jPM9kqmq37FG1t7SXBkd429O1bERiiURwAM3+z/U1lNbtbPmWIunqDVuHUIFQJHCQfQUpNvY3pJQ0dk/xJ5r27sbWSK2uZIlKgyBDgHnis+21FhKDJhz/ALXOauXYIsnZx87kZ/PpVAXB07939jtpN43B5FLEg9uta0m+W6VzzsdFKa6XOw0rxNdWiYhcSRjrbyt0/wB0/wBK6VdZXWNMvIDaywTfZ2Yo/pjrXm9jqZ8xPLiht1Y4YxD5j+JyfyruvCUkX2W5tHDCZ5GbLA5dCAM570Tvu1Y5F2OGSXzYwSee9GarzhrO9liYY2OVI+hqbcSm5SPqfSqZI+r+m2D6jeC2SWONmGV8zOGPpSXOk3dmyG4jZYiQfNQblZfY1sR+G70RR3No6XEZw6PE2G9jg96TaGkaml+GNQspRlrN4SfmjdSwP044Ndha2dvaKwt4Ui3HLBBjNVNInnuLFGuoGinHyurDGSO4+taS1k2+pokNmto51Gcq4+668FahjuZIJBDdY5OElHCt7H0NWs02REljMcihlPUGlcdhk13BCcPIN3ZRyT+ArPv/AD762McdowychpGC4/DrWhDbQwDEUar6kdT+NSGgDg76yvrWTa6RLkZDAk5rHNlceaWN223+7zXo9/aLd27IR8w5U+hrjZ4mjcqwwQcEVSkS0Uvsyd2kP/AzUsaCMYSSZR3Alb/Gg0Z96dxDTbRmUSbn3d+c5+tX4HMZzG7ofVGIqkDU0Z5ouB11itzLaRyx3b7iORIoYf4063j1eK5l8yaGSI8pnt7f5zTNCctY4/usa1xUNlpFYXgUhbiNoWPduVP41IwBGR0qQqGBBAIPY1UazaLLWknln+43KH8O34UrgcN440fZKuoRrxJ8kuPXsa5Wz0m61CcRW0LSN3wOB9T2r1i6sZtTiNvdqsducblQ5Ln69h+tWbaxgs4RFbxLHGOgUVoqllYxlSTdzi7HwDD5Ya/nZnP8EXAH496TUPC9rar5VhptzcSY+8ZMIP8AGu82U1kqedlqCR5JNoGpwks1jcc9gMgVmNkEjBBBwQexr1vVrKS8tjCty1vGf9YyD5iPQHtXld1FGs8nkbvKLkRhuSR2q4yuJxsVDznPSqSScue244q444III7EHiszfycetaR3MprQts5K/L1HNbFjKBa9Oprnlc1raY4O1T93jNORmlodbYS+VGOOgqeaREjdl/iHy1SRwzbR09aSaTMSoezHBHvWL1YjL1OZpLjLf3qoFS8m3tVm7XE+3OSGxTo7ckSHOCO9V0LRngAEjHSork4jH0qd02ZBqG5X/AEUMetBRlzMNoqDOJFOacxz+FMJ+arQy665GaiPHWnLLtQfSo2bcaozSNyIjyIv90UVCgPlJ1+6KKyLOeuMnaoU4UelQVoSsGKlzj3U9aikjTqEJJ6YoUhFM0oqzlV4aE4+lCwmSULGp56ZquYZNpuny6jepbxDkn5j2UdzXZz3trpFobPTVAwMPN3J/qaxrJjY2jww8NJ9+TuR6VHgs2W6DoP61PP2Kv2HKSztLJ1Pr6VaiWIASTksvVYlOC31PYVWprTIhwTz6CpEXby/lmhKsQkQGFjXhR+FSWhLWybs7gMHNT+G9GbXNQDzLi0hILj+8ey1v+N7W2t7OO6icRXWQiovHmL9Pb1qJ66Hfgqvs5a9TnmkSNcuwAohkMo3AEJ2J71mWtrJO/mTElffvWsoAAA6CsGktD36UpT1tZD80hooqDYzL+0wwuEUHHLL61TlgksmWaBz5Tcg+nsa3iMjBqIRKsfl4yvoa1jNpHJUw6bbiZcerMOJo8j1FSrqNnncFw3+7TLvT1RWkRtqgZINZpixbCZuNxwo9a1ST1OScqlN66lu6v/tLoiKQmScnuat3M0ttYWl3AwWRQUyVB4P1rNeOJVgaOfzGK5ZcfdqzJMJNFeMnlJBj8a66aXK10PIxFRzld7haXlxK+EKIzHAEUYUk/gK9Y8P6YdO0xFlGbl/mkY8nJ7Z9q8y8MmK11eyuWAIE2xt3QZ4z+texoMisKllokTE8r8Zae1rr0z4+Sf8AeKf5/rVG0sZ/sscq4kVxkr0Irv8Axppn2zSPPRcy2x3/AFXv/jXK6VzYRe2R+tCl7o+XU7fw2zz6FbrNGQUBjww6gdP0ragt4oI9kMaxpnO1RgZrjdOvpbR8xtweqnoa7CyuRdW6yqMZ6j0NZsqxaUYp1NFLUgOozSUUAOpKSigYhrndetNridRw3DfWuiNVb6AXFrJH3I4+tCEcK4waZU0ykMQR0qCruSLmpozyKgzUsR5ouFjrtAP+iP8A7/8AStoHisTQP+PNv9+toGpZSHUhoopDEIoFB5pKACmmlpCaAKd/bG6s5YFkMZkUrvAyRWXaaDY6eA0cQaUf8tH5P4elbj1UuJFijZ3OFUZJouI8a1aTy7i5ODzI2Ce/JrEzXQeKWiNxEIVKxAsVB68nJJ/E1zhNdMNjCpuSq1b+grl/mXO1c4rnVNdL4dBfzDg8gDNOWxmzVdyjZKkAGlnkKhAp6nNTagB5KYYEhuarlUaaJ2b5UGTjvWQir5Tz3pIBJJzWhd2v2OAL/Gwy3tTLOcQagbofMqtnj0p2qalHeyOUGPTNJtjW5hXRwPSs26uARtz07VNdyksQetZ0w+QP+dWiyJwNo9ahY81K7fLn2qv15zVAWAx2Ae1KoyQKQEFAB2qW3TfOi+ppiN9QAgHtRUW4nmisSjESEqOChJ6e1NIlRQ24gdwatTJklcDI449agjeRiEwGPTFJMgSJHmcKABnrz0FaUcSRKAigAd6bEgiQ5PPVjWraafCbIXt7IyRMfkiXhnFNK5aRnhlJwCM0tOu7gSzRLHGsUS52oo6f4mq1xP5KcfePSk1roIbc3Pl/Iv3u59KbYWst5eRW0KlpZWwB/WqJc7snljXpngPQhbWX9pTp+/m+5n+FP/r1T91FxjdnT6RpkWladFaxD7o+ZsfebuawPGdgHltbxgWQZiYdgeo/rXYAYFc34vmxaW8H9+Tcfoo/xxWNzsoL94jjsYOMUuaGPNNzWB9JEfmo5JcEIv3m6f41FPcLAmTyx+6vrRbxsoLyHMjdfb2p26kuWtkWB0HOaQ0UhNIplK+PmtHbD+M5b6VQ1chSiLwqr0q9bfvriW4PTOxfpWVqz77lx6YFb01qkebiX7jfcpNO7LtQYAHWmmeRIhE2QrEH61IVLAKvf+VQ3Dbp2AIIXgEeldl2eE0bFjJiJiP4WVhXt9s26FG7lQf0rwrST50scJ43uqkn617rAAqhR0AxWNUqJJJGskbIwyrDBHqK89Fg2nXl1ZN92N9yH1U9K9GrE1+w8xFvI1y8Qw+O6f8A1utZplHORKcjFdjpELQ2S7uCx3YrH0jTxcS+awzEv/jxrp1GKTYyQUuaaKM0gHZopuaXNAC5ozSZopgLTGp1MagDkNYgEV7IAOG+YfjWS3Wum8QxfLHL9VNc045poTG9Kli61BU8PUUxI7DQuLDPqxrXBxWZpK7NOi9xmtEVJQ/NGaTNJupAOzSE03NJmgBaQnFITTGNADXbjmuS1/VRMTbxN+7B+Yj+I1pa9qBgi8mM4ZhyfQVwup3gtrd5Sfm6KPU00rsDntbufOvSgPyxjb+PesrPNOkcsxYnJJyajrrirKxzSd2SpXR6Ndpa2Tk4LEnAzj865xASQBWhCzwxn9yHQsA25TgelFk9GSlcu3mrPKQibSgPIGRmp9FuPPujG+AzKRjp261npHNcTiGG2TzJCdgx/Kn6U0kN9HIVdQchW28HHXH0ola1kW46HQrayxhv7vXNZksojaQHn0Jrsnd20gIQq7hz61x10oeRsgZ7Vzp3ZKMa5kLyFjVOdy0Sr6960LiHaobsaozIFhx3BzWiKIQMrioiADxU6kqoPBzUDKQ3NMCRelX9Mj33Bb0Ws9Pu1r6Uu2OSQ9OlDegmWHLI5APFFRu+Tn2orMZlBnll2Afe6GtGNFjUKAOBjNVrVTjzG6ngfSpZpxEvqx6CkwsSBkadBJ/qwQSP73tVq6u3upNzcKOFUdFFZlvukcysc44FWwaNgZHnO6U9h8o9qz3dppCSee59Klu7jd8idB+tMtyu3aUO7PJFUtA2NPw7ov8Aa2pRwDcV+9I+OAo617RbxrFEqIuFUAAegrl/BelLY6WLhlxNc4Y+y9h/WutUcVlJ3ZtFWQ4niuL8Wy7tRhjz9yIn8z/9auyY8VwPiV861KM9EQfpUPY7cGr1EY5NQzzrBGWY/QetEsqxoXY8Cs6MNf3O+T/VL2/pUJdT2p1LaLdlm1jeZ/tM3U/cHoKvUgpc0m7lwjZC5qC7kKQNt+83yr9TU2arN+9uhn7sX/oRoQT2sOijEMKoOiiudnbzrt++T/M1v3cvlWzt3xgVzKsfMyOpNb0d7nl4+SUVBG7YW8F9rtlZsoMLSBXA4z3I/SovFmhppOsvHbri3kUSRgnoD1H4Gm6DIbbVoLpnjjSJy5eXO3gdPc1Y8YXn225tL5cATwdjkfKxH4Vtze9ZHjtaGdpdsHzIzkAHBA/xr2bQbv7Xo9rKW3MUAY9ckcH+VeGQTscKWO30r0jwJfsksunM2Y2XzYvb1FFRXQRPQ1OaiuZRBbvIRnA4HqewpyGoLgeddQQ/wg+aw+nT9f5ViWPsLVbOzigH8I5+verYplLSGPzRmm5pc0ALRSZozQAtFJmjNADs000ZpDQBnaxH5mnyccr8wrjZetd3cp5kEieqkVwFw+2YIe4P6U0ITNTwnmqmauWi75UUdyBTYHcWS7LSFfRRVsGoIxtQD0GKlBqQH5pM03NGaBi5oJxTSaSgBS1MY8U6o36UAcl4lylyHP3WWvNdXvjdXGFP7pOF9/evS/G8Mj6MZY8/u2G/H908H+leTT9SO4Na0kZ1JdCHOTThzUYp69ea3MLGjYQ79791xXefD+DTLjxCNN1aNXhu0DRhmKjzUOV6fjXEaY2IZsdeK0Czzz2/lSmNlJIK9VPXrWcpWZdOLlKyPoXxBp+jxaPNfXthabrSF2jYoMocHGD+VfPFpqzSR29nJCjR25ZoiOqszAkn+VbviLxfrl5p1raXV8rRxf3VCmRh/E3qa4u3mEdyGJ4Pf3zUR1OipBxVmdpc6lILG3wBtxjPcmsmKQTXGTioL65MS+WwweopmlkTMxZsEDii1jmtoOvgqgKB05rGuvuk1p3BLFjVEoHDKe9UhlNE3Qsw6jFMJ5JPJq40QiJjzndVJhhjTGh8a8Z7Vs2o8vT1z1bNZsSAwg1r+Vizjz2WiWxN7sovJliaKY2A2M0VNhkpIRM9ABWa8hkkLHvUt1P8qxk4J5NRQqWlUEEDrz6UkNGim2GIAnAAqG5uGUBQu0MOp61JH+8fzD06LVW++aVFHpzQtxEUZRgxYZOPlrZ0S2W/v7e0RD+8I3n0A61kLaS5B6f0rovDFvI+uRRIcIeXYddo5I/lRLYI2cj1a3RURUUYVRgD0FXB0qrEeKnzWJ0DXbArzLxDqkDaxdMjFwCF4HcDB/WvSZG4ryDxLCtvrt4i8Lv3D8RmmkmdFCbhK6KUs8t5MqDgE8D0961YIlgiVF6Dv61S0+38tPOcfMw49hVtX88kL9wHk+tZyfRHsUE93uywD0PalzTaM1mdQksnlxs3p0HqabGuyMA8k8k+pprHzJwnZPmP17VJVEbu5m6q5KJEvVjTLaHTYXf7asjlCAFjfB6fT+tTunnakCfuxLn8az2y8747sx/LNb04c6tex5GOdlfzNTUb+2W6tks1IsIo8BSMBg2Qx5rG1YHZGNxPlExsO2fUfUVctXhfyluIy4hZpNq9XXGSv5jP0zTbqFbuyjvEGBIoSVcfcYcA/Q4xVQtTly/ieY/eVzFtzyVNdx4In/4nlup6iN1/TNcPJDLbTbZEKOADg9wa6fwjdLFr1kx6M5T8xj/CtpbCR7LG1R2biWWefszbFPsvH881DJP5SKo5kc7UUdzVuCMQwpGvRRiuY0J6M0najNFwFzRmmFqYZQvJIA96AJsilzUPmClD0AS0UwNTqAFzSE0ZpM0AMc159rCi3vCTwElI/A5r0Fq4XxTDtnmPrhqcdxdDJeUNIijs6/rmtnw8pnuoMnPzFvyJrngT8rYPGw/oa6vwnBjDMOVjH5mm9hI69aeKjXpTs1BVh2aCaTNNLCmA+kzUZem+ZQBKWprHimb6UmkBTvYI7m3khkGUkUqQfevEdVtHsr6a3kHzRsVNe6SDivLvHtkIdWS4UcTJk/Ucf4VpTepE1ocV3qwoDc96ZtyamQAc10HOaelW5laQbiqYG7Hetd7KJoVjXKhW3Ajrms3SJR5ThFLOx/AD61qy3Edum6Vwv9a5Ksm5aHrYenFQuyhdQW9uyyzNJM3REY5zWSPLvtXCEbIm4AUdK6AJ9pIkkA2jlV/xqumnhNRN1kY7DHtUqdty503LbYpajCIAqDJXHyknP4U/Tv3W48jjFS6tjERIzgmoIpMxk962pttanBiIqMrIWc/ISORVIH5gT2qZycYqsx4NWjASeTMm4ccVUfg06UkkA0w8k+1MZbs8ySxoO5rTuJGYyDJCqcAVS0iPN2Cf4Rmr9wwMBO0Lk8Ck97EmW7fOaKhlb94aKsCBAZZcnqTV+VPmjCcH7v4VWs1/e57KKuLzKx9OBWTKY8kRoT0AFUyrtIWYLuPYnrUtxJgqnUdW+lR4y5bBX0OaForia0BFkZyTnPpnFdr4JjzfzSE5KRAZ+p/+tXGo6lCFJDE8cZrs/A2Q95u64QfzpPYKa9476M8VKW4qvGakLVkdIyVsAk15TqrLf6vc3sg2QFvlBP3gBgV6beTpDbySuwCopYk15A7S3cwXJx6dhTWx04dLm1Vyx5r3knlx5WIfePrWgihFCqMAdBUUMSwxhF6CpRWLZ7dOLWr3HZpGYKpJ6Dk0ZqKb5wI/7x5+lJGjdkLADsLn7zncf6VJSCgmgSVlYix5Ykc9yWNY8J/eZ/2WP6GtO8fbayfTFZ9lEZbjyx3jb+VdmHXU8XM5Wsh+msF1GFjyFDMfoFNSac5l0tYc/ekeH/vpQy/+PLVWAmL7Q/QpA/5n5f60lhIf7Nudpw0U0UgPp1H+FTWV5P5HnQehqavFHd+Fba72jz7WXyWbuUYZA/DNY2mXBt7iOQHBjcOPwNXb7UFGmSxKP3d06vsB+4y53D6cgis61j+bci5yOhNap3E9D23S3N2325xgOMQqf4U9fqev5VsKeKxtDwNIswrbh5K8nvxWsprne5pYmzTSaTNMY0gGyyrGrMxAAGST2rzfV/El/r+ojStIR2SRtiLGPmlP9BXS+Mrt7bw5dMhIZsJkehPNeaeGfEUnhrxHa6tHEsxgY5jJxuUjBGexwa1pxvqyZM7GbVPEvg4wQa9YuYpB+7ZyCSB2DDg/Q1tWPjXR7xRm58l/7sox+vSuV+InxIj8Z29na21i9tBbsZCZGBZmIx26CuCSU7utW4Jk8zPoa1vYLpN8EySL6o2atq1cT8P7lpdA2t/yzlZR9Ov9a7JWyKwas7Gi2Jc0E03NGRSARq5bxJGGnjJGQyYP511BNc74iX5Ym+opgc2qAHGK6rw7Htt5H9Wx+VcyBzXXaMmzT4/9rJpsEjVWn5qMUpPFSAFqjeQKKR2wK5bwnaWfi3xpqFrf3EwtIULR26zFfMIOPX8aqK5mJuxoap4n03TFPn3Kl/8AnmnzMfwri7j4hzTX8Zjg22itkpu+Zvqf6VW+J+iaf4c8VNZaZIxhaFZGjZtxjY54z+AP41wwkO6tVBEuTPoHTdRg1Gzjurd90bjI9vY1oA5FeafDi+cm6s2JKgCRR6Hoa9HjaspKzsUndDn6VxPj628zToJQM7JME+xH/wBau1asrWLEahp09seN64B9D2NKLs7jaujxcrtPJ4FPDBo2IORReWz29zJFMCroxDD0NEEXmMqYGWYLxXTfQ5+XWxbj1WRLdIYYxHtUAt1Jqs8rSMWdizHuaYyESOcfKDimVkkuh3XlazLUNzNCf3UjD27H8K22nnh8tXCOX9Pl5xmsfTofOvEB+6vzGtHUpdl1af7/AP8AWrKaTdjanJqLZTupEuFEiLKrb8YY5FKi/KeaR12rMPSYUgfaMGtYbHHiNxXGVz0qrK1XFkAUqOjdc1UmXnirOcqSMCy/rUeeTjvSkYlK1PYwGW45GVXrTQN2VzQ0gY85/Ramu23KO56U1QbYtEowGPX1p6xhnUB16HIJ5o5bu5nzqxjurb247+lFbvkbeMiiqJ9oYlptSIsxAye9TMjPuydo7AH9ay9xJUE8CtRnxAT/ALNZM6GQxkyK7MOT+gpiMSOT93pU8OVjZRjGM5z1qGIbiQPXNaDaLMQETrLIrY7HtXaeDmBnvCOMhCf1rh+VTa4YZ6c8V1vgqQfaLlQMZRT19zWM0xxWp30Z4p7NxVaNuKeW4rM1RznjOWX+zooIyR5smGA7gDNcjFCsK4/iPU11XilyWtlz/eP8q5knmpk+h62BprluOFOzUYNKDWZ6CJKYB85Y/QUu6kzQMdSE0ZppPFAMp6i+LcL/AHmAqPSOb5j6Rn+YqPU5P3sUfsTTtMbYbmT+7HXfh1ZHzuYy5qjRUuXxDdsP4mVP1J/pTNLnSI3HmgtC6BJFHXBPUe4ODTLo7bJB3eVj+QA/qags8s0iDqyZx64Of8aU0mnc5VpYffIYrgxNgmMkEjv71e0uN5JoUiXc74VR6npVj+z31o2xtVX7UR5cik43YHDfkK7fwv4WGmMt1ckNc44QdE/xNSpO2u5VtTqNPgFrZwwDpGgX8hV9elQIMCpRWTLJM01uRSZoJpAYniTT21LRbm2QZdlyn1HIrxKeN0dlYEMDgg9jX0E4yK5PxB4NtdWka4hbyLlupAyrfUVpCVtCZK55AcmpYYySK7A/D7VPMwHtyufvbj/hXR6D4Ht9OnW4u3FxMvKrj5VPr71o5pEKLNTwbpr6boUKSjEkpMjA9s9B+VdOnSoEXAqYcCsG7s0SsSZpM0maTNIYpNYuvrm0RjwFbn8q2CazbsLe3At2AaKPDSD1PYf1oRpTg5ysjmEildfMWCUx/wB7YcV2FhtFlDsYMNo5FNwB+FRRH7LdhRxDNnjsr/8A1/6VTOmrheSN0aQNBNNDUE1JxWIpTXiGrG407WblVd4pUkbDIxU8n1Fe3vXIeKvCq6x/pFuQl2oxz0ce/vVwlZikro8muJ5JpGeV2d2OSzHJP41HGuWrbuPDGqwyFGsJic9VXIP5VqaP4IvrqZWu4zbwA/Nu+8fYCtuZGdmbXw6sHRLm9YYV8RofXHJr0NDVCytIrO3jt4ECRoMACrq1zyd3c0irIkJ4qGQVJmo35pDOC8a6UFZdSjjU5+STjv2P9K5bToy18uVA2gtx37V6tqNql7ZzW8g+WRSprziztWtrqaN87k+Ug9jmq5vdaHTheaI0shNaOD94k4+uayGQqxBGCK6iNAiY9zVWbT45Z/MJIz1HrWcalnqds6N0rFW0ikt7Pzgmcncy5wSo7CqF7eLPIropVVYsoJzgZ4Ga6MgBMY4x0rl72NYp5Ix9wNkN6D0rSnLmeplVTilY0bg8TEdCUaquSzc9KnMDrphdmLFkBGT054FNVAVLflVwOavumNzwD6U1zkVNFCXkC4461DMMMQOgNWc5nz8S5qzp0jB22nBNRzgMoB6jmksWEbMeapEy2NoofL3lieelRq4Q42rk9Ce1RtfEKNn8qZE6hiZAGUnk0zGz6lxJWIyHxz0opjSQBsCHj60UXFY5sDLitCfCW5UcnGB71nitIAbt3fGKyZ1Mr28uD83Knr7ipoWhEzbd5jzhSRz+NVHASZhg4zxirUM0YyTGpz6cEVZW5bEUDQsokYntu4ANbHg+Qx6syHjdER9cEVk4jKq5jfbjqDV3Q5THrdsedrErk+4qZbDW56TG1SFqqxvxUhbisGao5zxQ37+29Nr/ANK50nmuh8TDm2ftlh+n/wBaucJqJHsYN+4OzSg0zNLmpOy4/NFMzRmkO4/OKaTSE00mmKUjF1CXdqP+6AtWbdttjdEdWKrVe9jUrFdR9Hdlf2YH/DFXtPgNxCsYON8x/AAcn8Bmu+k0oXfQ+ZxLbqN92ZWpK0Rtom4Ij3Ef7xJ/liobbzEkWaM4ZDlT71PqEwvdUmlU4j3YX2UcCrVvZSOASPLTtnqajmSjdmbWuh13hCFTqLSiPCmEyIcdNx5H4YIrvYxkdK5LwhCGEzMxMqYT22kdfrkV20FuxHSsbtmi0EUcU7mrSWjelP8AsZ9KLDuUs0Zq21qw7VE0BHaiwXK5NMIzUxjYU3YfSkBDspwXmpNh9KAp9KABakANG1Y03yNtXp+NX7ezMsYcKwz2YYNNK4XKO00hFa40846Uh09vSnysVzEmcRRPI3RQSfwqnaxlLdWb78nzufc1vT6WZY3jIOHUg/jXP3Tajo7I1zArRhtqTDox7Z9KFFnXhZxT1LXlvjIRsfSq12CbZyv30+dfqOaY3im5xgRLn3qvbHUNbuXihZYxjMjheFB/rVWO2dSKi7mxE4kjV16MARUmKtQaZ5EKRKDtRQo/CphYt6VHKeS2jMZeKida2DYNjpVC7WK1cLM2wN0ZuFJ9M0cpNyiU9qAgHala5t92Ffef9gFv5Uiysx+S2uG/4Bj+dFmMkUYp4FCR3Tfdsn/F1FWUtr3GfsOf+2wo5WK5AEJoaIntWxb2DvGGkj8tu65zj8an/s72p8gcxzEsZ6YritYhWPV52UYLKpb64r1WXTRjpXm/iiHyNdnTH8CfyqJqyN8PrIwqM0x3C5J6UFwFznj1rI9C4jyqpVSeWOBXOarCkN2u3OMbjk571oRz/adRBH3VBxVTVubwZ/uCtaaaZy1WmmaVvifT4lJ4KChLdZbYcgMmR9aZppzp8XsMUqCQzywq2Axz90nrVwfvNGFeN6aYwgoc+lVJPnz61pXdhcWwXeD83qKznUqSa1RwlSfgUlqquj4yCPSn3Q3KMDrTbYeW23161SFLYuR2jDBPCt0pptZHkYICVzgmnGdmK89KsRyhcluM9zTMm2Ut7p8uOlFW3iDkNs6iigLnOg1pocov0rLzVy1fchU9R/Ks2dDJvs/ns6qPm27l/Cqu0pIF6Hoc1fikMUySgZ2nOPUd6mvbRLmI3Vqd2PvL3oUraMEJE0iqGUb0XggHg1JZylb+GbAGJFPHbms22YrkbmBPpVlZGO7DH8etNlHqEb8VNu4rMsLkXFnDKD99Af0q3vrE1M3xH5f9m72OCkilfx4/rXKk81reMLnFnBED959x/CsXdkA1M1oj0sFLRokpc1GDTs1meimOzQGpuagt33PM3+3iiwnKzSLOagllKM47BN1S5qjfuVVsd0I/UVUVdmdaVo3IdPQXXmWLnHnjKE9pB0/PpVyRZ9G0pvOAS6myiKDkop+8fxrF3snzKSGXkEdjU13ezX0pnnbc5GPYD2rXlk3o9Op4dW179STTbePzS0mCVGcelaIvIg+Blh3IHFZ1hGJ2YMSUA6A9a349OtJ7DMQ8uaPlmHpn0+lZya5tSEtNDvvAVgk2ny3Q58yTAPso/wDrmvQbexUDpXH+AnWKyns1j2x28zLGe7DPU/rXexkYreKSJbGraoO1O+zR+lS5pd1XYRWa0U9qqXNm4GIYQ5PdmwBWpmjIosFzn20i6f706R+0aZ/U1H/YJP3rm4b/AIHj+Qro+KTApcqC5zn/AAj8Pcyn6yt/jSHw/bgZIcAck+Y3+NdIQKqaiUFhOrOqbo2UbjjJIo5QuYmnaDFOwu2knUE5hUSn5V9ee5rdhspIsbbp2HpIob9eKp2Gpi7tYzZ20jADaTINgUjgjnn9Kvw/at+6Z4gv9xFP8zTsFy1sX0oMY9KTdQXoENMK+lRTWkNxC0M0aSRsMMrDINS7qhmu4oRl3APpQMwX8LaMupwoLQ7WjdivmNjIK+/vW5bWFtaQiK3hSKMc7VFZLavG2sxfuztWFufqw/wrainSZd0bAj2oKcm9xwhX0pfJT0pd1LuosSU5re5lkZVkSGLsVGWP58Cqsuh2UinzovtBIwWmO8n860J4zKAFmkix3QjmqVxG1tC8z6hOqIMnIU/0osBn21h5Fy9kfmRVDxHuFzjB+lXk09fSoLSy1AF7p7wCaUDKvEDtUdBxj1596tiTUIx80UEv+45U/kaVguSJaKvap1iUdqq/2kiHFxFLAfV1yv5jirKSpKgeN1ZT0KnIp2AlCgdqQ4pu6mlqAEkxXlPjdNviSY+sSfyr1KRq8w8eDbrob+9Av6E1nUXunRh9JHHvg5B71g3Ek0LPBvOzPT2rdY81l6nFkLKB04NYwep2VE2roTS1Jkd+wGKraqf9MH+6Kv6emy2B/vHNZ2qH/TP+AitI/EYTVoF/SmzZKPRiP1qwCgu1MkrohHOASOD3xVHSGzauPRzU9xIylHjZ1KtglOtJaSJn71I6Wd7W+jZo5VkCqBwf6dq5u6j2uY8VoWjSBAfPEqsMg7QDUN5EZGaQcgDtWi0PORkSpuQqM5HpVVSw6joatyHYx5qkxIkPOciqKLTFpPn3KPoMVLENx3fN06jmsxJHVzjP0rQtbhVG7p7U7icUweZldgoO3PH0oq4LuEjJHP0oo5ieVHMirFsI2HTDjvnrVbNCttb0560jVmjtYfdc/wDAuaVLh4ZAwYxv2I5BqGGcNw3X1qV13AY6g5FSISR3kcskezJycdM+1TmUO6fIyqq4yMZJ71B5mPvgr79qUSpn74oYHT+HdR8tTbOSEDfLu7V0+/iuB0maEXyLKR5cnyE56Hsa7eKMpGFL7sdCetJo1i9DkvFc5k1EJ2jTH4nmq0T7okPqBUeszedcyyj+KQ4+g4FNtWzbp9Kiex6eF912LQNOyKiBpc1lY7uYSeXyoi1RWJPkZ7liajv3At/qwFS2vFsnuM1VtDHmvUt5Fgms7UmwE981ezVHUuUjPuacNxV37rMuRsL+NIjl3UNjBpsx+YCiIEyKR0B59q6UvdPGqP3jQtZ/IWTA+YnAq7ZXVwJwI3JaT5MHvniqtxaeSPMjyy45H9ataOWTUIbgjEcTg896wsnqLU9l0SVbe+jTdgSRBfqV/wDrGu2hfK15hO08VmbiDPmQ/OuPpzXaeH9U/tDT4nkAWYLiRffvWkQZ0Qal3VXWQU7cK0JJt1LuqHPvRuwMk0AT7hVee7itwN7fMfuqBlm+gqm1zNcnbaYCZwZ2HH/AR3+vSpoLaOAlhlpG+9IxyzfjQIXfd3A4xboe5G5/8B+tLHZwRv5hUySf35DuP/1qlzUVxcpbRb5CeuAByWPoB60DI7mEQl7qGVYXxmTf9x/r/jVWLUpbwhZEeyjP8b9ZP909APrzUqQPcuJrscDlIeoX3Pqf5VcYKwKsAQexoAUTxRRgeYu0DAJbNVp9Xt4lJDFz6AVDLpNpI2VDxE9fLbA/LpVWbQLKaJ45WnkDDHMpGPyxSAx9Y8axWuY1bMnaKL5mP19KuaFA+t6bFf3E7xrJn9ynBGDjBasCTwU2nys8CG5hznggP+Pr+FdF4QkdbK6tXjaIw3DbUcYO04IOPzoRbS5bpk7aHavqriNpY2FuvzByTkseufpWRq+pTeGLmATuZElzteJTkAf3lrqImzqlwfSOMf8AoVcx4ltn1HXEgSCWUx24wUHAJY9T0HShkxV3qa2l+KbS/jUiVGz3U/zHatxJ45F3IwYeoNcTpHguKG6F3fbS4ztjQ8f8CPet9dIWL/j3u7iIem4N/OgHa+hev7iW3i85JYlVeqyKTu9gRzn86zo7x7i4jl1OF7RF5ijflSf7xb19j0q5DaJGwklkeeUdHk/h+g6CrJwwKkAg9QaYiUMCMggg9CKXdWabR7fLWThM8mJ+UP09Pwp0V+GkEUyGCY9Fbo30PQ0AXyaqtZwly8YMLn+KM7fzHQ1Juo3UAOj3qgV33sP4sYzTi1RbqRmoAJHrzP4jkLe2jgjd5R4+jCvRJH968f8AHV4brxRMgOUhhEX49TWc9jal8RklhmmSKsilWGQetRRyb4kbPUU/Nc+x33uKAEUKOAOKw9TOb0+yitkmse9QyXpx3wKun8RhX0iTaQf3co/2s1YmlCGQbgCCGFSiGHT7EbR+8k9etZUrbpCavlvK5ze393lsaUd6iz/KW2d+Knk1RRHthTlurGsePpz0p6TbAyhepGCe1VY5rEdxIXPmHuarb8GpJmwSKhUbmzVIZPEysRgZbHarsG0g5XGKrQKqrnqfWrUYAyOuaAIJdvmH5RRTZifNNFIZlUU+SJo+TyvqKZTABkH2qZLh1GDyPeoaUCgCwbokfdFQlsnIGB6U3FKEPpRYCRG2n0rvtP1UXWivOzDzI0If6gVwkNuZD1wBV6Nzao6I5CyAbx60MadhblN8KfMBt61As7xIEGOO9JLKWGO2agZu5qbI1deV7rQs/bpPapUumIBOOazgckmrcIGASM0cqF9YqdyaTE5VXDAA9quALHGAvYVWQZYHnNWZIyqZ9aLLYFXqJ3uVjdANgr+VQ3kiyxrt6g0yYYaoS3BoUFuafW5tWepTmHz/AIVJb/dapyqSH5hTRD5TcEkGtYuxzyld3LVvcvFhfvJ6dxXQ+HLVdZ1iKzwwjwWfjBIHaues13XKZ6Dk/hXdfDWETa1d3JH3IePqzf8A1qTprcFJ7HodvpqhdpUYxjFRTwvpV0lxD8sL4VsdFbt+BHFbKYFFxFHc27wyruRxhhSsUPtL5LlAQcOOq1bEgPQ5rhJrx9Iv47S4dlkY/upe0g7fjV9NXkVxIvDH7w7N70XtuFjrw9G7IweQaxbbWYZcCT5G/StFZlYZVgR6ihMVi0GwMAYHYUb6g30u/wB6YD5p1giaRzhVFV7eN5JftNwP3mPkTtGP8fU1LkHrzS7qAJt1LuqHdRuoAl3U0nNMLUm6gB5qvNZ29xIHkTLgYDAkH8xTy9JvpAQf2ba72b97lsbv3rc46d6nht4bcFYk25685JpN9KHpgSg4pc1Fupd1AyTNGaj30m+gRJuqOWOOeIxyoHQ9QaQtTS1AEG6ayH8U0A9eXT/4ofrVpJldFdDlWGQaiL00yAdKBk5kqNpKpXF9DbrmSQD271j3fiW2gh3twc4+Y4A/Gk2gsaGs6rHpmnS3TjdsHyqP4m7CvHdTaWW7eSbAlYb2x6nJ/rWlrniO51K6Z03NDD0x93PQn+lc41w0yzyFiW9Sc9q55ScmbUnG9uo6yfdbL7EirOaztOb5ZB7irualrU6oP3R5NUwEN8TJ9wEEgdTU8cnmKSPUiq4Kpcs5GTnpV09zHES90fqVyZpV42gdKzGY1ZnYySZPWq5XLYrVHCSryFXmnOgXdlsEZ4I5oQFn461DMcSkZz9aAIZDnrSRDGaVzzSJ1pgXbdcn6DNWlGBVW2baVJ6Z5q3kEMfakwM+Rv3jfWihx8xooGVUmKkk4II5BHFN2RO+QSqnsOxro5tBsnyIJZFPbcQwrCksnilkjJG5Dg1MZxlsQncg8lg2AR+Na1paW62TSSxCSRu2egrMCSBgpGcnjFaQk8qMICenPvVlFRgiklVAHpUTHJp8hySfWmDmgCeM7Iie9M3dcmlzhQD0qJjQAN1qN8U8nJpjUAIo5FXIuwqmtXIOeDQBoWqgtirFyOAo6VDaEB8H0qzev86ZGPl4qQMW6JDYqoTxVq6YGVqqZ5NWgHx896lfjFRR9eKfJ97mgCxZtic+6mvQPhpLFDDevJIqliijJxnAJ/rXm8DYlQ11/hM4sJG9ZP6Cqb0HFanr8d1ERxIn505ryBRzKg/4FXDRzkDGal8+s+Y1sbOuNp+pWhhkbdIp3RuFztasB7hrV9rBmgwMSdSv19vepGlzTc0m7gkWI7gMoZWDKehBq3BfSxHKSMPxrENvsYvbv5TE5I6qfqKQXjxcTxlf9teV/wDrUhnXQa64wJVDe44NaUWq20v/AC02n0auJjuFdcowYeoNSicimmxWO7WdWGVYEexp4kHrXDJdMvRiPoauwaxPHjL7h6NVcwuU64ODS76w4NbhkwJAUPr2rQS4SQZRgw9jTuhWLheqlxqEUBIJLMOwp3mCq9zbxXA+YYb+8KGCKU+tSn7ihffrVKTWbkZJlwPwp11ps6KxiAl9ADgmsK60/UJWCvC3POAMqv19TU2ZWhop4nmY/I+7nuAOP730qwviC5ugsUBG5xktt5Uev19Kxo9Du5T5aRlVJyzyfxn39h6V0+maXDp8Y5MknUu3rTSFc1LRpRbr5p+bHA9BU++qctwsKF3YKPesi51tjkQjaPU9abdgtc6Lzab5o9a419RmJ5lb86ia+kP/AC0b86XMHKdqZ1HVh+dQSX8EY+aZR+NcY12x/iP51E1yfWlzD5Tqp9dgQEIC5/IVk3Otzy5AbYPRawLm/it1LTSqg9zWDfeJV2lbUZP99un4Ck2GiOlutQWNGllkwo5JJrmbq6XV/NLyiK3jXKhurdO3rWA15czuxaR5NxzzTGLIRlvMYjoG6e1Zzu9EZylfRGqb2La0ULKiE4Jxkn/61UzjZcYIxk9PpUKRqyo6gM/RgT3oiwLecA5G48/hUKNi6C94bpx5k/CrzttUn0FUNPPzyD2FT3T7bdvfiqa1OuL90S3fbahj7mmx5JLk1Gr/AOjRoO4yaUYVCWPJ6CtIq2py1p3siMksxx+dNGfwpByDSpycdqsxJowd2R1FQTclu59asx4HJPIBqrLtIyBznrSArsc05KaxyadHTAvW+CQCcAirGcIxHpVaAZ/Lip+dpHtSApOfnNFJJ980UDO3W40uMGYFc55jPU+2K5a9jJuXk2bd7FgCeQKsr5uJrhIW8w4CA849TWZNJKHIk3Bu4NY04WehnFWEJG4Dp6470TMCeO1MjBc+wpZiBx371uWQnk0i9eKTOafGMmmMfy3FIVx15NSwAmZRjPPSn3QB5Axg4x6VIik/3ulMY09sg1G5pgKg4q5bjNVVq1BkUMC9GOcjtVi+OWUg5+UVWQ8GpL1gQhHGBUgZUwIJqt3qzP0qsOtWgJIxk05/vUkfrSv96gCS3gZnQj7vUn0rb0iO5tYnljZlGckH7pH0qDREhnV7dwTITuUeo7106xqluFHK/wCea56tdxdiXJobbavGwAnHlN69R+daSSq6hlYEeoOaxHtFAd3+Y+gotrb7MS6NgkfQCo9urFqqbwajdVESuI8biWqtFdXclztCoI92Mmp9ve9g9qa2+l3cVni4ckDaGPtStLK+eMY689KFX7h7UstDFIdwXaf7ynB/SjZMv3J2+jjNVobvqnlt8o644q2jghc/xDPsK0VaPUpVEM829X+GFh7MRR9snT/WWzY9UYGnSXkSS7UQc8ZPIFZVxqk+9o4YRkHG5zxRGqmHOjbhvFlXKOD6juKtw3skRyjFT7GuO3Ty3BmaUoRwCnFWY9VuISwkjEqjuvBqlUTdgVRM7mHXJlADhXH5Grqa3A331ZT+dcVbajHOobDpzjDCpxexk4EgJzin7RJ2uPmR2n9rWp/5afpTW1W1H/LQ/gK5B7kJgbxn0zTZbtISA7EHGcYo9sm7CujrH1q3UfKGY/SqsuuyHOxAvuTmuX+37nVUQkscc1L5+4gbgpztOR3qZVkgcoo0J7ySZtzuWPvVGe9SM4JLOeiLyTTL2C5YBYZABwCV6/WqghubQuBbKRwdwblv8amNaL6gqkSz9puGGRb4+rioZbueJSzpEoHdpP8A61U7i4v2+5EI04+bqaqNZTSvuctIexY960549y1JPqSvrVyz7Yo48f3uapzX95KH8y5Ma4OCgxnirq6TckBlQ+vPSlk0K42IxAKlN5U81LqxtuNyjbc5eRZ5JSGDs3q2c1PFp7PjDEsBkrt6V11po9sxAdmBIXAJzwewq02iW63IijGVVPnIPX0zWEsQtkcsp6nBMJS22NWbPAOzBxSx2eeOfNzjFdXLYRRSOqISFG3j19c1Ul0MJOofBfG7y07jtTVZBzGC1u23Khth+XJFMaMwROB8wYdO4NdjFpMO1sx+STwoByOneqx0WXeEcBs89aarRZUalndHIWOVmcEEfKODU1386qg9cmpbuAQ3beVJvbHzsegPoPpUHQkZye5roir6nR7X3bDVUKPpTGfI6U537Coyp2biRjOKswFz8vSnJx0poJ24HSngcCgCRSAD69qqOWB545q4FKqcrwRxVOddhGTnPtQhkR609KjzTlpgXbckMuOozVgHIP0qtBntngZqwpG059KQim6jdRSt96igZ0l9qaWgeKMqzfwoF4BrnvLluJi8hJdjkk1KkkKZblmPc8mlS6VZd2MZrOnDlWhCViCQeTx3qo7ljU93cefJ8o4quRjFaooKkQGhY8jJNTRoQM9qALNkh3FjnavWoror5p9etXLaJ2tjhT97061BPAGIz1JIx60dQM+Q5OetQtyalmQxyEbcCou9AEsafKKsQHrmqyMQMdqsRDrQBcj5NT30Pk7V745qnESCauXcrSLGx5UqOffvSAyJjnioBU033jUIFUgHITninOfm5pqNsanMd3PemA+GV43DIxVh0IrrtF1iCQxx3gC4P3j0Nc5pOlz6pcmKEfdGWY/witRdAuFDbVLYOAR0Nc9ZRejepLtszole2M7N5hZQfl9DVhltZQGjBzg8ds1yCQzRtgO2Qegq5BcXClSzEj3HFccqVtmQ0dH9mVYiAMuxwMf54pBbrGCrHd7iq0dwvl/MMZOTnrUnngpu3Asex9KysySyIlSMDG5Rznpj2qxILWRRuXYc7iTx/wDrrPjaQ9cNg4x6Vp6XeahAuotYXxtvJspLph5McnmeWOF+cHHU8iiEOaVmwSuyKeWx8sxRsFDLzjHNCtDHaoxw4UYGR19TXTSX+uz6DpNzBq1hbvIJxNJcG2iaRlkwpw68gDI4/GsXTr9LDTfEN/d21nfyH/RjLIxIeSV9rKvlkLs2q5+UA8cHFbewWmuhXIZVyYN27KDBy49fSs3yFYuzuATyAOc5rtvEF/LoGn20eiu2nlr9lukhO75xbxMVy4JwGY8Vn38c7+MtfgsvD0WrOt0zeWVl/dD2EbAYJPetPYW0vqVy2OdeziidAGxlQcPxjIz09CDxUUxhhbCFW9Sor0DWbLU57LRpW8Dx3E32JUlDrcExbXYKnDZ4XB+bJ5rmdKsIEmn1rUoo7bSbOctLGufnkByttGGJZmJwD6DOaHRadr3Dl1MLfhzlWUZ2nIIwfT61KbiCO3YEDJ9uTXS5b7fqeka7PHHNqax3lxJg7bC7clowx9AGCt7MPSp/D9tcaFD4ia6sroX9otuii0WN5U3O3zIXVhtIwd2OlDpXlboFtTkVbam9xxwAXGMfSpY5/OlUDjsN3PT616ILJreYwx65c22o318Nl7eWaXFwy/ZUl8sscbNuT0HtXG2c+6z1+9s9Qiv4zA08sd/DJHLcoSp80ddrK7jHzZ46YNN4e3UHAjgjaMrKwB3Pnb9RxTJRAEVUYu2S0jOf8/lXakX9jfaTFaeE7rUo7SCFYdQ85/nDgMTwpX5Czbcn5cdq4nVYILLUtQsLf5orW7lijLtuJAc8k9z6ms6lBrW5Li0Qx3iSWjqNokLEgjP3fT+VMmeaW7DQT/vXYKEGenv6CmRxxOyZ3Bs5baP5VJxnbGoA5yT1IrNpLYVxkc9xsWIgHIO4nkjHerVpHIjJxkZ+6461Gi+RIAxJHU1cjk3/ALxT06DNS2Fx8iSALmTr2HakEiwkNkkjoCOBTcMxOTgn1phJw2MntzU2Qi1a3cPngzAgkkEqOKmMkUk7rvIBBBP9azVODhgAF5Ddj7VG8vzMpBHpU8txWNC5jEoLRKAnX61REqIw2uFZMrn2Pak84qUXcwwuTjpxVdyZE808sc4A6GqSGLLqKxBgXPB7d/wrLvdfn+ZYS0e7rg8n8aY8dx5xdraMbujFsilksjcFQzwbicHCnj2rphGMdWWkkYTy5fGcsT0qYWk3kGVonCHgNjitGbRo2kEhnU87QqL6VJFAVdklWSRdp8sK2No9cYrodVW0KcjGkh+yy7sB0GOvuKY4VkY7l+Y52j1rRTyWnWO4kCLv25A3Ypt9pLWzsUdZl6hl7iiM1ezBGcuWYKBxV+ztDO+cZAqtb27yElV5P6VtoEs7bbISoI5Pc1o5Iq5UvLUQRO+Sdw49qybkrIgG3GB1961mu4pVKMWIweKqrbRXGfvJzx6VKl3AxxHnpT1WtRNLbaT3qOWxkibkflVqaewXI4GCp05wQfpT1Oc4FRBSuQRT0PSmBGetFOePLE0UAUf3mCRnHfFC7s8Hn1rqdZVYtMl2ALkgcVy1EZcyuJC4xwKB6mnIK1DbQ/Zi2zn1yapuw27GcMtgZq9BbtcSLGgO31qrbgbjxW/ZgLFwMVDYFmOGOJVQY4HX0rDvZQtwdhHyHgirV/NIsJAcjIrJl6rRFARyv5mckkmoljJPSp0UZHFatvDGY87BTbsK5jiMqRxUgBU8VenjRXICgVWcDI4pJ3GImeo4q0sZkhc7j8g3AfzqsOtX7EBhICM/LVAU3swjRyzZMLH5ivUVtNoNg9mHR3LN8yuvp9Kx2ZtoXJwD0ro7CV208MzEn1rnrOUbNMlnOXWjSw7mQh0HQ9KpfZ5kG5o22nviu3jRW3bgDxUbQxsBlAeaUK8rEqTOd0m+exkdo3K5HTHWulstViuY3iyQ2cgAYH1qlfWlv87+Uu7PWs/TlH2jp3pVIqced7lNJnRkxFceWu7Oc4qORJP7iqCeABxUoRQ+cCrEarsPHauK5mZzZI+bkijcF6cH2rRKL9ldtoz61QPDUJ3ESxvwcsT/ADrV0m80y1i1FL+e8jNzaSWq+TbCUAOB8xO4dMdP1rFHG6pEJMeM1cHZ3Gmbd7deH7yx022a+1JTZLMpc6cCH8xw3TzOMYxTdJ1uy0Y3ci+dqMbuFisJ7YJHLtAKyyE7gm0k4C5Y47A1jEYjNEdaOtb3rFXOgu7jQ9Xsgh1C60+Y6hNeyrdW7T7jKqhtrx9QCDjIB9qpXw0jWdd1a/n1S4sknu2eAJYySF04+Y7SNvToay3YqeDimMTg80Kvzbod7nQ6ivh6/tNLtz4gv0+w25gJOnTEOSxbP3uOuPwqloj6BpetS3N29zPFaqTp8n2MlTLjh2jLZAB7Z5xzWUfuUv8ABTdfW9gv1N3StS0PTtQmlurzWb9bsOl6Gs0QTB+WLEy5yD8wIGQRxVNNUi0rT9QsdIu7pp7i8UG7iLRB7eINtwwIbLFhxxwtUnVdicCoH+U8cUfWG+gXOktdZt4dZ0uUm8/s+xM0slxcgvNcSyIVaRgCxA4VVGSQBzWZ4XuLDTy8OsQ3L2lzY/ZZFgxuySh69h8pyRzVJJHX5QxAK8j1qzHGjW7MVBODzS9vK5POzbTUNNjuG0yG7kt9JFjd28dyYZCHlnIJcIPm2DaEGeTgnvXP3kFjDfSxaY0kllGqqkjKUMjYG8hTyAWzgHnFSnoD6U0cI1Eq91axV7kUELNIBux6/wCFXN8cKAbQcnPPf/61V0J2Oc1XdmJXk8CsW7skneVnyz4IPb+lONztiwqA/jVckkEZof7oFOwWJDOzDJweKcZJG2jHC+lV4ScdasIeWNNoBdzZ5ORQWMmBk8cCkz8oqaP1+lLYRBIJV+VSCTxVd/OC424VfQ1rwKrSMSM/NUUirzx1FNPUaMn7QzbRkAAnk81GGkikChBuYcd8e9WJlVbllAAHpTR90t3x1rSyGVGllQ7WBJ6jI61WSS4jnk2F1jddpUelXm+bYxyTnrUtwSrHaccVSYxkUVtHbFlh3zHsw6VDsTyispb8+TVqA9PrVLU2KlgDjmiKvIEtSUBrZCscXlhlyjuPve1Z0sFxLOVkJKj+IdKZDI7wjcxbB7n2rXgUC0jfHzN1PrV8ziwvYzYbSMMcknHtir8FvE3yucITgnHK0N900yIkd6XM2PcV08tyhcMFOAQOtNlYSMeeKa7HJ571ARz+NOO4ExRXUg43HrxWdLayI5wMjrmtK2GWrSdFMTcCtYvUaZyxD56UVeaNNx+UUVpcZ//Z'],

  videoSrc: 'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
  time: '2019-04-10 11:43',
  type: 2 },

{
  id: 5,
  title: '继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”',
  author: '全球加盟网',
  images: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2892004605,2174659864&fm=26&gp=0.jpg'],
  videoSrc: 'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
  time: '5分钟前',
  type: 3 },

{
  id: 6,
  title: '奔驰车主哭诉维权续：双方再次协商无果',
  author: '环球网',
  images: [],
  time: '5分钟前',
  type: 3 },

{
  id: 7,
  title: '靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计',
  author: '车品',
  images: [
  'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2133231534,4242817610&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB42BC55E2A26076B2D1301030060C6',
  'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1276936674,3021787485&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB02FC40B00064332AD45170300D0C7',
  'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1909353310,863816541&fm=173&app=49&f=JPEG?w=218&h=146&s=25F67E844C002445437DE8810300E0D3'],

  time: '2019-04-14 ：10:58',
  type: 3 },

{
  id: 8,
  title: '程序员浪漫起来有多可怕，看完这3段代码眼睛湿润了!',
  author: '车品',
  images: [
  'http://p3-tt.bytecdn.cn/list/pgc-image/15394993934784aeea82ef5',
  'http://p1-tt.bytecdn.cn/list/pgc-image/153949939338547b7a69cf6',
  'http://p1-tt.bytecdn.cn/list/509a000211b25f210c77'],

  time: '2019-04-14 ：10:58',
  type: 3 }];


var evaList = [{
  src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
  nickname: 'Ranth Allngal',
  time: '09-20 12:54',
  zan: '54',
  content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。' },

{
  src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
  nickname: 'Ranth Allngal',
  time: '09-20 12:54',
  zan: '54',
  content: '楼上说的好有道理。' }];var _default =



{
  tabList: tabList,
  newsList: newsList,
  evaList: evaList };exports.default = _default;

/***/ }),
/* 16 */
/*!***********************************************************!*\
  !*** D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbar.nvue?vue&type=template&id=77ffced5& */ 17);
/* harmony import */ var _tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbar.nvue?vue&type=script&lang=js& */ 19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./tabbar.nvue?vue&type=style&index=0&lang=css& */ 24).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./tabbar.nvue?vue&type=style&index=0&lang=css& */ 24).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "8512fb18",
  false,
  _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/components/tab-nvue/tabbar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=template&id=77ffced5& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar.nvue?vue&type=template&id=77ffced5& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 18 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=template&id=77ffced5& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.drag
      ? _c("div", { staticClass: ["wrap", "tab-bar-scroll"] }, [
          _c(
            "scroller",
            {
              staticClass: ["scroll"],
              attrs: { scrollDirection: "horizontal", showScrollbar: "false" }
            },
            _vm._l(_vm.tabBars, function(tabBar, t) {
              return _c(
                "div",
                {
                  key: t,
                  ref: tabBar.id + t,
                  refInFor: true,
                  staticClass: ["tab-bar-item", "tab-bar-scroll-width"],
                  on: {
                    click: function($event) {
                      _vm.change(t)
                    }
                  }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["tab-bar-title"],
                      class: [_vm.tabIndex === t ? "active" : ""]
                    },
                    [_vm._v(_vm._s(tabBar.name))]
                  )
                ]
              )
            }),
            0
          )
        ])
      : _c(
          "div",
          { staticClass: ["wrap", "tab-bar"] },
          _vm._l(_vm.tabBars, function(tabBar, t) {
            return _c(
              "div",
              {
                key: t,
                ref: tabBar.id + t,
                refInFor: true,
                staticClass: ["tab-bar-item"],
                on: {
                  click: function($event) {
                    _vm.change(t)
                  }
                }
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["tab-bar-title"],
                    class: [_vm.tabIndex === t ? "active" : ""]
                  },
                  [_vm._v(_vm._s(tabBar.name))]
                )
              ]
            )
          }),
          0
        )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar.nvue?vue&type=script&lang=js& */ 20);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');var _default2 =

{
  props: {
    drag: {
      type: Boolean,
      default: true },

    tabBars: {
      type: Array,
      default: function _default(e) {
        return [];
      } },

    tabIndex: {
      type: Number,
      default: 0 } },


  watch: {
    tabIndex: function tabIndex(newVal) {
      this.change(newVal);
    } },

  methods: {
    change: function () {var _change = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(index, e) {var ret, el, elSize, idx, newEl;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                ret = {
                  index: index };


                this.$emit('tabChange', ret);
                el = this.$refs[this.tabBars[index].id + index][0];_context.next = 5;return (
                  this.getElSize(el));case 5:elSize = _context.sent;if (!(
                elSize.left + elSize.width > 750)) {_context.next = 11;break;}
                idx = index - 4;
                newEl = this.$refs[this.tabBars[idx].id + idx][0];
                dom.scrollToElement(newEl, {});return _context.abrupt("return");case 11:


                if (elSize.left < 0) {
                  dom.scrollToElement(el, {});
                }case 12:case "end":return _context.stop();}}}, _callee, this);}));function change(_x, _x2) {return _change.apply(this, arguments);}return change;}(),


    getElSize: function getElSize(el) {//得到元素的size
      return new Promise(function (res, rej) {
        var result = dom.getComponentRect(el, function (option) {
          res(option.size);
        });
      });
    } } };exports.default = _default2;

/***/ }),
/* 21 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 22);


/***/ }),
/* 22 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 23);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 23 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 24 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tabbar.nvue?vue&type=style&index=0&lang=css& */ 25);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "height": "90",
    "width": "750",
    "flexDirection": "row",
    "fontSize": "30",
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee"
  },
  "tab-bar": {
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "scroll": {
    "height": "90",
    "width": "750",
    "flexDirection": "row"
  },
  "tab-bar-item": {
    "height": "90",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tab-bar-scroll-width": {
    "width": "150"
  },
  "tab-bar-title": {
    "height": "90",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#303133",
    "borderBottomWidth": "4",
    "borderColor": "rgba(0,0,0,0)"
  },
  "active": {
    "color": "#ec706b",
    "borderColor": "#ec706b"
  }
}

/***/ }),
/* 26 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 27 */
/*!***********************************************************************!*\
  !*** D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix-load-more.nvue?vue&type=template&id=b753deea& */ 28);
/* harmony import */ var _mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix-load-more.nvue?vue&type=script&lang=js& */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./mix-load-more.nvue?vue&type=style&index=0&lang=css& */ 32).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./mix-load-more.nvue?vue&type=style&index=0&lang=css& */ 32).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "04665f64",
  false,
  _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/*!******************************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=template&id=b753deea& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mix-load-more.nvue?vue&type=template&id=b753deea& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=template&id=b753deea& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["mix-load-more"], on: { click: _vm.loading } },
    [
      _vm.status == 1
        ? _c("u-image", {
            ref: "loadingIcon",
            staticClass: ["mix-load-more__icon"],
            attrs: { src: "/static/loading.gif" }
          })
        : _vm._e(),
      _c(
        "u-text",
        {
          staticClass: ["mix-load-more__text"],
          class: { "mix-load-more__text--disabled": _vm.status === 2 }
        },
        [_vm._v(_vm._s(_vm.text[_vm.status]))]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!************************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mix-load-more.nvue?vue&type=script&lang=js& */ 31);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 =
{
  name: "mix-load-more",
  props: {
    status: {
      //0加载前，1加载中，2没有更多了
      type: Number,
      default: 0 },

    text: {
      type: Array,
      default: function _default() {
        return [
        '上拉显示更多',
        '正在加载..',
        '我也是有底线的~'];

      } } },


  methods: {} };exports.default = _default2;

/***/ }),
/* 32 */
/*!********************************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mix-load-more.nvue?vue&type=style&index=0&lang=css& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "mix-load-more": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "60rpx"
  },
  "mix-load-more__icon": {
    "width": "36rpx",
    "height": "36rpx",
    "marginRight": "12rpx"
  },
  "mix-load-more__text": {
    "fontSize": "28rpx",
    "color": "#aaaaaa"
  },
  "mix-load-more__text--disabled": {
    "fontSize": "24rpx",
    "color": "#bbbbbb"
  }
}

/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 35);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "yticon": {
    "fontFamily": "yticon"
  },
  "content": {
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "page-header": {
    "backgroundColor": "#ec706b"
  },
  "page-header-wrapper": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100",
    "paddingTop": "0",
    "paddingRight": "20",
    "paddingBottom": "0",
    "paddingLeft": "20"
  },
  "page-header-left": {
    "opacity": 0.9
  },
  "logo": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "page-header-center": {
    "flex": 1,
    "paddingTop": "0",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "search-input": {
    "height": "60",
    "fontSize": "28",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "60",
    "backgroundColor": "rgba(255,255,255,0.2)",
    "borderRadius": "100"
  },
  "page-header-right": {
    "width": "50",
    "alignItems": "center"
  },
  "contribute-icon": {
    "width": "50",
    "height": "44"
  },
  "contribute-text": {
    "fontSize": "20",
    "color": "#ffffff"
  },
  "slider": {
    "flex": 1,
    "backgroundColor": "#f8f8f8"
  },
  "list-content": {
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "load-more-wrapper": {
    "justifyContent": "center",
    "alignItems": "center",
    "width": "750rpx",
    "height": "120rpx",
    "paddingTop": "20rpx"
  },
  "news-item": {
    "width": "750",
    "paddingTop": "24",
    "paddingRight": "30",
    "paddingBottom": "24",
    "paddingLeft": "30",
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee",
    "backgroundColor": "#ffffff"
  },
  "title": {
    "fontSize": "32",
    "color": "#303133",
    "lineHeight": "46"
  },
  "bot": {
    "flexDirection": "row"
  },
  "author": {
    "fontSize": "26",
    "color": "#aaaaaa"
  },
  "time": {
    "fontSize": "26",
    "color": "#aaaaaa",
    "marginLeft": "20"
  },
  "img-list": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "width": "220",
    "height": "140"
  },
  "img-wrapper": {
    "flex": 1,
    "flexDirection": "row",
    "height": "140",
    "position": "relative"
  },
  "img": {
    "flex": 1
  },
  "img-empty": {
    "height": "20"
  },
  "video-tip": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "img-list1": {
    "position": "absolute",
    "left": "30",
    "top": "24"
  },
  "title1": {
    "paddingLeft": "240"
  },
  "bot1": {
    "paddingLeft": "240",
    "marginTop": "20"
  },
  "img-list2": {
    "position": "absolute",
    "right": "30",
    "top": "24"
  },
  "title2": {
    "paddingRight": "210"
  },
  "bot2": {
    "marginTop": "20"
  },
  "img-list3": {
    "width": "700",
    "marginTop": "16",
    "marginRight": "0",
    "marginBottom": "16",
    "marginLeft": "0"
  },
  "img-wrapper3": {
    "marginRight": "4"
  },
  "img-list-single": {
    "width": "690",
    "height": "240",
    "marginTop": "16",
    "marginRight": "0",
    "marginBottom": "16",
    "marginLeft": "0"
  },
  "img-wrapper-single": {
    "height": "240",
    "marginRight": "0"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL21haW4uanM/M2ZkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMuanNvbj9lNzE1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzLmpzb24/ZTFmNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9tYWluLmpzPzI5YWMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvQXBwLnZ1ZT9mMTIyIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL0FwcC52dWU/NThiMyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT85YjFjIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlP2FiN2UiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMvbnZ1ZS9udnVlLm52dWU/NTk4YiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT9mYTViIiwidW5pLWFwcDovLy9wYWdlcy9udnVlL252dWUubnZ1ZSIsInVuaS1hcHA6Ly8vY29tbW9uL2luZGV4LmpzIiwidW5pLWFwcDovLy9qc29uLmpzIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/MjExYyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlP2U3NTgiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT8zNDFlIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/OTFlZCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/YTM0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlP2VlOTUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT9lNjc3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/ODJmNiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzgxNDgiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT84OGJjIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/MTFmMCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzZiYzYiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT83M2Y5Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlPzRlMjMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMvbnZ1ZS9udnVlLm52dWU/ODllNCJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwiaW5pdFVuaSIsImlzRm4iLCJoYW5kbGVQcm9taXNlIiwicHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsIlJFR0VYIiwiQVBJX05PUk1BTF9MSVNUIiwic2hvdWxkUHJvbWlzZSIsIm5hbWUiLCJ0ZXN0IiwiaW5kZXhPZiIsInByb21pc2lmeSIsImFwaSIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYXJhbXMiLCJBcnJheSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJvbk1lc3NhZ2VDYWxsYmFja3MiLCJvcmlnaW4iLCJvblN1Yk5WdWVNZXNzYWdlIiwid2Vidmlld0lkIiwid2VleFBsdXMiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsInRvIiwid3JhcHBlciIsIiRwcm9jZXNzZWQiLCJjdXJyZW50V2Vidmlld0lkIiwiaXNQb3B1cE5WdWUiLCJob3N0TlZ1ZUlkIiwiX191bmlhcHBfb3JpZ2luX3R5cGUiLCJfX3VuaWFwcF9vcmlnaW5faWQiLCJwb3B1cE5WdWVJZCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiX191bmlhcHBfbWFza19pZCIsIl9fdW5pYXBwX2hvc3QiLCJtYXNrQ29sb3IiLCJfX3VuaWFwcF9tYXNrIiwibWFza1dlYnZpZXciLCJnZXRXZWJ2aWV3QnlJZCIsInBhcmVudCIsIm9sZFNob3ciLCJvbGRIaWRlIiwib2xkQ2xvc2UiLCJjbG9zZSIsInNob3dNYXNrIiwic2V0U3R5bGUiLCJtYXNrIiwiY2xvc2VNYXNrIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJnZXRTdWJOVnVlQnlJZCIsImdldEN1cnJlbnRTdWJOVnVlIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJnbG9iYWxFdmVudCIsImNhbGxiYWNrcyIsIlVOSUFQUF9TRVJWSUNFX05WVUVfSUQiLCJhZGRFdmVudExpc3RlbmVyIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayIsImNyZWF0ZUNhbGxiYWNrIiwicmVzIiwiZXJyTXNnIiwia2VlcEFsaXZlIiwiY2FsbGJhY2tJZCIsInB1Ymxpc2giLCJfcmVmIiwiY3JlYXRlUHVibGlzaCIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsInBsdWdpbk5hbWUiLCJkb20iLCJsb2FkRm9udEZhY2UiLCJmYW1pbHkiLCJzb3VyY2UiLCJkZXNjIiwiYWRkUnVsZSIsImZvbnRGYW1pbHkiLCJzdGF0dXMiLCJnbG9iYWxFdmVudCQxIiwiY2FsbGJhY2tzJDEiLCJpc1VuaUFwcFJlYWR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwic3RyZWFtIiwiTUVUSE9EX0dFVCIsIk1FVEhPRF9QT1NUIiwiQ09OVEVOVF9UWVBFX0pTT04iLCJDT05URU5UX1RZUEVfRk9STSIsInNlcmlhbGl6ZSIsImNvbnRlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImpvaW4iLCJoZWFkZXIiLCJfcmVmJG1ldGhvZCIsIl9yZWYkZGF0YVR5cGUiLCJkYXRhVHlwZSIsInJlc3BvbnNlVHlwZSIsImFib3J0ZWQiLCJoYXNDb250ZW50VHlwZSIsImhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJfcmVmMiIsIm9rIiwic3RhdHVzVGV4dCIsInJldCIsInN0YXR1c0NvZGUiLCJhYm9ydCIsInN0b3JhZ2UiLCJVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUiLCJnZXRTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVTdG9yYWdlIiwiX3JlZjMiLCJyZW1vdmVJdGVtIiwiY2xlYXJTdG9yYWdlIiwiX3JlZjQiLCJjbGlwYm9hcmQiLCJnZXRDbGlwYm9hcmREYXRhIiwiZ2V0U3RyaW5nIiwic2V0Q2xpcGJvYXJkRGF0YSIsInNldFN0cmluZyIsImdldEVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiRW1pdHRlciIsIiRvbiIsIndhcm4iLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImN0eCIsInNsaWNlIiwiZnJlZXplIiwid3giLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwiY2hvb3NlSW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJnZXRJbWFnZUluZm8iLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiY2hvb3NlVmlkZW8iLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwic2F2ZUZpbGUiLCJnZXRTYXZlZEZpbGVMaXN0IiwiZ2V0U2F2ZWRGaWxlSW5mbyIsInJlbW92ZVNhdmVkRmlsZSIsIm9wZW5Eb2N1bWVudCIsImdldFN0b3JhZ2VJbmZvIiwiY2hvb3NlTG9jYXRpb24iLCJvcGVuTG9jYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwibWFrZVBob25lQ2FsbCIsInNjYW5Db2RlIiwic2V0U2NyZWVuQnJpZ2h0bmVzcyIsImdldFNjcmVlbkJyaWdodG5lc3MiLCJzZXRLZWVwU2NyZWVuT24iLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVTaG9ydCIsImFkZFBob25lQ29udGFjdCIsInNob3dUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZVRvYXN0IiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJzaG93QWN0aW9uU2hlZXQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJzZXROYXZpZ2F0aW9uQmFyQ29sb3IiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsInJlTGF1bmNoIiwic3dpdGNoVGFiIiwibmF2aWdhdGVCYWNrIiwiZ2V0UHJvdmlkZXIiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwic2hhcmUiLCJyZXF1ZXN0UGF5bWVudCIsInN1YnNjcmliZVB1c2giLCJ1bnN1YnNjcmliZVB1c2giLCJvblB1c2giLCJvZmZQdXNoIiwiYmFzZVVuaSIsIm9zIiwibnZ1ZSIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwiY3JlYXRlVW5pIiwiZ2V0VW5pIiwiV2VleFBsdXMiLCJ0YWJCYXJzIiwidGFiQ3VycmVudEluZGV4IiwibWV0aG9kcyIsImxvYWRUYWJiYXJzIiwidGFiTGlzdCIsImpzb24iLCJpdGVtIiwibmV3c0xpc3QiLCJsb2FkTW9yZVN0YXR1cyIsInJlZnJlc2hpbmciLCJsb2FkTmV3c0xpc3QiLCJ0YWJJdGVtIiwibGlzdCIsImEiLCJiIiwiJHJlZnMiLCJtaXhQdWxsZG93blJlZnJlc2giLCJlbmRQdWxsZG93blJlZnJlc2giLCJuYXZUb0RldGFpbHMiLCJhdXRob3IiLCJ2aWRlb1NyYyIsImltYWdlcyIsImV2YUxpc3QiLCJuaWNrbmFtZSIsInphbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtB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QUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FB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QVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDaHRCQTtBQUFBO0FBQUE7QUFBQTtBQUF3dEIsQ0FBZ0IsaXVCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E1dUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9udnVlL252dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9udnVlL252dWUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbnZ1ZS9udnVlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fREE3RDAwNlwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJARk9OVC1GQUNFXCI6IFtcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgICAgXCJzcmNcIjogXCJ1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfODExMjQyX21nbnR6cTJqNWhiLmVvdD90PTE1NTIyNzMzNDQ4MDYjaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIFxcclxcbiAgdXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzgxMTI0Ml9tZ250enEyajVoYi53b2ZmP3Q9MTU1MjI3MzM0NDgwNicpIGZvcm1hdCgnd29mZicpLFxcclxcbiAgdXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzgxMTI0Ml9tZ250enEyajVoYi50dGY/dD0xNTUyMjczMzQ0ODA2JykgZm9ybWF0KCd0cnVldHlwZScpLCBcXHJcXG4gIHVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF84MTEyNDJfbWdudHpxMmo1aGIuc3ZnP3Q9MTU1MjI3MzM0NDgwNiNpY29uZm9udCcpIGZvcm1hdCgnc3ZnJylcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJmb250RmFtaWx5XCI6IFwieXRpY29uXCIsXG4gICAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8xMDc4NjA0XzNtcmhhYzJvM29pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKVwiXG4gICAgfVxuICBdLFxuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmdcIjogXCJhbnRpYWxpYXNlZFwiLFxuICAgIFwiTW96T3N4Rm9udFNtb290aGluZ1wiOiBcImdyYXlzY2FsZVwiLFxuICAgIFwibGluZUhlaWdodDpiZWZvcmVcIjogMS41XG4gIH0sXG4gIFwiaWNvbi1ndWFuZ2ppZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMFxcXCJcIlxuICB9LFxuICBcImljb24tYXBwcmVjaWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NFxcXCJcIlxuICB9LFxuICBcImljb24tY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lZGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lbW9qaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0YVxcXCJcIlxuICB9LFxuICBcImljb24tZmF2b3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0Y1xcXCJcIlxuICB9LFxuICBcImljb24tbG9hZGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZlxcXCJcIlxuICB9LFxuICBcImljb24tbG9jYXRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1sb2NhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MVxcXCJcIlxuICB9LFxuICBcImljb24tcGhvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kY2hlY2tmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGNsb3NlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRjbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRyaWdodGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlYXJjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1Y1xcXCJcIlxuICB9LFxuICBcImljb24tdGF4aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZFxcXCJcIlxuICB9LFxuICBcImljb24tdGltZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVuZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MVxcXCJcIlxuICB9LFxuICBcImljb24td2FybmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhcm5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NVxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWVudGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1lbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpa2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpZmljYXRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpZmljYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW9yZGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zYW1lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZFxcXCJcIlxuICB9LFxuICBcImljb24tc2FtZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZVxcXCJcIlxuICB9LFxuICBcImljb24tZGVsaXZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MVxcXCJcIlxuICB9LFxuICBcImljb24tZXZhbHVhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBheVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3M1xcXCJcIlxuICB9LFxuICBcImljb24tc2VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NVxcXCJcIlxuICB9LFxuICBcImljb24tc2hvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NlxcXCJcIlxuICB9LFxuICBcImljb24tdGlja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXNjYWRlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3Y1xcXCJcIlxuICB9LFxuICBcImljb24tZGlzY292ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNjYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNldHRpbmdzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xdWVzdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXF1ZXN0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjkxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG9wZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5N1xcXCJcIlxuICB9LFxuICBcImljb24tZm9ybVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5OVxcXCJcIlxuICB9LFxuICBcImljb24td2FuZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBpY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5YlxcXCJcIlxuICB9LFxuICBcImljb24tZmlsdGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjljXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb290cHJpbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZVxcXCJcIlxuICB9LFxuICBcImljb24tcHVsbGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bGx1cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhMFxcXCJcIlxuICB9LFxuICBcImljb24tcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZnJlc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vcmVhbmRyb2lkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kZWxldGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWZ1bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFyY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiMFxcXCJcIlxuICB9LFxuICBcImljb24tcmVtaW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXByb2ZpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaXNjb3ZlcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZXNzYWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hZGRyZXNzYm9va1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZFxcXCJcIlxuICB9LFxuICBcImljb24tbGlua1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZlxcXCJcIlxuICB9LFxuICBcImljb24tbG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMFxcXCJcIlxuICB9LFxuICBcImljb24tdW5sb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlaWJvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hY3Rpdml0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjNVxcXCJcIlxuICB9LFxuICBcImljb24tYmlnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZGZhbW91c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjYlxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZFxcXCJcIlxuICB9LFxuICBcImljb24tc2VsZWN0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10bWFsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZlxcXCJcIlxuICB9LFxuICBcImljb24tZXhwbG9yZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkMlxcXCJcIlxuICB9LFxuICBcImljb24tcHJlc2VudFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkM1xcXCJcIlxuICB9LFxuICBcImljb24tc3F1YXJlY2hlY2tmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcXVhcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNxdWFyZWNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkN1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkOVxcXCJcIlxuICB9LFxuICBcImljb24tYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpZmljYXRpb25mb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1leHBsb3JlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZFxcXCJcIlxuICB9LFxuICBcImljb24tZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZVxcXCJcIlxuICB9LFxuICBcImljb24tZ2FtZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZlxcXCJcIlxuICB9LFxuICBcImljb24tcmVkcGFja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWxlY3Rpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaW1pbGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcHByZWNpYXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlM1xcXCJcIlxuICB9LFxuICBcImljb24taW5mb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWluZm9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlOFxcXCJcIlxuICB9LFxuICBcImljb24tbW9iaWxldGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3J3YXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlYVxcXCJcIlxuICB9LFxuICBcImljb24tZm9yd2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwN1xcXCJcIlxuICB9LFxuICBcImljb24tcmVjaGFyZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWNoYXJnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZFxcXCJcIlxuICB9LFxuICBcImljb24tdmlwY2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZVxcXCJcIlxuICB9LFxuICBcImljb24tdm9pY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZvaWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMFxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdpZmlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWdodGF1dG9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpZ2h0Zm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWdodGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYXJvdGF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmOVxcXCJcIlxuICB9LFxuICBcImljb24tbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhcmNvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZsYXNobGlnaHRjbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmY1xcXCJcIlxuICB9LFxuICBcImljb24tZmxhc2hsaWdodG9wZW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlYXJjaGxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlcnZpY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNvcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLTEyMTJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vYmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNFxcXCJcIlxuICB9LFxuICBcImljb24tbW9iaWxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNVxcXCJcIlxuICB9LFxuICBcImljb24tY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNlxcXCJcIlxuICB9LFxuICBcImljb24tY291bnRkb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwN1xcXCJcIlxuICB9LFxuICBcImljb24tY291bnRkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFpYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11cHN0YWdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwZVxcXCJcIlxuICB9LFxuICBcImljb24tdXBzdGFnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwZlxcXCJcIlxuICB9LFxuICBcImljb24tYmFieWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhYnlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJyYW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMlxcXCJcIlxuICB9LFxuICBcImljb24tYnJhbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNob2ljZW5lc3NmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaG9pY2VuZXNzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jbG90aGVzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNlxcXCJcIlxuICB9LFxuICBcImljb24tY2xvdGhlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxN1xcXCJcIlxuICB9LFxuICBcImljb24tY3JlYXRpdmVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jcmVhdGl2ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxOVxcXCJcIlxuICB9LFxuICBcImljb24tZmVtYWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1rZXlib2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxYlxcXCJcIlxuICB9LFxuICBcImljb24tbWFsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxY1xcXCJcIlxuICB9LFxuICBcImljb24tbmV3ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZFxcXCJcIlxuICB9LFxuICBcImljb24tbmV3XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdWxsbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZlxcXCJcIlxuICB9LFxuICBcImljb24tcHVsbHJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yYW5rZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMVxcXCJcIlxuICB9LFxuICBcImljb24tcmFua1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMlxcXCJcIlxuICB9LFxuICBcImljb24tYmFkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvY3VzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qaWFuemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcHBzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wYWludGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBhaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waWNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWZyZXNoYXJyb3dcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1hcmtmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYXJrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wcmVzZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMlxcXCJcIlxuICB9LFxuICBcImljb24tcmVwZWFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hbGJ1bVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNFxcXCJcIlxuICB9LFxuICBcImljb24tcGVvcGxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNVxcXCJcIlxuICB9LFxuICBcImljb24tcGVvcGxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZXJ2aWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczN1xcXCJcIlxuICB9LFxuICBcImljb24tcmVwYWlyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1maWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZXBhaXJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YW94aWFvcHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZFxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWFuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1hbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW11bml0eWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW11bml0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MVxcXCJcIlxuICB9LFxuICBcImljb24tcmVhZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MlxcXCJcIlxuICB9LFxuICBcImljb24tc3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0M1xcXCJcIlxuICB9LFxuICBcImljb24taHVhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0NVxcXCJcIlxuICB9LFxuICBcImljb24tdGlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0OFxcXCJcIlxuICB9LFxuICBcImljb24tY2FsZW5kYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWN1dFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0YlxcXCJcIlxuICB9LFxuICBcImljb24tbWFnaWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2t3YXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0ZFxcXCJcIlxuICB9LFxuICBcImljb24tcGxheWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN0b3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRhZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MlxcXCJcIlxuICB9LFxuICBcImljb24tZ3JvdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1NVxcXCJcIlxuICB9LFxuICBcImljb24tYmFja2RlbGV0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1NlxcXCJcIlxuICB9LFxuICBcImljb24taG90ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1N1xcXCJcIlxuICB9LFxuICBcImljb24taG90XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wb3N0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yYWRpb2JveFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1YlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11cGxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdyaXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MFxcXCJcIlxuICB9LFxuICBcImljb24td3JpdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJhZGlvYm94ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2M1xcXCJcIlxuICB9LFxuICBcImljb24tcHVuY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hZGQxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb3ZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zYWZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1oYW9kaWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi15ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3MFxcXCJcIlxuICB9LFxuICBcImljb24tanVodWFzdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzcxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YW9xaWFuZ2dvdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3MlxcXCJcIlxuICB9LFxuICBcImljb24tdGlhbm1hb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3M1xcXCJcIlxuICB9LFxuICBcImljb24tYWN0aXZpdHlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jcm93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNyb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lc3NhZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wcm9maWxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YVxcXCJcIlxuICB9LFxuICBcImljb24tc291bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNwb25zb3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcG9uc29yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11cGJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZWJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZXVuYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLTExMTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW15ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4Y1xcXCJcIlxuICB9LFxuICBcImljb24tZW1vamlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lbW9qaWZsYXNoZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZVxcXCJcIlxuICB9LFxuICBcImljb24tZmxhc2hidXlmaWxsLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRleHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW11c2ljZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NVxcXCJcIlxuICB9LFxuICBcImljb24tbXVzaWNmb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWFtaWZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5N1xcXCJcIlxuICB9LFxuICBcImljb24teGlhbWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kbGVmdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRyaWFuZ2xlZG93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRyaWFuZ2xldXBmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzljXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGxlZnRmaWxsLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bGxkb3duMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZlxcXCJcIlxuICB9LFxuICBcImljb24td2VpeGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lbW9qaWxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1rZXlib2FyZGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2EzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWNvcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWNvcmRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNVxcXCJcIlxuICB9LFxuICBcImljb24tcmVjb3JkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGFkZGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3VuZGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJkYm9hcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJkYm9hcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcm1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10ZWxlcGhvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvaW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNvcnRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhZFxcXCJcIlxuICB9LFxuICBcImljb24tY2FyZGJvYXJkZm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaXJjbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaXJjbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMlxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiM1xcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZmF2b3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25mYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiNVxcXCJcIlxuICB9LFxuICBcImljb24tc2hvcGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12b2ljZWxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25mYXZvcmZpbGwtY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiYVxcXCJcIlxuICB9LFxuICBcImljb24tZnVsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiY1xcXCJcIlxuICB9LFxuICBcImljb24tbWFpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZFxcXCJcIlxuICB9LFxuICBcImljb24tcGVvcGxlbGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZVxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNuZXdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc25ld1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMFxcXCJcIlxuICB9LFxuICBcImljb24tbWVkYWxmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZWRhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMlxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3Nob3RmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzaG90XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aWRlb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpZGVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hc2tmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hc2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV4aXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNraW5maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1za2luXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb25leWJhZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVzZWZ1bGxmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11c2VmdWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb25leWJhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkMVxcXCJcIlxuICB9LFxuICBcImljb24tcmVkcGFja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN1YnNjcmlwdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNFxcXCJcIlxuICB9LFxuICBcImljb24tbXlfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW11bml0eV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNlxcXCJcIlxuICB9LFxuICBcImljb24tY2FydF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkN1xcXCJcIlxuICB9LFxuICBcImljb24td2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvbWVfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkOVxcXCJcIlxuICB9LFxuICBcImljb24tY2FydF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tdW5pdHlfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkYlxcXCJcIlxuICB9LFxuICBcImljb24tbXlfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkY1xcXCJcIlxuICB9LFxuICBcImljb24td2VfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkZFxcXCJcIlxuICB9LFxuICBcImljb24tc2tpbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkZVxcXCJcIlxuICB9LFxuICBcImljb24tc2VhcmNoX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zY2FuX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wZW9wbGVfbGlzdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlMVxcXCJcIlxuICB9LFxuICBcImljb24tbWVzc2FnZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlMlxcXCJcIlxuICB9LFxuICBcImljb24tY2xvc2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFkZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlNFxcXCJcIlxuICB9LFxuICBcImljb24tcHJvZmlsZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlNVxcXCJcIlxuICB9LFxuICBcImljb24tc2VydmljZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlNlxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kX2FkZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlN1xcXCJcIlxuICB9LFxuICBcImljb24tZWRpdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlOFxcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZnJlc2hfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2tfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYXJlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tZW50X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcHByZWNpYXRlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mYXZvcl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmMFxcXCJcIlxuICB9LFxuICBcImljb24tYXBwcmVjaWF0ZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tZW50X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhbmdfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vcmVfYW5kcm9pZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmNFxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb3JlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc19mYXZvcl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmN1xcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNfbmV3X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzX25ld19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmOVxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lZGFsX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lZGFsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NfaG90X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NfaG90X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODAwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aWRlb19maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODAxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZXNzYWdlX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcm1fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpZGVvX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWFyY2hfbGlzdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwNVxcXCJcIlxuICB9LFxuICBcImljb24tZm9ybV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nbG9iYWxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdsb2JhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwOFxcXCJcIlxuICB9LFxuICBcImljb24tZmF2b3JfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwOVxcXCJcIlxuICB9LFxuICBcImljb24tZGVsZXRlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrX2FuZHJvaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2tfYW5kcm9pZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwY1xcXCJcIlxuICB9LFxuICBcImljb24tZG93bl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwZFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfY2xvc2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2Nsb3NlX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV4cHJlc3NtYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bmNoX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ldmFsdWF0ZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODEyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mdXJuaXR1cmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRyZXNzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb2ZmZWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNwb3J0c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxNlxcXCJcIlxuICB9LFxuICBcImljb24td3h6b25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ncm91cF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxN1xcXCJcIlxuICB9LFxuICBcImljb24tbG9jYXRpb25fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxOVxcXCJcIlxuICB9LFxuICBcImljb24tZ3JvdXBfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxYVxcXCJcIlxuICB9LFxuICBcImljb24tZ3JvdXBfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxYlxcXCJcIlxuICB9LFxuICBcImljb24tcGxheV9mb3J3YXJkX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWtldGFuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxOFxcXCJcIlxuICB9LFxuICBcImljb24tc3Vic2NyaXB0aW9uX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kZWxpdmVyX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGljZV9mb3JiaWRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxZlxcXCJcIlxuICB9LFxuICBcImljb24tcXJfY29kZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyMFxcXCJcIlxuICB9LFxuICBcImljb24tcXFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNoYXQtcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlbnppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZXR0aW5nc19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyMVxcXCJcIlxuICB9LFxuICBcImljb24tam9iXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JtX2Zhdm9yX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODIzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9jb21tZW50X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xem9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0YVxcXCJcIlxuICB9LFxuICBcImljb24tbW9iYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGVhMWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBob25lX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9kb3duX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRfc2V0dGluZ3NfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNoYW5nZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyOFxcXCJcIlxuICB9LFxuICBcImljb24tZ29kb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9saXN0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyYVxcXCJcIlxuICB9LFxuICBcImljb24tY2hhdC1sZWZ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9mcmllbmRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyYlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfY3Jvd25fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyY1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbGlua19maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9saWdodF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9mYXZvcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9tZW51X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xvY2F0aW9uX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3BheV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODMyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9saWtlX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3Blb3BsZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9wYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3JhbmtfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzNlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcmVkcGFja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3NraW5fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzOFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcmVjb3JkX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3RpY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9yZWRwYWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3RleHRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzY1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfdGlja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF90cmFuc2Zlcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdWJ0aXRsZV9ibG9ja19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzZlxcXCJcIlxuICB9LFxuICBcImljb24td2Fybl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0MFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfdHJhbnNmZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpcF9jb2RlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdWJ0aXRsZV91bmJsb2NrX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9zaG9wX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW9wcG9zZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1vcHBvc2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJvb2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlcXVpcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBhc3N3b3JkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saXZpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzX2hvdF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWNrZXRfbW9uZXlfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0OVxcXCJcIlxuICB9LFxuICBcImljb24tZ291cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwM1xcXCJcIlxuICB9LFxuICBcImljb24tcXVhbnpoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0NlxcXCJcIlxuICB9LFxuICBcIl9wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwiX29sXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwiX3VsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwiX2xpXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwiX2FcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCJcbiAgfSxcbiAgXCJkLXVzZXJib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJkLXVzZXJib3gtaGVhZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJkLXVzZXJib3gtbmlja1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImQtdXNlcmJveC1mb2xsb3dzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImQtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMFxuICB9LFxuICBcImQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxOS4ycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIlxuICB9LFxuICBcImQtdG9vbHNcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwiZC1jb250ZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNSxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtYXJrZXQtcHJpY2VcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTI5MjkyXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcInJvdy1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicm93LWJveC1oZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTkuMnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJyb3ctYm94LW1vcmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyXCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTZhM1xcXCJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJwYXlsaXN0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInBheWxpc3QtaXRlbVwiOiB7XG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDhycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ3aWR0aFwiOiAzMSxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDJcbiAgfSxcbiAgXCJwYXlsaXN0LWl0ZW0tYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmNjYwMFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNmNjBcIlxuICB9LFxuICBcImVtcHR5RGF0YVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDhycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDhycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJrc2xpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcImtzbGlzdC1sYWJlbFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE0LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwia3NsaXN0LWl0ZW1cIjoge1xuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI5LjZycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI5LjZycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTkuMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwia3NsaXN0LWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdBRkZcIlxuICB9LFxuICBcImZpeGVkQWRkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjI0MHJweFwiLFxuICAgIFwicmlnaHRcIjogXCI3LjJycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTA4cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDhycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDAsODUsNzUsMC44MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U4XFxcIlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmVcIjogXCJibG9ja1wiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtdG9nZ2xlXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJ0b2dnbGVcIixcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDJcbiAgfSxcbiAgXCJhbmltYXRlZC1oaWRlXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJoaWRlXCJcbiAgfSxcbiAgXCJhbmltYXRlZC1zaG93XCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzaG93XCJcbiAgfSxcbiAgXCJhbmltYXRlZC1zbGlkZUluTGVmdFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVJbkxlZnRcIlxuICB9LFxuICBcImFuaW1hdGVkLXNsaWRlT3V0TGVmdFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVPdXRMZWZ0XCJcbiAgfSxcbiAgXCJhbmltYXRlZC1zbGlkZUluUmlnaHRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5SaWdodFwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtc2xpZGVPdXRSaWdodFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVPdXRSaWdodFwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtcm90YXRlSW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluXCIsXG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwicm90YXRlSW5cIlxuICB9LFxuICBcImFuaW1hdGVkXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uXCI6IDEsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiAxLFxuICAgIFwiV2Via2l0QW5pbWF0aW9uRmlsbE1vZGVcIjogXCJib3RoXCIsXG4gICAgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBcImJvdGhcIlxuICB9LFxuICBcImNvbW1lbnQtaGRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0YyMEMwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIxNnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbS1oZWFkXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0tbmlja1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTQuNHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLXRvb2xzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLWFkZHJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTY5Njk2XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbS10aW1lXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0tY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJjb21tZW50LWZvcm1ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZWVlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1pbnB1dC1idG5cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNzJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNzJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYxXFxcIlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmVcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzguNHJweFwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImxlZnQ6YmVmb3JlXCI6IFwiLTQ4cnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWZvcm1ib3gtZm9ybVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiY29tbWVudC1mb3JtYm94LXRleHRhcmVhXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE5MnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwid2lkdGhcIjogOTAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImNvbW1lbnQtZm9ybWJveC1idG5zXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNvbW1lbnQtZm9ybWJveC1idFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE5MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LWxhYmVsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTkycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC1yZXF1aXJlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2MGRcXFwiXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiNGRjAwMDBcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnQ6YWZ0ZXJcIjogXCItMjRycHhcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiMjguOHJweFwiLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwic2NhbGUoMC41KVwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC10eHRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC10ZXh0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIlxuICB9LFxuICBcImlucHV0LWZsZXgtc2VsZWN0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIixcbiAgICBcIldlYmtpdEFwcGVhcmFuY2VcIjogXCJtZW51bGlzdC1idXR0b25cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC1ub3RlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI3LjJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImlucHV0LWZsZXgtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIi0xMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiekluZGV4XCI6IDJcbiAgfSxcbiAgXCJ0ZXh0YXJlYS1mbGV4XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJ0ZXh0YXJlYS1mbGV4LWxhYmVsXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIlxuICB9LFxuICBcInRleHRhcmVhLWZsZXgtdGV4dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI0ODBycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJyYWRpby1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJyYWRpb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJyYWRpb0xpc3QtaXRlbVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI0My4ycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI3LjJycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYzXFxcIlwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwicmFkaW9MaXN0LWl0ZW0tYWN0aXZlXCI6IHtcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlOmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmU6YmVmb3JlXCI6IFwiNDMuMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlOmJlZm9yZVwiOiBcIjcuMnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWJcXFwiXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjMDAzNEZGXCJcbiAgfSxcbiAgXCJjaGVja2JveC1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjaGVja2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJudW1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCJcbiAgfSxcbiAgXCJudW1ib3gtbWludXNcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwid2lkdGhcIjogXCI3MnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0My4ycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIm51bWJveC1wbHVzXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcIndpZHRoXCI6IFwiNzJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDMuMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJudW1ib3gtbnVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMCxcbiAgICBcImJvcmRlckxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjBycHhcIixcbiAgICBcImJveFNoYWRvd1wiOiBcIm5vbmVcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gIH0sXG4gIFwibnVtYm94LW1pbnVzLXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJudW1ib3gtcGx1cy1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwibnVtYm94LW51bS1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwic3dpdGNoLWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogXCIxNTMuNnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjQuOHJweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0OHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwic3dpdGNoLWxlZnRcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwidmlzaWJpbGl0eVwiOiBcImhpZGRlblwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwidG9wXCI6IFwiLTQuOHJweFwiLFxuICAgIFwibGVmdFwiOiBcIi00LjhycHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiLlxcXCJcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjcycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjMDA3QkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXM6YWZ0ZXJcIjogXCI0OHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjMDA3QkZGXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YWZ0ZXJcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodDphZnRlclwiOiBcIi00LjhycHhcIlxuICB9LFxuICBcInN3aXRjaC1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJ2aXNpYmlsaXR5XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwidG9wXCI6IFwiLTQuOHJweFwiLFxuICAgIFwibGVmdFwiOiBcIi00LjhycHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjcycnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyOmJlZm9yZVwiOiBcIlxcXCIuXFxcIlwiLFxuICAgIFwid2lkdGg6YWZ0ZXI6YmVmb3JlXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodDphZnRlcjpiZWZvcmVcIjogXCI3MnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFmdGVyOmJlZm9yZVwiOiBcIiMwMDdCRkZcIixcbiAgICBcImJvcmRlclJhZGl1czphZnRlcjpiZWZvcmVcIjogXCI0OHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXI6YmVmb3JlXCI6IFwiIzAwN0JGRlwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXI6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDphZnRlcjpiZWZvcmVcIjogXCIwcnB4XCIsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiBcIi00LjhycHhcIlxuICB9LFxuICBcInN3aXRjaC1hY3RpdmVcIjoge1xuICAgIFwidmlzaWJpbGl0eVwiOiBcInZpc2libGVcIlxuICB9LFxuICBcInVwaW1nLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInVwaW1nLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjc2LjhycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcInVwaW1nLWJ0bi1pY29uXCI6IHtcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNTcuNnJweFwiLFxuICAgIFwiZm9udFdlaWdodDpiZWZvcmVcIjogXCIxMDBcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRhXFxcIlwiXG4gIH0sXG4gIFwidXBpbWctbGlzdFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ1cGltZy1pdGVtXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJ1cGltZy1kZWxcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMVwiLFxuICAgIFwicmlnaHRcIjogXCIxXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZGlzcGxheTphZnRlclwiOiBcImZsZXhcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZmxleERpcmVjdGlvbjphZnRlclwiOiBcImNvbHVtblwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNDhycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjQ4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0OmFmdGVyXCI6IFwiNDhycHhcIixcbiAgICBcInRleHRBbGlnbjphZnRlclwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yOmFmdGVyXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCIyOC44cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiNGRjAwMDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiNlMGUwZTBcIixcbiAgICBcIm9wYWNpdHk6YWZ0ZXJcIjogMC42XG4gIH0sXG4gIFwidXBpbWctaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIlxuICB9LFxuICBcImctaGQtMVwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJnLWhkLTJcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0LjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE0LjRycHhcIlxuICB9LFxuICBcImctaGQtM1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImctc2VhcmNoLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJnLXNlYXJjaC1pbnB1dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJib3JkZXJcIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJnLXNlYXJjaC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI5NnJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjQzLjJycHhcIlxuICB9LFxuICBcImctb3JkZXJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWNcXFwiXCIsXG4gICAgXCJsaW5lSGVpZ2h0OmJlZm9yZVwiOiAxLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNzliXFxcIlwiLFxuICAgIFwibGluZUhlaWdodDphZnRlclwiOiAxLFxuICAgIFwibWFyZ2luVG9wOmFmdGVyXCI6IFwiLTE2LjhycHhcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2RkZGRkZFwiXG4gIH0sXG4gIFwiZy1vcmRlci11cFwiOiB7XG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmY2NjAwXCJcbiAgfSxcbiAgXCJnLW9yZGVyLWRvd25cIjoge1xuICAgIFwiY29sb3I6YmVmb3JlOmFmdGVyXCI6IFwiI2ZmNjYwMFwiXG4gIH0sXG4gIFwiZy1vcmRlci1hY3RpdmVcIjoge1xuICAgIFwiY29sb3I6YmVmb3JlOmFmdGVyXCI6IFwiI2ZmNjYwMFwiXG4gIH0sXG4gIFwicm93LWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyXCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTZhM1xcXCJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwicm93LWl0ZW0tdGV4dFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJjdXJzb3JcIjogXCJpbml0aWFsXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcInJvdy1pdGVtLWljb25cIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI3LjJycHhcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDMuMnJweFwiXG4gIH0sXG4gIFwicm93LWl0ZW0tdGl0bGVcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJmbGV4bGlzdC1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiZmxleGxpc3QtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcImZsZXhsaXN0LXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZmxleGxpc3Qta3NcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiLTcuMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmY2NjAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwiZmxleGxpc3QtZGVzY1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImZsZXhsaXN0LXJvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm10bGlzdC1pdGVtLWJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tcGRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LWltZ2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm10bGlzdC1pbWdcIjoge1xuICAgIFwibWF4V2lkdGhcIjogMTAwXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tbW9uZXlcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tbW9uZXktZmxleFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNlZDZkNTNcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tbW9uZXlfbW9uZXlcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tbW9uZXlfbnVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtZGVzY1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcInNnbGlzdC1pdGVtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJzZ2xpc3QtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwic2dsaXN0LXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwic2dsaXN0LWltZ2xpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwic2dsaXN0LWltZ2xpc3QtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtZGVzY1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcInNnbGlzdC11c2VyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcInNnbGlzdC1uaWNrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtdWhlYWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcIndpZHRoXCI6IFwiOTZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInNnbGlzdC1mdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTQuNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTQuNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE0LjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTQuNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtZnQtbG92ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmVcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjkuNnJweFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjlcXFwiXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjFweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzZ2xpc3QtZnQtY21cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZTpiZWZvcmVcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZTpiZWZvcmVcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZTpiZWZvcmVcIjogXCI5LjZycHhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2N1xcXCJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiMXB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInNnbGlzdC1mdC12aWV3XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmU6YmVmb3JlOmJlZm9yZVwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlOmJlZm9yZTpiZWZvcmVcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZTpiZWZvcmU6YmVmb3JlXCI6IFwiOS42cnB4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmU6YmVmb3JlOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE5XFxcIlwiXG4gIH0sXG4gIFwiZmxleC10YWJsZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTkuMnJweFwiXG4gIH0sXG4gIFwiZmxleC10YWJsZS1sYWJlbFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwibWluV2lkdGhcIjogXCIxOTJycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJmbGV4LXRhYmxlLWJveFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNC44cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwibG9hZE1vcmVcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJtLW5hdlBpY1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcIm0tbmF2UGljLWl0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogMjUsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzNnJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwibS1uYXZQaWMtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDFcbiAgfSxcbiAgXCJtLW5hdlBpYy1pY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjcycnB4XCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZWQ2ZDUzXCJcbiAgfSxcbiAgXCJtLW5hdlBpYy10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiXG4gIH0sXG4gIFwiYWxlcnQtbWFza1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuMixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiekluZGV4XCI6IDk5OFxuICB9LFxuICBcImNvbmZpcm0tZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJhbGVydC1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwiekluZGV4XCI6IDk5OVxuICB9LFxuICBcImFsZXJ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiA1MCxcbiAgICBcIndpZHRoXCI6IFwiNjI0cnB4XCIsXG4gICAgXCJsZWZ0XCI6IDUwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIi0zMTJycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi0yNDBycHhcIixcbiAgICBcInpJbmRleFwiOiA5OTk5LFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDhycHhcIlxuICB9LFxuICBcImFsZXJ0LWJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImFsZXJ0LWFjdGl2ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiYWxlcnQtaGVhZGVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJhbGVydC1tc2dcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwiYWxlcnQtY2xvc2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwidG9wXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImFsZXJ0LWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJhbGVydC1mdC1idG5cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDdhZmZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYWxlcnQtZnQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdhZmZcIlxuICB9LFxuICBcImFsZXJ0LWZ0LWZhaWxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJ0b2FzdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIyNDBycHhcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInpJbmRleFwiOiA5OTk5LFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQ4MHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxRTFFMUVcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJ0b2FzdC1hY3RpdmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcInRvYXN0LXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI3QUU2MFwiXG4gIH0sXG4gIFwidG9hc3QtZXJyb3JcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0MwMzkyQlwiXG4gIH0sXG4gIFwidG9hc3QtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjFDNDBGXCJcbiAgfSxcbiAgXCJtb2RhbC1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwibW9kYWwtbWFza1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuMixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiekluZGV4XCI6IDk5OFxuICB9LFxuICBcIm1vZGFsXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCIxMnJweFwiLFxuICAgIFwicmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwidG9wXCI6IDUwLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTQ1NnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ4cnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5XG4gIH0sXG4gIFwibW9kYWwtaGVhZGVyXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzZycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMjBycHhcIlxuICB9LFxuICBcIm1vZGFsLXRpdGxlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwibW9kYWwtY2xvc2VcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEyMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTIwcnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwibW9kYWwtYm9keVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzZycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNnJweFwiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiNzY4cnB4XCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJhdXRvXCJcbiAgfSxcbiAgXCJoZWFkZXItcm93XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwNS42cnB4XCIsXG4gICAgXCJjbGVhclwiOiBcImJvdGhcIixcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCJoZWFkZXItcm93LXNob3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTA1LjZycHhcIixcbiAgICBcImNsZWFyXCI6IFwiYm90aFwiXG4gIH0sXG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjdmN2Y3XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTYuOHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2LjhycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInpJbmRleFwiOiA5OTgsXG4gICAgXCJib3hTaGFkb3dcIjogXCIwIDFweCAxNC40cnB4ICNjY2NcIixcbiAgICBcImhlaWdodFwiOiBcIjEwNS42cnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItc2hvd1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y3ZjdmN1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2LjhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNi44cnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk4LFxuICAgIFwiYm94U2hhZG93XCI6IFwiMCAxcHggMTQuNHJweCAjY2NjXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDUuNnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWxvZ29cIjoge1xuICAgIFwid2lkdGhcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLXNlYXJjaC1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImhlYWRlci1zZWFyY2gtaWNvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInRvcFwiOiBcIjBycHhcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwid2lkdGhcIjogXCI0OHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcImhlYWRlci1zZWFyY2hcIjoge1xuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiODEuNnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjgxLjZycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogMCxcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjYyLjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmFmYWZhXCJcbiAgfSxcbiAgXCJoZWFkZXItc2VhcmNoLWJ0blwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MS42cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODEuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0LjhycHhcIixcbiAgICBcImJvcmRlclwiOiAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDAsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjguOHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjguOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2UwZTBlMFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJoZWFkZXItYmFja1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY3OVxcXCJcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0OmFmdGVyXCI6IFwiNzJycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50OmFmdGVyXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXJcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWJhY2stZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInRvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjk2cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDhycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NzlcXFwiXCJcbiAgfSxcbiAgXCJoZWFkZXItdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNzJycHhcIlxuICB9LFxuICBcImhlYWRlci1yaWdodFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLXJpZ2h0LWJ0blwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5Njk2OTZcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2Mi40cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzk2OTY5NlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcImhlYWRlci1maXh0b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5MFxuICB9LFxuICBcImhlYWRlci1maXh0b3AtaWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI0My4ycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCIyNHJweFwiLFxuICAgIFwiaGVpZ2h0OmJlZm9yZVwiOiBcIjEwNS42cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0OmJlZm9yZVwiOiBcIjEwNS42cnB4XCJcbiAgfSxcbiAgXCJmb290ZXItcm93XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEyMHJweFwiXG4gIH0sXG4gIFwiZm9vdGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInpJbmRleFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmFmYWZhXCIsXG4gICAgXCJib3JkZXJUb3BcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZm9vdGVyLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5MjkyOTJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi44cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuOHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNCxcbiAgICBcImhlaWdodFwiOiBcIjEyMHJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJmb250U3R5bGU6YmVmb3JlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nOmJlZm9yZVwiOiBcImFudGlhbGlhc2VkXCIsXG4gICAgXCJNb3pPc3hGb250U21vb3RoaW5nOmJlZm9yZVwiOiBcImdyYXlzY2FsZVwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiIzkyOTI5MlwiLFxuICAgIFwibGluZUhlaWdodDpiZWZvcmVcIjogMSxcbiAgICBcIm1hcmdpbkJvdHRvbTpiZWZvcmVcIjogXCIxXCJcbiAgfSxcbiAgXCJmb290ZXItaXRlbS1udW1cIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTI5MjkyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjcuMnJweFwiLFxuICAgIFwidG9wXCI6IFwiOS42cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwid2lkdGhcIjogXCIzOC40cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzOC40cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJmb290ZXItYWRkXCI6IHtcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTZkYVxcXCJcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiNDMuMnJweFwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwid2lkdGg6YWZ0ZXJcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0OmFmdGVyXCI6IFwiODYuNHJweFwiLFxuICAgIFwidG9wOmFmdGVyXCI6IFwiLTM4LjRycHhcIixcbiAgICBcImxlZnQ6YWZ0ZXJcIjogNTAsXG4gICAgXCJtYXJnaW5MZWZ0OmFmdGVyXCI6IFwiLTQzLjJycHhcIixcbiAgICBcInpJbmRleDphZnRlclwiOiA5OSxcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiNkM2QzZDNcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzOmFmdGVyXCI6IDUwLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiYVxcXCJcIixcbiAgICBcInZpc2liaWxpdHk6YmVmb3JlXCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJmb290ZXItYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiZm9vdGVyQm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInpJbmRleFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmFmYWZhXCIsXG4gICAgXCJib3JkZXJUb3BcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZm9vdGVyRml4XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInpJbmRleFwiOiAxMDBcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlci1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwidGFicy1ib3JkZXItaXRlbS1pbm5lclwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlci1hY3RpdmVcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNmNjBcIlxuICB9LFxuICBcInRhYnMtYm9yZGVyLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidGFicy1ib3JkZXItYm94LWFjdGl2ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwidGFicy10b2dnbGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwidGFicy10b2dnbGUtaGRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2YwZjBmMFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjYxXFxcIlwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjMzLjZycHhcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0OmFmdGVyXCI6IFwiMVwiXG4gIH0sXG4gIFwidGFicy10b2dnbGUtaGQtYWN0aXZlXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2ZhZmFmYVwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTZkZVxcXCJcIlxuICB9LFxuICBcInRhYnMtdG9nZ2xlLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJ0YWJzLXRvZ2dsZS1hY3RpdmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1zZWN0aW9uXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA4OENDXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjM2cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzZycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWxhYmVsXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjcuMnJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LXQzdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwid2lkdGhcIjogMCxcbiAgICBcImhlaWdodFwiOiAwLFxuICAgIFwiYm9yZGVyTGVmdFwiOiBcIjkuNnJweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCI5LjZycHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjE0LjRycHggc29saWQgIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI3LjJycHhcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtdDNkb3duXCI6IHtcbiAgICBcIndpZHRoXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImJvcmRlckxlZnRcIjogXCI5LjZycHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiOS42cnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgXCJib3JkZXJUb3BcIjogXCIxNC40cnB4IHNvbGlkICMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzOC40cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2NjY1wiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBcImJvcmRlckxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjEyMHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5XG4gIH0sXG4gIFwidGFiLXNlbGVjdC1jYXRib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94LWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogMC45LFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI3LjJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjY2NjXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDFcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOWY5ZjlcIixcbiAgICBcImZsb2F0XCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZsb2F0XCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gtcGRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gxaXRlbVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDFpdGVtLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxQUI5QUNcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94Mml0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDJpdGVtLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyMzlFRjdcIlxuICB9LFxuICBcInRhYi1zZWxlY3Qtc2hvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICB9LFxuICBcInJhdHktZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInJhdHktbGFiZWxcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicmF0eS1yb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAuOHJweFwiXG4gIH0sXG4gIFwicmF0eS1pdGVtXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInJhdHktbm9cIjoge1xuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCI0MC44cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MC44cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCd0FBQUFiQ0FZQUFBQnZDTzhzQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFkQkpSRUZVU0ltOTFydHJGRkVVd09GdmsxVko4RVdLL0FHQ1FRVWZHQlVDaXZoRU42NnBmS0dOVlN4RWJOUFkyRmhZMm1pVlJodHRMQ3hNb2JBZ2FDRllwRkFzUkF1MXNmQ0JEOFJIY1dkeE1zek03dHgxYzVxWmM4NDk4K09lT2VmY1cydTFXaUxrTUI3Z1I5WEFnUmdhenVCUVRHQTlJbVl3Z2RWd3QycHd6QTUzWWdSTkRDOEdzSms4bDZPeEdNREoxUHZKZmdQWFlsMUtiMkJGUDRGSE0vcVFmeW51QzNBeXgxWXByVldBcTRRS3pjcEJyTzcySTNWTVlTSmxHOFRLSEgwVVMzSytzUXhQOERsNUg4N0V0V1VwcHV1WXd6NmNGNW81UnNZNitKL2pHT1lIOEEwWGhPbnhMaEpZSmpleEhmTXMvSWR6MklnNy93bjBIZFBDM1AzU05tYUw1b093OWJQNDFBUHNwVkFYTjdLT29pcWR4Ulk4aW9EZHhqWTh5M09XdGNVcjdNYlZDckJaSEZlU25VNTkrRXRJYzdleXZ0T0NiaHIvU0FYZ0RxenBCVGhxNFZEb0pEVWhwZEhBUnNHYXQ3aGZFSE9xRitCVWp1MGh4b1dMMURsOHpmZzNZVU1NY0FqN1Uvb2ZYTVlCdkUvMDY5aUtwNW5ZRXpIQXZjSTFnbENwVFZ3U0tqY3RMNFQvZkFXL0UxdmhrVlVHYkIrMmo0VmQzQ3RaK3hNejJJUFh3akFmcndLc0NlMXdUV2orTnlXd3RMU3dHYmNVcExYb1hqcUdpOEtZcWlvZmNScTc4cHgvQVM0RVJVVjhPK1hEQUFBQUFFbEZUa1N1UW1DQylcIlxuICB9LFxuICBcInJhdHkteWVzXCI6IHtcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiNDAuOHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAuOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYkNBWUFBQUJ2Q084c0FBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBeDFKUkVGVVNJbTFsVTlJRkZFY3gzOXZadmJ0ek95WXJxMnNvcnNpSVpGUVVpRmFtVmxVbEJWa1JKbXBvS2N1ZFlnT1dRUUYwYWxMWGJvRUMxcUVseEtDOEZTaVVWRVFJZjNERW5OM2RWdGQzZEp0M0oxNTgxNkhzTngxMUoyTi9aM21mWCsvNysvekh2UCtJUFlRTEVkSWJMeWljM20zdktwdjFxcFhzSTREa0l5eERnQW1BY0FscTE3T3FzRXZ0Mk9GZkNtVkRIK3pWVzlHUUlITm5oSFlITW9oSDcxK3VkMlZkYURkQ0xjQ0FQQXNqakNkdnBoMW9NTVkzYlR3TFJuK3Bxd0NnMUx6UHRFWXh3dmpIUEtwT0NDM0ZtVU5pT25rMlNRelM0Q05SaTluRFNnYmdkcWwydGp4ckFBRGNwdkhRVWFjcWJwQ1Byc0RjbHRwdW4zUXhKT2pOekNkMmYxUFlqd0h1cEkwWnByTXMxK0tRb2J6ekpyRStTS05na2dRNkJ6SGRCNEFBQUZGSEp2bi80S0FvQ243M2p1Q3pqbHYydWxrUTc3MnNoS0FwVHZScEJDTkVBWUF2RncremhkckVWeDdzbVMrcHhjdDNLVVRZbU9uUyt1L2ptblU4bEZaS1g3WXRuNmJzMVhVZU5UdU1BQUFXbng1KytXMjhseDk2R211L3E3a2YwRVVZWmpDZSs2NUUzMnRpM1ZrOWxxRXhVTjNYWWxuSFR4VFVTYXdPRitrVCtPNjF1TDVucDdVbkNrUUFDQW9uYTV6NnE4Zk84aVhOVlpnUDIyYmc3TzJqVFVldFd2Y0xMOHNFT0RQeStBZ1g1K3YxUWFyMG9GRmJWVmZuZnFiOHBWcVZ0d2dYdFduVVdTZlNRY0dBSURaZE9GcU5hdnVTTmtZMjVZdTBFRkdsYUIwYWxmR3dJRFVVdUVnSXhiK0lRTTduZXJNR0loWjlEd0FYYUpybk5PWUV5b2laaDZGREdlK1F0RUlOS1JxTVdGOU5Dd2UzaExGMWU2dy9jQjlpc1NrdkdUNHhhRFVkTVF5MEMrMzV5dGtlTkVtUUJDeDF3L080TzJGSHJWN3lLdjZxRHZSMXpJaE5oNVUrVEkxYWFJMGZNRXkwRVovbk9OWkhBRUFFTFNHaGNTajExeUovanF2NnRNVzE1WE1QK2lMMk9zTElyanUxVUk3aFh5dXNRd1VhZWdFQU1BdllWM3N1M2g0ZTFIODBkWGxhcjJxVDNWcEE5c21wR1BuTks2QWlFWUlqMHNuVzh4cVRRKytYMjduQ3VPOVdrelk4Q0Vtck4vaFZYMng1V0NwRVpEYlBEbjYrd0VET1NiWGFvUFZxWG5URlhJc3ZuOEc3N3lkcjcyb3RBSURBUENvWFlFOC9XMVpnbmQzbWVWL0F4OUJNTEpIanM5cEFBQUFBRWxGVGtTdVFtQ0MpXCJcbiAgfSxcbiAgXCJyYXR5LXllcy1oYWxmXCI6IHtcbiAgICBcImJhY2tncm91bmRTaXplOmJlZm9yZVwiOiAxMDAsXG4gICAgXCJ3aWR0aDpiZWZvcmVcIjogXCI0MC44cnB4XCIsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiNDAuOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdDpiZWZvcmVcIjogXCJuby1yZXBlYXRcIixcbiAgICBcImN1cnNvcjpiZWZvcmVcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE5LjJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwLjhycHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2U6YmVmb3JlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYkNBWUFBQUJ2Q084c0FBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBeDFKUkVGVVNJbTFsVTlJRkZFY3gzOXZadmJ0ek95WXJxMnNvcnNpSVpGUVVpRmFtVmxVbEJWa1JKbXBvS2N1ZFlnT1dRUUYwYWxMWGJvRUMxcUVseEtDOEZTaVVWRVFJZjNERW5OM2RWdGQzZEp0M0oxNTgxNkhzTngxMUoyTi9aM21mWCsvNysvekh2UCtJUFlRTEVkSWJMeWljM20zdktwdjFxcFhzSTREa0l5eERnQW1BY0FscTE3T3FzRXZ0Mk9GZkNtVkRIK3pWVzlHUUlITm5oSFlITW9oSDcxK3VkMlZkYURkQ0xjQ0FQQXNqakNkdnBoMW9NTVkzYlR3TFJuK3Bxd0NnMUx6UHRFWXh3dmpIUEtwT0NDM0ZtVU5pT25rMlNRelM0Q05SaTluRFNnYmdkcWwydGp4ckFBRGNwdkhRVWFjcWJwQ1Byc0RjbHRwdW4zUXhKT2pOekNkMmYxUFlqd0h1cEkwWnByTXMxK0tRb2J6ekpyRStTS05na2dRNkJ6SGRCNEFBQUZGSEp2bi80S0FvQ243M2p1Q3pqbHYydWxrUTc3MnNoS0FwVHZScEJDTkVBWUF2RncremhkckVWeDdzbVMrcHhjdDNLVVRZbU9uUyt1L2ptblU4bEZaS1g3WXRuNmJzMVhVZU5UdU1BQUFXbng1KytXMjhseDk2R211L3E3a2YwRVVZWmpDZSs2NUUzMnRpM1ZrOWxxRXhVTjNYWWxuSFR4VFVTYXdPRitrVCtPNjF1TDVucDdVbkNrUUFDQW9uYTV6NnE4Zk84aVhOVlpnUDIyYmc3TzJqVFVldFd2Y0xMOHNFT0RQeStBZ1g1K3YxUWFyMG9GRmJWVmZuZnFiOHBWcVZ0d2dYdFduVVdTZlNRY0dBSURaZE9GcU5hdnVTTmtZMjVZdTBFRkdsYUIwYWxmR3dJRFVVdUVnSXhiK0lRTTduZXJNR0loWjlEd0FYYUpybk5PWUV5b2laaDZGREdlK1F0RUlOS1JxTVdGOU5Dd2UzaExGMWU2dy9jQjlpc1NrdkdUNHhhRFVkTVF5MEMrMzV5dGtlTkVtUUJDeDF3L080TzJGSHJWN3lLdjZxRHZSMXpJaE5oNVUrVEkxYWFJMGZNRXkwRVovbk9OWkhBRUFFTFNHaGNTajExeUovanF2NnRNVzE1WE1QK2lMMk9zTElyanUxVUk3aFh5dXNRd1VhZWdFQU1BdllWM3N1M2g0ZTFIODBkWGxhcjJxVDNWcEE5c21wR1BuTks2QWlFWUlqMHNuVzh4cVRRKytYMjduQ3VPOVdrelk4Q0Vtck4vaFZYMng1V0NwRVpEYlBEbjYrd0VET1NiWGFvUFZxWG5URlhJc3ZuOEc3N3lkcjcyb3RBSURBUENvWFlFOC9XMVpnbmQzbWVWL0F4OUJNTEpIanM5cEFBQUFBRWxGVGtTdVFtQ0MpXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCIuXFxcIlwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmVcIjogXCJibG9ja1wiXG4gIH0sXG4gIFwiYnRuXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMVxuICB9LFxuICBcImJ0bi1zbWFsbFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjguOHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjguOHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnRuLW1pbmlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjkuNnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiOS42cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiOS42cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjkuNnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJidG4taWNvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmVcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImJ0bi1yb3ctc3VibWl0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0OHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjguOHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI4LjhycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE0LjRycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogOTZcbiAgfSxcbiAgXCJidG4tZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG4tcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYnRuLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYnRuLXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJ0bi1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyMTI1MjlcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYnRuLWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYnRuLWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJidG4tZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYnRuLWRpc2FibGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZWVlZVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMwMDdiZmZcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjNmM3NTdkXCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzI4YTc0NVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMyOGE3NDVcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMTdhMmI4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzE3YTJiOFwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZmZjMTA3XCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZGMzNTQ1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RjMzU0NVwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMzQzYTQwXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclwiOiAwXG4gIH0sXG4gIFwiYnRuLXJvdW5kXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjY2MDBcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjU3LjZycHhcIlxuICB9LFxuICBcImJ0bi1sb3ZlXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNhYWFcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjlcXFwiXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI3LjJycHhcIlxuICB9LFxuICBcImJ0bi1sb3ZlLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjMzMDBcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZjMzMDBcIlxuICB9LFxuICBcImJ0bi1mYXZcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjYWFhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0Y1xcXCJcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwiYnRuLWZhdi1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmYzMzAwXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmYzMzAwXCJcbiAgfSxcbiAgXCJidG4tZmF2LXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjYyLjRycHhcIlxuICB9LFxuICBcImJ0bi1sb3ZlLXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjYyLjRycHhcIlxuICB9LFxuICBcImJ0bi1zaGFyZVwiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMDBCQ0Q0XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMEJDRDRcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VkXFxcIlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJidG4tY29tbWVudFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNhYWFcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VlXFxcIlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJidG4tY29tbWVudC1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmYzMzAwXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmYzMzAwXCJcbiAgfSxcbiAgXCJidG4tY29tbWVudC1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2Mi40cnB4XCJcbiAgfSxcbiAgXCJidG4tYnV5XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODYuNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnRuLWJ1eS1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzAwN2JmZlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwicG9pbnRlclwiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJub25lXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCJ5ZXNcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheTphZnRlclwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzE1YWJhNVwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY0NVxcXCJcIlxuICB9LFxuICBcIm5vXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXI6YWZ0ZXJcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXI6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXI6YWZ0ZXJcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlcjphZnRlclwiOiBcIiMxNWFiYTVcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NDZcXFwiXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcImZsZXhcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtY29sXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJmbGV4LTFcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiZmxleC1haS1zdHJldGNoXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCJcbiAgfSxcbiAgXCJmbGV4LWFpLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJmbGV4LWFpLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImZsZXgtYWktY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtamMtc3RhcnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJmbGV4LWpjLWVuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJmbGV4LWpjLWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC1qYy1iZXR0d2VuXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiZmxleC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZnJcIjoge1xuICAgIFwiZmxvYXRcIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiZmxcIjoge1xuICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJjbGVhcmZpeFwiOiB7XG4gICAgXCJjbGVhclwiOiBcImJvdGhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJ0ZXh0LXJpZ2h0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJ0ZXh0LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRleHQtbGVmdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJwb3MtZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwicG9zLWFic1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJcbiAgfSxcbiAgXCJwb3MtcmVsYXRpdmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwid2gtMzBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIlxuICB9LFxuICBcIndoLTQwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOTZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCJcbiAgfSxcbiAgXCJ3aC02MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCJcbiAgfSxcbiAgXCJ3aC0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjI0MHJweFwiXG4gIH0sXG4gIFwid2gtMTUwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzYwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNjBycHhcIlxuICB9LFxuICBcIndoLTIwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDgwcnB4XCJcbiAgfSxcbiAgXCJ3bWF4XCI6IHtcbiAgICBcIm1heFdpZHRoXCI6IDEwMFxuICB9LFxuICBcInc2MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiXG4gIH0sXG4gIFwidzEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiXG4gIH0sXG4gIFwidzE1MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM2MHJweFwiXG4gIH0sXG4gIFwiaDMwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJoNjBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCJcbiAgfSxcbiAgXCJoMTAwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjI0MHJweFwiXG4gIH0sXG4gIFwiaDE2MFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzODRycHhcIlxuICB9LFxuICBcImgyMDBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNDgwcnB4XCJcbiAgfSxcbiAgXCJmMzZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI4Ni40cnB4XCJcbiAgfSxcbiAgXCJmMjhcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2Ny4ycnB4XCJcbiAgfSxcbiAgXCJmMjJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI1Mi44cnB4XCJcbiAgfSxcbiAgXCJmMjBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwiZjE4XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDMuMnJweFwiXG4gIH0sXG4gIFwiZjE2XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwiZjE0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwiZjEyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiXG4gIH0sXG4gIFwiZnctNjAwXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcImNsMVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIlxuICB9LFxuICBcImNsMlwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImNsM1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5Njk2OTZcIlxuICB9LFxuICBcImNsLWYzMFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjMzMDBcIlxuICB9LFxuICBcImNsLXJlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjMTI3MjVcIlxuICB9LFxuICBcImNsLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJjbC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJjbC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiY2wtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiY2wtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImNsLWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJjbC1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImNsLWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJjbC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImNsLXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiY2wtbW9uZXlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkY2NjAwXCJcbiAgfSxcbiAgXCJjbC1udW1cIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmY3NzAwXCJcbiAgfSxcbiAgXCJiZy1lZlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWZlZmVmXCJcbiAgfSxcbiAgXCJiZy1mZmZcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZjMwXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjMzMDBcIlxuICB9LFxuICBcImJnLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYmctc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYmctaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJiZy1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZy1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJnLXJveWFsXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4YTZkZTlcIlxuICB9LFxuICBcImJnLWRpc2FibGVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGQkZCRkJcIlxuICB9LFxuICBcInBkLTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJwZGwtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJwZHItNVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicGR0LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJwZGItNVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcInBkLTEwXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicGRsLTEwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInBkci0xMFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicGR0LTEwXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicGRiLTEwXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicGRiLTMwXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI3MnJweFwiXG4gIH0sXG4gIFwicGR0LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIlxuICB9LFxuICBcIm1nLTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1nYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtZ3QtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWdsLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtZ3ItNVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtZy0xMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWdiLTEwXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtZ3QtMTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1nbC0xMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1nci0xMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtZ3ItMjBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwibWdiLTIwXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJtZ2wtMjBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJtZ3QtMjBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDhycHhcIlxuICB9LFxuICBcIm1nYi0wXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBycHhcIlxuICB9LFxuICBcImJkLW1wLTVcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImJkLW1wLTEwXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJiZC1tcC0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJiZFwiOiB7XG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RlZTJlNlwiXG4gIH0sXG4gIFwiYmR0XCI6IHtcbiAgICBcImJvcmRlclRvcFwiOiBcIjFweCBzb2xpZCAjZGVlMmU2XCJcbiAgfSxcbiAgXCJiZHJcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIxcHggc29saWQgI2RlZTJlNlwiXG4gIH0sXG4gIFwiYmRiXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZGVlMmU2XCJcbiAgfSxcbiAgXCJiZGxcIjoge1xuICAgIFwiYm9yZGVyTGVmdFwiOiBcIjFweCBzb2xpZCAjZGVlMmU2XCJcbiAgfSxcbiAgXCJiZC0wXCI6IHtcbiAgICBcImJvcmRlclwiOiAwXG4gIH0sXG4gIFwiYmR0LTBcIjoge1xuICAgIFwiYm9yZGVyVG9wXCI6IDBcbiAgfSxcbiAgXCJiZHItMFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFwiOiAwXG4gIH0sXG4gIFwiYmRiLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJiZGwtMFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0XCI6IDBcbiAgfSxcbiAgXCJiZC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYmQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmQtc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJkLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJiZC13YXJuaW5nXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYmQtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYmQtbGlnaHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZC1kYXJrXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYmQtd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZC1yYWRpdXMtNVwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYmQtcmFkaXVzLTEwXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJiZC1yYWRpdXMtMjBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDhycHhcIlxuICB9LFxuICBcImJkLXJhZGl1cy01MFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJmaXhGb290XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcImZpeEZvb3Qtcm93XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwXCJcbiAgfSxcbiAgXCJjaGF0Ym94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwiY2hhdGJveC1uaWNrLWFcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJjaGF0Ym94LW5pY2stYlwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiXG4gIH0sXG4gIFwiY2hhdGJveC1kZXNjLWFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiNlZmVmZWZcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2MDFcXFwiXCIsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IFwiLTZcIixcbiAgICBcInRvcDphZnRlclwiOiBcIjNcIlxuICB9LFxuICBcImNoYXRib3gtZGVzYy1iXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXI6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXI6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiY29sb3I6YWZ0ZXI6YWZ0ZXJcIjogXCIjZWZlZmVmXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjM1XFxcIlwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogXCItNlwiLFxuICAgIFwidG9wOmFmdGVyXCI6IFwiMTBcIlxuICB9LFxuICBcImltZ0xpc3RcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiBcIjBcIixcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxuICAgIFwidG9wXCI6IFwiNDRcIixcbiAgICBcImJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJpbWdMaXN0LWl0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogMzMuMzMsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcImltZ0xpc3QtaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MFxuICB9LFxuICBcImltRW1vXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIjBcIlxuICB9LFxuICBcImltRW1vLTFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0zMFwiXG4gIH0sXG4gIFwiaW1FbW8tMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTYwXCJcbiAgfSxcbiAgXCJpbUVtby0zXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItOTBcIlxuICB9LFxuICBcImltRW1vLTRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMjBcIlxuICB9LFxuICBcImltRW1vLTVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xNTBcIlxuICB9LFxuICBcImltRW1vLTZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xODBcIlxuICB9LFxuICBcImltRW1vLTdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0yMTBcIlxuICB9LFxuICBcImltRW1vLThcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0yNDBcIlxuICB9LFxuICBcImltRW1vLTlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0yNzBcIlxuICB9LFxuICBcImltRW1vLTEwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMzAwXCJcbiAgfSxcbiAgXCJpbUVtby0xMVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTMzMFwiXG4gIH0sXG4gIFwiaW1FbW8tMTJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0zNjBcIlxuICB9LFxuICBcImltRW1vLTEzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMzkwXCJcbiAgfSxcbiAgXCJpbUVtby0xNFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTQyMFwiXG4gIH0sXG4gIFwiaW1FbW8tMTVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi00NTBcIlxuICB9LFxuICBcImltRW1vLTE2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNDgwXCJcbiAgfSxcbiAgXCJpbUVtby0xN1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTUxMFwiXG4gIH0sXG4gIFwiaW1FbW8tMThcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi01NDBcIlxuICB9LFxuICBcImltRW1vLTE5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNTcwXCJcbiAgfSxcbiAgXCJpbUVtby0yMFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTYwMFwiXG4gIH0sXG4gIFwiaW1FbW8tMjFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi02MzBcIlxuICB9LFxuICBcImltRW1vLTIyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNjYwXCJcbiAgfSxcbiAgXCJpbUVtby0yM1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTY5MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi03MjBcIlxuICB9LFxuICBcImltRW1vLTI1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNzUwXCJcbiAgfSxcbiAgXCJpbUVtby0yNlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTc4MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi04MTBcIlxuICB9LFxuICBcImltRW1vLTI4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItODQwXCJcbiAgfSxcbiAgXCJpbUVtby0yOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTg3MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi05MDBcIlxuICB9LFxuICBcImltRW1vLTMxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItOTMwXCJcbiAgfSxcbiAgXCJpbUVtby0zMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTk2MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi05OTBcIlxuICB9LFxuICBcImltRW1vLTM0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTAyMFwiXG4gIH0sXG4gIFwiaW1FbW8tMzVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMDUwXCJcbiAgfSxcbiAgXCJpbUVtby0zNlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEwODBcIlxuICB9LFxuICBcImltRW1vLTM3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTExMFwiXG4gIH0sXG4gIFwiaW1FbW8tMzhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMTQwXCJcbiAgfSxcbiAgXCJpbUVtby0zOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTExNzBcIlxuICB9LFxuICBcImltRW1vLTQwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTIwMFwiXG4gIH0sXG4gIFwiaW1FbW8tNDFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMjMwXCJcbiAgfSxcbiAgXCJpbUVtby00MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEyNjBcIlxuICB9LFxuICBcImltRW1vLTQzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTI5MFwiXG4gIH0sXG4gIFwiaW1FbW8tNDRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMzIwXCJcbiAgfSxcbiAgXCJpbUVtby00NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEzNTBcIlxuICB9LFxuICBcImltRW1vLTQ2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTM4MFwiXG4gIH0sXG4gIFwiaW1FbW8tNDdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xNDEwXCJcbiAgfSxcbiAgXCJpbUVtby00OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby00OVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby01OVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby02OVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby03OVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby04OVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05MlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05NVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby05OFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJlbW9GaXhib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiBcIjVcIixcbiAgICBcInJpZ2h0XCI6IFwiNVwiLFxuICAgIFwiYm90dG9tXCI6IFwiMTAwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwiV2Via2l0Qm9yZGVyUmFkaXVzXCI6IFwiMjBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5XG4gIH0sXG4gIFwidW5pLXRhYmJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktcGlja2VyLXZpZXctd3JhcHBlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVyLWRvdHNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwieXRpY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJcXFwieXRpY29uXFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcImljb24taHVpZnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRpYW56YW4tYXNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pY29uZm9udHNoYW5jaHUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pY29uZm9udHdlaXhpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMVxcXCJcIlxuICB9LFxuICBcImljb24tc2hhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3V5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNlxcXCJcIlxuICB9LFxuICBcImljb24tc2hhbmNodTRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYW94aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxOFxcXCJcIlxuICB9LFxuICBcImljb24tamlhbnRvdXItY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMFxcXCJcIlxuICB9LFxuICBcImljb24tZmVueGlhbmcyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waW5namlhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kYWlmdWt1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBpbmdsdW4tY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9LFxuICBcImljb24tc2hvdWNhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXh1YW56aG9uZzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWljb24tdGVzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwY1xcXCJcIlxuICB9LFxuICBcImljb24tYmlhbmppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16dW9zaGFuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxM1xcXCJcIlxuICB9LFxuICBcImljb24tamlhMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwYVxcXCJcIlxuICB9LFxuICBcImljb24tc291c3VvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcnJvdy1maW5lLXVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saXNoaWppbHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYXR1Ymlhby0tY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwOFxcXCJcIlxuICB9LFxuICBcImljb24tc2hvdWNhbmdfeHVhbnpob25nemh1YW5ndGFpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qaWExXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYW5nemh1MVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzZFxcXCJcIlxuICB9LFxuICBcImljb24tYXJyb3ctbGVmdC1ib3R0b21cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFycm93LXJpZ2h0LWJvdHRvbVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwM1xcXCJcIlxuICB9LFxuICBcImljb24tYXJyb3ctbGVmdC10b3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWljb24tLVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0NFxcXCJcIlxuICB9LFxuICBcImljb24tenVvamlhbnRvdS11cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNVxcXCJcIlxuICB9LFxuICBcImljb24teGlhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi0tamlhbmhhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwYlxcXCJcIlxuICB9LFxuICBcImljb24tR3JvdXAtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi15b3VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXR1aWppYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhbmd6aHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoZXpoaTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWlMaW5rYXBwLVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1NFxcXCJcIlxuICB9LFxuICBcImljb24tc2FvbWlhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIlxuICB9LFxuICBcImljb24tc2hlemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG91aG91dHVpa3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzMVxcXCJcIlxuICB9LFxuICBcImljb24tZ291d3VjaGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRpemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aW5neGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwYlxcXCJcIlxuICB9LFxuICBcImljb24tenVhbnNoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxNVxcXCJcIlxuICB9LFxuICBcImljb24tenVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG91Y2FuZzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXlpc2hvdWh1b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxYVxcXCJcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9udnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjUzYTg1ZmYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOTY1YmQ5MDBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9udnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjUzYTg1ZmYmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNvbnRlbnRcIl0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2UtaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uc3RhdHVzQmFySGVpZ2h0IH0gfSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlLWhlYWRlci13cmFwcGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZS1oZWFkZXItbGVmdFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibG9nb1wiLCBcInl0aWNvblwiXSB9LCBbX3ZtLl92KFwi7piVXCIpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2UtaGVhZGVyLWNlbnRlclwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoLWlucHV0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIui+k+WFpeWFs+mUruWtl+aQnOe0olwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2UtaGVhZGVyLXJpZ2h0XCJdIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvbnRyaWJ1dGUtaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUMyMGxFUVZSb1ErMVk3VkVWUVJEc2prQXpVQ05RSWdBalVDTlFJaEFqRUNOUUloQWpRQ0lRTXNBSXhBd2dncmFhMnFYTzQzYnZkdStMZW5WYnhRL3E3ZTVOei9UTTlDeXhJNHM3Z2dNYmtNY1d5UzBpVzBSbThzQkdyWmtjVzMzdHFJaEllZzdnSTRCWEhSWmNBVGdoZVYxdFhjSEJhaUNTYlB3dkFFOHozN3NCOEpxa1FjMjZxb0JJc3ZGL0FvaGJBRjJHR3VnVEFJN0lIa21EbW0wVkF3a2dISWxJcDNja2Y3WXREQkc3Q0dDdVNPN05oZ0lvbHlpU3ZnUDRFSXo2UlBKYnlrQkozdWY5WHFja0QrY0NrNDJJSkNmeUVRQW5kWHY5SUJrQkplMlRkQXpnODBnQXBxNGRjWks2SndsRTBsc0FaNG1ENXlUOSs2QWw2UlRBKzBHYjg1czZhZXdqT1NEbS9Sc0F2d0UwYytDQ3BMbGZ0RUxPSFBSVXVkU2RQcmNQSU9uQUhCQWI2OE5mU0pvZXE2MEdQUzlKR3RTRHRRRlpNanhUUmNRTnJTMHovTDlMYjdMSmhaeHdqc1YrNDhwampoZDMrYW1BcEp4L1NOTFY2TDhWOUpkN1J5ZVhBVGozZkhhd0Joc0x4SjUwa25kcEtSdHgxSTVJaC81cXlwY29XUXk4U0lPTkFsS1RBNUpNbTVjQURPQzQzZlVsdWJsK0RYY1BsaTJMQW1uSmtXVGphalhhVG5wMjBEV3FnL0x5V3hxUlJqU1NINHQzU29vOXFuZXZ6eXdkRVFWRHMwSXlHSFpQTVpLOUNudzBFRW43SkMrSFJFZFNCT0pCS2l0aEpMbWllUlRBN0VBYVFtK1FSSkhrU3VSQnFuZC93OE8zSkhNVDVwMFBSMFdrZ3NkUlpGNlRmSkdMb2lTWDcyY0FTa2VCOG1TdkFISlBsOXdRMVpMMHZUUmNQQ0xoZzgyNXczbml4TCtUSktGWnVvZkVqajhvR21zQk1kOE54aG9ydDg0OUxnOTlrRmcwUjVwV2grYm9KdVk4YUs2L29lTS8wR2c5T1ZYZkVFdHpwTXVRUUtkWWxXNXFsTzhxMUJyU2IycjJyRWF0R21NZk5iV21BalEySXJHVXVtTVhUM1ZUZ1FqMytGM05mOG1Tblh0ODhDQVVuendudHF2cU9zODRCNm1DMGZmU2FDLzROVEUxdGxaWlZISElEdlZMWTNJODdwWFFGUjlkNWNnR1pCVzNaejY2UldTTHlFd2UyS2cxazJPcnI5MlppUHdEZUF5Y1Fzd3pLQkFBQUFBQVNVVk9SSzVDWUlJPVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY29udHJpYnV0ZS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5oqV56i/XCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidW5pLXRhYi1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZHJhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgdGFiQmFyczogX3ZtLnRhYkJhcnMsXG4gICAgICAgICAgICAgIHRhYkluZGV4OiBfdm0udGFiQ3VycmVudEluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFiQ2hhbmdlOiBfdm0udGFiQ2hhbmdlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidS1zbGlkZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNsaWRlclwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaW5kZXg6IF92bS50YWJDdXJyZW50SW5kZXgsIGluZmluaXRlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS50YWJDaGFuZ2UgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24odGFiSXRlbSwgdGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdGFiSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibGlzdC1jb250ZW50XCJdLFxuICAgICAgICAgICAgICAgICAgb246IHsgbG9hZG1vcmU6IF92bS5sb2FkTW9yZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZyZXNoXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9hZGluZ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNwbGF5OiB0YWJJdGVtLnJlZnJlc2hpbmcgPyBcInNob3dcIiA6IFwiaGlkZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgcmVmcmVzaDogX3ZtLm9uUmVmcmVzaCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJJdGVtLnJlZnJlc2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJsb2FkaW5nLWluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxvYWRpbmctaWNvblwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsb2FkaW5nLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5yZWZyZXNoaW5nID8gXCLmraPlnKjliqDovb0uLlwiIDogXCLkuIvmi4nliLfmlrDmlbDmja5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbCh0YWJJdGVtLm5ld3NMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJuZXdzLWl0ZW1cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5hdlRvRGV0YWlscyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogW1widGl0bGVcIiwgXCJ0aXRsZVwiICsgaXRlbS50eXBlXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZy1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWctbGlzdFwiICsgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJiBpdGVtLnR5cGUgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpbWctbGlzdC1zaW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5pbWFnZXMsIGZ1bmN0aW9uKGltZ0l0ZW0sIGltZ0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW1nSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZy13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1nLXdyYXBwZXJcIiArIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpbWctd3JhcHBlci1zaW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImltZ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpbWdJdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ2aWRlby10aXBcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widmlkZW8tdGlwLWljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFFQzBsRVFWUm9RKzJhalZFVk1SREhkenV3QTZBQ3BRS3hBckVDdFFLeEFxRUNvUUtoQXFFQ29RS3hBcUVEcldDZG43Tng4dkp5K2JwM1Q0WWhNMitPOFM3Si9yTzcvLzJJS285azZDUEJJVTlBY3BvMHMxMFJlU2tpUEE4bXRIMHRJbmNpY3FPcVBEY3labXZFaFg4ckl1OGNRSTlndHlKeUtTSVhjMEVOQTNFQW54eEFqL0JUMzU2THlFZFYvVFd5V0RjUU0zc21JZ0E0bXRqd1hrUTRhWDRNbmdqM1FrU1l5NVBmVG1iK2xhb2VMZzdFekJEZ2E4YUVFQjRUT1ZmVkFLQW9qMnNVYytRWFFDMFB4TXpZOEVzaTNXOFJPVmJWMDVGVERIUE1EQzFBRUJ6RWNxWTFBZUxNUVF4dFhBTnVadmpNYS9jYi9pNk9xbzlrUUtDRkkxV3RMbDdiZk9xOW1VSGQzL3c5TkQxRjVmK1dLQUp4bi9nZWJRaUlnMVkvbUFFRVVzRFg4SjB6VlowaWxqb1FaeWRBWUx1TXJZQ0l3WE9RclljMnFSRXp3NEUvUkF1L1g5S2NSclVYNW1XQk9EWCtqQlkvVWRYanVadU56bmQ1UG5zY2VwTmp0aWtnT0RKcFJ6Q3AzVkZhSEJVK01URU9rU0RNSUowaEZLeU1OU0FaYlpBMk5NVUpuN3VqcWplYkFCRFd5RERuWHBxYjVZREV2bkd2cXNIWmk3STVDTWdCeGlIRHhSeDVibVNZR1pseXlBRFdtQ3dIQk44SXdqZFJINUltM0IrRW41VUlKdVlGQmVNbmpGdFYzWS9mcndESm1OVitLLzFOQUdFdkl2K3BxcDdNVVUxR3RoWHpTb0hFK1ZTeldSVTBFc3VPYVVEaHcrYVdtTmRLT0VpQnhPelFsWWtXTkpJcUFpQUkwVjBkbWhrWk52a1hZeVVrcEVEWWhGSjE3Y09hV1hRQUNVdHhhUGhnYzlKcFp2RkJyK1JnL3hOSThCKzB3MGxYUjBMRHpVQ0lvRTBiTlBwSVNkQzF1SkQ3dUpRVmx6VHlFSUZRZ0ZHaE1wbzEwcFZmRGZnSXdsQWlVOXMwYWY0aCtnZ2xBUmtFOFdVUlo5OEcvVjY1RmhhbDN6Z2czcW5xWHBWSy9JTUcwL3JoQU9ZRXhEaDlLZ1pFY3F5NER0bEVpcktwVGd1dHFManNuazVSbkVhTFdlYVVoaVkwc3JGT1MxS3hycVZQdFRTKzJieTh4c2RzbmtPTk5ONUcwcERDUWNWbXRjYW9MWVZWVjYzZTB6RG84TCswT1ZndnJOeTg0bElYZW1SaU0wMjJDdGp5bldzYWJWQ3dNZHBLWFFlU09sWlhjR3dSc1BXYkpBZ3lMWnZPUE9oMlVLWlduNnhZUzBEaWJsL0lWRisxVm95dEoxNXdicXlDdG1rd0tkSVpHblpaRSs5dG1iTEk0bUM4VlJ1REFHOHhwbzAwc1FGRGkyaVJKcmFiVTJqR0JZVlZtYk1LeEowL2R6ZlNYZUdWek0zWmlSWnQydEdzZ21EZEppQUZNR2lITlB4aWprK1lHVjFOc3VIZ0Q4MmFDQjgyQTRsb21kb2h2ZjhqclFtM3M2MVhiemd6QU1KdFZYd1dPUFpoRDdGMEFYRXduQnJxanp2MXNSQ0FDbmZwL0h2SWRzTmxUYmlEbitwZ0R1Vm4zVUNDeE40d0ExQm9kcyt4cnI4UjI2L3l1dXVVTGg4cDhEMG5TenNURThsZE9aY0FodHRnS3NVaEFFTStVanR5MXhJbTFQSmZPSzduQ2gvTE0yeGFOVkRiZnY4RVpOc25YdHZ2RHlybUYxRklCS0l3QUFBQUFFbEZUa1N1UW1DQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiaW1nLWVtcHR5XCJdIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogW1wiYm90XCIsIFwiYm90XCIgKyBpdGVtLnR5cGVdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiYXV0aG9yXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uYXV0aG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRpbWVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50aW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsb2FkLW1vcmUtd3JhcHBlclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1peC1sb2FkLW1vcmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RhdHVzOiB0YWJJdGVtLmxvYWRNb3JlU3RhdHVzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdDwhLS0gXHJcblx0XHRcdHdlZXjnu4Tku7bmlofmoaNcclxuXHRcdFx0aHR0cHM6Ly93ZWV4LmFwYWNoZS5vcmcvemgvZG9jcy9jb21wb25lbnRzL3NsaWRlci5odG1sXHJcblx0XHQtLT4gXHJcblx0XHRcclxuXHRcdDwhLS0g5qCH6aKY5qCPIC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcblx0XHRcdDwhLS0g54q25oCB5qCP5Y2g5L2NIC0tPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgaGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQgfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwibG9nb1wiPkxvZ288L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2dvIHl0aWNvblwiPiYjeGU2MTU7PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoLWlucHV0XCI+6L6T5YWl5YWz6ZSu5a2X5pCc57SiPC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY29udHJpYnV0ZS1pY29uXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQzIwbEVRVlJvUSsxWTdWRVZRUkRzamtBelVDTlFJZ0FqVUNOUUloQWpFQ05RSWhBalFDSVFNc0FJeEF3Z2dyYWEycVhPNDNidmR1K0xlblZieFEvcTdlNU56L1RNOUN5eEk0czdnZ01ia01jV3lTMGlXMFJtOHNCR3Jaa2NXMzN0cUloSWVnN2dJNEJYSFJaY0FUZ2hlVjF0WGNIQmFpQ1NiUHd2QUU4ejM3c0I4SnFrUWMyNnFvQklzdkYvQW9oYkFGMkdHdWdUQUk3SUhrbURtbTBWQXdrZ0hJbElwM2NrZjdZdERCRzdDR0N1U083TmhnSW9seWlTdmdQNEVJejZSUEpieWtCSjN1ZjlYcWNrRCtjQ2s0MklKQ2Z5RVFBbmRYdjlJQmtCSmUyVGRBemc4MGdBcHE0ZGNaSzZKd2xFMGxzQVo0bUQ1eVQ5KzZBbDZSVEErMEdiODVzNmFld2pPU0RtL1JzQXZ3RTBjK0NDcExsZnRFTE9IUFJVdWRTZFByY1BJT25BSEJBYjY4TmZTSm9lcTYwR1BTOUpHdFNEdFFGWk1qeFRSY1FOclMwei9MOUxiN0xKaFp4d2pzVis0OHBqamhkMythbUFwSngvU05MVjZMOFY5SmQ3UnllWEFUajNmSGF3QmhzTHhKNTBrbmRwS1J0eDFJNUloLzVxeXBjb1dReThTSU9OQWxLVEE1Sk1tNWNBRE9DNDNmVWx1YmwrRFhjUGxpMkxBbW5Ka1dUamFqWGFUbnAyMERXcWcvTHlXeHFSUmpTU0g0dDNTb285cW5ldnp5d2RFUVZEczBJeUdIWlBNWks5Q253MEVFbjdKQytIUkVkU0JPSkJLaXRoSkxtaWVSVEE3RUFhUW0rUVJKSGtTdVJCcW5kL3c4TzNKSE1UNXAwUFIwV2tnc2RSWkY2VGZKR0xvaVNYNzJjQVNrZUI4bVN2QUhKUGw5d1ExWkwwdlRSY1BDTGhnODI1dzNuaXhMK1RKS0ZadW9mRWpqOG9HbXNCTWQ4Tnhob3J0ODQ5TGc5OWtGZzBSNXBXaCtib0p1WThhSzYvb2VNLzBHZzlPVlhmRUV0enBNdVFRS2RZbFc1cWxPOHExQnJTYjJyMnJFYXRHbU1mTmJXbUFqUTJJckdVdW1NWFQzVlRnUWozK0YzTmY4bVNuWHQ4OENBVW56d250cXZxT3M4NEI2bUMwZmZTYUMvNE5URTF0bFpaVkhISUR2VkxZM0k4N3BYUUZSOWQ1Y2dHWkJXM1p6NjZSV1NMeUV3ZTJLZzFrMk9ycjkyWmlQd0RlQXljUXN3ektCQUFBQUFBU1VWT1JLNUNZSUk9XCIgLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udHJpYnV0ZS10ZXh0XCI+5oqV56i/PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDwhLS0gdW5pIOWumOaWuemhtumDqOmAiemhueWNoee7hOS7tiAtLT5cclxuXHRcdDx1bmktdGFiLWJhciA6ZHJhZz1cInRydWVcIiA6dGFiLWJhcnM9XCJ0YWJCYXJzXCIgOnRhYi1pbmRleD1cInRhYkN1cnJlbnRJbmRleFwiIEB0YWJDaGFuZ2U9XCJ0YWJDaGFuZ2VcIj48L3VuaS10YWItYmFyPlxyXG5cdFx0XHJcblx0XHQ8IS0tIHNsaWRlcuWwseaYr3VuaSBzd2lwZXIgLS0+XHJcblx0XHQ8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgOmluZGV4PVwidGFiQ3VycmVudEluZGV4XCIgOmluZmluaXRlPVwiZmFsc2VcIiBAY2hhbmdlPVwidGFiQ2hhbmdlXCI+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIGxpc3Qg5Z6C55u05rua5Yqo5YiX6KGo57uE5Lu2IC0tPlxyXG5cdFx0XHQ8bGlzdCB2LWZvcj1cIih0YWJJdGVtLCB0YWJJbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9XCJ0YWJJbmRleFwiIGNsYXNzPVwibGlzdC1jb250ZW50XCIgQGxvYWRtb3JlPVwibG9hZE1vcmVcIj5cclxuXHRcdFx0XHQ8IS0tIHJlZnJlc2gg5LiL5ouJ5Yi35paw57uE5Lu2ICBcclxuXHRcdFx0XHQqIFx0IHdlZXgg55qEcmVmcmVzaOWSjGxvYWRpbmfnu4Tku7blnKhpb3PmlYjmnpzlvojlpb3vvIzkvYbmmK/lnKjlronljZPnq6/mlYjmnpzlubbkuI3lpb1cclxuXHRcdFx0XHQqIC0tPlxyXG5cdFx0XHRcdDxyZWZyZXNoIGNsYXNzPVwibG9hZGluZ1wiIEByZWZyZXNoPVwib25SZWZyZXNoXCIgOmRpc3BsYXk9XCJ0YWJJdGVtLnJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cclxuXHRcdFx0XHRcdDxsb2FkaW5nLWluZGljYXRvciB2LWlmPVwidGFiSXRlbS5yZWZyZXNoaW5nXCIgY2xhc3M9XCJsb2FkaW5nLWljb25cIj48L2xvYWRpbmctaW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLXRleHRcIj57e3RhYkl0ZW0ucmVmcmVzaGluZz8n5q2j5Zyo5Yqg6L29Li4nOiAn5LiL5ouJ5Yi35paw5pWw5o2uJ319PC90ZXh0PlxyXG5cdFx0XHRcdDwvcmVmcmVzaD5cclxuXHRcdFx0XHQ8IS0tIOaWsOmXu+WIl+ihqCAtLT5cclxuXHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFiSXRlbS5uZXdzTGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwibmV3cy1pdGVtXCIgQGNsaWNrPVwibmF2VG9EZXRhaWxzKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJbJ3RpdGxlJywgJ3RpdGxlJytpdGVtLnR5cGVdXCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJpdGVtLmltYWdlcy5sZW5ndGggPiAwXCIgOmNsYXNzPVwiWydpbWctbGlzdCcsICdpbWctbGlzdCcraXRlbS50eXBlLCBpdGVtLmltYWdlcy5sZW5ndGggPT09IDEgJiYgaXRlbS50eXBlPT09MyA/ICdpbWctbGlzdC1zaW5nbGUnOiAnJ11cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBcclxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIihpbWdJdGVtLCBpbWdJbmRleCkgaW4gaXRlbS5pbWFnZXNcIiA6a2V5PVwiaW1nSW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdDpjbGFzcz1cIlsnaW1nLXdyYXBwZXInLCAnaW1nLXdyYXBwZXInK2l0ZW0udHlwZSwgaXRlbS5pbWFnZXMubGVuZ3RoID09PSAxICYmIGl0ZW0udHlwZT09PTMgPyAnaW1nLXdyYXBwZXItc2luZ2xlJzogJyddXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltZ1wiIDpzcmM9XCJpbWdJdGVtXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLXRpcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidmlkZW8tdGlwLWljb25cIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFFQzBsRVFWUm9RKzJhalZFVk1SREhkenV3QTZBQ3BRS3hBckVDdFFLeEFxRUNvUUtoQXFFQ29RS3hBcUVEcldDZG43Tng4dkp5K2JwM1Q0WWhNMitPOFM3Si9yTzcvLzJJS285azZDUEJJVTlBY3BvMHMxMFJlU2tpUEE4bXRIMHRJbmNpY3FPcVBEY3labXZFaFg4ckl1OGNRSTlndHlKeUtTSVhjMEVOQTNFQW54eEFqL0JUMzU2THlFZFYvVFd5V0RjUU0zc21JZ0E0bXRqd1hrUTRhWDRNbmdqM1FrU1l5NVBmVG1iK2xhb2VMZzdFekJEZ2E4YUVFQjRUT1ZmVkFLQW9qMnNVYytRWFFDMFB4TXpZOEVzaTNXOFJPVmJWMDVGVERIUE1EQzFBRUJ6RWNxWTFBZUxNUVF4dFhBTnVadmpNYS9jYi9pNk9xbzlrUUtDRkkxV3RMbDdiZk9xOW1VSGQzL3c5TkQxRjVmK1dLQUp4bi9nZWJRaUlnMVkvbUFFRVVzRFg4SjB6VlowaWxqb1FaeWRBWUx1TXJZQ0l3WE9RclljMnFSRXp3NEUvUkF1L1g5S2NSclVYNW1XQk9EWCtqQlkvVWRYanVadU56bmQ1UG5zY2VwTmp0aWtnT0RKcFJ6Q3AzVkZhSEJVK01URU9rU0RNSUowaEZLeU1OU0FaYlpBMk5NVUpuN3VqcWplYkFCRFd5RERuWHBxYjVZREV2bkd2cXNIWmk3STVDTWdCeGlIRHhSeDVibVNZR1pseXlBRFdtQ3dIQk44SXdqZFJINUltM0IrRW41VUlKdVlGQmVNbmpGdFYzWS9mcndESm1OVitLLzFOQUdFdkl2K3BxcDdNVVUxR3RoWHpTb0hFK1ZTeldSVTBFc3VPYVVEaHcrYVdtTmRLT0VpQnhPelFsWWtXTkpJcUFpQUkwVjBkbWhrWk52a1hZeVVrcEVEWWhGSjE3Y09hV1hRQUNVdHhhUGhnYzlKcFp2RkJyK1JnL3hOSThCKzB3MGxYUjBMRHpVQ0lvRTBiTlBwSVNkQzF1SkQ3dUpRVmx6VHlFSUZRZ0ZHaE1wbzEwcFZmRGZnSXdsQWlVOXMwYWY0aCtnZ2xBUmtFOFdVUlo5OEcvVjY1RmhhbDN6Z2czcW5xWHBWSy9JTUcwL3JoQU9ZRXhEaDlLZ1pFY3F5NER0bEVpcktwVGd1dHFManNuazVSbkVhTFdlYVVoaVkwc3JGT1MxS3hycVZQdFRTKzJieTh4c2RzbmtPTk5ONUcwcERDUWNWbXRjYW9MWVZWVjYzZTB6RG84TCswT1ZndnJOeTg0bElYZW1SaU0wMjJDdGp5bldzYWJWQ3dNZHBLWFFlU09sWlhjR3dSc1BXYkpBZ3lMWnZPUE9oMlVLWlduNnhZUzBEaWJsL0lWRisxVm95dEoxNXdicXlDdG1rd0tkSVpHblpaRSs5dG1iTEk0bUM4VlJ1REFHOHhwbzAwc1FGRGkyaVJKcmFiVTJqR0JZVlZtYk1LeEowL2R6ZlNYZUdWek0zWmlSWnQydEdzZ21EZEppQUZNR2lITlB4aWprK1lHVjFOc3VIZ0Q4MmFDQjgyQTRsb21kb2h2ZjhqclFtM3M2MVhiemd6QU1KdFZYd1dPUFpoRDdGMEFYRXduQnJxanp2MXNSQ0FDbmZwL0h2SWRzTmxUYmlEbitwZ0R1Vm4zVUNDeE40d0ExQm9kcyt4cnI4UjI2L3l1dXVVTGg4cDhEMG5TenNURThsZE9aY0FodHRnS3NVaEFFTStVanR5MXhJbTFQSmZPSzduQ2gvTE0yeGFOVkRiZnY4RVpOc25YdHZ2RHlybUYxRklCS0l3QUFBQUFFbEZUa1N1UW1DQ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJpbWctZW1wdHlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiWydib3QnLCAnYm90JytpdGVtLnR5cGVdXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXV0aG9yXCI+e3tpdGVtLmF1dGhvcn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVcIj57e2l0ZW0udGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jZWxsPiBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOWKoOi9veabtOWkmue7hOS7tiBcclxuXHRcdFx0XHRcdHdlZXggbG9hZGluZ+e7hOS7tuWcqOaWsEhCdWlsZFjkuK3lronljZPkvJrpl6rpgIDvvIzmjaLnlKjoh6rlrprkuYnnu4Tku7ZcclxuXHRcdFx0XHQtLT5cclxuXHRcdFx0XHQ8Y2VsbCBjbGFzcz1cImxvYWQtbW9yZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8bWl4LWxvYWQtbW9yZSA6c3RhdHVzPVwidGFiSXRlbS5sb2FkTW9yZVN0YXR1c1wiPjwvbWl4LWxvYWQtbW9yZT5cclxuXHRcdFx0XHQ8L2NlbGw+XHJcblxyXG5cdFx0XHQ8L2xpc3Q+XHJcblx0XHQgXHJcblx0XHQ8L3NsaWRlcj5cclxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGluZGV4TWl4aW4gZnJvbSAnQC9jb21tb24vaW5kZXgnXHJcblx0aW1wb3J0IHVuaVRhYkJhciBmcm9tICdAL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWUnXHJcblx0aW1wb3J0IG1peExvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZSdcclxuXHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdC8qKlxyXG5cdFx0ICog5aSn6YOo5YiGanPlj6/ku6XlpI3nlKh2dWXkuK3lhpnnmoRcclxuXHRcdCAqIOebtOaOpea3t+WFpeWNs+WPr1xyXG5cdFx0ICovXHJcblx0XHRtaXhpbnM6IFtpbmRleE1peGluXSwgIFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlUYWJCYXIsXHJcblx0XHRcdG1peExvYWRNb3JlXHJcblx0XHR9LFxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6ICcwd3gnLCAvL+eKtuaAgeagj+WNoOS9jemrmOW6plxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCl7XHJcblx0XHRcdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHQgICAgJ2ZvbnRGYW1pbHknOiBcInl0aWNvblwiLFxyXG5cdFx0XHQgICAgJ3NyYyc6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEwNzg2MDRfM21yaGFjMm8zb2kudHRmJylcIixcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly/ojrflj5bnirbmgIHmoI/pq5jluqbnu5npobbpg6jljaDkvY3oioLngrlcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcz0+e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0ICsgJ3d4JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC8v6I635Y+W5pWw5o2u77yM5pa55rOV6YCa6L+HbWl4aW7mt7flhaVcclxuXHRcdFx0dGhpcy5sb2FkVGFiYmFycygpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcclxuXHRcdFx0dGFiQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnRhYkN1cnJlbnRJbmRleCA9IGUuaW5kZXg7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/nrKzkuIDmrKHliIfmjaJ0YWLvvIzliqjnlLvnu5PmnZ/lkI7pnIDopoHliqDovb3mlbDmja5cclxuXHRcdFx0XHRsZXQgdGFiSXRlbSA9IHRoaXMudGFiQmFyc1t0aGlzLnRhYkN1cnJlbnRJbmRleF07XHJcblx0XHRcdFx0aWYodGhpcy50YWJDdXJyZW50SW5kZXggIT09IDAgJiYgdGFiSXRlbS5sb2FkZWQgIT09IHRydWUpe1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ2FkZCcpO1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5LiL5ouJ5Yi35pawXHJcblx0XHRcdG9uUmVmcmVzaChlKXtcclxuXHRcdFx0XHR0aGlzLmxvYWROZXdzTGlzdCgncmVmcmVzaCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WKoOi9veabtOWkmlxyXG5cdFx0XHRsb2FkTW9yZSh0YWJJdGVtKXtcclxuXHRcdFx0XHR0aGlzLmxvYWROZXdzTGlzdCgnYWRkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSA+XHJcblx0Lyog5a2X5L2T5Zu+5qCHICovXHJcblx0Lnl0aWNvbiB7XHJcblx0XHRmb250LWZhbWlseTogeXRpY29uO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB3ZWV4IGNzc+mZkOWItlxyXG5cdCAqIOmAieaLqeWZqOS4jeaUr+aMgeW1jOWll1xyXG5cdCAqIOWtkOiKgueCueS4jee7p+aJv+eItuiKgueCueagt+W8j++8iOmHjeimge+8iVxyXG5cdCAqIOS7heaUr+aMgSBmbGV45biD5bGAIO+8iOi/meS4qui/mOS4jemUme+8ie+8jCDpu5jorqTkuLpkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHQgKiBcclxuXHQgKiDms6jvvJrmiJHlr7l3ZWV45Lmf5piv5LiA55+l5Y2K6Kej77yM5pyJ6K+06ZSZ55qE6bq754Om5oyH5Ye6XHJcblx0ICovXHJcblxyXG5cdC5jb250ZW50e1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC8qIOmhtumDqOagh+mimOagjyAqL1xyXG5cdC5wYWdlLWhlYWRlcntcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlYzcwNmI7XHJcblx0fVxyXG5cdC5wYWdlLWhlYWRlci13cmFwcGVye1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLWxlZnR7XHJcblx0XHRvcGFjaXR5OiAwLjk7XHJcblx0fVxyXG5cdC5sb2dve1xyXG5cdFx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC5wYWdlLWhlYWRlci1jZW50ZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cGFkZGluZzogMHB4IDMwcHggMCAyMHB4O1xyXG5cdH1cclxuXHQuc2VhcmNoLWlucHV0e1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0Zm9udC1zaXplOjI4cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLXJpZ2h0e1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuY29udHJpYnV0ZS1pY29ue1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG5cdC5jb250cmlidXRlLXRleHR7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0XG5cdC5zbGlkZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHR9XHJcblx0Lmxpc3QtY29udGVudHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHQvKiDliqDovb3mm7TlpJogKi9cclxuXHQubG9hZC1tb3JlLXdyYXBwZXJ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNzUwdXB4O1xyXG5cdFx0aGVpZ2h0OiAxMjB1cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjB1cHg7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblx0Lyog5paw6Ze75YiX6KGoICAqL1xyXG5cdC5uZXdzLWl0ZW17XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRwYWRkaW5nOiAyNHB4IDMwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNlZWU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHQudGl0bGV7XHJcblx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRjb2xvcjogIzMwMzEzMztcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdH1cclxuXHQuYm90e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblx0LmF1dGhvcntcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdH1cclxuXHQudGltZXtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cdC5pbWctbGlzdHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0d2lkdGg6IDIyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxNDBweDtcclxuXHR9XHJcbiBcdC5pbWctd3JhcHBlcntcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiAxNDBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZ3tcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5pbWctZW1wdHl7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cdC52aWRlby10aXB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xyXG5cdH1cclxuXHQvKiDlm77lnKjlt6YgKi9cclxuXHQuaW1nLWxpc3Qxe1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAzMHB4O1xyXG5cdFx0dG9wOiAyNHB4O1xyXG5cdH1cclxuXHQudGl0bGUxe1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyNDBweDsgXHJcblx0fVxyXG5cdC5ib3Qxe1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyNDBweDsgXHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQvKiDlm77lnKjlj7MgKi9cclxuXHQuaW1nLWxpc3Qye1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRyaWdodDogMzBweDtcclxuXHRcdHRvcDogMjRweDtcclxuXHR9XHJcblx0LnRpdGxlMntcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIxMHB4OyBcclxuXHR9XHJcblx0LmJvdDJ7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQvKiDlupXpg6gz5Zu+ICovXHJcblx0LmltZy1saXN0M3tcclxuXHRcdHdpZHRoOiA3MDBweDtcclxuXHRcdG1hcmdpbjogMTZweCAwcHg7XHJcblx0fVxyXG5cdC5pbWctd3JhcHBlcjN7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHR9XHJcblx0Lyog5bqV6YOo5aSn5Zu+ICovXHJcblx0LmltZy1saXN0LXNpbmdsZXtcclxuXHRcdHdpZHRoOiA2OTBweDtcclxuXHRcdGhlaWdodDogMjQwcHg7XHJcblx0XHRtYXJnaW46IDE2cHggMHB4O1xyXG5cdH1cclxuXHQuaW1nLXdyYXBwZXItc2luZ2xle1xyXG5cdFx0aGVpZ2h0OiAyNDBweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQganNvbiBmcm9tICdAL2pzb24nXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG5cdGRhdGE6IHtcclxuXHRcdHRhYkJhcnM6IFtdLFxyXG5cdFx0dGFiQ3VycmVudEluZGV4OiAwLFxyXG5cdH0sXHJcblx0XHJcblx0bWV0aG9kczoge1xyXG5cdFx0bG9hZFRhYmJhcnMoKXtcclxuXHRcdFx0bGV0IHRhYkxpc3QgPSBqc29uLnRhYkxpc3Q7XHJcblx0XHRcdHRhYkxpc3QuZm9yRWFjaChpdGVtPT57XHJcblx0XHRcdFx0aXRlbS5uZXdzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdGl0ZW0ubG9hZE1vcmVTdGF0dXMgPSAwOyAgLy/liqDovb3mm7TlpJogMOWKoOi9veWJje+8jDHliqDovb3kuK3vvIwy5rKh5pyJ5pu05aSa5LqGXHJcblx0XHRcdFx0aXRlbS5yZWZyZXNoaW5nID0gMDtcclxuXHRcdFx0fSlcclxuXHRcdFx0dGhpcy50YWJCYXJzID0gdGFiTGlzdDtcclxuXHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ2FkZCcpO1xyXG5cdFx0fSxcclxuXHRcdC8v5paw6Ze75YiX6KGoXHJcblx0XHRsb2FkTmV3c0xpc3QodHlwZSl7XHJcblx0XHRcdGxldCB0YWJJdGVtID0gdGhpcy50YWJCYXJzW3RoaXMudGFiQ3VycmVudEluZGV4XTtcclxuXHRcdFx0XHJcblx0XHRcdC8vdHlwZSBhZGQg5Yqg6L295pu05aSaIHJlZnJlc2jkuIvmi4nliLfmlrBcclxuXHRcdFx0aWYodHlwZSA9PT0gJ2FkZCcpe1xyXG5cdFx0XHRcdGlmKHRhYkl0ZW0ubG9hZE1vcmVTdGF0dXMgPT09IDIpe1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IDFcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMjtcclxuXHRcdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2UgaWYodHlwZSA9PT0gJ3JlZnJlc2gnKXtcclxuXHRcdFx0XHR0YWJJdGVtLnJlZnJlc2hpbmcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0Ly9zZXRUaW1lb3V05qih5ouf5byC5q2l6K+35rGC5pWw5o2uXHJcblx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRsZXQgbGlzdCA9IGpzb24ubmV3c0xpc3Q7XHJcblx0XHRcdFx0bGlzdC5zb3J0KChhLGIpPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSA+IC41ID8gLTEgOiAxOyAvL+mdmeaAgeaVsOaNruaJk+S5semhuuW6j1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYodHlwZSA9PT0gJ3JlZnJlc2gnKXtcclxuXHRcdFx0XHRcdHRhYkl0ZW0ubmV3c0xpc3QgPSBbXTsgLy/liLfmlrDliY3muIXnqbrmlbDnu4RcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW09PntcclxuXHRcdFx0XHRcdHRhYkl0ZW0ubmV3c0xpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8v5LiL5ouJ5Yi35pawIOWFs+mXreWIt+aWsOWKqOeUu1xyXG5cdFx0XHRcdGlmKHR5cGUgPT09ICdyZWZyZXNoJyl7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLm1peFB1bGxkb3duUmVmcmVzaCAmJiB0aGlzLiRyZWZzLm1peFB1bGxkb3duUmVmcmVzaC5lbmRQdWxsZG93blJlZnJlc2goKTtcclxuXHJcblx0XHRcdFx0XHR0YWJJdGVtLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly/kuIrmu5HliqDovb0g5aSE55CG54q25oCBXHJcblx0XHRcdFx0aWYodHlwZSA9PT0gJ2FkZCcpe1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IHRhYkl0ZW0ubmV3c0xpc3QubGVuZ3RoID4gNDAgPyAyOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgNjAwKVxyXG5cdFx0fSxcclxuXHRcdC8v5paw6Ze76K+m5oOFXHJcblx0XHRuYXZUb0RldGFpbHMoaXRlbSl7XHJcblx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdGlkOiBpdGVtLmlkLFxyXG5cdFx0XHRcdHRpdGxlOiBpdGVtLnRpdGxlLFxyXG5cdFx0XHRcdGF1dGhvcjogaXRlbS5hdXRob3IsXHJcblx0XHRcdFx0dGltZTogaXRlbS50aW1lXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHVybCA9IGl0ZW0udmlkZW9TcmMgPyAndmlkZW9EZXRhaWxzJyA6ICdkZXRhaWxzJzsgXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGAvcGFnZXMvZGV0YWlscy8ke3VybH0/ZGF0YT0ke0pTT04uc3RyaW5naWZ5KGRhdGEpfWBcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0fVxyXG5cdFxyXG59IiwiY29uc3QgdGFiTGlzdCA9IFt7XHJcblx0bmFtZTogJ+acgOaWsCcsXHJcblx0aWQ6ICcxJyxcclxufSwge1xyXG5cdG5hbWU6ICfmjqjojZAnLFxyXG5cdGlkOiAnMidcclxufV07XHJcbmNvbnN0IG5ld3NMaXN0ID0gW3tcclxuXHRcdGlkOiAxLFxyXG5cdFx0dGl0bGU6ICfku47kurLlr4bml6Dpl7TliLDnm7jniLHnm7jmnYDvvIzov5nlsLHmmK/kurrnsbvkuIDotKXmtoLlnLDnmoTnnJ/nm7gnLFxyXG5cdFx0YXV0aG9yOiAnVGFwVGFwJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cDovL2ZjLWZlZWQuY2RuLmJjZWJvcy5jb20vMC9waWMvOTEwN2I0OThhMGNiZWEwMDA4NDI3NjMwOTFlODMzYjYuanBnJyxcclxuXHRcdFx0J2h0dHA6Ly9mYy1mZWVkLmNkbi5iY2Vib3MuY29tLzAvcGljL2RjNGIwNjEwMjQxZDcwMTYyNzlmNGY0NjUyZWEwODg2LmpwZycsXHJcblx0XHRcdCdodHRwOi8vZmMtZmVlZC5jZG4uYmNlYm9zLmNvbS8wL3BpYy8wZjZlZmZhNDI1MzZmYjVjMmNhOTQ1YmQ0NmM1OTMzNS5qcGcnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcy5bCP5pe25YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHJcblx0e1xyXG5cdFx0aWQ6IDIsXHJcblx0XHR0aXRsZTogJ+WIq+WGjeeOqeaJi+acuuS6hu+8jOi1tue0p+WtpuWJjeerr++8jOaZmuS4gOW5tOiDveWwkeaOiTXmoLnlpLTlj5EnLFxyXG5cdFx0YXV0aG9yOiAn54ix6ICD6L+HJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cHM6Ly9wYWltZ2Nkbi5iYWlkdS5jb20vdi43Nzc0NjhGNEJFRDdERERBNUI0OTU4QzY3MUIwNzY1OT9zcmM9aHR0cCUzQSUyRiUyRmZjLWZlZWQuY2RuLmJjZWJvcy5jb20lMkYwJTJGcGljJTJGMGJjYzkzZmY5MjIyY2FmYTQ1MjZjOTgwYzE3ZjY5ZWMuanBnJnJ6PWFyXzNfMzcwXzI0NScsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzMw5YiG6ZKf5YmNJyxcclxuXHRcdHR5cGU6IDEsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMyxcclxuXHRcdHRpdGxlOiAn5bCG5bqc5YWs5Zut5oiQ5bGF5rCR6Lqr6L654oCc5aSn57u/6IK64oCdJyxcclxuXHRcdGF1dGhvcjogJ+aWsOS6rOaKpScsXHJcblx0XHRpbWFnZXM6IFtcclxuXHRcdFx0J2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNjkyMjk4MjE1LDI0NTA5NjU4NTEmZm09MTUmZ3A9MC5qcGcnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcy5bCP5pe25YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNCxcclxuXHRcdHRpdGxlOiAn6aqo5YKy5aSp5pyA5YGP54ix55qE5LqU5L2N6YOo5LiLIOi/meS5iOWkmuW8uuiAhei/mOavlOS4jei/h+S4gOWPquS7k+m8oCcsXHJcblx0XHRhdXRob3I6ICfnpZ7or7TopoHllLHmrYwnLFxyXG5cdFx0aW1hZ2VzOiBbXHJcblx0XHRcdCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFnR0JnY0dCUWdIQndjSkNRZ0tEQlFOREFzTERCa1NFdzhVSFJvZkhoMGFIQndnSkM0bklDSXNJeHdjS0RjcExEQXhORFEwSHljNVBUZ3lQQzR6TkRMLzJ3QkRBUWtKQ1F3TERCZ05EUmd5SVJ3aE1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakwvd0FBUkNBRWJBZlFEQVNJQUFoRUJBeEVCLzhRQUh3QUFBUVVCQVFFQkFRRUFBQUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJBQUFnRURBd0lFQXdVRkJBUUFBQUY5QVFJREFBUVJCUkloTVVFR0UxRmhCeUp4RkRLQmthRUlJMEt4d1JWUzBmQWtNMkp5Z2drS0ZoY1lHUm9sSmljb0tTbzBOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUhpNCtUbDV1Zm82ZXJ4OHZQMDlmYjMrUG42LzhRQUh3RUFBd0VCQVFFQkFRRUJBUUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJFQUFnRUNCQVFEQkFjRkJBUUFBUUozQUFFQ0F4RUVCU0V4QmhKQlVRZGhjUk1pTW9FSUZFS1JvYkhCQ1NNelV2QVZZbkxSQ2hZa05PRWw4UmNZR1JvbUp5Z3BLalUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2Z29PRWhZYUhpSW1La3BPVWxaYVhtSm1hb3FPa3BhYW5xS21xc3JPMHRiYTN1TG02d3NQRXhjYkh5TW5LMHRQVTFkYlgyTm5hNHVQazVlYm42T25xOHZQMDlmYjMrUG42LzlvQURBTUJBQUlSQXhFQVB3RHhiNzM4V0Q3MDhiMEFWUm4zcEZUYzNQU3AxQUF4V3B6a1oycVNUK1ZSRWxuNlZZYU1NMlQrVk1FUkRFNW9BWXFmTG5QTktxNVBOU1lwY0ROTVF0SlJSbWdCYVVkYWJtbEJwakpWR2VQV3RpT0FGbmVKRDVVYmpMRG9wUGI2VmpnQUxrbkRFWkZiR25TbWFDU0ZwMWdpQ1pKUDhiRG1rOVFXeGFwYWFqYmtWdlVacHc2MWlJajFlTnlJTG9yOGtzWVhkL3RMd2Y2Vm1SOHZ1SXJZdmlYMHFGQ1NjVE5qMjRxOXAzaFc0YXhsdjdzR0czampNZ1hvNzRHZndGYmMxbHFXazJabG5ZM043TDVkdkM4amtEaFJuRmRqcFhnUm1DeWFoTHQ5WW8rdjRtci9BSUt1QlBwOHFlUkZINVpIK3JHTTVHZWY4YTYxQUt5bk4zc2FSaXR5dlphWmEyTUlpdG9FalFlZzYvV3JxcFNqaWxXUkdka0RBc3ZVQThpc3l4UWdwMnlsRk9wQllidHBObnRVbEZBRUxJckRCR1I2R3FGenBNRXdPMGJHOVIwclV4U0VVWEE1RzcweWEzeVdYSy8zaDBxZzBlSzdwa0JCQkdSNkdzdTcwYUtYTFJmSTNwMnExSVZqbFNNVW1LdVhOcEpCSVVrVWcxVllZTlZjUTJwb3BDckFnNElxQ2xCSW91QjFtblh5M0tiSE9KUVB6cS9zelhHUVR0RzRaVGdqb2E2eXd2RnU0QTNBY2NNS2xqUkJkYVJaM01na2VJQ1FmeEx3VDlmV3NYVmZDTUZ5cGUwYnlKTWZkNnFmOEs2ekdhUXJTVW1KeFQzUEhMN1I3clRwaWx4RXlIc2V4K2hxZzZFVjdSZFdjTjFFMFUwU3VoN01LNFhYZkNzdG1HbnRBWllCeVY2c3YrSXJlRlJiTTVwMG10VWNaakJwSE9ZMno2Vk5LbU9sVlpTUngyclZzeXRxUWc0cVMzSTg5TTlEVU9lYWRFMkpVSkhBYW9SYk5pd3liYTUvM2F5ODRjVm8yRW9XQzRCN2lzenF3SHFhc2hJYTdjNXErSkEwK1IwQUZaOG55OGVoeFVrYmtESXFVVTBhVE9BT3RSRjl3cXI1aEk1cWFNZ3JWSW14YXR1SkJXN0xjWEMyYStTdTRmeFk3Vno0NEhGVFIzMDhTRkZjZ0dtUzFjUml3dXNxY2ttdENURWR0c2tKSjNnNUhhczVNcEcwcDY5cyt0YUdQTXVkMG55OUQ3ZEt4azlUUmJGdUlaaWp4L0Z6OUsxWTJEUklSMitXc2lKd0ZESHVhMFVrWDdHV0J4eVNLeWtNejc1OWl5c2Z2SE9LNVc2WEpacTZpWEZ4Rm5HY2Rhd2I2SUlObzVBTk9MTFJsc3VJRDY1cXRJZ0tBOUtzenQwV3F6OGl0Q3lGZUZvSnBlYVRCcXlScFBOSlQxVFBKT0JSOHF0d2Npa0EzRkZTQ1BJenZvcFhBcHFhbEJxQlRpcEEyS1FFbWFUZUJUQzJhakpGQVdKV2NFOFUzZjhBTlVRTkxubWdkaDViTkFhbVV2YW1BOE5UZ2FpelRobWdDNUJENXBWVis4ZXRhVVNSMlYzREt5NzBIVlc1eWFacDF2NWNQbU1QbWIrVlN6SVpRN0QrRDd2MUZaMzFBdUdOb1hhTmxDNDVBQjdIa1U0RDA2MFJrM0ZuRmRGc3NENVpIb1A0ZjYxdDZGNGRiVlpWdUpTeVdxSHFEZ3VmYi9HbExSalVic3QrSHRJYUdNYW5xTXNLUXhrbFVJQng5ZlQrZFpPdStJcmpVSnBWV1JvN1lIQ3hnNDRIYytwTmRkNG5qaXRmRFR3UXhxa1lLcUZBNEE2bjlBYTh2dTBmN05IY1JuZkEzVmgvQTNvM3AvV2lEVGVwbzFaV1IwTmxxdHpwTnpGSmJ5WTNScVdRL2RiMk5lbmFacUVPbzJjZHpDZmxZY2p1cDdpdkhaMk1seDh2M1kwVU0zWUFEclhvZmdoTm1qUExsdm5rSXczYkgvNjZxcW9wNkNwMzZtM3JtcS8yVnB4bVZRMHJFSkdEMHllNTlxcGVGSGxrRjFKTktza2psU3pBNXllZXRZbml5OFc3MWEzc2NxWTRCNWtnTFlHNDl2eS9uWFZhSFlpeDA5QnRDdko4N2dkaWUzNGRLaTFrVmU4alhGTzdVd1V1YXpMSDBWSHVvM1VnSk0wdWFqM1VidWFMZ1BOTklvM1V2V21CVnVyU082aktTRDZIdUs1ZStzWkxXVGF3eUQwUFkxMkpGVjdtM1M0aU1iaklQNlUweFdPR1lZcHVhdlgxbzl0TTBiRDZIMUZVVHhWWEpGVnEwdE92RGJUcStmbDZNUGFzck5TeHZnMHdPOFJ3eWhnY2dqSXA5WXVpM2ZtUkdCanl2SStsYlFyTmxDRVZHNlpxYWtJelRDeHcvaWZ3cDlvamU3MDlBSnVyUkRvMzA5NjRLN3RKWUFCSWhVa1pIdlh1REptc2JXZER0dFVzM2haRlI4bGtjRGxXOWEwalVhMFpsT2tucWp4WitEVEEzT2EwZFYwNmZUN3g3ZTRUYkloL0FqMUh0V1lldGFJeFpjam4ySTRIOFFxTlcrWWZXcTRia1U4bXRDQloyek0yT21hZW4zUlZjbkpKcWVNL0lLUTJTQTFLallxdTNKVWU5U2c0b3VTV1JMeFNoczFYRFU4SGluY0RSbFdOL0lSVzRPQi85ZXRZUWVXc1piNXV2YnRpdWVSZzZScVRnL3duMXJkczdoWkxZR1JzTkdDb0dldFlzdG9SMTQyb2NBRHZTcE50dHR1VGtjblB2VTBCV1Fzelp4N1ZVY0xHOHU4a0FqSzU3MUlJdmFiRUhqbmtrYmFnNEh1YXdOVFFoc2pwbnBXM2JYSUdscEdGdzI4c1c5YXpOUUc1UzFMcVVqblpNbHpSSkFSQUdQV2xKL2VrKzlMSXpPZ0ZXV1VvMUxBakdTRHlLa1V0R3BESjh0TEF1MlJza0duVHN4K1ZjVm90aUh1UWx5d3dWcUpnTWNEQnA1RGJRUWNqMm9aY0g1VjQ5NkFFVlZJeVR6OWFLdlc4Q3RDcEs4MFZQTVVZWU5PNjFHRHpUZ2FRRHVsUnNhY1d4VENjbW1DRkZGSlFLUXh3cFRUUjFwNEZNUXFqbXRkTkZ1MWdndVpZOWtFcDRKUE9QcFJvZGpGUGNmYUxyaTJoNVlmM3oyVVZyNnBxNW5rQmxPMUYrNUd2WVVtN0ZKRUlHQnh3QlNoa0g4UXFLMG5ndUpDR09NZmRVOTYxbEFBd0FBUGF1YVU3T3g2T0h3RHFxN2RqT3NURVpaWUpHSGxZSkhQUW52OEFoWHBxYW5iV2ZocGIrR0w5ekhDR0VhOFk3WS9PdlA1TGFLUTdpdUdISVljRVZtdnFOL1kvYWJWTGw5c29JZFdPUXdQZkI2R3FVMU1kWEJ5bzY3bzZiV3ZHMXZmNlZQYk5aT3JzdnlOdkJDdDJOY1JiWDhrUllxektlQVN2OFgxSFExRElTNDRiQjdnMHlMQ09CSUNGSkhQcHpXc1l4dFpuSFVpMDdvMERlTXlNdUNTRG5HQXFnL1FkYTlMOE9hdHBsbDRiZ1g3YkNabGlNa2k3eHUzZFNQclhsVXpySk15eDlDeE9meHF4YW8wamlKUm5uR2ZTbk9LU0hTZzV1eDJ2aDZPWFU5WVdhWmxMenllWklDTW5hT1Q5T3dyMDFEWEZlQ3RPUzN0V3ZjNU1tVVFaL2hCNVA0bitWZFlMcUZXMnRLZ2IwTENzWk83MEc0Y2phTDJhb2F0cVA5bTJMM1d3T0V4bGQyM2lyQWtCSFdzVHhUQ3R4b053U01tTEVnL0Qvd0N0bXBXNG5zWmJlT1dFNTIyZVlzREI4ekJ6VHg0NWk3MlVuNE9LNFdSOGNEZ1ZGNXByYmxSSE16MFZQRzlxZnZXMHcraEJxNUI0dTB1VWdOSzhXZjc2RUN2THhLZlduck1SM3BjcURtWjdKYlg5dGRMbUNlT1FmN0xBMWFWcThhZ3VUa05GTHNjZEdWc0d2UmRFdWJxYXdTZU82KzFvZUNrZ0N1cDdqSS9yVXVOaWxLNTBlYVExWHQ3dU9iS2pLdXYza1lZSXFmTlFNbzZqWnJkd0VkSFhsVFhJVElVWWdqQkJ4WGROMHJtOWN0UkhLSmxHRmZyOWFhWU5HRVNhRmFrZnJUZDFXUWFkaGNtM3VFa0I2SG42VjJTTUdVRUhJUFN2UG8zd2E2N1RMc1BweU83WUNBaGllMktsbEkxZ2FNOFZUaTFDMW0vMWR6RTMwY1ZZRWdJNE9ha1pJUlViclR0M0ZCNW91QnpQaWZ3L0hyTmtkcWdYTVl6RzNyN0d2SzlRMDJXeWRmTVVnT01xVCtvK29QRmU3TW9OWWV1YURiNnJZU3dsQWtoSmRIQTZONi9qVnhuWWljRXp4WEdEU2s4VmJ1N09TMm5lS1JTcm94VmdmVVZXTWZIdlhURjZISzl5SUFrNEhXcDJIbHlCUGI5YWpVRkh5QnlLVUJuSjZsczU0cFgxQ3cvUHpyVWdOSUlKU1FTQXYxcDRnYnUvNUNqbVExQnNBZlduQTVYNWVmU21TUUw1YlpadW5yVVVEanl3Rkp3T0tFN2ljR3RSMXZLeVNnK2g2R3RJN3pNcElJTGNnR3FBVUNVT085YTZGWjRnK3prREFOUTlDalpzWVhrZ2tjNEFHRFM2cEdrbHJoUmxnTTU5S3Q2V29OdjVlUmdMays5UlhNSm1nbVZlT01WbTNxU3R6S3Q1Ryt6eHB4eHhWWFVHQ1F0M0pxWjFhMmRFYmdLYW8zMG5tQVlQQUZQcVdqTFFCcHdEMHF6NVlWY2lvb1YvZWJqVTBqQllzMDJNeTVBWTV5K2ZscDdqZUF3NllxSzViY2M5cVNHUWh2TEo0TmFSWW11bzhmS0NCU0hKUE5PYy9oVFFlYWJFYTFzbitqcGtjNG9xUk1sRkk2WW9yRzVWampzMG9OSVFRdWNjVWdOV01jeHpSVFNhY09sTUJhS0FNMVl0N09hNmtFY0VUeU9leWpOQUVBR2EwTE94YWZEdmxVL1UxYVRTR3RMZ0pkYk40R2RpdG5IMXErQjJGUktWdEFHeFJyRkdJMHlGSGFxRjB3Tnc1ejZDdENXT2Q0TjhVYmVXVzJtWEh5ajhhU1BTSStDN2tuMnJKeVMzTzNDWWVWUjNSbEt5aHM1R2EydE92U3hFVWh6L0FIV3B3MHUzNzdqK05PVFM0a2xWMUpHRG5GWnluRm5yMGFGV0R1alFyRzFURVY1SE50emdBa2V0Yk5VdFF0VFBIdVQ3eTl2V29nN002Y1JCdU5rWkY1YXF3RnhCekUvcDI5cXBnTU9uNUdyZHRkTlpTTWhHNkp1cW50VjlyTzJ1azh5QnRwUHAwL0t0K2EyalBNOWtxbXEzN0ZHMXQ3U1hCa2Q0MjlPMWJFUmlpVVJ3QU0zK3ovVTFsTmJ0YlBtV0l1bnFEVnVIVUlGUUpIQ1FmUVVwTnZZM3BKUTBkay94SjVyMjdzYldTSzJ1WklsS2d5QkRnSG5pcysyMUZoS0RKaHovQUxYT2F1WFlJc25aeDg3a1ovUHBWQVhCMDc5MzlqdHBONDNCNUZMRWc5dXRhMG0rVzZWenpzZEZLYTZYT3cwcnhOZFdpWWhjU1JqcmJ5dDAvd0IwL3dCSzZWZFpYV05NdklEYXl3VGZaMllvL3BqclhtOWpxWjh4UExpaHQxWTRZeEQ1aitKeWZ5cnV2Q1VrWDJXNXRIRENaNUdiTEE1ZENBTTU3MFR2dTFZNUYyT0dTWHpZd1NlZTlHYXJ6aHJPOWxpWVkyT1ZJK2hxYmNTbTVTUHFmU3FaSStyK20yRDZqZUMyU1dPTm1HVjh6T0dQcFNYT2szZG15RzRqWllpUWZOUWJsWmZZMXNSK0c3MFJSM05vNlhFWnc2UEUyRzlqZzk2VGFHa2FtbCtHTlFzcFJsck40U2ZtamRTd1AwNDROZGhhMmR2YUt3dDRVaTNITEJCak5WTklubnVMRkd1b0dpbkh5dXJER1NPNCt0YVMxazIrcG9rTm10bzUxR2NxNCs2NjhGYWhqdVpJSkJEZFk1T0VsSEN0N0gwTldzMDJSRWxqTWNpaGxQVUdsY2RoazEzQkNjUElOM1pSeVQrQXJQdi9BRDc2Mk1jZG93eWNocEdDNC9EcldoRGJRd0RFVWFyNmtkVCtOU0dnRGc3Nnl2cldUYTZSTGtaREFrNXJITmxjZWFXTjIyMys3elhvOS9hTGQyN0lSOHc1VStocmpaNG1qY3F3d1FjRVZTa1MwVXZzeWQya1AvQXpVc2FDTVlTU1pSM0FsYi9HZzBaOTZkeERUYlJtVVNibjNkK2M1K3RYNEhNWnpHN29mVkdJcWtEVTBaNW91QjExaXR6TGFSeXgzYjdpT1JJb1lmNDA2M2oxZUs1bDh5YUdTSThwbnQ3ZjV6VE5DY3RZNC91c2ExeFVObHBGWVhnVWhiaU5vV1BkdVZQNDFJd0JHUjBxUXFHQkJBSVBZMVVhemFMTFdrbmxuKzQzS0g4TzM0VXJnY040NDBmWkt1b1JyeEo4a3VQWHNhNVd6MG02MUNjUlcwTFNOM3dPQjlUMnIxaTZzWnRUaU52ZHFzZHVjYmxRNUxuNjloK3RXYmF4Z3M0UkZieExIR09nVVZvcWxsWXhsU1Rkemk3SHdERDVZYS9uWm5QOEVYQUg0OTZUVVBDOXJhcjVWaHB0emNTWSs4Wk1JUDhBR3U4MlUxa3FlZGxxQ1I1Sk5vR3B3a3MxamNjOWdNZ1ZtTmtFakJCQndRZXhyMXZWcktTOHRqQ3R5MXZHZjlZeUQ1aVBRSHRYbGQxRkdzOG5rYnZLTGtSaHVTUjJxNHl1SnhzVkR6blBTcVNTY3VlMjQ0cTQ0NElJSTdFSGlzemZ5Y2V0YVIzTXByUXRzNUsvTDFITmJGaktCYTlPcHJubGMxcmFZNE8xVDkzak5PUm1sb2RiWVMrVkdPT2dxZWFSRWpkbC9pSHkxU1J3emJSMDlhU2FUTVNvZXpIQkh2V0wxWWpMMU9acExqTGYzcW9GUzhtM3RWbTdYRSszT1NHeFRvN2NrU0hPQ085VjBMUm5nQUVqSFNvcms0akgwcWQwMlpCcUc1WC9BRVVNZXRCUmx6TU5vcURPSkZPYWN4eitGTUorYXJReTY2NUdhaVBIV25MTHRRZlNvMmJjYW96U055SWp5SXY5MFVWQ2dQbEoxKzZLS3lMT2V1TW5hb1U0VWVsUVZvU3NHS2x6ajNVOWFpa2pUcUVKSjZZb1VoRk0wb3F6bFY0YUU0K2xDd21TVUxHcDU2WnF1WVpOcHVueTZqZXBieERrbjVqMlVkelhaejN0cnBGb2JQVFZBd01QTjNKL3FheHJKalkyand3OE5KOStUdVI2VkhnczJXNkRvUDYxUFAyS3YySEtTenRMSjFQcjZWYWlXSUFTVGtzdlZZbE9DMzFQWVZXcHJUSWh3VHo2Q3BFWGJ5L2xtaEtzUWtRR0ZqWGhSK0ZTV2hMV3liczdnTUhOVCtHOUdiWE5RRHpMaTBoSUxqKzhleTF2K043VzJ0N09PNmljUlhXUWlvdkhtTDlQYjFxSjY2SGZncXZzNWE5VG5ta1NOY3V3QW9oa01vM0FFSjJKNzFtV3RySk8vbVRFbGZmdldzb0FBQTZDc0drdEQzNlVwVDF0WkQ4MGhvb3FEWXpMKzB3d3VFVUhITEw2MVRsZ2tzbVdhQno1VGNnK25zYTNpTWpCcUlSS3NmbDR5dm9hMWpOcEhKVXc2YmJpWmNlck1PSm84ajFGU3JxTm5uY0Z3Mys3VEx2VDFSV2tSdHFnWklOWnBpeGJDWnVOeHdvOWExU1QxT1NjcWxONjZsdTZ2L3RMb2lLUW1TY251YXQzTTB0dFlXbDNBd1dSUVV5VkI0UDFyTmVPSlZnYU9mekdLNVpjZmRxekpNSk5GZU1ubEpCajhhNjZhWEsxMFBJeEZSemxkN2hhWGx4SytFS0l6SEFFVVlVay9nSzlZOFA2WWRPMHhGbEdibC9ta1k4bko3WjlxOHk4TW1LMTFleXVXQUlFMnh0M1FaNHordGV4b01pc0tsbG9rVEU4cjhaYWUxcnIwejQrU2Y4QWVLZjUvclZHMHNaL3NzY3E0a1Z4a3IwSXJ2OEF4cHBuMnpTUFBSY3kyeDMvQUZYdi9qWEs2VnpZUmUyUit0Q2w3bytYVTdmdzJ6ejZGYnJOR1FVQmp3dzZnZFAwcmFndDRvSTlrTWF4cG5PMVJnWnJqZE92cGJSOHh0d2Vxbm9hN0N5dVJkVzZ5cU1aNmowTlpzcXhhVVlwMU5GTFVnT296U1VVQU9wS1NpZ1locm5kZXROcmlkUnczRGZXdWlOVmI2QVhGckpIM0k0K3RDRWNLNHdhWlUweWtNUVIwcUNydVNMbXBvenlLZ3pVc1I1b3VGanJ0QVAraVA4QTcvOEFTdG9IaXNUUVArUE52OSt0b0dwWlNIVWhvb3BERUlvRkI1cEtBQ21tbHBDYUFLZC9iRzZzNVlGa01aa1VydkF5UldYYWFEWTZlQTBjUWFVZjh0SDVQNGVsYmoxVXVKRmlqWjNPRlVaSm91SThhMWFUeTdpNU9EekkyQ2UvSnJFelhRZUtXaU54RUlWS3hBc1ZCNjhuSkovRTF6aE5kTU5qQ3B1U3ExYitncmwvbVhPMWM0cm5WTmRMNGRCZnpEZzhnRE5PV3htelZkeWpaS2tBR2xua0toQXA2bk5UYWdCNUtZWUVodWFybFVhYUoyYjVVR1RqdldRaXI1VHozcElCSkp6V2hkMnYyT0FML0d3eTN0VExPY1FhZ2JvZk1xdG5qMHAycWFsSGV5T1VHUFROSnRqVzVoWFJ3UFNzMjZ1QVJ0ejA3Vk5keWtzUWV0WjB3K1FQK2RXaXlKd05vOWFoWTgxSzdmTG4ycXYxNXpWQVdBeDJBZTFLb3lRS1FFRkFCMnFXM1RmT2krcHBpTjlRQWdIdFJVVzRubWlzU2pFU0VxT0NoSjZlMU5JbFJRMjRnZHdhdFRKa2xjREk0NDlhZ2plUmlFd0dQVEZKTWdTSkhtY0tBQm5yejBGYVVjU1JLQWlnQWQ2YkVnaVE1UFBWaldyYWFmQ2JJWHQ3SXlSTWZraVhobkZOSzVhUm5obEp3Q00wdE91N2dTelJMSEdzVVM1Mm9vNmY0bXExeFA1S2NmZVBTazFyb0liYzNQbC9JdjN1NTlLYllXc3Q1ZVJXMEtscFpXd0IvV3FKYzdzbmxqWHBuZ1BRaGJXWDlwVHArL20rNW4rRlAvcjFUOTFGeGpkblQ2UnBrV2xhZEZheEQ3bytac2ZlYnVhd1BHZGdIbHRieGdXUVppWWRnZW8vclhZQVlGYzM0dm14YVc4SDkrVGNmb28veHhXTnpzb0w5NGpqc1lPTVV1YUdQTk56V0I5SkVmbW81SmNFSXYzbTZmNDFGUGNMQW1UeXgrNnZyUmJ4c29MeUhNamRmYjJwMjZrdVd0a1dCMEhPYVEwVWhOSXBsSytQbXRIYkQrTTViNlZRMWNoU2lMd3FyMHE5YmZ2cmlXNFBUT3hmcFdWcXo3N2x4NllGYjAxcWtlYmlYN2pmY3BOTzdMdFFZQUhXbW1lUkloRTJRckVINjFJVkxBS3ZmK1ZRM0RicDJBSUlYZ0VlbGRsMmVFMGJGakppSmlQNFdWaFh0OXMyNkZHN2xRZjByd3JTVDUwc2NKNDN1cWtuNjE3ckFBcWhSMEF4V05VcUpKSkdza2JJd3lyREJIcUs4OUZnMm5YbDFaTjkyTjl5SDFVOUs5R3JFMSt3OHhGdkkxeThRdytPNmY4QTF1dFpwbEhPUktjakZkanBFTFEyUzd1Q3gzWXJIMGpUeGNTK2F3ekV2L2p4cnAxR0tUWXlRVXVhYUtNMGdIWm9wdWFYTkFDNW96U1pvcGdMVEdwMU1hZ0RrTllnRVY3SUFPRytZZmpXUzNXdW04UXhmTEhMOVZOYzA0NXBvVEc5S2xpNjFCVThQVVV4STdEUXVMRFBxeHJYQnhXWnBLN05PaTl4bXRFVkpRL05HYVROSnVwQU96U0UwM05KbWdCYVFuRklUVEdOQURYYmptdVMxL1ZSTVRieE4rN0IrWWorSTFwYTlxQmdpOG1NNFpoeWZRVnd1cDNndHJkNVNmbTZLUFUwMHJzRG50YnVmT3ZTZ1B5eGpiK1Blc3JQTk9rY3N4WW5KSnlhanJyaXJLeHpTZDJTcFhSNk5kcGEyVGs0TEVuQXpqODY1eEFTUUJXaEN6d3huOXlIUXNBMjVUZ2VsRms5R1NsY3UzbXJQS1FpYlNnUElHUm1wOUZ1UFB1akcrQXpLUmpwMjYxbnBITmNUaUdHMlR6SkNkZ3gvS242VTBrTjlISVZkUWNoVzI4SEhYSDBvbGExa1c0NkhRcmF5eGh2N3ZYTlprc29qYVFIbjBKcnNuZDIwZ0lRcTdoejYxeDEwb2VSc2daN1Z6cDNaS01hNWtMeUZqVk9keTBTcjY5NjBMaUhhb2JzYW96SUZoeDNCeldpS0lRTXJpb2lBRHhVNmtxb1BCelVES1EzTk1DUmVsWDlNajMzQmIwV3M5UHUxcjZVdTJPU1E5T2xEZWdtV0hMSTVBUEZGUnUrVG4yb3JNWmxCbmxsMkFmZTZHdEdORmpVS0FPQmpOVnJWVGp6RzZuZ2ZTcFpweEV2cXg2Q2t3c1NCa2FkQkovcXdRU1A3M3RWcTZ1M3VwTnpjS09GVWRGRlpsdnVrY3lzYzQ0Rld3YU5nWkhuTzZVOWg4bzlxejNkcHBDU2VlNTlLbHU3amQ4aWRCK3RNdHl1M2FVTzdQSkZVdEEyTlB3N292OEFhMnBSd0RjVis5SStPQW82MTdSYnhyRkVxSXVGVUFBZWdybC9CZWxMWTZXTGhseE5jNFkreTloL1d1dFVjVmxKM1p0RldRNG5pdUw4V3k3dFJoano5eUluOHovOWF1eVk4VndQaVY4NjFLTTlFUWZwVVBZN2NHcjFFWTVOUXp6ckJHV1kvUWV0RXNxeG9YWThDczZNTmYzTytUL1ZMMi9wVUpkVDJwMUxhTGRsbTFqZVovdE0zVS9jSG9LdlVncGMwbTdsd2paQzVxQzdrS1FOdCs4M3lyOVRVMmFyTis5dWhuN3NYL29Sb1FUMnNPaWpFTUtvT2lpdWRuYnpydCsrVC9NMXYzY3ZsV3p0M3hnVnpLc2ZNeU9wTmIwZDdubDQrU1VWQkc3WVc4RjlydGxac29NTFNCWEE0ejNJL1NvdkZtaHBwT3N2SGJyaTNrVVNSZ25vRDFINEdtNkRJYmJWb0xwbmpqU0p5NWVYTzNnZFBjMVk4WVhuMjI1dEw1Y0FUd2Rqa2ZLeEg0VnR6ZTlaSGp0YUdkcGRzSHpJemtBSEJBL3hyMmJRYnY3WG85cktXM01VQVk5Y2tjSCtWZUdRVHNjS1dPMzByMGp3SmZza3N1bk0yWTJYell2YjFGRlJYUVJQUTFPYWl1WlJCYnZJUm5BNEhxZXdweUdvTGdlZGRRUS93ZythdytuVDlmNVZpV1BzTFZiT3ppZ0g4STUrdmVyWXBsTFNHUHpSbW01cGMwQUxSU1pvelFBdEZKbWpOQURzMDAwWnBEUUJuYXhINW1ueWNjcjh3cmpaZXRkM2NwNWtFaWVxa1Z3RncrMllJZTRQNlUwSVROVHdubXFtYXVXaTc1VVVkeUJUWUhjV1M3TFNGZlJSVnNHb0l4dFFEMEdLbEJxUUg1cE0wM05HYUJpNW9KeFRTYVNnQlMxTVk4VTZvMzZVQWNsNGx5bHlIUDNXV3ZOZFh2amRYR0ZQN3BPRjkvZXZTL0c4TWo2TVpZOC91MkcvSDkwOEgrbGVUVDlTTzROYTBrWjFKZENIT1RUaHpVWXA2OWVhM01MR2pZUTc5NzkxeFhlZkQrRFRManhDTk4xYU5YaHUwRFJobUtqelVPVjZmalhFYVkySVpzZGVLMEN6enoyL2xTbU5sSklLOVZQWHJXY3BXWmRPTGxLeVBvWHhCcCtqeGFQTmZYdGhhYnJTRjJqWW9Nb2NIR0QrVmZQRnBxelNSMjluSkNqUjI1Wm9pT3FzekFrbitWYnZpTHhmcmw1cDFyYVhWOHJSeGYzVkNtUmgvRTNxYTR1M21FZHlHSjRQZjN6VVIxT2lwQnhWbWRwYzZsSUxHM3dCdHhqUGNtc21LUVRYR1Rpb0w2NU1TK1d3d2VvcG1sa1RNeFpzRURpaTFqbXRvT3ZncWdLQjA1ckd1dnVrMXAzQkxGalZFb0hES2U5VWhsTkUzUXN3NmpGTUo1SlBKcTQwUWlKanpuZFZKaGhqVEdoOGE4WjdWczJvOHZUMXoxYk5ac1NBd2cxcitWaXpqejJXaVd4Tjdzb3ZKbGlhS1kyQTJNMFZOaGtwSVJNOUFCV2E4aGtrTEh2VXQxUDhxeGs0SjVOUlFxV2xVRUVEcno2VWtOR2ltMkdJQW5BQXFHNXVHVUJRdTBNT3A2MUpIKzhmekQwNkxWVysrYVZGSHB6UXR4RVVaUmd4WVpPUGxyWjBTMlcvdjdlMFJEKzhJM24wQTYxa0xhUzVCNmYwcm92REZ2SSt1UlJJY0llWFlkZG81SS9sUkxZSTJjajFhM1JVUlVVWVZSZ0QwRlhCMHFyRWVLbnpXSjBEWGJBcnpMeERxa0RheGRNakZ3Q0Y0SGNEQi9XdlNaRzRyeUR4TEN0dnJ0NGk4THYzRDhSbW1rbWRGQ2JoSzZLVXM4dDVNcURnRThEMDk2MVlJbGdpVkY2RHY2MVMwKzM4dFBPY2ZNdzQ5aFZ0WDg4a0w5d0hrK3RaeWZSSHNVRTkzdXl3RDBQYWx6VGFNMW1kUWtzbmx4czNwMEhxYWJHdXlNQThrOGsrcHBySHpKd25aUG1QMTdWSlZFYnU1bTZxNUtKRXZWalRMYUhUWVhmN2FzamxDQUZqZkI2ZlQrdFR1bm5ha0NmdXhMbjhhejJ5ODc0N3N4L0xOYjA0YzZ0ZXg1R09kbGZ6TlRVYisyVzZ0a3MxSXNJbzhCU01CZzJReDVyRzFZSFpHTnhQbEV4c08yZlVmVVZjdFhoZnlsdUl5NGhacE5xOVhYR1N2NWpQMHpUYnFGYnV5anZFR0JJb1NWY2ZjWWNBL1E0eFZRdFRseS9pZVkvZVZ6RnR6eVZOZHg0SW4vNG5sdXA2aU4xL1ROY1BKRExiVGJaRUtPQURnOXdhNmZ3amRMRnIxa3g2TTVUOHhqL0N0cGJDUjdMRzFSMmJpV1dlZnN6YkZQc3ZIODgxREpQNVNLbzVrYzdVVWR6VnVDTVF3cEd2UlJpdVkwSjZNMG5hak5Gd0Z6Um1tRnFZWlF2SklBOTZBSnNpbHpVUG1DbEQwQVMwVXdOVHFBRnpTRTBacE0wQU1jMTU5ckNpM3ZDVHdFbEkvQTVyMEZxNFh4VER0bm1QcmhxY2R4ZERKZVVOSWlqczYvcm10bnc4cG51b01uUHpGdnlKcm5nVDhyWVBHdy9vYTZ2d25CakRNT1ZqSDVtbTloSTY5YWVLalhwVHMxQlZoMmFDYVROTkxDbUEra3pVWmVtK1pRQktXcHJIaW1iNlVta0JUdllJN20za2hrR1VrVXFRZmV2RWRWdEhzcjZhM2tIelJzVk5lNlNEaXZMdkh0a0lkV1M0VWNUSmsvVWNmNFZwVGVwRTFvY1YzcXdvRGM5Nlp0eWFtUUFjMTBIT2FlbFc1bGFRYmlxWUc3SGV0ZDdLSm9WalhLaFczQWpybXMzU0pSNVRoRkxPeC9BRDYxcXkzRWR1bTZWd3Y5YTVLc201YUhyWWVuRlF1eWhkUVc5dXl5ek5KTTNSRVk1eldTUEx2dFhDRWJJbTRBVWRLNkFKOXBJa2tBMmpsVi94cXVtbmhOUk4xa1k3REh0VXFkdHk1MDNMYllwYWpDSUFxREpYSHlrblA0VS9UdjNXNDhqakZTNnRqRVJJemdtb0lwTXhrOTYycHR0YW5CaUlxTXJJV2MvSVNPUlZJSDVnVDJxWnljWXFzeDROV2pBU2VUTW00Y2NWVWZnMDZVa2tBMHc4aysxTVpiczh5U3hvTzVyVHVKR1l5REpDcWNBVlMwaVBOMkNmNFJtcjl3d01CTzBMazhDazk3RW1XN2ZPYUtobGI5NGFLc0NCQVpaY25xVFYrVlBtakNjSDd2NFZXczEvZTU3S0t1THpLeDlPQldUS1k4a1JvVDBBRlV5cnRJV1lMdVBZbnJVdHhKZ3FuVWRXK2xSNHk1YkJYME9hRm9yaWEwQkZrWnlUblBwbkZkcjRKanpmelNFNUtSQVorcC8rdFhHbzZsQ0ZKREU4Y1pycy9BMlE5NXU2NFFmenBQWUthOTQ3Nk04VktXNHF2R2FrTFZrZEl5VnNBazE1VHFyTGY2dmMzc2cyUUZ2bEJQM2dCZ1Y2YmVUcERieVN1d0NvcFlrMTVBN1MzY3dYSng2ZGhUV3gwNGRMbTFWeXg1cjNrbmx4NVdJZmVQcldnaWhGQ3FNQWRCVVVNU3d4aEY2Q3BSV0xaN2RPTFdyM0hacEdZS3BKNkRrMFpxS2I1d0kvN3g1K2xKR2pka0xBRHNMbjd6bmNmNlZKU0NnbWdTVmxZaXg1WWtjOXlXTlk4Si9lWi8yV1A2R3RPOGZiYXlmVEZaOWxFWmJqeXgzamIrVmRtSFhVOFhNNVdzaCttc0YxR0ZqeUZETWZvRk5TYWM1bDB0WWMvZWtlSC92cFF5LytQTFZXQW1MN1EvUXBBLzVuNWY2MGxoSWY3TnVkcHcwVTBVZ1BwMUgrRlRXVjVQNUhuUWVocWF2RkhkK0ZiYTcyano3V1h5V2J1VVlaQS9ETlkybVhCdDdpT1FIQmpjT1B3TlhiN1VGR21TeEtQM2QwNnZzQis0eTUzRDZjZ2lzNjFqK2JjaTV5T2hOYXAzRTlEMjNTM04yMzI1eGdPTVFxZjRVOWZxZXY1VnNLZUt4dER3Tklzd3JiaDVLOG52eFdzcHJuZTVwWW16VFNhVE5NWTBnR3l5ckdyTXhBQUdTVDJyemZWL0VsL3Irb2pTdElSMlNSdGlMR1BtbFA5QlhTK01ydDdidzVkTWhJWnNKa2VoUE5lYWVHZkVVbmhyeEhhNnRIRXN4Z1k1akp4dVVqQkdleHdhMXB4dnF5Wk03R2JWUEV2ZzR3UWE5WXVZcEIrN1p5Q1NCMkREZy9RMXRXUGpYUjd4Um01OGwvN3NveCt2U3VWK0lueElqOFoyOW5hMjFpOXRCYnNaQ1pHQlptSXgyNkN1Q1NVN3V0VzRKazh6UG9hMXZZTHBOOEV5U0w2bzJhdHExY1Q4UDdscGRBMnQveXpsWlI5T3Y5YTdKV3lLd2FzN0dpMkpjMEUwM05HUlNBUnE1YnhKR0duakpHUXlZUDUxMUJOYzc0aVg1WW0rb3BnYzJxQUhHSzZydzdIdHQ1SDlXeCtWY3lCelhYYU1telQ0LzlySnBzRWpWV241cU1VcFBGU0FGcWplUUtLUjJ3SzVid25hV2ZpM3hwcUZyZjNFd3RJVUxSMjZ6RmZNSU9QWDhhcUs1bUp1eG9hcDRuMDNURlBuM0tsLzhBbm1uek1md3JpN2o0aHpUWDhaamcyMml0a3B1K1p2cWY2VlcrSitpYWY0YzhWTlphWkl4aGFGWkdqWnR4alk1NHorQVA0MXd3a082dFZCRXVUUG9IVGRSZzFHemp1cmQ5MGJqSTl2WTFvQTVGZWFmRGkrY202czJKS2dDUlI2SG9hOUhqYXNwS3pzVW5kRG42VnhQajYyOHpUb0pRTTdKTUUreEgvd0JhdTFhc3JXTEVhaHAwOXNlTjY0QjlEMk5LTHM3amF1anhjcnRQSjRGUERCbzJJT1JSZVd6Mjl6SkZNQ3JveEREME5FRVhtTXFZR1dZTHhYVGZRNStYV3hiajFXUkxkSVlZeEh0VUF0MUpxczhyU01XZGl6SHVhWXlFU09jZktEaW1Wa2t1aDNYbGF6TFVOek5DZjNVakQyN0g4SzIybm5oOHRYQ09YOVBsNXhtc2ZUb2ZPdkVCKzZ2ekd0SFVwZGwxYWY3L0FQOEFXckthVGRqYW5KcUxaVHVwRXVGRWlMS3JiOFlZNUZLaS9LZWFSMTJyTVBTWVVnZmFNR3RZYkhIaU54WEdWejBxcksxWEZrQVVxT2pkYzFVbVhuaXJPY3FTTUN5L3JVZWVUanZTa1lsSzFQWXdHVzQ1R1ZYclRRTjJWelEwZ1k4NS9SYW11MjNLTzU2VTFRYll0RW93R1BYMXA2eGhuVUIxNkhJSjVvNWJ1NW56cXhqdXJiMjQ3K2xGYnZrYmVNaWlxSjlvWWxwdFNJc3hBeWU5VE1qUHV5ZG83QUg5YXk5eEpVRThDdFJueEFUL0FMTlpNNkdReGt5SzdNT1QrZ3BpTVNPVDkzcFU4T1ZqWlJqR001ejFxR0liaVFQWE5hRGFMTVFFVHJMSXJZN0h0WGFlRG1CbnZDT01oQ2YxcmgrVlRhNFlaNmM4VjF2Z3FRZmFMbFFNWlJUMTl6V00weHhXcDMwWjRwN054VmFOdUtlVzRyTTFSem5qT1dYK3pvb0l5UjVzbUdBN2dETmNqRkNzSzQvaVBVMTFYaWx5V3Rsei9lUDhxNWtubXBrK2g2MkJwcmx1T0ZPelVZTktEV1o2Q0pLWUI4NVkvUVV1Nmt6UU1kU0UwWnBwUEZBTXA2aStMY0wvQUhtQXFQU09iNWo2Um4rWXFQVTVQM3NVZnNUVHRNYllibVQrN0hYZmgxWkh6dVl5NXFqUlV1WHhEZHNQNG1WUDFKL3BUTkxuU0kzSG1ndEM2QkpGSFhCUFVlNE9EVExvN2JKQjNlVmorUUEvcWFnczhzMGlEcXlaeDY0T2Y4YVUwbW5jNVZwWWZmSVlyZ3hOZ21Na0VqdjcxZTB1TjVKb1VpWGM3NFZSNm5wVmorejMxbzJ4dFZYN1VSNWNpazQzWUhEZmtLN2Z3djRXR21NdDFja05jNDRRZEUveE5TcE8ydTVWdFRxTlBnRnJad3dEcEdnWDhoVjllbFFJTUNwUldUTEpNMDF1UlNab0pwQVluaVRUMjFMUmJtMlFaZGx5bjFISXJ4S2VOMGRsWUVNRGdnOWpYMEU0eUs1UHhCNE50ZFdrYTRoYnlMbHVwQXlyZlVWcENWdENaSzU1QWNtcFlZeVNLN0EvRDdWUE13SHR5dWZ2YmovaFhSNkQ0SHQ5T25XNHUzRnhNdktyajVWUHI3MW81cEVLTE5Ud2JwcjZib1VLU2pFa3BNakE5czlCK1ZkT25Tb0VYQXFZY0NzRzdzMFNzU1pwTTBtYVROSVlwTll1dnJtMFJqd0ZibjhxMkNhemJzTGUzQXQyQWFLUERTRDFQWWYxb1JwVGc1eXNqbUVpbGRmTVdDVXgvd0I3WWNWMkZodEZsRHNZTU5vNUZOd0IrRlJSSDdMZGhSeERObmpzci84QTEvNlZUT21yaGVTTjBhUU5CTk5EVUUxSnhXSXBUWGlHckc0MDdXYmxWZDRwVWtiREl4VThuMUZlM3ZYSWVLdkNxNngvcEZ1UWwyb3h6MGNlL3ZWd2xaaWtybzhtdUo1SnBHZVYyZDJPU3pISlA0MUhHdVdyYnVQREdxd3lGR3NKaWM5VlhJUDVWcWFQNEl2cnFaV3U0emJ3QS9OdSs4ZllDdHVaR2RtYlh3NnNIUkxtOVlZVjhSb2ZYSEpyME5EVkN5dElyTzNqdDRFQ1JvTUFDcnExenlkM2MwaXJJa0o0cUdRVkptbzM1cERPQzhhNlVGWmRTampVNStTVGp2MlA5SzViVG95MTh1VkEyZ3R4MzdWNnRxTnFsN1p6VzhnK1dSU3Byeml6dFd0cnFhTjg3aytVZzlqbXE1dmRhSFRoZWFJMHNoTmFPRDk0azQrdWF5R1FxeEJHQ0s2aU5BaVk5elZXYlQ0NVovTUpJejFIcldjYWxucWRzNk4wckZXMGlrdDdQemdtY25jeTV3U283Q3FGN2VMUElyb3BWVllzb0p6Z1o0R2E2TWdCTVk0eDBybDcyTllwNUl4OXdOa042RDByU25MbWVwbFZUaWxZMGJnOFRFZENVYXF1U3pjOUtuTURycGhkbUxGa0JHVDA1NEZOVkFWTGZsVndPYXZ1bU56d0Q2VTF6a1ZORkNYa0M0NDYxRE1NTVFPZ05XYzVuejhTNXF6cDBqQjIybkJOUnpnTW9CNmpta3NXRWJNZWFwRXkyTm9vZkwzbGllZWxScTRRNDJyazlDZTFSdGZFS05uOHFaRTZoaVpBR1VuazB6R3o2bHhKV0l5SHh6MG9walNRQnNDSGo2MFVYRlk1c0RMaXRDZkNXNVVjbkdCNzFuaXRJQWJ0M2ZHS3laMU1yMjh1RDgzS25yN2lwb1doRXpiZDVqemhTUnorTlZIQVNaaGc0enhpclVNMFl5VEdwejZjRVZaVzViRVVEUXNva1ludHU0QU5iSGcrUXg2c3lIamRFUjljRVZrNGpLcTVqZmJqcURWM1E1VEhyZHNlZHJFcmsrNHFaYkRXNTZURzFTRnFxeHZ4VWhiaXNHYW81enhRMzcrMjlOci9BTks1MG5tdWg4VERtMmZ0bGgrbi93QmF1Y0pxSkhzWU4rNE96U2cwek5MbXBPeTQvTkZNelJta080L09LYVRTRTAwbW1LVWpGMUNYZHFQKzZBdFdiZHR0amRFZFdLclZlOWpVckZkUjlIZGxmMllIL0RGWHRQZ054Q3NZT044eC9BQWNuOEJtdStrMG9YZlErWnhMYnFOOTJaV3BLMFJ0b200SWozRWY3eEovbGlvYmJ6RWtXYU00WkRsVDcxUHFFd3ZkVW1sVTRqM1lYMlVjQ3JWdlpTT0FTUExUdG5xYWptU2pkbWJXdWgxM2hDRlRxTFNpUENtRXlJY2ROeDVINFlJcnZZeGtkSzVMd2hDR0V6TXhNcVlUMjJrZGZya1YyMEZ1eEhTc2J0bWkwRVVjVTdtclNXamVsUDhBc1o5S0xEdVVzMFpxMjFxdzdWRTBCSGFpd1hLNU5NSXpVeGpZVTNZZlNrQkRzcHdYbXBOaDlLQXA5S0FCYWtBTkcxWTAzeU50WHArTlg3ZXpNc1ljS3d6MllZTk5LNFhLTzAwaEZhNDA4NDZVaDA5dlNueXNWekVtY1JSUEkzUlFTZndxbmF4bExkV2I3OG56dWZjMXZUNldaWTNqSU9IVWcvalhQM1Rham83STF6QXJSaHRxVERveDdaOUtGRm5YaFp4VDFMWGx2aklSc2ZTcTEyQ2JaeXYzMCtkZnFPYVkzaW01eGdSTG4zcXZiSFVOYnVYaWhaWXhqTWpoZUZCL3JWV08yZFNLaTdteEU0a2pWMTZNQVJVbUt0UWFaNUVLUktEdFJRby9DcGhZdDZWSEtlUzJqTVplS2lkYTJEWU5qcFZDN1dLMWNMTTJ3TjBadUZKOU0wY3BOeWlVOXFBZ0hhbGE1dDkyRmZlZjlnRnY1VWl5c3grUzJ1Ry80QmorZEZtTWtVWXA0RkNSM1RmZHNuL0YxRldVdHIzR2ZzT2YrMndvNVdLNUFFSm9hSW50V3hiMkR2R0drajh0dTY1emo4YW4vczcycDhnY3h6RXNaNllyaXRZaFdQVjUyVVlMS3BiNjRyMVdYVFJqcFhtL2lpSHlOZG5USDhDZnlxSnF5TjhQckl3cU0weDNDNUo2VUZ3RnpuajFySTlDNGp5cXBWU2VXT0JYT2FyQ2tOMnUzT01iams1NzFvUnovYWRSQkgzVkJ4VlRWdWJ3Wi91Q3RhYWFaeTFXbW1hVnZpZlQ0bEo0S0NoTGRaYlljZ01tUjlhWnBwenA4WHNNVXFDUXp5d3EyQXh6OTBuclZ3ZnZOR0ZlTjZhWXdnb2MrbFZKUG56NjFwWGRoY1d3WGVEODNxS3puVXFTYTFSd2xTZmdVbHFxdWo0eUNQU24zUTNLTURyVGJZZVcyMzE2MVNGTFl1UjJqREJQQ3QwcHB0WkhrWUlDVnpnbW5HZG1LODlLc1J5aGNsdU05elRNbTJVdDdwOHVPbEZXM2lEa05zNmlpZ0xuT2cxcG9jb3Ywckx6VnkxZmNoVTlSL0tzMmRESnZzL25zNnFQbTI3bC9DcXUwcElGNkhvYzFmaWtNVXlTZ1oybk9QVWQ2bXZiUkxtSTNWcWQyUHZMM29VcmFNRUpFMGlxR1ViMFhnZ0hnMUpaeWxiK0diQUdKRlBIYm1zMjJZcmtibUJQcFZsWkdPN0RIOGV0TmxIcUViOFZOdTRyTXNMa1hGbkRLRDk5QWYwcTN2ckUxTTN4SDVmOW03Mk9Da2lsZng0L3JYS2s4MXJlTUxuRm5CRUQ5NTl4L0NzWGRrQTFNMW9qMHNGTFJva3BjMUdEVHMxbWVpbU96UUdwdWFndDMzUE0zKzNpaXduS3pTTE9hZ2xsS000N0JOMVM1cWpmdVZWc2QwSS9VVlVWZG1kYVZvM0lkUFFYWG1XTG5IbmpLRTlwQjAvUHBWeVJaOUcwcHZPQVM2bXlpS0Rrb3ArOGZ4ckYzc256S1NHWGtFZGpVMTNlelgwcG5uYmM1R1BZRDJyWGxrM285T3A0ZFcxNzlTVFRiZVB6UzBtQ1ZHY2VsYUl2SWcrQmxoM0lIRloxaEdKMllNU1VBNkE5YTM0OU90SjdETVE4dWFQbG1IcG4wK2xaeWE1dFNFdE5EdnZBVmdrMm55M1E1OHlUQVBzby93RHJtdlFiZXhVRHBYSCtBbldLeW5zMWoyeDI4ekxHZTdEUFUvclhleGtZcmVLU0piR3Jhb08xTyt6UitsUzVwZDFYWVJXYTBVOXFxWE5tNEdJWVE1UGRtd0JXcG1qSW9zRnpuMjBpNmY3MDZSKzBhWi9VMUgvWUpQM3JtNGIvQUlIaitRcm8rS1RBcGNxQzV6bi9BQWo4UGN5bjZ5dC9qU0h3L2JnWkljQWNrK1kzK05kSVFLcWFpVUZoT3JPcWJvMlViampKSW81UXVZbW5hREZPd3Uya25VRTVoVVNuNVY5ZWU1cmRoc3BJc2JicDJIcElvYjllS3AyR3BpN3RZeloyMGpBRGFUSU5nVWpnam5uOUt2dy9hdCs2WjRndjl4RlA4elRzRnkxc1gwb01ZOUtUZFFYb0VOTUsrbFJUV2tOeEMwTTBhU1JzTU1yRElOUzdxaG11NG9SbDNBUHBRTXdYOExhTXVwd29MUTdXamRpdm1OaklLKy92VzViV0Z0YVFpSzNoU0tNYzdWRlpMYXZHMnN4ZnV6dFdGdWZxdy93cmFpblNaZDBiQWoyb0tjbTl4d2hYMHBmSlQwcGQxTHVvc1NVNXJlNWxrWlZrU0dMc1ZHV1A1OENxc3VoMlVpbnpvdnRCSXdXbU84bjg2MEo0ektBRm1raXgzUWptcVZ4RzF0Qzh6NmhPcUlNbklVLzBvc0JuMjFoNUZ5OWtmbVJWRHhIdUZ6akIrbFhrMDlmU29MU3kxQUY3cDd3Q2FVREt2RUR0VWRCeGoxNTk2dGlUVUl4ODBVRXYrNDVVL2thVmd1U0phS3ZhcDFpVWRxcS8ya2lIRnhGTEFmVjF5djVqaXJLU3BLZ2VOMVpUMEtuSXAyQWxDZ2RxUTRwdTZtbHFBRWt4WGxQamROdmlTWStzU2Z5cjFLUnE4dzhlRGJyb2IrOUF2NkUxblVYdW5SaDlKSEh2ZzVCNzFnM0VrMExQQnZPelBUMnJkWTgxbDZuRmtMS0IwNE5Zd2VwMlZFMnJvVFMxSmtkK3dHS3JhcWY5TUgrNkt2NmVteTJCL3ZITloycUgvVFArQWl0SS9FWVRWb0YvU216WktQUmlQMXF3Q2d1MU1rcm9oSE9BU09EM3hWSFNHemF1UFJ6VTl4SXlsSGpaMUt0Z2xPdEphU0puNzFJNldkN1cralpvNVZrQ3FCd2Y2ZHE1dTZqMnVZOFZvV2pTQkFmUEVxc01nN1FEVU41RVpHYVFjZ0R0V2kwUE9Sa1NwdVFxTTVIcFZWU3c2am9hdHlIWXg1cWt4SWtQT2NpcUtMVEZwUG4zS1BvTVZMRU54M2ZOMDZqbXN4SkhWempQMHJRdGJoVkc3cDdVN2ljVXdlWmxkZ29PM1BIMG9xNEx1RWpKSFAwb281aWVWSE1pckZzSTJIVERqdm5yVmJOQ3R0YjA1NjBqVm1qdFlmZGMvd0RBdWFWTGg0WkF3WXh2Mkk1QnFHR2NOdzNYMXFWMTNBWTZnNUZTSVNSM2tjc2tlekp5Y2RNKzFUbVVPNmZJeXFxNHlNWko3MUI1bVB2Z3I3OXFVU3BuNzRvWUhUK0hkUjh0VGJPU0VEZkx1N1YwKy9pdUIwbWFFWHlMS1I1Y255RTU2SHNhN2VLTXBHRkw3c2RDZXRKbzFpOURrdkZjNWsxRUoyalRING5tcTBUN29rUHFCVWVzemVkY3l5aitLUTQrZzRGTnRXemJwOUtpZXg2ZUY5MTJMUU5PeUtpQnBjMWxZN3VZU2VYeW9pMVJXSlBrWjdsaWFqdjNBdC9xd0ZTMnZGc251TTFWdERIbXZVdDVGZ21zN1Vtd0U5ODFlelZIVXVValB1YWNOeFYzN3JNdVJzTCtOSWpsM1VOakJwc3grWUNpSUV5S1IwQjU5cTZVdmRQR3FQM2pRdFovSVdUQStZbkFxN1pYVndKd0kzSmFUNU1Idm5pcXR4YWVTUE1qeXk0NUg5YXRhT1dUVUliZ2pFY1RnODk2d3NucUxVOWwwU1ZiZStqVGRnU1JCZnFWL3dEckd1MmhmSzE1aE8wOFZtYmlEUG1RL091UHB6WGFlSDlVL3REVDRua0FXWUxpUmZmdldrUVowUWFsM1ZYV1FVN2NLMEpKdDFMdXFIUHZSdXdNazBBVDdoVmVlN2l0d043Zk1mdXFCbG0rZ3FtMXpOY25iYVlDWndaMkhIL0FSMyt2U3BvTGFPQWxobHBHKzlJeHl6ZmpRSVhmZDNBNHhib2U1RzUvOEIrdExIWndSdjVoVXlTZjM1RHVQLzFxbHpVVnhjcGJSYjVDZXVBQnlXUG9CNjBESTdtRVFsN3FHVllYeG1UZjl4L3IvalZXTFVwYndoWkVleWpQOGI5WlA5MDlBUHJ6VXFRUGN1SnJzY0RsSWVvWDNQcWY1VmNZS3dLc0FRZXhvQVVUeFJSZ2VZdTBEQUpiTlZwOVh0NGxKREZ6NkFWRExwTnBJMlZEeEU5ZkxiQS9McFZXYlFMS2FKNDVXbmtEREhNcEdQeXhTQXg5WThheFd1WTFiTW5hS0w1bVAxOUt1YUZBK3Q2YkZmM0U3eHJKbjl5bkJHRGpCYXNDVHdVMm55czhDRzVoem5nZ1ArUHIrRmRGNFFrZGJLNnRYamFJdzNEYlVjWU8wNElPUHpvUmJTNWJwazdhSGF2cXJpTnBZMkZ1dnpCeVRrc2V1ZnBXUnErcFRlR0xtQVR1WkVsenRlSlRrQWYzbHJxSW16cWx3ZlNPTWY4QW9WY3g0bHRuMUhYRWdTQ1dVeDI0d1VIQUpZOVQwSFNoa3hWM3FhMmwrS2JTL2pVaVZHejNVL3pIYXR4SjQ1RjNJd1llb05jVHBIZ3VLRzZGM2ZiUzR6dGpROGY4Q1BldDlkSVdML2ozdTdpSWVtNE4vT2dIYStoZXY3aVczaTg1SllsVmVxeUtUdTlnUnpuODZ6bzd4N2k0amwxT0Y3UkY1aWpmbFNmN3hiMTlqMHE1RGFKR3drbGtlZVVkSGsvaCtnNkNySnd3S2tBZzlRYVlpVU1DTWdnZzlDS1hkV2FiUjdmTFdUaE04bUorVVAwOVB3cDBWK0drRVV5R0NZOUZibzMwUFEwQVh5YXF0WndseThZTUxuK0tNN2Z6SFExSnVvM1VBT2ozcWdWMzNzUDRzWXpUaTFSYnFSbW9BSkhyelA0amtMZTJqZ2pkNVI0K2pDdlJKSDk2OGY4QUhWNGJyeFJNZ09VaGhFWDQ5VFdjOWphbDhSa2xobW1TS3NpbFdHUWV0UlJ5YjRrYlBVVS9OYyt4MzN1S0FFVUtPQU9LdzlUT2IwK3lpdGttc2U5UXlYcHgzd0t1bjhSaFgwaVRhUWYzY28vMnMxWW1sQ0dRYmdDQ0dGU2lHSFQ3RWJSKzhrOWV0WlVyYnBDYXZsdks1emUzOTNsc2FVZDZpei9LVzJkK0tuazFSUkh0aFRsdXJHc2VQcHowcDZUYkF5aGVwR0NlMVZZNXJFZHhJWFBtSHVhcmI4R3BKbXdTS2hVYm16VklaUEV5c1JnWmJIYXJzRzBnNVhHS3JRS3FybnFmV3JVWUF5T3VhQUlKZHZtSDVSUlRaaWZOTkZJWmxVVStTSm8rVHl2cUtaVEFCa0gycVpMaDFHRHlQZW9hVUNnQ3dib2tmZEZRbHNuSUdCNlUzRktFUHBSWUNSRzJuMHJ2dFAxVVhXaXZPekR6STBJZjZnVndrTnVaRDF3QlY2TnphbzZJNUN5QWJ4NjBNYWRoYmxOOEtmTUJ0NjFBczd4SUVHT085SkxLV0dPMmFnWnU1cWJJMWRlVjdyUXMvYnBQYXBVdW1JQk9PYXpnY2ttcmNJR0FTTTBjcUY5WXFkeWFURTVWWERBQTlxdUFMSEdBdllWV1FaWUhuTldaSXlxWjlhTExZRlhxSjN1VmpkQU5ncitWUTNraXl4cnQ2ZzB5WVlhb1MzQm9VRnVhZlc1dFdlcFRtSHovQUlWSmIvZGFweXFTSDVoVFJENVRjRWtHdFl1eHp5bGQzTFZ2Y3ZGaGZ2SjZkeFhRK0hMVmRaMWlLend3andXZmpCSUhhdWVzMTNYS1o2RGsvaFhkZkRXRVRhMWQzSkgzSWVQcXpmOEExcVRwcmNGSjdIb2R2cHFoZHBVWXhqRlJUd3ZwVjBseEQ4c0w0VnNkRmJ0K0JIRmJLWUZGeEZIYzI3d3lydVJ4aGhTc1VQdEw1TGxBUWNPT3ExYkVnUFE1cmhKcng5SXY0N1M0ZGxrWS91cGUwZzdmalY5TlhrVnhJdkRIN3c3TjcwWHR1RmpydzlHN0l3ZVFheGJiV1laY0NUNUcvU3RGWmxZWlZnUjZpaE1WaTBHd01BWUhZVWI2ZzMwdS93QjZZRDVwMWdpYVJ6aFZGVjdlTjVKZnROd1AzbVBrVHRHUDhmVTFMa0hyelM3cUFKdDFMdXFIZFJ1b0FsM1Uwbk5NTFVtNmdCNXF2TloyOXhJSGtUTGdZREFrSDh4VHk5SnZwQVFmMmJhNzJiOTdsc2J2M3JjNDZkNm5odDRiY0ZZazI1Njg1SnBOOUtIcGdTZzRwYzFGdXBkMUF5VE5HYWozMG0rZ1JKdXFPV09PZUl4eW9IUTlRYVF0VFMxQUVHNmF5SDhVMEE5ZVhULzRvZnJWcEpsZEZkRGxXR1FhaUwwMHlBZEtCazVrcU5wS3BYRjlEYnJtU1FEMjcxajNmaVcyZ2gzdHdjNCtZNEEvR2syZ3NhR3M2ckhwbW5TM1RqZHNIeXFQNG03Q3ZIZFRhV1c3ZVNiQWxZYjJ4Nm5KL3JXbHJuaU81MUs2WjAzTkREMHg5M1BRbitsYzQxdzB5enlGaVc5U2M5cTU1U2NtYlVuRzl1bzZ5ZmRiTDdFaXJPYXp0T2I1WkI3aXJ1YWxyVTZvUDNSNU5Vd0VOOFRKOXdFRWdkVFU4Y25tS1NQVWlxNEtwY3M1R1RucFYwOXpIRVM5MGZxVnlacFY0MmdkS3pHWTFabll5U1pQV3E1WExZclZIQ1NyeUZYbW5PZ1hkbHNFWjRJNW9RRm40NjFETWNTa1p6OWFBSVpEbnJTUkRHYVZ6elNKMXBnWGJkY242RE5XbEdCVlcyYmFWSjZaNXEza0VNZmFrd00rUnYzamZXaWh4OHhvb0dWVW1La2s0SUk1QkhGTjJSTytRU3Fuc094cm81dEJzbnlJSlpGUGJjUXdyQ2tzbmlsa2pKRzVEZzFNWnhsc1FuY2c4bGcyQVIrTmExcGFXNjJUU1N4Q1NSdTJlZ3JNQ1NCZ3BHY25qRmFRazhxTUlDZW5QdlZsRlJnaWtsVkFIcFVUSEpwOGh5U2ZXbURtZ0NlTTdJaWU5TTNkY21semhRRDBxSmpRQU4xcU44VThuSnBqVUFJbzVGWEl1d3FtdFhJT2VEUUJvV3FndGlyRnlPQW82VkRhRUI4SDBxemV2ODZaR1BsNHFRTVc2SkRZcW9UeFZxNllHVnFxWjVOV2dIeDg5NmxmakZSUjllS2ZKOTdtZ0N4WnRpYys2bXZRUGhwTEZERGV2SklxbGlpakp4bkFKL3JYbThEWWxRMTEvaE00c0pHOVpQNkNxYjBIRmFucjhkMUVSeEluNTA1cnlCUnpLZy80RlhEUnprREdhbDgrcytZMXNiT3VOcCtwV2hoa2JkSXAzUnVGenRhc0I3aHJWOXJCbWd3TVNkU3YxOXZlcEdselRjMG03Z2tXSTdnTW9aV0RLZWhCcTNCZlN4SEtTTVB4ckVOdnNZdmJ2NVRFNUk2cWZxS1FYanhjVHhsZjl0ZVYvd0RyVWhuWFFhNjR3SlZEZTQ0TmFVV3EyMHYvQUMwMm4wYXVKanVGZGNvd1llb05TaWNpbW14V083V2RXR1ZZRWV4cDRrSHJYREpkTXZSaVBvYXV3YXhQSGpMN2g2TlZjd3VVNjRPRFM3Nnc0TmJoa3dKQVVQcjJyUVM0U1FaUmd3OWpUdWhXTGhlcWx4cUVVQklKTE1Pd3AzbUNxOXpieFhBK1lZYis4S0dDS1UrdFNuN2loZmZyVktUV2JrWkpsd1B3cDExcHM2S3hpQWw5QURnbXNLNjAvVUpXQ3ZDM1BPQU1xdjE5VFUyWldob3A0bm1ZL0krN251QU9QNzMwcXd2aUM1dWdzVUJHNXhrdHQ1VWV2MTlLeG85RHU1VDVhUmxWSnl6eWZ4bjM5aDZWMCttYVhEcDhZNU1rblV1M3JUU0ZjMUxScFJicjVwK2JIQTlCVSsrcWN0d3NLRjNZS1Blc2k1MXRqa1FqYVBVOWFiZGd0YzZMemFiNW85YTQxOVJtSjVsYjg2aWEra1AvQUMwYjg2WE1IS2RxWjFIVmgrZFFTWDhFWSthWlIrTmNZMTJ4L2lQNTFFMXlmV2x6RDVUcXA5ZGdRRUlDNS9JVmszT3R6eTVBYllQUmF3TG0vaXQxTFRTcWc5eldEZmVKVjJsYlVaUDk5dW40Q2syR2lPbHV0UVdOR2xsa3dvNUpKcm1icTZYVi9OTHlpSzNqWEtodXJkTzNyV0ExNWN6dXhhUjVOeHp6VEdMSVJsdk1Zam9HNmUxWnp1OUVaeWxmUkdxYjJMYTBVTEtpRTRKeGtuLzYxVXpqWmNZSXhrOVBwVUtScXlvNmdNL1JnVDNvaXdMZWNBNUc0OC9oVUtOaTZDOTRicHg1ay9Dcnp0dFVuMEZVTlBQenlEMkZUM1Q3YmR2ZmlxYTFPdUw5MFMzZmJhaGo3bW14NUpMazFHci9BT2pSb080eWFVWVZDV1BKNkN0SXEycHkxcDNzaU1rc3h4K2ROR2Z3cEJ5RFNweWNkcXN4Sm93ZDJSMUZRVGNsdTU5YXN4NEhKUElCcXJMdEl5QnpuclNBcnNjMDVLYXh5YWRIVEF2VytDUUNjQWlyR2NJeEhwVmFBWi9MaXArZHBIdFNBcE9mbk5GSko5ODBVRE8zVzQwdU1HWUZjNTVqUFUrMks1YTlqSnVYazJiZDdGZ0NlUUtzcjV1SnJoSVc4dzRDQTg0OVRXWk5KS0hJazNCdTROWTA0V2VobkZXRUpHNERwNjQ3MFRNQ2VPMU1qQmMrd3BaaUJ4MzcxdVdRbmswaTllS1RPYWZHTW1tTWZ5M0ZJVngxNU5Td0FtWlJqUFBTbjNRQjVBeGc0eDZWSWlrLzN1bE1ZMDlzZzFHNXBnS2c0cTViak5WVnExQmtVTUM5R09janRWaStPV1VnNStVVldROEdwTDFnUWhIR0JVZ1pVd0lKcXQzcXpQMHFzT3RXZ0pJeGswNS92VWtmclN2OTZnQ1MzZ1puUWo3dlVuMHJiMGlPNXRZbmxqWmxHY2tIN3BIMHFEUkVoblY3ZHdUSVR1VWVvNzEwNnhxbHVGSEsvd0NlYTU2dGR4ZGlYSm9iYmF2R3dBbkhsTjY5UitkYVNTcTZobFlFZW9PYXhIdEZBZDMrWStnb3RyYjdNUzZOZ2tmUUNvOXVyRnFxYndhamRWRVN1SThiaVdxdEZkWGNsenRDb0k5Mk1tcDl2ZTlnOXFhMitsM2NWbmk0Y2tEYUdQdFN0TEsrZU1ZNjg5S0ZYN2g3VXN0REZJZHdYYWY3eW5CL1NqWk12M0oyK2pqTlZvYnZxbmx0OG82NDRxMmpnaGMveERQc0swVmFQVXBWRU04MjlYK0dGaDdNUlI5c25UL1dXelk5VVlHblNYa1NTN1VRYzhaUElGWlZ4cWsrOW80WVJrSEc1enhSR3FtSE9qYmh2RmxYS09ENmp1S3R3M3NrUnlqRlQ3R3VPM1R5M0JtYVVvUndDbkZXWTlWdUlTd2tqRXFqdXZCcWxVVGRnVlJNN21IWEpsQURoWEg1R3JxYTNBMzMxWlQrZGNWYmFqSE9vYkRwempEQ3B4ZXhrNEVnSnppbjdSSjJ1UG1SMm45cldwLzVhZnBUVzFXMUgvTFEvZ0s1QjdrSmdieG4welRaYnRJU0E3RUhHY1lvOXNtN0N1anJIMXEzVWZLR1kvU3FzdXV5SE94QXZ1VG11WCszN25WVVFrc2NjMUw1KzRnYmdwenRPUjNxWlZrZ2NvbzBKN3lTWnR6dVdQdlZHZTlTTTRKTE9laUx5VFRMMkM1WUJZWkFCd0NWNi9XcWdodWJRdUJiS1J3ZHdibHY4YW1OYUw2Z3FrU3o5cHVHR1JiNCtyaW9aYnVlSlN6cEVvSGRwUDhBNjFVN2k0djIrNUVJMDQrYnFhcU5aVFN2dWN0SWV4WTk2MDU0OXkxSlBxU3ZyVnl6N1lvNDhmM3VhcHpYOTVLSDh5NU1hNE9DZ3huaXJxNlRja0JsUSt2UFNsazBLNDJJeEFLbE41VTgxTHF4dHVOeWpiYzVlUlo1SlNHRHMzcTJjMVBGcDdQakRFc0JrcnQ2VjExcG85c3hBZG1CSVhBSnp3ZXdxMDJpVzYzSWlqR1ZWUG5JUFgweldFc1F0a2NzcDZuQk1KUzIyTldiUEFPekJ4U3gyZWVPZk56akZkWExZUlJTT3FJU0ZHM2oxOWMxVWwwTUpPb2ZCZkc3eTA3anRUVlpCekdDMXUyM0todGgrWEpGTWFNd1JPQjh3WWRPNE5kakZwTU8xc3grU1R3b0J5T25lcXgwV1hlRWNCczg5YWFyUlpVYWxuZEhJV09WbWNFRWZLT0RVMTM4NnFnOWNtcGJ1QVEzYmVWSnZiSHpzZWdQb1BwVUhRa1p5ZTVyb2lyNm5SN1gzYkRWVUtQcFRHZkk2VTUzN0NveXAyYmlSak9Lc3dGejh2U25KeDBwb0oyNEhTbmdjQ2dDUlNBRDY5cXFPV0I1NDVxNEZLcWNyd1J4Vk9kZGhHVG5QdFFoa1I2MDlLanpUbHBnWGJja011T296VmdISVAwcXRCbnRuZ1pxd3BHMDU5S1FpbTZqZFJTdDk2aWdaMGw5cWFXZ2VLTXF6ZndvRjRCcm52TGx1Smk4aEpkamtrMUtra0taYmxtUGM4bWxTNlZaZDJNWnJPbkRsV2hDVmlDUWVUeDNxbzdsalU5M2NlZko4bzRxdVJqRmFvb0trUUdoWThqSk5UUm9RTTlxQUxOa2gzRmpuYXZXb3JvcjVwOWV0WExhSjJ0amhUOTcwNjFCUEFHSXoxSkl4NjBkUU0rUTVPZXRRdHlhbG1ReHlFYmNDb3U5QUVzYWZLS3NRSHJtcXlNUU1kcXNSRHJRQmNqNU5UMzBQazdWNzQ1cW5FU0NhdVhjclNMR3g1VXFPZmZ2U0F5SmpuaW9CVTAzM2pVSUZVZ0hJVG5pbk9mbTVwcU5zYW5NZDNQZW1BK0dWNDNESXhWaDBJcnJ0RjFpQ1F4eDNnQzRQM2owTmM1cE9sejZwY21LRWZkR1dZL3dpdFJkQXVGRGJWTFlPQVIwTmM5WlJlamVwTHRzem9sZTJNN041aFpRZmw5RFZobHRaUUdqQnpnOGRzMXlDUXpSdGdPMlFlZ3E1QmNYQ2xTekVqM0hGY2NxVnRtUTBkSDltVllpQU11eHdNZjU0cEJickdDckhkN2lxMGR3dmwvTU1aT1RuclVubmdwdTNBc2V4OUt5c3lTeUlsU01ERzVSem5wajJxeElMV1JSdVhZYzdpVHgvd0RyclBqYVE5Y05nNHg2VnA2WGVhaEF1b3RZWHh0dkpzcExwaDVNY25tZVdPRitjSEhVOGlpRU9hVm13U3V5S2VXeDhzeFJzRkRMempITkN0REhhb3h3NFVZR1IxOVRYVFNYK3V6NkRwTnpCcTFoYnZJSnhOSmNHMmlhUmxrd3B3NjhnREk0L0dzWFRyOUxEVGZFTi9kMjFuZnlIL1JqTEl4SWVTVjlyS3Zsa0xzMnE1K1VBOGNIRmJld1dtdWhYSVpWeVlOMjdLREJ5NDlmU3MzeUZZdXp1QVR5QU9jNXJ0dkVGL0xvR24yMGVpdTJubHI5bHVraE83NXhieE1WeTRKd0dZOFZuMzhjNytNdGZnc3ZEMFdyT3QwemVXVmwvZEQyRWJBWUpQZXRQWVcwdnFWeTJPZGV6aWlkQUd4bFFjUHhqSXowOUNEeFVVeGhoYkNGVzlTb3IwRFdiTFU1N0xScFc4RHgzRTMySlVsRHJjRXhiWFlLbkRaNFhCK2JKNXJtZEtzSUVtbjFyVW9vN2JTYk9jdExHdWZua0J5dHRHR0pabUp3RDZET2FIUmFkcjNEbDFNTGZoemxXVVoybklJd2ZUNjFLYmlDTzNZRURKOXVUWFM1YjdmcWVrYTdQSEhOcWF4M2x4Smc3YkM3Y2xvd3g5QUdDdDdNUFNwL0Q5dGNhRkQ0aWE2c3JvWDlvdHVpaTBXTjVVM08zeklYVmh0SXdkMk9sRHBYbGJvRnRUa1ZiYW05eHh3QVhHTWZTcFk1L09sVURqc04zUFQ2MTZJTEpyZVl3eDY1YzIybzMxOE5sN2VXYVhGd3kvWlVsOHNzY2JOdVQwSHRYRzJjKzZ6MSs5czlRaXY0ekEwOHNkL0RKSExjb1NwODBkZHJLN2pIelo0NllOTjRlM1VIQWpnamFNckt3QjNQbmI5UnhUSlJBRVZVWXUyUzBqT2Y4L2xYYWtYOWpmYVRGYWVFN3JVbzdTQ0ZZZFE4NS9uRGdNVHdwWDVDemJjbjVjZHE0blZZSUxMVXRRc0xmNW9yVzdsaWpMdHVKQWM4azl6Nm1zNmxCclc1TGkwUXgzaVNXanFOb2tMRWdqUDNmVCtWTW1lYVc3RFFUL3ZYWUtFR2VudjZDbVJ4eE95WjNCczViYVA1Vkp4bmJHb0E1eVQxSXJOcExZVnhrYzl4c1dJZ0hJTzRua2pIZXJWcEhJakp4a1orNjQ2MUdpK1JJQXhKSFUxY2prMy9BTHhUMDZETlMyRng4aVNBTG1UcjJIYWtFaXdrTmtram9DT0JUY014T1RnbjFwaEp3Mk1udHpVMlFpMWEzY1BuZ3pBZ2trRXFPS21Na1VrN3J2SUJCQlA5YXpWT0RoZ0FGNURkajdWRzh2ek1wQkhwVTh0eFdOQzVqRW9MUktBblg2MVJFcUl3MnVGWk1ybjJQYWs4NHFVWGN3d3VUanB4VmR5WkU4MDhzYzRBNkdxU0dMTHFLeEJnWFBCN2Qvd3JMdmRmbitaWVMwZTdyZzhuOGFZOGR4NXhkcmFNYnVqRnNpbGtzamNGUXp3YmljSENuajJycGhHTWRXV2trWVR5NWZHY3NUMHFZV2sza0dWb25DSGdOaml0R2JSbzJrRWhuVTg3UXFMNlZKRkFWZGtsV1NSZHA4c0syTm85Y1lyb2RWVzBLY2pHa2greXk3c0IwR092dUtZNFZrWTdsK1k1MmoxclJUeVduV080a0NMdjI1QTNZcHQ5cExXenNVZFpsNmhsN2lpTTFlekJHY3VXWUtCeFYrenRETytjWkFxdGIyN3lFbFY1UDZWdG9FczdiYklTb0k1UGMxbzVJcTVVdkxVUVJPK1NkdzQ5cXlia3JJZ0czR0IxOTYxbXU0cFZLTVdJd2VLcXJiUlhHZnZKeng2VktsM0F4eEhucFQxV3RSTkxiYVQzcU9XeGtpYmtmbFZxYWV3WEk0R0NwMDV3UWZwVDFPYzRGUkJTdVFSVDBQU21CR2V0Rk9lUExFMFVBVWYzbUNSbkhmRkM3czhIbjFycWRaVll0TWwyQUxrZ2NWeTFFWmN5dUpDNHh3S0I2bW5JSzFEYlEvWmkyem4xeWFwdXcyN0djTXRnWnE5QmJ0Y1NMR2dPMzFxcmJnYmp4Vy9aZ0xGd01WRFlGbU9HT0pWUVk0SFgwckR2WlF0d2RoSHlIZ2lyVi9OSXNKQWNqSXJKbDZyUkZBUnl2NW1ja2ttb2xqSlBTcDBVWkhGYXR2REdZODdCVGJzSzVqaU1xUnhVZ0JVOFZlbmpSWElDZ1ZXY0RJNHBKM0dJbWVvNHEwc1praGM3ajhnM0FmenFzT3RYN0VCaElDTS9MVkFVM3N3alJ5elpNTEg1aXZVVnROb05nOW1IUjNMTjh5dXZwOUt4Mlp0b1hKd0Qwcm83Q1YyMDhNekVuMXJuck9VYk5NbG5PWFdqU3c3bVFoMEhROUtwZlo1a0c1bzIybnZpdTNqUlczYmdEeFViUXhzQmxBZWFVSzhyRXFUT2QwbStleGtkbzNLNUhUSFd1bHN0Vml1WTNpeVEyY2dBWUgxcWxmV2x2ODcrVXU3UFdzL1RsSDJqcDNwVklxY2VkN2xOSm5Sa3hGY2VXdTdPYzRxT1JKUDdpcUNlQUJ4VW9SUStjQ3JFYXJzUEhhdUs1bVp6WkkrYmtpamNGNmNIMnJSS0w5bGR0b3o2MVFQRFVKM0VTeHZ3Y3NUL0FEclYwbTgweTFpMUZMK2U4ak56YVNXcStUYkNVQU9COHhPNGRNZFAxckZIRzZwRUpNZU0xY0haM0dtYmQ3ZGVIN3l4MDIyYSsxSlRaTE1wYzZjQ0g4eHczVHpPTVl4VGRKMXV5MFkzY2krZHFNYnVGaXNKN1lKSEx0QUt5eUU3Z20wazRDNVk0N0ExakVZak5FZGFPdGIzckZYT2d1N2pROVhzZ2gxQzYwK1k2aE5leXJkVzdUN2pLcWh0cng5UUNEaklCOXFwWHcwaldkZDFhL24xUzRza251MmVBSll5U0YwNCtZN1NOdlRvYXkzWXFlRGltTVRnODBLdnpib2Q3blE2aXZoNi90Tkx0ejRndjArdzI1Z0pPblRFT1N4YlAzdU91UHdxbG9qNkJwZXRTM04yOXpQRmFxVHA4bjJNbFRMamgyakxaQUI3WjV4eldVZnVVdjhBQlRkZlc5Z3YxTjNTdFMwUFR0UW1sdXJ6V2I5YnNPbDZHczBRVEIrV0xFeTV5RDh3SUdRUnhWTk5VaTByVDlRc2RJdTdwcDdpOFVHN2lMUkI3ZUlOdHd3SWJMRmh4eHd0VW5WZGljQ29IK1U4Y1VmV0crZ1hPa3RkWnQ0ZFowdVVtOC9zK3hNMHNseGNndk5jU3lJVmFSZ0N4QTRWVkdTUUJ6V1o0WHVMRFR5OE9zUTNMMmx6WS9aWkZneHV5U2g2OWg4cHlSelZKSkhYNVF4QUs4ajFxekhHalc3TVZCT0R6Uzl2SzVQT3piVFVOTmp1RzB5RzdrdDlKRmpkMjhkeVlaQ0hsbklKY0lQbTJEYUVHZVRnbnZYUDNrRmpEZlN4YVkwa2xsR3Fxa2pLVU1qWUc4aFR5QVd6Z0huRlNub0Q2VTBjSTFFcTkxYXhWN2tVRUxOSUJ1eDYvd0NGWE44Y0tBYlFjblBQZi82MVYwSjJPYzFYZG1KWGs4Q3NXN3NrbmVWbnl6NElQYitsT056dGl3cUEvalZja2tFWm9mN29GT3dXSkRPekRKd2VLY1pKRzJqSEMrbFY0U2NkYXNJZVdOTm9CZHpaNU9SUVdNbUJrOGNDa3o4b3FhUDErbExZUkJJSlYrVlNDVHhWZC9PQzQyNFZmUTFyd0tyU01TTS9OVVVpcnp4MUZOUFVhTW43UXpiUmtBQW5rODFHR2tpa0NoQnVZY2Q4ZTlXSmxWYmxsQUFIcFRSOTB0M3gxclN5R1ZHbGxRN1dCSjZqSTYxV1NTNGpuazJGMWpkZHBVZWxYbStiWXh5VG5yVXR3U3JIYWNjVlNZeGtVVnRIYkZsaDN6SHN3NlZEc1R5aXNwYjgrVFZxQTlQclZMVTJLbGdEam1pS3ZJRXRTVUJyWkNzY1hsaGx5anVQdmUxWjBzRnhMT1ZrSktqK0lkS1pESTd3amN4YkI3bjJyWGdVQzBqZkh6TjFQclY4eml3dll6WWJTTU1ja25IdGlyOEZ2RTN5dWNJVGduSEswTjkwMHlJa2Q2WE0yUGNWMDh0eWhjTUZPQVFPdE5sWVNNZWVLYTdISjU3MUFSeitOT080RXhSWFVnNDNIcnhXZExheUk1d01qcm10SzJHV3JTZEZNVGNDdFl2VWFaeXhENTZVVmVhTk54K1VVVnBjWi8vWicsXHJcblx0XHRdLFxyXG5cdFx0dmlkZW9TcmM6ICdodHRwczovL2RjbG91ZC1pbWcub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9ndWlkZS91bmlhcHAvJUU3JUFDJUFDMSVFOCVBRSVCMiVFRiVCQyU4OHVuaS1hcHAlRTQlQkElQTclRTUlOTMlODElRTQlQkIlOEIlRTclQkIlOEQlRUYlQkMlODktJTIwRENsb3VkJUU1JUFFJTk4JUU2JTk2JUI5JUU4JUE3JTg2JUU5JUEyJTkxJUU2JTk1JTk5JUU3JUE4JThCQDIwMTgxMTI2Lm1wNCcsXHJcblx0XHR0aW1lOiAnMjAxOS0wNC0xMCAxMTo0MycsXHJcblx0XHR0eXBlOiAyLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDUsXHJcblx0XHR0aXRsZTogJ+e7p+WbvemAmuWAkuS4i+WQju+8jOWPiOS4gOWFrOWPuOaUvuW8g+W/q+mAkuS4muWKoe+8jOabvueguDIw5Lq/5oiY4oCc5LiJ6YCa5LiA6L6+4oCdJyxcclxuXHRcdGF1dGhvcjogJ+WFqOeQg+WKoOebn+e9kScsXHJcblx0XHRpbWFnZXM6IFsnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4OTIwMDQ2MDUsMjE3NDY1OTg2NCZmbT0yNiZncD0wLmpwZyddLFxyXG5cdFx0dmlkZW9TcmM6ICdodHRwczovL2RjbG91ZC1pbWcub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9ndWlkZS91bmlhcHAvJUU3JUFDJUFDMSVFOCVBRSVCMiVFRiVCQyU4OHVuaS1hcHAlRTQlQkElQTclRTUlOTMlODElRTQlQkIlOEIlRTclQkIlOEQlRUYlQkMlODktJTIwRENsb3VkJUU1JUFFJTk4JUU2JTk2JUI5JUU4JUE3JTg2JUU5JUEyJTkxJUU2JTk1JTk5JUU3JUE4JThCQDIwMTgxMTI2Lm1wNCcsXHJcblx0XHR0aW1lOiAnNeWIhumSn+WJjScsXHJcblx0XHR0eXBlOiAzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDYsXHJcblx0XHR0aXRsZTogJ+WllOmpsOi9puS4u+WTreiviee7tOadg+e7re+8muWPjOaWueWGjeasoeWNj+WVhuaXoOaenCcsXHJcblx0XHRhdXRob3I6ICfnjq/nkIPnvZEnLFxyXG5cdFx0aW1hZ2VzOiBbXSxcclxuXHRcdHRpbWU6ICc15YiG6ZKf5YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNyxcclxuXHRcdHRpdGxlOiAn6Z2g6LeR6L2m5r+A5Y+R5r2c6IO977yM5aWU6amwUHJv6LeR6L2m6aaW5rWL77yM5oCO5LmI6YKj5LmI5YOP5oSP5aSn5Yip6LeR6L2m6K6+6K6hJyxcclxuXHRcdGF1dGhvcjogJ+i9puWTgScsXHJcblx0XHRpbWFnZXM6IFtcclxuXHRcdFx0J2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT0yMTMzMjMxNTM0LDQyNDI4MTc2MTAmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz00RkI0MkJDNTVFMkEyNjA3NkIyRDEzMDEwMzAwNjBDNicsXHJcblx0XHRcdCdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9MTI3NjkzNjY3NCwzMDIxNzg3NDg1JmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9NEZCMDJGQzQwQjAwMDY0MzMyQUQ0NTE3MDMwMEQwQzcnLFxyXG5cdFx0XHQnaHR0cHM6Ly9zczEuYmFpZHUuY29tLzZPTlhzamlwMFFJWjh0eWhucS9pdC91PTE5MDkzNTMzMTAsODYzODE2NTQxJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9MjVGNjdFODQ0QzAwMjQ0NTQzN0RFODgxMDMwMEUwRDMnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcyMDE5LTA0LTE0IO+8mjEwOjU4JyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogOCxcclxuXHRcdHRpdGxlOiAn56iL5bqP5ZGY5rWq5ryr6LW35p2l5pyJ5aSa5Y+v5oCV77yM55yL5a6M6L+ZM+auteS7o+eggeecvOedm+a5v+a2puS6hiEnLFxyXG5cdFx0YXV0aG9yOiAn6L2m5ZOBJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cDovL3AzLXR0LmJ5dGVjZG4uY24vbGlzdC9wZ2MtaW1hZ2UvMTUzOTQ5OTM5MzQ3ODRhZWVhODJlZjUnLFxyXG5cdFx0XHQnaHR0cDovL3AxLXR0LmJ5dGVjZG4uY24vbGlzdC9wZ2MtaW1hZ2UvMTUzOTQ5OTM5MzM4NTQ3YjdhNjljZjYnLFxyXG5cdFx0XHQnaHR0cDovL3AxLXR0LmJ5dGVjZG4uY24vbGlzdC81MDlhMDAwMjExYjI1ZjIxMGM3NycsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzIwMTktMDQtMTQg77yaMTA6NTgnLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5dXHJcbmNvbnN0IGV2YUxpc3QgPSBbe1xyXG5cdFx0c3JjOiAnaHR0cDovL2dzczAuYmFpZHUuY29tLy1mbzNkU2FnX3hJNGtoR2tvOVdUQW5GNmhoeS96aGlkYW8vcGljL2l0ZW0vNzdjNmE3ZWZjZTFiOWQxNjYzMTc0NzA1ZmJkZWI0OGY4ZDU0NjQ4Ni5qcGcnLFxyXG5cdFx0bmlja25hbWU6ICdSYW50aCBBbGxuZ2FsJyxcclxuXHRcdHRpbWU6ICcwOS0yMCAxMjo1NCcsXHJcblx0XHR6YW46ICc1NCcsXHJcblx0XHRjb250ZW50OiAn6K+E6K665LiN6KaB5aSq6Iub5Yi777yM5LiN566h5LuA5LmI5Lqn5ZOB6YO95Lya5pyJ55GV55a177yM5a6i5pyN5Lmf6K+05LqG5Y+v5Lul6YCA6LSn5bm25LiU5ZWG5a625om/5ouF6L+Q6LS577yM5oiR6KeJ5b6X6Iez5bCR5oCB5bqm5bCx5Y+v5Lul57uZ5LqU5pif44CCJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3JjOiAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjM5NjA2ODI1Miw0Mjc3MDYyODM2JmZtPTI2JmdwPTAuanBnJyxcclxuXHRcdG5pY2tuYW1lOiAnUmFudGggQWxsbmdhbCcsXHJcblx0XHR0aW1lOiAnMDktMjAgMTI6NTQnLFxyXG5cdFx0emFuOiAnNTQnLFxyXG5cdFx0Y29udGVudDogJ+alvOS4iuivtOeahOWlveaciemBk+eQhuOAgidcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0YWJMaXN0LFxyXG5cdG5ld3NMaXN0LFxyXG5cdGV2YUxpc3RcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3ZmZjZWQ1JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI4NTEyZmIxOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdmZmNlZDUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLmRyYWdcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wid3JhcFwiLCBcInRhYi1iYXItc2Nyb2xsXCJdIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2Nyb2xsZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNjcm9sbFwiXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsRGlyZWN0aW9uOiBcImhvcml6b250YWxcIiwgc2hvd1Njcm9sbGJhcjogXCJmYWxzZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKHRhYkJhciwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHQsXG4gICAgICAgICAgICAgICAgICByZWY6IHRhYkJhci5pZCArIHQsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLWl0ZW1cIiwgXCJ0YWItYmFyLXNjcm9sbC13aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlKHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRhYi1iYXItdGl0bGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0udGFiSW5kZXggPT09IHQgPyBcImFjdGl2ZVwiIDogXCJcIl1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFiQmFyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ3cmFwXCIsIFwidGFiLWJhclwiXSB9LFxuICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24odGFiQmFyLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IHQsXG4gICAgICAgICAgICAgICAgcmVmOiB0YWJCYXIuaWQgKyB0LFxuICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLWl0ZW1cIl0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZSh0KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRhYi1iYXItdGl0bGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLnRhYkluZGV4ID09PSB0ID8gXCJhY3RpdmVcIiA6IFwiXCJdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFiQmFyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgXSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGRpdiB2LWlmPVwiZHJhZ1wiIGNsYXNzPVwid3JhcCB0YWItYmFyLXNjcm9sbFwiPlxyXG5cdFx0XHQ8c2Nyb2xsZXIgY2xhc3M9XCJzY3JvbGxcIiBzY3JvbGxEaXJlY3Rpb249XCJob3Jpem9udGFsXCIgc2hvd1Njcm9sbGJhcj1cImZhbHNlXCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ0YWItYmFyLWl0ZW0gdGFiLWJhci1zY3JvbGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0di1mb3I9XCIodGFiQmFyLCB0KSBpbiB0YWJCYXJzXCJcclxuXHRcdFx0XHRcdDprZXk9XCJ0XCJcclxuXHRcdFx0XHRcdDpyZWY9XCJ0YWJCYXIuaWQgKyB0XCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImNoYW5nZSh0KVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWItYmFyLXRpdGxlXCIgOmNsYXNzPVwiW3RhYkluZGV4ID09PSB0ID8gJ2FjdGl2ZScgOiAnJ11cIj57e1xyXG5cdFx0XHRcdFx0XHR0YWJCYXIubmFtZVxyXG5cdFx0XHRcdFx0fX08L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2Nyb2xsZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwid3JhcCB0YWItYmFyXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cInRhYi1iYXItaXRlbVwiXHJcblx0XHRcdFx0di1mb3I9XCIodGFiQmFyLCB0KSBpbiB0YWJCYXJzXCJcclxuXHRcdFx0XHQ6a2V5PVwidFwiXHJcblx0XHRcdFx0OnJlZj1cInRhYkJhci5pZCArIHRcIlxyXG5cdFx0XHRcdEBjbGljaz1cImNoYW5nZSh0KVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRhYi1iYXItdGl0bGVcIiA6Y2xhc3M9XCJbdGFiSW5kZXggPT09IHQgPyAnYWN0aXZlJyA6ICcnXVwiPnt7XHJcblx0XHRcdFx0XHR0YWJCYXIubmFtZVxyXG5cdFx0XHRcdH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuY29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0ZHJhZzoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0dGFiQmFyczoge1xyXG5cdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRhYkluZGV4OiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0d2F0Y2g6e1xuXHRcdHRhYkluZGV4KG5ld1ZhbCl7XHJcblx0XHRcdHRoaXMuY2hhbmdlKG5ld1ZhbClcblx0XHR9XG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YXN5bmMgY2hhbmdlKGluZGV4LCBlKSB7XHJcblxyXG5cdFx0XHRsZXQgcmV0ID0ge1xyXG5cdFx0XHRcdGluZGV4OiBpbmRleFxyXG5cdFx0XHR9O1xyXG5cblx0XHRcdHRoaXMuJGVtaXQoJ3RhYkNoYW5nZScsIHJldCk7XG5cdFx0XHRjb25zdCBlbCA9IHRoaXMuJHJlZnNbdGhpcy50YWJCYXJzW2luZGV4XS5pZCArIGluZGV4XVswXVxuXHRcdFx0bGV0IGVsU2l6ZSA9IGF3YWl0IHRoaXMuZ2V0RWxTaXplKGVsKTtcblx0XHRcdGlmIChlbFNpemUubGVmdCArIGVsU2l6ZS53aWR0aCA+IDc1MCkge1xuXHRcdFx0ICAgIGxldCBpZHggPSBpbmRleCAtIDQ7XG5cdFx0XHQgICAgbGV0IG5ld0VsID0gdGhpcy4kcmVmc1t0aGlzLnRhYkJhcnNbaWR4XS5pZCArIGlkeF1bMF1cblx0XHRcdCAgICBkb20uc2Nyb2xsVG9FbGVtZW50KG5ld0VsLCB7fSk7XG5cdFx0XHQgICAgcmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsU2l6ZS5sZWZ0IDwgMCkge1xuXHRcdFx0ICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQoZWwsIHt9KTtcblx0XHRcdH1cblx0XHRcdFxyXG5cdFx0fSxcblx0XHRnZXRFbFNpemUoZWwpIHsgLy/lvpfliLDlhYPntKDnmoRzaXplXG5cdFx0ICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHQgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvbS5nZXRDb21wb25lbnRSZWN0KGVsLCBvcHRpb24gPT4ge1xuXHRcdCAgICAgICAgICAgIHJlcyhvcHRpb24uc2l6ZSk7XG5cdFx0ICAgICAgICB9KVxuXHRcdCAgICB9KVxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi53cmFwIHtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuXHRib3JkZXItY29sb3I6ICNlZWU7XHJcbn1cclxuLnRhYi1iYXIge1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG4uc2Nyb2xsIHtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnRhYi1iYXItaXRlbSB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGFiLWJhci1zY3JvbGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxNTBweDtcclxufVxyXG4udGFiLWJhci10aXRsZSB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRjb2xvcjogIzMwMzEzMztcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYWN0aXZlIHtcclxuXHRjb2xvcjogI2VjNzA2YjtcclxuXHRib3JkZXItY29sb3I6ICNlYzcwNmI7XHJcbn1cclxuPC9zdHlsZT5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcInRhYi1iYXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwic2Nyb2xsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidGFiLWJhci1pdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGFiLWJhci1zY3JvbGwtd2lkdGhcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBcIlxuICB9LFxuICBcInRhYi1iYXItdGl0bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5MFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzAzMTMzXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2VjNzA2YlwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWM3MDZiXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fSlcbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc1M2RlZWEmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIwNDY2NWY2NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI3NTNkZWVhJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJtaXgtbG9hZC1tb3JlXCJdLCBvbjogeyBjbGljazogX3ZtLmxvYWRpbmcgfSB9LFxuICAgIFtcbiAgICAgIF92bS5zdGF0dXMgPT0gMVxuICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICByZWY6IFwibG9hZGluZ0ljb25cIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtaXgtbG9hZC1tb3JlX19pY29uXCJdLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvbG9hZGluZy5naWZcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1peC1sb2FkLW1vcmVfX3RleHRcIl0sXG4gICAgICAgICAgY2xhc3M6IHsgXCJtaXgtbG9hZC1tb3JlX190ZXh0LS1kaXNhYmxlZFwiOiBfdm0uc3RhdHVzID09PSAyIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHRbX3ZtLnN0YXR1c10pKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cIm1peC1sb2FkLW1vcmVcIiBAY2xpY2s9XCJsb2FkaW5nXCI+XHJcblx0XHQ8aW1hZ2UgXHJcblx0XHRcdHJlZj1cImxvYWRpbmdJY29uXCIgXHJcblx0XHRcdGNsYXNzPVwibWl4LWxvYWQtbW9yZV9faWNvblwiIFxyXG5cdFx0XHRzcmM9XCIvc3RhdGljL2xvYWRpbmcuZ2lmXCJcclxuXHRcdFx0di1pZj1cInN0YXR1cyA9PSAxXCJcclxuXHRcdD5cclxuXHRcdDwvaW1hZ2U+XHJcblx0XHQ8dGV4dCBjbGFzcz1cIm1peC1sb2FkLW1vcmVfX3RleHRcIiA6Y2xhc3M9XCJ7J21peC1sb2FkLW1vcmVfX3RleHQtLWRpc2FibGVkJzogc3RhdHVzPT09Mn1cIj57e3RleHRbc3RhdHVzXX19PC90ZXh0PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIm1peC1sb2FkLW1vcmVcIixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHN0YXR1czoge1xyXG5cdFx0XHRcdC8vMOWKoOi9veWJje+8jDHliqDovb3kuK3vvIwy5rKh5pyJ5pu05aSa5LqGXHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHRcdFx0J+S4iuaLieaYvuekuuabtOWkmicsXHJcblx0XHRcdFx0XHRcdCfmraPlnKjliqDovb0uLicsXHJcblx0XHRcdFx0XHRcdCfmiJHkuZ/mmK/mnInlupXnur/nmoR+J1xyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5taXgtbG9hZC1tb3JlIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdH1cclxuXHJcblx0Lm1peC1sb2FkLW1vcmVfX2ljb24ge1xyXG5cdFx0d2lkdGg6IDM2dXB4O1xyXG5cdFx0aGVpZ2h0OiAzNnVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJ1cHg7XHJcblx0fVxyXG5cclxuXHQubWl4LWxvYWQtbW9yZV9fdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICNhYWE7XHJcblx0fVxyXG5cclxuXHQubWl4LWxvYWQtbW9yZV9fdGV4dC0tZGlzYWJsZWQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGNvbG9yOiAjYmJiO1xyXG5cdH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJtaXgtbG9hZC1tb3JlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHJweFwiXG4gIH0sXG4gIFwibWl4LWxvYWQtbW9yZV9faWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM2cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWl4LWxvYWQtbW9yZV9fdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcIm1peC1sb2FkLW1vcmVfX3RleHQtLWRpc2FibGVkXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2JiYmJiYlwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInl0aWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwieXRpY29uXCJcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhZ2UtaGVhZGVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlYzcwNmJcIlxuICB9LFxuICBcInBhZ2UtaGVhZGVyLXdyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwicGFnZS1oZWFkZXItbGVmdFwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9LFxuICBcImxvZ29cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlci1jZW50ZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJzZWFyY2gtaW5wdXRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlci1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjb250cmlidXRlLWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDRcIlxuICB9LFxuICBcImNvbnRyaWJ1dGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInNsaWRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJsaXN0LWNvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwibG9hZC1tb3JlLXdyYXBwZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibmV3cy1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMDMxMzNcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0NlwiXG4gIH0sXG4gIFwiYm90XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcInRpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcImltZy1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndpZHRoXCI6IFwiMjIwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDBcIlxuICB9LFxuICBcImltZy13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjE0MFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiaW1nXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImltZy1lbXB0eVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwidmlkZW8tdGlwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwiaW1nLWxpc3QxXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogXCIzMFwiLFxuICAgIFwidG9wXCI6IFwiMjRcIlxuICB9LFxuICBcInRpdGxlMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0MFwiXG4gIH0sXG4gIFwiYm90MVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcImltZy1saXN0MlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjMwXCIsXG4gICAgXCJ0b3BcIjogXCIyNFwiXG4gIH0sXG4gIFwidGl0bGUyXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIxMFwiXG4gIH0sXG4gIFwiYm90MlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiXG4gIH0sXG4gIFwiaW1nLWxpc3QzXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzAwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBcIlxuICB9LFxuICBcImltZy13cmFwcGVyM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjRcIlxuICB9LFxuICBcImltZy1saXN0LXNpbmdsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjQwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBcIlxuICB9LFxuICBcImltZy13cmFwcGVyLXNpbmdsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNDBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9