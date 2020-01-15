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

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-24220191115004","_inBundle":false,"_integrity":"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz","_shasum":"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bcf65737c5111d47398695d3db8ed87305df346e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-24220191115004"};

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!D:/uniapp/youqu-web/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 26);



function injectStyles () {
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

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "c0a51a5c"
  
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/pages/nvue/nvue.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=template&id=253a85ff&mpType=page ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./nvue.nvue?vue&type=template&id=253a85ff&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_template_id_253a85ff_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 11 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=template&id=253a85ff&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./nvue.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  'data:image/jpeg;base64,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'],

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 26);



function injectStyles () {
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

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "40e8f0e2"
  
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/components/tab-nvue/tabbar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=template&id=77ffced5& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./tabbar.nvue?vue&type=template&id=77ffced5& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_template_id_77ffced5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 18 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=template&id=77ffced5& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./tabbar.nvue?vue&type=script&lang=js& */ 20);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./tabbar.nvue?vue&type=style&index=0&lang=css& */ 25);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_tabbar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/tab-nvue/tabbar.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 26);



function injectStyles () {
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

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "941ece5c"
  
)

injectStyles.call(component)
component.options.__file = "uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/*!******************************************************************************************************!*\
  !*** D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=template&id=b753deea& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mix-load-more.nvue?vue&type=template&id=b753deea& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_template_id_b753deea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 29 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=template&id=b753deea& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mix-load-more.nvue?vue&type=script&lang=js& */ 31);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./mix-load-more.nvue?vue&type=style&index=0&lang=css& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_mix_load_more_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/components/mix-load-more/mix-load-more.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./nvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 35);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_nvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!D:/uniapp/youqu-web/pages/nvue/nvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL21haW4uanM/M2ZkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMuanNvbj9lNzE1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzLmpzb24/ZTFmNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9tYWluLmpzPzI5YWMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvQXBwLnZ1ZT80ZDY1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL0FwcC52dWU/YzhlNCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT85NDYzIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlPzQ5MmEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMvbnZ1ZS9udnVlLm52dWU/YWU1OCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT80ODNjIiwidW5pLWFwcDovLy9wYWdlcy9udnVlL252dWUubnZ1ZSIsInVuaS1hcHA6Ly8vY29tbW9uL2luZGV4LmpzIiwidW5pLWFwcDovLy9qc29uLmpzIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/Mzc2MCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlPzQ4OWQiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT83Njc5Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/ZWU2ZiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/YTM0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlPzQ4ODgiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT8wZjU1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzc4NzUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT9jNGM4Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/NTk4MSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzA4MDIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT9iN2MxIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/ZmUzNCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT9jMGYwIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlP2I0MDUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImluaXRVbmkiLCJpc0ZuIiwiaGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJSRUdFWCIsIkFQSV9OT1JNQUxfTElTVCIsInNob3VsZFByb21pc2UiLCJuYW1lIiwidGVzdCIsImluZGV4T2YiLCJwcm9taXNpZnkiLCJhcGkiLCJfbGVuIiwiYXJndW1lbnRzIiwicGFyYW1zIiwiQXJyYXkiLCJfa2V5IiwidW5kZWZpbmVkIiwiYXBwbHkiLCJjb25jYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwib25NZXNzYWdlQ2FsbGJhY2tzIiwib3JpZ2luIiwib25TdWJOVnVlTWVzc2FnZSIsIndlYnZpZXdJZCIsIndlZXhQbHVzIiwid2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwiaWQiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwiZXZlbnQiLCJ0byIsIndyYXBwZXIiLCIkcHJvY2Vzc2VkIiwiY3VycmVudFdlYnZpZXdJZCIsImlzUG9wdXBOVnVlIiwiaG9zdE5WdWVJZCIsIl9fdW5pYXBwX29yaWdpbl90eXBlIiwiX191bmlhcHBfb3JpZ2luX2lkIiwicG9wdXBOVnVlSWQiLCJwb3N0TWVzc2FnZSIsIm9uTWVzc2FnZSIsIl9fdW5pYXBwX21hc2tfaWQiLCJfX3VuaWFwcF9ob3N0IiwibWFza0NvbG9yIiwiX191bmlhcHBfbWFzayIsIm1hc2tXZWJ2aWV3IiwiZ2V0V2Vidmlld0J5SWQiLCJwYXJlbnQiLCJvbGRTaG93Iiwib2xkSGlkZSIsIm9sZENsb3NlIiwiY2xvc2UiLCJzaG93TWFzayIsInNldFN0eWxlIiwibWFzayIsImNsb3NlTWFzayIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJnZXRDdXJyZW50U3ViTlZ1ZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZ2xvYmFsRXZlbnQiLCJjYWxsYmFja3MiLCJVTklBUFBfU0VSVklDRV9OVlVFX0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2siLCJjcmVhdGVDYWxsYmFjayIsInJlcyIsImVyck1zZyIsImtlZXBBbGl2ZSIsImNhbGxiYWNrSWQiLCJwdWJsaXNoIiwiX3JlZiIsImNyZWF0ZVB1Ymxpc2giLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJwbHVnaW5OYW1lIiwiZG9tIiwibG9hZEZvbnRGYWNlIiwiZmFtaWx5Iiwic291cmNlIiwiZGVzYyIsImFkZFJ1bGUiLCJmb250RmFtaWx5Iiwic3RhdHVzIiwiZ2xvYmFsRXZlbnQkMSIsImNhbGxiYWNrcyQxIiwiaXNVbmlBcHBSZWFkeSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsInN0cmVhbSIsIk1FVEhPRF9HRVQiLCJNRVRIT0RfUE9TVCIsIkNPTlRFTlRfVFlQRV9KU09OIiwiQ09OVEVOVF9UWVBFX0ZPUk0iLCJzZXJpYWxpemUiLCJjb250ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJqb2luIiwiaGVhZGVyIiwiX3JlZiRtZXRob2QiLCJfcmVmJGRhdGFUeXBlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJhYm9ydGVkIiwiaGFzQ29udGVudFR5cGUiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiX3JlZjIiLCJvayIsInN0YXR1c1RleHQiLCJyZXQiLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJzdG9yYWdlIiwiVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFIiwiZ2V0U3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlU3RvcmFnZSIsIl9yZWYzIiwicmVtb3ZlSXRlbSIsImNsZWFyU3RvcmFnZSIsIl9yZWY0IiwiY2xpcGJvYXJkIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsImdldFN0cmluZyIsInNldENsaXBib2FyZERhdGEiLCJzZXRTdHJpbmciLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCIkb24iLCJ3YXJuIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJjdHgiLCJzbGljZSIsImZyZWV6ZSIsInd4IiwidXBsb2FkRmlsZSIsImRvd25sb2FkRmlsZSIsImNob29zZUltYWdlIiwicHJldmlld0ltYWdlIiwiZ2V0SW1hZ2VJbmZvIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImNob29zZVZpZGVvIiwic2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSIsInNhdmVGaWxlIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsImdldFNhdmVkRmlsZUluZm8iLCJyZW1vdmVTYXZlZEZpbGUiLCJvcGVuRG9jdW1lbnQiLCJnZXRTdG9yYWdlSW5mbyIsImNob29zZUxvY2F0aW9uIiwib3BlbkxvY2F0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIm1ha2VQaG9uZUNhbGwiLCJzY2FuQ29kZSIsInNldFNjcmVlbkJyaWdodG5lc3MiLCJnZXRTY3JlZW5CcmlnaHRuZXNzIiwic2V0S2VlcFNjcmVlbk9uIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiLCJhZGRQaG9uZUNvbnRhY3QiLCJzaG93VG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVUb2FzdCIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwic2hvd0FjdGlvblNoZWV0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic2V0TmF2aWdhdGlvbkJhckNvbG9yIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImdldFByb3ZpZGVyIiwibG9naW4iLCJnZXRVc2VySW5mbyIsInNoYXJlIiwicmVxdWVzdFBheW1lbnQiLCJzdWJzY3JpYmVQdXNoIiwidW5zdWJzY3JpYmVQdXNoIiwib25QdXNoIiwib2ZmUHVzaCIsImJhc2VVbmkiLCJvcyIsIm52dWUiLCJQcm94eSIsImdldCIsInRhcmdldCIsImNyZWF0ZVVuaSIsImdldFVuaSIsIldlZXhQbHVzIiwidGFiQmFycyIsInRhYkN1cnJlbnRJbmRleCIsIm1ldGhvZHMiLCJsb2FkVGFiYmFycyIsInRhYkxpc3QiLCJqc29uIiwiaXRlbSIsIm5ld3NMaXN0IiwibG9hZE1vcmVTdGF0dXMiLCJyZWZyZXNoaW5nIiwibG9hZE5ld3NMaXN0IiwidGFiSXRlbSIsImxpc3QiLCJhIiwiYiIsIiRyZWZzIiwibWl4UHVsbGRvd25SZWZyZXNoIiwiZW5kUHVsbGRvd25SZWZyZXNoIiwibmF2VG9EZXRhaWxzIiwiYXV0aG9yIiwidmlkZW9TcmMiLCJpbWFnZXMiLCJldmFMaXN0Iiwibmlja25hbWUiLCJ6YW4iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUEr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LEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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Q0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtB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QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9udnVlL252dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9udnVlL252dWUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbnZ1ZS9udnVlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fREE3RDAwNlwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiQEZPTlQtRkFDRVwiOiBbXG4gICAge1xuICAgICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICAgIFwic3JjXCI6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzgxMTI0Ml9tZ250enEyajVoYi5lb3Q/dD0xNTUyMjczMzQ0ODA2I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCBcXHJcXG4gIHVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF84MTEyNDJfbWdudHpxMmo1aGIud29mZj90PTE1NTIyNzMzNDQ4MDYnKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG4gIHVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF84MTEyNDJfbWdudHpxMmo1aGIudHRmP3Q9MTU1MjI3MzM0NDgwNicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgXFxyXFxuICB1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfODExMjQyX21nbnR6cTJqNWhiLnN2Zz90PTE1NTIyNzMzNDQ4MDYjaWNvbmZvbnQnKSBmb3JtYXQoJ3N2ZycpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcInl0aWNvblwiLFxuICAgICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgICAgXCJzcmNcIjogXCJ1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTA3ODYwNF8zbXJoYWMybzNvaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJylcIlxuICAgIH1cbiAgXSxcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIixcbiAgICBcImxpbmVIZWlnaHQ6YmVmb3JlXCI6IDEuNVxuICB9LFxuICBcImljb24tZ3VhbmdqaWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFwcHJlY2lhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIlxuICB9LFxuICBcImljb24tZWRpdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0OVxcXCJcIlxuICB9LFxuICBcImljb24tZW1vamlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZhdm9yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0YlxcXCJcIlxuICB9LFxuICBcImljb24tZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxvYWRpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxvY2F0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MFxcXCJcIlxuICB9LFxuICBcImljb24tbG9jYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBob25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGNoZWNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1NlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRjaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1N1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRjbG9zZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kcmlnaHRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZHJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjViXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWFyY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRheGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11bmZvbGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhcm5maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YXJuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1lbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWtlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OFxcXCJcIlxuICB9LFxuICBcImljb24tbGlrZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OVxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWZpY2F0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2YVxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWZpY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1vcmRlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2Y1xcXCJcIlxuICB9LFxuICBcImljb24tc2FtZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNhbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRlbGl2ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV2YWx1YXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjcyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3N1xcXCJcIlxuICB9LFxuICBcImljb24td2FuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3OFxcXCJcIlxuICB9LFxuICBcImljb24tYmFja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3OVxcXCJcIlxuICB9LFxuICBcImljb24tY2FzY2FkZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRpc2NvdmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjgyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4YVxcXCJcIlxuICB9LFxuICBcImljb24tcXVlc3Rpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjkwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xdWVzdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MVxcXCJcIlxuICB9LFxuICBcImljb24tc2hvcGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcm1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhbmdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZpbHRlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5Y1xcXCJcIlxuICB9LFxuICBcImljb24tZm9vdHByaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10b3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bGxkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdWxsdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWZyZXNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb3JlYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNVxcXCJcIlxuICB9LFxuICBcImljb24tZGVsZXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNlxcXCJcIlxuICB9LFxuICBcImljb24tcmVmdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xcmNvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlbWluZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiMlxcXCJcIlxuICB9LFxuICBcImljb24tZGVsZXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wcm9maWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob21lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJ0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiOVxcXCJcIlxuICB9LFxuICBcImljb24tZGlzY292ZXJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob21lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiYlxcXCJcIlxuICB9LFxuICBcImljb24tbWVzc2FnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiY1xcXCJcIlxuICB9LFxuICBcImljb24tYWRkcmVzc2Jvb2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpbmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVubG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMlxcXCJcIlxuICB9LFxuICBcImljb24tdmlwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZWlib1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjNFxcXCJcIlxuICB9LFxuICBcImljb24tYWN0aXZpdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJpZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjN1xcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjOVxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRmYW1vdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjY1xcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlbGVjdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZVxcXCJcIlxuICB9LFxuICBcImljb24tdG1hbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV4cGxvcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXByZXNlbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNxdWFyZWNoZWNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNFxcXCJcIlxuICB9LFxuICBcImljb24tc3F1YXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcXVhcmVjaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkOFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYVxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWZpY2F0aW9uZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYlxcXCJcIlxuICB9LFxuICBcImljb24tZXhwbG9yZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvbGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdhbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZHBhY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMFxcXCJcIlxuICB9LFxuICBcImljb24tc2VsZWN0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMVxcXCJcIlxuICB9LFxuICBcImljb24tc2ltaWxhclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMlxcXCJcIlxuICB9LFxuICBcImljb24tYXBwcmVjaWF0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWluZm9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pbmZvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vYmlsZXRhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlOVxcXCJcIlxuICB9LFxuICBcImljb24tZm9yd2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcndhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlY2hhcmdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlY1xcXCJcIlxuICB9LFxuICBcImljb24tcmVjaGFyZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpcGNhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZvaWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12b2ljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZGZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13aWZpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1NlxcXCJcIlxuICB9LFxuICBcImljb24td2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNVxcXCJcIlxuICB9LFxuICBcImljb24tbGlnaHRhdXRvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWdodGZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmN1xcXCJcIlxuICB9LFxuICBcImljb24tbGlnaHRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFyb3RhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYXJjb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mbGFzaGxpZ2h0Y2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZsYXNobGlnaHRvcGVuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWFyY2hsaXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZXJ2aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3J0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi0xMjEyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb2JpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vYmlsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvdW50ZG93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvdW50ZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwOFxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwOVxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xaWFuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwYlxcXCJcIlxuICB9LFxuICBcImljb24tdXBzdGFnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVwc3RhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhYnlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWJ5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1icmFuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJyYW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaG9pY2VuZXNzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNFxcXCJcIlxuICB9LFxuICBcImljb24tY2hvaWNlbmVzc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNVxcXCJcIlxuICB9LFxuICBcImljb24tY2xvdGhlc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNsb3RoZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNyZWF0aXZlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxOFxcXCJcIlxuICB9LFxuICBcImljb24tY3JlYXRpdmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZlbWFsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxYVxcXCJcIlxuICB9LFxuICBcImljb24ta2V5Ym9hcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1hbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZVxcXCJcIlxuICB9LFxuICBcImljb24tcHVsbGxlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bGxyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMFxcXCJcIlxuICB9LFxuICBcImljb24tcmFua2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJhbmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyM1xcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb2N1c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNVxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNlxcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyN1xcXCJcIlxuICB9LFxuICBcImljb24tamlhbnpoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZlxcXCJcIlxuICB9LFxuICBcImljb24tYXBwc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyOVxcXCJcIlxuICB9LFxuICBcImljb24tcGFpbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wYWludFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyYlxcXCJcIlxuICB9LFxuICBcImljb24tcGljZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyY1xcXCJcIlxuICB9LFxuICBcImljb24tcmVmcmVzaGFycm93XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYXJrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMFxcXCJcIlxuICB9LFxuICBcImljb24tbWFya1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMVxcXCJcIlxuICB9LFxuICBcImljb24tcHJlc2VudGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlcGVhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczM1xcXCJcIlxuICB9LFxuICBcImljb24tYWxidW1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBlb3BsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBlb3BsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNlxcXCJcIlxuICB9LFxuICBcImljb24tc2VydmljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlcGFpclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczOFxcXCJcIlxuICB9LFxuICBcImljb24tZmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczOVxcXCJcIlxuICB9LFxuICBcImljb24tcmVwYWlyZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYVxcXCJcIlxuICB9LFxuICBcImljb24tdGFveGlhb3B1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1hbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tYW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tdW5pdHlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tdW5pdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWh1YVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0NFxcXCJcIlxuICB9LFxuICBcImljb24tanVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbGVuZGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jdXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1hZ2ljXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrd2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBsYXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YWdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdyb3VwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2tkZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZVxcXCJcIlxuICB9LFxuICBcImljb24tcG9zdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1OVxcXCJcIlxuICB9LFxuICBcImljb24tcmFkaW9ib3hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1Y1xcXCJcIlxuICB9LFxuICBcImljb24tdXBsb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13cml0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdyaXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yYWRpb2JveGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGFrZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NVxcXCJcIlxuICB9LFxuICBcImljb24tYWRkMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2N1xcXCJcIlxuICB9LFxuICBcImljb24tbW92ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2OFxcXCJcIlxuICB9LFxuICBcImljb24tc2FmZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2OVxcXCJcIlxuICB9LFxuICBcImljb24taGFvZGlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2ZFxcXCJcIlxuICB9LFxuICBcImljb24tbWFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2ZlxcXCJcIlxuICB9LFxuICBcImljb24teWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWp1aHVhc3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3MVxcXCJcIlxuICB9LFxuICBcImljb24tdGFvcWlhbmdnb3VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpYW5tYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFjdGl2aXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3NVxcXCJcIlxuICB9LFxuICBcImljb24tY3Jvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jcm93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3N1xcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZXNzYWdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3OVxcXCJcIlxuICB9LFxuICBcImljb24tcHJvZmlsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNvdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcG9uc29yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3Y1xcXCJcIlxuICB9LFxuICBcImljb24tc3BvbnNvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZFxcXCJcIlxuICB9LFxuICBcImljb24tdXBibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZVxcXCJcIlxuICB9LFxuICBcImljb24td2VibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZlxcXCJcIlxuICB9LFxuICBcImljb24td2V1bmJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi0xMTExXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1teWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVtb2ppZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZFxcXCJcIlxuICB9LFxuICBcImljb24tZW1vamlmbGFzaGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZsYXNoYnV5ZmlsbC1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10ZXh0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzkxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc2Zhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tdXNpY2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW11c2ljZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NlxcXCJcIlxuICB9LFxuICBcImljb24teGlhbWlmb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYW1pXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGxlZnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10cmlhbmdsZWRvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzliXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10cmlhbmdsZXVwZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5Y1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRsZWZ0ZmlsbC1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzllXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdWxsZG93bjFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlaXhpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxNFxcXCJcIlxuICB9LFxuICBcImljb24tZW1vamlsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhMVxcXCJcIlxuICB9LFxuICBcImljb24ta2V5Ym9hcmRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhM1xcXCJcIlxuICB9LFxuICBcImljb24tcmVjb3JkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNFxcXCJcIlxuICB9LFxuICBcImljb24tcmVjb3JkbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlY29yZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRhZGRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhN1xcXCJcIlxuICB9LFxuICBcImljb24tc291bmRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhOFxcXCJcIlxuICB9LFxuICBcImljb24tY2FyZGJvYXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhOVxcXCJcIlxuICB9LFxuICBcImljb24tY2FyZGJvYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhYlxcXCJcIlxuICB9LFxuICBcImljb24tdGVsZXBob25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb2luXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3J0bGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcmRib2FyZGZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhZlxcXCJcIlxuICB9LFxuICBcImljb24tY2lyY2xlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMFxcXCJcIlxuICB9LFxuICBcImljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25mb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZhdm9yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiNFxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3BsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiOFxcXCJcIlxuICB9LFxuICBcImljb24tdm9pY2VsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiOVxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZmF2b3JmaWxsLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZ1bGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1haWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBlb3BsZWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzbmV3ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZlxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNuZXdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lZGFsZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMVxcXCJcIlxuICB9LFxuICBcImljb24tbWVkYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzaG90ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNFxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c2hvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNVxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNlxcXCJcIlxuICB9LFxuICBcImljb24tdmlkZW9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aWRlb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjOFxcXCJcIlxuICB9LFxuICBcImljb24tYXNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjOVxcXCJcIlxuICB9LFxuICBcImljb24tYXNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1leGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1za2luZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjY1xcXCJcIlxuICB9LFxuICBcImljb24tc2tpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZFxcXCJcIlxuICB9LFxuICBcImljb24tbW9uZXliYWdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11c2VmdWxsZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZlxcXCJcIlxuICB9LFxuICBcImljb24tdXNlZnVsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkMFxcXCJcIlxuICB9LFxuICBcImljb24tbW9uZXliYWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZHBhY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdWJzY3JpcHRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW15X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tdW5pdHlfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcnRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob21lX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcnRfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkYVxcXCJcIlxuICB9LFxuICBcImljb24tY29tbXVuaXR5X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW15X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNraW5fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlYXJjaF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkZlxcXCJcIlxuICB9LFxuICBcImljb24tc2Nhbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlMFxcXCJcIlxuICB9LFxuICBcImljb24tcGVvcGxlX2xpc3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lc3NhZ2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNsb3NlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hZGRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXByb2ZpbGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlcnZpY2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZF9hZGRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVkaXRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlOVxcXCJcIlxuICB9LFxuICBcImljb24taG90X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWZyZXNoX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ViXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGFyZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWVudF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZVxcXCJcIlxuICB9LFxuICBcImljb24tYXBwcmVjaWF0ZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZlxcXCJcIlxuICB9LFxuICBcImljb24tZmF2b3JfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFwcHJlY2lhdGVfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmMVxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWVudF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YW5nX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb3JlX2FuZHJvaWRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmNVxcXCJcIlxuICB9LFxuICBcImljb24tbW9yZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmNlxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNfZmF2b3JfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzX25ld19maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc19uZXdfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZWRhbF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZWRhbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmY1xcXCJcIlxuICB9LFxuICBcImljb24tbmV3c19maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzX2hvdF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzX2hvdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmZlxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwMFxcXCJcIlxuICB9LFxuICBcImljb24tdmlkZW9fZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwMVxcXCJcIlxuICB9LFxuICBcImljb24tbWVzc2FnZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODAyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JtX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODAzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aWRlb19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwNFxcXCJcIlxuICB9LFxuICBcImljb24tc2VhcmNoX2xpc3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcm1fZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwNlxcXCJcIlxuICB9LFxuICBcImljb24tZ2xvYmFsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nbG9iYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZhdm9yX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRlbGV0ZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwYVxcXCJcIlxuICB9LFxuICBcImljb24tYmFja19hbmRyb2lkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrX2FuZHJvaWRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRvd25fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2Nsb3NlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9jbG9zZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1leHByZXNzbWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODEwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdW5jaF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxMVxcXCJcIlxuICB9LFxuICBcImljb24tZXZhbHVhdGVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxMlxcXCJcIlxuICB9LFxuICBcImljb24tZnVybml0dXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kcmVzc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxNFxcXCJcIlxuICB9LFxuICBcImljb24tY29mZmVlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcG9ydHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXd4em9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNFxcXCJcIlxuICB9LFxuICBcImljb24tZ3JvdXBfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxvY2F0aW9uX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdyb3VwX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdyb3VwX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBsYXlfZm9yd2FyZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1rZXRhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN1YnNjcmlwdGlvbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxZFxcXCJcIlxuICB9LFxuICBcImljb24tZGVsaXZlcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ub3RpY2VfZm9yYmlkX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFyX2NvZGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXFxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaGF0LXJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZW56aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MFxcXCJcIlxuICB9LFxuICBcImljb24tc2V0dGluZ3NfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWpvYlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxYlxcXCJcIlxuICB9LFxuICBcImljb24tcGlja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyMlxcXCJcIlxuICB9LFxuICBcImljb24tZm9ybV9mYXZvcl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyM1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfY29tbWVudF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyNFxcXCJcIlxuICB9LFxuICBcImljb24tcXpvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vYmFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYTFhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waG9uZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyNVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfZG93bl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyNlxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kX3NldHRpbmdzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaGFuZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbGlzdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyOVxcXCJcIlxuICB9LFxuICBcImljb24tdGlja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNoYXQtbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfZnJpZW5kX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2Nyb3duX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xpbmtfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyZFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbGlnaHRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyZVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfZmF2b3JfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyZlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbWVudV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODMwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9sb2NhdGlvbl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODMxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9wYXlfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzMlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbGlrZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODMzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9wZW9wbGVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzNFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcGF5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9yYW5rX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3JlZHBhY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9za2luX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3JlY29yZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF90aWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzYVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcmVkcGFja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF90ZXh0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3RpY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzZFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfdHJhbnNmZXJfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzZVxcXCJcIlxuICB9LFxuICBcImljb24tc3VidGl0bGVfYmxvY2tfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhcm5fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3RyYW5zZmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aXBfY29kZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0MlxcXCJcIlxuICB9LFxuICBcImljb24tc3VidGl0bGVfdW5ibG9ja19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0M1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfc2hvcF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1vcHBvc2VfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0NVxcXCJcIlxuICB9LFxuICBcImljb24tb3Bwb3NlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ib29rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZXF1aXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wYXNzd29yZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxYVxcXCJcIlxuICB9LFxuICBcImljb24tbGl2aW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc19ob3RfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0OFxcXCJcIlxuICB9LFxuICBcImljb24tdGlja2V0X21vbmV5X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXF1YW56aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDZcXFwiXCJcbiAgfSxcbiAgXCJfcFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcIl9vbFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcIl91bFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcIl9saVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcIl9hXCI6IHtcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiZC11c2VyYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZC11c2VyYm94LWhlYWRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwiZC11c2VyYm94LW5pY2tcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJkLXVzZXJib3gtZm9sbG93c1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJkLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJkLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTkuMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCJcbiAgfSxcbiAgXCJkLXRvb2xzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNTU1NTU1XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcImQtY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWFya2V0LXByaWNlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzkyOTI5MlwiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIml0YWxpY1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJyb3ctYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInJvdy1ib3gtaGRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE5LjJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwicm93LWJveC1tb3JlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZGlzcGxheTphZnRlclwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2YTNcXFwiXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwicGF5bGlzdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJwYXlsaXN0LWl0ZW1cIjoge1xuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ4cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwid2lkdGhcIjogMzEsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAyXG4gIH0sXG4gIFwicGF5bGlzdC1pdGVtLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjY2MDBcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZjYwXCJcbiAgfSxcbiAgXCJlbXB0eURhdGFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwia3NsaXN0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJrc2xpc3QtbGFiZWxcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImtzbGlzdC1pdGVtXCI6IHtcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOS42cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiOS42cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE5LjJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcImtzbGlzdC1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJmaXhlZEFkZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIyNDBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwOHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTA4cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjQwLDg1LDc1LDAuODIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlOFxcXCJcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlXCI6IFwiYmxvY2tcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcImFuaW1hdGVkLXRvZ2dsZVwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwidG9nZ2xlXCIsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiAyXG4gIH0sXG4gIFwiYW5pbWF0ZWQtaGlkZVwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiaGlkZVwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtc2hvd1wiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2hvd1wiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtc2xpZGVJbkxlZnRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlSW5MZWZ0XCJcbiAgfSxcbiAgXCJhbmltYXRlZC1zbGlkZU91dExlZnRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0TGVmdFwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtc2xpZGVJblJpZ2h0XCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZUluUmlnaHRcIlxuICB9LFxuICBcImFuaW1hdGVkLXNsaWRlT3V0UmlnaHRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNsaWRlT3V0UmlnaHRcIlxuICB9LFxuICBcImFuaW1hdGVkLXJvdGF0ZUluXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVJblwiLFxuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInJvdGF0ZUluXCJcbiAgfSxcbiAgXCJhbmltYXRlZFwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25EdXJhdGlvblwiOiAxLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMSxcbiAgICBcIldlYmtpdEFuaW1hdGlvbkZpbGxNb2RlXCI6IFwiYm90aFwiLFxuICAgIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogXCJib3RoXCJcbiAgfSxcbiAgXCJjb21tZW50LWhkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMjBDMDBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwid2lkdGhcIjogXCIyMTZycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0taGVhZFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLW5pY2tcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDdBRkZcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMSxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE0LjRycHhcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbS10b29sc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMVxuICB9LFxuICBcImNvbW1lbnQtaXRlbS1hZGRyXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0tdGltZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5Njk2OTZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLWNvbnRlbnRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS41LFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwiY29tbWVudC1mb3JtYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIlxuICB9LFxuICBcImNvbW1lbnQtaW5wdXQtYnRuXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjcycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjcycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MVxcXCJcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlXCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjM4LjRycHhcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiBcIi00OHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1mb3JtYm94LWZvcm1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcImNvbW1lbnQtZm9ybWJveC10ZXh0YXJlYVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxOTJycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcIndpZHRoXCI6IDkwLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjb21tZW50LWZvcm1ib3gtYnRuc1wiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjb21tZW50LWZvcm1ib3gtYnRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxOTJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImlucHV0LWZsZXhcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjFcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC1sYWJlbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE5MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICB9LFxuICBcImlucHV0LWZsZXgtcmVxdWlyZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjBkXFxcIlwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjRkYwMDAwXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IFwiLTI0cnB4XCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjI4LjhycHhcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInNjYWxlKDAuNSlcIlxuICB9LFxuICBcImlucHV0LWZsZXgtdHh0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImlucHV0LWZsZXgtdGV4dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LXNlbGVjdFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJXZWJraXRBcHBlYXJhbmNlXCI6IFwibWVudWxpc3QtYnV0dG9uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIlxuICB9LFxuICBcImlucHV0LWZsZXgtbm90ZVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCItMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInpJbmRleFwiOiAyXG4gIH0sXG4gIFwidGV4dGFyZWEtZmxleFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwidGV4dGFyZWEtZmxleC1sYWJlbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCJcbiAgfSxcbiAgXCJ0ZXh0YXJlYS1mbGV4LXRleHRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNDgwcnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicmFkaW8tZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicmFkaW9cIjoge1xuICAgIFwid2lkdGhcIjogXCI0OHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwicmFkaW9MaXN0LWl0ZW1cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNDMuMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2M1xcXCJcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcInJhZGlvTGlzdC1pdGVtLWFjdGl2ZVwiOiB7XG4gICAgXCJmb250RmFtaWx5OmJlZm9yZTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlOmJlZm9yZVwiOiBcIjQzLjJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZTpiZWZvcmVcIjogXCI3LjJycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzViXFxcIlwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiIzAwMzRGRlwiXG4gIH0sXG4gIFwiY2hlY2tib3gtZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiY2hlY2tib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCI0OHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwibnVtYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiXG4gIH0sXG4gIFwibnVtYm94LW1pbnVzXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcIndpZHRoXCI6IFwiNzJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDMuMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJudW1ib3gtcGx1c1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjcycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQzLjJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibnVtYm94LW51bVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjFcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDAsXG4gICAgXCJib3JkZXJMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJib3hTaGFkb3dcIjogXCJub25lXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIlxuICB9LFxuICBcIm51bWJveC1taW51cy1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwibnVtYm94LXBsdXMtc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm51bWJveC1udW0tc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcInN3aXRjaC1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIndpZHRoXCI6IFwiMTUzLjZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCI0LjhycHggc29saWQgI2RkZFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInN3aXRjaC1sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInZpc2liaWxpdHlcIjogXCJoaWRkZW5cIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcInRvcFwiOiBcIi00LjhycHhcIixcbiAgICBcImxlZnRcIjogXCItNC44cnB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIi5cXFwiXCIsXG4gICAgXCJ3aWR0aDphZnRlclwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCI3MnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFmdGVyXCI6IFwiIzAwN0JGRlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzOmFmdGVyXCI6IFwiNDhycHhcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzAwN0JGRlwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOmFmdGVyXCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogXCItNC44cnB4XCJcbiAgfSxcbiAgXCJzd2l0Y2gtcmlnaHRcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwidmlzaWJpbGl0eVwiOiBcImhpZGRlblwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcInRvcFwiOiBcIi00LjhycHhcIixcbiAgICBcImxlZnRcIjogXCItNC44cnB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI3MnJweFwiLFxuICAgIFwiY29udGVudDphZnRlcjpiZWZvcmVcIjogXCJcXFwiLlxcXCJcIixcbiAgICBcIndpZHRoOmFmdGVyOmJlZm9yZVwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHQ6YWZ0ZXI6YmVmb3JlXCI6IFwiNzJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlcjpiZWZvcmVcIjogXCIjMDA3QkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXM6YWZ0ZXI6YmVmb3JlXCI6IFwiNDhycHhcIixcbiAgICBcImNvbG9yOmFmdGVyOmJlZm9yZVwiOiBcIiMwMDdCRkZcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YWZ0ZXI6YmVmb3JlXCI6IFwiMHJweFwiLFxuICAgIFwibGVmdDpiZWZvcmVcIjogXCItNC44cnB4XCJcbiAgfSxcbiAgXCJzd2l0Y2gtYWN0aXZlXCI6IHtcbiAgICBcInZpc2liaWxpdHlcIjogXCJ2aXNpYmxlXCJcbiAgfSxcbiAgXCJ1cGltZy1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ1cGltZy1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI3Ni44cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJ1cGltZy1idG4taWNvblwiOiB7XG4gICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiM5Njk2OTZcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjU3LjZycHhcIixcbiAgICBcImZvbnRXZWlnaHQ6YmVmb3JlXCI6IFwiMTAwXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYVxcXCJcIlxuICB9LFxuICBcInVwaW1nLWxpc3RcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidXBpbWctaXRlbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidXBpbWctZGVsXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjFcIixcbiAgICBcInJpZ2h0XCI6IFwiMVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXJcIjogXCJmbGV4XCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZsZXhEaXJlY3Rpb246YWZ0ZXJcIjogXCJjb2x1bW5cIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NDZcXFwiXCIsXG4gICAgXCJ3aWR0aDphZnRlclwiOiBcIjQ4cnB4XCIsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCI0OHJweFwiLFxuICAgIFwibGluZUhlaWdodDphZnRlclwiOiBcIjQ4cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ246YWZ0ZXJcIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvcjphZnRlclwiOiBcInBvaW50ZXJcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiMjguOHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjRkYwMDAwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjZTBlMGUwXCIsXG4gICAgXCJvcGFjaXR5OmFmdGVyXCI6IDAuNlxuICB9LFxuICBcInVwaW1nLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCJcbiAgfSxcbiAgXCJnLWhkLTFcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwiZy1oZC0yXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNC40cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNC40cnB4XCJcbiAgfSxcbiAgXCJnLWhkLTNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJnLXNlYXJjaC1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiZy1zZWFyY2gtaW5wdXRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYm9yZGVyXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZy1zZWFyY2gtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOTZycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI0My4ycnB4XCJcbiAgfSxcbiAgXCJnLW9yZGVyXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzljXFxcIlwiLFxuICAgIFwibGluZUhlaWdodDpiZWZvcmVcIjogMSxcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNkZGRkZGRcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTc5YlxcXCJcIixcbiAgICBcImxpbmVIZWlnaHQ6YWZ0ZXJcIjogMSxcbiAgICBcIm1hcmdpblRvcDphZnRlclwiOiBcIi0xNi44cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiNkZGRkZGRcIlxuICB9LFxuICBcImctb3JkZXItdXBcIjoge1xuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmNjYwMFwiXG4gIH0sXG4gIFwiZy1vcmRlci1kb3duXCI6IHtcbiAgICBcImNvbG9yOmJlZm9yZTphZnRlclwiOiBcIiNmZjY2MDBcIlxuICB9LFxuICBcImctb3JkZXItYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yOmJlZm9yZTphZnRlclwiOiBcIiNmZjY2MDBcIlxuICB9LFxuICBcInJvdy1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZGlzcGxheTphZnRlclwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2YTNcXFwiXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcInJvdy1pdGVtLXRleHRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiY3Vyc29yXCI6IFwiaW5pdGlhbFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJyb3ctaXRlbS1pY29uXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQzLjJycHhcIlxuICB9LFxuICBcInJvdy1pdGVtLXRpdGxlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwiZmxleGxpc3QtaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImZsZXhsaXN0LWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJmbGV4bGlzdC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImZsZXhsaXN0LWtzXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIi03LjJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmNjYwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI3LjJycHhcIlxuICB9LFxuICBcImZsZXhsaXN0LWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5Njk2OTZcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJmbGV4bGlzdC1yb3dcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdC1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1iZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdC1pdGVtLXBkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdC1pbWdib3hcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJtdGxpc3QtaW1nXCI6IHtcbiAgICBcIm1heFdpZHRoXCI6IDEwMFxuICB9LFxuICBcIm10bGlzdC1pdGVtLW1vbmV5XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdC1pdGVtLW1vbmV5LWZsZXhcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZWQ2ZDUzXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIm10bGlzdC1pdGVtLW1vbmV5X21vbmV5XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDhycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMVxuICB9LFxuICBcIm10bGlzdC1pdGVtLW1vbmV5X251bVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibXRsaXN0LWRlc2NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJzZ2xpc3QtaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwic2dsaXN0LWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcInNnbGlzdC10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcInNnbGlzdC1pbWdsaXN0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInNnbGlzdC1pbWdsaXN0LWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwic2dsaXN0LWRlc2NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtdXNlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJzZ2xpc3Qtbmlja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwic2dsaXN0LXVoZWFkXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjk2cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0LjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE0LjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNC40cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE0LjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwic2dsaXN0LWZ0LWxvdmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI5LjZycHhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY5XFxcIlwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIxcHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic2dsaXN0LWZ0LWNtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmU6YmVmb3JlXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmU6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmU6YmVmb3JlXCI6IFwiOS42cnB4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjdcXFwiXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjFweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzZ2xpc3QtZnQtdmlld1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlOmJlZm9yZTpiZWZvcmVcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZTpiZWZvcmU6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmU6YmVmb3JlOmJlZm9yZVwiOiBcIjkuNnJweFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlOmJlZm9yZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxOVxcXCJcIlxuICB9LFxuICBcImZsZXgtdGFibGVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE5LjJycHhcIlxuICB9LFxuICBcImZsZXgtdGFibGUtbGFiZWxcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiMTkycnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiZmxleC10YWJsZS1ib3hcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQuOHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImxvYWRNb3JlXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwibS1uYXZQaWNcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJtLW5hdlBpYy1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IDI1LFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzZycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm0tbmF2UGljLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxXG4gIH0sXG4gIFwibS1uYXZQaWMtaWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI3MnJweFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2VkNmQ1M1wiXG4gIH0sXG4gIFwibS1uYXZQaWMtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIlxuICB9LFxuICBcImFsZXJ0LW1hc2tcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwib3BhY2l0eVwiOiAwLjIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcInpJbmRleFwiOiA5OThcbiAgfSxcbiAgXCJjb25maXJtLWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5XG4gIH0sXG4gIFwiYWxlcnQtZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJhbGVydFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogNTAsXG4gICAgXCJ3aWR0aFwiOiBcIjYyNHJweFwiLFxuICAgIFwibGVmdFwiOiA1MCxcbiAgICBcIm1hcmdpbkxlZnRcIjogXCItMzEycnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCItMjQwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5OSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJhbGVydC1iZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJhbGVydC1hY3RpdmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcImFsZXJ0LWhlYWRlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWZhZmFcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYWxlcnQtbXNnXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0OHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcImFsZXJ0LWNsb3NlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInRvcFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJhbGVydC1mdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWZhZmFcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYWxlcnQtZnQtYnRuXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA3YWZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImFsZXJ0LWZ0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJhbGVydC1mdC1mYWlsXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwidG9hc3RcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5OSxcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwid2lkdGhcIjogXCI0ODBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMUUxRTFFXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwidG9hc3QtYWN0aXZlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ0b2FzdC1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyN0FFNjBcIlxuICB9LFxuICBcInRvYXN0LWVycm9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNDMDM5MkJcIlxuICB9LFxuICBcInRvYXN0LWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0YxQzQwRlwiXG4gIH0sXG4gIFwibW9kYWwtZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcIm1vZGFsLW1hc2tcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwib3BhY2l0eVwiOiAwLjIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcInpJbmRleFwiOiA5OThcbiAgfSxcbiAgXCJtb2RhbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInRvcFwiOiA1MCxcbiAgICBcIm1hcmdpblRvcFwiOiBcIi00NTZycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0OHJweFwiLFxuICAgIFwiekluZGV4XCI6IDk5OVxuICB9LFxuICBcIm1vZGFsLWhlYWRlclwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM2cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMTIwcnB4XCJcbiAgfSxcbiAgXCJtb2RhbC10aXRsZVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcIm1vZGFsLWNsb3NlXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwid2lkdGhcIjogXCIxMjBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEyMHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcIm1vZGFsLWJvZHlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjM2cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzZycHhcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIjc2OHJweFwiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwiaGVhZGVyLXJvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDUuNnJweFwiLFxuICAgIFwiY2xlYXJcIjogXCJib3RoXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiaGVhZGVyLXJvdy1zaG93XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwNS42cnB4XCIsXG4gICAgXCJjbGVhclwiOiBcImJvdGhcIlxuICB9LFxuICBcImhlYWRlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y3ZjdmN1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2LjhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNi44cnB4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk4LFxuICAgIFwiYm94U2hhZG93XCI6IFwiMCAxcHggMTQuNHJweCAjY2NjXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDUuNnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLXNob3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmN2Y3ZjdcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi44cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuOHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiekluZGV4XCI6IDk5OCxcbiAgICBcImJveFNoYWRvd1wiOiBcIjAgMXB4IDE0LjRycHggI2NjY1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTA1LjZycHhcIlxuICB9LFxuICBcImhlYWRlci1sb2dvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcImhlYWRlci1zZWFyY2gtYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJoZWFkZXItc2VhcmNoLWljb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJ0b3BcIjogXCIwcnB4XCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IFwiNDhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItc2VhcmNoXCI6IHtcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjgxLjZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MS42cnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IDAsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2Mi40cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiXG4gIH0sXG4gIFwiaGVhZGVyLXNlYXJjaC1idG5cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODEuNnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjgxLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNC44cnB4XCIsXG4gICAgXCJib3JkZXJcIjogMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI4LjhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI4LjhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlMGUwZTBcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaGVhZGVyLWJhY2tcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NzlcXFwiXCIsXG4gICAgXCJ3aWR0aDphZnRlclwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodDphZnRlclwiOiBcIjcycnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudDphZnRlclwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyXCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiNDhycHhcIlxuICB9LFxuICBcImhlYWRlci1iYWNrLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJ0b3BcIjogXCIxMnJweFwiLFxuICAgIFwid2lkdGhcIjogXCI5NnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiXG4gIH0sXG4gIFwiaGVhZGVyLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItcmlnaHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIlxuICB9LFxuICBcImhlYWRlci1yaWdodC1idG5cIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTY5Njk2XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNjIuNHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICM5Njk2OTZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItZml4dG9wXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiekluZGV4XCI6IDk5OTBcbiAgfSxcbiAgXCJoZWFkZXItZml4dG9wLWljb25cIjoge1xuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNDMuMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiMjRycHhcIixcbiAgICBcImhlaWdodDpiZWZvcmVcIjogXCIxMDUuNnJweFwiLFxuICAgIFwibGluZUhlaWdodDpiZWZvcmVcIjogXCIxMDUuNnJweFwiXG4gIH0sXG4gIFwiZm9vdGVyLXJvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIlxuICB9LFxuICBcImZvb3RlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiYm9yZGVyVG9wXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZvb3Rlci1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTI5MjkyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTYuOHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2LjhycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjQsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzguNHJweFwiLFxuICAgIFwiZm9udFN0eWxlOmJlZm9yZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiV2Via2l0Rm9udFNtb290aGluZzpiZWZvcmVcIjogXCJhbnRpYWxpYXNlZFwiLFxuICAgIFwiTW96T3N4Rm9udFNtb290aGluZzpiZWZvcmVcIjogXCJncmF5c2NhbGVcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiM5MjkyOTJcIixcbiAgICBcImxpbmVIZWlnaHQ6YmVmb3JlXCI6IDEsXG4gICAgXCJtYXJnaW5Cb3R0b206YmVmb3JlXCI6IFwiMVwiXG4gIH0sXG4gIFwiZm9vdGVyLWl0ZW0tbnVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzkyOTI5MlwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCI3LjJycHhcIixcbiAgICBcInRvcFwiOiBcIjkuNnJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcIndpZHRoXCI6IFwiMzguNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzguNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzguNHJweFwiXG4gIH0sXG4gIFwiZm9vdGVyLWFkZFwiOiB7XG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2ZGFcXFwiXCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjQzLjJycHhcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiODYuNHJweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiODYuNHJweFwiLFxuICAgIFwibGluZUhlaWdodDphZnRlclwiOiBcIjg2LjRycHhcIixcbiAgICBcInRvcDphZnRlclwiOiBcIi0zOC40cnB4XCIsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IDUwLFxuICAgIFwibWFyZ2luTGVmdDphZnRlclwiOiBcIi00My4ycnB4XCIsXG4gICAgXCJ6SW5kZXg6YWZ0ZXJcIjogOTksXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjZDNkM2QzXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImJvcmRlclJhZGl1czphZnRlclwiOiA1MCxcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcImFcXFwiXCIsXG4gICAgXCJ2aXNpYmlsaXR5OmJlZm9yZVwiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwiZm9vdGVyLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImZvb3RlckJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZhZmFmYVwiLFxuICAgIFwiYm9yZGVyVG9wXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZvb3RlckZpeFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAwXG4gIH0sXG4gIFwidGFicy1ib3JkZXJcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwidGFicy1ib3JkZXItaXRlbVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcInRhYnMtYm9yZGVyLWl0ZW0taW5uZXJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwidGFicy1ib3JkZXItYWN0aXZlXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZjYwXCJcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlci1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcInRhYnMtYm9yZGVyLWJveC1hY3RpdmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcInRhYnMtdG9nZ2xlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInRhYnMtdG9nZ2xlLWhkXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNmMGYwZjBcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY2MVxcXCJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCIzMy42cnB4XCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiBcIjFcIlxuICB9LFxuICBcInRhYnMtdG9nZ2xlLWhkLWFjdGl2ZVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNmYWZhZmFcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2ZGVcXFwiXCJcbiAgfSxcbiAgXCJ0YWJzLXRvZ2dsZS1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidGFicy10b2dnbGUtYWN0aXZlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInRhYi1zZWxlY3Qtc2VjdGlvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInRhYi1zZWxlY3RcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwODhDQ1wiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjM2cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1sYWJlbFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI3LjJycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC10M3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcIndpZHRoXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMCxcbiAgICBcImJvcmRlckxlZnRcIjogXCI5LjZycHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiOS42cnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxNC40cnB4IHNvbGlkICMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LXQzZG93blwiOiB7XG4gICAgXCJ3aWR0aFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJib3JkZXJMZWZ0XCI6IFwiOS42cnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjkuNnJweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgIFwiYm9yZGVyVG9wXCI6IFwiMTQuNHJweCBzb2xpZCAjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1iXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzguNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNjY2NcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgXCJib3JkZXJMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIxMjBycHhcIixcbiAgICBcImxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiekluZGV4XCI6IDk5OVxuICB9LFxuICBcInRhYi1zZWxlY3QtY2F0Ym94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveC1pdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IDAuOSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2NjY1wiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gxXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjlmOWY5XCIsXG4gICAgXCJmbG9hdFwiOiBcImxlZnRcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94MlwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmbG9hdFwiOiBcImxlZnRcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94LXBkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94MWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjcuMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gxaXRlbS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMUFCOUFDXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDJpdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gyaXRlbS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMjM5RUY3XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LXNob3dcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfSxcbiAgXCJyYXR5LWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJyYXR5LWxhYmVsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInJhdHktcm93XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImhlaWdodFwiOiBcIjQwLjhycHhcIlxuICB9LFxuICBcInJhdHktaXRlbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJyYXR5LW5vXCI6IHtcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiNDAuOHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAuOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBYkNBWUFBQUJ2Q084c0FBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBZEJKUkVGVVNJbTkxcnRyRkZFVXdPRnZrMVZKOEVXSy9BR0NRUVVmR0JVQ2l2aEVONjZwZktHTlZTeEViTlBZMkZoWTJtaVZSaHR0TEN4TW9iQWdhQ0ZZcEZBc1JBdTFzZkNCRDhSSGNXZHhNc3pNN3R4MWM1cVpjODQ5OCtPZU9lZmNXMnUxV2lMa01CN2dSOVhBZ1JnYXp1QlFUR0E5SW1Zd2dkVnd0MnB3ekE1M1lnUk5EQzhHc0prOGw2T3hHTURKMVB2SmZnUFhZbDFLYjJCRlA0RkhNL3FRZnludUMzQXl4MVlwclZXQXE0UUt6Y3BCck83MkkzVk1ZU0psRzhUS0hIMFVTM0src1F4UDhEbDVIODdFdFdVcHB1dVl3ejZjRjVvNVJzWTYrSi9qR09ZSDhBMFhoT254TGhKWUpqZXhIZk1zL0lkejJJZzcvd24wSGRQQzNQM1NObWFMNW9PdzliUDQxQVBzcFZBWE43S09vaXFkeFJZOGlvRGR4alk4eTNPV3RjVXI3TWJWQ3JCWkhGZVNuVTU5K0V0SWM3ZXl2dE9DYmhyL1NBWGdEcXpwQlRocTRWRG9KRFVocGRIQVJzR2F0N2hmRUhPcUYrQlVqdTBoeG9XTDFEbDh6ZmczWVVNTWNBajdVL29mWE1ZQnZFLzA2OWlLcDVuWUV6SEF2Y0kxZ2xDcFRWd1NLamN0TDRUL2ZBVy9FMXZoa1ZVR2JCKzJqNFZkM0N0Wit4TXoySVBYd2pBZnJ3S3NDZTF3VFdqK055V3d0TFN3R2JjVXBMWG9YanFHaThLWXFpb2ZjUnE3OHB4L0FTNEVSVVY4TytYREFBQUFBRWxGVGtTdVFtQ0MpXCJcbiAgfSxcbiAgXCJyYXR5LXllc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjQwLjhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwLjhycHhcIixcbiAgICBcImJhY2tncm91bmRSZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcInVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWJDQVlBQUFCdkNPOHNBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQXgxSlJFRlVTSW0xbFU5SUZGRWN4Mzl2WnZidHpPeVlycTJzb3JzaUlaRlFVaUZhbVZsVWxCVmtSSm1wb0tjdWRZZ09XUVFGMGFsTFhib0VDMXFFbHhLQzhGU2lVVkVRSWYzREVuTjNkVnRkM2RKdDNKMTU4MTZIc054MTFKMk4vWjNtZlgrLzcrL3pIdlArSVBZUUxFZEliTHlpYzNtM3ZLcHYxcXBYc0k0RGtJeXhEZ0FtQWNBbHExN09xc0V2dDJPRmZDbVZESCt6Vlc5R1FJSE5uaEhZSE1vaEg3MSt1ZDJWZGFEZENMY0NBUEFzampDZHZwaDFvTU1ZM2JUd0xSbitwcXdDZzFMelB0RVl4d3ZqSFBLcE9DQzNGbVVOaU9uazJTUXpTNENOUmk5bkRTZ2JnZHFsMnRqeHJBQURjcHZIUVVhY3FicENQcnNEY2x0cHVuM1F4Sk9qTnpDZDJmMVBZandIdXBJMFpwck1zMStLUW9ienpKckUrU0tOZ2tnUTZCekhkQjRBQUFGRkhKdm4vNEtBb0NuNzNqdUN6amx2MnVsa1E3NzJzaEtBcFR2UnBCQ05FQVlBdkZ3K3poZHJFVng3c21TK3B4Y3QzS1VUWW1PblMrdS9qbW5VOGxGWktYN1l0bjZiczFYVWVOVHVNQUFBV254NSsrVzI4bHg5NkdtdS9xN2tmMEVVWVpqQ2UrNjVFMzJ0aTNWazlscUV4VU4zWFlsbkhUeFRVU2F3T0Yra1QrTzYxdUw1bnA3VW5Da1FBQ0FvbmE1ejZxOGZPOGlYTlZaZ1AyMmJnN08yalRVZXRXdmNMTDhzRU9EUHkrQWdYNSt2MVFhcjBvRkZiVlZmbmZxYjhwVnFWdHdnWHRXblVXU2ZTUWNHQUlEWmRPRnFOYXZ1U05rWTI1WXUwRUZHbGFCMGFsZkd3SURVVXVFZ0l4YitJUU03bmVyTUdJaFo5RHdBWGFKcm5OT1lFeW9pWmg2RkRHZStRdEVJTktScU1XRjlOQ3dlM2hMRjFlNncvY0I5aXNTa3ZHVDR4YURVZE1ReTBDKzM1eXRrZU5FbVFCQ3gxdy9PNE8yRkhyVjd5S3Y2cUR2UjF6SWhOaDVVK1RJMWFhSTBmTUV5MEVaL25PTlpIQUVBRUxTR2hjU2oxMXlKL2pxdjZ0TVcxNVhNUCtpTDJPc0xJcmp1MVVJN2hYeXVzUXdVYWVnRUFNQXZZVjNzdTNoNGUxSDgwZFhsYXIycVQzVnBBOXNtcEdQbk5LNkFpRVlJajBzblc4eHFUUSsrWDI3bkN1TzlXa3pZOENFbXJOL2hWWDJ4NVdDcEVaRGJQRG42K3dFRE9TYlhhb1BWcVhuVEZYSXN2bjhHNzd5ZHI3Mm90QUlEQVBDb1hZRTgvVzFaZ25kM21lVi9BeDlCTUxKSGpzOXBBQUFBQUVsRlRrU3VRbUNDKVwiXG4gIH0sXG4gIFwicmF0eS15ZXMtaGFsZlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kU2l6ZTpiZWZvcmVcIjogMTAwLFxuICAgIFwid2lkdGg6YmVmb3JlXCI6IFwiNDAuOHJweFwiLFxuICAgIFwiaGVpZ2h0OmJlZm9yZVwiOiBcIjQwLjhycHhcIixcbiAgICBcImJhY2tncm91bmRSZXBlYXQ6YmVmb3JlXCI6IFwibm8tcmVwZWF0XCIsXG4gICAgXCJjdXJzb3I6YmVmb3JlXCI6IFwicG9pbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MC44cnB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlOmJlZm9yZVwiOiBcInVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWJDQVlBQUFCdkNPOHNBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQXgxSlJFRlVTSW0xbFU5SUZGRWN4Mzl2WnZidHpPeVlycTJzb3JzaUlaRlFVaUZhbVZsVWxCVmtSSm1wb0tjdWRZZ09XUVFGMGFsTFhib0VDMXFFbHhLQzhGU2lVVkVRSWYzREVuTjNkVnRkM2RKdDNKMTU4MTZIc054MTFKMk4vWjNtZlgrLzcrL3pIdlArSVBZUUxFZEliTHlpYzNtM3ZLcHYxcXBYc0k0RGtJeXhEZ0FtQWNBbHExN09xc0V2dDJPRmZDbVZESCt6Vlc5R1FJSE5uaEhZSE1vaEg3MSt1ZDJWZGFEZENMY0NBUEFzampDZHZwaDFvTU1ZM2JUd0xSbitwcXdDZzFMelB0RVl4d3ZqSFBLcE9DQzNGbVVOaU9uazJTUXpTNENOUmk5bkRTZ2JnZHFsMnRqeHJBQURjcHZIUVVhY3FicENQcnNEY2x0cHVuM1F4Sk9qTnpDZDJmMVBZandIdXBJMFpwck1zMStLUW9ienpKckUrU0tOZ2tnUTZCekhkQjRBQUFGRkhKdm4vNEtBb0NuNzNqdUN6amx2MnVsa1E3NzJzaEtBcFR2UnBCQ05FQVlBdkZ3K3poZHJFVng3c21TK3B4Y3QzS1VUWW1PblMrdS9qbW5VOGxGWktYN1l0bjZiczFYVWVOVHVNQUFBV254NSsrVzI4bHg5NkdtdS9xN2tmMEVVWVpqQ2UrNjVFMzJ0aTNWazlscUV4VU4zWFlsbkhUeFRVU2F3T0Yra1QrTzYxdUw1bnA3VW5Da1FBQ0FvbmE1ejZxOGZPOGlYTlZaZ1AyMmJnN08yalRVZXRXdmNMTDhzRU9EUHkrQWdYNSt2MVFhcjBvRkZiVlZmbmZxYjhwVnFWdHdnWHRXblVXU2ZTUWNHQUlEWmRPRnFOYXZ1U05rWTI1WXUwRUZHbGFCMGFsZkd3SURVVXVFZ0l4YitJUU03bmVyTUdJaFo5RHdBWGFKcm5OT1lFeW9pWmg2RkRHZStRdEVJTktScU1XRjlOQ3dlM2hMRjFlNncvY0I5aXNTa3ZHVDR4YURVZE1ReTBDKzM1eXRrZU5FbVFCQ3gxdy9PNE8yRkhyVjd5S3Y2cUR2UjF6SWhOaDVVK1RJMWFhSTBmTUV5MEVaL25PTlpIQUVBRUxTR2hjU2oxMXlKL2pxdjZ0TVcxNVhNUCtpTDJPc0xJcmp1MVVJN2hYeXVzUXdVYWVnRUFNQXZZVjNzdTNoNGUxSDgwZFhsYXIycVQzVnBBOXNtcEdQbk5LNkFpRVlJajBzblc4eHFUUSsrWDI3bkN1TzlXa3pZOENFbXJOL2hWWDJ4NVdDcEVaRGJQRG42K3dFRE9TYlhhb1BWcVhuVEZYSXN2bjhHNzd5ZHI3Mm90QUlEQVBDb1hZRTgvVzFaZ25kM21lVi9BeDlCTUxKSGpzOXBBQUFBQUVsRlRrU3VRbUNDKVwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiLlxcXCJcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZmZmZmZcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlXCI6IFwiYmxvY2tcIlxuICB9LFxuICBcImJ0blwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDFcbiAgfSxcbiAgXCJidG4tc21hbGxcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI4LjhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI4LjhycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMSxcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImJ0bi1taW5pXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI5LjZycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjkuNnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjkuNnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI5LjZycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS41LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYnRuLWljb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlXCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJidG4tcm93LXN1Ym1pdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0OHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI4LjhycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyOC44cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMSxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNC40cnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIndpZHRoXCI6IDk2XG4gIH0sXG4gIFwiYnRuLWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJ0bi1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI4YTc0NVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxN2EyYjhcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYnRuLXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMjEyNTI5XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZjMTA3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJ0bi1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJ0bi1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY5ZmFcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYnRuLWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJ0bi1kaXNhYmxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMDA3YmZmXCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyOGE3NDVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMjhhNzQ1XCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzE3YTJiOFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMxN2EyYjhcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZjMTA3XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkYzM1NDVcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNmOGY5ZmFcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLWRhcmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzQzYTQwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzM0M2E0MFwiXG4gIH0sXG4gIFwiYnRuLWxpbmtcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJcIjogMFxuICB9LFxuICBcImJ0bi1yb3VuZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0NHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmY2NjAwXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI1Ny42cnB4XCJcbiAgfSxcbiAgXCJidG4tbG92ZVwiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjYWFhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY5XFxcIlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJidG4tbG92ZS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmYzMzAwXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmYzMzAwXCJcbiAgfSxcbiAgXCJidG4tZmF2XCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2FhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGNcXFwiXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI3LjJycHhcIlxuICB9LFxuICBcImJ0bi1mYXYtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmMzMwMFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmMzMwMFwiXG4gIH0sXG4gIFwiYnRuLWZhdi1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2Mi40cnB4XCJcbiAgfSxcbiAgXCJidG4tbG92ZS1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2Mi40cnB4XCJcbiAgfSxcbiAgXCJidG4tc2hhcmVcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzAwQkNENFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDBCQ0Q0XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwiYnRuLWNvbW1lbnRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjYWFhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZVxcXCJcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjcuMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiYnRuLWNvbW1lbnQtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmMzMwMFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmMzMwMFwiXG4gIH0sXG4gIFwiYnRuLWNvbW1lbnQtc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjIuNHJweFwiXG4gIH0sXG4gIFwiYnRuLWJ1eVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjg2LjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImJ0bi1idXktc21hbGxcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2MHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMwMDdiZmZcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcInBvaW50ZXJcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwibm9uZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwieWVzXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXJcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiMxNWFiYTVcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NDVcXFwiXCJcbiAgfSxcbiAgXCJub1wiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyOmFmdGVyXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyOmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplOmFmdGVyOmFmdGVyXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXI6YWZ0ZXJcIjogXCIjMTVhYmE1XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjQ2XFxcIlwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjY2NjY2NjXCJcbiAgfSxcbiAgXCJmbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJmbGV4LWNvbFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcImZsZXgtYWktc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiZmxleC1haS1zdGFydFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiZmxleC1haS1lbmRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJmbGV4LWFpLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmbGV4LWpjLXN0YXJ0XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiZmxleC1qYy1lbmRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiZmxleC1qYy1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtamMtYmV0dHdlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImZsZXgtY2VudGVyXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZyXCI6IHtcbiAgICBcImZsb2F0XCI6IFwicmlnaHRcIlxuICB9LFxuICBcImZsXCI6IHtcbiAgICBcImZsb2F0XCI6IFwibGVmdFwiXG4gIH0sXG4gIFwiY2xlYXJmaXhcIjoge1xuICAgIFwiY2xlYXJcIjogXCJib3RoXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwidGV4dC1yaWdodFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidGV4dC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0LWxlZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwicG9zLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcInBvcy1hYnNcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwicG9zLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcIndoLTMwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJ3aC00MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjk2cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiXG4gIH0sXG4gIFwid2gtNjBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiXG4gIH0sXG4gIFwid2gtMTAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNDBycHhcIlxuICB9LFxuICBcIndoLTE1MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM2MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzYwcnB4XCJcbiAgfSxcbiAgXCJ3aC0yMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI0ODBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4MHJweFwiXG4gIH0sXG4gIFwid21heFwiOiB7XG4gICAgXCJtYXhXaWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJ3NjBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIlxuICB9LFxuICBcIncxMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIlxuICB9LFxuICBcIncxNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNjBycHhcIlxuICB9LFxuICBcImgzMFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiXG4gIH0sXG4gIFwiaDYwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiXG4gIH0sXG4gIFwiaDEwMFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNDBycHhcIlxuICB9LFxuICBcImgxNjBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzg0cnB4XCJcbiAgfSxcbiAgXCJoMjAwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQ4MHJweFwiXG4gIH0sXG4gIFwiZjM2XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiODYuNHJweFwiXG4gIH0sXG4gIFwiZjI4XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjcuMnJweFwiXG4gIH0sXG4gIFwiZjIyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNTIuOHJweFwiXG4gIH0sXG4gIFwiZjIwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDhycHhcIlxuICB9LFxuICBcImYxOFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQzLjJycHhcIlxuICB9LFxuICBcImYxNlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcImYxNFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcImYxMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIlxuICB9LFxuICBcImZ3LTYwMFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCJjbDFcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCJcbiAgfSxcbiAgXCJjbDJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJjbDNcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTY5Njk2XCJcbiAgfSxcbiAgXCJjbC1mMzBcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmYzMzAwXCJcbiAgfSxcbiAgXCJjbC1yZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYzEyNzI1XCJcbiAgfSxcbiAgXCJjbC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiY2wtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiY2wtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImNsLWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImNsLXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJjbC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiY2wtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJjbC1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiY2wtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJjbC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImNsLW1vbmV5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGNjYwMFwiXG4gIH0sXG4gIFwiY2wtbnVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmNzcwMFwiXG4gIH0sXG4gIFwiYmctZWZcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VmZWZlZlwiXG4gIH0sXG4gIFwiYmctZmZmXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWYzMFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmYzMzAwXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy10cmFuc3BhcmVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCJiZy1yb3lhbFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjOGE2ZGU5XCJcbiAgfSxcbiAgXCJiZy1kaXNhYmxlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkJGQkZCXCJcbiAgfSxcbiAgXCJwZC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicGRsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicGRyLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInBkdC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicGRiLTVcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJwZC0xMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInBkbC0xMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJwZHItMTBcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInBkdC0xMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIlxuICB9LFxuICBcInBkYi0xMFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcInBkYi0zMFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNzJycHhcIlxuICB9LFxuICBcInBkdC0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCJcbiAgfSxcbiAgXCJtZy01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtZ2ItNVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWd0LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1nbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWdyLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWctMTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1nYi0xMFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWd0LTEwXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtZ2wtMTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtZ3ItMTBcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWdyLTIwXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDhycHhcIlxuICB9LFxuICBcIm1nYi0yMFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0OHJweFwiXG4gIH0sXG4gIFwibWdsLTIwXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwibWd0LTIwXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJtZ2ItMFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcnB4XCJcbiAgfSxcbiAgXCJiZC1tcC01XCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJiZC1tcC0xMFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiXG4gIH0sXG4gIFwiYmQtbXAtMFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwiYmRcIjoge1xuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkZWUyZTZcIlxuICB9LFxuICBcImJkdFwiOiB7XG4gICAgXCJib3JkZXJUb3BcIjogXCIxcHggc29saWQgI2RlZTJlNlwiXG4gIH0sXG4gIFwiYmRyXCI6IHtcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiMXB4IHNvbGlkICNkZWUyZTZcIlxuICB9LFxuICBcImJkYlwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2RlZTJlNlwiXG4gIH0sXG4gIFwiYmRsXCI6IHtcbiAgICBcImJvcmRlckxlZnRcIjogXCIxcHggc29saWQgI2RlZTJlNlwiXG4gIH0sXG4gIFwiYmQtMFwiOiB7XG4gICAgXCJib3JkZXJcIjogMFxuICB9LFxuICBcImJkdC0wXCI6IHtcbiAgICBcImJvcmRlclRvcFwiOiAwXG4gIH0sXG4gIFwiYmRyLTBcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRcIjogMFxuICB9LFxuICBcImJkYi0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiAwXG4gIH0sXG4gIFwiYmRsLTBcIjoge1xuICAgIFwiYm9yZGVyTGVmdFwiOiAwXG4gIH0sXG4gIFwiYmQtcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJkLXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJkLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZC1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmQtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJkLWRhbmdlclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJkLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmQtZGFya1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJkLXdoaXRlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmQtcmFkaXVzLTVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImJkLXJhZGl1cy0xMFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwiYmQtcmFkaXVzLTIwXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJiZC1yYWRpdXMtNTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwiZml4Rm9vdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJmaXhGb290LXJvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MFwiXG4gIH0sXG4gIFwiY2hhdGJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcImNoYXRib3gtbmljay1hXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwiY2hhdGJveC1uaWNrLWJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIlxuICB9LFxuICBcImNoYXRib3gtZGVzYy1hXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJpY29uZm9udFwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjZWZlZmVmXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjAxXFxcIlwiLFxuICAgIFwibGVmdDphZnRlclwiOiBcIi02XCIsXG4gICAgXCJ0b3A6YWZ0ZXJcIjogXCIzXCJcbiAgfSxcbiAgXCJjaGF0Ym94LWRlc2MtYlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyOmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImNvbG9yOmFmdGVyOmFmdGVyXCI6IFwiI2VmZWZlZlwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTYzNVxcXCJcIixcbiAgICBcInJpZ2h0OmFmdGVyXCI6IFwiLTZcIixcbiAgICBcInRvcDphZnRlclwiOiBcIjEwXCJcbiAgfSxcbiAgXCJpbWdMaXN0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCIwXCIsXG4gICAgXCJyaWdodFwiOiBcIjBcIixcbiAgICBcInRvcFwiOiBcIjQ0XCIsXG4gICAgXCJib3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwiaW1nTGlzdC1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IDMzLjMzLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJpbWdMaXN0LWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTBcbiAgfSxcbiAgXCJpbUVtb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbUVtby0wXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCIwXCJcbiAgfSxcbiAgXCJpbUVtby0xXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMzBcIlxuICB9LFxuICBcImltRW1vLTJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi02MFwiXG4gIH0sXG4gIFwiaW1FbW8tM1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTkwXCJcbiAgfSxcbiAgXCJpbUVtby00XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTIwXCJcbiAgfSxcbiAgXCJpbUVtby01XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTUwXCJcbiAgfSxcbiAgXCJpbUVtby02XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTgwXCJcbiAgfSxcbiAgXCJpbUVtby03XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMjEwXCJcbiAgfSxcbiAgXCJpbUVtby04XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMjQwXCJcbiAgfSxcbiAgXCJpbUVtby05XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMjcwXCJcbiAgfSxcbiAgXCJpbUVtby0xMFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTMwMFwiXG4gIH0sXG4gIFwiaW1FbW8tMTFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0zMzBcIlxuICB9LFxuICBcImltRW1vLTEyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMzYwXCJcbiAgfSxcbiAgXCJpbUVtby0xM1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTM5MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi00MjBcIlxuICB9LFxuICBcImltRW1vLTE1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNDUwXCJcbiAgfSxcbiAgXCJpbUVtby0xNlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTQ4MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi01MTBcIlxuICB9LFxuICBcImltRW1vLTE4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNTQwXCJcbiAgfSxcbiAgXCJpbUVtby0xOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTU3MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi02MDBcIlxuICB9LFxuICBcImltRW1vLTIxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNjMwXCJcbiAgfSxcbiAgXCJpbUVtby0yMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTY2MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi02OTBcIlxuICB9LFxuICBcImltRW1vLTI0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNzIwXCJcbiAgfSxcbiAgXCJpbUVtby0yNVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTc1MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi03ODBcIlxuICB9LFxuICBcImltRW1vLTI3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItODEwXCJcbiAgfSxcbiAgXCJpbUVtby0yOFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTg0MFwiXG4gIH0sXG4gIFwiaW1FbW8tMjlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi04NzBcIlxuICB9LFxuICBcImltRW1vLTMwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItOTAwXCJcbiAgfSxcbiAgXCJpbUVtby0zMVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTkzMFwiXG4gIH0sXG4gIFwiaW1FbW8tMzJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi05NjBcIlxuICB9LFxuICBcImltRW1vLTMzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItOTkwXCJcbiAgfSxcbiAgXCJpbUVtby0zNFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEwMjBcIlxuICB9LFxuICBcImltRW1vLTM1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTA1MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMDgwXCJcbiAgfSxcbiAgXCJpbUVtby0zN1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTExMTBcIlxuICB9LFxuICBcImltRW1vLTM4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTE0MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMTcwXCJcbiAgfSxcbiAgXCJpbUVtby00MFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEyMDBcIlxuICB9LFxuICBcImltRW1vLTQxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTIzMFwiXG4gIH0sXG4gIFwiaW1FbW8tNDJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMjYwXCJcbiAgfSxcbiAgXCJpbUVtby00M1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEyOTBcIlxuICB9LFxuICBcImltRW1vLTQ0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTMyMFwiXG4gIH0sXG4gIFwiaW1FbW8tNDVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMzUwXCJcbiAgfSxcbiAgXCJpbUVtby00NlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEzODBcIlxuICB9LFxuICBcImltRW1vLTQ3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTQxMFwiXG4gIH0sXG4gIFwiaW1FbW8tNDhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNDlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNThcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNTlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNjlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tNzlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tODlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOTdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tOThcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiZW1vRml4Ym94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCI1XCIsXG4gICAgXCJyaWdodFwiOiBcIjVcIixcbiAgICBcImJvdHRvbVwiOiBcIjEwMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcIldlYmtpdEJvcmRlclJhZGl1c1wiOiBcIjIwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMFwiLFxuICAgIFwiekluZGV4XCI6IDk5OVxuICB9LFxuICBcInVuaS10YWJiYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLXBpY2tlci12aWV3LXdyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLXN3aXBlci1kb3RzXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInl0aWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcInl0aWNvblxcXCJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiV2Via2l0Rm9udFNtb290aGluZ1wiOiBcImFudGlhbGlhc2VkXCIsXG4gICAgXCJNb3pPc3hGb250U21vb3RoaW5nXCI6IFwiZ3JheXNjYWxlXCJcbiAgfSxcbiAgXCJpY29uLWh1aWZ1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaWFuemFuLWFzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxN1xcXCJcIlxuICB9LFxuICBcImljb24taWNvbmZvbnRzaGFuY2h1MVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxOVxcXCJcIlxuICB9LFxuICBcImljb24taWNvbmZvbnR3ZWl4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjI0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG91eWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoYW5jaHU0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWFveGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWppYW50b3VyLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZlbnhpYW5nMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxZVxcXCJcIlxuICB9LFxuICBcImljb24tcGluZ2ppYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3YlxcXCJcIlxuICB9LFxuICBcImljb24tZGFpZnVrdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waW5nbHVuLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3VjYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14dWFuemhvbmcyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pY29uLXRlc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJpYW5qaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIlxuICB9LFxuICBcImljb24tenVvc2hhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWppYTJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNvdXN1b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZVxcXCJcIlxuICB9LFxuICBcImljb24tYXJyb3ctZmluZS11cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMVxcXCJcIlxuICB9LFxuICBcImljb24tbGlzaGlqaWx1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWF0dWJpYW8tLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3VjYW5nX3h1YW56aG9uZ3podWFuZ3RhaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhOVxcXCJcIlxuICB9LFxuICBcImljb24tamlhMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxY1xcXCJcIlxuICB9LFxuICBcImljb24tYmFuZ3podTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2M2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFycm93LWxlZnQtYm90dG9tXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcnJvdy1yaWdodC1ib3R0b21cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFycm93LWxlZnQtdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pY29uLS1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXp1b2ppYW50b3UtdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyZFxcXCJcIlxuICB9LFxuICBcImljb24tLWppYW5oYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLUdyb3VwLVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4OFxcXCJcIlxuICB9LFxuICBcImljb24teW91XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10dWlqaWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYW5nemh1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGV6aGkxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pTGlua2FwcC1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNhb21pYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNoZXpoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZlxcXCJcIlxuICB9LFxuICBcImljb24tc2hvdWhvdXR1aWt1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvdXd1Y2hlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaXpoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxNFxcXCJcIlxuICB9LFxuICBcImljb24teGluZ3hpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXp1YW5zaGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXp1b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzY1xcXCJcIlxuICB9LFxuICBcImljb24tc2hvdWNhbmcyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi15aXNob3VodW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWFcXFwiXCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1M2E4NWZmJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9udnVlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJjMGE1MWE1Y1wiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaWFwcC95b3VxdS13ZWIvcGFnZXMvbnZ1ZS9udnVlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL252dWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNTNhODVmZiZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjb250ZW50XCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlLWhlYWRlclwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0eWxlOiB7IGhlaWdodDogX3ZtLnN0YXR1c0JhckhlaWdodCB9IH0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZS1oZWFkZXItd3JhcHBlclwiXSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2UtaGVhZGVyLWxlZnRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxvZ29cIiwgXCJ5dGljb25cIl0gfSwgW192bS5fdihcIu6YlVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlLWhlYWRlci1jZW50ZXJcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaC1pbnB1dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLovpPlhaXlhbPplK7lrZfmkJzntKJcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlLWhlYWRlci1yaWdodFwiXSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb250cmlidXRlLWljb25cIl0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFDMjBsRVFWUm9RKzFZN1ZFVlFSRHNqa0F6VUNOUUlnQWpVQ05RSWhBakVDTlFJaEFqUUNJUU1zQUl4QXdnZ3JhYTJxWE80M2J2ZHUrTGVuVmJ4US9xN2U1TnovVE05Q3l4STRzN2dnTWJrTWNXeVMwaVcwUm04c0JHclprY1czM3RxSWhJZWc3Z0k0QlhIUlpjQVRnaGVWMXRYY0hCYWlDU2JQd3ZBRTh6MzdzQjhKcWtRYzI2cW9CSXN2Ri9Bb2hiQUYyR0d1Z1RBSTdJSGttRG1tMFZBd2tnSElsSXAzY2tmN1l0REJHN0NHQ3VTTzdOaGdJb2x5aVN2Z1A0RUl6NlJQSmJ5a0JKM3VmOVhxY2tEK2NDazQySUpDZnlFUUFuZFh2OUlCa0JKZTJUZEF6ZzgwZ0FwcTRkY1pLNkp3bEUwbHNBWjRtRDV5VDkrNkFsNlJUQSswR2I4NXM2YWV3ak9TRG0vUnNBdndFMGMrQ0NwTGxmdEVMT0hQUlV1ZFNkUHJjUElPbkFIQkFiNjhOZlNKb2VxNjBHUFM5Skd0U0R0UUZaTWp4VFJjUU5yUzB6L0w5TGI3TEpoWnh3anNWKzQ4cGpqaGQzK2FtQXBKeC9TTkxWNkw4VjlKZDdSeWVYQVRqM2ZIYXdCaHNMeEo1MGtuZHBLUnR4MUk1SWgvNXF5cGNvV1F5OFNJT05BbEtUQTVKTW01Y0FET0M0M2ZVbHVibCtEWGNQbGkyTEFtbkprV1RqYWpYYVRucDIwRFdxZy9MeVd4cVJSalNTSDR0M1NvbzlxbmV2enl3ZEVRVkRzMEl5R0haUE1aSzlDbncwRUVuN0pDK0hSRWRTQk9KQktpdGhKTG1pZVJUQTdFQWFRbStRUkpIa1N1UkJxbmQvdzhPM0pITVQ1cDBQUjBXa2dzZFJaRjZUZkpHTG9pU1g3MmNBU2tlQjhtU3ZBSEpQbDl3UTFaTDB2VFJjUENMaGc4MjV3M25peEwrVEpLRlp1b2ZFamo4b0dtc0JNZDhOeGhvcnQ4NDlMZzk5a0ZnMFI1cFdoK2JvSnVZOGFLNi9vZU0vMEdnOU9WWGZFRXR6cE11UVFLZFlsVzVxbE84cTFCclNiMnIyckVhdEdtTWZOYldtQWpRMklyR1V1bU1YVDNWVGdRajMrRjNOZjhtU25YdDg4Q0FVbnp3bnRxdnFPczg0QjZtQzBmZlNhQy80TlRFMXRsWlpWSEhJRHZWTFkzSTg3cFhRRlI5ZDVjZ0daQlczWno2NlJXU0x5RXdlMktnMWsyT3JyOTJaaVB3RGVBeWNRc3d6S0JBQUFBQUFTVVZPUks1Q1lJST1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNvbnRyaWJ1dGUtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaKleeov1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS10YWItYmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRyYWc6IHRydWUsXG4gICAgICAgICAgICAgIHRhYkJhcnM6IF92bS50YWJCYXJzLFxuICAgICAgICAgICAgICB0YWJJbmRleDogX3ZtLnRhYkN1cnJlbnRJbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhYkNoYW5nZTogX3ZtLnRhYkNoYW5nZSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInUtc2xpZGVyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzbGlkZXJcIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGluZGV4OiBfdm0udGFiQ3VycmVudEluZGV4LCBpbmZpbml0ZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udGFiQ2hhbmdlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKHRhYkl0ZW0sIHRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxpc3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHRhYkluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxpc3QtY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGxvYWRtb3JlOiBfdm0ubG9hZE1vcmUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxvYWRpbmdcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheTogdGFiSXRlbS5yZWZyZXNoaW5nID8gXCJzaG93XCIgOiBcImhpZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJlZnJlc2g6IF92bS5vblJlZnJlc2ggfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5yZWZyZXNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibG9hZGluZy1pbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsb2FkaW5nLWljb25cIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibG9hZGluZy10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkl0ZW0ucmVmcmVzaGluZyA/IFwi5q2j5Zyo5Yqg6L29Li5cIiA6IFwi5LiL5ouJ5Yi35paw5pWw5o2uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodGFiSXRlbS5uZXdzTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibmV3cy1pdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uYXZUb0RldGFpbHMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IFtcInRpdGxlXCIsIFwidGl0bGVcIiArIGl0ZW0udHlwZV0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWctbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1nLWxpc3RcIiArIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5sZW5ndGggPT09IDEgJiYgaXRlbS50eXBlID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaW1nLWxpc3Qtc2luZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uaW1hZ2VzLCBmdW5jdGlvbihpbWdJdGVtLCBpbWdJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGltZ0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWctd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZy13cmFwcGVyXCIgKyBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaW1nLXdyYXBwZXItc2luZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpbWdcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaW1nSXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widmlkZW8tdGlwXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInZpZGVvLXRpcC1pY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBRUMwbEVRVlJvUSsyYWpWRVZNUkRIZHp1d0E2QUNwUUt4QXJFQ3RRS3hBcUVDb1FLaEFxRUNvUUt4QXFFRHJXQ2RuN054OHZKeSticDNUNFloTTIrTzhTN0ovck83Ly8ySUtvOWs2Q1BCSVU5QWNwbzBzMTBSZVNraVBBOG10SDB0SW5jaWNxT3FQRGN5Wm12RWhYOHJJdThjUUk5Z3R5SnlLU0lYYzBFTkEzRUFueHhBai9CVDM1Nkx5RWRWL1RXeVdEY1FNM3NtSWdBNG10andYa1E0YVg0TW5najNRa1NZeTVQZlRtYitsYW9lTGc3RXpCRGdhOGFFRUI0VE9WZlZBS0FvajJzVWMrUVhRQzBQeE16WThFc2kzVzhST1ZiVjA1RlRESFBNREMxQUVCekVjcVkxQWVMTVFReHRYQU51WnZqTWEvY2IvaTZPcW85a1FLQ0ZJMVd0TGw3YmZPcTltVUhkMy93OU5EMUY1ZitXS0FKeG4vZ2ViUWlJZzFZL21BRUVVc0RYOEowelZaMGlsam9RWnlkQVlMdU1yWUNJd1hPUXJZYzJxUkV6dzRFL1JBdS9YOUtjUnJVWDVtV0JPRFgrakJZL1VkWGp1WnVOem5kNVBuc2NlcE5qdGlrZ09ESnBSekNwM1ZGYUhCVStNVEVPa1NETUlKMGhGS3lNTlNBWmJaQTJOTVVKbjd1anFqZWJBQkRXeUREblhwcWI1WURFdm5HdnFzSFppN0k1Q01nQnhpSER4Ung1Ym1TWUdabHl5QURXbUN3SEJOOEl3amRSSDVJbTNCK0VuNVVJSnVZRkJlTW5qRnRWM1kvZnJ3REptTlYrSy8xTkFHRXZJditwcXA3TVVVMUd0aFh6U29IRStWU3pXUlUwRXN1T2FVRGh3K2FXbU5kS09FaUJ4T3pRbFlrV05KSXFBaUFJMFYwZG1oa1pOdmtYWXlVa3BFRFloRkoxN2NPYVdYUUFDVXR4YVBoZ2M5SnBadkZCcitSZy94Tkk4QiswdzBsWFIwTER6VUNJb0UwYk5QcElTZEMxdUpEN3VKUVZselR5RUlGUWdGR2hNcG8xMHBWZkRmZ0l3bEFpVTlzMGFmNGgrZ2dsQVJrRThXVVJaOThHL1Y2NUZoYWwzemdnM3FucVhwVksvSU1HMC9yaEFPWUV4RGg5S2daRWNxeTREdGxFaXJLcFRndXRxTGpzbms1Um5FYUxXZWFVaGlZMHNyRk9TMUt4cnFWUHRUUysyYnk4eHNkc25rT05OTjVHMHBEQ1FjVm10Y2FvTFlWVlY2M2UwekRvOEwrME9WZ3ZyTnk4NGxJWGVtUmlNMDIyQ3RqeW5Xc2FiVkN3TWRwS1hRZVNPbFpYY0d3UnNQV2JKQWd5TFp2T1BPaDJVS1pXbjZ4WVMwRGlibC9JVkYrMVZveXRKMTV3YnF5Q3Rta3dLZElaR25aWkUrOXRtYkxJNG1DOFZSdURBRzh4cG8wMHNRRkRpMmlSSnJhYlUyakdCWVZWbWJNS3hKMC9kemZTWGVHVnpNM1ppUlp0MnRHc2dtRGRKaUFGTUdpSE5QeGlqaytZR1YxTnN1SGdEODJhQ0I4MkE0bG9tZG9odmY4anJRbTNzNjFYYnpnekFNSnRWWHdXT1BaaEQ3RjBBWEV3bkJycWp6djFzUkNBQ25mcC9Idklkc05sVGJpRG4rcGdEdVZuM1VDQ3hONHdBMUJvZHMreHJyOFIyNi95dXV1VUxoOHA4RDBuU3pzVEU4bGRPWmNBaHR0Z0tzVWhBRU0rVWp0eTF4SW0xUEpmT0s3bkNoL0xNMnhhTlZEYmZ2OEVaTnNuWHR2dkR5cm1GMUZJQktJd0FBQUFBRWxGVGtTdVFtQ0NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImltZy1lbXB0eVwiXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtcImJvdFwiLCBcImJvdFwiICsgaXRlbS50eXBlXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImF1dGhvclwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmF1dGhvcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0aW1lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGltZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9hZC1tb3JlLXdyYXBwZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJtaXgtbG9hZC1tb3JlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0YXR1czogdGFiSXRlbS5sb2FkTW9yZVN0YXR1cyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdDwhLS0gXHJcblx0XHRcdHdlZXjnu4Tku7bmlofmoaNcclxuXHRcdFx0aHR0cHM6Ly93ZWV4LmFwYWNoZS5vcmcvemgvZG9jcy9jb21wb25lbnRzL3NsaWRlci5odG1sXHJcblx0XHQtLT4gXHJcblx0XHRcclxuXHRcdDwhLS0g5qCH6aKY5qCPIC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcblx0XHRcdDwhLS0g54q25oCB5qCP5Y2g5L2NIC0tPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgaGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQgfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwibG9nb1wiPkxvZ288L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2dvIHl0aWNvblwiPiYjeGU2MTU7PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VhcmNoLWlucHV0XCI+6L6T5YWl5YWz6ZSu5a2X5pCc57SiPC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY29udHJpYnV0ZS1pY29uXCIgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQzIwbEVRVlJvUSsxWTdWRVZRUkRzamtBelVDTlFJZ0FqVUNOUUloQWpFQ05RSWhBalFDSVFNc0FJeEF3Z2dyYWEycVhPNDNidmR1K0xlblZieFEvcTdlNU56L1RNOUN5eEk0czdnZ01ia01jV3lTMGlXMFJtOHNCR3Jaa2NXMzN0cUloSWVnN2dJNEJYSFJaY0FUZ2hlVjF0WGNIQmFpQ1NiUHd2QUU4ejM3c0I4SnFrUWMyNnFvQklzdkYvQW9oYkFGMkdHdWdUQUk3SUhrbURtbTBWQXdrZ0hJbElwM2NrZjdZdERCRzdDR0N1U083TmhnSW9seWlTdmdQNEVJejZSUEpieWtCSjN1ZjlYcWNrRCtjQ2s0MklKQ2Z5RVFBbmRYdjlJQmtCSmUyVGRBemc4MGdBcHE0ZGNaSzZKd2xFMGxzQVo0bUQ1eVQ5KzZBbDZSVEErMEdiODVzNmFld2pPU0RtL1JzQXZ3RTBjK0NDcExsZnRFTE9IUFJVdWRTZFByY1BJT25BSEJBYjY4TmZTSm9lcTYwR1BTOUpHdFNEdFFGWk1qeFRSY1FOclMwei9MOUxiN0xKaFp4d2pzVis0OHBqamhkMythbUFwSngvU05MVjZMOFY5SmQ3UnllWEFUajNmSGF3QmhzTHhKNTBrbmRwS1J0eDFJNUloLzVxeXBjb1dReThTSU9OQWxLVEE1Sk1tNWNBRE9DNDNmVWx1YmwrRFhjUGxpMkxBbW5Ka1dUamFqWGFUbnAyMERXcWcvTHlXeHFSUmpTU0g0dDNTb285cW5ldnp5d2RFUVZEczBJeUdIWlBNWks5Q253MEVFbjdKQytIUkVkU0JPSkJLaXRoSkxtaWVSVEE3RUFhUW0rUVJKSGtTdVJCcW5kL3c4TzNKSE1UNXAwUFIwV2tnc2RSWkY2VGZKR0xvaVNYNzJjQVNrZUI4bVN2QUhKUGw5d1ExWkwwdlRSY1BDTGhnODI1dzNuaXhMK1RKS0ZadW9mRWpqOG9HbXNCTWQ4Tnhob3J0ODQ5TGc5OWtGZzBSNXBXaCtib0p1WThhSzYvb2VNLzBHZzlPVlhmRUV0enBNdVFRS2RZbFc1cWxPOHExQnJTYjJyMnJFYXRHbU1mTmJXbUFqUTJJckdVdW1NWFQzVlRnUWozK0YzTmY4bVNuWHQ4OENBVW56d250cXZxT3M4NEI2bUMwZmZTYUMvNE5URTF0bFpaVkhISUR2VkxZM0k4N3BYUUZSOWQ1Y2dHWkJXM1p6NjZSV1NMeUV3ZTJLZzFrMk9ycjkyWmlQd0RlQXljUXN3ektCQUFBQUFBU1VWT1JLNUNZSUk9XCIgLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udHJpYnV0ZS10ZXh0XCI+5oqV56i/PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDwhLS0gdW5pIOWumOaWuemhtumDqOmAiemhueWNoee7hOS7tiAtLT5cclxuXHRcdDx1bmktdGFiLWJhciA6ZHJhZz1cInRydWVcIiA6dGFiLWJhcnM9XCJ0YWJCYXJzXCIgOnRhYi1pbmRleD1cInRhYkN1cnJlbnRJbmRleFwiIEB0YWJDaGFuZ2U9XCJ0YWJDaGFuZ2VcIj48L3VuaS10YWItYmFyPlxyXG5cdFx0XHJcblx0XHQ8IS0tIHNsaWRlcuWwseaYr3VuaSBzd2lwZXIgLS0+XHJcblx0XHQ8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgOmluZGV4PVwidGFiQ3VycmVudEluZGV4XCIgOmluZmluaXRlPVwiZmFsc2VcIiBAY2hhbmdlPVwidGFiQ2hhbmdlXCI+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIGxpc3Qg5Z6C55u05rua5Yqo5YiX6KGo57uE5Lu2IC0tPlxyXG5cdFx0XHQ8bGlzdCB2LWZvcj1cIih0YWJJdGVtLCB0YWJJbmRleCkgaW4gdGFiQmFyc1wiIDprZXk9XCJ0YWJJbmRleFwiIGNsYXNzPVwibGlzdC1jb250ZW50XCIgQGxvYWRtb3JlPVwibG9hZE1vcmVcIj5cclxuXHRcdFx0XHQ8IS0tIHJlZnJlc2gg5LiL5ouJ5Yi35paw57uE5Lu2ICBcclxuXHRcdFx0XHQqIFx0IHdlZXgg55qEcmVmcmVzaOWSjGxvYWRpbmfnu4Tku7blnKhpb3PmlYjmnpzlvojlpb3vvIzkvYbmmK/lnKjlronljZPnq6/mlYjmnpzlubbkuI3lpb1cclxuXHRcdFx0XHQqIC0tPlxyXG5cdFx0XHRcdDxyZWZyZXNoIGNsYXNzPVwibG9hZGluZ1wiIEByZWZyZXNoPVwib25SZWZyZXNoXCIgOmRpc3BsYXk9XCJ0YWJJdGVtLnJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cclxuXHRcdFx0XHRcdDxsb2FkaW5nLWluZGljYXRvciB2LWlmPVwidGFiSXRlbS5yZWZyZXNoaW5nXCIgY2xhc3M9XCJsb2FkaW5nLWljb25cIj48L2xvYWRpbmctaW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLXRleHRcIj57e3RhYkl0ZW0ucmVmcmVzaGluZz8n5q2j5Zyo5Yqg6L29Li4nOiAn5LiL5ouJ5Yi35paw5pWw5o2uJ319PC90ZXh0PlxyXG5cdFx0XHRcdDwvcmVmcmVzaD5cclxuXHRcdFx0XHQ8IS0tIOaWsOmXu+WIl+ihqCAtLT5cclxuXHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFiSXRlbS5uZXdzTGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwibmV3cy1pdGVtXCIgQGNsaWNrPVwibmF2VG9EZXRhaWxzKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJbJ3RpdGxlJywgJ3RpdGxlJytpdGVtLnR5cGVdXCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJpdGVtLmltYWdlcy5sZW5ndGggPiAwXCIgOmNsYXNzPVwiWydpbWctbGlzdCcsICdpbWctbGlzdCcraXRlbS50eXBlLCBpdGVtLmltYWdlcy5sZW5ndGggPT09IDEgJiYgaXRlbS50eXBlPT09MyA/ICdpbWctbGlzdC1zaW5nbGUnOiAnJ11cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBcclxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIihpbWdJdGVtLCBpbWdJbmRleCkgaW4gaXRlbS5pbWFnZXNcIiA6a2V5PVwiaW1nSW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdDpjbGFzcz1cIlsnaW1nLXdyYXBwZXInLCAnaW1nLXdyYXBwZXInK2l0ZW0udHlwZSwgaXRlbS5pbWFnZXMubGVuZ3RoID09PSAxICYmIGl0ZW0udHlwZT09PTMgPyAnaW1nLXdyYXBwZXItc2luZ2xlJzogJyddXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltZ1wiIDpzcmM9XCJpbWdJdGVtXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLXRpcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidmlkZW8tdGlwLWljb25cIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFFQzBsRVFWUm9RKzJhalZFVk1SREhkenV3QTZBQ3BRS3hBckVDdFFLeEFxRUNvUUtoQXFFQ29RS3hBcUVEcldDZG43Tng4dkp5K2JwM1Q0WWhNMitPOFM3Si9yTzcvLzJJS285azZDUEJJVTlBY3BvMHMxMFJlU2tpUEE4bXRIMHRJbmNpY3FPcVBEY3labXZFaFg4ckl1OGNRSTlndHlKeUtTSVhjMEVOQTNFQW54eEFqL0JUMzU2THlFZFYvVFd5V0RjUU0zc21JZ0E0bXRqd1hrUTRhWDRNbmdqM1FrU1l5NVBmVG1iK2xhb2VMZzdFekJEZ2E4YUVFQjRUT1ZmVkFLQW9qMnNVYytRWFFDMFB4TXpZOEVzaTNXOFJPVmJWMDVGVERIUE1EQzFBRUJ6RWNxWTFBZUxNUVF4dFhBTnVadmpNYS9jYi9pNk9xbzlrUUtDRkkxV3RMbDdiZk9xOW1VSGQzL3c5TkQxRjVmK1dLQUp4bi9nZWJRaUlnMVkvbUFFRVVzRFg4SjB6VlowaWxqb1FaeWRBWUx1TXJZQ0l3WE9RclljMnFSRXp3NEUvUkF1L1g5S2NSclVYNW1XQk9EWCtqQlkvVWRYanVadU56bmQ1UG5zY2VwTmp0aWtnT0RKcFJ6Q3AzVkZhSEJVK01URU9rU0RNSUowaEZLeU1OU0FaYlpBMk5NVUpuN3VqcWplYkFCRFd5RERuWHBxYjVZREV2bkd2cXNIWmk3STVDTWdCeGlIRHhSeDVibVNZR1pseXlBRFdtQ3dIQk44SXdqZFJINUltM0IrRW41VUlKdVlGQmVNbmpGdFYzWS9mcndESm1OVitLLzFOQUdFdkl2K3BxcDdNVVUxR3RoWHpTb0hFK1ZTeldSVTBFc3VPYVVEaHcrYVdtTmRLT0VpQnhPelFsWWtXTkpJcUFpQUkwVjBkbWhrWk52a1hZeVVrcEVEWWhGSjE3Y09hV1hRQUNVdHhhUGhnYzlKcFp2RkJyK1JnL3hOSThCKzB3MGxYUjBMRHpVQ0lvRTBiTlBwSVNkQzF1SkQ3dUpRVmx6VHlFSUZRZ0ZHaE1wbzEwcFZmRGZnSXdsQWlVOXMwYWY0aCtnZ2xBUmtFOFdVUlo5OEcvVjY1RmhhbDN6Z2czcW5xWHBWSy9JTUcwL3JoQU9ZRXhEaDlLZ1pFY3F5NER0bEVpcktwVGd1dHFManNuazVSbkVhTFdlYVVoaVkwc3JGT1MxS3hycVZQdFRTKzJieTh4c2RzbmtPTk5ONUcwcERDUWNWbXRjYW9MWVZWVjYzZTB6RG84TCswT1ZndnJOeTg0bElYZW1SaU0wMjJDdGp5bldzYWJWQ3dNZHBLWFFlU09sWlhjR3dSc1BXYkpBZ3lMWnZPUE9oMlVLWlduNnhZUzBEaWJsL0lWRisxVm95dEoxNXdicXlDdG1rd0tkSVpHblpaRSs5dG1iTEk0bUM4VlJ1REFHOHhwbzAwc1FGRGkyaVJKcmFiVTJqR0JZVlZtYk1LeEowL2R6ZlNYZUdWek0zWmlSWnQydEdzZ21EZEppQUZNR2lITlB4aWprK1lHVjFOc3VIZ0Q4MmFDQjgyQTRsb21kb2h2ZjhqclFtM3M2MVhiemd6QU1KdFZYd1dPUFpoRDdGMEFYRXduQnJxanp2MXNSQ0FDbmZwL0h2SWRzTmxUYmlEbitwZ0R1Vm4zVUNDeE40d0ExQm9kcyt4cnI4UjI2L3l1dXVVTGg4cDhEMG5TenNURThsZE9aY0FodHRnS3NVaEFFTStVanR5MXhJbTFQSmZPSzduQ2gvTE0yeGFOVkRiZnY4RVpOc25YdHZ2RHlybUYxRklCS0l3QUFBQUFFbEZUa1N1UW1DQ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJpbWctZW1wdHlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiWydib3QnLCAnYm90JytpdGVtLnR5cGVdXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYXV0aG9yXCI+e3tpdGVtLmF1dGhvcn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVcIj57e2l0ZW0udGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jZWxsPiBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOWKoOi9veabtOWkmue7hOS7tiBcclxuXHRcdFx0XHRcdHdlZXggbG9hZGluZ+e7hOS7tuWcqOaWsEhCdWlsZFjkuK3lronljZPkvJrpl6rpgIDvvIzmjaLnlKjoh6rlrprkuYnnu4Tku7ZcclxuXHRcdFx0XHQtLT5cclxuXHRcdFx0XHQ8Y2VsbCBjbGFzcz1cImxvYWQtbW9yZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8bWl4LWxvYWQtbW9yZSA6c3RhdHVzPVwidGFiSXRlbS5sb2FkTW9yZVN0YXR1c1wiPjwvbWl4LWxvYWQtbW9yZT5cclxuXHRcdFx0XHQ8L2NlbGw+XHJcblxyXG5cdFx0XHQ8L2xpc3Q+XHJcblx0XHQgXHJcblx0XHQ8L3NsaWRlcj5cclxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGluZGV4TWl4aW4gZnJvbSAnQC9jb21tb24vaW5kZXgnXHJcblx0aW1wb3J0IHVuaVRhYkJhciBmcm9tICdAL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWUnXHJcblx0aW1wb3J0IG1peExvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZSdcclxuXHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdC8qKlxyXG5cdFx0ICog5aSn6YOo5YiGanPlj6/ku6XlpI3nlKh2dWXkuK3lhpnnmoRcclxuXHRcdCAqIOebtOaOpea3t+WFpeWNs+WPr1xyXG5cdFx0ICovXHJcblx0XHRtaXhpbnM6IFtpbmRleE1peGluXSwgIFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlUYWJCYXIsXHJcblx0XHRcdG1peExvYWRNb3JlXHJcblx0XHR9LFxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6ICcwd3gnLCAvL+eKtuaAgeagj+WNoOS9jemrmOW6plxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCl7XHJcblx0XHRcdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHQgICAgJ2ZvbnRGYW1pbHknOiBcInl0aWNvblwiLFxyXG5cdFx0XHQgICAgJ3NyYyc6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEwNzg2MDRfM21yaGFjMm8zb2kudHRmJylcIixcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly/ojrflj5bnirbmgIHmoI/pq5jluqbnu5npobbpg6jljaDkvY3oioLngrlcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcz0+e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0ICsgJ3d4JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC8v6I635Y+W5pWw5o2u77yM5pa55rOV6YCa6L+HbWl4aW7mt7flhaVcclxuXHRcdFx0dGhpcy5sb2FkVGFiYmFycygpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcclxuXHRcdFx0dGFiQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnRhYkN1cnJlbnRJbmRleCA9IGUuaW5kZXg7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/nrKzkuIDmrKHliIfmjaJ0YWLvvIzliqjnlLvnu5PmnZ/lkI7pnIDopoHliqDovb3mlbDmja5cclxuXHRcdFx0XHRsZXQgdGFiSXRlbSA9IHRoaXMudGFiQmFyc1t0aGlzLnRhYkN1cnJlbnRJbmRleF07XHJcblx0XHRcdFx0aWYodGhpcy50YWJDdXJyZW50SW5kZXggIT09IDAgJiYgdGFiSXRlbS5sb2FkZWQgIT09IHRydWUpe1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ2FkZCcpO1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5LiL5ouJ5Yi35pawXHJcblx0XHRcdG9uUmVmcmVzaChlKXtcclxuXHRcdFx0XHR0aGlzLmxvYWROZXdzTGlzdCgncmVmcmVzaCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WKoOi9veabtOWkmlxyXG5cdFx0XHRsb2FkTW9yZSh0YWJJdGVtKXtcclxuXHRcdFx0XHR0aGlzLmxvYWROZXdzTGlzdCgnYWRkJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSA+XHJcblx0Lyog5a2X5L2T5Zu+5qCHICovXHJcblx0Lnl0aWNvbiB7XHJcblx0XHRmb250LWZhbWlseTogeXRpY29uO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB3ZWV4IGNzc+mZkOWItlxyXG5cdCAqIOmAieaLqeWZqOS4jeaUr+aMgeW1jOWll1xyXG5cdCAqIOWtkOiKgueCueS4jee7p+aJv+eItuiKgueCueagt+W8j++8iOmHjeimge+8iVxyXG5cdCAqIOS7heaUr+aMgSBmbGV45biD5bGAIO+8iOi/meS4qui/mOS4jemUme+8ie+8jCDpu5jorqTkuLpkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHQgKiBcclxuXHQgKiDms6jvvJrmiJHlr7l3ZWV45Lmf5piv5LiA55+l5Y2K6Kej77yM5pyJ6K+06ZSZ55qE6bq754Om5oyH5Ye6XHJcblx0ICovXHJcblxyXG5cdC5jb250ZW50e1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC8qIOmhtumDqOagh+mimOagjyAqL1xyXG5cdC5wYWdlLWhlYWRlcntcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlYzcwNmI7XHJcblx0fVxyXG5cdC5wYWdlLWhlYWRlci13cmFwcGVye1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLWxlZnR7XHJcblx0XHRvcGFjaXR5OiAwLjk7XHJcblx0fVxyXG5cdC5sb2dve1xyXG5cdFx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC5wYWdlLWhlYWRlci1jZW50ZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cGFkZGluZzogMHB4IDMwcHggMCAyMHB4O1xyXG5cdH1cclxuXHQuc2VhcmNoLWlucHV0e1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0Zm9udC1zaXplOjI4cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLXJpZ2h0e1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuY29udHJpYnV0ZS1pY29ue1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG5cdC5jb250cmlidXRlLXRleHR7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0XG5cdC5zbGlkZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHR9XHJcblx0Lmxpc3QtY29udGVudHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHQvKiDliqDovb3mm7TlpJogKi9cclxuXHQubG9hZC1tb3JlLXdyYXBwZXJ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogNzUwdXB4O1xyXG5cdFx0aGVpZ2h0OiAxMjB1cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjB1cHg7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblx0Lyog5paw6Ze75YiX6KGoICAqL1xyXG5cdC5uZXdzLWl0ZW17XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRwYWRkaW5nOiAyNHB4IDMwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNlZWU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHQudGl0bGV7XHJcblx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRjb2xvcjogIzMwMzEzMztcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdH1cclxuXHQuYm90e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblx0LmF1dGhvcntcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdH1cclxuXHQudGltZXtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cdC5pbWctbGlzdHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0d2lkdGg6IDIyMHB4O1xyXG5cdFx0aGVpZ2h0OiAxNDBweDtcclxuXHR9XHJcbiBcdC5pbWctd3JhcHBlcntcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiAxNDBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZ3tcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5pbWctZW1wdHl7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cdC52aWRlby10aXB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xyXG5cdH1cclxuXHQvKiDlm77lnKjlt6YgKi9cclxuXHQuaW1nLWxpc3Qxe1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAzMHB4O1xyXG5cdFx0dG9wOiAyNHB4O1xyXG5cdH1cclxuXHQudGl0bGUxe1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyNDBweDsgXHJcblx0fVxyXG5cdC5ib3Qxe1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyNDBweDsgXHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQvKiDlm77lnKjlj7MgKi9cclxuXHQuaW1nLWxpc3Qye1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRyaWdodDogMzBweDtcclxuXHRcdHRvcDogMjRweDtcclxuXHR9XHJcblx0LnRpdGxlMntcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIxMHB4OyBcclxuXHR9XHJcblx0LmJvdDJ7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQvKiDlupXpg6gz5Zu+ICovXHJcblx0LmltZy1saXN0M3tcclxuXHRcdHdpZHRoOiA3MDBweDtcclxuXHRcdG1hcmdpbjogMTZweCAwcHg7XHJcblx0fVxyXG5cdC5pbWctd3JhcHBlcjN7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcclxuXHR9XHJcblx0Lyog5bqV6YOo5aSn5Zu+ICovXHJcblx0LmltZy1saXN0LXNpbmdsZXtcclxuXHRcdHdpZHRoOiA2OTBweDtcclxuXHRcdGhlaWdodDogMjQwcHg7XHJcblx0XHRtYXJnaW46IDE2cHggMHB4O1xyXG5cdH1cclxuXHQuaW1nLXdyYXBwZXItc2luZ2xle1xyXG5cdFx0aGVpZ2h0OiAyNDBweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQganNvbiBmcm9tICdAL2pzb24nXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG5cdGRhdGE6IHtcclxuXHRcdHRhYkJhcnM6IFtdLFxyXG5cdFx0dGFiQ3VycmVudEluZGV4OiAwLFxyXG5cdH0sXHJcblx0XHJcblx0bWV0aG9kczoge1xyXG5cdFx0bG9hZFRhYmJhcnMoKXtcclxuXHRcdFx0bGV0IHRhYkxpc3QgPSBqc29uLnRhYkxpc3Q7XHJcblx0XHRcdHRhYkxpc3QuZm9yRWFjaChpdGVtPT57XHJcblx0XHRcdFx0aXRlbS5uZXdzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdGl0ZW0ubG9hZE1vcmVTdGF0dXMgPSAwOyAgLy/liqDovb3mm7TlpJogMOWKoOi9veWJje+8jDHliqDovb3kuK3vvIwy5rKh5pyJ5pu05aSa5LqGXHJcblx0XHRcdFx0aXRlbS5yZWZyZXNoaW5nID0gMDtcclxuXHRcdFx0fSlcclxuXHRcdFx0dGhpcy50YWJCYXJzID0gdGFiTGlzdDtcclxuXHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ2FkZCcpO1xyXG5cdFx0fSxcclxuXHRcdC8v5paw6Ze75YiX6KGoXHJcblx0XHRsb2FkTmV3c0xpc3QodHlwZSl7XHJcblx0XHRcdGxldCB0YWJJdGVtID0gdGhpcy50YWJCYXJzW3RoaXMudGFiQ3VycmVudEluZGV4XTtcclxuXHRcdFx0XHJcblx0XHRcdC8vdHlwZSBhZGQg5Yqg6L295pu05aSaIHJlZnJlc2jkuIvmi4nliLfmlrBcclxuXHRcdFx0aWYodHlwZSA9PT0gJ2FkZCcpe1xyXG5cdFx0XHRcdGlmKHRhYkl0ZW0ubG9hZE1vcmVTdGF0dXMgPT09IDIpe1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IDFcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMjtcclxuXHRcdFx0XHRcdH0sIDEwMClcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2UgaWYodHlwZSA9PT0gJ3JlZnJlc2gnKXtcclxuXHRcdFx0XHR0YWJJdGVtLnJlZnJlc2hpbmcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0Ly9zZXRUaW1lb3V05qih5ouf5byC5q2l6K+35rGC5pWw5o2uXHJcblx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRsZXQgbGlzdCA9IGpzb24ubmV3c0xpc3Q7XHJcblx0XHRcdFx0bGlzdC5zb3J0KChhLGIpPT57XHJcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSA+IC41ID8gLTEgOiAxOyAvL+mdmeaAgeaVsOaNruaJk+S5semhuuW6j1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYodHlwZSA9PT0gJ3JlZnJlc2gnKXtcclxuXHRcdFx0XHRcdHRhYkl0ZW0ubmV3c0xpc3QgPSBbXTsgLy/liLfmlrDliY3muIXnqbrmlbDnu4RcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW09PntcclxuXHRcdFx0XHRcdHRhYkl0ZW0ubmV3c0xpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8v5LiL5ouJ5Yi35pawIOWFs+mXreWIt+aWsOWKqOeUu1xyXG5cdFx0XHRcdGlmKHR5cGUgPT09ICdyZWZyZXNoJyl7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLm1peFB1bGxkb3duUmVmcmVzaCAmJiB0aGlzLiRyZWZzLm1peFB1bGxkb3duUmVmcmVzaC5lbmRQdWxsZG93blJlZnJlc2goKTtcclxuXHJcblx0XHRcdFx0XHR0YWJJdGVtLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly/kuIrmu5HliqDovb0g5aSE55CG54q25oCBXHJcblx0XHRcdFx0aWYodHlwZSA9PT0gJ2FkZCcpe1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9IHRhYkl0ZW0ubmV3c0xpc3QubGVuZ3RoID4gNDAgPyAyOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgNjAwKVxyXG5cdFx0fSxcclxuXHRcdC8v5paw6Ze76K+m5oOFXHJcblx0XHRuYXZUb0RldGFpbHMoaXRlbSl7XHJcblx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdGlkOiBpdGVtLmlkLFxyXG5cdFx0XHRcdHRpdGxlOiBpdGVtLnRpdGxlLFxyXG5cdFx0XHRcdGF1dGhvcjogaXRlbS5hdXRob3IsXHJcblx0XHRcdFx0dGltZTogaXRlbS50aW1lXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHVybCA9IGl0ZW0udmlkZW9TcmMgPyAndmlkZW9EZXRhaWxzJyA6ICdkZXRhaWxzJzsgXHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6IGAvcGFnZXMvZGV0YWlscy8ke3VybH0/ZGF0YT0ke0pTT04uc3RyaW5naWZ5KGRhdGEpfWBcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0fVxyXG5cdFxyXG59IiwiY29uc3QgdGFiTGlzdCA9IFt7XHJcblx0bmFtZTogJ+acgOaWsCcsXHJcblx0aWQ6ICcxJyxcclxufSwge1xyXG5cdG5hbWU6ICfmjqjojZAnLFxyXG5cdGlkOiAnMidcclxufV07XHJcbmNvbnN0IG5ld3NMaXN0ID0gW3tcclxuXHRcdGlkOiAxLFxyXG5cdFx0dGl0bGU6ICfku47kurLlr4bml6Dpl7TliLDnm7jniLHnm7jmnYDvvIzov5nlsLHmmK/kurrnsbvkuIDotKXmtoLlnLDnmoTnnJ/nm7gnLFxyXG5cdFx0YXV0aG9yOiAnVGFwVGFwJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cDovL2ZjLWZlZWQuY2RuLmJjZWJvcy5jb20vMC9waWMvOTEwN2I0OThhMGNiZWEwMDA4NDI3NjMwOTFlODMzYjYuanBnJyxcclxuXHRcdFx0J2h0dHA6Ly9mYy1mZWVkLmNkbi5iY2Vib3MuY29tLzAvcGljL2RjNGIwNjEwMjQxZDcwMTYyNzlmNGY0NjUyZWEwODg2LmpwZycsXHJcblx0XHRcdCdodHRwOi8vZmMtZmVlZC5jZG4uYmNlYm9zLmNvbS8wL3BpYy8wZjZlZmZhNDI1MzZmYjVjMmNhOTQ1YmQ0NmM1OTMzNS5qcGcnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcy5bCP5pe25YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHJcblx0e1xyXG5cdFx0aWQ6IDIsXHJcblx0XHR0aXRsZTogJ+WIq+WGjeeOqeaJi+acuuS6hu+8jOi1tue0p+WtpuWJjeerr++8jOaZmuS4gOW5tOiDveWwkeaOiTXmoLnlpLTlj5EnLFxyXG5cdFx0YXV0aG9yOiAn54ix6ICD6L+HJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cHM6Ly9wYWltZ2Nkbi5iYWlkdS5jb20vdi43Nzc0NjhGNEJFRDdERERBNUI0OTU4QzY3MUIwNzY1OT9zcmM9aHR0cCUzQSUyRiUyRmZjLWZlZWQuY2RuLmJjZWJvcy5jb20lMkYwJTJGcGljJTJGMGJjYzkzZmY5MjIyY2FmYTQ1MjZjOTgwYzE3ZjY5ZWMuanBnJnJ6PWFyXzNfMzcwXzI0NScsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzMw5YiG6ZKf5YmNJyxcclxuXHRcdHR5cGU6IDEsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMyxcclxuXHRcdHRpdGxlOiAn5bCG5bqc5YWs5Zut5oiQ5bGF5rCR6Lqr6L654oCc5aSn57u/6IK64oCdJyxcclxuXHRcdGF1dGhvcjogJ+aWsOS6rOaKpScsXHJcblx0XHRpbWFnZXM6IFtcclxuXHRcdFx0J2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNjkyMjk4MjE1LDI0NTA5NjU4NTEmZm09MTUmZ3A9MC5qcGcnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcy5bCP5pe25YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNCxcclxuXHRcdHRpdGxlOiAn6aqo5YKy5aSp5pyA5YGP54ix55qE5LqU5L2N6YOo5LiLIOi/meS5iOWkmuW8uuiAhei/mOavlOS4jei/h+S4gOWPquS7k+m8oCcsXHJcblx0XHRhdXRob3I6ICfnpZ7or7TopoHllLHmrYwnLFxyXG5cdFx0aW1hZ2VzOiBbXHJcblx0XHRcdCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFnR0JnY0dCUWdIQndjSkNRZ0tEQlFOREFzTERCa1NFdzhVSFJvZkhoMGFIQndnSkM0bklDSXNJeHdjS0RjcExEQXhORFEwSHljNVBUZ3lQQzR6TkRMLzJ3QkRBUWtKQ1F3TERCZ05EUmd5SVJ3aE1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakwvd0FBUkNBRWJBZlFEQVNJQUFoRUJBeEVCLzhRQUh3QUFBUVVCQVFFQkFRRUFBQUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJBQUFnRURBd0lFQXdVRkJBUUFBQUY5QVFJREFBUVJCUkloTVVFR0UxRmhCeUp4RkRLQmthRUlJMEt4d1JWUzBmQWtNMkp5Z2drS0ZoY1lHUm9sSmljb0tTbzBOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUhpNCtUbDV1Zm82ZXJ4OHZQMDlmYjMrUG42LzhRQUh3RUFBd0VCQVFFQkFRRUJBUUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJFQUFnRUNCQVFEQkFjRkJBUUFBUUozQUFFQ0F4RUVCU0V4QmhKQlVRZGhjUk1pTW9FSUZFS1JvYkhCQ1NNelV2QVZZbkxSQ2hZa05PRWw4UmNZR1JvbUp5Z3BLalUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2Z29PRWhZYUhpSW1La3BPVWxaYVhtSm1hb3FPa3BhYW5xS21xc3JPMHRiYTN1TG02d3NQRXhjYkh5TW5LMHRQVTFkYlgyTm5hNHVQazVlYm42T25xOHZQMDlmYjMrUG42LzlvQURBTUJBQUlSQXhFQVB3RHhiNzM4V0Q3MDhiMEFWUm4zcEZUYzNQU3AxQUF4V3B6a1oycVNUK1ZSRWxuNlZZYU1NMlQrVk1FUkRFNW9BWXFmTG5QTktxNVBOU1lwY0ROTVF0SlJSbWdCYVVkYWJtbEJwakpWR2VQV3RpT0FGbmVKRDVVYmpMRG9wUGI2VmpnQUxrbkRFWkZiR25TbWFDU0ZwMWdpQ1pKUDhiRG1rOVFXeGFwYWFqYmtWdlVacHc2MWlJajFlTnlJTG9yOGtzWVhkL3RMd2Y2Vm1SOHZ1SXJZdmlYMHFGQ1NjVE5qMjRxOXAzaFc0YXhsdjdzR0czampNZ1hvNzRHZndGYmMxbHFXazJabG5ZM043TDVkdkM4amtEaFJuRmRqcFhnUm1DeWFoTHQ5WW8rdjRtci9BSUt1QlBwOHFlUkZINVpIK3JHTTVHZWY4YTYxQUt5bk4zc2FSaXR5dlphWmEyTUlpdG9FalFlZzYvV3JxcFNqaWxXUkdka0RBc3ZVQThpc3l4UWdwMnlsRk9wQllidHBObnRVbEZBRUxJckRCR1I2R3FGenBNRXdPMGJHOVIwclV4U0VVWEE1RzcweWEzeVdYSy8zaDBxZzBlSzdwa0JCQkdSNkdzdTcwYUtYTFJmSTNwMnExSVZqbFNNVW1LdVhOcEpCSVVrVWcxVllZTlZjUTJwb3BDckFnNElxQ2xCSW91QjFtblh5M0tiSE9KUVB6cS9zelhHUVR0RzRaVGdqb2E2eXd2RnU0QTNBY2NNS2xqUkJkYVJaM01na2VJQ1FmeEx3VDlmV3NYVmZDTUZ5cGUwYnlKTWZkNnFmOEs2ekdhUXJTVW1KeFQzUEhMN1I3clRwaWx4RXlIc2V4K2hxZzZFVjdSZFdjTjFFMFUwU3VoN01LNFhYZkNzdG1HbnRBWllCeVY2c3YrSXJlRlJiTTVwMG10VWNaakJwSE9ZMno2Vk5LbU9sVlpTUngyclZzeXRxUWc0cVMzSTg5TTlEVU9lYWRFMkpVSkhBYW9SYk5pd3liYTUvM2F5ODRjVm8yRW9XQzRCN2lzenF3SHFhc2hJYTdjNXErSkEwK1IwQUZaOG55OGVoeFVrYmtESXFVVTBhVE9BT3RSRjl3cXI1aEk1cWFNZ3JWSW14YXR1SkJXN0xjWEMyYStTdTRmeFk3Vno0NEhGVFIzMDhTRkZjZ0dtUzFjUml3dXNxY2ttdENURWR0c2tKSjNnNUhhczVNcEcwcDY5cyt0YUdQTXVkMG55OUQ3ZEt4azlUUmJGdUlaaWp4L0Z6OUsxWTJEUklSMitXc2lKd0ZESHVhMFVrWDdHV0J4eVNLeWtNejc1OWl5c2Z2SE9LNVc2WEpacTZpWEZ4Rm5HY2Rhd2I2SUlObzVBTk9MTFJsc3VJRDY1cXRJZ0tBOUtzenQwV3F6OGl0Q3lGZUZvSnBlYVRCcXlScFBOSlQxVFBKT0JSOHF0d2Npa0EzRkZTQ1BJenZvcFhBcHFhbEJxQlRpcEEyS1FFbWFUZUJUQzJhakpGQVdKV2NFOFUzZjhBTlVRTkxubWdkaDViTkFhbVV2YW1BOE5UZ2FpelRobWdDNUJENXBWVis4ZXRhVVNSMlYzREt5NzBIVlc1eWFacDF2NWNQbU1QbWIrVlN6SVpRN0QrRDd2MUZaMzFBdUdOb1hhTmxDNDVBQjdIa1U0RDA2MFJrM0ZuRmRGc3NENVpIb1A0ZjYxdDZGNGRiVlpWdUpTeVdxSHFEZ3VmYi9HbExSalVic3QrSHRJYUdNYW5xTXNLUXhrbFVJQng5ZlQrZFpPdStJcmpVSnBWV1JvN1lIQ3hnNDRIYytwTmRkNG5qaXRmRFR3UXhxa1lLcUZBNEE2bjlBYTh2dTBmN05IY1JuZkEzVmgvQTNvM3AvV2lEVGVwbzFaV1IwTmxxdHpwTnpGSmJ5WTNScVdRL2RiMk5lbmFacUVPbzJjZHpDZmxZY2p1cDdpdkhaMk1seDh2M1kwVU0zWUFEclhvZmdoTm1qUExsdm5rSXczYkgvNjZxcW9wNkNwMzZtM3JtcS8yVnB4bVZRMHJFSkdEMHllNTlxcGVGSGxrRjFKTktza2psU3pBNXllZXRZbml5OFc3MWEzc2NxWTRCNWtnTFlHNDl2eS9uWFZhSFlpeDA5QnRDdko4N2dkaWUzNGRLaTFrVmU4alhGTzdVd1V1YXpMSDBWSHVvM1VnSk0wdWFqM1VidWFMZ1BOTklvM1V2V21CVnVyU082aktTRDZIdUs1ZStzWkxXVGF3eUQwUFkxMkpGVjdtM1M0aU1iaklQNlUweFdPR1lZcHVhdlgxbzl0TTBiRDZIMUZVVHhWWEpGVnEwdE92RGJUcStmbDZNUGFzck5TeHZnMHdPOFJ3eWhnY2dqSXA5WXVpM2ZtUkdCanl2SStsYlFyTmxDRVZHNlpxYWtJelRDeHcvaWZ3cDlvamU3MDlBSnVyUkRvMzA5NjRLN3RKWUFCSWhVa1pIdlh1REptc2JXZER0dFVzM2haRlI4bGtjRGxXOWEwalVhMFpsT2tucWp4WitEVEEzT2EwZFYwNmZUN3g3ZTRUYkloL0FqMUh0V1lldGFJeFpjam4ySTRIOFFxTlcrWWZXcTRia1U4bXRDQloyek0yT21hZW4zUlZjbkpKcWVNL0lLUTJTQTFLallxdTNKVWU5U2c0b3VTV1JMeFNoczFYRFU4SGluY0RSbFdOL0lSVzRPQi85ZXRZUWVXc1piNXV2YnRpdWVSZzZScVRnL3duMXJkczdoWkxZR1JzTkdDb0dldFlzdG9SMTQyb2NBRHZTcE50dHR1VGtjblB2VTBCV1Fzelp4N1ZVY0xHOHU4a0FqSzU3MUlJdmFiRUhqbmtrYmFnNEh1YXdOVFFoc2pwbnBXM2JYSUdscEdGdzI4c1c5YXpOUUc1UzFMcVVqblpNbHpSSkFSQUdQV2xKL2VrKzlMSXpPZ0ZXV1VvMUxBakdTRHlLa1V0R3BESjh0TEF1MlJza0duVHN4K1ZjVm90aUh1UWx5d3dWcUpnTWNEQnA1RGJRUWNqMm9aY0g1VjQ5NkFFVlZJeVR6OWFLdlc4Q3RDcEs4MFZQTVVZWU5PNjFHRHpUZ2FRRHVsUnNhY1d4VENjbW1DRkZGSlFLUXh3cFRUUjFwNEZNUXFqbXRkTkZ1MWdndVpZOWtFcDRKUE9QcFJvZGpGUGNmYUxyaTJoNVlmM3oyVVZyNnBxNW5rQmxPMUYrNUd2WVVtN0ZKRUlHQnh3QlNoa0g4UXFLMG5ndUpDR09NZmRVOTYxbEFBd0FBUGF1YVU3T3g2T0h3RHFxN2RqT3NURVpaWUpHSGxZSkhQUW52OEFoWHBxYW5iV2ZocGIrR0w5ekhDR0VhOFk3WS9PdlA1TGFLUTdpdUdISVljRVZtdnFOL1kvYWJWTGw5c29JZFdPUXdQZkI2R3FVMU1kWEJ5bzY3bzZiV3ZHMXZmNlZQYk5aT3JzdnlOdkJDdDJOY1JiWDhrUllxektlQVN2OFgxSFExRElTNDRiQjdnMHlMQ09CSUNGSkhQcHpXc1l4dFpuSFVpMDdvMERlTXlNdUNTRG5HQXFnL1FkYTlMOE9hdHBsbDRiZ1g3YkNabGlNa2k3eHUzZFNQclhsVXpySk15eDlDeE9meHF4YW8wamlKUm5uR2ZTbk9LU0hTZzV1eDJ2aDZPWFU5WVdhWmxMenllWklDTW5hT1Q5T3dyMDFEWEZlQ3RPUzN0V3ZjNU1tVVFaL2hCNVA0bitWZFlMcUZXMnRLZ2IwTENzWk83MEc0Y2phTDJhb2F0cVA5bTJMM1d3T0V4bGQyM2lyQWtCSFdzVHhUQ3R4b053U01tTEVnL0Qvd0N0bXBXNG5zWmJlT1dFNTIyZVlzREI4ekJ6VHg0NWk3MlVuNE9LNFdSOGNEZ1ZGNXByYmxSSE16MFZQRzlxZnZXMHcraEJxNUI0dTB1VWdOSzhXZjc2RUN2THhLZlduck1SM3BjcURtWjdKYlg5dGRMbUNlT1FmN0xBMWFWcThhZ3VUa05GTHNjZEdWc0d2UmRFdWJxYXdTZU82KzFvZUNrZ0N1cDdqSS9yVXVOaWxLNTBlYVExWHQ3dU9iS2pLdXYza1lZSXFmTlFNbzZqWnJkd0VkSFhsVFhJVElVWWdqQkJ4WGROMHJtOWN0UkhLSmxHRmZyOWFhWU5HRVNhRmFrZnJUZDFXUWFkaGNtM3VFa0I2SG42VjJTTUdVRUhJUFN2UG8zd2E2N1RMc1BweU83WUNBaGllMktsbEkxZ2FNOFZUaTFDMW0vMWR6RTMwY1ZZRWdJNE9ha1pJUlViclR0M0ZCNW91QnpQaWZ3L0hyTmtkcWdYTVl6RzNyN0d2SzlRMDJXeWRmTVVnT01xVCtvK29QRmU3TW9OWWV1YURiNnJZU3dsQWtoSmRIQTZONi9qVnhuWWljRXp4WEdEU2s4VmJ1N09TMm5lS1JTcm94VmdmVVZXTWZIdlhURjZISzl5SUFrNEhXcDJIbHlCUGI5YWpVRkh5QnlLVUJuSjZsczU0cFgxQ3cvUHpyVWdOSUlKU1FTQXYxcDRnYnUvNUNqbVExQnNBZlduQTVYNWVmU21TUUw1YlpadW5yVVVEanl3Rkp3T0tFN2ljR3RSMXZLeVNnK2g2R3RJN3pNcElJTGNnR3FBVUNVT085YTZGWjRnK3prREFOUTlDalpzWVhrZ2tjNEFHRFM2cEdrbHJoUmxnTTU5S3Q2V29OdjVlUmdMays5UlhNSm1nbVZlT01WbTNxU3R6S3Q1Ryt6eHB4eHhWWFVHQ1F0M0pxWjFhMmRFYmdLYW8zMG5tQVlQQUZQcVdqTFFCcHdEMHF6NVlWY2lvb1YvZWJqVTBqQllzMDJNeTVBWTV5K2ZscDdqZUF3NllxSzViY2M5cVNHUWh2TEo0TmFSWW11bzhmS0NCU0hKUE5PYy9oVFFlYWJFYTFzbitqcGtjNG9xUk1sRkk2WW9yRzVWampzMG9OSVFRdWNjVWdOV01jeHpSVFNhY09sTUJhS0FNMVl0N09hNmtFY0VUeU9leWpOQUVBR2EwTE94YWZEdmxVL1UxYVRTR3RMZ0pkYk40R2RpdG5IMXErQjJGUktWdEFHeFJyRkdJMHlGSGFxRjB3Tnc1ejZDdENXT2Q0TjhVYmVXVzJtWEh5ajhhU1BTSStDN2tuMnJKeVMzTzNDWWVWUjNSbEt5aHM1R2EydE92U3hFVWh6L0FIV3B3MHUzNzdqK05PVFM0a2xWMUpHRG5GWnluRm5yMGFGV0R1alFyRzFURVY1SE50emdBa2V0Yk5VdFF0VFBIdVQ3eTl2V29nN002Y1JCdU5rWkY1YXF3RnhCekUvcDI5cXBnTU9uNUdyZHRkTlpTTWhHNkp1cW50VjlyTzJ1azh5QnRwUHAwL0t0K2EyalBNOWtxbXEzN0ZHMXQ3U1hCa2Q0MjlPMWJFUmlpVVJ3QU0zK3ovVTFsTmJ0YlBtV0l1bnFEVnVIVUlGUUpIQ1FmUVVwTnZZM3BKUTBkay94SjVyMjdzYldTSzJ1WklsS2d5QkRnSG5pcysyMUZoS0RKaHovQUxYT2F1WFlJc25aeDg3a1ovUHBWQVhCMDc5MzlqdHBONDNCNUZMRWc5dXRhMG0rVzZWenpzZEZLYTZYT3cwcnhOZFdpWWhjU1JqcmJ5dDAvd0IwL3dCSzZWZFpYV05NdklEYXl3VGZaMllvL3BqclhtOWpxWjh4UExpaHQxWTRZeEQ1aitKeWZ5cnV2Q1VrWDJXNXRIRENaNUdiTEE1ZENBTTU3MFR2dTFZNUYyT0dTWHpZd1NlZTlHYXJ6aHJPOWxpWVkyT1ZJK2hxYmNTbTVTUHFmU3FaSStyK20yRDZqZUMyU1dPTm1HVjh6T0dQcFNYT2szZG15RzRqWllpUWZOUWJsWmZZMXNSK0c3MFJSM05vNlhFWnc2UEUyRzlqZzk2VGFHa2FtbCtHTlFzcFJsck40U2ZtamRTd1AwNDROZGhhMmR2YUt3dDRVaTNITEJCak5WTklubnVMRkd1b0dpbkh5dXJER1NPNCt0YVMxazIrcG9rTm10bzUxR2NxNCs2NjhGYWhqdVpJSkJEZFk1T0VsSEN0N0gwTldzMDJSRWxqTWNpaGxQVUdsY2RoazEzQkNjUElOM1pSeVQrQXJQdi9BRDc2Mk1jZG93eWNocEdDNC9EcldoRGJRd0RFVWFyNmtkVCtOU0dnRGc3Nnl2cldUYTZSTGtaREFrNXJITmxjZWFXTjIyMys3elhvOS9hTGQyN0lSOHc1VStocmpaNG1qY3F3d1FjRVZTa1MwVXZzeWQya1AvQXpVc2FDTVlTU1pSM0FsYi9HZzBaOTZkeERUYlJtVVNibjNkK2M1K3RYNEhNWnpHN29mVkdJcWtEVTBaNW91QjExaXR6TGFSeXgzYjdpT1JJb1lmNDA2M2oxZUs1bDh5YUdTSThwbnQ3ZjV6VE5DY3RZNC91c2ExeFVObHBGWVhnVWhiaU5vV1BkdVZQNDFJd0JHUjBxUXFHQkJBSVBZMVVhemFMTFdrbmxuKzQzS0g4TzM0VXJnY040NDBmWkt1b1JyeEo4a3VQWHNhNVd6MG02MUNjUlcwTFNOM3dPQjlUMnIxaTZzWnRUaU52ZHFzZHVjYmxRNUxuNjloK3RXYmF4Z3M0UkZieExIR09nVVZvcWxsWXhsU1Rkemk3SHdERDVZYS9uWm5QOEVYQUg0OTZUVVBDOXJhcjVWaHB0emNTWSs4Wk1JUDhBR3U4MlUxa3FlZGxxQ1I1Sk5vR3B3a3MxamNjOWdNZ1ZtTmtFakJCQndRZXhyMXZWcktTOHRqQ3R5MXZHZjlZeUQ1aVBRSHRYbGQxRkdzOG5rYnZLTGtSaHVTUjJxNHl1SnhzVkR6blBTcVNTY3VlMjQ0cTQ0NElJSTdFSGlzemZ5Y2V0YVIzTXByUXRzNUsvTDFITmJGaktCYTlPcHJubGMxcmFZNE8xVDkzak5PUm1sb2RiWVMrVkdPT2dxZWFSRWpkbC9pSHkxU1J3emJSMDlhU2FUTVNvZXpIQkh2V0wxWWpMMU9acExqTGYzcW9GUzhtM3RWbTdYRSszT1NHeFRvN2NrU0hPQ085VjBMUm5nQUVqSFNvcms0akgwcWQwMlpCcUc1WC9BRVVNZXRCUmx6TU5vcURPSkZPYWN4eitGTUorYXJReTY2NUdhaVBIV25MTHRRZlNvMmJjYW96U055SWp5SXY5MFVWQ2dQbEoxKzZLS3lMT2V1TW5hb1U0VWVsUVZvU3NHS2x6ajNVOWFpa2pUcUVKSjZZb1VoRk0wb3F6bFY0YUU0K2xDd21TVUxHcDU2WnF1WVpOcHVueTZqZXBieERrbjVqMlVkelhaejN0cnBGb2JQVFZBd01QTjNKL3FheHJKalkyand3OE5KOStUdVI2VkhnczJXNkRvUDYxUFAyS3YySEtTenRMSjFQcjZWYWlXSUFTVGtzdlZZbE9DMzFQWVZXcHJUSWh3VHo2Q3BFWGJ5L2xtaEtzUWtRR0ZqWGhSK0ZTV2hMV3liczdnTUhOVCtHOUdiWE5RRHpMaTBoSUxqKzhleTF2K043VzJ0N09PNmljUlhXUWlvdkhtTDlQYjFxSjY2SGZncXZzNWE5VG5ta1NOY3V3QW9oa01vM0FFSjJKNzFtV3RySk8vbVRFbGZmdldzb0FBQTZDc0drdEQzNlVwVDF0WkQ4MGhvb3FEWXpMKzB3d3VFVUhITEw2MVRsZ2tzbVdhQno1VGNnK25zYTNpTWpCcUlSS3NmbDR5dm9hMWpOcEhKVXc2YmJpWmNlck1PSm84ajFGU3JxTm5uY0Z3Mys3VEx2VDFSV2tSdHFnWklOWnBpeGJDWnVOeHdvOWExU1QxT1NjcWxONjZsdTZ2L3RMb2lLUW1TY251YXQzTTB0dFlXbDNBd1dSUVV5VkI0UDFyTmVPSlZnYU9mekdLNVpjZmRxekpNSk5GZU1ubEpCajhhNjZhWEsxMFBJeEZSemxkN2hhWGx4SytFS0l6SEFFVVlVay9nSzlZOFA2WWRPMHhGbEdibC9ta1k4bko3WjlxOHk4TW1LMTFleXVXQUlFMnh0M1FaNHordGV4b01pc0tsbG9rVEU4cjhaYWUxcnIwejQrU2Y4QWVLZjUvclZHMHNaL3NzY3E0a1Z4a3IwSXJ2OEF4cHBuMnpTUFBSY3kyeDMvQUZYdi9qWEs2VnpZUmUyUit0Q2w3bytYVTdmdzJ6ejZGYnJOR1FVQmp3dzZnZFAwcmFndDRvSTlrTWF4cG5PMVJnWnJqZE92cGJSOHh0d2Vxbm9hN0N5dVJkVzZ5cU1aNmowTlpzcXhhVVlwMU5GTFVnT296U1VVQU9wS1NpZ1locm5kZXROcmlkUnczRGZXdWlOVmI2QVhGckpIM0k0K3RDRWNLNHdhWlUweWtNUVIwcUNydVNMbXBvenlLZ3pVc1I1b3VGanJ0QVAraVA4QTcvOEFTdG9IaXNUUVArUE52OSt0b0dwWlNIVWhvb3BERUlvRkI1cEtBQ21tbHBDYUFLZC9iRzZzNVlGa01aa1VydkF5UldYYWFEWTZlQTBjUWFVZjh0SDVQNGVsYmoxVXVKRmlqWjNPRlVaSm91SThhMWFUeTdpNU9EekkyQ2UvSnJFelhRZUtXaU54RUlWS3hBc1ZCNjhuSkovRTF6aE5kTU5qQ3B1U3ExYitncmwvbVhPMWM0cm5WTmRMNGRCZnpEZzhnRE5PV3htelZkeWpaS2tBR2xua0toQXA2bk5UYWdCNUtZWUVodWFybFVhYUoyYjVVR1RqdldRaXI1VHozcElCSkp6V2hkMnYyT0FML0d3eTN0VExPY1FhZ2JvZk1xdG5qMHAycWFsSGV5T1VHUFROSnRqVzVoWFJ3UFNzMjZ1QVJ0ejA3Vk5keWtzUWV0WjB3K1FQK2RXaXlKd05vOWFoWTgxSzdmTG4ycXYxNXpWQVdBeDJBZTFLb3lRS1FFRkFCMnFXM1RmT2krcHBpTjlRQWdIdFJVVzRubWlzU2pFU0VxT0NoSjZlMU5JbFJRMjRnZHdhdFRKa2xjREk0NDlhZ2plUmlFd0dQVEZKTWdTSkhtY0tBQm5yejBGYVVjU1JLQWlnQWQ2YkVnaVE1UFBWaldyYWFmQ2JJWHQ3SXlSTWZraVhobkZOSzVhUm5obEp3Q00wdE91N2dTelJMSEdzVVM1Mm9vNmY0bXExeFA1S2NmZVBTazFyb0liYzNQbC9JdjN1NTlLYllXc3Q1ZVJXMEtscFpXd0IvV3FKYzdzbmxqWHBuZ1BRaGJXWDlwVHArL20rNW4rRlAvcjFUOTFGeGpkblQ2UnBrV2xhZEZheEQ3bytac2ZlYnVhd1BHZGdIbHRieGdXUVppWWRnZW8vclhZQVlGYzM0dm14YVc4SDkrVGNmb28veHhXTnpzb0w5NGpqc1lPTVV1YUdQTk56V0I5SkVmbW81SmNFSXYzbTZmNDFGUGNMQW1UeXgrNnZyUmJ4c29MeUhNamRmYjJwMjZrdVd0a1dCMEhPYVEwVWhOSXBsSytQbXRIYkQrTTViNlZRMWNoU2lMd3FyMHE5YmZ2cmlXNFBUT3hmcFdWcXo3N2x4NllGYjAxcWtlYmlYN2pmY3BOTzdMdFFZQUhXbW1lUkloRTJRckVINjFJVkxBS3ZmK1ZRM0RicDJBSUlYZ0VlbGRsMmVFMGJGakppSmlQNFdWaFh0OXMyNkZHN2xRZjByd3JTVDUwc2NKNDN1cWtuNjE3ckFBcWhSMEF4V05VcUpKSkdza2JJd3lyREJIcUs4OUZnMm5YbDFaTjkyTjl5SDFVOUs5R3JFMSt3OHhGdkkxeThRdytPNmY4QTF1dFpwbEhPUktjakZkanBFTFEyUzd1Q3gzWXJIMGpUeGNTK2F3ekV2L2p4cnAxR0tUWXlRVXVhYUtNMGdIWm9wdWFYTkFDNW96U1pvcGdMVEdwMU1hZ0RrTllnRVY3SUFPRytZZmpXUzNXdW04UXhmTEhMOVZOYzA0NXBvVEc5S2xpNjFCVThQVVV4STdEUXVMRFBxeHJYQnhXWnBLN05PaTl4bXRFVkpRL05HYVROSnVwQU96U0UwM05KbWdCYVFuRklUVEdOQURYYmptdVMxL1ZSTVRieE4rN0IrWWorSTFwYTlxQmdpOG1NNFpoeWZRVnd1cDNndHJkNVNmbTZLUFUwMHJzRG50YnVmT3ZTZ1B5eGpiK1Blc3JQTk9rY3N4WW5KSnlhanJyaXJLeHpTZDJTcFhSNk5kcGEyVGs0TEVuQXpqODY1eEFTUUJXaEN6d3huOXlIUXNBMjVUZ2VsRms5R1NsY3UzbXJQS1FpYlNnUElHUm1wOUZ1UFB1akcrQXpLUmpwMjYxbnBITmNUaUdHMlR6SkNkZ3gvS242VTBrTjlISVZkUWNoVzI4SEhYSDBvbGExa1c0NkhRcmF5eGh2N3ZYTlprc29qYVFIbjBKcnNuZDIwZ0lRcTdoejYxeDEwb2VSc2daN1Z6cDNaS01hNWtMeUZqVk9keTBTcjY5NjBMaUhhb2JzYW96SUZoeDNCeldpS0lRTXJpb2lBRHhVNmtxb1BCelVES1EzTk1DUmVsWDlNajMzQmIwV3M5UHUxcjZVdTJPU1E5T2xEZWdtV0hMSTVBUEZGUnUrVG4yb3JNWmxCbmxsMkFmZTZHdEdORmpVS0FPQmpOVnJWVGp6RzZuZ2ZTcFpweEV2cXg2Q2t3c1NCa2FkQkovcXdRU1A3M3RWcTZ1M3VwTnpjS09GVWRGRlpsdnVrY3lzYzQ0Rld3YU5nWkhuTzZVOWg4bzlxejNkcHBDU2VlNTlLbHU3amQ4aWRCK3RNdHl1M2FVTzdQSkZVdEEyTlB3N292OEFhMnBSd0RjVis5SStPQW82MTdSYnhyRkVxSXVGVUFBZWdybC9CZWxMWTZXTGhseE5jNFkreTloL1d1dFVjVmxKM1p0RldRNG5pdUw4V3k3dFJoano5eUluOHovOWF1eVk4VndQaVY4NjFLTTlFUWZwVVBZN2NHcjFFWTVOUXp6ckJHV1kvUWV0RXNxeG9YWThDczZNTmYzTytUL1ZMMi9wVUpkVDJwMUxhTGRsbTFqZVovdE0zVS9jSG9LdlVncGMwbTdsd2paQzVxQzdrS1FOdCs4M3lyOVRVMmFyTis5dWhuN3NYL29Sb1FUMnNPaWpFTUtvT2lpdWRuYnpydCsrVC9NMXYzY3ZsV3p0M3hnVnpLc2ZNeU9wTmIwZDdubDQrU1VWQkc3WVc4RjlydGxac29NTFNCWEE0ejNJL1NvdkZtaHBwT3N2SGJyaTNrVVNSZ25vRDFINEdtNkRJYmJWb0xwbmpqU0p5NWVYTzNnZFBjMVk4WVhuMjI1dEw1Y0FUd2Rqa2ZLeEg0VnR6ZTlaSGp0YUdkcGRzSHpJemtBSEJBL3hyMmJRYnY3WG85cktXM01VQVk5Y2tjSCtWZUdRVHNjS1dPMzByMGp3SmZza3N1bk0yWTJYell2YjFGRlJYUVJQUTFPYWl1WlJCYnZJUm5BNEhxZXdweUdvTGdlZGRRUS93ZythdytuVDlmNVZpV1BzTFZiT3ppZ0g4STUrdmVyWXBsTFNHUHpSbW01cGMwQUxSU1pvelFBdEZKbWpOQURzMDAwWnBEUUJuYXhINW1ueWNjcjh3cmpaZXRkM2NwNWtFaWVxa1Z3RncrMllJZTRQNlUwSVROVHdubXFtYXVXaTc1VVVkeUJUWUhjV1M3TFNGZlJSVnNHb0l4dFFEMEdLbEJxUUg1cE0wM05HYUJpNW9KeFRTYVNnQlMxTVk4VTZvMzZVQWNsNGx5bHlIUDNXV3ZOZFh2amRYR0ZQN3BPRjkvZXZTL0c4TWo2TVpZOC91MkcvSDkwOEgrbGVUVDlTTzROYTBrWjFKZENIT1RUaHpVWXA2OWVhM01MR2pZUTc5NzkxeFhlZkQrRFRManhDTk4xYU5YaHUwRFJobUtqelVPVjZmalhFYVkySVpzZGVLMEN6enoyL2xTbU5sSklLOVZQWHJXY3BXWmRPTGxLeVBvWHhCcCtqeGFQTmZYdGhhYnJTRjJqWW9Nb2NIR0QrVmZQRnBxelNSMjluSkNqUjI1Wm9pT3FzekFrbitWYnZpTHhmcmw1cDFyYVhWOHJSeGYzVkNtUmgvRTNxYTR1M21FZHlHSjRQZjN6VVIxT2lwQnhWbWRwYzZsSUxHM3dCdHhqUGNtc21LUVRYR1Rpb0w2NU1TK1d3d2VvcG1sa1RNeFpzRURpaTFqbXRvT3ZncWdLQjA1ckd1dnVrMXAzQkxGalZFb0hES2U5VWhsTkUzUXN3NmpGTUo1SlBKcTQwUWlKanpuZFZKaGhqVEdoOGE4WjdWczJvOHZUMXoxYk5ac1NBd2cxcitWaXpqejJXaVd4Tjdzb3ZKbGlhS1kyQTJNMFZOaGtwSVJNOUFCV2E4aGtrTEh2VXQxUDhxeGs0SjVOUlFxV2xVRUVEcno2VWtOR2ltMkdJQW5BQXFHNXVHVUJRdTBNT3A2MUpIKzhmekQwNkxWVysrYVZGSHB6UXR4RVVaUmd4WVpPUGxyWjBTMlcvdjdlMFJEKzhJM24wQTYxa0xhUzVCNmYwcm92REZ2SSt1UlJJY0llWFlkZG81SS9sUkxZSTJjajFhM1JVUlVVWVZSZ0QwRlhCMHFyRWVLbnpXSjBEWGJBcnpMeERxa0RheGRNakZ3Q0Y0SGNEQi9XdlNaRzRyeUR4TEN0dnJ0NGk4THYzRDhSbW1rbWRGQ2JoSzZLVXM4dDVNcURnRThEMDk2MVlJbGdpVkY2RHY2MVMwKzM4dFBPY2ZNdzQ5aFZ0WDg4a0w5d0hrK3RaeWZSSHNVRTkzdXl3RDBQYWx6VGFNMW1kUWtzbmx4czNwMEhxYWJHdXlNQThrOGsrcHBySHpKd25aUG1QMTdWSlZFYnU1bTZxNUtKRXZWalRMYUhUWVhmN2FzamxDQUZqZkI2ZlQrdFR1bm5ha0NmdXhMbjhhejJ5ODc0N3N4L0xOYjA0YzZ0ZXg1R09kbGZ6TlRVYisyVzZ0a3MxSXNJbzhCU01CZzJReDVyRzFZSFpHTnhQbEV4c08yZlVmVVZjdFhoZnlsdUl5NGhacE5xOVhYR1N2NWpQMHpUYnFGYnV5anZFR0JJb1NWY2ZjWWNBL1E0eFZRdFRseS9pZVkvZVZ6RnR6eVZOZHg0SW4vNG5sdXA2aU4xL1ROY1BKRExiVGJaRUtPQURnOXdhNmZ3amRMRnIxa3g2TTVUOHhqL0N0cGJDUjdMRzFSMmJpV1dlZnN6YkZQc3ZIODgxREpQNVNLbzVrYzdVVWR6VnVDTVF3cEd2UlJpdVkwSjZNMG5hak5Gd0Z6Um1tRnFZWlF2SklBOTZBSnNpbHpVUG1DbEQwQVMwVXdOVHFBRnpTRTBacE0wQU1jMTU5ckNpM3ZDVHdFbEkvQTVyMEZxNFh4VER0bm1QcmhxY2R4ZERKZVVOSWlqczYvcm10bnc4cG51b01uUHpGdnlKcm5nVDhyWVBHdy9vYTZ2d25CakRNT1ZqSDVtbTloSTY5YWVLalhwVHMxQlZoMmFDYVROTkxDbUEra3pVWmVtK1pRQktXcHJIaW1iNlVta0JUdllJN20za2hrR1VrVXFRZmV2RWRWdEhzcjZhM2tIelJzVk5lNlNEaXZMdkh0a0lkV1M0VWNUSmsvVWNmNFZwVGVwRTFvY1YzcXdvRGM5Nlp0eWFtUUFjMTBIT2FlbFc1bGFRYmlxWUc3SGV0ZDdLSm9WalhLaFczQWpybXMzU0pSNVRoRkxPeC9BRDYxcXkzRWR1bTZWd3Y5YTVLc201YUhyWWVuRlF1eWhkUVc5dXl5ek5KTTNSRVk1eldTUEx2dFhDRWJJbTRBVWRLNkFKOXBJa2tBMmpsVi94cXVtbmhOUk4xa1k3REh0VXFkdHk1MDNMYllwYWpDSUFxREpYSHlrblA0VS9UdjNXNDhqakZTNnRqRVJJemdtb0lwTXhrOTYycHR0YW5CaUlxTXJJV2MvSVNPUlZJSDVnVDJxWnljWXFzeDROV2pBU2VUTW00Y2NWVWZnMDZVa2tBMHc4aysxTVpiczh5U3hvTzVyVHVKR1l5REpDcWNBVlMwaVBOMkNmNFJtcjl3d01CTzBMazhDazk3RW1XN2ZPYUtobGI5NGFLc0NCQVpaY25xVFYrVlBtakNjSDd2NFZXczEvZTU3S0t1THpLeDlPQldUS1k4a1JvVDBBRlV5cnRJV1lMdVBZbnJVdHhKZ3FuVWRXK2xSNHk1YkJYME9hRm9yaWEwQkZrWnlUblBwbkZkcjRKanpmelNFNUtSQVorcC8rdFhHbzZsQ0ZKREU4Y1pycy9BMlE5NXU2NFFmenBQWUthOTQ3Nk04VktXNHF2R2FrTFZrZEl5VnNBazE1VHFyTGY2dmMzc2cyUUZ2bEJQM2dCZ1Y2YmVUcERieVN1d0NvcFlrMTVBN1MzY3dYSng2ZGhUV3gwNGRMbTFWeXg1cjNrbmx4NVdJZmVQcldnaWhGQ3FNQWRCVVVNU3d4aEY2Q3BSV0xaN2RPTFdyM0hacEdZS3BKNkRrMFpxS2I1d0kvN3g1K2xKR2pka0xBRHNMbjd6bmNmNlZKU0NnbWdTVmxZaXg1WWtjOXlXTlk4Si9lWi8yV1A2R3RPOGZiYXlmVEZaOWxFWmJqeXgzamIrVmRtSFhVOFhNNVdzaCttc0YxR0ZqeUZETWZvRk5TYWM1bDB0WWMvZWtlSC92cFF5LytQTFZXQW1MN1EvUXBBLzVuNWY2MGxoSWY3TnVkcHcwVTBVZ1BwMUgrRlRXVjVQNUhuUWVocWF2RkhkK0ZiYTcyano3V1h5V2J1VVlaQS9ETlkybVhCdDdpT1FIQmpjT1B3TlhiN1VGR21TeEtQM2QwNnZzQis0eTUzRDZjZ2lzNjFqK2JjaTV5T2hOYXAzRTlEMjNTM04yMzI1eGdPTVFxZjRVOWZxZXY1VnNLZUt4dER3Tklzd3JiaDVLOG52eFdzcHJuZTVwWW16VFNhVE5NWTBnR3l5ckdyTXhBQUdTVDJyemZWL0VsL3Irb2pTdElSMlNSdGlMR1BtbFA5QlhTK01ydDdidzVkTWhJWnNKa2VoUE5lYWVHZkVVbmhyeEhhNnRIRXN4Z1k1akp4dVVqQkdleHdhMXB4dnF5Wk03R2JWUEV2ZzR3UWE5WXVZcEIrN1p5Q1NCMkREZy9RMXRXUGpYUjd4Um01OGwvN3NveCt2U3VWK0lueElqOFoyOW5hMjFpOXRCYnNaQ1pHQlptSXgyNkN1Q1NVN3V0VzRKazh6UG9hMXZZTHBOOEV5U0w2bzJhdHExY1Q4UDdscGRBMnQveXpsWlI5T3Y5YTdKV3lLd2FzN0dpMkpjMEUwM05HUlNBUnE1YnhKR0duakpHUXlZUDUxMUJOYzc0aVg1WW0rb3BnYzJxQUhHSzZydzdIdHQ1SDlXeCtWY3lCelhYYU1telQ0LzlySnBzRWpWV241cU1VcFBGU0FGcWplUUtLUjJ3SzVid25hV2ZpM3hwcUZyZjNFd3RJVUxSMjZ6RmZNSU9QWDhhcUs1bUp1eG9hcDRuMDNURlBuM0tsLzhBbm1uek1md3JpN2o0aHpUWDhaamcyMml0a3B1K1p2cWY2VlcrSitpYWY0YzhWTlphWkl4aGFGWkdqWnR4alk1NHorQVA0MXd3a082dFZCRXVUUG9IVGRSZzFHemp1cmQ5MGJqSTl2WTFvQTVGZWFmRGkrY202czJKS2dDUlI2SG9hOUhqYXNwS3pzVW5kRG42VnhQajYyOHpUb0pRTTdKTUUreEgvd0JhdTFhc3JXTEVhaHAwOXNlTjY0QjlEMk5LTHM3amF1anhjcnRQSjRGUERCbzJJT1JSZVd6Mjl6SkZNQ3JveEREME5FRVhtTXFZR1dZTHhYVGZRNStYV3hiajFXUkxkSVlZeEh0VUF0MUpxczhyU01XZGl6SHVhWXlFU09jZktEaW1Wa2t1aDNYbGF6TFVOek5DZjNVakQyN0g4SzIybm5oOHRYQ09YOVBsNXhtc2ZUb2ZPdkVCKzZ2ekd0SFVwZGwxYWY3L0FQOEFXckthVGRqYW5KcUxaVHVwRXVGRWlMS3JiOFlZNUZLaS9LZWFSMTJyTVBTWVVnZmFNR3RZYkhIaU54WEdWejBxcksxWEZrQVVxT2pkYzFVbVhuaXJPY3FTTUN5L3JVZWVUanZTa1lsSzFQWXdHVzQ1R1ZYclRRTjJWelEwZ1k4NS9SYW11MjNLTzU2VTFRYll0RW93R1BYMXA2eGhuVUIxNkhJSjVvNWJ1NW56cXhqdXJiMjQ3K2xGYnZrYmVNaWlxSjlvWWxwdFNJc3hBeWU5VE1qUHV5ZG83QUg5YXk5eEpVRThDdFJueEFUL0FMTlpNNkdReGt5SzdNT1QrZ3BpTVNPVDkzcFU4T1ZqWlJqR001ejFxR0liaVFQWE5hRGFMTVFFVHJMSXJZN0h0WGFlRG1CbnZDT01oQ2YxcmgrVlRhNFlaNmM4VjF2Z3FRZmFMbFFNWlJUMTl6V00weHhXcDMwWjRwN054VmFOdUtlVzRyTTFSem5qT1dYK3pvb0l5UjVzbUdBN2dETmNqRkNzSzQvaVBVMTFYaWx5V3Rsei9lUDhxNWtubXBrK2g2MkJwcmx1T0ZPelVZTktEV1o2Q0pLWUI4NVkvUVV1Nmt6UU1kU0UwWnBwUEZBTXA2aStMY0wvQUhtQXFQU09iNWo2Um4rWXFQVTVQM3NVZnNUVHRNYllibVQrN0hYZmgxWkh6dVl5NXFqUlV1WHhEZHNQNG1WUDFKL3BUTkxuU0kzSG1ndEM2QkpGSFhCUFVlNE9EVExvN2JKQjNlVmorUUEvcWFnczhzMGlEcXlaeDY0T2Y4YVUwbW5jNVZwWWZmSVlyZ3hOZ21Na0VqdjcxZTB1TjVKb1VpWGM3NFZSNm5wVmorejMxbzJ4dFZYN1VSNWNpazQzWUhEZmtLN2Z3djRXR21NdDFja05jNDRRZEUveE5TcE8ydTVWdFRxTlBnRnJad3dEcEdnWDhoVjllbFFJTUNwUldUTEpNMDF1UlNab0pwQVluaVRUMjFMUmJtMlFaZGx5bjFISXJ4S2VOMGRsWUVNRGdnOWpYMEU0eUs1UHhCNE50ZFdrYTRoYnlMbHVwQXlyZlVWcENWdENaSzU1QWNtcFlZeVNLN0EvRDdWUE13SHR5dWZ2YmovaFhSNkQ0SHQ5T25XNHUzRnhNdktyajVWUHI3MW81cEVLTE5Ud2JwcjZib1VLU2pFa3BNakE5czlCK1ZkT25Tb0VYQXFZY0NzRzdzMFNzU1pwTTBtYVROSVlwTll1dnJtMFJqd0ZibjhxMkNhemJzTGUzQXQyQWFLUERTRDFQWWYxb1JwVGc1eXNqbUVpbGRmTVdDVXgvd0I3WWNWMkZodEZsRHNZTU5vNUZOd0IrRlJSSDdMZGhSeERObmpzci84QTEvNlZUT21yaGVTTjBhUU5CTk5EVUUxSnhXSXBUWGlHckc0MDdXYmxWZDRwVWtiREl4VThuMUZlM3ZYSWVLdkNxNngvcEZ1UWwyb3h6MGNlL3ZWd2xaaWtybzhtdUo1SnBHZVYyZDJPU3pISlA0MUhHdVdyYnVQREdxd3lGR3NKaWM5VlhJUDVWcWFQNEl2cnFaV3U0emJ3QS9OdSs4ZllDdHVaR2RtYlh3NnNIUkxtOVlZVjhSb2ZYSEpyME5EVkN5dElyTzNqdDRFQ1JvTUFDcnExenlkM2MwaXJJa0o0cUdRVkptbzM1cERPQzhhNlVGWmRTampVNStTVGp2MlA5SzViVG95MTh1VkEyZ3R4MzdWNnRxTnFsN1p6VzhnK1dSU3Byeml6dFd0cnFhTjg3aytVZzlqbXE1dmRhSFRoZWFJMHNoTmFPRDk0azQrdWF5R1FxeEJHQ0s2aU5BaVk5elZXYlQ0NVovTUpJejFIcldjYWxucWRzNk4wckZXMGlrdDdQemdtY25jeTV3U283Q3FGN2VMUElyb3BWVllzb0p6Z1o0R2E2TWdCTVk0eDBybDcyTllwNUl4OXdOa042RDByU25MbWVwbFZUaWxZMGJnOFRFZENVYXF1U3pjOUtuTURycGhkbUxGa0JHVDA1NEZOVkFWTGZsVndPYXZ1bU56d0Q2VTF6a1ZORkNYa0M0NDYxRE1NTVFPZ05XYzVuejhTNXF6cDBqQjIybkJOUnpnTW9CNmpta3NXRWJNZWFwRXkyTm9vZkwzbGllZWxScTRRNDJyazlDZTFSdGZFS05uOHFaRTZoaVpBR1VuazB6R3o2bHhKV0l5SHh6MG9walNRQnNDSGo2MFVYRlk1c0RMaXRDZkNXNVVjbkdCNzFuaXRJQWJ0M2ZHS3laMU1yMjh1RDgzS25yN2lwb1doRXpiZDVqemhTUnorTlZIQVNaaGc0enhpclVNMFl5VEdwejZjRVZaVzViRVVEUXNva1ludHU0QU5iSGcrUXg2c3lIamRFUjljRVZrNGpLcTVqZmJqcURWM1E1VEhyZHNlZHJFcmsrNHFaYkRXNTZURzFTRnFxeHZ4VWhiaXNHYW81enhRMzcrMjlOci9BTks1MG5tdWg4VERtMmZ0bGgrbi93QmF1Y0pxSkhzWU4rNE96U2cwek5MbXBPeTQvTkZNelJta080L09LYVRTRTAwbW1LVWpGMUNYZHFQKzZBdFdiZHR0amRFZFdLclZlOWpVckZkUjlIZGxmMllIL0RGWHRQZ054Q3NZT044eC9BQWNuOEJtdStrMG9YZlErWnhMYnFOOTJaV3BLMFJ0b200SWozRWY3eEovbGlvYmJ6RWtXYU00WkRsVDcxUHFFd3ZkVW1sVTRqM1lYMlVjQ3JWdlpTT0FTUExUdG5xYWptU2pkbWJXdWgxM2hDRlRxTFNpUENtRXlJY2ROeDVINFlJcnZZeGtkSzVMd2hDR0V6TXhNcVlUMjJrZGZya1YyMEZ1eEhTc2J0bWkwRVVjVTdtclNXamVsUDhBc1o5S0xEdVVzMFpxMjFxdzdWRTBCSGFpd1hLNU5NSXpVeGpZVTNZZlNrQkRzcHdYbXBOaDlLQXA5S0FCYWtBTkcxWTAzeU50WHArTlg3ZXpNc1ljS3d6MllZTk5LNFhLTzAwaEZhNDA4NDZVaDA5dlNueXNWekVtY1JSUEkzUlFTZndxbmF4bExkV2I3OG56dWZjMXZUNldaWTNqSU9IVWcvalhQM1Rham83STF6QXJSaHRxVERveDdaOUtGRm5YaFp4VDFMWGx2aklSc2ZTcTEyQ2JaeXYzMCtkZnFPYVkzaW01eGdSTG4zcXZiSFVOYnVYaWhaWXhqTWpoZUZCL3JWV08yZFNLaTdteEU0a2pWMTZNQVJVbUt0UWFaNUVLUktEdFJRby9DcGhZdDZWSEtlUzJqTVplS2lkYTJEWU5qcFZDN1dLMWNMTTJ3TjBadUZKOU0wY3BOeWlVOXFBZ0hhbGE1dDkyRmZlZjlnRnY1VWl5c3grUzJ1Ry80QmorZEZtTWtVWXA0RkNSM1RmZHNuL0YxRldVdHIzR2ZzT2YrMndvNVdLNUFFSm9hSW50V3hiMkR2R0drajh0dTY1emo4YW4vczcycDhnY3h6RXNaNllyaXRZaFdQVjUyVVlMS3BiNjRyMVdYVFJqcFhtL2lpSHlOZG5USDhDZnlxSnF5TjhQckl3cU0weDNDNUo2VUZ3RnpuajFySTlDNGp5cXBWU2VXT0JYT2FyQ2tOMnUzT01iams1NzFvUnovYWRSQkgzVkJ4VlRWdWJ3Wi91Q3RhYWFaeTFXbW1hVnZpZlQ0bEo0S0NoTGRaYlljZ01tUjlhWnBwenA4WHNNVXFDUXp5d3EyQXh6OTBuclZ3ZnZOR0ZlTjZhWXdnb2MrbFZKUG56NjFwWGRoY1d3WGVEODNxS3puVXFTYTFSd2xTZmdVbHFxdWo0eUNQU24zUTNLTURyVGJZZVcyMzE2MVNGTFl1UjJqREJQQ3QwcHB0WkhrWUlDVnpnbW5HZG1LODlLc1J5aGNsdU05elRNbTJVdDdwOHVPbEZXM2lEa05zNmlpZ0xuT2cxcG9jb3Ywckx6VnkxZmNoVTlSL0tzMmRESnZzL25zNnFQbTI3bC9DcXUwcElGNkhvYzFmaWtNVXlTZ1oybk9QVWQ2bXZiUkxtSTNWcWQyUHZMM29VcmFNRUpFMGlxR1ViMFhnZ0hnMUpaeWxiK0diQUdKRlBIYm1zMjJZcmtibUJQcFZsWkdPN0RIOGV0TmxIcUViOFZOdTRyTXNMa1hGbkRLRDk5QWYwcTN2ckUxTTN4SDVmOW03Mk9Da2lsZng0L3JYS2s4MXJlTUxuRm5CRUQ5NTl4L0NzWGRrQTFNMW9qMHNGTFJva3BjMUdEVHMxbWVpbU96UUdwdWFndDMzUE0zKzNpaXduS3pTTE9hZ2xsS000N0JOMVM1cWpmdVZWc2QwSS9VVlVWZG1kYVZvM0lkUFFYWG1XTG5IbmpLRTlwQjAvUHBWeVJaOUcwcHZPQVM2bXlpS0Rrb3ArOGZ4ckYzc256S1NHWGtFZGpVMTNlelgwcG5uYmM1R1BZRDJyWGxrM285T3A0ZFcxNzlTVFRiZVB6UzBtQ1ZHY2VsYUl2SWcrQmxoM0lIRloxaEdKMllNU1VBNkE5YTM0OU90SjdETVE4dWFQbG1IcG4wK2xaeWE1dFNFdE5EdnZBVmdrMm55M1E1OHlUQVBzby93RHJtdlFiZXhVRHBYSCtBbldLeW5zMWoyeDI4ekxHZTdEUFUvclhleGtZcmVLU0piR3Jhb08xTyt6UitsUzVwZDFYWVJXYTBVOXFxWE5tNEdJWVE1UGRtd0JXcG1qSW9zRnpuMjBpNmY3MDZSKzBhWi9VMUgvWUpQM3JtNGIvQUlIaitRcm8rS1RBcGNxQzV6bi9BQWo4UGN5bjZ5dC9qU0h3L2JnWkljQWNrK1kzK05kSVFLcWFpVUZoT3JPcWJvMlViampKSW81UXVZbW5hREZPd3Uya25VRTVoVVNuNVY5ZWU1cmRoc3BJc2JicDJIcElvYjllS3AyR3BpN3RZeloyMGpBRGFUSU5nVWpnam5uOUt2dy9hdCs2WjRndjl4RlA4elRzRnkxc1gwb01ZOUtUZFFYb0VOTUsrbFJUV2tOeEMwTTBhU1JzTU1yRElOUzdxaG11NG9SbDNBUHBRTXdYOExhTXVwd29MUTdXamRpdm1OaklLKy92VzViV0Z0YVFpSzNoU0tNYzdWRlpMYXZHMnN4ZnV6dFdGdWZxdy93cmFpblNaZDBiQWoyb0tjbTl4d2hYMHBmSlQwcGQxTHVvc1NVNXJlNWxrWlZrU0dMc1ZHV1A1OENxc3VoMlVpbnpvdnRCSXdXbU84bjg2MEo0ektBRm1raXgzUWptcVZ4RzF0Qzh6NmhPcUlNbklVLzBvc0JuMjFoNUZ5OWtmbVJWRHhIdUZ6akIrbFhrMDlmU29MU3kxQUY3cDd3Q2FVREt2RUR0VWRCeGoxNTk2dGlUVUl4ODBVRXYrNDVVL2thVmd1U0phS3ZhcDFpVWRxcS8ya2lIRnhGTEFmVjF5djVqaXJLU3BLZ2VOMVpUMEtuSXAyQWxDZ2RxUTRwdTZtbHFBRWt4WGxQamROdmlTWStzU2Z5cjFLUnE4dzhlRGJyb2IrOUF2NkUxblVYdW5SaDlKSEh2ZzVCNzFnM0VrMExQQnZPelBUMnJkWTgxbDZuRmtMS0IwNE5Zd2VwMlZFMnJvVFMxSmtkK3dHS3JhcWY5TUgrNkt2NmVteTJCL3ZITloycUgvVFArQWl0SS9FWVRWb0YvU216WktQUmlQMXF3Q2d1MU1rcm9oSE9BU09EM3hWSFNHemF1UFJ6VTl4SXlsSGpaMUt0Z2xPdEphU0puNzFJNldkN1cralpvNVZrQ3FCd2Y2ZHE1dTZqMnVZOFZvV2pTQkFmUEVxc01nN1FEVU41RVpHYVFjZ0R0V2kwUE9Sa1NwdVFxTTVIcFZWU3c2am9hdHlIWXg1cWt4SWtQT2NpcUtMVEZwUG4zS1BvTVZMRU54M2ZOMDZqbXN4SkhWempQMHJRdGJoVkc3cDdVN2ljVXdlWmxkZ29PM1BIMG9xNEx1RWpKSFAwb281aWVWSE1pckZzSTJIVERqdm5yVmJOQ3R0YjA1NjBqVm1qdFlmZGMvd0RBdWFWTGg0WkF3WXh2Mkk1QnFHR2NOdzNYMXFWMTNBWTZnNUZTSVNSM2tjc2tlekp5Y2RNKzFUbVVPNmZJeXFxNHlNWko3MUI1bVB2Z3I3OXFVU3BuNzRvWUhUK0hkUjh0VGJPU0VEZkx1N1YwKy9pdUIwbWFFWHlMS1I1Y255RTU2SHNhN2VLTXBHRkw3c2RDZXRKbzFpOURrdkZjNWsxRUoyalRING5tcTBUN29rUHFCVWVzemVkY3l5aitLUTQrZzRGTnRXemJwOUtpZXg2ZUY5MTJMUU5PeUtpQnBjMWxZN3VZU2VYeW9pMVJXSlBrWjdsaWFqdjNBdC9xd0ZTMnZGc251TTFWdERIbXZVdDVGZ21zN1Vtd0U5ODFlelZIVXVValB1YWNOeFYzN3JNdVJzTCtOSWpsM1VOakJwc3grWUNpSUV5S1IwQjU5cTZVdmRQR3FQM2pRdFovSVdUQStZbkFxN1pYVndKd0kzSmFUNU1Idm5pcXR4YWVTUE1qeXk0NUg5YXRhT1dUVUliZ2pFY1RnODk2d3NucUxVOWwwU1ZiZStqVGRnU1JCZnFWL3dEckd1MmhmSzE1aE8wOFZtYmlEUG1RL091UHB6WGFlSDlVL3REVDRua0FXWUxpUmZmdldrUVowUWFsM1ZYV1FVN2NLMEpKdDFMdXFIUHZSdXdNazBBVDdoVmVlN2l0d043Zk1mdXFCbG0rZ3FtMXpOY25iYVlDWndaMkhIL0FSMyt2U3BvTGFPQWxobHBHKzlJeHl6ZmpRSVhmZDNBNHhib2U1RzUvOEIrdExIWndSdjVoVXlTZjM1RHVQLzFxbHpVVnhjcGJSYjVDZXVBQnlXUG9CNjBESTdtRVFsN3FHVllYeG1UZjl4L3IvalZXTFVwYndoWkVleWpQOGI5WlA5MDlBUHJ6VXFRUGN1SnJzY0RsSWVvWDNQcWY1VmNZS3dLc0FRZXhvQVVUeFJSZ2VZdTBEQUpiTlZwOVh0NGxKREZ6NkFWRExwTnBJMlZEeEU5ZkxiQS9McFZXYlFMS2FKNDVXbmtEREhNcEdQeXhTQXg5WThheFd1WTFiTW5hS0w1bVAxOUt1YUZBK3Q2YkZmM0U3eHJKbjl5bkJHRGpCYXNDVHdVMm55czhDRzVoem5nZ1ArUHIrRmRGNFFrZGJLNnRYamFJdzNEYlVjWU8wNElPUHpvUmJTNWJwazdhSGF2cXJpTnBZMkZ1dnpCeVRrc2V1ZnBXUnErcFRlR0xtQVR1WkVsenRlSlRrQWYzbHJxSW16cWx3ZlNPTWY4QW9WY3g0bHRuMUhYRWdTQ1dVeDI0d1VIQUpZOVQwSFNoa3hWM3FhMmwrS2JTL2pVaVZHejNVL3pIYXR4SjQ1RjNJd1llb05jVHBIZ3VLRzZGM2ZiUzR6dGpROGY4Q1BldDlkSVdML2ozdTdpSWVtNE4vT2dIYStoZXY3aVczaTg1SllsVmVxeUtUdTlnUnpuODZ6bzd4N2k0amwxT0Y3UkY1aWpmbFNmN3hiMTlqMHE1RGFKR3drbGtlZVVkSGsvaCtnNkNySnd3S2tBZzlRYVlpVU1DTWdnZzlDS1hkV2FiUjdmTFdUaE04bUorVVAwOVB3cDBWK0drRVV5R0NZOUZibzMwUFEwQVh5YXF0WndseThZTUxuK0tNN2Z6SFExSnVvM1VBT2ozcWdWMzNzUDRzWXpUaTFSYnFSbW9BSkhyelA0amtMZTJqZ2pkNVI0K2pDdlJKSDk2OGY4QUhWNGJyeFJNZ09VaGhFWDQ5VFdjOWphbDhSa2xobW1TS3NpbFdHUWV0UlJ5YjRrYlBVVS9OYyt4MzN1S0FFVUtPQU9LdzlUT2IwK3lpdGttc2U5UXlYcHgzd0t1bjhSaFgwaVRhUWYzY28vMnMxWW1sQ0dRYmdDQ0dGU2lHSFQ3RWJSKzhrOWV0WlVyYnBDYXZsdks1emUzOTNsc2FVZDZpei9LVzJkK0tuazFSUkh0aFRsdXJHc2VQcHowcDZUYkF5aGVwR0NlMVZZNXJFZHhJWFBtSHVhcmI4R3BKbXdTS2hVYm16VklaUEV5c1JnWmJIYXJzRzBnNVhHS3JRS3FybnFmV3JVWUF5T3VhQUlKZHZtSDVSUlRaaWZOTkZJWmxVVStTSm8rVHl2cUtaVEFCa0gycVpMaDFHRHlQZW9hVUNnQ3dib2tmZEZRbHNuSUdCNlUzRktFUHBSWUNSRzJuMHJ2dFAxVVhXaXZPekR6STBJZjZnVndrTnVaRDF3QlY2TnphbzZJNUN5QWJ4NjBNYWRoYmxOOEtmTUJ0NjFBczd4SUVHT085SkxLV0dPMmFnWnU1cWJJMWRlVjdyUXMvYnBQYXBVdW1JQk9PYXpnY2ttcmNJR0FTTTBjcUY5WXFkeWFURTVWWERBQTlxdUFMSEdBdllWV1FaWUhuTldaSXlxWjlhTExZRlhxSjN1VmpkQU5ncitWUTNraXl4cnQ2ZzB5WVlhb1MzQm9VRnVhZlc1dFdlcFRtSHovQUlWSmIvZGFweXFTSDVoVFJENVRjRWtHdFl1eHp5bGQzTFZ2Y3ZGaGZ2SjZkeFhRK0hMVmRaMWlLend3andXZmpCSUhhdWVzMTNYS1o2RGsvaFhkZkRXRVRhMWQzSkgzSWVQcXpmOEExcVRwcmNGSjdIb2R2cHFoZHBVWXhqRlJUd3ZwVjBseEQ4c0w0VnNkRmJ0K0JIRmJLWUZGeEZIYzI3d3lydVJ4aGhTc1VQdEw1TGxBUWNPT3ExYkVnUFE1cmhKcng5SXY0N1M0ZGxrWS91cGUwZzdmalY5TlhrVnhJdkRIN3c3TjcwWHR1RmpydzlHN0l3ZVFheGJiV1laY0NUNUcvU3RGWmxZWlZnUjZpaE1WaTBHd01BWUhZVWI2ZzMwdS93QjZZRDVwMWdpYVJ6aFZGVjdlTjVKZnROd1AzbVBrVHRHUDhmVTFMa0hyelM3cUFKdDFMdXFIZFJ1b0FsM1Uwbk5NTFVtNmdCNXF2TloyOXhJSGtUTGdZREFrSDh4VHk5SnZwQVFmMmJhNzJiOTdsc2J2M3JjNDZkNm5odDRiY0ZZazI1Njg1SnBOOUtIcGdTZzRwYzFGdXBkMUF5VE5HYWozMG0rZ1JKdXFPV09PZUl4eW9IUTlRYVF0VFMxQUVHNmF5SDhVMEE5ZVhULzRvZnJWcEpsZEZkRGxXR1FhaUwwMHlBZEtCazVrcU5wS3BYRjlEYnJtU1FEMjcxajNmaVcyZ2gzdHdjNCtZNEEvR2syZ3NhR3M2ckhwbW5TM1RqZHNIeXFQNG03Q3ZIZFRhV1c3ZVNiQWxZYjJ4Nm5KL3JXbHJuaU81MUs2WjAzTkREMHg5M1BRbitsYzQxdzB5enlGaVc5U2M5cTU1U2NtYlVuRzl1bzZ5ZmRiTDdFaXJPYXp0T2I1WkI3aXJ1YWxyVTZvUDNSNU5Vd0VOOFRKOXdFRWdkVFU4Y25tS1NQVWlxNEtwY3M1R1RucFYwOXpIRVM5MGZxVnlacFY0MmdkS3pHWTFabll5U1pQV3E1WExZclZIQ1NyeUZYbW5PZ1hkbHNFWjRJNW9RRm40NjFETWNTa1p6OWFBSVpEbnJTUkRHYVZ6elNKMXBnWGJkY242RE5XbEdCVlcyYmFWSjZaNXEza0VNZmFrd00rUnYzamZXaWh4OHhvb0dWVW1La2s0SUk1QkhGTjJSTytRU3Fuc094cm81dEJzbnlJSlpGUGJjUXdyQ2tzbmlsa2pKRzVEZzFNWnhsc1FuY2c4bGcyQVIrTmExcGFXNjJUU1N4Q1NSdTJlZ3JNQ1NCZ3BHY25qRmFRazhxTUlDZW5QdlZsRlJnaWtsVkFIcFVUSEpwOGh5U2ZXbURtZ0NlTTdJaWU5TTNkY21semhRRDBxSmpRQU4xcU44VThuSnBqVUFJbzVGWEl1d3FtdFhJT2VEUUJvV3FndGlyRnlPQW82VkRhRUI4SDBxemV2ODZaR1BsNHFRTVc2SkRZcW9UeFZxNllHVnFxWjVOV2dIeDg5NmxmakZSUjllS2ZKOTdtZ0N4WnRpYys2bXZRUGhwTEZERGV2SklxbGlpakp4bkFKL3JYbThEWWxRMTEvaE00c0pHOVpQNkNxYjBIRmFucjhkMUVSeEluNTA1cnlCUnpLZy80RlhEUnprREdhbDgrcytZMXNiT3VOcCtwV2hoa2JkSXAzUnVGenRhc0I3aHJWOXJCbWd3TVNkU3YxOXZlcEdselRjMG03Z2tXSTdnTW9aV0RLZWhCcTNCZlN4SEtTTVB4ckVOdnNZdmJ2NVRFNUk2cWZxS1FYanhjVHhsZjl0ZVYvd0RyVWhuWFFhNjR3SlZEZTQ0TmFVV3EyMHYvQUMwMm4wYXVKanVGZGNvd1llb05TaWNpbW14V083V2RXR1ZZRWV4cDRrSHJYREpkTXZSaVBvYXV3YXhQSGpMN2g2TlZjd3VVNjRPRFM3Nnc0TmJoa3dKQVVQcjJyUVM0U1FaUmd3OWpUdWhXTGhlcWx4cUVVQklKTE1Pd3AzbUNxOXpieFhBK1lZYis4S0dDS1UrdFNuN2loZmZyVktUV2JrWkpsd1B3cDExcHM2S3hpQWw5QURnbXNLNjAvVUpXQ3ZDM1BPQU1xdjE5VFUyWldob3A0bm1ZL0krN251QU9QNzMwcXd2aUM1dWdzVUJHNXhrdHQ1VWV2MTlLeG85RHU1VDVhUmxWSnl6eWZ4bjM5aDZWMCttYVhEcDhZNU1rblV1M3JUU0ZjMUxScFJicjVwK2JIQTlCVSsrcWN0d3NLRjNZS1Blc2k1MXRqa1FqYVBVOWFiZGd0YzZMemFiNW85YTQxOVJtSjVsYjg2aWEra1AvQUMwYjg2WE1IS2RxWjFIVmgrZFFTWDhFWSthWlIrTmNZMTJ4L2lQNTFFMXlmV2x6RDVUcXA5ZGdRRUlDNS9JVmszT3R6eTVBYllQUmF3TG0vaXQxTFRTcWc5eldEZmVKVjJsYlVaUDk5dW40Q2syR2lPbHV0UVdOR2xsa3dvNUpKcm1icTZYVi9OTHlpSzNqWEtodXJkTzNyV0ExNWN6dXhhUjVOeHp6VEdMSVJsdk1Zam9HNmUxWnp1OUVaeWxmUkdxYjJMYTBVTEtpRTRKeGtuLzYxVXpqWmNZSXhrOVBwVUtScXlvNmdNL1JnVDNvaXdMZWNBNUc0OC9oVUtOaTZDOTRicHg1ay9Dcnp0dFVuMEZVTlBQenlEMkZUM1Q3YmR2ZmlxYTFPdUw5MFMzZmJhaGo3bW14NUpMazFHci9BT2pSb080eWFVWVZDV1BKNkN0SXEycHkxcDNzaU1rc3h4K2ROR2Z3cEJ5RFNweWNkcXN4Sm93ZDJSMUZRVGNsdTU5YXN4NEhKUElCcXJMdEl5QnpuclNBcnNjMDVLYXh5YWRIVEF2VytDUUNjQWlyR2NJeEhwVmFBWi9MaXArZHBIdFNBcE9mbk5GSko5ODBVRE8zVzQwdU1HWUZjNTVqUFUrMks1YTlqSnVYazJiZDdGZ0NlUUtzcjV1SnJoSVc4dzRDQTg0OVRXWk5KS0hJazNCdTROWTA0V2VobkZXRUpHNERwNjQ3MFRNQ2VPMU1qQmMrd3BaaUJ4MzcxdVdRbmswaTllS1RPYWZHTW1tTWZ5M0ZJVngxNU5Td0FtWlJqUFBTbjNRQjVBeGc0eDZWSWlrLzN1bE1ZMDlzZzFHNXBnS2c0cTViak5WVnExQmtVTUM5R09janRWaStPV1VnNStVVldROEdwTDFnUWhIR0JVZ1pVd0lKcXQzcXpQMHFzT3RXZ0pJeGswNS92VWtmclN2OTZnQ1MzZ1puUWo3dlVuMHJiMGlPNXRZbmxqWmxHY2tIN3BIMHFEUkVoblY3ZHdUSVR1VWVvNzEwNnhxbHVGSEsvd0NlYTU2dGR4ZGlYSm9iYmF2R3dBbkhsTjY5UitkYVNTcTZobFlFZW9PYXhIdEZBZDMrWStnb3RyYjdNUzZOZ2tmUUNvOXVyRnFxYndhamRWRVN1SThiaVdxdEZkWGNsenRDb0k5Mk1tcDl2ZTlnOXFhMitsM2NWbmk0Y2tEYUdQdFN0TEsrZU1ZNjg5S0ZYN2g3VXN0REZJZHdYYWY3eW5CL1NqWk12M0oyK2pqTlZvYnZxbmx0OG82NDRxMmpnaGMveERQc0swVmFQVXBWRU04MjlYK0dGaDdNUlI5c25UL1dXelk5VVlHblNYa1NTN1VRYzhaUElGWlZ4cWsrOW80WVJrSEc1enhSR3FtSE9qYmh2RmxYS09ENmp1S3R3M3NrUnlqRlQ3R3VPM1R5M0JtYVVvUndDbkZXWTlWdUlTd2tqRXFqdXZCcWxVVGRnVlJNN21IWEpsQURoWEg1R3JxYTNBMzMxWlQrZGNWYmFqSE9vYkRwempEQ3B4ZXhrNEVnSnppbjdSSjJ1UG1SMm45cldwLzVhZnBUVzFXMUgvTFEvZ0s1QjdrSmdieG4welRaYnRJU0E3RUhHY1lvOXNtN0N1anJIMXEzVWZLR1kvU3FzdXV5SE94QXZ1VG11WCszN25WVVFrc2NjMUw1KzRnYmdwenRPUjNxWlZrZ2NvbzBKN3lTWnR6dVdQdlZHZTlTTTRKTE9laUx5VFRMMkM1WUJZWkFCd0NWNi9XcWdodWJRdUJiS1J3ZHdibHY4YW1OYUw2Z3FrU3o5cHVHR1JiNCtyaW9aYnVlSlN6cEVvSGRwUDhBNjFVN2k0djIrNUVJMDQrYnFhcU5aVFN2dWN0SWV4WTk2MDU0OXkxSlBxU3ZyVnl6N1lvNDhmM3VhcHpYOTVLSDh5NU1hNE9DZ3huaXJxNlRja0JsUSt2UFNsazBLNDJJeEFLbE41VTgxTHF4dHVOeWpiYzVlUlo1SlNHRHMzcTJjMVBGcDdQakRFc0JrcnQ2VjExcG85c3hBZG1CSVhBSnp3ZXdxMDJpVzYzSWlqR1ZWUG5JUFgweldFc1F0a2NzcDZuQk1KUzIyTldiUEFPekJ4U3gyZWVPZk56akZkWExZUlJTT3FJU0ZHM2oxOWMxVWwwTUpPb2ZCZkc3eTA3anRUVlpCekdDMXUyM0todGgrWEpGTWFNd1JPQjh3WWRPNE5kakZwTU8xc3grU1R3b0J5T25lcXgwV1hlRWNCczg5YWFyUlpVYWxuZEhJV09WbWNFRWZLT0RVMTM4NnFnOWNtcGJ1QVEzYmVWSnZiSHpzZWdQb1BwVUhRa1p5ZTVyb2lyNm5SN1gzYkRWVUtQcFRHZkk2VTUzN0NveXAyYmlSak9Lc3dGejh2U25KeDBwb0oyNEhTbmdjQ2dDUlNBRDY5cXFPV0I1NDVxNEZLcWNyd1J4Vk9kZGhHVG5QdFFoa1I2MDlLanpUbHBnWGJja011T296VmdISVAwcXRCbnRuZ1pxd3BHMDU5S1FpbTZqZFJTdDk2aWdaMGw5cWFXZ2VLTXF6ZndvRjRCcm52TGx1Smk4aEpkamtrMUtra0taYmxtUGM4bWxTNlZaZDJNWnJPbkRsV2hDVmlDUWVUeDNxbzdsalU5M2NlZko4bzRxdVJqRmFvb0trUUdoWThqSk5UUm9RTTlxQUxOa2gzRmpuYXZXb3JvcjVwOWV0WExhSjJ0amhUOTcwNjFCUEFHSXoxSkl4NjBkUU0rUTVPZXRRdHlhbG1ReHlFYmNDb3U5QUVzYWZLS3NRSHJtcXlNUU1kcXNSRHJRQmNqNU5UMzBQazdWNzQ1cW5FU0NhdVhjclNMR3g1VXFPZmZ2U0F5SmpuaW9CVTAzM2pVSUZVZ0hJVG5pbk9mbTVwcU5zYW5NZDNQZW1BK0dWNDNESXhWaDBJcnJ0RjFpQ1F4eDNnQzRQM2owTmM1cE9sejZwY21LRWZkR1dZL3dpdFJkQXVGRGJWTFlPQVIwTmM5WlJlamVwTHRzem9sZTJNN041aFpRZmw5RFZobHRaUUdqQnpnOGRzMXlDUXpSdGdPMlFlZ3E1QmNYQ2xTekVqM0hGY2NxVnRtUTBkSDltVllpQU11eHdNZjU0cEJickdDckhkN2lxMGR3dmwvTU1aT1RuclVubmdwdTNBc2V4OUt5c3lTeUlsU01ERzVSem5wajJxeElMV1JSdVhZYzdpVHgvd0RyclBqYVE5Y05nNHg2VnA2WGVhaEF1b3RZWHh0dkpzcExwaDVNY25tZVdPRitjSEhVOGlpRU9hVm13U3V5S2VXeDhzeFJzRkRMempITkN0REhhb3h3NFVZR1IxOVRYVFNYK3V6NkRwTnpCcTFoYnZJSnhOSmNHMmlhUmxrd3B3NjhnREk0L0dzWFRyOUxEVGZFTi9kMjFuZnlIL1JqTEl4SWVTVjlyS3Zsa0xzMnE1K1VBOGNIRmJld1dtdWhYSVpWeVlOMjdLREJ5NDlmU3MzeUZZdXp1QVR5QU9jNXJ0dkVGL0xvR24yMGVpdTJubHI5bHVraE83NXhieE1WeTRKd0dZOFZuMzhjNytNdGZnc3ZEMFdyT3QwemVXVmwvZEQyRWJBWUpQZXRQWVcwdnFWeTJPZGV6aWlkQUd4bFFjUHhqSXowOUNEeFVVeGhoYkNGVzlTb3IwRFdiTFU1N0xScFc4RHgzRTMySlVsRHJjRXhiWFlLbkRaNFhCK2JKNXJtZEtzSUVtbjFyVW9vN2JTYk9jdExHdWZua0J5dHRHR0pabUp3RDZET2FIUmFkcjNEbDFNTGZoemxXVVoybklJd2ZUNjFLYmlDTzNZRURKOXVUWFM1YjdmcWVrYTdQSEhOcWF4M2x4Smc3YkM3Y2xvd3g5QUdDdDdNUFNwL0Q5dGNhRkQ0aWE2c3JvWDlvdHVpaTBXTjVVM08zeklYVmh0SXdkMk9sRHBYbGJvRnRUa1ZiYW05eHh3QVhHTWZTcFk1L09sVURqc04zUFQ2MTZJTEpyZVl3eDY1YzIybzMxOE5sN2VXYVhGd3kvWlVsOHNzY2JOdVQwSHRYRzJjKzZ6MSs5czlRaXY0ekEwOHNkL0RKSExjb1NwODBkZHJLN2pIelo0NllOTjRlM1VIQWpnamFNckt3QjNQbmI5UnhUSlJBRVZVWXUyUzBqT2Y4L2xYYWtYOWpmYVRGYWVFN3JVbzdTQ0ZZZFE4NS9uRGdNVHdwWDVDemJjbjVjZHE0blZZSUxMVXRRc0xmNW9yVzdsaWpMdHVKQWM4azl6Nm1zNmxCclc1TGkwUXgzaVNXanFOb2tMRWdqUDNmVCtWTW1lYVc3RFFUL3ZYWUtFR2VudjZDbVJ4eE95WjNCczViYVA1Vkp4bmJHb0E1eVQxSXJOcExZVnhrYzl4c1dJZ0hJTzRua2pIZXJWcEhJakp4a1orNjQ2MUdpK1JJQXhKSFUxY2prMy9BTHhUMDZETlMyRng4aVNBTG1UcjJIYWtFaXdrTmtram9DT0JUY014T1RnbjFwaEp3Mk1udHpVMlFpMWEzY1BuZ3pBZ2trRXFPS21Na1VrN3J2SUJCQlA5YXpWT0RoZ0FGNURkajdWRzh2ek1wQkhwVTh0eFdOQzVqRW9MUktBblg2MVJFcUl3MnVGWk1ybjJQYWs4NHFVWGN3d3VUanB4VmR5WkU4MDhzYzRBNkdxU0dMTHFLeEJnWFBCN2Qvd3JMdmRmbitaWVMwZTdyZzhuOGFZOGR4NXhkcmFNYnVqRnNpbGtzamNGUXp3YmljSENuajJycGhHTWRXV2trWVR5NWZHY3NUMHFZV2sza0dWb25DSGdOaml0R2JSbzJrRWhuVTg3UXFMNlZKRkFWZGtsV1NSZHA4c0syTm85Y1lyb2RWVzBLY2pHa2greXk3c0IwR092dUtZNFZrWTdsK1k1MmoxclJUeVduV080a0NMdjI1QTNZcHQ5cExXenNVZFpsNmhsN2lpTTFlekJHY3VXWUtCeFYrenRETytjWkFxdGIyN3lFbFY1UDZWdG9FczdiYklTb0k1UGMxbzVJcTVVdkxVUVJPK1NkdzQ5cXlia3JJZ0czR0IxOTYxbXU0cFZLTVdJd2VLcXJiUlhHZnZKeng2VktsM0F4eEhucFQxV3RSTkxiYVQzcU9XeGtpYmtmbFZxYWV3WEk0R0NwMDV3UWZwVDFPYzRGUkJTdVFSVDBQU21CR2V0Rk9lUExFMFVBVWYzbUNSbkhmRkM3czhIbjFycWRaVll0TWwyQUxrZ2NWeTFFWmN5dUpDNHh3S0I2bW5JSzFEYlEvWmkyem4xeWFwdXcyN0djTXRnWnE5QmJ0Y1NMR2dPMzFxcmJnYmp4Vy9aZ0xGd01WRFlGbU9HT0pWUVk0SFgwckR2WlF0d2RoSHlIZ2lyVi9OSXNKQWNqSXJKbDZyUkZBUnl2NW1ja2ttb2xqSlBTcDBVWkhGYXR2REdZODdCVGJzSzVqaU1xUnhVZ0JVOFZlbmpSWElDZ1ZXY0RJNHBKM0dJbWVvNHEwc1praGM3ajhnM0FmenFzT3RYN0VCaElDTS9MVkFVM3N3alJ5elpNTEg1aXZVVnROb05nOW1IUjNMTjh5dXZwOUt4Mlp0b1hKd0Qwcm83Q1YyMDhNekVuMXJuck9VYk5NbG5PWFdqU3c3bVFoMEhROUtwZlo1a0c1bzIybnZpdTNqUlczYmdEeFViUXhzQmxBZWFVSzhyRXFUT2QwbStleGtkbzNLNUhUSFd1bHN0Vml1WTNpeVEyY2dBWUgxcWxmV2x2ODcrVXU3UFdzL1RsSDJqcDNwVklxY2VkN2xOSm5Sa3hGY2VXdTdPYzRxT1JKUDdpcUNlQUJ4VW9SUStjQ3JFYXJzUEhhdUs1bVp6WkkrYmtpamNGNmNIMnJSS0w5bGR0b3o2MVFQRFVKM0VTeHZ3Y3NUL0FEclYwbTgweTFpMUZMK2U4ak56YVNXcStUYkNVQU9COHhPNGRNZFAxckZIRzZwRUpNZU0xY0haM0dtYmQ3ZGVIN3l4MDIyYSsxSlRaTE1wYzZjQ0g4eHczVHpPTVl4VGRKMXV5MFkzY2krZHFNYnVGaXNKN1lKSEx0QUt5eUU3Z20wazRDNVk0N0ExakVZak5FZGFPdGIzckZYT2d1N2pROVhzZ2gxQzYwK1k2aE5leXJkVzdUN2pLcWh0cng5UUNEaklCOXFwWHcwaldkZDFhL24xUzRza251MmVBSll5U0YwNCtZN1NOdlRvYXkzWXFlRGltTVRnODBLdnpib2Q3blE2aXZoNi90Tkx0ejRndjArdzI1Z0pPblRFT1N4YlAzdU91UHdxbG9qNkJwZXRTM04yOXpQRmFxVHA4bjJNbFRMamgyakxaQUI3WjV4eldVZnVVdjhBQlRkZlc5Z3YxTjNTdFMwUFR0UW1sdXJ6V2I5YnNPbDZHczBRVEIrV0xFeTV5RDh3SUdRUnhWTk5VaTByVDlRc2RJdTdwcDdpOFVHN2lMUkI3ZUlOdHd3SWJMRmh4eHd0VW5WZGljQ29IK1U4Y1VmV0crZ1hPa3RkWnQ0ZFowdVVtOC9zK3hNMHNseGNndk5jU3lJVmFSZ0N4QTRWVkdTUUJ6V1o0WHVMRFR5OE9zUTNMMmx6WS9aWkZneHV5U2g2OWg4cHlSelZKSkhYNVF4QUs4ajFxekhHalc3TVZCT0R6Uzl2SzVQT3piVFVOTmp1RzB5RzdrdDlKRmpkMjhkeVlaQ0hsbklKY0lQbTJEYUVHZVRnbnZYUDNrRmpEZlN4YVkwa2xsR3Fxa2pLVU1qWUc4aFR5QVd6Z0huRlNub0Q2VTBjSTFFcTkxYXhWN2tVRUxOSUJ1eDYvd0NGWE44Y0tBYlFjblBQZi82MVYwSjJPYzFYZG1KWGs4Q3NXN3NrbmVWbnl6NElQYitsT056dGl3cUEvalZja2tFWm9mN29GT3dXSkRPekRKd2VLY1pKRzJqSEMrbFY0U2NkYXNJZVdOTm9CZHpaNU9SUVdNbUJrOGNDa3o4b3FhUDErbExZUkJJSlYrVlNDVHhWZC9PQzQyNFZmUTFyd0tyU01TTS9OVVVpcnp4MUZOUFVhTW43UXpiUmtBQW5rODFHR2tpa0NoQnVZY2Q4ZTlXSmxWYmxsQUFIcFRSOTB0M3gxclN5R1ZHbGxRN1dCSjZqSTYxV1NTNGpuazJGMWpkZHBVZWxYbStiWXh5VG5yVXR3U3JIYWNjVlNZeGtVVnRIYkZsaDN6SHN3NlZEc1R5aXNwYjgrVFZxQTlQclZMVTJLbGdEam1pS3ZJRXRTVUJyWkNzY1hsaGx5anVQdmUxWjBzRnhMT1ZrSktqK0lkS1pESTd3amN4YkI3bjJyWGdVQzBqZkh6TjFQclY4eml3dll6WWJTTU1ja25IdGlyOEZ2RTN5dWNJVGduSEswTjkwMHlJa2Q2WE0yUGNWMDh0eWhjTUZPQVFPdE5sWVNNZWVLYTdISjU3MUFSeitOT080RXhSWFVnNDNIcnhXZExheUk1d01qcm10SzJHV3JTZEZNVGNDdFl2VWFaeXhENTZVVmVhTk54K1VVVnBjWi8vWicsXHJcblx0XHRdLFxyXG5cdFx0dmlkZW9TcmM6ICdodHRwczovL2RjbG91ZC1pbWcub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9ndWlkZS91bmlhcHAvJUU3JUFDJUFDMSVFOCVBRSVCMiVFRiVCQyU4OHVuaS1hcHAlRTQlQkElQTclRTUlOTMlODElRTQlQkIlOEIlRTclQkIlOEQlRUYlQkMlODktJTIwRENsb3VkJUU1JUFFJTk4JUU2JTk2JUI5JUU4JUE3JTg2JUU5JUEyJTkxJUU2JTk1JTk5JUU3JUE4JThCQDIwMTgxMTI2Lm1wNCcsXHJcblx0XHR0aW1lOiAnMjAxOS0wNC0xMCAxMTo0MycsXHJcblx0XHR0eXBlOiAyLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDUsXHJcblx0XHR0aXRsZTogJ+e7p+WbvemAmuWAkuS4i+WQju+8jOWPiOS4gOWFrOWPuOaUvuW8g+W/q+mAkuS4muWKoe+8jOabvueguDIw5Lq/5oiY4oCc5LiJ6YCa5LiA6L6+4oCdJyxcclxuXHRcdGF1dGhvcjogJ+WFqOeQg+WKoOebn+e9kScsXHJcblx0XHRpbWFnZXM6IFsnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4OTIwMDQ2MDUsMjE3NDY1OTg2NCZmbT0yNiZncD0wLmpwZyddLFxyXG5cdFx0dmlkZW9TcmM6ICdodHRwczovL2RjbG91ZC1pbWcub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9ndWlkZS91bmlhcHAvJUU3JUFDJUFDMSVFOCVBRSVCMiVFRiVCQyU4OHVuaS1hcHAlRTQlQkElQTclRTUlOTMlODElRTQlQkIlOEIlRTclQkIlOEQlRUYlQkMlODktJTIwRENsb3VkJUU1JUFFJTk4JUU2JTk2JUI5JUU4JUE3JTg2JUU5JUEyJTkxJUU2JTk1JTk5JUU3JUE4JThCQDIwMTgxMTI2Lm1wNCcsXHJcblx0XHR0aW1lOiAnNeWIhumSn+WJjScsXHJcblx0XHR0eXBlOiAzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDYsXHJcblx0XHR0aXRsZTogJ+WllOmpsOi9puS4u+WTreiviee7tOadg+e7re+8muWPjOaWueWGjeasoeWNj+WVhuaXoOaenCcsXHJcblx0XHRhdXRob3I6ICfnjq/nkIPnvZEnLFxyXG5cdFx0aW1hZ2VzOiBbXSxcclxuXHRcdHRpbWU6ICc15YiG6ZKf5YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNyxcclxuXHRcdHRpdGxlOiAn6Z2g6LeR6L2m5r+A5Y+R5r2c6IO977yM5aWU6amwUHJv6LeR6L2m6aaW5rWL77yM5oCO5LmI6YKj5LmI5YOP5oSP5aSn5Yip6LeR6L2m6K6+6K6hJyxcclxuXHRcdGF1dGhvcjogJ+i9puWTgScsXHJcblx0XHRpbWFnZXM6IFtcclxuXHRcdFx0J2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT0yMTMzMjMxNTM0LDQyNDI4MTc2MTAmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz00RkI0MkJDNTVFMkEyNjA3NkIyRDEzMDEwMzAwNjBDNicsXHJcblx0XHRcdCdodHRwczovL3NzMC5iYWlkdS5jb20vNk9OV3NqaXAwUUlaOHR5aG5xL2l0L3U9MTI3NjkzNjY3NCwzMDIxNzg3NDg1JmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9NEZCMDJGQzQwQjAwMDY0MzMyQUQ0NTE3MDMwMEQwQzcnLFxyXG5cdFx0XHQnaHR0cHM6Ly9zczEuYmFpZHUuY29tLzZPTlhzamlwMFFJWjh0eWhucS9pdC91PTE5MDkzNTMzMTAsODYzODE2NTQxJmZtPTE3MyZhcHA9NDkmZj1KUEVHP3c9MjE4Jmg9MTQ2JnM9MjVGNjdFODQ0QzAwMjQ0NTQzN0RFODgxMDMwMEUwRDMnLFxyXG5cdFx0XSxcclxuXHRcdHRpbWU6ICcyMDE5LTA0LTE0IO+8mjEwOjU4JyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogOCxcclxuXHRcdHRpdGxlOiAn56iL5bqP5ZGY5rWq5ryr6LW35p2l5pyJ5aSa5Y+v5oCV77yM55yL5a6M6L+ZM+auteS7o+eggeecvOedm+a5v+a2puS6hiEnLFxyXG5cdFx0YXV0aG9yOiAn6L2m5ZOBJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cDovL3AzLXR0LmJ5dGVjZG4uY24vbGlzdC9wZ2MtaW1hZ2UvMTUzOTQ5OTM5MzQ3ODRhZWVhODJlZjUnLFxyXG5cdFx0XHQnaHR0cDovL3AxLXR0LmJ5dGVjZG4uY24vbGlzdC9wZ2MtaW1hZ2UvMTUzOTQ5OTM5MzM4NTQ3YjdhNjljZjYnLFxyXG5cdFx0XHQnaHR0cDovL3AxLXR0LmJ5dGVjZG4uY24vbGlzdC81MDlhMDAwMjExYjI1ZjIxMGM3NycsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzIwMTktMDQtMTQg77yaMTA6NTgnLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5dXHJcbmNvbnN0IGV2YUxpc3QgPSBbe1xyXG5cdFx0c3JjOiAnaHR0cDovL2dzczAuYmFpZHUuY29tLy1mbzNkU2FnX3hJNGtoR2tvOVdUQW5GNmhoeS96aGlkYW8vcGljL2l0ZW0vNzdjNmE3ZWZjZTFiOWQxNjYzMTc0NzA1ZmJkZWI0OGY4ZDU0NjQ4Ni5qcGcnLFxyXG5cdFx0bmlja25hbWU6ICdSYW50aCBBbGxuZ2FsJyxcclxuXHRcdHRpbWU6ICcwOS0yMCAxMjo1NCcsXHJcblx0XHR6YW46ICc1NCcsXHJcblx0XHRjb250ZW50OiAn6K+E6K665LiN6KaB5aSq6Iub5Yi777yM5LiN566h5LuA5LmI5Lqn5ZOB6YO95Lya5pyJ55GV55a177yM5a6i5pyN5Lmf6K+05LqG5Y+v5Lul6YCA6LSn5bm25LiU5ZWG5a625om/5ouF6L+Q6LS577yM5oiR6KeJ5b6X6Iez5bCR5oCB5bqm5bCx5Y+v5Lul57uZ5LqU5pif44CCJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3JjOiAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjM5NjA2ODI1Miw0Mjc3MDYyODM2JmZtPTI2JmdwPTAuanBnJyxcclxuXHRcdG5pY2tuYW1lOiAnUmFudGggQWxsbmdhbCcsXHJcblx0XHR0aW1lOiAnMDktMjAgMTI6NTQnLFxyXG5cdFx0emFuOiAnNTQnLFxyXG5cdFx0Y29udGVudDogJ+alvOS4iuivtOeahOWlveaciemBk+eQhuOAgidcclxuXHR9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0YWJMaXN0LFxyXG5cdG5ld3NMaXN0LFxyXG5cdGV2YUxpc3RcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3ZmZjZWQ1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDBlOGYwZTJcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdmZmNlZDUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uZHJhZ1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3cmFwXCIsIFwidGFiLWJhci1zY3JvbGxcIl0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzY3JvbGxlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic2Nyb2xsXCJdLFxuICAgICAgICAgICAgICBhdHRyczogeyBzY3JvbGxEaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLCBzaG93U2Nyb2xsYmFyOiBcImZhbHNlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQmFycywgZnVuY3Rpb24odGFiQmFyLCB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdCxcbiAgICAgICAgICAgICAgICAgIHJlZjogdGFiQmFyLmlkICsgdCxcbiAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRhYi1iYXItaXRlbVwiLCBcInRhYi1iYXItc2Nyb2xsLXdpZHRoXCJdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGFuZ2UodClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGFiLWJhci10aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS50YWJJbmRleCA9PT0gdCA/IFwiYWN0aXZlXCIgOiBcIlwiXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJCYXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIndyYXBcIiwgXCJ0YWItYmFyXCJdIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJCYXJzLCBmdW5jdGlvbih0YWJCYXIsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogdCxcbiAgICAgICAgICAgICAgICByZWY6IHRhYkJhci5pZCArIHQsXG4gICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRhYi1iYXItaXRlbVwiXSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlKHQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGFiLWJhci10aXRsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0udGFiSW5kZXggPT09IHQgPyBcImFjdGl2ZVwiIDogXCJcIl1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJCYXIubmFtZSkpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxkaXYgdi1pZj1cImRyYWdcIiBjbGFzcz1cIndyYXAgdGFiLWJhci1zY3JvbGxcIj5cclxuXHRcdFx0PHNjcm9sbGVyIGNsYXNzPVwic2Nyb2xsXCIgc2Nyb2xsRGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHNob3dTY3JvbGxiYXI9XCJmYWxzZVwiPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwidGFiLWJhci1pdGVtIHRhYi1iYXItc2Nyb2xsLXdpZHRoXCJcclxuXHRcdFx0XHRcdHYtZm9yPVwiKHRhYkJhciwgdCkgaW4gdGFiQmFyc1wiXHJcblx0XHRcdFx0XHQ6a2V5PVwidFwiXHJcblx0XHRcdFx0XHQ6cmVmPVwidGFiQmFyLmlkICsgdFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2UodClcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGFiLWJhci10aXRsZVwiIDpjbGFzcz1cIlt0YWJJbmRleCA9PT0gdCA/ICdhY3RpdmUnIDogJyddXCI+e3tcclxuXHRcdFx0XHRcdFx0dGFiQmFyLm5hbWVcclxuXHRcdFx0XHRcdH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3Njcm9sbGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHYtZWxzZSBjbGFzcz1cIndyYXAgdGFiLWJhclwiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJ0YWItYmFyLWl0ZW1cIlxyXG5cdFx0XHRcdHYtZm9yPVwiKHRhYkJhciwgdCkgaW4gdGFiQmFyc1wiXHJcblx0XHRcdFx0OmtleT1cInRcIlxyXG5cdFx0XHRcdDpyZWY9XCJ0YWJCYXIuaWQgKyB0XCJcclxuXHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2UodClcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWItYmFyLXRpdGxlXCIgOmNsYXNzPVwiW3RhYkluZGV4ID09PSB0ID8gJ2FjdGl2ZScgOiAnJ11cIj57e1xyXG5cdFx0XHRcdFx0dGFiQmFyLm5hbWVcclxuXHRcdFx0XHR9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdGRyYWc6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdHRhYkJhcnM6IHtcclxuXHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gW107XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0YWJJbmRleDoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdH1cclxuXHR9LFxyXG5cdHdhdGNoOntcblx0XHR0YWJJbmRleChuZXdWYWwpe1xyXG5cdFx0XHR0aGlzLmNoYW5nZShuZXdWYWwpXG5cdFx0fVxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGFzeW5jIGNoYW5nZShpbmRleCwgZSkge1xyXG5cclxuXHRcdFx0bGV0IHJldCA9IHtcclxuXHRcdFx0XHRpbmRleDogaW5kZXhcclxuXHRcdFx0fTtcclxuXG5cdFx0XHR0aGlzLiRlbWl0KCd0YWJDaGFuZ2UnLCByZXQpO1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLiRyZWZzW3RoaXMudGFiQmFyc1tpbmRleF0uaWQgKyBpbmRleF1bMF1cblx0XHRcdGxldCBlbFNpemUgPSBhd2FpdCB0aGlzLmdldEVsU2l6ZShlbCk7XG5cdFx0XHRpZiAoZWxTaXplLmxlZnQgKyBlbFNpemUud2lkdGggPiA3NTApIHtcblx0XHRcdCAgICBsZXQgaWR4ID0gaW5kZXggLSA0O1xuXHRcdFx0ICAgIGxldCBuZXdFbCA9IHRoaXMuJHJlZnNbdGhpcy50YWJCYXJzW2lkeF0uaWQgKyBpZHhdWzBdXG5cdFx0XHQgICAgZG9tLnNjcm9sbFRvRWxlbWVudChuZXdFbCwge30pO1xuXHRcdFx0ICAgIHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlbFNpemUubGVmdCA8IDApIHtcblx0XHRcdCAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLCB7fSk7XG5cdFx0XHR9XG5cdFx0XHRcclxuXHRcdH0sXG5cdFx0Z2V0RWxTaXplKGVsKSB7IC8v5b6X5Yiw5YWD57Sg55qEc2l6ZVxuXHRcdCAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG5cdFx0ICAgICAgICBjb25zdCByZXN1bHQgPSBkb20uZ2V0Q29tcG9uZW50UmVjdChlbCwgb3B0aW9uID0+IHtcblx0XHQgICAgICAgICAgICByZXMob3B0aW9uLnNpemUpO1xuXHRcdCAgICAgICAgfSlcblx0XHQgICAgfSlcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4ud3JhcCB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdHdpZHRoOiA3NTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWVlO1xyXG59XHJcbi50YWItYmFyIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdHdpZHRoOiA3NTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi50YWItYmFyLWl0ZW0ge1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhYi1iYXItc2Nyb2xsLXdpZHRoIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcbn1cclxuLnRhYi1iYXItdGl0bGUge1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRsaW5lLWhlaWdodDogOTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICMzMDMxMzM7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmFjdGl2ZSB7XHJcblx0Y29sb3I6ICNlYzcwNmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWM3MDZiO1xyXG59XHJcbjwvc3R5bGU+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcInRhYi1iYXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwic2Nyb2xsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidGFiLWJhci1pdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGFiLWJhci1zY3JvbGwtd2lkdGhcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBcIlxuICB9LFxuICBcInRhYi1iYXItdGl0bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5MFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzAzMTMzXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2VjNzA2YlwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWM3MDZiXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNzUzZGVlYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI5NDFlY2U1Y1wiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc1M2RlZWEmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1wibWl4LWxvYWQtbW9yZVwiXSwgb246IHsgY2xpY2s6IF92bS5sb2FkaW5nIH0gfSxcbiAgICBbXG4gICAgICBfdm0uc3RhdHVzID09IDFcbiAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgcmVmOiBcImxvYWRpbmdJY29uXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWl4LWxvYWQtbW9yZV9faWNvblwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2xvYWRpbmcuZ2lmXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtaXgtbG9hZC1tb3JlX190ZXh0XCJdLFxuICAgICAgICAgIGNsYXNzOiB7IFwibWl4LWxvYWQtbW9yZV9fdGV4dC0tZGlzYWJsZWRcIjogX3ZtLnN0YXR1cyA9PT0gMiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50ZXh0W192bS5zdGF0dXNdKSldXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cIm1peC1sb2FkLW1vcmVcIiBAY2xpY2s9XCJsb2FkaW5nXCI+XHJcblx0XHQ8aW1hZ2UgXHJcblx0XHRcdHJlZj1cImxvYWRpbmdJY29uXCIgXHJcblx0XHRcdGNsYXNzPVwibWl4LWxvYWQtbW9yZV9faWNvblwiIFxyXG5cdFx0XHRzcmM9XCIvc3RhdGljL2xvYWRpbmcuZ2lmXCJcclxuXHRcdFx0di1pZj1cInN0YXR1cyA9PSAxXCJcclxuXHRcdD5cclxuXHRcdDwvaW1hZ2U+XHJcblx0XHQ8dGV4dCBjbGFzcz1cIm1peC1sb2FkLW1vcmVfX3RleHRcIiA6Y2xhc3M9XCJ7J21peC1sb2FkLW1vcmVfX3RleHQtLWRpc2FibGVkJzogc3RhdHVzPT09Mn1cIj57e3RleHRbc3RhdHVzXX19PC90ZXh0PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIm1peC1sb2FkLW1vcmVcIixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHN0YXR1czoge1xyXG5cdFx0XHRcdC8vMOWKoOi9veWJje+8jDHliqDovb3kuK3vvIwy5rKh5pyJ5pu05aSa5LqGXHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHRcdFx0J+S4iuaLieaYvuekuuabtOWkmicsXHJcblx0XHRcdFx0XHRcdCfmraPlnKjliqDovb0uLicsXHJcblx0XHRcdFx0XHRcdCfmiJHkuZ/mmK/mnInlupXnur/nmoR+J1xyXG5cdFx0XHRcdFx0XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5taXgtbG9hZC1tb3JlIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdH1cclxuXHJcblx0Lm1peC1sb2FkLW1vcmVfX2ljb24ge1xyXG5cdFx0d2lkdGg6IDM2dXB4O1xyXG5cdFx0aGVpZ2h0OiAzNnVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTJ1cHg7XHJcblx0fVxyXG5cclxuXHQubWl4LWxvYWQtbW9yZV9fdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICNhYWE7XHJcblx0fVxyXG5cclxuXHQubWl4LWxvYWQtbW9yZV9fdGV4dC0tZGlzYWJsZWQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGNvbG9yOiAjYmJiO1xyXG5cdH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm1peC1sb2FkLW1vcmVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjYwcnB4XCJcbiAgfSxcbiAgXCJtaXgtbG9hZC1tb3JlX19pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM2cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtaXgtbG9hZC1tb3JlX190ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwibWl4LWxvYWQtbW9yZV9fdGV4dC0tZGlzYWJsZWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjYmJiYmJiXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ5dGljb25cIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcInl0aWNvblwiXG4gIH0sXG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWM3MDZiXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlci13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcInBhZ2UtaGVhZGVyLWxlZnRcIjoge1xuICAgIFwib3BhY2l0eVwiOiAwLjlcbiAgfSxcbiAgXCJsb2dvXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFnZS1oZWFkZXItY2VudGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwic2VhcmNoLWlucHV0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjYwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMilcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMFwiXG4gIH0sXG4gIFwicGFnZS1oZWFkZXItcmlnaHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiY29udHJpYnV0ZS1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBcIixcbiAgICBcImhlaWdodFwiOiBcIjQ0XCJcbiAgfSxcbiAgXCJjb250cmlidXRlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJzbGlkZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjhmOFwiXG4gIH0sXG4gIFwibGlzdC1jb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImxvYWQtbW9yZS13cmFwcGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm5ld3MtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2VlZWVlZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMlwiLFxuICAgIFwiY29sb3JcIjogXCIjMzAzMTMzXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDZcIlxuICB9LFxuICBcImJvdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJ0aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIixcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJpbWctbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIyMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQwXCJcbiAgfSxcbiAgXCJpbWctd3JhcHBlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcImltZ1wiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJpbWctZW1wdHlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcInZpZGVvLXRpcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMylcIlxuICB9LFxuICBcImltZy1saXN0MVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IFwiMzBcIixcbiAgICBcInRvcFwiOiBcIjI0XCJcbiAgfSxcbiAgXCJ0aXRsZTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNDBcIlxuICB9LFxuICBcImJvdDFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJpbWctbGlzdDJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIzMFwiLFxuICAgIFwidG9wXCI6IFwiMjRcIlxuICB9LFxuICBcInRpdGxlMlwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMTBcIlxuICB9LFxuICBcImJvdDJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcImltZy1saXN0M1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcwMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwXCJcbiAgfSxcbiAgXCJpbWctd3JhcHBlcjNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0XCJcbiAgfSxcbiAgXCJpbWctbGlzdC1zaW5nbGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI2OTBcIixcbiAgICBcImhlaWdodFwiOiBcIjI0MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwXCJcbiAgfSxcbiAgXCJpbWctd3JhcHBlci1zaW5nbGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjQwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==