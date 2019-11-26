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
  name: '关注',
  id: '1' },
{
  name: '推荐',
  id: '2' },
{
  name: '体育',
  id: '3' },
{
  name: '热点',
  id: '4' },
{
  name: '财经',
  id: '5' },
{
  name: '娱乐',
  id: '6' },
{
  name: '军事',
  id: '7' },
{
  name: '历史',
  id: '8' },
{
  name: '本地',
  id: '9' }];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL21haW4uanM/M2ZkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMuanNvbj9lNzE1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzLmpzb24/ZTFmNyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9tYWluLmpzPzI5YWMiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvQXBwLnZ1ZT80ZDY1Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL0FwcC52dWU/YzhlNCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT85NDYzIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlPzQ5MmEiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvcGFnZXMvbnZ1ZS9udnVlLm52dWU/YWU1OCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT80ODNjIiwidW5pLWFwcDovLy9wYWdlcy9udnVlL252dWUubnZ1ZSIsInVuaS1hcHA6Ly8vY29tbW9uL2luZGV4LmpzIiwidW5pLWFwcDovLy9qc29uLmpzIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/Mzc2MCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlPzQ4OWQiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT83Njc5Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvdGFiLW52dWUvdGFiYmFyLm52dWU/ZWU2ZiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/YTM0YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcz9iYmRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/OTZjZiIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL3RhYi1udnVlL3RhYmJhci5udnVlPzQ4ODgiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZT8wZjU1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzc4NzUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT9jNGM4Iiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/NTk4MSIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlPzA4MDIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3VuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy9taXgtbG9hZC1tb3JlL21peC1sb2FkLW1vcmUubnZ1ZT9iN2MxIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL2NvbXBvbmVudHMvbWl4LWxvYWQtbW9yZS9taXgtbG9hZC1tb3JlLm52dWU/ZmUzNCIsIndlYnBhY2s6Ly8vRDovdW5pYXBwL3lvdXF1LXdlYi9wYWdlcy9udnVlL252dWUubnZ1ZT9jMGYwIiwid2VicGFjazovLy9EOi91bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlP2I0MDUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImluaXRVbmkiLCJpc0ZuIiwiaGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJSRUdFWCIsIkFQSV9OT1JNQUxfTElTVCIsInNob3VsZFByb21pc2UiLCJuYW1lIiwidGVzdCIsImluZGV4T2YiLCJwcm9taXNpZnkiLCJhcGkiLCJfbGVuIiwiYXJndW1lbnRzIiwicGFyYW1zIiwiQXJyYXkiLCJfa2V5IiwidW5kZWZpbmVkIiwiYXBwbHkiLCJjb25jYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwib25NZXNzYWdlQ2FsbGJhY2tzIiwib3JpZ2luIiwib25TdWJOVnVlTWVzc2FnZSIsIndlYnZpZXdJZCIsIndlZXhQbHVzIiwid2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwiaWQiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwiZXZlbnQiLCJ0byIsIndyYXBwZXIiLCIkcHJvY2Vzc2VkIiwiY3VycmVudFdlYnZpZXdJZCIsImlzUG9wdXBOVnVlIiwiaG9zdE5WdWVJZCIsIl9fdW5pYXBwX29yaWdpbl90eXBlIiwiX191bmlhcHBfb3JpZ2luX2lkIiwicG9wdXBOVnVlSWQiLCJwb3N0TWVzc2FnZSIsIm9uTWVzc2FnZSIsIl9fdW5pYXBwX21hc2tfaWQiLCJfX3VuaWFwcF9ob3N0IiwibWFza0NvbG9yIiwiX191bmlhcHBfbWFzayIsIm1hc2tXZWJ2aWV3IiwiZ2V0V2Vidmlld0J5SWQiLCJwYXJlbnQiLCJvbGRTaG93Iiwib2xkSGlkZSIsIm9sZENsb3NlIiwiY2xvc2UiLCJzaG93TWFzayIsInNldFN0eWxlIiwibWFzayIsImNsb3NlTWFzayIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJnZXRDdXJyZW50U3ViTlZ1ZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZ2xvYmFsRXZlbnQiLCJjYWxsYmFja3MiLCJVTklBUFBfU0VSVklDRV9OVlVFX0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2siLCJjcmVhdGVDYWxsYmFjayIsInJlcyIsImVyck1zZyIsImtlZXBBbGl2ZSIsImNhbGxiYWNrSWQiLCJwdWJsaXNoIiwiX3JlZiIsImNyZWF0ZVB1Ymxpc2giLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJwbHVnaW5OYW1lIiwiZG9tIiwibG9hZEZvbnRGYWNlIiwiZmFtaWx5Iiwic291cmNlIiwiZGVzYyIsImFkZFJ1bGUiLCJmb250RmFtaWx5Iiwic3RhdHVzIiwiZ2xvYmFsRXZlbnQkMSIsImNhbGxiYWNrcyQxIiwiaXNVbmlBcHBSZWFkeSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsInN0cmVhbSIsIk1FVEhPRF9HRVQiLCJNRVRIT0RfUE9TVCIsIkNPTlRFTlRfVFlQRV9KU09OIiwiQ09OVEVOVF9UWVBFX0ZPUk0iLCJzZXJpYWxpemUiLCJjb250ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJqb2luIiwiaGVhZGVyIiwiX3JlZiRtZXRob2QiLCJfcmVmJGRhdGFUeXBlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJhYm9ydGVkIiwiaGFzQ29udGVudFR5cGUiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiX3JlZjIiLCJvayIsInN0YXR1c1RleHQiLCJyZXQiLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJzdG9yYWdlIiwiVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFIiwiZ2V0U3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlU3RvcmFnZSIsIl9yZWYzIiwicmVtb3ZlSXRlbSIsImNsZWFyU3RvcmFnZSIsIl9yZWY0IiwiY2xpcGJvYXJkIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsImdldFN0cmluZyIsInNldENsaXBib2FyZERhdGEiLCJzZXRTdHJpbmciLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCIkb24iLCJ3YXJuIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJjdHgiLCJzbGljZSIsImZyZWV6ZSIsInd4IiwidXBsb2FkRmlsZSIsImRvd25sb2FkRmlsZSIsImNob29zZUltYWdlIiwicHJldmlld0ltYWdlIiwiZ2V0SW1hZ2VJbmZvIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImNob29zZVZpZGVvIiwic2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSIsInNhdmVGaWxlIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsImdldFNhdmVkRmlsZUluZm8iLCJyZW1vdmVTYXZlZEZpbGUiLCJvcGVuRG9jdW1lbnQiLCJnZXRTdG9yYWdlSW5mbyIsImNob29zZUxvY2F0aW9uIiwib3BlbkxvY2F0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIm1ha2VQaG9uZUNhbGwiLCJzY2FuQ29kZSIsInNldFNjcmVlbkJyaWdodG5lc3MiLCJnZXRTY3JlZW5CcmlnaHRuZXNzIiwic2V0S2VlcFNjcmVlbk9uIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiLCJhZGRQaG9uZUNvbnRhY3QiLCJzaG93VG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVUb2FzdCIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwic2hvd0FjdGlvblNoZWV0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic2V0TmF2aWdhdGlvbkJhckNvbG9yIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImdldFByb3ZpZGVyIiwibG9naW4iLCJnZXRVc2VySW5mbyIsInNoYXJlIiwicmVxdWVzdFBheW1lbnQiLCJzdWJzY3JpYmVQdXNoIiwidW5zdWJzY3JpYmVQdXNoIiwib25QdXNoIiwib2ZmUHVzaCIsImJhc2VVbmkiLCJvcyIsIm52dWUiLCJQcm94eSIsImdldCIsInRhcmdldCIsImNyZWF0ZVVuaSIsImdldFVuaSIsIldlZXhQbHVzIiwidGFiQmFycyIsInRhYkN1cnJlbnRJbmRleCIsIm1ldGhvZHMiLCJsb2FkVGFiYmFycyIsInRhYkxpc3QiLCJqc29uIiwiaXRlbSIsIm5ld3NMaXN0IiwibG9hZE1vcmVTdGF0dXMiLCJyZWZyZXNoaW5nIiwibG9hZE5ld3NMaXN0IiwidGFiSXRlbSIsImxpc3QiLCJhIiwiYiIsIiRyZWZzIiwibWl4UHVsbGRvd25SZWZyZXNoIiwiZW5kUHVsbGRvd25SZWZyZXNoIiwibmF2VG9EZXRhaWxzIiwiYXV0aG9yIiwidmlkZW9TcmMiLCJpbWFnZXMiLCJldmFMaXN0Iiwibmlja25hbWUiLCJ6YW4iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUEr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LEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvbnZ1ZS9udnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbnZ1ZS9udnVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL252dWUvbnZ1ZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOnt9LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfX0RBN0QwMDZcIn0iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkBGT05ULUZBQ0VcIjogW1xuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF84MTEyNDJfbWdudHpxMmo1aGIuZW90P3Q9MTU1MjI3MzM0NDgwNiNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgXFxyXFxuICB1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfODExMjQyX21nbnR6cTJqNWhiLndvZmY/dD0xNTUyMjczMzQ0ODA2JykgZm9ybWF0KCd3b2ZmJyksXFxyXFxuICB1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfODExMjQyX21nbnR6cTJqNWhiLnR0Zj90PTE1NTIyNzMzNDQ4MDYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIFxcclxcbiAgdXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzgxMTI0Ml9tZ250enEyajVoYi5zdmc/dD0xNTUyMjczMzQ0ODA2I2ljb25mb250JykgZm9ybWF0KCdzdmcnKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJ5dGljb25cIixcbiAgICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICAgIFwic3JjXCI6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEwNzg2MDRfM21yaGFjMm8zb2kudHRmJykgZm9ybWF0KCd0cnVldHlwZScpXCJcbiAgICB9XG4gIF0sXG4gIFwiaWNvbmZvbnRcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwiV2Via2l0Rm9udFNtb290aGluZ1wiOiBcImFudGlhbGlhc2VkXCIsXG4gICAgXCJNb3pPc3hGb250U21vb3RoaW5nXCI6IFwiZ3JheXNjYWxlXCIsXG4gICAgXCJsaW5lSGVpZ2h0OmJlZm9yZVwiOiAxLjVcbiAgfSxcbiAgXCJpY29uLWd1YW5namllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcHByZWNpYXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NVxcXCJcIlxuICB9LFxuICBcImljb24tY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVkaXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVtb2ppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mYXZvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1sb2FkaW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1sb2NhdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxvY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1waG9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRjaGVja2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kY2xvc2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZHJpZ2h0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YlxcXCJcIlxuICB9LFxuICBcImljb24tc2VhcmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10YXhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aW1lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZVxcXCJcIlxuICB9LFxuICBcImljb24tdGltZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZlxcXCJcIlxuICB9LFxuICBcImljb24tdW5mb2xkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YXJuZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MlxcXCJcIlxuICB9LFxuICBcImljb24td2FyblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2M1xcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NFxcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NlxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWVudFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZlxcXCJcIlxuICB9LFxuICBcImljb24tbGlrZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpa2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGlmaWNhdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGlmaWNhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2YlxcXCJcIlxuICB9LFxuICBcImljb24tb3JkZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNhbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zYW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kZWxpdmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjcxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ldmFsdWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MlxcXCJcIlxuICB9LFxuICBcImljb24tcGF5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjczXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhc2NhZGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kaXNjb3ZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3ZVxcXCJcIlxuICB9LFxuICBcImljb24tbGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4MlxcXCJcIlxuICB9LFxuICBcImljb24tbW9yZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4NFxcXCJcIlxuICB9LFxuICBcImljb24tc2NhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4OVxcXCJcIlxuICB9LFxuICBcImljb24tc2V0dGluZ3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXF1ZXN0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MFxcXCJcIlxuICB9LFxuICBcImljb24tcXVlc3Rpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3BmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YW5nZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5YVxcXCJcIlxuICB9LFxuICBcImljb24tcGljXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjliXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1maWx0ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvb3RwcmludFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZFxcXCJcIlxuICB9LFxuICBcImljb24tdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjllXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdWxsZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZlxcXCJcIlxuICB9LFxuICBcImljb24tcHVsbHVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhM1xcXCJcIlxuICB9LFxuICBcImljb24tcmVmcmVzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNFxcXCJcIlxuICB9LFxuICBcImljb24tbW9yZWFuZHJvaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRlbGV0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZnVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhY1xcXCJcIlxuICB9LFxuICBcImljb24tY2FydFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhZlxcXCJcIlxuICB9LFxuICBcImljb24tcXJjb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZW1pbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRlbGV0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiNFxcXCJcIlxuICB9LFxuICBcImljb24tcHJvZmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiN1xcXCJcIlxuICB9LFxuICBcImljb24taG9tZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiOFxcXCJcIlxuICB9LFxuICBcImljb24tY2FydGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRpc2NvdmVyZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiYVxcXCJcIlxuICB9LFxuICBcImljb24taG9tZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lc3NhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFkZHJlc3Nib29rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1sb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11bmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjM1xcXCJcIlxuICB9LFxuICBcImljb24td2VpYm9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFjdGl2aXR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iaWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZGFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZGFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjYVxcXCJcIlxuICB9LFxuICBcImljb24tZnJpZW5kZmFtb3VzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWxlY3Rpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRtYWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1leHBsb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wcmVzZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zcXVhcmVjaGVja2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNxdWFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNVxcXCJcIlxuICB9LFxuICBcImljb24tc3F1YXJlY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGlmaWNhdGlvbmZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV4cGxvcmVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb2xkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nYW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWRwYWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlbGVjdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNpbWlsYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFwcHJlY2lhdGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1pbmZvZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNFxcXCJcIlxuICB9LFxuICBcImljb24taW5mb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNVxcXCJcIlxuICB9LFxuICBcImljb24tdGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb2JpbGV0YW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcndhcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3J3YXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWNoYXJnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlY2hhcmdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12aXBjYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi12b2ljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZlxcXCJcIlxuICB9LFxuICBcImljb24tdm9pY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRmYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMVxcXCJcIlxuICB9LFxuICBcImljb24td2lmaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMlxcXCJcIlxuICB9LFxuICBcImljb24tc2hhcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNFxcXCJcIlxuICB9LFxuICBcImljb24td2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpZ2h0YXV0b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNlxcXCJcIlxuICB9LFxuICBcImljb24tbGlnaHRmb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpZ2h0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmOFxcXCJcIlxuICB9LFxuICBcImljb24tY2FtZXJhcm90YXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmYVxcXCJcIlxuICB9LFxuICBcImljb24tYmFyY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmYlxcXCJcIlxuICB9LFxuICBcImljb24tZmxhc2hsaWdodGNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mbGFzaGxpZ2h0b3BlblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZFxcXCJcIlxuICB9LFxuICBcImljb24tc2VhcmNobGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZVxcXCJcIlxuICB9LFxuICBcImljb24tc2VydmljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZlxcXCJcIlxuICB9LFxuICBcImljb24tc29ydFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwMFxcXCJcIlxuICB9LFxuICBcImljb24tMTIxMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwMlxcXCJcIlxuICB9LFxuICBcImljb24tZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwM1xcXCJcIlxuICB9LFxuICBcImljb24tbW9iaWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb2JpbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb3VudGRvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb3VudGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5vdGljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwYVxcXCJcIlxuICB9LFxuICBcImljb24tcWlhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVwc3RhZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi11cHN0YWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWJ5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMFxcXCJcIlxuICB9LFxuICBcImljb24tYmFieVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMVxcXCJcIlxuICB9LFxuICBcImljb24tYnJhbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1icmFuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxM1xcXCJcIlxuICB9LFxuICBcImljb24tY2hvaWNlbmVzc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNob2ljZW5lc3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNsb3RoZXNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jbG90aGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jcmVhdGl2ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNyZWF0aXZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mZW1hbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWtleWJvYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXB1bGxsZWZ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdWxscmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJhbmtmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yYW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNFxcXCJcIlxuICB9LFxuICBcImljb24tZm9jdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhbWVyYWFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWppYW56aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFwcHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBhaW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyYVxcXCJcIlxuICB9LFxuICBcImljb24tcGFpbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBpY2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlZnJlc2hhcnJvd1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyZFxcXCJcIlxuICB9LFxuICBcImljb24tbWFya2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1hcmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXByZXNlbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZXBlYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFsYnVtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wZW9wbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wZW9wbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlcnZpY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZXBhaXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlcGFpcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRhb3hpYW9wdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYlxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczY1xcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jb21tYW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZVxcXCJcIlxuICB9LFxuICBcImljb24tY29tbWFuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZlxcXCJcIlxuICB9LFxuICBcImljb24tY29tbXVuaXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MFxcXCJcIlxuICB9LFxuICBcImljb24tY29tbXVuaXR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWFkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1odWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWp1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYWxlbmRhclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0YVxcXCJcIlxuICB9LFxuICBcImljb24tY3V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYWdpY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0Y1xcXCJcIlxuICB9LFxuICBcImljb24tYmFja3dhcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wbGF5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0ZlxcXCJcIlxuICB9LFxuICBcImljb24tc3RvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MFxcXCJcIlxuICB9LFxuICBcImljb24tdGFnZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MVxcXCJcIlxuICB9LFxuICBcImljb24tdGFnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ncm91cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1M1xcXCJcIlxuICB9LFxuICBcImljb24tYWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iYWNrZGVsZXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob3RmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ob3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBvc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJhZGlvYm94XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzViXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1ZFxcXCJcIlxuICB9LFxuICBcImljb24td3JpdGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13cml0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MVxcXCJcIlxuICB9LFxuICBcImljb24tcmFkaW9ib3hmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wdW5jaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NFxcXCJcIlxuICB9LFxuICBcImljb24tc2hha2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFkZDFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vdmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNhZmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhhb2RpYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1hb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2ZVxcXCJcIlxuICB9LFxuICBcImljb24tcWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzcwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qdWh1YXN1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRhb3FpYW5nZ291XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzcyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi10aWFubWFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzczXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hY3Rpdml0eWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNyb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3NlxcXCJcIlxuICB9LFxuICBcImljb24tY3Jvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3OFxcXCJcIlxuICB9LFxuICBcImljb24tbWVzc2FnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXByb2ZpbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YlxcXCJcIlxuICB9LFxuICBcImljb24tc3BvbnNvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNwb25zb3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVwYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdlYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXdldW5ibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MFxcXCJcIlxuICB9LFxuICBcImljb24tMTExMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MlxcXCJcIlxuICB9LFxuICBcImljb24tbXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lbW9qaWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVtb2ppZmxhc2hmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mbGFzaGJ1eWZpbGwtY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZlxcXCJcIlxuICB9LFxuICBcImljb24tdGV4dFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5MVxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNmYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NFxcXCJcIlxuICB9LFxuICBcImljb24tbXVzaWNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tdXNpY2ZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpYW1pZm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWFtaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5OFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRsZWZ0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5OVxcXCJcIlxuICB9LFxuICBcImljb24tdHJpYW5nbGVkb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5YlxcXCJcIlxuICB9LFxuICBcImljb24tdHJpYW5nbGV1cGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kbGVmdGZpbGwtY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZVxcXCJcIlxuICB9LFxuICBcImljb24tcHVsbGRvd24xXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzlmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZWl4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWVtb2ppbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWtleWJvYXJkbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlY29yZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJlY29yZGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWNvcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kYWRkbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNvdW5kbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YThcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcmRib2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNhcmRib2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhYVxcXCJcIlxuICB9LFxuICBcImljb24tZm9ybWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRlbGVwaG9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyN1xcXCJcIlxuICB9LFxuICBcImljb24tY29pblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhY1xcXCJcIlxuICB9LFxuICBcImljb24tc29ydGxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJkYm9hcmRmb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNpcmNsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNpcmNsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMVxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uZm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25mb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hdHRlbnRpb25mYXZvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG9wbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZvaWNlbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWF0dGVudGlvbmZhdm9yZmlsbC1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mdWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wZW9wbGVsaXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc25ld2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzbmV3XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZWRhbGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lZGFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1uZXdzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjM1xcXCJcIlxuICB9LFxuICBcImljb24tbmV3c2hvdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3Nob3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpZGVvZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjN1xcXCJcIlxuICB9LFxuICBcImljb24tdmlkZW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFza2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFza1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjYVxcXCJcIlxuICB9LFxuICBcImljb24tZXhpdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjYlxcXCJcIlxuICB9LFxuICBcImljb24tc2tpbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNraW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vbmV5YmFnZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZVxcXCJcIlxuICB9LFxuICBcImljb24tdXNlZnVsbGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXVzZWZ1bGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vbmV5YmFnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yZWRwYWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkM1xcXCJcIlxuICB9LFxuICBcImljb24tc3Vic2NyaXB0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1teV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNVxcXCJcIlxuICB9LFxuICBcImljb24tY29tbXVuaXR5X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJ0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkOFxcXCJcIlxuICB9LFxuICBcImljb24taG9tZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYXJ0X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW11bml0eV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1teV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13ZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1za2luX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZWFyY2hfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNjYW5fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBlb3BsZV9saXN0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tZXNzYWdlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jbG9zZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlM1xcXCJcIlxuICB9LFxuICBcImljb24tYWRkX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wcm9maWxlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zZXJ2aWNlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRfYWRkX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1lZGl0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jYW1lcmFfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWhvdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlYVxcXCJcIlxuICB9LFxuICBcImljb24tcmVmcmVzaF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlYlxcXCJcIlxuICB9LFxuICBcImljb24tYmFja19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlY1xcXCJcIlxuICB9LFxuICBcImljb24tc2hhcmVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1lbnRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFwcHJlY2lhdGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZhdm9yX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcHByZWNpYXRlX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvbW1lbnRfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmMlxcXCJcIlxuICB9LFxuICBcImljb24td2FuZ19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmM1xcXCJcIlxuICB9LFxuICBcImljb24tbW9yZV9hbmRyb2lkX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mcmllbmRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1vcmVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdvb2RzX2Zhdm9yX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc19uZXdfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmOFxcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNfbmV3X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb29kc19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmYVxcXCJcIlxuICB9LFxuICBcImljb24tbWVkYWxfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmYlxcXCJcIlxuICB9LFxuICBcImljb24tbWVkYWxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmZFxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c19ob3RfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmZVxcXCJcIlxuICB9LFxuICBcImljb24tbmV3c19ob3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW5ld3NfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXZpZGVvX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW1lc3NhZ2VfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwMlxcXCJcIlxuICB9LFxuICBcImljb24tZm9ybV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwM1xcXCJcIlxuICB9LFxuICBcImljb24tdmlkZW9fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNlYXJjaF9saXN0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mb3JtX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdsb2JhbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwN1xcXCJcIlxuICB9LFxuICBcImljb24tZ2xvYmFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mYXZvcl9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODA5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kZWxldGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhY2tfYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwYlxcXCJcIlxuICB9LFxuICBcImljb24tYmFja19hbmRyb2lkX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1kb3duX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9jbG9zZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwZVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfY2xvc2VfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwZlxcXCJcIlxuICB9LFxuICBcImljb24tZXhwcmVzc21hblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxMFxcXCJcIlxuICB9LFxuICBcImljb24tcHVuY2hfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWV2YWx1YXRlX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZ1cm5pdHVyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxM1xcXCJcIlxuICB9LFxuICBcImljb24tZHJlc3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWNvZmZlZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxNVxcXCJcIlxuICB9LFxuICBcImljb24tc3BvcnRzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13eHpvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWdyb3VwX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1sb2NhdGlvbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxOFxcXCJcIlxuICB9LFxuICBcImljb24tYXR0ZW50aW9uX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ncm91cF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1ncm91cF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1wbGF5X2ZvcndhcmRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxY1xcXCJcIlxuICB9LFxuICBcImljb24ta2V0YW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zdWJzY3JpcHRpb25fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRlbGl2ZXJfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxZVxcXCJcIlxuICB9LFxuICBcImljb24tbm90aWNlX2ZvcmJpZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODFmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xcl9jb2RlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODIwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xcVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMlxcXCJcIlxuICB9LFxuICBcImljb24tY2hhdC1yaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzNVxcXCJcIlxuICB9LFxuICBcImljb24td2VuemlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNldHRpbmdzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODIxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qb2JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBpY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZvcm1fZmF2b3JfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2NvbW1lbnRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXF6b25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODRhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1tb2JhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWExYVxcXCJcIlxuICB9LFxuICBcImljb24tcGhvbmVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2Rvd25fbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWZyaWVuZF9zZXR0aW5nc19saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyN1xcXCJcIlxuICB9LFxuICBcImljb24tY2hhbmdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODI4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb2Rvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xpc3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1jaGF0LWxlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2ZyaWVuZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9jcm93bl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9saW5rX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xpZ2h0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2Zhdm9yX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX21lbnVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzMFxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfbG9jYXRpb25fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzMVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcGF5X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX2xpa2VfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzM1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcGVvcGxlX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3BheVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzNVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfcmFua19maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9yZWRwYWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzN1xcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfc2tpbl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODM4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF9yZWNvcmRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzOVxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfdGlja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3JlZHBhY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgzYlxcXCJcIlxuICB9LFxuICBcImljb24tcm91bmRfdGV4dF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF90aWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3RyYW5zZmVyX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4M2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN1YnRpdGxlX2Jsb2NrX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODNmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi13YXJuX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1yb3VuZF90cmFuc2ZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0MVxcXCJcIlxuICB9LFxuICBcImljb24tdmlwX2NvZGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXN1YnRpdGxlX3VuYmxvY2tfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXJvdW5kX3Nob3BfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0NFxcXCJcIlxuICB9LFxuICBcImljb24tb3Bwb3NlX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLW9wcG9zZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0NlxcXCJcIlxuICB9LFxuICBcImljb24tYm9va1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkMlxcXCJcIlxuICB9LFxuICBcImljb24tcmVxdWlyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIlxuICB9LFxuICBcImljb24tcGFzc3dvcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpdmluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTg0N1xcXCJcIlxuICB9LFxuICBcImljb24tZ29vZHNfaG90X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4NDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXRpY2tldF9tb25leV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODQ5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb3VwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1xdWFuemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ2XFxcIlwiXG4gIH0sXG4gIFwiX3BcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJfb2xcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJfdWxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJfbGlcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJfYVwiOiB7XG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIlxuICB9LFxuICBcImQtdXNlcmJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImQtdXNlcmJveC1oZWFkXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MFxuICB9LFxuICBcImQtdXNlcmJveC1uaWNrXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZC11c2VyYm94LWZvbGxvd3NcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwiZC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwiZC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE5LjJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiXG4gIH0sXG4gIFwiZC10b29sc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzU1NTU1NVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJkLWNvbnRlbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS41LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1hcmtldC1wcmljZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MjkyOTJcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCIsXG4gICAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwicm93LWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJyb3ctYm94LWhkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxOS4ycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcInJvdy1ib3gtbW9yZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXJcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNmEzXFxcIlwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcInBheWxpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwicGF5bGlzdC1pdGVtXCI6IHtcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0OHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDMxLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMlxuICB9LFxuICBcInBheWxpc3QtaXRlbS1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmY2NjAwXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2Y2MFwiXG4gIH0sXG4gIFwiZW1wdHlEYXRhXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0OHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcImtzbGlzdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwia3NsaXN0LWxhYmVsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTQuNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJrc2xpc3QtaXRlbVwiOiB7XG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjkuNnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjkuNnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJrc2xpc3QtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN0FGRlwiXG4gIH0sXG4gIFwiZml4ZWRBZGRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMjQwcnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjcuMnJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwOHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDI0MCw4NSw3NSwwLjgyKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZThcXFwiXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZVwiOiBcImJsb2NrXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJhbmltYXRlZC10b2dnbGVcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInRvZ2dsZVwiLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogMlxuICB9LFxuICBcImFuaW1hdGVkLWhpZGVcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcImhpZGVcIlxuICB9LFxuICBcImFuaW1hdGVkLXNob3dcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInNob3dcIlxuICB9LFxuICBcImFuaW1hdGVkLXNsaWRlSW5MZWZ0XCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZUluTGVmdFwiXG4gIH0sXG4gIFwiYW5pbWF0ZWQtc2xpZGVPdXRMZWZ0XCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZU91dExlZnRcIlxuICB9LFxuICBcImFuaW1hdGVkLXNsaWRlSW5SaWdodFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2xpZGVJblJpZ2h0XCJcbiAgfSxcbiAgXCJhbmltYXRlZC1zbGlkZU91dFJpZ2h0XCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzbGlkZU91dFJpZ2h0XCJcbiAgfSxcbiAgXCJhbmltYXRlZC1yb3RhdGVJblwiOiB7XG4gICAgXCJXZWJraXRBbmltYXRpb25OYW1lXCI6IFwicm90YXRlSW5cIixcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJyb3RhdGVJblwiXG4gIH0sXG4gIFwiYW5pbWF0ZWRcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uRHVyYXRpb25cIjogMSxcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDEsXG4gICAgXCJXZWJraXRBbmltYXRpb25GaWxsTW9kZVwiOiBcImJvdGhcIixcbiAgICBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IFwiYm90aFwiXG4gIH0sXG4gIFwiY29tbWVudC1oZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjIwQzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndpZHRoXCI6IFwiMjE2cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLWhlYWRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbS1uaWNrXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNC40cnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0tdG9vbHNcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDFcbiAgfSxcbiAgXCJjb21tZW50LWl0ZW0tYWRkclwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5Njk2OTZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiXG4gIH0sXG4gIFwiY29tbWVudC1pdGVtLXRpbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTY5Njk2XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIlxuICB9LFxuICBcImNvbW1lbnQtaXRlbS1jb250ZW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNSxcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcImNvbW1lbnQtZm9ybWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCJcbiAgfSxcbiAgXCJjb21tZW50LWlucHV0LWJ0blwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI3MnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI3MnJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjFcXFwiXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJwb3NpdGlvbjpiZWZvcmVcIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibGVmdDpiZWZvcmVcIjogXCItNDhycHhcIlxuICB9LFxuICBcImNvbW1lbnQtZm9ybWJveC1mb3JtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCJjb21tZW50LWZvcm1ib3gtdGV4dGFyZWFcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTkycnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJ3aWR0aFwiOiA5MCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiY29tbWVudC1mb3JtYm94LWJ0bnNcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiY29tbWVudC1mb3JtYm94LWJ0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTkycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTU1NTU1XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImlucHV0LWZsZXgtbGFiZWxcIjoge1xuICAgIFwid2lkdGhcIjogXCIxOTJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LXJlcXVpcmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDphZnRlclwiOiBcIi0yNHJweFwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCIyOC44cnB4XCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LXR4dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LXRleHRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC1zZWxlY3RcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiLFxuICAgIFwiV2Via2l0QXBwZWFyYW5jZVwiOiBcIm1lbnVsaXN0LWJ1dHRvblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCJcbiAgfSxcbiAgXCJpbnB1dC1mbGV4LW5vdGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjcuMnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaW5wdXQtZmxleC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiLTEycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ6SW5kZXhcIjogMlxuICB9LFxuICBcInRleHRhcmVhLWZsZXhcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcInRleHRhcmVhLWZsZXgtbGFiZWxcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiXG4gIH0sXG4gIFwidGV4dGFyZWEtZmxleC10ZXh0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQ4MHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInJhZGlvLWZsZXhcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInJhZGlvXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInJhZGlvTGlzdC1pdGVtXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjQzLjJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjcuMnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjNcXFwiXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJyYWRpb0xpc3QtaXRlbS1hY3RpdmVcIjoge1xuICAgIFwiZm9udEZhbWlseTpiZWZvcmU6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZTpiZWZvcmVcIjogXCI0My4ycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmU6YmVmb3JlXCI6IFwiNy4ycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1YlxcXCJcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiMwMDM0RkZcIlxuICB9LFxuICBcImNoZWNrYm94LWZsZXhcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoZWNrYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcIm51bWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogXCIyNDBycHhcIlxuICB9LFxuICBcIm51bWJveC1taW51c1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjcycnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQzLjJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibnVtYm94LXBsdXNcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwid2lkdGhcIjogXCI3MnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0My4ycnB4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIm51bWJveC1udW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwLFxuICAgIFwiYm9yZGVyTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwiYm94U2hhZG93XCI6IFwibm9uZVwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCJudW1ib3gtbWludXMtc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm51bWJveC1wbHVzLXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJudW1ib3gtbnVtLXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJzd2l0Y2gtZ3JvdXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE1My42cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiNC44cnB4IHNvbGlkICNkZGRcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ4cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJzd2l0Y2gtbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJ2aXNpYmlsaXR5XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCIsXG4gICAgXCJ0b3BcIjogXCItNC44cnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiLTQuOHJweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCIuXFxcIlwiLFxuICAgIFwid2lkdGg6YWZ0ZXJcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiNzJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiMwMDdCRkZcIixcbiAgICBcImJvcmRlclJhZGl1czphZnRlclwiOiBcIjQ4cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiMwMDdCRkZcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDphZnRlclwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0OmFmdGVyXCI6IFwiLTQuOHJweFwiXG4gIH0sXG4gIFwic3dpdGNoLXJpZ2h0XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInZpc2liaWxpdHlcIjogXCJoaWRkZW5cIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJ0b3BcIjogXCItNC44cnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiLTQuOHJweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNzJycHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXI6YmVmb3JlXCI6IFwiXFxcIi5cXFwiXCIsXG4gICAgXCJ3aWR0aDphZnRlcjpiZWZvcmVcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyOmJlZm9yZVwiOiBcIjcycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXI6YmVmb3JlXCI6IFwiIzAwN0JGRlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzOmFmdGVyOmJlZm9yZVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJjb2xvcjphZnRlcjpiZWZvcmVcIjogXCIjMDA3QkZGXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlcjpiZWZvcmVcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOmFmdGVyOmJlZm9yZVwiOiBcIjBycHhcIixcbiAgICBcImxlZnQ6YmVmb3JlXCI6IFwiLTQuOHJweFwiXG4gIH0sXG4gIFwic3dpdGNoLWFjdGl2ZVwiOiB7XG4gICAgXCJ2aXNpYmlsaXR5XCI6IFwidmlzaWJsZVwiXG4gIH0sXG4gIFwidXBpbWctYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidXBpbWctYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxNDRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNzYuOHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwidXBpbWctYnRuLWljb25cIjoge1xuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjOTY5Njk2XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCI1Ny42cnB4XCIsXG4gICAgXCJmb250V2VpZ2h0OmJlZm9yZVwiOiBcIjEwMFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGFcXFwiXCJcbiAgfSxcbiAgXCJ1cGltZy1saXN0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInVwaW1nLWl0ZW1cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcInVwaW1nLWRlbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIxXCIsXG4gICAgXCJyaWdodFwiOiBcIjFcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyXCI6IFwiZmxleFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uOmFmdGVyXCI6IFwiY29sdW1uXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjQ2XFxcIlwiLFxuICAgIFwid2lkdGg6YWZ0ZXJcIjogXCI0OHJweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiNDhycHhcIixcbiAgICBcImxpbmVIZWlnaHQ6YWZ0ZXJcIjogXCI0OHJweFwiLFxuICAgIFwidGV4dEFsaWduOmFmdGVyXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3I6YWZ0ZXJcIjogXCJwb2ludGVyXCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjI4LjhycHhcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFmdGVyXCI6IFwiI2UwZTBlMFwiLFxuICAgIFwib3BhY2l0eTphZnRlclwiOiAwLjZcbiAgfSxcbiAgXCJ1cGltZy1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiXG4gIH0sXG4gIFwiZy1oZC0xXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcImctaGQtMlwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTQuNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTQuNHJweFwiXG4gIH0sXG4gIFwiZy1oZC0zXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZy1zZWFyY2gtYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImctc2VhcmNoLWlucHV0XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJvcmRlclwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcImctc2VhcmNoLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjk2cnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNDMuMnJweFwiXG4gIH0sXG4gIFwiZy1vcmRlclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5Y1xcXCJcIixcbiAgICBcImxpbmVIZWlnaHQ6YmVmb3JlXCI6IDEsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU3OWJcXFwiXCIsXG4gICAgXCJsaW5lSGVpZ2h0OmFmdGVyXCI6IDEsXG4gICAgXCJtYXJnaW5Ub3A6YWZ0ZXJcIjogXCItMTYuOHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjZGRkZGRkXCJcbiAgfSxcbiAgXCJnLW9yZGVyLXVwXCI6IHtcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZjY2MDBcIlxuICB9LFxuICBcImctb3JkZXItZG93blwiOiB7XG4gICAgXCJjb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjZmY2NjAwXCJcbiAgfSxcbiAgXCJnLW9yZGVyLWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjZmY2NjAwXCJcbiAgfSxcbiAgXCJyb3ctaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImRpc3BsYXk6YWZ0ZXJcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNmEzXFxcIlwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjOTk5OTk5XCJcbiAgfSxcbiAgXCJyb3ctaXRlbS10ZXh0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImN1cnNvclwiOiBcImluaXRpYWxcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwicm93LWl0ZW0taWNvblwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjcuMnJweFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0My4ycnB4XCJcbiAgfSxcbiAgXCJyb3ctaXRlbS10aXRsZVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcImZsZXhsaXN0LWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJmbGV4bGlzdC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwiZmxleGxpc3QtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMjMyMzJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJmbGV4bGlzdC1rc1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCItNy4ycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZjY2MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJmbGV4bGlzdC1kZXNjXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTY5Njk2XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZmxleGxpc3Qtcm93XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwibXRsaXN0LWl0ZW0tYmRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1wZFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtaW1nYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMnJweFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiXG4gIH0sXG4gIFwibXRsaXN0LWltZ1wiOiB7XG4gICAgXCJtYXhXaWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1tb25leVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1tb25leS1mbGV4XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2VkNmQ1M1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1tb25leV9tb25leVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDFcbiAgfSxcbiAgXCJtdGxpc3QtaXRlbS1tb25leV9udW1cIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcIm10bGlzdC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm10bGlzdC1kZXNjXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwic2dsaXN0LWl0ZW1cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcInNnbGlzdC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtdGl0bGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJzZ2xpc3QtaW1nbGlzdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJzZ2xpc3QtaW1nbGlzdC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcInNnbGlzdC1kZXNjXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwic2dsaXN0LXVzZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwic2dsaXN0LW5pY2tcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcInNnbGlzdC11aGVhZFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwid2lkdGhcIjogXCI5NnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwic2dsaXN0LWZ0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNC40cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNC40cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTQuNHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNC40cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIlxuICB9LFxuICBcInNnbGlzdC1mdC1sb3ZlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiOS42cnB4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OVxcXCJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiMXB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInNnbGlzdC1mdC1jbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlOmJlZm9yZVwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImRpc3BsYXk6YmVmb3JlOmJlZm9yZVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlOmJlZm9yZVwiOiBcIjkuNnJweFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY3XFxcIlwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIxcHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic2dsaXN0LWZ0LXZpZXdcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZTpiZWZvcmU6YmVmb3JlXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZGlzcGxheTpiZWZvcmU6YmVmb3JlOmJlZm9yZVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlOmJlZm9yZTpiZWZvcmVcIjogXCI5LjZycHhcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZTpiZWZvcmU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTlcXFwiXCJcbiAgfSxcbiAgXCJmbGV4LXRhYmxlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxOS4ycnB4XCJcbiAgfSxcbiAgXCJmbGV4LXRhYmxlLWxhYmVsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIjE5MnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcImZsZXgtdGFibGUtYm94XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0LjhycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjQ2NDY0XCJcbiAgfSxcbiAgXCJsb2FkTW9yZVwiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcIm0tbmF2UGljXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwibS1uYXZQaWMtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyNSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjM2cnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCJcbiAgfSxcbiAgXCJtLW5hdlBpYy1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMVxuICB9LFxuICBcIm0tbmF2UGljLWljb25cIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNzJycHhcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNlZDZkNTNcIlxuICB9LFxuICBcIm0tbmF2UGljLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzIzMjMyXCJcbiAgfSxcbiAgXCJhbGVydC1tYXNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcIm9wYWNpdHlcIjogMC4yLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTk4XG4gIH0sXG4gIFwiY29uZmlybS1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiLFxuICAgIFwiekluZGV4XCI6IDk5OVxuICB9LFxuICBcImFsZXJ0LWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5XG4gIH0sXG4gIFwiYWxlcnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDUwLFxuICAgIFwid2lkdGhcIjogXCI2MjRycHhcIixcbiAgICBcImxlZnRcIjogNTAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiLTMxMnJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTI0MHJweFwiLFxuICAgIFwiekluZGV4XCI6IDk5OTksXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwiYWxlcnQtYmRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYWxlcnQtYWN0aXZlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJhbGVydC1oZWFkZXJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmFmYWZhXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImFsZXJ0LW1zZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDhycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDhycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJhbGVydC1jbG9zZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJ0b3BcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYWxlcnQtZnRcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmFmYWZhXCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImFsZXJ0LWZ0LWJ0blwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhbGVydC1mdC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwiYWxlcnQtZnQtZmFpbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdhZmZcIlxuICB9LFxuICBcInRvYXN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjI0MHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwiekluZGV4XCI6IDk5OTksXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNDgwcnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFFMUUxRVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcInRvYXN0LWFjdGl2ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwidG9hc3Qtc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjdBRTYwXCJcbiAgfSxcbiAgXCJ0b2FzdC1lcnJvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQzAzOTJCXCJcbiAgfSxcbiAgXCJ0b2FzdC1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMUM0MEZcIlxuICB9LFxuICBcIm1vZGFsLWdyb3VwXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgfSxcbiAgXCJtb2RhbC1tYXNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcIm9wYWNpdHlcIjogMC4yLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogOTk4XG4gIH0sXG4gIFwibW9kYWxcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwibGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJ0b3BcIjogNTAsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCItNDU2cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDhycHhcIixcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJtb2RhbC1oZWFkZXJcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEyMHJweFwiXG4gIH0sXG4gIFwibW9kYWwtdGl0bGVcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJtb2RhbC1jbG9zZVwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJtb2RhbC1ib2R5XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM2cnB4XCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCI3NjhycHhcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcImF1dG9cIlxuICB9LFxuICBcImhlYWRlci1yb3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTA1LjZycHhcIixcbiAgICBcImNsZWFyXCI6IFwiYm90aFwiLFxuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcImhlYWRlci1yb3ctc2hvd1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDUuNnJweFwiLFxuICAgIFwiY2xlYXJcIjogXCJib3RoXCJcbiAgfSxcbiAgXCJoZWFkZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmN2Y3ZjdcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi44cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuOHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiekluZGV4XCI6IDk5OCxcbiAgICBcImJveFNoYWRvd1wiOiBcIjAgMXB4IDE0LjRycHggI2NjY1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTA1LjZycHhcIlxuICB9LFxuICBcImhlYWRlci1zaG93XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjdmN2Y3XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTYuOHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2LjhycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInpJbmRleFwiOiA5OTgsXG4gICAgXCJib3hTaGFkb3dcIjogXCIwIDFweCAxNC40cnB4ICNjY2NcIixcbiAgICBcImhlaWdodFwiOiBcIjEwNS42cnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItbG9nb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItc2VhcmNoLWJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiaGVhZGVyLXNlYXJjaC1pY29uXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiaWNvbmZvbnRcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogXCIxMnJweFwiLFxuICAgIFwidG9wXCI6IFwiMHJweFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ3aWR0aFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLXNlYXJjaFwiOiB7XG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI4MS42cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODEuNnJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNkZGRcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjEycnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiAwLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNjIuNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWZhZmFcIlxuICB9LFxuICBcImhlYWRlci1zZWFyY2gtYnRuXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgxLjZycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MS42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQuOHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMCxcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyOC44cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyOC44cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZTBlMGUwXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImhlYWRlci1iYWNrXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImZvbnRGYW1pbHk6YWZ0ZXJcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiLFxuICAgIFwid2lkdGg6YWZ0ZXJcIjogXCI3MnJweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiNzJycHhcIixcbiAgICBcImxpbmVIZWlnaHQ6YWZ0ZXJcIjogXCI3MnJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnQ6YWZ0ZXJcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZGlzcGxheTphZnRlclwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItYmFjay1maXhlZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwidG9wXCI6IFwiMTJycHhcIixcbiAgICBcIndpZHRoXCI6IFwiOTZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY3OVxcXCJcIlxuICB9LFxuICBcImhlYWRlci10aXRsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjcycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI3MnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLXJpZ2h0XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJoZWFkZXItcmlnaHQtYnRuXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYyLjRycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRycHhcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjOTY5Njk2XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiaGVhZGVyLWZpeHRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInpJbmRleFwiOiA5OTkwXG4gIH0sXG4gIFwiaGVhZGVyLWZpeHRvcC1pY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjQzLjJycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMTA1LjZycHhcIixcbiAgICBcImxpbmVIZWlnaHQ6YmVmb3JlXCI6IFwiMTA1LjZycHhcIlxuICB9LFxuICBcImZvb3Rlci1yb3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcnB4XCJcbiAgfSxcbiAgXCJmb290ZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwiekluZGV4XCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWZhZmFcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmb290ZXItaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcImNvbG9yXCI6IFwiIzkyOTI5MlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2LjhycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNi44cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS40LFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcnB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcIlxcXCJpY29uZm9udFxcXCJcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjM4LjRycHhcIixcbiAgICBcImZvbnRTdHlsZTpiZWZvcmVcIjogXCJub3JtYWxcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmc6YmVmb3JlXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmc6YmVmb3JlXCI6IFwiZ3JheXNjYWxlXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjOTI5MjkyXCIsXG4gICAgXCJsaW5lSGVpZ2h0OmJlZm9yZVwiOiAxLFxuICAgIFwibWFyZ2luQm90dG9tOmJlZm9yZVwiOiBcIjFcIlxuICB9LFxuICBcImZvb3Rlci1pdGVtLW51bVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MjkyOTJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJ0b3BcIjogXCI5LjZycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjM4LjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM4LjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjguOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM4LjRycHhcIlxuICB9LFxuICBcImZvb3Rlci1hZGRcIjoge1xuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNmRhXFxcIlwiLFxuICAgIFwiZm9udFNpemU6YWZ0ZXJcIjogXCI0My4ycnB4XCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ3aWR0aDphZnRlclwiOiBcIjg2LjRycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjg2LjRycHhcIixcbiAgICBcImxpbmVIZWlnaHQ6YWZ0ZXJcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJ0b3A6YWZ0ZXJcIjogXCItMzguNHJweFwiLFxuICAgIFwibGVmdDphZnRlclwiOiA1MCxcbiAgICBcIm1hcmdpbkxlZnQ6YWZ0ZXJcIjogXCItNDMuMnJweFwiLFxuICAgIFwiekluZGV4OmFmdGVyXCI6IDk5LFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFmdGVyXCI6IFwiI2QzZDNkM1wiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJib3JkZXJSYWRpdXM6YWZ0ZXJcIjogNTAsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJhXFxcIlwiLFxuICAgIFwidmlzaWJpbGl0eTpiZWZvcmVcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcImZvb3Rlci1hY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJmb290ZXJCb3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwiekluZGV4XCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYWZhZmFcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjFweCBzb2xpZCAjZWVlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmb290ZXJGaXhcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwibGVmdFwiOiBcIjBycHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwiekluZGV4XCI6IDEwMFxuICB9LFxuICBcInRhYnMtYm9yZGVyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg2LjRycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInRhYnMtYm9yZGVyLWl0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlci1pdGVtLWlubmVyXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDhycHhcIlxuICB9LFxuICBcInRhYnMtYm9yZGVyLWFjdGl2ZVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2Y2MFwiXG4gIH0sXG4gIFwidGFicy1ib3JkZXItYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ0YWJzLWJvcmRlci1ib3gtYWN0aXZlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ0YWJzLXRvZ2dsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJ0YWJzLXRvZ2dsZS1oZFwiOiB7XG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZjBmMGYwXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2NjFcXFwiXCIsXG4gICAgXCJjb2xvcjphZnRlclwiOiBcIiM2NDY0NjRcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiMzMuNnJweFwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogXCIxXCJcbiAgfSxcbiAgXCJ0YWJzLXRvZ2dsZS1oZC1hY3RpdmVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZmFmYWZhXCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNmRlXFxcIlwiXG4gIH0sXG4gIFwidGFicy10b2dnbGUtYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcInRhYnMtdG9nZ2xlLWFjdGl2ZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LXNlY3Rpb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0XCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDg4Q0NcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzZycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzNnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtbGFiZWxcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNy4ycnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NDY0NjRcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtdDN1cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDAsXG4gICAgXCJib3JkZXJMZWZ0XCI6IFwiOS42cnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjkuNnJweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMTQuNHJweCBzb2xpZCAjMzIzMjMyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC10M2Rvd25cIjoge1xuICAgIFwid2lkdGhcIjogMCxcbiAgICBcImhlaWdodFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiYm9yZGVyTGVmdFwiOiBcIjkuNnJweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCI5LjZycHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjE0LjRycHggc29saWQgIzMyMzIzMlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI3LjJycHhcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjFcIixcbiAgICBcImhlaWdodFwiOiBcIjM4LjRycHhcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIjY2NjXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIFwiYm9yZGVyTGVmdFwiOiBcIjBycHhcIixcbiAgICBcImJvcmRlclJpZ2h0XCI6IFwiMHJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMTIwcnB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHJweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWNhdGJveFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gtaXRlbVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJmb250U2l6ZVwiOiAwLjksXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjcuMnJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjY2NcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94MVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y5ZjlmOVwiLFxuICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveC1wZFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJ0YWItc2VsZWN0LWJveDFpdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjk2cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiOTZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI3LjJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94MWl0ZW0tYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFBQjlBQ1wiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1ib3gyaXRlbVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI5NnJweFwiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcInRhYi1zZWxlY3QtYm94Mml0ZW0tYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzIzOUVGN1wiXG4gIH0sXG4gIFwidGFiLXNlbGVjdC1zaG93XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0sXG4gIFwicmF0eS1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwicmF0eS1sYWJlbFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJyYXR5LXJvd1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MC44cnB4XCJcbiAgfSxcbiAgXCJyYXR5LWl0ZW1cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwicmF0eS1ub1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjQwLjhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwLjhycHhcIixcbiAgICBcImJhY2tncm91bmRSZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcInVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJ3QUFBQWJDQVlBQUFCdkNPOHNBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQWRCSlJFRlVTSW05MXJ0ckZGRVV3T0Z2azFWSjhFV0svQUdDUVFVZkdCVUNpdmhFTjY2cGZLR05WU3hFYk5QWTJGaFkybWlWUmh0dExDeE1vYkFnYUNGWXBGQXNSQXUxc2ZDQkQ4UkhjV2R4TXN6TTd0eDFjNXFaYzg0OTgrT2VPZWZjVzJ1MVdpTGtNQjdnUjlYQWdSZ2F6dUJRVEdBOUltWXdnZFZ3dDJwd3pBNTNZZ1JOREM4R3NKazhsNk94R01ESjFQdkpmZ1BYWWwxS2IyQkZQNEZITS9xUWZ5bnVDM0F5eDFZcHJWV0FxNFFLemNwQnJPNzJJM1ZNWVNKbEc4VEtISDBVUzNLK3NReFA4RGw1SDg3RXRXVXBwdXVZd3o2Y0Y1bzVSc1k2K0ovakdPWUg4QTBYaE9ueExoSllKamV4SGZNcy9JZHoySWc3L3duMEhkUEMzUDNTTm1hTDVvT3c5YlA0MUFQc3BWQVhON0tPb2lxZHhSWThpb0RkeGpZOHkzT1d0Y1VyN01iVkNyQlpIRmVTblU1OStFdEljN2V5dnRPQ2Joci9TQVhnRHF6cEJUaHE0VkRvSkRVaHBkSEFSc0dhdDdoZkVIT3FGK0JVanUwaHhvV0wxRGw4emZnM1lVTU1jQWo3VS9vZlhNWUJ2RS8wNjlpS3A1bllFekhBdmNJMWdsQ3BUVndTS2pjdEw0VC9mQVcvRTF2aGtWVUdiQisyajRWZDNDdForeE16MklQWHdqQWZyd0tzQ2Uxd1RXaitOeVd3dExTd0diY1VwTFhvWGpxR2k4S1lxaW9mY1JxNzhweC9BUzRFUlVWOE8rWERBQUFBQUVsRlRrU3VRbUNDKVwiXG4gIH0sXG4gIFwicmF0eS15ZXNcIjoge1xuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCI0MC44cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MC44cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCd0FBQUFiQ0FZQUFBQnZDTzhzQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUF4MUpSRUZVU0ltMWxVOUlGRkVjeDM5dlp2YnR6T3lZcnEyc29yc2lJWkZRVWlGYW1WbFVsQlZrUkptcG9LY3VkWWdPV1FRRjBhbExYYm9FQzFxRWx4S0M4RlNpVVZFUUlmM0RFbk4zZFZ0ZDNkSnQzSjE1ODE2SHNOeDExSjJOL1ozbWZYKy83Ky96SHZQK0lQWVFMRWRJYkx5aWMzbTN2S3B2MXFwWHNJNERrSXl4RGdBbUFjQWxxMTdPcXNFdnQyT0ZmQ21WREgrelZXOUdRSUhObmhIWUhNb2hINzErdWQyVmRhRGRDTGNDQVBBc2pqQ2R2cGgxb01NWTNiVHdMUm4rcHF3Q2cxTHpQdEVZeHd2akhQS3BPQ0MzRm1VTmlPbmsyU1F6UzRDTlJpOW5EU2diZ2RxbDJ0anhyQUFEY3B2SFFVYWNxYnBDUHJzRGNsdHB1bjNReEpPak56Q2QyZjFQWWp3SHVwSTBacHJNczErS1FvYnp6SnJFK1NLTmdrZ1E2QnpIZEI0QUFBRkZISnZuLzRLQW9DbjczanVDempsdjJ1bGtRNzcyc2hLQXBUdlJwQkNORUFZQXZGdyt6aGRyRVZ4N3NtUytweGN0M0tVVFltT25TK3Uvam1uVThsRlpLWDdZdG42YnMxWFVlTlR1TUFBQVdueDUrK1cyOGx4OTZHbXUvcTdrZjBFVVlaakNlKzY1RTMydGkzVms5bHFFeFVOM1hZbG5IVHhUVVNhd09GK2tUK082MXVMNW5wN1VuQ2tRQUNBb25hNXo2cThmTzhpWE5WWmdQMjJiZzdPMmpUVWV0V3ZjTEw4c0VPRFB5K0FnWDUrdjFRYXIwb0ZGYlZWZm5mcWI4cFZxVnR3Z1h0V25VV1NmU1FjR0FJRFpkT0ZxTmF2dVNOa1kyNVl1MEVGR2xhQjBhbGZHd0lEVVV1RWdJeGIrSVFNN25lck1HSWhaOUR3QVhhSnJuTk9ZRXlvaVpoNkZER2UrUXRFSU5LUnFNV0Y5TkN3ZTNoTEYxZTZ3L2NCOWlzU2t2R1Q0eGFEVWRNUXkwQyszNXl0a2VORW1RQkN4MXcvTzRPMkZIclY3eUt2NnFEdlIxekloTmg1VStUSTFhYUkwZk1FeTBFWi9uT05aSEFFQUVMU0doY1NqMTF5Si9qcXY2dE1XMTVYTVAraUwyT3NMSXJqdTFVSTdoWHl1c1F3VWFlZ0VBTUF2WVYzc3UzaDRlMUg4MGRYbGFyMnFUM1ZwQTlzbXBHUG5OSzZBaUVZSWowc25XOHhxVFErK1gyN25DdU85V2t6WThDRW1yTi9oVlgyeDVXQ3BFWkRiUERuNit3RURPU2JYYW9QVnFYblRGWElzdm44Rzc3eWRyNzJvdEFJREFQQ29YWUU4L1cxWmduZDNtZVYvQXg5Qk1MSkhqczlwQUFBQUFFbEZUa1N1UW1DQylcIlxuICB9LFxuICBcInJhdHkteWVzLWhhbGZcIjoge1xuICAgIFwiYmFja2dyb3VuZFNpemU6YmVmb3JlXCI6IDEwMCxcbiAgICBcIndpZHRoOmJlZm9yZVwiOiBcIjQwLjhycHhcIixcbiAgICBcImhlaWdodDpiZWZvcmVcIjogXCI0MC44cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0OmJlZm9yZVwiOiBcIm5vLXJlcGVhdFwiLFxuICAgIFwiY3Vyc29yOmJlZm9yZVwiOiBcInBvaW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTkuMnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAuOHJweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcImJhY2tncm91bmRJbWFnZTpiZWZvcmVcIjogXCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCd0FBQUFiQ0FZQUFBQnZDTzhzQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUF4MUpSRUZVU0ltMWxVOUlGRkVjeDM5dlp2YnR6T3lZcnEyc29yc2lJWkZRVWlGYW1WbFVsQlZrUkptcG9LY3VkWWdPV1FRRjBhbExYYm9FQzFxRWx4S0M4RlNpVVZFUUlmM0RFbk4zZFZ0ZDNkSnQzSjE1ODE2SHNOeDExSjJOL1ozbWZYKy83Ky96SHZQK0lQWVFMRWRJYkx5aWMzbTN2S3B2MXFwWHNJNERrSXl4RGdBbUFjQWxxMTdPcXNFdnQyT0ZmQ21WREgrelZXOUdRSUhObmhIWUhNb2hINzErdWQyVmRhRGRDTGNDQVBBc2pqQ2R2cGgxb01NWTNiVHdMUm4rcHF3Q2cxTHpQdEVZeHd2akhQS3BPQ0MzRm1VTmlPbmsyU1F6UzRDTlJpOW5EU2diZ2RxbDJ0anhyQUFEY3B2SFFVYWNxYnBDUHJzRGNsdHB1bjNReEpPak56Q2QyZjFQWWp3SHVwSTBacHJNczErS1FvYnp6SnJFK1NLTmdrZ1E2QnpIZEI0QUFBRkZISnZuLzRLQW9DbjczanVDempsdjJ1bGtRNzcyc2hLQXBUdlJwQkNORUFZQXZGdyt6aGRyRVZ4N3NtUytweGN0M0tVVFltT25TK3Uvam1uVThsRlpLWDdZdG42YnMxWFVlTlR1TUFBQVdueDUrK1cyOGx4OTZHbXUvcTdrZjBFVVlaakNlKzY1RTMydGkzVms5bHFFeFVOM1hZbG5IVHhUVVNhd09GK2tUK082MXVMNW5wN1VuQ2tRQUNBb25hNXo2cThmTzhpWE5WWmdQMjJiZzdPMmpUVWV0V3ZjTEw4c0VPRFB5K0FnWDUrdjFRYXIwb0ZGYlZWZm5mcWI4cFZxVnR3Z1h0V25VV1NmU1FjR0FJRFpkT0ZxTmF2dVNOa1kyNVl1MEVGR2xhQjBhbGZHd0lEVVV1RWdJeGIrSVFNN25lck1HSWhaOUR3QVhhSnJuTk9ZRXlvaVpoNkZER2UrUXRFSU5LUnFNV0Y5TkN3ZTNoTEYxZTZ3L2NCOWlzU2t2R1Q0eGFEVWRNUXkwQyszNXl0a2VORW1RQkN4MXcvTzRPMkZIclY3eUt2NnFEdlIxekloTmg1VStUSTFhYUkwZk1FeTBFWi9uT05aSEFFQUVMU0doY1NqMTF5Si9qcXY2dE1XMTVYTVAraUwyT3NMSXJqdTFVSTdoWHl1c1F3VWFlZ0VBTUF2WVYzc3UzaDRlMUg4MGRYbGFyMnFUM1ZwQTlzbXBHUG5OSzZBaUVZSWowc25XOHhxVFErK1gyN25DdU85V2t6WThDRW1yTi9oVlgyeDVXQ3BFWkRiUERuNit3RURPU2JYYW9QVnFYblRGWElzdm44Rzc3eWRyNzJvdEFJREFQQ29YWUU4L1cxWmduZDNtZVYvQXg5Qk1MSkhqczlwQUFBQUFFbEZUa1N1UW1DQylcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIi5cXFwiXCIsXG4gICAgXCJjb2xvcjpiZWZvcmVcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZVwiOiBcImJsb2NrXCJcbiAgfSxcbiAgXCJidG5cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE5LjJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0OHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxXG4gIH0sXG4gIFwiYnRuLXNtYWxsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxOS4ycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyOC44cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTkuMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyOC44cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG4tbWluaVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOS42cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI5LjZycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI5LjZycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOS42cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4LjhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJycHhcIlxuICB9LFxuICBcImJ0bi1pY29uXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJkaXNwbGF5OmJlZm9yZVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYnRuLXJvdy1zdWJtaXRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDhycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQ4cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyOC44cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjguOHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzguNHJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTQuNHJweFwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJ3aWR0aFwiOiA5NlxuICB9LFxuICBcImJ0bi1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImJ0bi1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJidG4tc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJidG4tc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyOGE3NDVcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYnRuLWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTdhMmI4XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJ0bi13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzIxMjUyOVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmYzEwN1wiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RjMzU0NVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJidG4tbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJ0bi1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM0M2E0MFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJidG4tZGlzYWJsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzAwN2JmZlwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICM2Yzc1N2RcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMjhhNzQ1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJub25lXCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgIzI4YTc0NVwiXG4gIH0sXG4gIFwiYnRuLW91dGxpbmUtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMTdhMmI4XCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmYzEwN1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNmZmMxMDdcIlxuICB9LFxuICBcImJ0bi1vdXRsaW5lLWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkYzM1NDVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGMzNTQ1XCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmOGY5ZmFcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcIm5vbmVcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZjhmOWZhXCJcbiAgfSxcbiAgXCJidG4tb3V0bGluZS1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzM0M2E0MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibm9uZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMzNDNhNDBcIlxuICB9LFxuICBcImJ0bi1saW5rXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYm9yZGVyXCI6IDBcbiAgfSxcbiAgXCJidG4tcm91bmRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNDRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjE0NHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmNjYwMFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNTAsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiNTcuNnJweFwiXG4gIH0sXG4gIFwiYnRuLWxvdmVcIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2FhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJmb250RmFtaWx5OmJlZm9yZVwiOiBcImljb25mb250XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OVxcXCJcIixcbiAgICBcImZvbnRTaXplOmJlZm9yZVwiOiBcIjMzLjZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0OmJlZm9yZVwiOiBcIjcuMnJweFwiXG4gIH0sXG4gIFwiYnRuLWxvdmUtYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmMzMwMFwiLFxuICAgIFwiY29sb3I6YmVmb3JlXCI6IFwiI2ZmMzMwMFwiXG4gIH0sXG4gIFwiYnRuLWZhdlwiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICNhYWFcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRGYW1pbHk6YmVmb3JlXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRjXFxcIlwiLFxuICAgIFwiZm9udFNpemU6YmVmb3JlXCI6IFwiMzMuNnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6YmVmb3JlXCI6IFwiNy4ycnB4XCJcbiAgfSxcbiAgXCJidG4tZmF2LWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjMzMDBcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZjMzMDBcIlxuICB9LFxuICBcImJ0bi1mYXYtc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjIuNHJweFwiXG4gIH0sXG4gIFwiYnRuLWxvdmUtc21hbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjIuNHJweFwiXG4gIH0sXG4gIFwiYnRuLXNoYXJlXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMXB4IHNvbGlkICMwMEJDRDRcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwQkNENFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzMuNnJweFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWRcXFwiXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI3LjJycHhcIlxuICB9LFxuICBcImJ0bi1jb21tZW50XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMzLjZycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2FhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHJweFwiLFxuICAgIFwiZm9udEZhbWlseTpiZWZvcmVcIjogXCJpY29uZm9udFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWVcXFwiXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDpiZWZvcmVcIjogXCI3LjJycHhcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImJ0bi1jb21tZW50LWFjdGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjMzMDBcIixcbiAgICBcImNvbG9yOmJlZm9yZVwiOiBcIiNmZjMzMDBcIlxuICB9LFxuICBcImJ0bi1jb21tZW50LXNtYWxsXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjYyLjRycHhcIlxuICB9LFxuICBcImJ0bi1idXlcIjoge1xuICAgIFwid2lkdGhcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4Ni40cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODYuNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG4tYnV5LXNtYWxsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNjBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjMDA3YmZmXCIsXG4gICAgXCJmb250U2l6ZTpiZWZvcmVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJwb2ludGVyXCI6IHtcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcIm5vbmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICB9LFxuICBcInllc1wiOiB7XG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJkaXNwbGF5OmFmdGVyXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcImZvbnRTaXplOmFmdGVyXCI6IFwiMzguNHJweFwiLFxuICAgIFwiY29sb3I6YWZ0ZXJcIjogXCIjMTVhYmE1XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiXFxcIlxcXFxlNjQ1XFxcIlwiXG4gIH0sXG4gIFwibm9cIjoge1xuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZGlzcGxheTphZnRlcjphZnRlclwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwiZm9udEZhbWlseTphZnRlcjphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJmb250U2l6ZTphZnRlcjphZnRlclwiOiBcIjM4LjRycHhcIixcbiAgICBcImNvbG9yOmFmdGVyOmFmdGVyXCI6IFwiIzE1YWJhNVwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwiZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2xcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJmbGV4LWFpLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcImZsZXgtYWktc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImZsZXgtYWktZW5kXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiZmxleC1haS1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZmxleC1qYy1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImZsZXgtamMtZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImZsZXgtamMtY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmbGV4LWpjLWJldHR3ZW5cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJmbGV4LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgXCJmbG9hdFwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJmbFwiOiB7XG4gICAgXCJmbG9hdFwiOiBcImxlZnRcIlxuICB9LFxuICBcImNsZWFyZml4XCI6IHtcbiAgICBcImNsZWFyXCI6IFwiYm90aFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDEwMFxuICB9LFxuICBcInRleHQtcmlnaHRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcInRleHQtY2VudGVyXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGV4dC1sZWZ0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIlxuICB9LFxuICBcInBvcy1maXhlZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCJwb3MtYWJzXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvcy1yZWxhdGl2ZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ3aC0zMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcycnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MnJweFwiXG4gIH0sXG4gIFwid2gtNDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI5NnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTZycHhcIlxuICB9LFxuICBcIndoLTYwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIlxuICB9LFxuICBcIndoLTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI0MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjQwcnB4XCJcbiAgfSxcbiAgXCJ3aC0xNTBcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNjBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM2MHJweFwiXG4gIH0sXG4gIFwid2gtMjAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDgwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0ODBycHhcIlxuICB9LFxuICBcIndtYXhcIjoge1xuICAgIFwibWF4V2lkdGhcIjogMTAwXG4gIH0sXG4gIFwidzYwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTQ0cnB4XCJcbiAgfSxcbiAgXCJ3MTAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjQwcnB4XCJcbiAgfSxcbiAgXCJ3MTUwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzYwcnB4XCJcbiAgfSxcbiAgXCJoMzBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJycHhcIlxuICB9LFxuICBcImg2MFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNDRycHhcIlxuICB9LFxuICBcImgxMDBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjQwcnB4XCJcbiAgfSxcbiAgXCJoMTYwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjM4NHJweFwiXG4gIH0sXG4gIFwiaDIwMFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI0ODBycHhcIlxuICB9LFxuICBcImYzNlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjg2LjRycHhcIlxuICB9LFxuICBcImYyOFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjY3LjJycHhcIlxuICB9LFxuICBcImYyMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjUyLjhycHhcIlxuICB9LFxuICBcImYyMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJmMThcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0My4ycnB4XCJcbiAgfSxcbiAgXCJmMTZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzOC40cnB4XCJcbiAgfSxcbiAgXCJmMTRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy42cnB4XCJcbiAgfSxcbiAgXCJmMTJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOC44cnB4XCJcbiAgfSxcbiAgXCJmdy02MDBcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH0sXG4gIFwiY2wxXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMyMzIzMlwiXG4gIH0sXG4gIFwiY2wyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY0NjQ2NFwiXG4gIH0sXG4gIFwiY2wzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk2OTY5NlwiXG4gIH0sXG4gIFwiY2wtZjMwXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmMzMwMFwiXG4gIH0sXG4gIFwiY2wtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2MxMjcyNVwiXG4gIH0sXG4gIFwiY2wtcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImNsLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImNsLXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJjbC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJjbC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiY2wtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImNsLWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiY2wtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImNsLW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiY2wtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjbC1tb25leVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRjY2MDBcIlxuICB9LFxuICBcImNsLW51bVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZjc3MDBcIlxuICB9LFxuICBcImJnLWVmXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZmVmZWZcIlxuICB9LFxuICBcImJnLWZmZlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1mMzBcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmMzMwMFwiXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYmctd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJiZy1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJnLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJnLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctdHJhbnNwYXJlbnRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiYmctcm95YWxcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzhhNmRlOVwiXG4gIH0sXG4gIFwiYmctZGlzYWJsZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZCRkJGQlwiXG4gIH0sXG4gIFwicGQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInBkbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcInBkci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJwZHQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIlxuICB9LFxuICBcInBkYi01XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwicGQtMTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJwZGwtMTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwicGRyLTEwXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJwZHQtMTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJwZGItMTBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJwZGItMzBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjcycnB4XCJcbiAgfSxcbiAgXCJwZHQtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiXG4gIH0sXG4gIFwibWctNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwibWdiLTVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1ndC01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJtZ2wtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1nci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1nLTEwXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI0cnB4XCJcbiAgfSxcbiAgXCJtZ2ItMTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1ndC0xMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWdsLTEwXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwibWdyLTEwXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjRycHhcIlxuICB9LFxuICBcIm1nci0yMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQ4cnB4XCJcbiAgfSxcbiAgXCJtZ2ItMjBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDhycHhcIlxuICB9LFxuICBcIm1nbC0yMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDhycHhcIlxuICB9LFxuICBcIm1ndC0yMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwibWdiLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHJweFwiXG4gIH0sXG4gIFwiYmQtbXAtNVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2VlZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiYmQtbXAtMTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNlZWVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjRycHhcIlxuICB9LFxuICBcImJkLW1wLTBcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcImJkXCI6IHtcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGVlMmU2XCJcbiAgfSxcbiAgXCJiZHRcIjoge1xuICAgIFwiYm9yZGVyVG9wXCI6IFwiMXB4IHNvbGlkICNkZWUyZTZcIlxuICB9LFxuICBcImJkclwiOiB7XG4gICAgXCJib3JkZXJSaWdodFwiOiBcIjFweCBzb2xpZCAjZGVlMmU2XCJcbiAgfSxcbiAgXCJiZGJcIjoge1xuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNkZWUyZTZcIlxuICB9LFxuICBcImJkbFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0XCI6IFwiMXB4IHNvbGlkICNkZWUyZTZcIlxuICB9LFxuICBcImJkLTBcIjoge1xuICAgIFwiYm9yZGVyXCI6IDBcbiAgfSxcbiAgXCJiZHQtMFwiOiB7XG4gICAgXCJib3JkZXJUb3BcIjogMFxuICB9LFxuICBcImJkci0wXCI6IHtcbiAgICBcImJvcmRlclJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJiZGItMFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogMFxuICB9LFxuICBcImJkbC0wXCI6IHtcbiAgICBcImJvcmRlckxlZnRcIjogMFxuICB9LFxuICBcImJkLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZC1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZC1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYmQtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJkLXdhcm5pbmdcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJiZC1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZC1saWdodFwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJkLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZC13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJkLXJhZGl1cy01XCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycnB4XCJcbiAgfSxcbiAgXCJiZC1yYWRpdXMtMTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRycHhcIlxuICB9LFxuICBcImJkLXJhZGl1cy0yMFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0OHJweFwiXG4gIH0sXG4gIFwiYmQtcmFkaXVzLTUwXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1MFxuICB9LFxuICBcImZpeEZvb3RcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwXG4gIH0sXG4gIFwiZml4Rm9vdC1yb3dcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODBcIlxuICB9LFxuICBcImNoYXRib3hcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJjaGF0Ym94LW5pY2stYVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcImNoYXRib3gtbmljay1iXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJjaGF0Ym94LWRlc2MtYVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmb250RmFtaWx5OmFmdGVyXCI6IFwiaWNvbmZvbnRcIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2VmZWZlZlwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIlxcXCJcXFxcZTYwMVxcXCJcIixcbiAgICBcImxlZnQ6YWZ0ZXJcIjogXCItNlwiLFxuICAgIFwidG9wOmFmdGVyXCI6IFwiM1wiXG4gIH0sXG4gIFwiY2hhdGJveC1kZXNjLWJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlcjphZnRlclwiOiBcImljb25mb250XCIsXG4gICAgXCJwb3NpdGlvbjphZnRlcjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb2xvcjphZnRlcjphZnRlclwiOiBcIiNlZmVmZWZcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCJcXFwiXFxcXGU2MzVcXFwiXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiBcIi02XCIsXG4gICAgXCJ0b3A6YWZ0ZXJcIjogXCIxMFwiXG4gIH0sXG4gIFwiaW1nTGlzdFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgIFwicmlnaHRcIjogXCIwXCIsXG4gICAgXCJ0b3BcIjogXCI0NFwiLFxuICAgIFwiYm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcImltZ0xpc3QtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMy4zMyxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwiaW1nTGlzdC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwiaW1FbW9cIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG4gIH0sXG4gIFwiaW1FbW8tMFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiMFwiXG4gIH0sXG4gIFwiaW1FbW8tMVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTMwXCJcbiAgfSxcbiAgXCJpbUVtby0yXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNjBcIlxuICB9LFxuICBcImltRW1vLTNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi05MFwiXG4gIH0sXG4gIFwiaW1FbW8tNFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEyMFwiXG4gIH0sXG4gIFwiaW1FbW8tNVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTE1MFwiXG4gIH0sXG4gIFwiaW1FbW8tNlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTE4MFwiXG4gIH0sXG4gIFwiaW1FbW8tN1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTIxMFwiXG4gIH0sXG4gIFwiaW1FbW8tOFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTI0MFwiXG4gIH0sXG4gIFwiaW1FbW8tOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTI3MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0zMDBcIlxuICB9LFxuICBcImltRW1vLTExXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMzMwXCJcbiAgfSxcbiAgXCJpbUVtby0xMlwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTM2MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0zOTBcIlxuICB9LFxuICBcImltRW1vLTE0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNDIwXCJcbiAgfSxcbiAgXCJpbUVtby0xNVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTQ1MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi00ODBcIlxuICB9LFxuICBcImltRW1vLTE3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNTEwXCJcbiAgfSxcbiAgXCJpbUVtby0xOFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTU0MFwiXG4gIH0sXG4gIFwiaW1FbW8tMTlcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi01NzBcIlxuICB9LFxuICBcImltRW1vLTIwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNjAwXCJcbiAgfSxcbiAgXCJpbUVtby0yMVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTYzMFwiXG4gIH0sXG4gIFwiaW1FbW8tMjJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi02NjBcIlxuICB9LFxuICBcImltRW1vLTIzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNjkwXCJcbiAgfSxcbiAgXCJpbUVtby0yNFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTcyMFwiXG4gIH0sXG4gIFwiaW1FbW8tMjVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi03NTBcIlxuICB9LFxuICBcImltRW1vLTI2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItNzgwXCJcbiAgfSxcbiAgXCJpbUVtby0yN1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTgxMFwiXG4gIH0sXG4gIFwiaW1FbW8tMjhcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi04NDBcIlxuICB9LFxuICBcImltRW1vLTI5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItODcwXCJcbiAgfSxcbiAgXCJpbUVtby0zMFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTkwMFwiXG4gIH0sXG4gIFwiaW1FbW8tMzFcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi05MzBcIlxuICB9LFxuICBcImltRW1vLTMyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItOTYwXCJcbiAgfSxcbiAgXCJpbUVtby0zM1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTk5MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMDIwXCJcbiAgfSxcbiAgXCJpbUVtby0zNVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEwNTBcIlxuICB9LFxuICBcImltRW1vLTM2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTA4MFwiXG4gIH0sXG4gIFwiaW1FbW8tMzdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMTEwXCJcbiAgfSxcbiAgXCJpbUVtby0zOFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTExNDBcIlxuICB9LFxuICBcImltRW1vLTM5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTE3MFwiXG4gIH0sXG4gIFwiaW1FbW8tNDBcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMjAwXCJcbiAgfSxcbiAgXCJpbUVtby00MVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEyMzBcIlxuICB9LFxuICBcImltRW1vLTQyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTI2MFwiXG4gIH0sXG4gIFwiaW1FbW8tNDNcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMjkwXCJcbiAgfSxcbiAgXCJpbUVtby00NFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTEzMjBcIlxuICB9LFxuICBcImltRW1vLTQ1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvbllcIjogXCItMTM1MFwiXG4gIH0sXG4gIFwiaW1FbW8tNDZcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybChzdGF0aWMvZW1vLmdpZikgbm8tcmVwZWF0XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiAxMDAsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uWVwiOiBcIi0xMzgwXCJcbiAgfSxcbiAgXCJpbUVtby00N1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKHN0YXRpYy9lbW8uZ2lmKSBuby1yZXBlYXRcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IDEwMCxcbiAgICBcIndpZHRoXCI6IFwiMzBcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25ZXCI6IFwiLTE0MTBcIlxuICB9LFxuICBcImltRW1vLTQ4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTQ5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTUwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTUxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTUyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTUzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTU5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTYwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTYxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTYyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTYzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTY5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTcwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTcxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTcyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTczXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTc5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTgwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTgxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTgyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTgzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTg5XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTkwXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTkxXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTkyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTkzXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTk0XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTk1XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTk2XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTk3XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImltRW1vLTk4XCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoc3RhdGljL2Vtby5naWYpIG5vLXJlcGVhdFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogMTAwLFxuICAgIFwid2lkdGhcIjogXCIzMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcImN1cnNvclwiOiBcInBvaW50ZXJcIlxuICB9LFxuICBcImVtb0ZpeGJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiNVwiLFxuICAgIFwicmlnaHRcIjogXCI1XCIsXG4gICAgXCJib3R0b21cIjogXCIxMDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclwiOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgXCJXZWJraXRCb3JkZXJSYWRpdXNcIjogXCIyMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBcIixcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJ1bmktdGFiYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1waWNrZXItdmlldy13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1zd2lwZXItZG90c1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ5dGljb25cIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcIlxcXCJ5dGljb25cXFwiXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmdcIjogXCJhbnRpYWxpYXNlZFwiLFxuICAgIFwiTW96T3N4Rm9udFNtb290aGluZ1wiOiBcImdyYXlzY2FsZVwiXG4gIH0sXG4gIFwiaWNvbi1odWlmdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4YlxcXCJcIlxuICB9LFxuICBcImljb24tZGlhbnphbi1hc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWljb25mb250c2hhbmNodTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWljb25mb250d2VpeGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGFuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNFxcXCJcIlxuICB9LFxuICBcImljb24tc2hvdXllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjI2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGFuY2h1NFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyMlxcXCJcIlxuICB9LFxuICBcImljb24teGlhb3hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qaWFudG91ci1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1mZW54aWFuZzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXBpbmdqaWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWRhaWZ1a3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4ZlxcXCJcIlxuICB9LFxuICBcImljb24tcGluZ2x1bi1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG91Y2FuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NVxcXCJcIlxuICB9LFxuICBcImljb24teHVhbnpob25nMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyZlxcXCJcIlxuICB9LFxuICBcImljb24taWNvbi10ZXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1iaWFuamlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXp1b3NoYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1qaWEyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zb3VzdW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2VcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWFycm93LWZpbmUtdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWxpc2hpamlsdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiOVxcXCJcIlxuICB9LFxuICBcImljb24teGlhdHViaWFvLS1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaG91Y2FuZ194dWFuemhvbmd6aHVhbmd0YWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWppYTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uLWJhbmd6aHUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcnJvdy1sZWZ0LWJvdHRvbVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMlxcXCJcIlxuICB9LFxuICBcImljb24tYXJyb3ctcmlnaHQtYm90dG9tXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1hcnJvdy1sZWZ0LXRvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNFxcXCJcIlxuICB9LFxuICBcImljb24taWNvbi0tXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16dW9qaWFudG91LXVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi14aWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLS1qaWFuaGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1Hcm91cC1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODhcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXlvdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNlxcXCJcIlxuICB9LFxuICBcImljb24tdHVpamlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMFxcXCJcIlxuICB9LFxuICBcImljb24tYmFuZ3podVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3OVxcXCJcIlxuICB9LFxuICBcImljb24tc2hlemhpMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxZFxcXCJcIlxuICB9LFxuICBcImljb24tZm9ya1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxYlxcXCJcIlxuICB9LFxuICBcImljb24taUxpbmthcHAtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zYW9taWFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1zaGV6aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3Vob3V0dWlrdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjMxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi1nb3V3dWNoZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwOVxcXCJcIlxuICB9LFxuICBcImljb24tZGl6aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXhpbmd4aW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16dWFuc2hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbi16dW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2M2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uLXNob3VjYW5nMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyZVxcXCJcIlxuICB9LFxuICBcImljb24teWlzaG91aHVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFhXFxcIlwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL252dWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNTNhODVmZiZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9udnVlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYzBhNTFhNWNcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlhcHAveW91cXUtd2ViL3BhZ2VzL252dWUvbnZ1ZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9udnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjUzYTg1ZmYmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29udGVudFwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZS1oZWFkZXJcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdHlsZTogeyBoZWlnaHQ6IF92bS5zdGF0dXNCYXJIZWlnaHQgfSB9KSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2UtaGVhZGVyLXdyYXBwZXJcIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlLWhlYWRlci1sZWZ0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJsb2dvXCIsIFwieXRpY29uXCJdIH0sIFtfdm0uX3YoXCLumJVcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZS1oZWFkZXItY2VudGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2gtaW5wdXRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6L6T5YWl5YWz6ZSu5a2X5pCc57SiXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGFnZS1oZWFkZXItcmlnaHRcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY29udHJpYnV0ZS1pY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQzIwbEVRVlJvUSsxWTdWRVZRUkRzamtBelVDTlFJZ0FqVUNOUUloQWpFQ05RSWhBalFDSVFNc0FJeEF3Z2dyYWEycVhPNDNidmR1K0xlblZieFEvcTdlNU56L1RNOUN5eEk0czdnZ01ia01jV3lTMGlXMFJtOHNCR3Jaa2NXMzN0cUloSWVnN2dJNEJYSFJaY0FUZ2hlVjF0WGNIQmFpQ1NiUHd2QUU4ejM3c0I4SnFrUWMyNnFvQklzdkYvQW9oYkFGMkdHdWdUQUk3SUhrbURtbTBWQXdrZ0hJbElwM2NrZjdZdERCRzdDR0N1U083TmhnSW9seWlTdmdQNEVJejZSUEpieWtCSjN1ZjlYcWNrRCtjQ2s0MklKQ2Z5RVFBbmRYdjlJQmtCSmUyVGRBemc4MGdBcHE0ZGNaSzZKd2xFMGxzQVo0bUQ1eVQ5KzZBbDZSVEErMEdiODVzNmFld2pPU0RtL1JzQXZ3RTBjK0NDcExsZnRFTE9IUFJVdWRTZFByY1BJT25BSEJBYjY4TmZTSm9lcTYwR1BTOUpHdFNEdFFGWk1qeFRSY1FOclMwei9MOUxiN0xKaFp4d2pzVis0OHBqamhkMythbUFwSngvU05MVjZMOFY5SmQ3UnllWEFUajNmSGF3QmhzTHhKNTBrbmRwS1J0eDFJNUloLzVxeXBjb1dReThTSU9OQWxLVEE1Sk1tNWNBRE9DNDNmVWx1YmwrRFhjUGxpMkxBbW5Ka1dUamFqWGFUbnAyMERXcWcvTHlXeHFSUmpTU0g0dDNTb285cW5ldnp5d2RFUVZEczBJeUdIWlBNWks5Q253MEVFbjdKQytIUkVkU0JPSkJLaXRoSkxtaWVSVEE3RUFhUW0rUVJKSGtTdVJCcW5kL3c4TzNKSE1UNXAwUFIwV2tnc2RSWkY2VGZKR0xvaVNYNzJjQVNrZUI4bVN2QUhKUGw5d1ExWkwwdlRSY1BDTGhnODI1dzNuaXhMK1RKS0ZadW9mRWpqOG9HbXNCTWQ4Tnhob3J0ODQ5TGc5OWtGZzBSNXBXaCtib0p1WThhSzYvb2VNLzBHZzlPVlhmRUV0enBNdVFRS2RZbFc1cWxPOHExQnJTYjJyMnJFYXRHbU1mTmJXbUFqUTJJckdVdW1NWFQzVlRnUWozK0YzTmY4bVNuWHQ4OENBVW56d250cXZxT3M4NEI2bUMwZmZTYUMvNE5URTF0bFpaVkhISUR2VkxZM0k4N3BYUUZSOWQ1Y2dHWkJXM1p6NjZSV1NMeUV3ZTJLZzFrMk9ycjkyWmlQd0RlQXljUXN3ektCQUFBQUFBU1VWT1JLNUNZSUk9XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJjb250cmlidXRlLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmipXnqL9cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ1bmktdGFiLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkcmFnOiB0cnVlLFxuICAgICAgICAgICAgICB0YWJCYXJzOiBfdm0udGFiQmFycyxcbiAgICAgICAgICAgICAgdGFiSW5kZXg6IF92bS50YWJDdXJyZW50SW5kZXhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YWJDaGFuZ2U6IF92bS50YWJDaGFuZ2UgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1LXNsaWRlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic2xpZGVyXCJdLFxuICAgICAgICAgICAgICBhdHRyczogeyBpbmRleDogX3ZtLnRhYkN1cnJlbnRJbmRleCwgaW5maW5pdGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnRhYkNoYW5nZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJCYXJzLCBmdW5jdGlvbih0YWJJdGVtLCB0YWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiB0YWJJbmRleCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsaXN0LWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBsb2FkbW9yZTogX3ZtLmxvYWRNb3JlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJlZnJlc2hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsb2FkaW5nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc3BsYXk6IHRhYkl0ZW0ucmVmcmVzaGluZyA/IFwic2hvd1wiIDogXCJoaWRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyByZWZyZXNoOiBfdm0ub25SZWZyZXNoIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIHRhYkl0ZW0ucmVmcmVzaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxvYWRpbmctaW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibG9hZGluZy1pY29uXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxvYWRpbmctdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJdGVtLnJlZnJlc2hpbmcgPyBcIuato+WcqOWKoOi9vS4uXCIgOiBcIuS4i+aLieWIt+aWsOaVsOaNrlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKHRhYkl0ZW0ubmV3c0xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm5ld3MtaXRlbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmF2VG9EZXRhaWxzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiBbXCJ0aXRsZVwiLCBcInRpdGxlXCIgKyBpdGVtLnR5cGVdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1nLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZy1saXN0XCIgKyBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMubGVuZ3RoID09PSAxICYmIGl0ZW0udHlwZSA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImltZy1saXN0LXNpbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmltYWdlcywgZnVuY3Rpb24oaW1nSXRlbSwgaW1nSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbWdJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1nLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWctd3JhcHBlclwiICsgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImltZy13cmFwcGVyLXNpbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGltZ0l0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInZpZGVvLXRpcFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ2aWRlby10aXAtaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUVDMGxFUVZSb1ErMmFqVkVWTVJESGR6dXdBNkFDcFFLeEFyRUN0UUt4QXFFQ29RS2hBcUVDb1FLeEFxRURyV0NkbjdOeDh2SnkrYnAzVDRZaE0yK084UzdKL3JPNy8vMklLbzlrNkNQQklVOUFjcG8wczEwUmVTa2lQQThtdEgwdEluY2ljcU9xUERjeVptdkVoWDhySXU4Y1FJOWd0eUp5S1NJWGMwRU5BM0VBbnh4QWovQlQzNTZMeUVkVi9UV3lXRGNRTTNzbUlnQTRtdGp3WGtRNGFYNE1uZ2ozUWtTWXk1UGZUbWIrbGFvZUxnN0V6QkRnYThhRUVCNFRPVmZWQUtBb2oyc1VjK1FYUUMwUHhNelk4RXNpM1c4Uk9WYlYwNUZUREhQTURDMUFFQnpFY3FZMUFlTE1RUXh0WEFOdVp2ak1hL2NiL2k2T3FvOWtRS0NGSTFXdExsN2JmT3E5bVVIZDMvdzlORDFGNWYrV0tBSnhuL2dlYlFpSWcxWS9tQUVFVXNEWDhKMHpWWjBpbGpvUVp5ZEFZTHVNcllDSXdYT1FyWWMycVJFenc0RS9SQXUvWDlLY1JyVVg1bVdCT0RYK2pCWS9VZFhqdVp1TnpuZDVQbnNjZXBOanRpa2dPREpwUnpDcDNWRmFIQlUrTVRFT2tTRE1JSjBoRkt5TU5TQVpiWkEyTk1VSm43dWpxamViQUJEV3lERG5YcHFiNVlERXZuR3Zxc0haaTdJNUNNZ0J4aUhEeFJ4NWJtU1lHWmx5eUFEV21Dd0hCTjhJd2pkUkg1SW0zQitFbjVVSUp1WUZCZU1uakZ0VjNZL2Zyd0RKbU5WK0svMU5BR0V2SXYrcHFwN01VVTFHdGhYelNvSEUrVlN6V1JVMEVzdU9hVURodythV21OZEtPRWlCeE96UWxZa1dOSklxQWlBSTBWMGRtaGtaTnZrWFl5VWtwRURZaEZKMTdjT2FXWFFBQ1V0eGFQaGdjOUpwWnZGQnIrUmcveE5JOEIrMHcwbFhSMExEelVDSW9FMGJOUHBJU2RDMXVKRDd1SlFWbHpUeUVJRlFnRkdoTXBvMTBwVmZEZmdJd2xBaVU5czBhZjRoK2dnbEFSa0U4V1VSWjk4Ry9WNjVGaGFsM3pnZzNxbnFYcFZLL0lNRzAvcmhBT1lFeERoOUtnWkVjcXk0RHRsRWlyS3BUZ3V0cUxqc25rNVJuRWFMV2VhVWhpWTBzckZPUzFLeHJxVlB0VFMrMmJ5OHhzZHNua09OTk41RzBwRENRY1ZtdGNhb0xZVlZWNjNlMHpEbzhMKzBPVmd2ck55ODRsSVhlbVJpTTAyMkN0anluV3NhYlZDd01kcEtYUWVTT2xaWGNHd1JzUFdiSkFneUxadk9QT2gyVUtaV242eFlTMERpYmwvSVZGKzFWb3l0SjE1d2JxeUN0bWt3S2RJWkduWlpFKzl0bWJMSTRtQzhWUnVEQUc4eHBvMDBzUUZEaTJpUkpyYWJVMmpHQllWVm1iTUt4SjAvZHpmU1hlR1Z6TTNaaVJadDJ0R3NnbURkSmlBRk1HaUhOUHhpamsrWUdWMU5zdUhnRDgyYUNCODJBNGxvbWRvaHZmOGpyUW0zczYxWGJ6Z3pBTUp0Vlh3V09QWmhEN0YwQVhFd25CcnFqenYxc1JDQUNuZnAvSHZJZHNObFRiaURuK3BnRHVWbjNVQ0N4TjR3QTFCb2RzK3hycjhSMjYveXV1dVVMaDhwOEQwblN6c1RFOGxkT1pjQWh0dGdLc1VoQUVNK1VqdHkxeEltMVBKZk9LN25DaC9MTTJ4YU5WRGJmdjhFWk5zblh0dnZEeXJtRjFGSUJLSXdBQUFBQUVsRlRrU3VRbUNDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJpbWctZW1wdHlcIl0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBbXCJib3RcIiwgXCJib3RcIiArIGl0ZW0udHlwZV0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJhdXRob3JcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5hdXRob3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGltZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRpbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxvYWQtbW9yZS13cmFwcGVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWl4LWxvYWQtbW9yZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdGF0dXM6IHRhYkl0ZW0ubG9hZE1vcmVTdGF0dXMgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PCEtLSBcclxuXHRcdFx0d2VleOe7hOS7tuaWh+aho1xyXG5cdFx0XHRodHRwczovL3dlZXguYXBhY2hlLm9yZy96aC9kb2NzL2NvbXBvbmVudHMvc2xpZGVyLmh0bWxcclxuXHRcdC0tPiBcclxuXHRcdFxyXG5cdFx0PCEtLSDmoIfpopjmoI8gLS0+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuXHRcdFx0PCEtLSDnirbmgIHmoI/ljaDkvY0gLS0+XHJcblx0XHRcdDxkaXYgOnN0eWxlPVwieyBoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCB9XCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci13cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWxlZnRcIj5cclxuXHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJsb2dvXCI+TG9nbzwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvZ28geXRpY29uXCI+JiN4ZTYxNTs8L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIj7ovpPlhaXlhbPplK7lrZfmkJzntKI8L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJjb250cmlidXRlLWljb25cIiBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFDMjBsRVFWUm9RKzFZN1ZFVlFSRHNqa0F6VUNOUUlnQWpVQ05RSWhBakVDTlFJaEFqUUNJUU1zQUl4QXdnZ3JhYTJxWE80M2J2ZHUrTGVuVmJ4US9xN2U1TnovVE05Q3l4STRzN2dnTWJrTWNXeVMwaVcwUm04c0JHclprY1czM3RxSWhJZWc3Z0k0QlhIUlpjQVRnaGVWMXRYY0hCYWlDU2JQd3ZBRTh6MzdzQjhKcWtRYzI2cW9CSXN2Ri9Bb2hiQUYyR0d1Z1RBSTdJSGttRG1tMFZBd2tnSElsSXAzY2tmN1l0REJHN0NHQ3VTTzdOaGdJb2x5aVN2Z1A0RUl6NlJQSmJ5a0JKM3VmOVhxY2tEK2NDazQySUpDZnlFUUFuZFh2OUlCa0JKZTJUZEF6ZzgwZ0FwcTRkY1pLNkp3bEUwbHNBWjRtRDV5VDkrNkFsNlJUQSswR2I4NXM2YWV3ak9TRG0vUnNBdndFMGMrQ0NwTGxmdEVMT0hQUlV1ZFNkUHJjUElPbkFIQkFiNjhOZlNKb2VxNjBHUFM5Skd0U0R0UUZaTWp4VFJjUU5yUzB6L0w5TGI3TEpoWnh3anNWKzQ4cGpqaGQzK2FtQXBKeC9TTkxWNkw4VjlKZDdSeWVYQVRqM2ZIYXdCaHNMeEo1MGtuZHBLUnR4MUk1SWgvNXF5cGNvV1F5OFNJT05BbEtUQTVKTW01Y0FET0M0M2ZVbHVibCtEWGNQbGkyTEFtbkprV1RqYWpYYVRucDIwRFdxZy9MeVd4cVJSalNTSDR0M1NvbzlxbmV2enl3ZEVRVkRzMEl5R0haUE1aSzlDbncwRUVuN0pDK0hSRWRTQk9KQktpdGhKTG1pZVJUQTdFQWFRbStRUkpIa1N1UkJxbmQvdzhPM0pITVQ1cDBQUjBXa2dzZFJaRjZUZkpHTG9pU1g3MmNBU2tlQjhtU3ZBSEpQbDl3UTFaTDB2VFJjUENMaGc4MjV3M25peEwrVEpLRlp1b2ZFamo4b0dtc0JNZDhOeGhvcnQ4NDlMZzk5a0ZnMFI1cFdoK2JvSnVZOGFLNi9vZU0vMEdnOU9WWGZFRXR6cE11UVFLZFlsVzVxbE84cTFCclNiMnIyckVhdEdtTWZOYldtQWpRMklyR1V1bU1YVDNWVGdRajMrRjNOZjhtU25YdDg4Q0FVbnp3bnRxdnFPczg0QjZtQzBmZlNhQy80TlRFMXRsWlpWSEhJRHZWTFkzSTg3cFhRRlI5ZDVjZ0daQlczWno2NlJXU0x5RXdlMktnMWsyT3JyOTJaaVB3RGVBeWNRc3d6S0JBQUFBQUFTVVZPUks1Q1lJST1cIiAvPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250cmlidXRlLXRleHRcIj7mipXnqL88L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0PCEtLSB1bmkg5a6Y5pa56aG26YOo6YCJ6aG55Y2h57uE5Lu2IC0tPlxyXG5cdFx0PHVuaS10YWItYmFyIDpkcmFnPVwidHJ1ZVwiIDp0YWItYmFycz1cInRhYkJhcnNcIiA6dGFiLWluZGV4PVwidGFiQ3VycmVudEluZGV4XCIgQHRhYkNoYW5nZT1cInRhYkNoYW5nZVwiPjwvdW5pLXRhYi1iYXI+XHJcblx0XHRcclxuXHRcdDwhLS0gc2xpZGVy5bCx5pivdW5pIHN3aXBlciAtLT5cclxuXHRcdDxzbGlkZXIgY2xhc3M9XCJzbGlkZXJcIiA6aW5kZXg9XCJ0YWJDdXJyZW50SW5kZXhcIiA6aW5maW5pdGU9XCJmYWxzZVwiIEBjaGFuZ2U9XCJ0YWJDaGFuZ2VcIj5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS0gbGlzdCDlnoLnm7Tmu5rliqjliJfooajnu4Tku7YgLS0+XHJcblx0XHRcdDxsaXN0IHYtZm9yPVwiKHRhYkl0ZW0sIHRhYkluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cInRhYkluZGV4XCIgY2xhc3M9XCJsaXN0LWNvbnRlbnRcIiBAbG9hZG1vcmU9XCJsb2FkTW9yZVwiPlxyXG5cdFx0XHRcdDwhLS0gcmVmcmVzaCDkuIvmi4nliLfmlrDnu4Tku7YgIFxyXG5cdFx0XHRcdCogXHQgd2VleCDnmoRyZWZyZXNo5ZKMbG9hZGluZ+e7hOS7tuWcqGlvc+aViOaenOW+iOWlve+8jOS9huaYr+WcqOWuieWNk+err+aViOaenOW5tuS4jeWlvVxyXG5cdFx0XHRcdCogLS0+XHJcblx0XHRcdFx0PHJlZnJlc2ggY2xhc3M9XCJsb2FkaW5nXCIgQHJlZnJlc2g9XCJvblJlZnJlc2hcIiA6ZGlzcGxheT1cInRhYkl0ZW0ucmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxyXG5cdFx0XHRcdFx0PGxvYWRpbmctaW5kaWNhdG9yIHYtaWY9XCJ0YWJJdGVtLnJlZnJlc2hpbmdcIiBjbGFzcz1cImxvYWRpbmctaWNvblwiPjwvbG9hZGluZy1pbmRpY2F0b3I+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvYWRpbmctdGV4dFwiPnt7dGFiSXRlbS5yZWZyZXNoaW5nPyfmraPlnKjliqDovb0uLic6ICfkuIvmi4nliLfmlrDmlbDmja4nfX08L3RleHQ+XHJcblx0XHRcdFx0PC9yZWZyZXNoPlxyXG5cdFx0XHRcdDwhLS0g5paw6Ze75YiX6KGoIC0tPlxyXG5cdFx0XHRcdDxjZWxsIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB0YWJJdGVtLm5ld3NMaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJuZXdzLWl0ZW1cIiBAY2xpY2s9XCJuYXZUb0RldGFpbHMoaXRlbSlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cIlsndGl0bGUnLCAndGl0bGUnK2l0ZW0udHlwZV1cIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cIml0ZW0uaW1hZ2VzLmxlbmd0aCA+IDBcIiA6Y2xhc3M9XCJbJ2ltZy1saXN0JywgJ2ltZy1saXN0JytpdGVtLnR5cGUsIGl0ZW0uaW1hZ2VzLmxlbmd0aCA9PT0gMSAmJiBpdGVtLnR5cGU9PT0zID8gJ2ltZy1saXN0LXNpbmdsZSc6ICcnXVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IFxyXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGltZ0l0ZW0sIGltZ0luZGV4KSBpbiBpdGVtLmltYWdlc1wiIDprZXk9XCJpbWdJbmRleFwiXHJcblx0XHRcdFx0XHRcdFx0OmNsYXNzPVwiWydpbWctd3JhcHBlcicsICdpbWctd3JhcHBlcicraXRlbS50eXBlLCBpdGVtLmltYWdlcy5sZW5ndGggPT09IDEgJiYgaXRlbS50eXBlPT09MyA/ICdpbWctd3JhcHBlci1zaW5nbGUnOiAnJ11cIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1nXCIgOnNyYz1cImltZ0l0ZW1cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tdGlwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ2aWRlby10aXAtaWNvblwiIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUVDMGxFUVZSb1ErMmFqVkVWTVJESGR6dXdBNkFDcFFLeEFyRUN0UUt4QXFFQ29RS2hBcUVDb1FLeEFxRURyV0NkbjdOeDh2SnkrYnAzVDRZaE0yK084UzdKL3JPNy8vMklLbzlrNkNQQklVOUFjcG8wczEwUmVTa2lQQThtdEgwdEluY2ljcU9xUERjeVptdkVoWDhySXU4Y1FJOWd0eUp5S1NJWGMwRU5BM0VBbnh4QWovQlQzNTZMeUVkVi9UV3lXRGNRTTNzbUlnQTRtdGp3WGtRNGFYNE1uZ2ozUWtTWXk1UGZUbWIrbGFvZUxnN0V6QkRnYThhRUVCNFRPVmZWQUtBb2oyc1VjK1FYUUMwUHhNelk4RXNpM1c4Uk9WYlYwNUZUREhQTURDMUFFQnpFY3FZMUFlTE1RUXh0WEFOdVp2ak1hL2NiL2k2T3FvOWtRS0NGSTFXdExsN2JmT3E5bVVIZDMvdzlORDFGNWYrV0tBSnhuL2dlYlFpSWcxWS9tQUVFVXNEWDhKMHpWWjBpbGpvUVp5ZEFZTHVNcllDSXdYT1FyWWMycVJFenc0RS9SQXUvWDlLY1JyVVg1bVdCT0RYK2pCWS9VZFhqdVp1TnpuZDVQbnNjZXBOanRpa2dPREpwUnpDcDNWRmFIQlUrTVRFT2tTRE1JSjBoRkt5TU5TQVpiWkEyTk1VSm43dWpxamViQUJEV3lERG5YcHFiNVlERXZuR3Zxc0haaTdJNUNNZ0J4aUhEeFJ4NWJtU1lHWmx5eUFEV21Dd0hCTjhJd2pkUkg1SW0zQitFbjVVSUp1WUZCZU1uakZ0VjNZL2Zyd0RKbU5WK0svMU5BR0V2SXYrcHFwN01VVTFHdGhYelNvSEUrVlN6V1JVMEVzdU9hVURodythV21OZEtPRWlCeE96UWxZa1dOSklxQWlBSTBWMGRtaGtaTnZrWFl5VWtwRURZaEZKMTdjT2FXWFFBQ1V0eGFQaGdjOUpwWnZGQnIrUmcveE5JOEIrMHcwbFhSMExEelVDSW9FMGJOUHBJU2RDMXVKRDd1SlFWbHpUeUVJRlFnRkdoTXBvMTBwVmZEZmdJd2xBaVU5czBhZjRoK2dnbEFSa0U4V1VSWjk4Ry9WNjVGaGFsM3pnZzNxbnFYcFZLL0lNRzAvcmhBT1lFeERoOUtnWkVjcXk0RHRsRWlyS3BUZ3V0cUxqc25rNVJuRWFMV2VhVWhpWTBzckZPUzFLeHJxVlB0VFMrMmJ5OHhzZHNua09OTk41RzBwRENRY1ZtdGNhb0xZVlZWNjNlMHpEbzhMKzBPVmd2ck55ODRsSVhlbVJpTTAyMkN0anluV3NhYlZDd01kcEtYUWVTT2xaWGNHd1JzUFdiSkFneUxadk9QT2gyVUtaV242eFlTMERpYmwvSVZGKzFWb3l0SjE1d2JxeUN0bWt3S2RJWkduWlpFKzl0bWJMSTRtQzhWUnVEQUc4eHBvMDBzUUZEaTJpUkpyYWJVMmpHQllWVm1iTUt4SjAvZHpmU1hlR1Z6TTNaaVJadDJ0R3NnbURkSmlBRk1HaUhOUHhpamsrWUdWMU5zdUhnRDgyYUNCODJBNGxvbWRvaHZmOGpyUW0zczYxWGJ6Z3pBTUp0Vlh3V09QWmhEN0YwQVhFd25CcnFqenYxc1JDQUNuZnAvSHZJZHNObFRiaURuK3BnRHVWbjNVQ0N4TjR3QTFCb2RzK3hycjhSMjYveXV1dVVMaDhwOEQwblN6c1RFOGxkT1pjQWh0dGdLc1VoQUVNK1VqdHkxeEltMVBKZk9LN25DaC9MTTJ4YU5WRGJmdjhFWk5zblh0dnZEeXJtRjFGSUJLSXdBQUFBQUVsRlRrU3VRbUNDXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtZWxzZSBjbGFzcz1cImltZy1lbXB0eVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbJ2JvdCcsICdib3QnK2l0ZW0udHlwZV1cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJhdXRob3JcIj57e2l0ZW0uYXV0aG9yfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7aXRlbS50aW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2NlbGw+IFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0g5Yqg6L295pu05aSa57uE5Lu2IFxyXG5cdFx0XHRcdFx0d2VleCBsb2FkaW5n57uE5Lu25Zyo5pawSEJ1aWxkWOS4reWuieWNk+S8mumXqumAgO+8jOaNoueUqOiHquWumuS5iee7hOS7tlxyXG5cdFx0XHRcdC0tPlxyXG5cdFx0XHRcdDxjZWxsIGNsYXNzPVwibG9hZC1tb3JlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxtaXgtbG9hZC1tb3JlIDpzdGF0dXM9XCJ0YWJJdGVtLmxvYWRNb3JlU3RhdHVzXCI+PC9taXgtbG9hZC1tb3JlPlxyXG5cdFx0XHRcdDwvY2VsbD5cclxuXHJcblx0XHRcdDwvbGlzdD5cclxuXHRcdCBcclxuXHRcdDwvc2xpZGVyPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaW5kZXhNaXhpbiBmcm9tICdAL2NvbW1vbi9pbmRleCdcclxuXHRpbXBvcnQgdW5pVGFiQmFyIGZyb20gJ0AvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZSdcclxuXHRpbXBvcnQgbWl4TG9hZE1vcmUgZnJvbSAnQC9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlJ1xyXG5cdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJylcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0LyoqXHJcblx0XHQgKiDlpKfpg6jliIZqc+WPr+S7peWkjeeUqHZ1ZeS4reWGmeeahFxyXG5cdFx0ICog55u05o6l5re35YWl5Y2z5Y+vXHJcblx0XHQgKi9cclxuXHRcdG1peGluczogW2luZGV4TWl4aW5dLCAgXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVRhYkJhcixcclxuXHRcdFx0bWl4TG9hZE1vcmVcclxuXHRcdH0sXHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAnMHd4JywgLy/nirbmgIHmoI/ljaDkvY3pq5jluqZcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZUNyZWF0ZSgpe1xyXG5cdFx0XHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcblx0XHRcdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdFx0ICAgICdmb250RmFtaWx5JzogXCJ5dGljb25cIixcclxuXHRcdFx0ICAgICdzcmMnOiBcInVybCgnaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvZm9udF8xMDc4NjA0XzNtcmhhYzJvM29pLnR0ZicpXCIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8v6I635Y+W54q25oCB5qCP6auY5bqm57uZ6aG26YOo5Y2g5L2N6IqC54K5XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiByZXM9PntcclxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodCArICd3eCc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQvL+iOt+WPluaVsOaNru+8jOaWueazlemAmui/h21peGlu5re35YWlXHJcblx0XHRcdHRoaXMubG9hZFRhYmJhcnMoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHJcblx0XHRcdHRhYkNoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy50YWJDdXJyZW50SW5kZXggPSBlLmluZGV4O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v56ys5LiA5qyh5YiH5o2idGFi77yM5Yqo55S757uT5p2f5ZCO6ZyA6KaB5Yqg6L295pWw5o2uXHJcblx0XHRcdFx0bGV0IHRhYkl0ZW0gPSB0aGlzLnRhYkJhcnNbdGhpcy50YWJDdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdGlmKHRoaXMudGFiQ3VycmVudEluZGV4ICE9PSAwICYmIHRhYkl0ZW0ubG9hZGVkICE9PSB0cnVlKXtcclxuXHRcdFx0XHRcdHRoaXMubG9hZE5ld3NMaXN0KCdhZGQnKTtcclxuXHRcdFx0XHRcdHRhYkl0ZW0ubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+S4i+aLieWIt+aWsFxyXG5cdFx0XHRvblJlZnJlc2goZSl7XHJcblx0XHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ3JlZnJlc2gnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/liqDovb3mm7TlpJpcclxuXHRcdFx0bG9hZE1vcmUodGFiSXRlbSl7XHJcblx0XHRcdFx0dGhpcy5sb2FkTmV3c0xpc3QoJ2FkZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQvKiDlrZfkvZPlm77moIcgKi9cclxuXHQueXRpY29uIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB5dGljb247XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHdlZXggY3Nz6ZmQ5Yi2XHJcblx0ICog6YCJ5oup5Zmo5LiN5pSv5oyB5bWM5aWXXHJcblx0ICog5a2Q6IqC54K55LiN57un5om/54i26IqC54K55qC35byP77yI6YeN6KaB77yJXHJcblx0ICog5LuF5pSv5oyBIGZsZXjluIPlsYAg77yI6L+Z5Liq6L+Y5LiN6ZSZ77yJ77yMIOm7mOiupOS4umRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdCAqIFxyXG5cdCAqIOazqO+8muaIkeWvuXdlZXjkuZ/mmK/kuIDnn6XljYrop6PvvIzmnInor7TplJnnmoTpurvng6bmjIflh7pcclxuXHQgKi9cclxuXHJcblx0LmNvbnRlbnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0Lyog6aG26YOo5qCH6aKY5qCPICovXHJcblx0LnBhZ2UtaGVhZGVye1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VjNzA2YjtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLXdyYXBwZXJ7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdHBhZGRpbmc6IDBweCAyMHB4O1xyXG5cdH1cclxuXHQucGFnZS1oZWFkZXItbGVmdHtcclxuXHRcdG9wYWNpdHk6IDAuOTtcclxuXHR9XHJcblx0LmxvZ297XHJcblx0XHRmb250LXNpemU6IDQwcHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0LnBhZ2UtaGVhZGVyLWNlbnRlcntcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRwYWRkaW5nOiAwcHggMzBweCAwIDIwcHg7XHJcblx0fVxyXG5cdC5zZWFyY2gtaW5wdXR7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRmb250LXNpemU6MjhweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdH1cclxuXHQucGFnZS1oZWFkZXItcmlnaHR7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jb250cmlidXRlLWljb257XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNDRweDtcclxuXHR9XHJcblx0LmNvbnRyaWJ1dGUtdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHRcclxuXHQuc2xpZGVye1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcblx0fVxyXG5cdC5saXN0LWNvbnRlbnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0Lyog5Yqg6L295pu05aSaICovXHJcblx0LmxvYWQtbW9yZS13cmFwcGVye1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDc1MHVweDtcclxuXHRcdGhlaWdodDogMTIwdXB4O1xyXG5cdFx0cGFkZGluZy10b3A6IDIwdXB4O1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdC8qIOaWsOmXu+WIl+ihqCAgKi9cclxuXHQubmV3cy1pdGVte1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0cGFkZGluZzogMjRweCAzMHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZWVlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0LnRpdGxle1xyXG5cdFx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdFx0Y29sb3I6ICMzMDMxMzM7XHJcblx0XHRsaW5lLWhlaWdodDogNDZweDtcclxuXHR9XHJcblx0LmJvdHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cdC5hdXRob3J7XHJcblx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRjb2xvcjogI2FhYTtcclxuXHR9XHJcblx0LnRpbWV7XHJcblx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRjb2xvcjogI2FhYTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHQuaW1nLWxpc3R7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdHdpZHRoOiAyMjBweDtcclxuXHRcdGhlaWdodDogMTQwcHg7XHJcblx0fVxyXG4gXHQuaW1nLXdyYXBwZXJ7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogMTQwcHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pbWd7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuaW1nLWVtcHR5e1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHQudmlkZW8tdGlwe1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcclxuXHR9XHJcblx0Lyog5Zu+5Zyo5bemICovXHJcblx0LmltZy1saXN0MXtcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0bGVmdDogMzBweDtcclxuXHRcdHRvcDogMjRweDtcclxuXHR9XHJcblx0LnRpdGxlMXtcclxuXHRcdHBhZGRpbmctbGVmdDogMjQwcHg7IFxyXG5cdH1cclxuXHQuYm90MXtcclxuXHRcdHBhZGRpbmctbGVmdDogMjQwcHg7IFxyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblx0Lyog5Zu+5Zyo5Y+zICovXHJcblx0LmltZy1saXN0MntcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDMwcHg7XHJcblx0XHR0b3A6IDI0cHg7XHJcblx0fVxyXG5cdC50aXRsZTJ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMTBweDsgXHJcblx0fVxyXG5cdC5ib3Qye1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblx0Lyog5bqV6YOoM+WbviAqL1xyXG5cdC5pbWctbGlzdDN7XHJcblx0XHR3aWR0aDogNzAwcHg7XHJcblx0XHRtYXJnaW46IDE2cHggMHB4O1xyXG5cdH1cclxuXHQuaW1nLXdyYXBwZXIze1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0fVxyXG5cdC8qIOW6lemDqOWkp+WbviAqL1xyXG5cdC5pbWctbGlzdC1zaW5nbGV7XHJcblx0XHR3aWR0aDogNjkwcHg7XHJcblx0XHRoZWlnaHQ6IDI0MHB4O1xyXG5cdFx0bWFyZ2luOiAxNnB4IDBweDtcclxuXHR9XHJcblx0LmltZy13cmFwcGVyLXNpbmdsZXtcclxuXHRcdGhlaWdodDogMjQwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBqc29uIGZyb20gJ0AvanNvbidcclxuZXhwb3J0IGRlZmF1bHR7XHJcblx0ZGF0YToge1xyXG5cdFx0dGFiQmFyczogW10sXHJcblx0XHR0YWJDdXJyZW50SW5kZXg6IDAsXHJcblx0fSxcclxuXHRcclxuXHRtZXRob2RzOiB7XHJcblx0XHRsb2FkVGFiYmFycygpe1xyXG5cdFx0XHRsZXQgdGFiTGlzdCA9IGpzb24udGFiTGlzdDtcclxuXHRcdFx0dGFiTGlzdC5mb3JFYWNoKGl0ZW09PntcclxuXHRcdFx0XHRpdGVtLm5ld3NMaXN0ID0gW107XHJcblx0XHRcdFx0aXRlbS5sb2FkTW9yZVN0YXR1cyA9IDA7ICAvL+WKoOi9veabtOWkmiAw5Yqg6L295YmN77yMMeWKoOi9veS4re+8jDLmsqHmnInmm7TlpJrkuoZcclxuXHRcdFx0XHRpdGVtLnJlZnJlc2hpbmcgPSAwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLnRhYkJhcnMgPSB0YWJMaXN0O1xyXG5cdFx0XHR0aGlzLmxvYWROZXdzTGlzdCgnYWRkJyk7XHJcblx0XHR9LFxyXG5cdFx0Ly/mlrDpl7vliJfooahcclxuXHRcdGxvYWROZXdzTGlzdCh0eXBlKXtcclxuXHRcdFx0bGV0IHRhYkl0ZW0gPSB0aGlzLnRhYkJhcnNbdGhpcy50YWJDdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly90eXBlIGFkZCDliqDovb3mm7TlpJogcmVmcmVzaOS4i+aLieWIt+aWsFxyXG5cdFx0XHRpZih0eXBlID09PSAnYWRkJyl7XHJcblx0XHRcdFx0aWYodGFiSXRlbS5sb2FkTW9yZVN0YXR1cyA9PT0gMil7XHJcblx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRhYkl0ZW0ubG9hZE1vcmVTdGF0dXMgPSAyO1xyXG5cdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxzZSBpZih0eXBlID09PSAncmVmcmVzaCcpe1xyXG5cdFx0XHRcdHRhYkl0ZW0ucmVmcmVzaGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHQvL3NldFRpbWVvdXTmqKHmi5/lvILmraXor7fmsYLmlbDmja5cclxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdGxldCBsaXN0ID0ganNvbi5uZXdzTGlzdDtcclxuXHRcdFx0XHRsaXN0LnNvcnQoKGEsYik9PntcclxuXHRcdFx0XHRcdHJldHVybiBNYXRoLnJhbmRvbSgpID4gLjUgPyAtMSA6IDE7IC8v6Z2Z5oCB5pWw5o2u5omT5Lmx6aG65bqPXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZih0eXBlID09PSAncmVmcmVzaCcpe1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5uZXdzTGlzdCA9IFtdOyAvL+WIt+aWsOWJjea4heepuuaVsOe7hFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0dGFiSXRlbS5uZXdzTGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly/kuIvmi4nliLfmlrAg5YWz6Zet5Yi35paw5Yqo55S7XHJcblx0XHRcdFx0aWYodHlwZSA9PT0gJ3JlZnJlc2gnKXtcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMubWl4UHVsbGRvd25SZWZyZXNoICYmIHRoaXMuJHJlZnMubWl4UHVsbGRvd25SZWZyZXNoLmVuZFB1bGxkb3duUmVmcmVzaCgpO1xyXG5cclxuXHRcdFx0XHRcdHRhYkl0ZW0ucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdHRhYkl0ZW0ubG9hZE1vcmVTdGF0dXMgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL+S4iua7keWKoOi9vSDlpITnkIbnirbmgIFcclxuXHRcdFx0XHRpZih0eXBlID09PSAnYWRkJyl7XHJcblx0XHRcdFx0XHR0YWJJdGVtLmxvYWRNb3JlU3RhdHVzID0gdGFiSXRlbS5uZXdzTGlzdC5sZW5ndGggPiA0MCA/IDI6IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCA2MDApXHJcblx0XHR9LFxyXG5cdFx0Ly/mlrDpl7vor6bmg4VcclxuXHRcdG5hdlRvRGV0YWlscyhpdGVtKXtcclxuXHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0aWQ6IGl0ZW0uaWQsXHJcblx0XHRcdFx0dGl0bGU6IGl0ZW0udGl0bGUsXHJcblx0XHRcdFx0YXV0aG9yOiBpdGVtLmF1dGhvcixcclxuXHRcdFx0XHR0aW1lOiBpdGVtLnRpbWVcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdXJsID0gaXRlbS52aWRlb1NyYyA/ICd2aWRlb0RldGFpbHMnIDogJ2RldGFpbHMnOyBcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWxzLyR7dXJsfT9kYXRhPSR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHR9XHJcblx0XHJcbn0iLCJjb25zdCB0YWJMaXN0ID0gW3tcclxuXHRuYW1lOiAn5YWz5rOoJyxcclxuXHRpZDogJzEnLFxyXG59LCB7XHJcblx0bmFtZTogJ+aOqOiNkCcsXHJcblx0aWQ6ICcyJ1xyXG59LCB7XHJcblx0bmFtZTogJ+S9k+iCsicsXHJcblx0aWQ6ICczJ1xyXG59LCB7XHJcblx0bmFtZTogJ+eDreeCuScsXHJcblx0aWQ6ICc0J1xyXG59LCB7XHJcblx0bmFtZTogJ+i0oue7jycsXHJcblx0aWQ6ICc1J1xyXG59LCB7XHJcblx0bmFtZTogJ+WoseS5kCcsXHJcblx0aWQ6ICc2J1xyXG59LCB7XHJcblx0bmFtZTogJ+WGm+S6iycsXHJcblx0aWQ6ICc3J1xyXG59LCB7XHJcblx0bmFtZTogJ+WOhuWPsicsXHJcblx0aWQ6ICc4J1xyXG59LCB7XHJcblx0bmFtZTogJ+acrOWcsCcsXHJcblx0aWQ6ICc5J1xyXG59XTtcclxuY29uc3QgbmV3c0xpc3QgPSBbe1xyXG5cdFx0aWQ6IDEsXHJcblx0XHR0aXRsZTogJ+S7juS6suWvhuaXoOmXtOWIsOebuOeIseebuOadgO+8jOi/meWwseaYr+S6uuexu+S4gOi0pea2guWcsOeahOecn+ebuCcsXHJcblx0XHRhdXRob3I6ICdUYXBUYXAnLFxyXG5cdFx0aW1hZ2VzOiBbXHJcblx0XHRcdCdodHRwOi8vZmMtZmVlZC5jZG4uYmNlYm9zLmNvbS8wL3BpYy85MTA3YjQ5OGEwY2JlYTAwMDg0Mjc2MzA5MWU4MzNiNi5qcGcnLFxyXG5cdFx0XHQnaHR0cDovL2ZjLWZlZWQuY2RuLmJjZWJvcy5jb20vMC9waWMvZGM0YjA2MTAyNDFkNzAxNjI3OWY0ZjQ2NTJlYTA4ODYuanBnJyxcclxuXHRcdFx0J2h0dHA6Ly9mYy1mZWVkLmNkbi5iY2Vib3MuY29tLzAvcGljLzBmNmVmZmE0MjUzNmZiNWMyY2E5NDViZDQ2YzU5MzM1LmpwZycsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzLlsI/ml7bliY0nLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRpZDogMixcclxuXHRcdHRpdGxlOiAn5Yir5YaN546p5omL5py65LqG77yM6LW257Sn5a2m5YmN56uv77yM5pma5LiA5bm06IO95bCR5o6JNeagueWktOWPkScsXHJcblx0XHRhdXRob3I6ICfniLHogIPov4cnLFxyXG5cdFx0aW1hZ2VzOiBbXHJcblx0XHRcdCdodHRwczovL3BhaW1nY2RuLmJhaWR1LmNvbS92Ljc3NzQ2OEY0QkVEN0REREE1QjQ5NThDNjcxQjA3NjU5P3NyYz1odHRwJTNBJTJGJTJGZmMtZmVlZC5jZG4uYmNlYm9zLmNvbSUyRjAlMkZwaWMlMkYwYmNjOTNmZjkyMjJjYWZhNDUyNmM5ODBjMTdmNjllYy5qcGcmcno9YXJfM18zNzBfMjQ1JyxcclxuXHRcdF0sXHJcblx0XHR0aW1lOiAnMzDliIbpkp/liY0nLFxyXG5cdFx0dHlwZTogMSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAzLFxyXG5cdFx0dGl0bGU6ICflsIblupzlhazlm63miJDlsYXmsJHouqvovrnigJzlpKfnu7/ogrrigJ0nLFxyXG5cdFx0YXV0aG9yOiAn5paw5Lqs5oqlJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE2OTIyOTgyMTUsMjQ1MDk2NTg1MSZmbT0xNSZncD0wLmpwZycsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzLlsI/ml7bliY0nLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA0LFxyXG5cdFx0dGl0bGU6ICfpqqjlgrLlpKnmnIDlgY/niLHnmoTkupTkvY3pg6jkuIsg6L+Z5LmI5aSa5by66ICF6L+Y5q+U5LiN6L+H5LiA5Y+q5LuT6bygJyxcclxuXHRcdGF1dGhvcjogJ+elnuivtOimgeWUseatjCcsXHJcblx0XHRpbWFnZXM6IFtcclxuXHRcdFx0J2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQWdHQmdjR0JRZ0hCd2NKQ1FnS0RCUU5EQXNMREJrU0V3OFVIUm9mSGgwYUhCd2dKQzRuSUNJc0l4d2NLRGNwTERBeE5EUTBIeWM1UFRneVBDNHpOREwvMndCREFRa0pDUXdMREJnTkRSZ3lJUndoTWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qTC93QUFSQ0FFYkFmUURBU0lBQWhFQkF4RUIvOFFBSHdBQUFRVUJBUUVCQVFFQUFBQUFBQUFBQUFFQ0F3UUZCZ2NJQ1FvTC84UUF0UkFBQWdFREF3SUVBd1VGQkFRQUFBRjlBUUlEQUFRUkJSSWhNVUVHRTFGaEJ5SnhGREtCa2FFSUkwS3h3UlZTMGZBa00ySnlnZ2tLRmhjWUdSb2xKaWNvS1NvME5UWTNPRGs2UTBSRlJrZElTVXBUVkZWV1YxaFpXbU5rWldabmFHbHFjM1IxZG5kNGVYcURoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1SGk0K1RsNXVmbzZlcng4dlAwOWZiMytQbjYvOFFBSHdFQUF3RUJBUUVCQVFFQkFRQUFBQUFBQUFFQ0F3UUZCZ2NJQ1FvTC84UUF0UkVBQWdFQ0JBUURCQWNGQkFRQUFRSjNBQUVDQXhFRUJTRXhCaEpCVVFkaGNSTWlNb0VJRkVLUm9iSEJDU016VXZBVlluTFJDaFlrTk9FbDhSY1lHUm9tSnlncEtqVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnb09FaFlhSGlJbUtrcE9VbFphWG1KbWFvcU9rcGFhbnFLbXFzck8wdGJhM3VMbTZ3c1BFeGNiSHlNbkswdFBVMWRiWDJObmE0dVBrNWVibjZPbnE4dlAwOWZiMytQbjYvOW9BREFNQkFBSVJBeEVBUHdEeGI3MzhXRDcwOGIwQVZSbjNwRlRjM1BTcDFBQXhXcHprWjJxU1QrVlJFbG42VllhTU0yVCtWTUVSREU1b0FZcWZMblBOS3E1UE5TWXBjRE5NUXRKUlJtZ0JhVWRhYm1sQnBqSlZHZVBXdGlPQUZuZUpENVViakxEb3BQYjZWamdBTGtuREVaRmJHblNtYUNTRnAxZ2lDWkpQOGJEbWs5UVd4YXBhYWpia1Z2VVpwdzYxaUlqMWVOeUlMb3I4a3NZWGQvdEx3ZjZWbVI4dnVJcll2aVgwcUZDU2NUTmoyNHE5cDNoVzRheGx2N3NHRzNqak1nWG83NEdmd0ZiYzFscVdrMlpsblkzTjdMNWR2Qzhqa0RoUm5GZGpwWGdSbUN5YWhMdDlZbyt2NG1yL0FJS3VCUHA4cWVSRkg1WkgrckdNNUdlZjhhNjFBS3luTjNzYVJpdHl2WmFaYTJNSWl0b0VqUWVnNi9XcnFwU2ppbFdSR2RrREFzdlVBOGlzeXhRZ3AyeWxGT3BCWWJ0cE5udFVsRkFFTElyREJHUjZHcUZ6cE1Fd08wYkc5UjByVXhTRVVYQTVHNzB5YTN5V1hLLzNoMHFnMGVLN3BrQkJCR1I2R3N1NzBhS1hMUmZJM3AycTFJVmpsU01VbUt1WE5wSkJJVWtVZzFWWVlOVmNRMnBvcENyQWc0SXFDbEJJb3VCMW1uWHkzS2JIT0pRUHpxL3N6WEdRVHRHNFpUZ2pvYTZ5d3ZGdTRBM0FjY01LbGpSQmRhUlozTWdrZUlDUWZ4THdUOWZXc1hWZkNNRnlwZTBieUpNZmQ2cWY4SzZ6R2FRclNVbUp4VDNQSEw3UjdyVHBpbHhFeUhzZXgraHFnNkVWN1JkV2NOMUUwVTBTdWg3TUs0WFhmQ3N0bUdudEFaWUJ5VjZzditJcmVGUmJNNXAwbXRVY1pqQnBIT1kyejZWTkttT2xWWlNSeDJyVnN5dHFRZzRxUzNJODlNOURVT2VhZEUySlVKSEFhb1JiTml3eWJhNS8zYXk4NGNWbzJFb1dDNEI3aXN6cXdIcWFzaElhN2M1cStKQTArUjBBRlo4bnk4ZWh4VWtia0RJcVVVMGFUT0FPdFJGOXdxcjVoSTVxYU1nclZJbXhhdHVKQlc3TGNYQzJhK1N1NGZ4WTdWejQ0SEZUUjMwOFNGRmNnR21TMWNSaXd1c3Fja210Q1RFZHRza0pKM2c1SGFzNU1wRzBwNjlzK3RhR1BNdWQwbnk5RDdkS3hrOVRSYkZ1SVppangvRno5SzFZMkRSSVIyK1dzaUp3RkRIdWEwVWtYN0dXQnh5U0t5a016NzU5aXlzZnZIT0s1VzZYSlpxNmlYRnhGbkdjZGF3YjZJSU5vNUFOT0xMUmxzdUlENjVxdElnS0E5S3N6dDBXcXo4aXRDeUZlRm9KcGVhVEJxeVJwUE5KVDFUUEpPQlI4cXR3Y2lrQTNGRlNDUEl6dm9wWEFwcWFsQnFCVGlwQTJLUUVtYVRlQlRDMmFqSkZBV0pXY0U4VTNmOEFOVVFOTG5tZ2RoNWJOQWFtVXZhbUE4TlRnYWl6VGhtZ0M1QkQ1cFZWKzhldGFVU1IyVjNES3k3MEhWVzV5YVpwMXY1Y1BtTVBtYitWU3pJWlE3RCtEN3YxRlozMUF1R05vWGFObEM0NUFCN0hrVTREMDYwUmszRm5GZEZzc0Q1WkhvUDRmNjF0NkY0ZGJWWlZ1SlN5V3FIcURndWZiL0dsTFJqVWJzdCtIdElhR01hbnFNc0tReGtsVUlCeDlmVCtkWk91K0lyalVKcFZXUm83WUhDeGc0NEhjK3BOZGQ0bmppdGZEVHdReHFrWUtxRkE0QTZuOUFhOHZ1MGY3TkhjUm5mQTNWaC9BM28zcC9XaURUZXBvMVpXUjBObHF0enBOekZKYnlZM1JxV1EvZGIyTmVuYVpxRU9vMmNkekNmbFljanVwN2l2SFoyTWx4OHYzWTBVTTNZQURyWG9mZ2hObWpQTGx2bmtJdzNiSC82NnFxb3A2Q3AzNm0zcm1xLzJWcHhtVlEwckVKR0QweWU1OXFwZUZIbGtGMUpOS3NramxTekE1eWVldFluaXk4VzcxYTNzY3FZNEI1a2dMWUc0OXZ5L25YVmFIWWl4MDlCdEN2Sjg3Z2RpZTM0ZEtpMWtWZThqWEZPN1V3VXVhekxIMFZIdW8zVWdKTTB1YWozVWJ1YUxnUE5OSW8zVXZXbUJWdXJTTzZqS1NENkh1SzVlK3NaTFdUYXd5RDBQWTEySkZWN20zUzRpTWJqSVA2VTB4V09HWVlwdWF2WDFvOXRNMGJENkgxRlVUeFZYSkZWcTB0T3ZEYlRxK2ZsNk1QYXNyTlN4dmcwd084Und5aGdjZ2pJcDlZdWkzZm1SR0JqeXZJK2xiUXJObENFVkc2WnFha0l6VEN4dy9pZndwOW9qZTcwOUFKdXJSRG8zMDk2NEs3dEpZQUJJaFVrWkh2WHVESm1zYldkRHR0VXMzaFpGUjhsa2NEbFc5YTBqVWEwWmxPa25xanhaK0RUQTNPYTBkVjA2ZlQ3eDdlNFRiSWgvQWoxSHRXWWV0YUl4WmNqbjJJNEg4UXFOVytZZldxNGJrVThtdENCWjJ6TTJPbWFlbjNSVmNuSkpxZU0vSUtRMlNBMUtqWXF1M0pVZTlTZzRvdVNXUkx4U2hzMVhEVThIaW5jRFJsV04vSVJXNE9CLzlldFlRZVdzWmI1dXZidGl1ZVJnNlJxVGcvd24xcmRzN2haTFlHUnNOR0NvR2V0WXN0b1IxNDJvY0FEdlNwTnR0dHVUa2NuUHZVMEJXUXN6Wng3VlVjTEc4dThrQWpLNTcxSUl2YWJFSGpua2tiYWc0SHVhd05UUWhzanBucFczYlhJR2xwR0Z3MjhzVzlhek5RRzVTMUxxVWpuWk1selJKQVJBR1BXbEovZWsrOUxJek9nRldXVW8xTEFqR1NEeUtrVXRHcERKOHRMQXUyUnNrR25Uc3grVmNWb3RpSHVRbHl3d1ZxSmdNY0RCcDVEYlFRY2oyb1pjSDVWNDk2QUVWVkl5VHo5YUt2VzhDdENwSzgwVlBNVVlZTk82MUdEelRnYVFEdWxSc2FjV3hUQ2NtbUNGRkZKUUtReHdwVFRSMXA0Rk1RcWptdGRORnUxZ2d1Wlk5a0VwNEpQT1BwUm9kakZQY2ZhTHJpMmg1WWYzejJVVnI2cHE1bmtCbE8xRis1R3ZZVW03RkpFSUdCeHdCU2hrSDhRcUswbmd1SkNHT01mZFU5NjFsQUF3QUFQYXVhVTdPeDZPSHdEcXE3ZGpPc1RFWlpZSkdIbFlKSFBRbnY4QWhYcHFhbmJXZmhwYitHTDl6SENHRWE4WTdZL092UDVMYUtRN2l1R0hJWWNFVm12cU4vWS9hYlZMbDlzb0lkV09Rd1BmQjZHcVUxTWRYQnlvNjdvNmJXdkcxdmY2VlBiTlpPcnN2eU52QkN0Mk5jUmJYOGtSWXF6S2VBU3Y4WDFIUTFESVM0NGJCN2cweUxDT0JJQ0ZKSFBweldzWXh0Wm5IVWkwN28wRGVNeU11Q1NEbkdBcWcvUWRhOUw4T2F0cGxsNGJnWDdiQ1psaU1raTd4dTNkU1ByWGxVenJKTXl4OUN4T2Z4cXhhbzBqaUpSbm5HZlNuT0tTSFNnNXV4MnZoNk9YVTlZV2FabEx6eWVaSUNNbmFPVDlPd3IwMURYRmVDdE9TM3RXdmM1TW1VUVovaEI1UDRuK1ZkWUxxRlcydEtnYjBMQ3NaTzcwRzRjamFMMmFvYXRxUDltMkwzV3dPRXhsZDIzaXJBa0JIV3NUeFRDdHhvTndTTW1MRWcvRC93Q3RtcFc0bnNaYmVPV0U1MjJlWXNEQjh6QnpUeDQ1aTcyVW40T0s0V1I4Y0RnVkY1cHJibFJITXowVlBHOXFmdlcwdytoQnE1QjR1MHVVZ05LOFdmNzZFQ3ZMeEtmV25yTVIzcGNxRG1aN0piWDl0ZExtQ2VPUWY3TEExYVZxOGFndVRrTkZMc2NkR1ZzR3ZSZEV1YnFhd1NlTzYrMW9lQ2tnQ3VwN2pJL3JVdU5pbEs1MGVhUTFYdDd1T2JLakt1djNrWVlJcWZOUU1vNmpacmR3RWRIWGxUWElUSVVZZ2pCQnhYZE4wcm05Y3RSSEtKbEdGZnI5YWFZTkdFU2FGYWtmclRkMVdRYWRoY20zdUVrQjZIbjZWMlNNR1VFSElQU3ZQbzN3YTY3VExzUHB5TzdZQ0FoaWUyS2xsSTFnYU04VlRpMUMxbS8xZHpFMzBjVllFZ0k0T2FrWklSVWJyVHQzRkI1b3VCelBpZncvSHJOa2RxZ1hNWXpHM3I3R3ZLOVEwMld5ZGZNVWdPTXFUK28rb1BGZTdNb05ZZXVhRGI2cllTd2xBa2hKZEhBNk42L2pWeG5ZaWNFenhYR0RTazhWYnU3T1MybmVLUlNyb3hWZ2ZVVldNZkh2WFRGNkhLOXlJQWs0SFdwMkhseUJQYjlhalVGSHlCeUtVQm5KNmxzNTRwWDFDdy9QenJVZ05JSUpTUVNBdjFwNGdidS81Q2ptUTFCc0FmV25BNVg1ZWZTbVNRTDViWlp1bnJVVURqeXdGSndPS0U3aWNHdFIxdkt5U2craDZHdEk3ek1wSUlMY2dHcUFVQ1VPTzlhNkZaNGcremtEQU5ROUNqWnNZWGtna2M0QUdEUzZwR2tscmhSbGdNNTlLdDZXb052NWVSZ0xrKzlSWE1KbWdtVmVPTVZtM3FTdHpLdDVHK3p4cHh4eFZYVUdDUXQzSnFaMWEyZEViZ0thbzMwbm1BWVBBRlBxV2pMUUJwd0QwcXo1WVZjaW9vVi9lYmpVMGpCWXMwMk15NUFZNXkrZmxwN2plQXc2WXFLNWJjYzlxU0dRaHZMSjROYVJZbXVvOGZLQ0JTSEpQTk9jL2hUUWVhYkVhMXNuK2pwa2M0b3FSTWxGSTZZb3JHNVZqanMwb05JUVF1Y2NVZ05XTWN4elJUU2FjT2xNQmFLQU0xWXQ3T2E2a0VjRVR5T2V5ak5BRUFHYTBMT3hhZkR2bFUvVTFhVFNHdExnSmRiTjRHZGl0bkgxcStCMkZSS1Z0QUd4UnJGR0kweUZIYXFGMHdOdzV6NkN0Q1dPZDROOFViZVdXMm1YSHlqOGFTUFNJK0M3a24yckp5UzNPM0NZZVZSM1JsS3loczVHYTJ0T3ZTeEVVaHovQUhXcHcwdTM3N2orTk9UUzRrbFYxSkdEbkZaeW5GbnIwYUZXRHVqUXJHMVRFVjVITnR6Z0FrZXRiTlV0UXRUUEh1VDd5OXZXb2c3TTZjUkJ1TmtaRjVhcXdGeEJ6RS9wMjlxcGdNT241R3JkdGROWlNNaEc2SnVxbnRWOXJPMnVrOHlCdHBQcDAvS3QrYTJqUE05a3FtcTM3RkcxdDdTWEJrZDQyOU8xYkVSaWlVUndBTTMrei9VMWxOYnRiUG1XSXVucURWdUhVSUZRSkhDUWZRVXBOdlkzcEpRMGRrL3hKNXIyN3NiV1NLMnVaSWxLZ3lCRGdIbmlzKzIxRmhLREpoei9BTFhPYXVYWUlzblp4ODdrWi9QcFZBWEIwNzkzOWp0cE40M0I1RkxFZzl1dGEwbStXNlZ6enNkRkthNlhPdzByeE5kV2lZaGNTUmpyYnl0MC93QjAvd0JLNlZkWlhXTk12SURheXdUZloyWW8vcGpyWG05anFaOHhQTGlodDFZNFl4RDVqK0p5ZnlydXZDVWtYMlc1dEhEQ1o1R2JMQTVkQ0FNNTcwVHZ1MVk1RjJPR1NYell3U2VlOUdhcnpock85bGlZWTJPVkkraHFiY1NtNVNQcWZTcVpJK3IrbTJENmplQzJTV09ObUdWOHpPR1BwU1hPazNkbXlHNGpaWWlRZk5RYmxaZlkxc1IrRzcwUlIzTm82WEVadzZQRTJHOWpnOTZUYUdrYW1sK0dOUXNwUmxyTjRTZm1qZFN3UDA0NE5kaGEyZHZhS3d0NFVpM0hMQkJqTlZOSW5udUxGR3VvR2luSHl1ckRHU080K3RhUzFrMitwb2tObXRvNTFHY3E0KzY2OEZhaGp1WklKQkRkWTVPRWxIQ3Q3SDBOV3MwMlJFbGpNY2lobFBVR2xjZGhrMTNCQ2NQSU4zWlJ5VCtBclB2L0FENzYyTWNkb3d5Y2hwR0M0L0RyV2hEYlF3REVVYXI2a2RUK05TR2dEZzc2eXZyV1RhNlJMa1pEQWs1ckhObGNlYVdOMjIzKzd6WG85L2FMZDI3SVI4dzVVK2hyalo0bWpjcXd3UWNFVlNrUzBVdnN5ZDJrUC9BelVzYUNNWVNTWlIzQWxiL0dnMFo5NmR4RFRiUm1VU2JuM2QrYzUrdFg0SE1aekc3b2ZWR0lxa0RVMFo1b3VCMTFpdHpMYVJ5eDNiN2lPUklvWWY0MDYzajFlSzVsOHlhR1NJOHBudDdmNXpUTkNjdFk0L3VzYTF4VU5scEZZWGdVaGJpTm9XUGR1VlA0MUl3QkdSMHFRcUdCQkFJUFkxVWF6YUxMV2tubG4rNDNLSDhPMzRVcmdjTjQ0MGZaS3VvUnJ4SjhrdVBYc2E1V3owbTYxQ2NSVzBMU04zd09COVQycjFpNnNadFRpTnZkcXNkdWNibFE1TG42OWgrdFdiYXhnczRSRmJ4TEhHT2dVVm9xbGxZeGxTVGR6aTdId0RENVlhL25ablA4RVhBSDQ5NlRVUEM5cmFyNVZocHR6Y1NZKzhaTUlQOEFHdTgyVTFrcWVkbHFDUjVKTm9HcHdrczFqY2M5Z01nVm1Oa0VqQkJCd1FleHIxdlZyS1M4dGpDdHkxdkdmOVl5RDVpUFFIdFhsZDFGR3M4bmtidktMa1JodVNSMnE0eXVKeHNWRHpuUFNxU1NjdWUyNDRxNDQ0SUlJN0VIaXN6ZnljZXRhUjNNcHJRdHM1Sy9MMUhOYkZqS0JhOU9wcm5sYzFyYVk0TzFUOTNqTk9SbWxvZGJZUytWR09PZ3FlYVJFamRsL2lIeTFTUnd6YlIwOWFTYVRNU29lekhCSHZXTDFZakwxT1pwTGpMZjNxb0ZTOG0zdFZtN1hFKzNPU0d4VG83Y2tTSE9DTzlWMExSbmdBRWpIU29yazRqSDBxZDAyWkJxRzVYL0FFVU1ldEJSbHpNTm9xRE9KRk9hY3h6K0ZNSithclF5NjY1R2FpUEhXbkxMdFFmU28yYmNhb3pTTnlJanlJdjkwVVZDZ1BsSjErNktLeUxPZXVNbmFvVTRVZWxRVm9Tc0dLbHpqM1U5YWlralRxRUpKNllvVWhGTTBvcXpsVjRhRTQrbEN3bVNVTEdwNTZacXVZWk5wdW55NmplcGJ4RGtuNWoyVWR6WFp6M3RycEZvYlBUVkF3TVBOM0ovcWF4ckpqWTJqd3c4Tko5K1R1UjZWSGdzMlc2RG9QNjFQUDJLdjJIS1N6dExKMVByNlZhaVdJQVNUa3N2VllsT0MzMVBZVldwclRJaHdUejZDcEVYYnkvbG1oS3NRa1FHRmpYaFIrRlNXaExXeWJzN2dNSE5UK0c5R2JYTlFEekxpMGhJTGorOGV5MXYrTjdXMnQ3T082aWNSWFdRaW92SG1MOVBiMXFKNjZIZmdxdnM1YTlUbm1rU05jdXdBb2hrTW8zQUVKMko3MW1XdHJKTy9tVEVsZmZ2V3NvQUFBNkNzR2t0RDM2VXBUMXRaRDgwaG9vcURZekwrMHd3dUVVSEhMTDYxVGxna3NtV2FCejVUY2crbnNhM2lNakJxSVJLc2ZsNHl2b2Exak5wSEpVdzZiYmlaY2VyTU9KbzhqMUZTcnFObm5jRnczKzdUTHZUMVJXa1J0cWdaSU5acGl4YkNadU54d285YTFTVDFPU2NxbE42Nmx1NnYvdExvaUtRbVNjbnVhdDNNMHR0WVdsM0F3V1JRVXlWQjRQMXJOZU9KVmdhT2Z6R0s1WmNmZHF6Sk1KTkZlTW5sSkJqOGE2NmFYSzEwUEl4RlJ6bGQ3aGFYbHhLK0VLSXpIQUVVWVVrL2dLOVk4UDZZZE8weEZsR2JsL21rWThuSjdaOXE4eThNbUsxMWV5dVdBSUUyeHQzUVo0eit0ZXhvTWlzS2xsb2tURThyOFphZTFycjB6NCtTZjhBZUtmNS9yVkcwc1ovc3NjcTRrVnhrcjBJcnY4QXhwcG4yelNQUFJjeTJ4My9BRlh2L2pYSzZWellSZTJSK3RDbDdvK1hVN2Z3Mnp6NkZick5HUVVCand3NmdkUDByYWd0NG9JOWtNYXhwbk8xUmdacmpkT3ZwYlI4eHR3ZXFub2E3Q3l1UmRXNnlxTVo2ajBOWnNxeGFVWXAxTkZMVWdPb3pTVVVBT3BLU2lnWWhybmRldE5yaWRSdzNEZld1aU5WYjZBWEZySkgzSTQrdENFY0s0d2FaVTB5a01RUjBxQ3J1U0xtcG96eUtnelVzUjVvdUZqcnRBUCtpUDhBNy84QVN0b0hpc1RRUCtQTnY5K3RvR3BaU0hVaG9vcERFSW9GQjVwS0FDbW1scENhQUtkL2JHNnM1WUZrTVprVXJ2QXlSV1hhYURZNmVBMGNRYVVmOHRINVA0ZWxiajFVdUpGaWpaM09GVVpKb3VJOGExYVR5N2k1T0R6STJDZS9KckV6WFFlS1dpTnhFSVZLeEFzVkI2OG5KSi9FMXpoTmRNTmpDcHVTcTFiK2dybC9tWE8xYzRyblZOZEw0ZEJmekRnOGdETk9XeG16VmR5alpLa0FHbG5rS2hBcDZuTlRhZ0I1S1lZRWh1YXJsVWFhSjJiNVVHVGp2V1FpcjVUejNwSUJKSnpXaGQydjJPQUwvR3d5M3RUTE9jUWFnYm9mTXF0bmowcDJxYWxIZXlPVUdQVE5KdGpXNWhYUndQU3MyNnVBUnR6MDdWTmR5a3NRZXRaMHcrUVArZFdpeUp3Tm85YWhZODFLN2ZMbjJxdjE1elZBV0F4MkFlMUtveVFLUUVGQUIycVczVGZPaStwcGlOOVFBZ0h0UlVXNG5taXNTakVTRXFPQ2hKNmUxTklsUlEyNGdkd2F0VEprbGNESTQ0OWFnamVSaUV3R1BURkpNZ1NKSG1jS0FCbnJ6MEZhVWNTUktBaWdBZDZiRWdpUTVQUFZqV3JhYWZDYklYdDdJeVJNZmtpWGhuRk5LNWFSbmhsSndDTTB0T3U3Z1N6UkxIR3NVUzUyb282ZjRtcTF4UDVLY2ZlUFNrMXJvSWJjM1BsL0l2M3U1OUtiWVdzdDVlUlcwS2xwWld3Qi9XcUpjN3NubGpYcG5nUFFoYldYOXBUcCsvbSs1bitGUC9yMVQ5MUZ4amRuVDZScGtXbGFkRmF4RDdvK1pzZmVidWF3UEdkZ0hsdGJ4Z1dRWmlZZGdlby9yWFlBWUZjMzR2bXhhVzhIOStUY2Zvby94eFdOenNvTDk0ampzWU9NVXVhR1BOTnpXQjlKRWZtbzVKY0VJdjNtNmY0MUZQY0xBbVR5eCs2dnJSYnhzb0x5SE1qZGZiMnAyNmt1V3RrV0IwSE9hUTBVaE5JcGxLK1BtdEhiRCtNNWI2VlExY2hTaUx3cXIwcTliZnZyaVc0UFRPeGZwV1Zxejc3bHg2WUZiMDFxa2ViaVg3amZjcE5PN0x0UVlBSFdtbWVSSWhFMlFyRUg2MUlWTEFLdmYrVlEzRGJwMkFJSVhnRWVsZGwyZUUwYkZqSmlKaVA0V1ZoWHQ5czI2Rkc3bFFmMHJ3clNUNTBzY0o0M3Vxa242MTdyQUFxaFIwQXhXTlVxSkpKR3NrYkl3eXJEQkhxSzg5RmcyblhsMVpOOTJOOXlIMVU5SzlHckUxK3c4eEZ2STF5OFF3K082ZjhBMXV0WnBsSE9SS2NqRmRqcEVMUTJTN3VDeDNZckgwalR4Y1MrYXd6RXYvanhycDFHS1RZeVFVdWFhS00wZ0hab3B1YVhOQUM1b3pTWm9wZ0xUR3AxTWFnRGtOWWdFVjdJQU9HK1lmaldTM1d1bThReGZMSEw5Vk5jMDQ1cG9URzlLbGk2MUJVOFBVVXhJN0RRdUxEUHF4clhCeFdacEs3Tk9pOXhtdEVWSlEvTkdhVE5KdXBBT3pTRTAzTkptZ0JhUW5GSVRUR05BRFhiam11UzEvVlJNVGJ4Tis3QitZaitJMXBhOXFCZ2k4bU00Wmh5ZlFWd3VwM2d0cmQ1U2ZtNktQVTAwcnNEbnRidWZPdlNnUHl4amIrUGVzclBOT2tjc3hZbkpKeWFqcnJpckt4elNkMlNwWFI2TmRwYTJUazRMRW5Bemo4NjV4QVNRQldoQ3p3eG45eUhRc0EyNVRnZWxGazlHU2xjdTNtclBLUWliU2dQSUdSbXA5RnVQUHVqRytBektSanAyNjFucEhOY1RpR0cyVHpKQ2RneC9LbjZVMGtOOUhJVmRRY2hXMjhISFhIMG9sYTFrVzQ2SFFyYXl4aHY3dlhOWmtzb2phUUhuMEpyc25kMjBnSVFxN2h6NjF4MTBvZVJzZ1o3VnpwM1pLTWE1a0x5RmpWT2R5MFNyNjk2MExpSGFvYnNhb3pJRmh4M0J6V2lLSVFNcmlvaUFEeFU2a3FvUEJ6VURLUTNOTUNSZWxYOU1qMzNCYjBXczlQdTFyNlV1Mk9TUTlPbERlZ21XSExJNUFQRkZSdStUbjJvck1abEJubGwyQWZlNkd0R05GalVLQU9Cak5WclZUanpHNm5nZlNwWnB4RXZxeDZDa3dzU0JrYWRCSi9xd1FTUDczdFZxNnUzdXBOemNLT0ZVZEZGWmx2dWtjeXNjNDRGV3dhTmdaSG5PNlU5aDhvOXF6M2RwcENTZWU1OUtsdTdqZDhpZEIrdE10eXUzYVVPN1BKRlV0QTJOUHc3b3Y4QWEycFJ3RGNWKzlJK09BbzYxN1JieHJGRXFJdUZVQUFlZ3JsL0JlbExZNldMaGx4TmM0WSt5OWgvV3V0VWNWbEozWnRGV1E0bml1TDhXeTd0Umhqejl5SW44ei85YXV5WThWd1BpVjg2MUtNOUVRZnBVUFk3Y0dyMUVZNU5RenpyQkdXWS9RZXRFc3F4b1hZOENzNk1OZjNPK1QvVkwyL3BVSmRUMnAxTGFMZGxtMWplWi90TTNVL2NIb0t2VWdwYzBtN2x3alpDNXFDN2tLUU50KzgzeXI5VFUyYXJOKzl1aG43c1gvb1JvUVQyc09pakVNS29PaWl1ZG5ienJ0KytUL00xdjNjdmxXenQzeGdWektzZk15T3BOYjBkN25sNCtTVVZCRzdZVzhGOXJ0bFpzb01MU0JYQTR6M0kvU292Rm1ocHBPc3ZIYnJpM2tVU1Jnbm9EMUg0R202REliYlZvTHBuampTSnk1ZVhPM2dkUGMxWThZWG4yMjV0TDVjQVR3ZGprZkt4SDRWdHplOVpIanRhR2RwZHNIekl6a0FIQkEveHIyYlFidjdYbzlyS1czTVVBWTlja2NIK1ZlR1FUc2NLV08zMHIwandKZnNrc3VuTTJZMlh6WXZiMUZGUlhRUlBRMU9haXVaUkJidklSbkE0SHFld3B5R29MZ2VkZFFRL3dnK2F3K25UOWY1VmlXUHNMVmJPemlnSDhJNSt2ZXJZcGxMU0dQelJtbTVwYzBBTFJTWm96UUF0Rkptak5BRHMwMDBacERRQm5heEg1bW55Y2NyOHdyalpldGQzY3A1a0VpZXFrVndGdysyWUllNFA2VTBJVE5Ud25tcW1hdVdpNzVVVWR5QlRZSGNXUzdMU0ZmUlJWc0dvSXh0UUQwR0tsQnFRSDVwTTAzTkdhQmk1b0p4VFNhU2dCUzFNWThVNm8zNlVBY2w0bHlseUhQM1dXdk5kWHZqZFhHRlA3cE9GOS9ldlMvRzhNajZNWlk4L3UyRy9IOTA4SCtsZVRUOVNPNE5hMGtaMUpkQ0hPVFRoelVZcDY5ZWEzTUxHallRNzk3OTF4WGVmRCtEVExqeENOTjFhTlhodTBEUmhtS2p6VU9WNmZqWEVhWTJJWnNkZUswQ3p6ejIvbFNtTmxKSUs5VlBYcldjcFdaZE9MbEt5UG9YeEJwK2p4YVBOZlh0aGFiclNGMmpZb01vY0hHRCtWZlBGcHF6U1IyOW5KQ2pSMjVab2lPcXN6QWtuK1ZidmlMeGZybDVwMXJhWFY4clJ4ZjNWQ21SaC9FM3FhNHUzbUVkeUdKNFBmM3pVUjFPaXBCeFZtZHBjNmxJTEczd0J0eGpQY21zbUtRVFhHVGlvTDY1TVMrV3d3ZW9wbWxrVE14WnNFRGlpMWptdG9PdmdxZ0tCMDVyR3V2dWsxcDNCTEZqVkVvSERLZTlVaGxORTNRc3c2akZNSjVKUEpxNDBRaUpqem5kVkpoaGpUR2g4YThaN1ZzMm84dlQxejFiTlpzU0F3ZzFyK1Zpemp6MldpV3hON3NvdkpsaWFLWTJBMk0wVk5oa3BJUk05QUJXYThoa2tMSHZVdDFQOHF4azRKNU5SUXFXbFVFRURyejZVa05HaW0yR0lBbkFBcUc1dUdVQlF1ME1PcDYxSkgrOGZ6RDA2TFZXKythVkZIcHpRdHhFVVpSZ3hZWk9QbHJaMFMyVy92N2UwUkQrOEkzbjBBNjFrTGFTNUI2ZjByb3ZERnZJK3VSUkljSWVYWWRkbzVJL2xSTFlJMmNqMWEzUlVSVVVZVlJnRDBGWEIwcXJFZUtueldKMERYYkFyekx4RHFrRGF4ZE1qRndDRjRIY0RCL1d2U1pHNHJ5RHhMQ3R2cnQ0aThMdjNEOFJtbWttZEZDYmhLNktVczh0NU1xRGdFOEQwOTYxWUlsZ2lWRjZEdjYxUzArMzh0UE9jZk13NDloVnRYODhrTDl3SGsrdFp5ZlJIc1VFOTN1eXdEMFBhbHpUYU0xbWRRa3NubHhzM3AwSHFhYkd1eU1BOGs4aytwcHJIekp3blpQbVAxN1ZKVkVidTVtNnE1S0pFdlZqVExhSFRZWGY3YXNqbENBRmpmQjZmVCt0VHVubmFrQ2Z1eExuOGF6Mnk4NzQ3c3gvTE5iMDRjNnRleDVHT2RsZnpOVFViKzJXNnRrczFJc0lvOEJTTUJnMlF4NXJHMVlIWkdOeFBsRXhzTzJmVWZVVmN0WGhmeWx1SXk0aFpwTnE5WFhHU3Y1alAwelRicUZidXlqdkVHQklvU1ZjZmNZY0EvUTR4VlF0VGx5L2llWS9lVnpGdHp5Vk5keDRJbi80bmx1cDZpTjEvVE5jUEpETGJUYlpFS09BRGc5d2E2ZndqZExGcjFreDZNNVQ4eGovQ3RwYkNSN0xHMVIyYmlXV2Vmc3piRlBzdkg4ODFESlA1U0tvNWtjN1VVZHpWdUNNUXdwR3ZSUml1WTBKNk0wbmFqTkZ3RnpSbW1GcVlaUXZKSUE5NkFKc2lselVQbUNsRDBBUzBVd05UcUFGelNFMFpwTTBBTWMxNTlyQ2kzdkNUd0VsSS9BNXIwRnE0WHhURHRubVByaHFjZHhkREplVU5JaWpzNi9ybXRudzhwbnVvTW5QekZ2eUpybmdUOHJZUEd3L29hNnZ3bkJqRE1PVmpINW1tOWhJNjlhZUtqWHBUczFCVmgyYUNhVE5OTENtQStrelVaZW0rWlFCS1dwckhpbWI2VW1rQlR2WUk3bTNraGtHVWtVcVFmZXZFZFZ0SHNyNmEza0h6UnNWTmU2U0Rpdkx2SHRrSWRXUzRVY1RKay9VY2Y0VnBUZXBFMW9jVjNxd29EYzk2WnR5YW1RQWMxMEhPYWVsVzVsYVFiaXFZRzdIZXRkN0tKb1ZqWEtoVzNBanJtczNTSlI1VGhGTE94L0FENjFxeTNFZHVtNlZ3djlhNUtzbTVhSHJZZW5GUXV5aGRRVzl1eXl6TkpNM1JFWTV6V1NQTHZ0WENFYkltNEFVZEs2QUo5cElra0EyamxWL3hxdW1uaE5STjFrWTdESHRVcWR0eTUwM0xiWXBhakNJQXFESlhIeWtuUDRVL1R2M1c0OGpqRlM2dGpFUkl6Z21vSXBNeGs5NjJwdHRhbkJpSXFNcklXYy9JU09SVklINWdUMnFaeWNZcXN4NE5XakFTZVRNbTRjY1ZVZmcwNlVra0EwdzhrKzFNWmJzOHlTeG9PNXJUdUpHWXlESkNxY0FWUzBpUE4yQ2Y0Um1yOXd3TUJPMExrOENrOTdFbVc3Zk9hS2hsYjk0YUtzQ0JBWlpjbnFUVitWUG1qQ2NIN3Y0VldzMS9lNTdLS3VMekt4OU9CV1RLWThrUm9UMEFGVXlydElXWUx1UFluclV0eEpncW5VZFcrbFI0eTViQlgwT2FGb3JpYTBCRmtaeVRuUHBuRmRyNEpqemZ6U0U1S1JBWitwLyt0WEdvNmxDRkpERThjWnJzL0EyUTk1dTY0UWZ6cFBZS2E5NDc2TThWS1c0cXZHYWtMVmtkSXlWc0FrMTVUcXJMZjZ2YzNzZzJRRnZsQlAzZ0JnVjZiZVRwRGJ5U3V3Q29wWWsxNUE3UzNjd1hKeDZkaFRXeDA0ZExtMVZ5eDVyM2tubHg1V0lmZVByV2dpaEZDcU1BZEJVVU1Td3hoRjZDcFJXTFo3ZE9MV3IzSFpwR1lLcEo2RGswWnFLYjV3SS83eDUrbEpHamRrTEFEc0xuN3puY2Y2VkpTQ2dtZ1NWbFlpeDVZa2M5eVdOWThKL2VaLzJXUDZHdE84ZmJheWZURlo5bEVaYmp5eDNqYitWZG1IWFU4WE01V3NoK21zRjFHRmp5RkRNZm9GTlNhYzVsMHRZYy9la2VIL3ZwUXkvK1BMVldBbUw3US9RcEEvNW41ZjYwbGhJZjdOdWRwdzBVMFVnUHAxSCtGVFdWNVA1SG5RZWhxYXZGSGQrRmJhNzJqejdXWHlXYnVVWVpBL0ROWTJtWEJ0N2lPUUhCamNPUHdOWGI3VUZHbVN4S1AzZDA2dnNCKzR5NTNENmNnaXM2MWorYmNpNXlPaE5hcDNFOUQyM1MzTjIzMjV4Z09NUXFmNFU5ZnFldjVWc0tlS3h0RHdOSXN3cmJoNUs4bnZ4V3Nwcm5lNXBZbXpUU2FUTk1ZMGdHeXlyR3JNeEFBR1NUMnJ6ZlYvRWwvcitvalN0SVIyU1J0aUxHUG1sUDlCWFMrTXJ0N2J3NWRNaElac0prZWhQTmVhZUdmRVVuaHJ4SGE2dEhFc3hnWTVqSnh1VWpCR2V4d2ExcHh2cXlaTTdHYlZQRXZnNHdRYTlZdVlwQis3WnlDU0IyRERnL1ExdFdQalhSN3hSbTU4bC83c294K3ZTdVYrSW54SWo4WjI5bmEyMWk5dEJic1pDWkdCWm1JeDI2Q3VDU1U3dXRXNEprOHpQb2ExdllMcE44RXlTTDZvMmF0cTFjVDhQN2xwZEEydC95emxaUjlPdjlhN0pXeUt3YXM3R2kySmMwRTAzTkdSU0FScTVieEpHR25qSkdReVlQNTExQk5jNzRpWDVZbStvcGdjMnFBSEdLNnJ3N0h0dDVIOVd4K1ZjeUJ6WFhhTW16VDQvOXJKcHNFalZXbjVxTVVwUEZTQUZxamVRS0tSMndLNWJ3bmFXZmkzeHBxRnJmM0V3dElVTFIyNnpGZk1JT1BYOGFxSzVtSnV4b2FwNG4wM1RGUG4zS2wvOEFubW56TWZ3cmk3ajRoelRYOFpqZzIyaXRrcHUrWnZxZjZWVytKK2lhZjRjOFZOWmFaSXhoYUZaR2padHhqWTU0eitBUDQxd3drTzZ0VkJFdVRQb0hUZFJnMUd6anVyZDkwYmpJOXZZMW9BNUZlYWZEaStjbTZzMkpLZ0NSUjZIb2E5SGphc3BLenNVbmREbjZWeFBqNjI4elRvSlFNN0pNRSt4SC93QmF1MWFzcldMRWFocDA5c2VONjRCOUQyTktMczdqYXVqeGNydFBKNEZQREJvMklPUlJlV3oyOXpKRk1Dcm94REQwTkVFWG1NcVlHV1lMeFhUZlE1K1hXeGJqMVdSTGRJWVl4SHRVQXQxSnFzOHJTTVdkaXpIdWFZeUVTT2NmS0RpbVZra3VoM1hsYXpMVU56TkNmM1VqRDI3SDhLMjJubmg4dFhDT1g5UGw1eG1zZlRvZk92RUIrNnZ6R3RIVXBkbDFhZjcvQVA4QVdyS2FUZGphbkpxTFpUdXBFdUZFaUxLcmI4WVk1RktpL0tlYVIxMnJNUFNZVWdmYU1HdFliSEhpTnhYR1Z6MHFySzFYRmtBVXFPamRjMVVtWG5pck9jcVNNQ3kvclVlZVRqdlNrWWxLMVBZd0dXNDVHVlhyVFFOMlZ6UTBnWTg1L1JhbXUyM0tPNTZVMVFiWXRFb3dHUFgxcDZ4aG5VQjE2SElKNW81YnU1bnpxeGp1cmIyNDcrbEZidmtiZU1paXFKOW9ZbHB0U0lzeEF5ZTlUTWpQdXlkbzdBSDlheTl4SlVFOEN0Um54QVQvQUxOWk02R1F4a3lLN01PVCtncGlNU09UOTNwVThPVmpaUmpHTTV6MXFHSWJpUVBYTmFEYUxNUUVUckxJclk3SHRYYWVEbUJudkNPTWhDZjFyaCtWVGE0WVo2YzhWMXZncVFmYUxsUU1aUlQxOXpXTTB4eFdwMzBaNHA3TnhWYU51S2VXNHJNMVJ6bmpPV1grem9vSXlSNXNtR0E3Z0ROY2pGQ3NLNC9pUFUxMVhpbHlXdGx6L2VQOHE1a25tcGsraDYyQnBybHVPRk96VVlOS0RXWjZDSktZQjg1WS9RVXU2a3pRTWRTRTBacHBQRkFNcDZpK0xjTC9BSG1BcVBTT2I1ajZSbitZcVBVNVAzc1Vmc1RUdE1iWWJtVCs3SFhmaDFaSHp1WXk1cWpSVXVYeERkc1A0bVZQMUovcFROTG5TSTNIbWd0QzZCSkZIWEJQVWU0T0RUTG83YkpCM2VWaitRQS9xYWdzOHMwaURxeVp4NjRPZjhhVTBtbmM1VnBZZmZJWXJneE5nbU1rRWp2NzFlMHVONUpvVWlYYzc0VlI2bnBWait6MzFvMnh0Vlg3VVI1Y2lrNDNZSERma0s3Znd2NFdHbU10MWNrTmM0NFFkRS94TlNwTzJ1NVZ0VHFOUGdGclp3d0RwR2dYOGhWOWVsUUlNQ3BSV1RMSk0wMXVSU1pvSnBBWW5pVFQyMUxSYm0yUVpkbHluMUhJcnhLZU4wZGxZRU1EZ2c5algwRTR5SzVQeEI0TnRkV2thNGhieUxsdXBBeXJmVVZwQ1Z0Q1pLNTVBY21wWVl5U0s3QS9EN1ZQTXdIdHl1ZnZiai9oWFI2RDRIdDlPblc0dTNGeE12S3JqNVZQcjcxbzVwRUtMTlR3YnByNmJvVUtTakVrcE1qQTlzOUIrVmRPblNvRVhBcVljQ3NHN3MwU3NTWnBNMG1hVE5JWXBOWXV2cm0wUmp3RmJuOHEyQ2F6YnNMZTNBdDJBYUtQRFNEMVBZZjFvUnBUZzV5c2ptRWlsZGZNV0NVeC93QjdZY1YyRmh0RmxEc1lNTm81Rk53QitGUlJIN0xkaFJ4RE5uanNyLzhBMS82VlRPbXJoZVNOMGFRTkJOTkRVRTFKeFdJcFRYaUdyRzQwN1dibFZkNHBVa2JESXhVOG4xRmUzdlhJZUt2Q3E2eC9wRnVRbDJveHowY2UvdlZ3bFppa3JvOG11SjVKcEdlVjJkMk9TekhKUDQxSEd1V3JidVBER3F3eUZHc0ppYzlWWElQNVZxYVA0SXZycVpXdTR6YndBL051KzhmWUN0dVpHZG1iWHc2c0hSTG05WVlWOFJvZlhISnIwTkRWQ3l0SXJPM2p0NEVDUm9NQUNycTF6eWQzYzBpcklrSjRxR1FWSm1vMzVwRE9DOGE2VUZaZFNqalU1K1NUanYyUDlLNWJUb3kxOHVWQTJndHgzN1Y2dHFOcWw3WnpXOGcrV1JTcHJ6aXp0V3RycWFOODdrK1VnOWptcTV2ZGFIVGhlYUkwc2hOYU9EOTRrNCt1YXlHUXF4QkdDSzZpTkFpWTl6VldiVDQ1Wi9NSkl6MUhyV2NhbG5xZHM2TjByRlcwaWt0N1B6Z21jbmN5NXdTbzdDcUY3ZUxQSXJvcFZWWXNvSnpnWjRHYTZNZ0JNWTR4MHJsNzJOWXA1SXg5d05rTjZEMHJTbkxtZXBsVlRpbFkwYmc4VEVkQ1VhcXVTemM5S25NRHJwaGRtTEZrQkdUMDU0Rk5WQVZMZmxWd09hdnVtTnp3RDZVMXprVk5GQ1hrQzQ0NjFETU1NUU9nTldjNW56OFM1cXpwMGpCMjJuQk5SemdNb0I2am1rc1dFYk1lYXBFeTJOb29mTDNsaWVlbFJxNFE0MnJrOUNlMVJ0ZkVLTm44cVpFNmhpWkFHVW5rMHpHejZseEpXSXlIeHowb3BqU1FCc0NIajYwVVhGWTVzRExpdENmQ1c1VWNuR0I3MW5pdElBYnQzZkdLeVoxTXIyOHVEODNLbnI3aXBvV2hFemJkNWp6aFNSeitOVkhBU1poZzR6eGlyVU0wWXlUR3B6NmNFVlpXNWJFVURRc29rWW50dTRBTmJIZytReDZzeUhqZEVSOWNFVms0aktxNWpmYmpxRFYzUTVUSHJkc2VkckVyays0cVpiRFc1NlRHMVNGcXF4dnhVaGJpc0dhbzV6eFEzNysyOU5yL0FOSzUwbm11aDhURG0yZnRsaCtuL3dCYXVjSnFKSHNZTis0T3pTZzB6TkxtcE95NC9ORk16Um1rTzQvT0thVFNFMDBtbUtVakYxQ1hkcVArNkF0V2JkdHRqZEVkV0tyVmU5alVyRmRSOUhkbGYyWUgvREZYdFBnTnhDc1lPTjh4L0FBY244Qm11K2swb1hmUStaeExicU45MlpXcEswUnRvbTRJajNFZjd4Si9saW9iYnpFa1dhTTRaRGxUNzFQcUV3dmRVbWxVNGozWVgyVWNDclZ2WlNPQVNQTFR0bnFham1TamRtYld1aDEzaENGVHFMU2lQQ21FeUljZE54NUg0WUlydll4a2RLNUx3aENHRXpNeE1xWVQyMmtkZnJrVjIwRnV4SFNzYnRtaTBFVWNVN21yU1dqZWxQOEFzWjlLTER1VXMwWnEyMXF3N1ZFMEJIYWl3WEs1Tk1JelV4allVM1lmU2tCRHNwd1htcE5oOUtBcDlLQUJha0FORzFZMDN5TnRYcCtOWDdlek1zWWNLd3oyWVlOTks0WEtPMDBoRmE0MDg0NlVoMDl2U255c1Z6RW1jUlJQSTNSUVNmd3FuYXhsTGRXYjc4bnp1ZmMxdlQ2V1pZM2pJT0hVZy9qWFAzVGFqbzdJMXpBclJodHFURG94N1o5S0ZGblhoWnhUMUxYbHZqSVJzZlNxMTJDYlp5djMwK2RmcU9hWTNpbTV4Z1JMbjNxdmJIVU5idVhpaFpZeGpNamhlRkIvclZXTzJkU0tpN214RTRralYxNk1BUlVtS3RRYVo1RUtSS0R0UlFvL0NwaFl0NlZIS2VTMmpNWmVLaWRhMkRZTmpwVkM3V0sxY0xNMndOMFp1Rko5TTBjcE55aVU5cUFnSGFsYTV0OTJGZmVmOWdGdjVVaXlzeCtTMnVHLzRCaitkRm1Na1VZcDRGQ1IzVGZkc24vRjFGV1V0cjNHZnNPZisyd281V0s1QUVKb2FJbnRXeGIyRHZHR2tqOHR1NjV6ajhhbi9zNzJwOGdjeHpFc1o2WXJpdFloV1BWNTJVWUxLcGI2NHIxV1hUUmpwWG0vaWlIeU5kblRIOENmeXFKcXlOOFBySXdxTTB4M0M1SjZVRndGem5qMXJJOUM0anlxcFZTZVdPQlhPYXJDa04ydTNPTWJqazU3MW9Sei9hZFJCSDNWQnhWVFZ1YndaL3VDdGFhYVp5MVdtbWFWdmlmVDRsSjRLQ2hMZFpiWWNnTW1SOWFacHB6cDhYc01VcUNRenl3cTJBeHo5MG5yVndmdk5HRmVONmFZd2dvYytsVkpQbno2MXBYZGhjV3dYZUQ4M3FLem5VcVNhMVJ3bFNmZ1VscXF1ajR5Q1BTbjNRM0tNRHJUYlllVzIzMTYxU0ZMWXVSMmpEQlBDdDBwcHRaSGtZSUNWemdtbkdkbUs4OUtzUnloY2x1TTl6VE1tMlV0N3A4dU9sRlczaURrTnM2aWlnTG5PZzFwb2NvdjByTHpWeTFmY2hVOVIvS3MyZERKdnMvbnM2cVBtMjdsL0NxdTBwSUY2SG9jMWZpa01VeVNnWjJuT1BVZDZtdmJSTG1JM1ZxZDJQdkwzb1VyYU1FSkUwaXFHVWIwWGdnSGcxSlp5bGIrR2JBR0pGUEhibXMyMllya2JtQlBwVmxaR083REg4ZXRObEhxRWI4Vk51NHJNc0xrWEZuREtEOTlBZjBxM3ZyRTFNM3hINWY5bTcyT0NraWxmeDQvclhLazgxcmVNTG5GbkJFRDk1OXgvQ3NYZGtBMU0xb2owc0ZMUm9rcGMxR0RUczFtZWltT3pRR3B1YWd0MzNQTTMrM2lpd25LelNMT2FnbGxLTTQ3Qk4xUzVxamZ1VlZzZDBJL1VWVVZkbWRhVm8zSWRQUVhYbVdMbkhuaktFOXBCMC9QcFZ5Ulo5RzBwdk9BUzZteWlLRGtvcCs4ZnhyRjNzbnpLU0dYa0VkalUxM2V6WDBwbm5iYzVHUFlEMnJYbGszbzlPcDRkVzE3OVNUVGJlUHpTMG1DVkdjZWxhSXZJZytCbGgzSUhGWjFoR0oyWU1TVUE2QTlhMzQ5T3RKN0RNUTh1YVBsbUhwbjArbFp5YTV0U0V0TkR2dkFWZ2sybnkzUTU4eVRBUHNvL3dEcm12UWJleFVEcFhIK0FuV0t5bnMxajJ4Mjh6TEdlN0RQVS9yWGV4a1lyZUtTSmJHcmFvTzFPK3pSK2xTNXBkMVhZUldhMFU5cXFYTm00R0lZUTVQZG13QldwbWpJb3NGem4yMGk2ZjcwNlIrMGFaL1UxSC9ZSlAzcm00Yi9BSUhqK1FybytLVEFwY3FDNXpuL0FBajhQY3luNnl0L2pTSHcvYmdaSWNBY2srWTMrTmRJUUtxYWlVRmhPck9xYm8yVWJqakpJbzVRdVltbmFERk93dTJrblVFNWhVU241VjllZTVyZGhzcElzYmJwMkhwSW9iOWVLcDJHcGk3dFl6WjIwakFEYVRJTmdVamdqbm45S3Z3L2F0KzZaNGd2OXhGUDh6VHNGeTFzWDBvTVk5S1RkUVhvRU5NSytsUlRXa054QzBNMGFTUnNNTXJESU5TN3FobXU0b1JsM0FQcFFNd1g4TGFNdXB3b0xRN1dqZGl2bU5qSUsrL3ZXNWJXRnRhUWlLM2hTS01jN1ZGWkxhdkcyc3hmdXp0V0Z1ZnF3L3dyYWluU1pkMGJBajJvS2NtOXh3aFgwcGZKVDBwZDFMdW9zU1U1cmU1bGtaVmtTR0xzVkdXUDU4Q3FzdWgyVWluem92dEJJd1dtTzhuODYwSjR6S0FGbWtpeDNRam1xVnhHMXRDOHo2aE9xSU1uSVUvMG9zQm4yMWg1Rnk5a2ZtUlZEeEh1RnpqQitsWGswOWZTb0xTeTFBRjdwN3dDYVVES3ZFRHRVZEJ4ajE1OTZ0aVRVSXg4MFVFdis0NVUva2FWZ3VTSmFLdmFwMWlVZHFxLzJraUhGeEZMQWZWMXl2NWppcktTcEtnZU4xWlQwS25JcDJBbENnZHFRNHB1Nm1scUFFa3hYbFBqZE52aVNZK3NTZnlyMUtScTh3OGVEYnJvYis5QXY2RTFuVVh1blJoOUpISHZnNUI3MWczRWswTFBCdk96UFQycmRZODFsNm5Ga0xLQjA0Tll3ZXAyVkUycm9UUzFKa2Qrd0dLcmFxZjlNSCs2S3Y2ZW15MkIvdkhOWjJxSC9UUCtBaXRJL0VZVFZvRi9TbXpaS1BSaVAxcXdDZ3UxTWtyb2hIT0FTT0QzeFZIU0d6YXVQUnpVOXhJeWxIaloxS3RnbE90SmFTSm43MUk2V2Q3VytqWm81VmtDcUJ3ZjZkcTV1NmoydVk4Vm9XalNCQWZQRXFzTWc3UURVTjVFWkdhUWNnRHRXaTBQT1JrU3B1UXFNNUhwVlZTdzZqb2F0eUhZeDVxa3hJa1BPY2lxS0xURnBQbjNLUG9NVkxFTngzZk4wNmptc3hKSFZ6alAwclF0YmhWRzdwN1U3aWNVd2VabGRnb08zUEgwb3E0THVFakpIUDBvbzVpZVZITWlyRnNJMkhURGp2bnJWYk5DdHRiMDU2MGpWbWp0WWZkYy93REF1YVZMaDRaQXdZeHYySTVCcUdHY053M1gxcVYxM0FZNmc1RlNJU1Iza2Nza2V6SnljZE0rMVRtVU82Zkl5cXE0eU1aSjcxQjVtUHZncjc5cVVTcG43NG9ZSFQrSGRSOHRUYk9TRURmTHU3VjArL2l1QjBtYUVYeUxLUjVjbnlFNTZIc2E3ZUtNcEdGTDdzZENldEpvMWk5RGt2RmM1azFFSjJqVEg0bm1xMFQ3b2tQcUJVZXN6ZWRjeXlqK0tRNCtnNEZOdFd6YnA5S2lleDZlRjkxMkxRTk95S2lCcGMxbFk3dVlTZVh5b2kxUldKUGtaN2xpYWp2M0F0L3F3RlMydkZzbnVNMVZ0REhtdlV0NUZnbXM3VW13RTk4MWV6VkhVdVVqUHVhY054VjM3ck11UnNMK05JamwzVU5qQnBzeCtZQ2lJRXlLUjBCNTlxNlV2ZFBHcVAzalF0Wi9JV1RBK1luQXE3WlhWd0p3STNKYVQ1TUh2bmlxdHhhZVNQTWp5eTQ1SDlhdGFPV1RVSWJnakVjVGc4OTZ3c25xTFU5bDBTVmJlK2pUZGdTUkJmcVYvd0RyR3UyaGZLMTVoTzA4Vm1iaURQbVEvT3VQcHpYYWVIOVUvdERUNG5rQVdZTGlSZmZ2V2tRWjBRYWwzVlhXUVU3Y0swSkp0MUx1cUhQdlJ1d01rMEFUN2hWZWU3aXR3TjdmTWZ1cUJsbStncW0xek5jbmJhWUNad1oySEgvQVIzK3ZTcG9MYU9BbGhscEcrOUl4eXpmalFJWGZkM0E0eGJvZTVHNS84Qit0TEhad1J2NWhVeVNmMzVEdVAvMXFselVWeGNwYlJiNUNldUFCeVdQb0I2MERJN21FUWw3cUdWWVh4bVRmOXgvci9qVldMVXBid2haRWV5alA4YjlaUDkwOUFQcnpVcVFQY3VKcnNjRGxJZW9YM1BxZjVWY1lLd0tzQVFleG9BVVR4UlJnZVl1MERBSmJOVnA5WHQ0bEpERno2QVZETHBOcEkyVkR4RTlmTGJBL0xwVldiUUxLYUo0NVdua0RESE1wR1B5eFNBeDlZOGF4V3VZMWJNbmFLTDVtUDE5S3VhRkErdDZiRmYzRTd4ckpuOXluQkdEakJhc0NUd1UybnlzOENHNWh6bmdnUCtQcitGZEY0UWtkYks2dFhqYUl3M0RiVWNZTzA0SU9Qem9SYlM1YnBrN2FIYXZxcmlOcFkyRnV2ekJ5VGtzZXVmcFdScStwVGVHTG1BVHVaRWx6dGVKVGtBZjNscnFJbXpxbHdmU09NZjhBb1ZjeDRsdG4xSFhFZ1NDV1V4MjR3VUhBSlk5VDBIU2hreFYzcWEybCtLYlMvalVpVkd6M1UvekhhdHhKNDVGM0l3WWVvTmNUcEhndUtHNkYzZmJTNHp0alE4ZjhDUGV0OWRJV0wvajN1N2lJZW00Ti9PZ0hhK2hldjdpVzNpODVKWWxWZXF5S1R1OWdSem44NnpvN3g3aTRqbDFPRjdSRjVpamZsU2Y3eGIxOWowcTVEYUpHd2tsa2VlVWRIay9oK2c2Q3JKd3dLa0FnOVFhWWlVTUNNZ2dnOUNLWGRXYWJSN2ZMV1RoTThtSitVUDA5UHdwMFYrR2tFVXlHQ1k5RmJvMzBQUTBBWHlhcXRad2x5OFlNTG4rS003ZnpIUTFKdW8zVUFPajNxZ1YzM3NQNHNZelRpMVJicVJtb0FKSHJ6UDRqa0xlMmpnamQ1UjQrakN2UkpIOTY4ZjhBSFY0YnJ4Uk1nT1VoaEVYNDlUV2M5amFsOFJrbGhtbVNLc2lsV0dRZXRSUnliNGtiUFVVL05jK3gzM3VLQUVVS09BT0t3OVRPYjAreWl0a21zZTlReVhweDN3S3VuOFJoWDBpVGFRZjNjby8yczFZbWxDR1FiZ0NDR0ZTaUdIVDdFYlIrOGs5ZXRaVXJicENhdmx2SzV6ZTM5M2xzYVVkNml6L0tXMmQrS25rMVJSSHRoVGx1ckdzZVBwejBwNlRiQXloZXBHQ2UxVlk1ckVkeElYUG1IdWFyYjhHcEptd1NLaFVibXpWSVpQRXlzUmdaYkhhcnNHMGc1WEdLclFLcXJucWZXclVZQXlPdWFBSUpkdm1INVJSVFppZk5ORklabFVVK1NKbytUeXZxS1pUQUJrSDJxWkxoMUdEeVBlb2FVQ2dDd2Jva2ZkRlFsc25JR0I2VTNGS0VQcFJZQ1JHMm4wcnZ0UDFVWFdpdk96RHpJMElmNmdWd2tOdVpEMXdCVjZOemFvNkk1Q3lBYng2ME1hZGhibE44S2ZNQnQ2MUFzN3hJRUdPTzlKTEtXR08yYWdadTVxYkkxZGVWN3JRcy9icFBhcFV1bUlCT09hemdja21yY0lHQVNNMGNxRjlZcWR5YVRFNVZYREFBOXF1QUxIR0F2WVZXUVpZSG5OV1pJeXFaOWFMTFlGWHFKM3VWamRBTmdyK1ZRM2tpeXhydDZnMHlZWWFvUzNCb1VGdWFmVzV0V2VwVG1Iei9BSVZKYi9kYXB5cVNINWhUUkQ1VGNFa0d0WXV4enlsZDNMVnZjdkZoZnZKNmR4WFErSExWZFoxaUt6d3dqd1dmakJJSGF1ZXMxM1hLWjZEay9oWGRmRFdFVGExZDNKSDNJZVBxemY4QTFxVHByY0ZKN0hvZHZwcWhkcFVZeGpGUlR3dnBWMGx4RDhzTDRWc2RGYnQrQkhGYktZRkZ4RkhjMjd3eXJ1UnhoaFNzVVB0TDVMbEFRY09PcTFiRWdQUTVyaEpyeDlJdjQ3UzRkbGtZL3VwZTBnN2ZqVjlOWGtWeEl2REg3dzdONzBYdHVGanJ3OUc3SXdlUWF4YmJXWVpjQ1Q1Ry9TdEZabFlaVmdSNmloTVZpMEd3TUFZSFlVYjZnMzB1L3dCNllENXAxZ2lhUnpoVkZWN2VONUpmdE53UDNtUGtUdEdQOGZVMUxrSHJ6UzdxQUp0MUx1cUhkUnVvQWwzVTBuTk1MVW02Z0I1cXZOWjI5eElIa1RMZ1lEQWtIOHhUeTlKdnBBUWYyYmE3MmI5N2xzYnYzcmM0NmQ2bmh0NGJjRllrMjU2ODVKcE45S0hwZ1NnNHBjMUZ1cGQxQXlUTkdhajMwbStnUkp1cU9XT09lSXh5b0hROVFhUXRUUzFBRUc2YXlIOFUwQTllWFQvNG9mclZwSmxkRmREbFdHUWFpTDAweUFkS0JrNWtxTnBLcFhGOURicm1TUUQyNzFqM2ZpVzJnaDN0d2M0K1k0QS9HazJnc2FHczZySHBtblMzVGpkc0h5cVA0bTdDdkhkVGFXVzdlU2JBbFliMng2bkovcldscm5pTzUxSzZaMDNOREQweDkzUFFuK2xjNDF3MHl6eUZpVzlTYzlxNTVTY21iVW5HOXVvNnlmZGJMN0Vpck9henRPYjVaQjdpcnVhbHJVNm9QM1I1TlV3RU44VEo5d0VFZ2RUVThjbm1LU1BVaXE0S3BjczVHVG5wVjA5ekhFUzkwZnFWeVpwVjQyZ2RLekdZMVpuWXlTWlBXcTVYTFlyVkhDU3J5Rlhtbk9nWGRsc0VaNEk1b1FGbjQ2MURNY1NrWno5YUFJWkRuclNSREdhVnp6U0oxcGdYYmRjbjZETldsR0JWVzJiYVZKNlo1cTNrRU1mYWt3TStSdjNqZldpaHg4eG9vR1ZVbUtrazRJSTVCSEZOMlJPK1FTcW5zT3hybzV0QnNueUlKWkZQYmNRd3JDa3NuaWxrakpHNURnMU1aeGxzUW5jZzhsZzJBUitOYTFwYVc2MlRTU3hDU1J1MmVnck1DU0JncEdjbmpGYVFrOHFNSUNlblB2VmxGUmdpa2xWQUhwVVRISnA4aHlTZldtRG1nQ2VNN0lpZTlNM2RjbWx6aFFEMHFKalFBTjFxTjhVOG5KcGpVQUlvNUZYSXV3cW10WElPZURRQm9XcWd0aXJGeU9BbzZWRGFFQjhIMHF6ZXY4NlpHUGw0cVFNVzZKRFlxb1R4VnE2WUdWcXFaNU5XZ0h4ODk2bGZqRlJSOWVLZko5N21nQ3hadGljKzZtdlFQaHBMRkREZXZKSXFsaWlqSnhuQUovclhtOERZbFExMS9oTTRzSkc5WlA2Q3FiMEhGYW5yOGQxRVJ4SW41MDVyeUJSektnLzRGWERSemtER2FsOCtzK1kxc2JPdU5wK3BXaGhrYmRJcDNSdUZ6dGFzQjdoclY5ckJtZ3dNU2RTdjE5dmVwR2x6VGMwbTdna1dJN2dNb1pXREtlaEJxM0JmU3hIS1NNUHhyRU52c1l2YnY1VEU1STZxZnFLUVhqeGNUeGxmOXRlVi93RHJVaG5YUWE2NHdKVkRlNDROYVVXcTIwdi9BQzAybjBhdUpqdUZkY293WWVvTlNpY2ltbXhXTzdXZFdHVllFZXhwNGtIclhESmRNdlJpUG9hdXdheFBIakw3aDZOVmN3dVU2NE9EUzc2dzROYmhrd0pBVVByMnJRUzRTUVpSZ3c5alR1aFdMaGVxbHhxRVVCSUpMTU93cDNtQ3E5emJ4WEErWVliKzhLR0NLVSt0U243aWhmZnJWS1RXYmtaSmx3UHdwMTFwczZLeGlBbDlBRGdtc0s2MC9VSldDdkMzUE9BTXF2MTlUVTJaV2hvcDRubVkvSSs3bnVBT1A3MzBxd3ZpQzV1Z3NVQkc1eGt0dDVVZXYxOUt4bzlEdTVUNWFSbFZKeXp5ZnhuMzloNlYwK21hWERwOFk1TWtuVXUzclRTRmMxTFJwUmJyNXArYkhBOUJVKytxY3R3c0tGM1lLUGVzaTUxdGprUWphUFU5YWJkZ3RjNkx6YWI1bzlhNDE5Um1KNWxiODZpYStrUC9BQzBiODZYTUhLZHFaMUhWaCtkUVNYOEVZK2FaUitOY1kxMngvaVA1MUUxeWZXbHpENVRxcDlkZ1FFSUM1L0lWazNPdHp5NUFiWVBSYXdMbS9pdDFMVFNxZzl6V0RmZUpWMmxiVVpQOTl1bjRDazJHaU9sdXRRV05HbGxrd281SkpybWJxNlhWL05MeWlLM2pYS2h1cmRPM3JXQTE1Y3p1eGFSNU54enpUR0xJUmx2TVlqb0c2ZTFaenU5RVp5bGZSR3FiMkxhMFVMS2lFNEp4a24vNjFVempaY1lJeGs5UHBVS1JxeW82Z00vUmdUM29pd0xlY0E1RzQ4L2hVS05pNkM5NGJweDVrL0NyenR0VW4wRlVOUFB6eUQyRlQzVDdiZHZmaXFhMU91TDkwUzNmYmFoajdtbXg1SkxrMUdyL0FPalJvTzR5YVVZVkNXUEo2Q3RJcTJweTFwM3NpTWtzeHgrZE5HZndwQnlEU3B5Y2Rxc3hKb3dkMlIxRlFUY2x1NTlhc3g0SEpQSUJxckx0SXlCem5yU0Fyc2MwNUtheHlhZEhUQXZXK0NRQ2NBaXJHY0l4SHBWYUFaL0xpcCtkcEh0U0FwT2ZuTkZKSjk4MFVETzNXNDB1TUdZRmM1NWpQVSsySzVhOWpKdVhrMmJkN0ZnQ2VRS3NyNXVKcmhJVzh3NENBODQ5VFdaTkpLSElrM0J1NE5ZMDRXZWhuRldFSkc0RHA2NDcwVE1DZU8xTWpCYyt3cFppQngzNzF1V1FuazBpOWVLVE9hZkdNbW1NZnkzRklWeDE1TlN3QW1aUmpQUFNuM1FCNUF4ZzR4NlZJaWsvM3VsTVkwOXNnMUc1cGdLZzRxNWJqTlZWcTFCa1VNQzlHT2NqdFZpK09XVWc1K1VWV1E4R3BMMWdRaEhHQlVnWlV3SUpxdDNxelAwcXNPdFdnSkl4azA1L3ZVa2ZyU3Y5NmdDUzNnWm5Rajd2VW4wcmIwaU81dFlubGpabEdja0g3cEgwcURSRWhuVjdkd1RJVHVVZW83MTA2eHFsdUZISy93Q2VhNTZ0ZHhkaVhKb2JiYXZHd0FuSGxONjlSK2RhU1NxNmhsWUVlb09heEh0RkFkMytZK2dvdHJiN01TNk5na2ZRQ285dXJGcXFid2FqZFZFU3VJOGJpV3F0RmRYY2x6dENvSTkyTW1wOXZlOWc5cWEyK2wzY1ZuaTRja0RhR1B0U3RMSytlTVk2ODlLRlg3aDdVc3RERklkd1hhZjd5bkIvU2paTXYzSjIrampOVm9idnFubHQ4bzY0NHEyamdoYy94RFBzSzBWYVBVcFZFTTgyOVgrR0ZoN01SUjlzblQvV1d6WTlVWUduU1hrU1M3VVFjOFpQSUZaVnhxays5bzRZUmtIRzV6eFJHcW1IT2piaHZGbFhLT0Q2anVLdHczc2tSeWpGVDdHdU8zVHkzQm1hVW9Sd0NuRldZOVZ1SVN3a2pFcWp1dkJxbFVUZGdWUk03bUhYSmxBRGhYSDVHcnFhM0EzMzFaVCtkY1ZiYWpIT29iRHB6akRDcHhleGs0RWdKemluN1JKMnVQbVIybjlyV3AvNWFmcFRXMVcxSC9MUS9nSzVCN2tKZ2J4bjB6VFpidElTQTdFSEdjWW85c203Q3VqckgxcTNVZktHWS9TcXN1dXlIT3hBdnVUbXVYKzM3blZVUWtzY2MxTDUrNGdiZ3B6dE9SM3FaVmtnY29vMEo3eVNadHp1V1B2VkdlOVNNNEpMT2VpTHlUVEwyQzVZQllaQUJ3Q1Y2L1dxZ2h1YlF1QmJLUndkd2JsdjhhbU5hTDZncWtTejlwdUdHUmI0K3Jpb1pidWVKU3pwRW9IZHBQOEE2MVU3aTR2Mis1RUkwNCticWFxTlpUU3Z1Y3RJZXhZOTYwNTQ5eTFKUHFTdnJWeXo3WW80OGYzdWFwelg5NUtIOHk1TWE0T0NneG5pcnE2VGNrQmxRK3ZQU2xrMEs0Mkl4QUtsTjVVODFMcXh0dU55amJjNWVSWjVKU0dEczNxMmMxUEZwN1BqREVzQmtydDZWMTFwbzlzeEFkbUJJWEFKendld3EwMmlXNjNJaWpHVlZQbklQWDB6V0VzUXRrY3NwNm5CTUpTMjJOV2JQQU96QnhTeDJlZU9mTnpqRmRYTFlSUlNPcUlTRkczajE5YzFVbDBNSk9vZkJmRzd5MDdqdFRWWkJ6R0MxdTIzS2h0aCtYSkZNYU13Uk9COHdZZE80TmRqRnBNTzFzeCtTVHdvQnlPbmVxeDBXWGVFY0JzODlhYXJSWlVhbG5kSElXT1ZtY0VFZktPRFUxMzg2cWc5Y21wYnVBUTNiZVZKdmJIenNlZ1BvUHBVSFFrWnllNXJvaXI2blI3WDNiRFZVS1BwVEdmSTZVNTM3Q295cDJiaVJqT0tzd0Z6OHZTbkp4MHBvSjI0SFNuZ2NDZ0NSU0FENjlxcU9XQjU0NXE0RktxY3J3UnhWT2RkaEdUblB0UWhrUjYwOUtqelRscGdYYmNrTXVPb3pWZ0hJUDBxdEJudG5nWnF3cEcwNTlLUWltNmpkUlN0OTZpZ1owbDlxYVdnZUtNcXpmd29GNEJybnZMbHVKaThoSmRqa2sxS2trS1pibG1QYzhtbFM2VlpkMk1ack9uRGxXaENWaUNRZVR4M3FvN2xqVTkzY2VmSjhvNHF1UmpGYW9vS2tRR2hZOGpKTlRSb1FNOXFBTE5raDNGam5hdldvcm9yNXA5ZXRYTGFKMnRqaFQ5NzA2MUJQQUdJejFKSXg2MGRRTStRNU9ldFF0eWFsbVF4eUViY0NvdTlBRXNhZktLc1FIcm1xeU1RTWRxc1JEclFCY2o1TlQzMFBrN1Y3NDVxbkVTQ2F1WGNyU0xHeDVVcU9mZnZTQXlKam5pb0JVMDMzalVJRlVnSElUbmluT2ZtNXBxTnNhbk1kM1BlbUErR1Y0M0RJeFZoMElycnRGMWlDUXh4M2dDNFAzajBOYzVwT2x6NnBjbUtFZmRHV1kvd2l0UmRBdUZEYlZMWU9BUjBOYzlaUmVqZXBMdHN6b2xlMk03TjVoWlFmbDlEVmhsdFpRR2pCemc4ZHMxeUNRelJ0Z08yUWVncTVCY1hDbFN6RWozSEZjY3FWdG1RMGRIOW1WWWlBTXV4d01mNTRwQmJyR0NySGQ3aXEwZHd2bC9NTVpPVG5yVW5uZ3B1M0FzZXg5S3lzeVN5SWxTTURHNVJ6bnBqMnF4SUxXUlJ1WFljN2lUeC93RHJyUGphUTljTmc0eDZWcDZYZWFoQXVvdFlYeHR2SnNwTHBoNU1jbm1lV09GK2NISFU4aWlFT2FWbXdTdXlLZVd4OHN4UnNGREx6akhOQ3RESGFveHc0VVlHUjE5VFhUU1grdXo2RHBOekJxMWhidklKeE5KY0cyaWFSbGt3cHc2OGdESTQvR3NYVHI5TERUZkVOL2QyMW5meUgvUmpMSXhJZVNWOXJLdmxrTHMycTUrVUE4Y0hGYmV3V211aFhJWlZ5WU4yN0tEQnk0OWZTczN5Rll1enVBVHlBT2M1cnR2RUYvTG9HbjIwZWl1Mm5scjlsdWtoTzc1eGJ4TVZ5NEp3R1k4Vm4zOGM3K010ZmdzdkQwV3JPdDB6ZVdWbC9kRDJFYkFZSlBldFBZVzB2cVZ5Mk9kZXppaWRBR3hsUWNQeGpJejA5Q0R4VVV4aGhiQ0ZXOVNvcjBEV2JMVTU3TFJwVzhEeDNFMzJKVWxEcmNFeGJYWUtuRFo0WEIrYko1cm1kS3NJRW1uMXJVb283YlNiT2N0TEd1Zm5rQnl0dEdHSlptSndENkRPYUhSYWRyM0RsMU1MZmh6bFdVWjJuSUl3ZlQ2MUtiaUNPM1lFREo5dVRYUzViN2ZxZWthN1BISE5xYXgzbHhKZzdiQzdjbG93eDlBR0N0N01QU3AvRDl0Y2FGRDRpYTZzcm9YOW90dWlpMFdONVUzTzN6SVhWaHRJd2QyT2xEcFhsYm9GdFRrVmJhbTl4eHdBWEdNZlNwWTUvT2xVRGpzTjNQVDYxNklMSnJlWXd4NjVjMjJvMzE4Tmw3ZVdhWEZ3eS9aVWw4c3NjYk51VDBIdFhHMmMrNnoxKzlzOVFpdjR6QTA4c2QvREpITGNvU3A4MGRkcks3akh6WjQ2WU5ONGUzVUhBamdqYU1yS3dCM1BuYjlSeFRKUkFFVlVZdTJTMGpPZjgvbFhha1g5amZhVEZhZUU3clVvN1NDRllkUTg1L25EZ01Ud3BYNUN6YmNuNWNkcTRuVllJTExVdFFzTGY1b3JXN2xpakx0dUpBYzhrOXo2bXM2bEJyVzVMaTBReDNpU1dqcU5va0xFZ2pQM2ZUK1ZNbWVhVzdEUVQvdlhZS0VHZW52NkNtUnh4T3laM0JzNWJhUDVWSnhuYkdvQTV5VDFJck5wTFlWeGtjOXhzV0lnSElPNG5rakhlclZwSElqSnhrWis2NDYxR2krUklBeEpIVTFjamszL0FMeFQwNkROUzJGeDhpU0FMbVRyMkhha0Vpd2tOa2tqb0NPQlRjTXhPVGduMXBoSncyTW50elUyUWkxYTNjUG5nekFna2tFcU9LbU1rVWs3cnZJQkJCUDlhelZPRGhnQUY1RGRqN1ZHOHZ6TXBCSHBVOHR4V05DNWpFb0xSS0FuWDYxUkVxSXcydUZaTXJuMlBhazg0cVVYY3d3dVRqcHhWZHlaRTgwOHNjNEE2R3FTR0xMcUt4QmdYUEI3ZC93ckx2ZGZuK1pZUzBlN3JnOG44YVk4ZHg1eGRyYU1idWpGc2lsa3NqY0ZRendiaWNIQ25qMnJwaEdNZFdXa2tZVHk1Zkdjc1QwcVlXazNrR1ZvbkNIZ05qaXRHYlJvMmtFaG5VODdRcUw2VkpGQVZka2xXU1JkcDhzSzJObzljWXJvZFZXMEtjakdraCt5eTdzQjBHT3Z1S1k0VmtZN2wrWTUyajFyUlR5V25XTzRrQ0x2MjVBM1lwdDlwTFd6c1VkWmw2aGw3aWlNMWV6QkdjdVdZS0J4Vit6dERPK2NaQXF0YjI3eUVsVjVQNlZ0b0VzN2JiSVNvSTVQYzFvNUlxNVV2TFVRUk8rU2R3NDlxeWJrcklnRzNHQjE5NjFtdTRwVktNV0l3ZUtxcmJSWEdmdkp6eDZWS2wzQXh4SG5wVDFXdFJOTGJhVDNxT1d4a2lia2ZsVnFhZXdYSTRHQ3AwNXdRZnBUMU9jNEZSQlN1UVJUMFBTbUJHZXRGT2VQTEUwVUFVZjNtQ1JuSGZGQzdzOEhuMXJxZFpWWXRNbDJBTGtnY1Z5MUVaY3l1SkM0eHdLQjZtbklLMURiUS9aaTJ6bjF5YXB1dzI3R2NNdGdacTlCYnRjU0xHZ08zMXFyYmdianhXL1pnTEZ3TVZEWUZtT0dPSlZRWTRIWDByRHZaUXR3ZGhIeUhnaXJWL05Jc0pBY2pJckpsNnJSRkFSeXY1bWNra21vbGpKUFNwMFVaSEZhdHZER1k4N0JUYnNLNWppTXFSeFVnQlU4VmVualJYSUNnVldjREk0cEozR0ltZW80cTBzWmtoYzdqOGczQWZ6cXNPdFg3RUJoSUNNL0xWQVUzc3dqUnl6Wk1MSDVpdlVWdE5vTmc5bUhSM0xOOHl1dnA5S3gyWnRvWEp3RDBybzdDVjIwOE16RW4xcm5yT1ViTk1sbk9YV2pTdzdtUWgwSFE5S3BmWjVrRzVvMjJudml1M2pSVzNiZ0R4VWJReHNCbEFlYVVLOHJFcVRPZDBtK2V4a2RvM0s1SFRIV3Vsc3RWaXVZM2l5UTJjZ0FZSDFxbGZXbHY4NytVdTdQV3MvVGxIMmpwM3BWSXFjZWQ3bE5KblJreEZjZVd1N09jNHFPUkpQN2lxQ2VBQnhVb1JRK2NDckVhcnNQSGF1SzVtWnpaSStia2lqY0Y2Y0gyclJLTDlsZHRvejYxUVBEVUozRVN4dndjc1QvQURyVjBtODB5MWkxRkwrZThqTnphU1dxK1RiQ1VBT0I4eE80ZE1kUDFyRkhHNnBFSk1lTTFjSFozR21iZDdkZUg3eXgwMjJhKzFKVFpMTXBjNmNDSDh4dzNUek9NWXhUZEoxdXkwWTNjaStkcU1idUZpc0o3WUpITHRBS3l5RTdnbTBrNEM1WTQ3QTFqRVlqTkVkYU90YjNyRlhPZ3U3alE5WHNnaDFDNjArWTZoTmV5cmRXN1Q3aktxaHRyeDlRQ0RqSUI5cXBYdzBqV2RkMWEvbjFTNHNrbnUyZUFKWXlTRjA0K1k3U052VG9heTNZcWVEaW1NVGc4MEt2emJvZDduUTZpdmg2L3ROTHR6NGd2MCt3MjVnSk9uVEVPU3hiUDN1T3VQd3Fsb2o2QnBldFMzTjI5elBGYXFUcDhuMk1sVExqaDJqTFpBQjdaNXh6V1VmdVV2OEFCVGRmVzlndjFOM1N0UzBQVHRRbWx1cnpXYjlic09sNkdzMFFUQitXTEV5NXlEOHdJR1FSeFZOTlVpMHJUOVFzZEl1N3BwN2k4VUc3aUxSQjdlSU50d3dJYkxGaHh4d3RVblZkaWNDb0grVThjVWZXRytnWE9rdGRadDRkWjB1VW04L3MreE0wc2x4Y2d2TmNTeUlWYVJnQ3hBNFZWR1NRQnpXWjRYdUxEVHk4T3NRM0wybHpZL1paRmd4dXlTaDY5aDhweVJ6VkpKSFg1UXhBSzhqMXF6SEdqVzdNVkJPRHpTOXZLNVBPemJUVU5OanVHMHlHN2t0OUpGamQyOGR5WVpDSGxuSUpjSVBtMkRhRUdlVGdudlhQM2tGakRmU3hhWTBrbGxHcXFraktVTWpZRzhoVHlBV3pnSG5GU25vRDZVMGNJMUVxOTFheFY3a1VFTE5JQnV4Ni93Q0ZYTjhjS0FiUWNuUFBmLzYxVjBKMk9jMVhkbUpYazhDc1c3c2tuZVZueXo0SVBiK2xPTnp0aXdxQS9qVmNra0Vab2Y3b0ZPd1dKRE96REp3ZUtjWkpHMmpIQytsVjRTY2Rhc0llV05Ob0Jkelo1T1JRV01tQms4Y0NrejhvcWFQMStsTFlSQklKVitWU0NUeFZkL09DNDI0VmZRMXJ3S3JTTVNNL05VVWlyengxRk5QVWFNbjdRemJSa0FBbms4MUdHa2lrQ2hCdVljZDhlOVdKbFZibGxBQUhwVFI5MHQzeDFyU3lHVkdsbFE3V0JKNmpJNjFXU1M0am5rMkYxamRkcFVlbFhtK2JZeHlUbnJVdHdTckhhY2NWU1l4a1VWdEhiRmxoM3pIc3c2VkRzVHlpc3BiOCtUVnFBOVByVkxVMktsZ0RqbWlLdklFdFNVQnJaQ3NjWGxobHlqdVB2ZTFaMHNGeExPVmtKS2orSWRLWkRJN3dqY3hiQjduMnJYZ1VDMGpmSHpOMVByVjh6aXd2WXpZYlNNTWNrbkh0aXI4RnZFM3l1Y0lUZ25ISzBOOTAweUlrZDZYTTJQY1YwOHR5aGNNRk9BUU90TmxZU01lZUthN0hKNTcxQVJ6K05PTzRFeFJYVWc0M0hyeFdkTGF5STV3TWpybXRLMkdXclNkRk1UY0N0WXZVYVp5eEQ1NlVWZWFOTngrVVVWcGNaLy9aJyxcclxuXHRcdF0sXHJcblx0XHR2aWRlb1NyYzogJ2h0dHBzOi8vZGNsb3VkLWltZy5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2d1aWRlL3VuaWFwcC8lRTclQUMlQUMxJUU4JUFFJUIyJUVGJUJDJTg4dW5pLWFwcCVFNCVCQSVBNyVFNSU5MyU4MSVFNCVCQiU4QiVFNyVCQiU4RCVFRiVCQyU4OS0lMjBEQ2xvdWQlRTUlQUUlOTglRTYlOTYlQjklRTglQTclODYlRTklQTIlOTElRTYlOTUlOTklRTclQTglOEJAMjAxODExMjYubXA0JyxcclxuXHRcdHRpbWU6ICcyMDE5LTA0LTEwIDExOjQzJyxcclxuXHRcdHR5cGU6IDIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNSxcclxuXHRcdHRpdGxlOiAn57un5Zu96YCa5YCS5LiL5ZCO77yM5Y+I5LiA5YWs5Y+45pS+5byD5b+r6YCS5Lia5Yqh77yM5pu+56C4MjDkur/miJjigJzkuInpgJrkuIDovr7igJ0nLFxyXG5cdFx0YXV0aG9yOiAn5YWo55CD5Yqg55uf572RJyxcclxuXHRcdGltYWdlczogWydodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mjg5MjAwNDYwNSwyMTc0NjU5ODY0JmZtPTI2JmdwPTAuanBnJ10sXHJcblx0XHR2aWRlb1NyYzogJ2h0dHBzOi8vZGNsb3VkLWltZy5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2d1aWRlL3VuaWFwcC8lRTclQUMlQUMxJUU4JUFFJUIyJUVGJUJDJTg4dW5pLWFwcCVFNCVCQSVBNyVFNSU5MyU4MSVFNCVCQiU4QiVFNyVCQiU4RCVFRiVCQyU4OS0lMjBEQ2xvdWQlRTUlQUUlOTglRTYlOTYlQjklRTglQTclODYlRTklQTIlOTElRTYlOTUlOTklRTclQTglOEJAMjAxODExMjYubXA0JyxcclxuXHRcdHRpbWU6ICc15YiG6ZKf5YmNJyxcclxuXHRcdHR5cGU6IDMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNixcclxuXHRcdHRpdGxlOiAn5aWU6amw6L2m5Li75ZOt6K+J57u05p2D57ut77ya5Y+M5pa55YaN5qyh5Y2P5ZWG5peg5p6cJyxcclxuXHRcdGF1dGhvcjogJ+eOr+eQg+e9kScsXHJcblx0XHRpbWFnZXM6IFtdLFxyXG5cdFx0dGltZTogJzXliIbpkp/liY0nLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA3LFxyXG5cdFx0dGl0bGU6ICfpnaDot5Hovabmv4Dlj5HmvZzog73vvIzlpZTpqbBQcm/ot5HovabpppbmtYvvvIzmgI7kuYjpgqPkuYjlg4/mhI/lpKfliKnot5Hovaborr7orqEnLFxyXG5cdFx0YXV0aG9yOiAn6L2m5ZOBJyxcclxuXHRcdGltYWdlczogW1xyXG5cdFx0XHQnaHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTIxMzMyMzE1MzQsNDI0MjgxNzYxMCZmbT0xNzMmYXBwPTQ5JmY9SlBFRz93PTIxOCZoPTE0NiZzPTRGQjQyQkM1NUUyQTI2MDc2QjJEMTMwMTAzMDA2MEM2JyxcclxuXHRcdFx0J2h0dHBzOi8vc3MwLmJhaWR1LmNvbS82T05Xc2ppcDBRSVo4dHlobnEvaXQvdT0xMjc2OTM2Njc0LDMwMjE3ODc0ODUmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz00RkIwMkZDNDBCMDAwNjQzMzJBRDQ1MTcwMzAwRDBDNycsXHJcblx0XHRcdCdodHRwczovL3NzMS5iYWlkdS5jb20vNk9OWHNqaXAwUUlaOHR5aG5xL2l0L3U9MTkwOTM1MzMxMCw4NjM4MTY1NDEmZm09MTczJmFwcD00OSZmPUpQRUc/dz0yMTgmaD0xNDYmcz0yNUY2N0U4NDRDMDAyNDQ1NDM3REU4ODEwMzAwRTBEMycsXHJcblx0XHRdLFxyXG5cdFx0dGltZTogJzIwMTktMDQtMTQg77yaMTA6NTgnLFxyXG5cdFx0dHlwZTogMyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA4LFxyXG5cdFx0dGl0bGU6ICfnqIvluo/lkZjmtarmvKvotbfmnaXmnInlpJrlj6/mgJXvvIznnIvlrozov5kz5q615Luj56CB55y8552b5rm/5ram5LqGIScsXHJcblx0XHRhdXRob3I6ICfovablk4EnLFxyXG5cdFx0aW1hZ2VzOiBbXHJcblx0XHRcdCdodHRwOi8vcDMtdHQuYnl0ZWNkbi5jbi9saXN0L3BnYy1pbWFnZS8xNTM5NDk5MzkzNDc4NGFlZWE4MmVmNScsXHJcblx0XHRcdCdodHRwOi8vcDEtdHQuYnl0ZWNkbi5jbi9saXN0L3BnYy1pbWFnZS8xNTM5NDk5MzkzMzg1NDdiN2E2OWNmNicsXHJcblx0XHRcdCdodHRwOi8vcDEtdHQuYnl0ZWNkbi5jbi9saXN0LzUwOWEwMDAyMTFiMjVmMjEwYzc3JyxcclxuXHRcdF0sXHJcblx0XHR0aW1lOiAnMjAxOS0wNC0xNCDvvJoxMDo1OCcsXHJcblx0XHR0eXBlOiAzLFxyXG5cdH0sXHJcbl1cclxuY29uc3QgZXZhTGlzdCA9IFt7XHJcblx0XHRzcmM6ICdodHRwOi8vZ3NzMC5iYWlkdS5jb20vLWZvM2RTYWdfeEk0a2hHa285V1RBbkY2aGh5L3poaWRhby9waWMvaXRlbS83N2M2YTdlZmNlMWI5ZDE2NjMxNzQ3MDVmYmRlYjQ4ZjhkNTQ2NDg2LmpwZycsXHJcblx0XHRuaWNrbmFtZTogJ1JhbnRoIEFsbG5nYWwnLFxyXG5cdFx0dGltZTogJzA5LTIwIDEyOjU0JyxcclxuXHRcdHphbjogJzU0JyxcclxuXHRcdGNvbnRlbnQ6ICfor4TorrrkuI3opoHlpKroi5vliLvvvIzkuI3nrqHku4DkuYjkuqflk4Hpg73kvJrmnInnkZXnlrXvvIzlrqLmnI3kuZ/or7Tkuoblj6/ku6XpgIDotKflubbkuJTllYblrrbmib/mi4Xov5DotLnvvIzmiJHop4nlvpfoh7PlsJHmgIHluqblsLHlj6/ku6Xnu5nkupTmmJ/jgIInXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcmM6ICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0yMzk2MDY4MjUyLDQyNzcwNjI4MzYmZm09MjYmZ3A9MC5qcGcnLFxyXG5cdFx0bmlja25hbWU6ICdSYW50aCBBbGxuZ2FsJyxcclxuXHRcdHRpbWU6ICcwOS0yMCAxMjo1NCcsXHJcblx0XHR6YW46ICc1NCcsXHJcblx0XHRjb250ZW50OiAn5qW85LiK6K+055qE5aW95pyJ6YGT55CG44CCJ1xyXG5cdH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRhYkxpc3QsXHJcblx0bmV3c0xpc3QsXHJcblx0ZXZhTGlzdFxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdmZmNlZDUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3RhYmJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0MGU4ZjBlMlwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaWFwcC95b3VxdS13ZWIvY29tcG9uZW50cy90YWItbnZ1ZS90YWJiYXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi90YWJiYXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03N2ZmY2VkNSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5kcmFnXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIndyYXBcIiwgXCJ0YWItYmFyLXNjcm9sbFwiXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGxcIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNjcm9sbERpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsIHNob3dTY3JvbGxiYXI6IFwiZmFsc2VcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJCYXJzLCBmdW5jdGlvbih0YWJCYXIsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiB0LFxuICAgICAgICAgICAgICAgICAgcmVmOiB0YWJCYXIuaWQgKyB0LFxuICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGFiLWJhci1pdGVtXCIsIFwidGFiLWJhci1zY3JvbGwtd2lkdGhcIl0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoYW5nZSh0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLXRpdGxlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLnRhYkluZGV4ID09PSB0ID8gXCJhY3RpdmVcIiA6IFwiXCJdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYkJhci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wid3JhcFwiLCBcInRhYi1iYXJcIl0gfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKHRhYkJhciwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiB0LFxuICAgICAgICAgICAgICAgIHJlZjogdGFiQmFyLmlkICsgdCxcbiAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGFiLWJhci1pdGVtXCJdLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jaGFuZ2UodClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0YWItYmFyLXRpdGxlXCJdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS50YWJJbmRleCA9PT0gdCA/IFwiYWN0aXZlXCIgOiBcIlwiXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYkJhci5uYW1lKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi90YWJiYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGRpdiB2LWlmPVwiZHJhZ1wiIGNsYXNzPVwid3JhcCB0YWItYmFyLXNjcm9sbFwiPlxyXG5cdFx0XHQ8c2Nyb2xsZXIgY2xhc3M9XCJzY3JvbGxcIiBzY3JvbGxEaXJlY3Rpb249XCJob3Jpem9udGFsXCIgc2hvd1Njcm9sbGJhcj1cImZhbHNlXCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ0YWItYmFyLWl0ZW0gdGFiLWJhci1zY3JvbGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0di1mb3I9XCIodGFiQmFyLCB0KSBpbiB0YWJCYXJzXCJcclxuXHRcdFx0XHRcdDprZXk9XCJ0XCJcclxuXHRcdFx0XHRcdDpyZWY9XCJ0YWJCYXIuaWQgKyB0XCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImNoYW5nZSh0KVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWItYmFyLXRpdGxlXCIgOmNsYXNzPVwiW3RhYkluZGV4ID09PSB0ID8gJ2FjdGl2ZScgOiAnJ11cIj57e1xyXG5cdFx0XHRcdFx0XHR0YWJCYXIubmFtZVxyXG5cdFx0XHRcdFx0fX08L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2Nyb2xsZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwid3JhcCB0YWItYmFyXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cInRhYi1iYXItaXRlbVwiXHJcblx0XHRcdFx0di1mb3I9XCIodGFiQmFyLCB0KSBpbiB0YWJCYXJzXCJcclxuXHRcdFx0XHQ6a2V5PVwidFwiXHJcblx0XHRcdFx0OnJlZj1cInRhYkJhci5pZCArIHRcIlxyXG5cdFx0XHRcdEBjbGljaz1cImNoYW5nZSh0KVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRhYi1iYXItdGl0bGVcIiA6Y2xhc3M9XCJbdGFiSW5kZXggPT09IHQgPyAnYWN0aXZlJyA6ICcnXVwiPnt7XHJcblx0XHRcdFx0XHR0YWJCYXIubmFtZVxyXG5cdFx0XHRcdH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuY29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0ZHJhZzoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0dGFiQmFyczoge1xyXG5cdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0ZGVmYXVsdDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRhYkluZGV4OiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0d2F0Y2g6e1xyXG5cdFx0dGFiSW5kZXgobmV3VmFsKXtcclxuXHRcdFx0dGhpcy5jaGFuZ2UobmV3VmFsKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YXN5bmMgY2hhbmdlKGluZGV4LCBlKSB7XHJcblxyXG5cdFx0XHRsZXQgcmV0ID0ge1xyXG5cdFx0XHRcdGluZGV4OiBpbmRleFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy4kZW1pdCgndGFiQ2hhbmdlJywgcmV0KTtcclxuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLiRyZWZzW3RoaXMudGFiQmFyc1tpbmRleF0uaWQgKyBpbmRleF1bMF1cclxuXHRcdFx0bGV0IGVsU2l6ZSA9IGF3YWl0IHRoaXMuZ2V0RWxTaXplKGVsKTtcclxuXHRcdFx0aWYgKGVsU2l6ZS5sZWZ0ICsgZWxTaXplLndpZHRoID4gNzUwKSB7XHJcblx0XHRcdCAgICBsZXQgaWR4ID0gaW5kZXggLSA0O1xyXG5cdFx0XHQgICAgbGV0IG5ld0VsID0gdGhpcy4kcmVmc1t0aGlzLnRhYkJhcnNbaWR4XS5pZCArIGlkeF1bMF1cclxuXHRcdFx0ICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQobmV3RWwsIHt9KTtcclxuXHRcdFx0ICAgIHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxTaXplLmxlZnQgPCAwKSB7XHJcblx0XHRcdCAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLCB7fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Z2V0RWxTaXplKGVsKSB7IC8v5b6X5Yiw5YWD57Sg55qEc2l6ZVxyXG5cdFx0ICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuXHRcdCAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9tLmdldENvbXBvbmVudFJlY3QoZWwsIG9wdGlvbiA9PiB7XHJcblx0XHQgICAgICAgICAgICByZXMob3B0aW9uLnNpemUpO1xyXG5cdFx0ICAgICAgICB9KVxyXG5cdFx0ICAgIH0pXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4ud3JhcCB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdHdpZHRoOiA3NTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWVlO1xyXG59XHJcbi50YWItYmFyIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdHdpZHRoOiA3NTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi50YWItYmFyLWl0ZW0ge1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhYi1iYXItc2Nyb2xsLXdpZHRoIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcbn1cclxuLnRhYi1iYXItdGl0bGUge1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRsaW5lLWhlaWdodDogOTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6ICMzMDMxMzM7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmFjdGl2ZSB7XHJcblx0Y29sb3I6ICNlYzcwNmI7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWM3MDZiO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vdGFiYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2VlZWVlZVwiXG4gIH0sXG4gIFwidGFiLWJhclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJzY3JvbGxcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ0YWItYmFyLWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiOTBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0YWItYmFyLXNjcm9sbC13aWR0aFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1MFwiXG4gIH0sXG4gIFwidGFiLWJhci10aXRsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI5MFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjkwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMDMxMzNcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCJhY3RpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZWM3MDZiXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYzcwNmJcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI3NTNkZWVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9taXgtbG9hZC1tb3JlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjk0MWVjZTVjXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pYXBwL3lvdXF1LXdlYi9jb21wb25lbnRzL21peC1sb2FkLW1vcmUvbWl4LWxvYWQtbW9yZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNzUzZGVlYSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJtaXgtbG9hZC1tb3JlXCJdLCBvbjogeyBjbGljazogX3ZtLmxvYWRpbmcgfSB9LFxuICAgIFtcbiAgICAgIF92bS5zdGF0dXMgPT0gMVxuICAgICAgICA/IF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgICAgICByZWY6IFwibG9hZGluZ0ljb25cIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtaXgtbG9hZC1tb3JlX19pY29uXCJdLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9zdGF0aWMvbG9hZGluZy5naWZcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1peC1sb2FkLW1vcmVfX3RleHRcIl0sXG4gICAgICAgICAgY2xhc3M6IHsgXCJtaXgtbG9hZC1tb3JlX190ZXh0LS1kaXNhYmxlZFwiOiBfdm0uc3RhdHVzID09PSAyIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHRbX3ZtLnN0YXR1c10pKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwibWl4LWxvYWQtbW9yZVwiIEBjbGljaz1cImxvYWRpbmdcIj5cclxuXHRcdDxpbWFnZSBcclxuXHRcdFx0cmVmPVwibG9hZGluZ0ljb25cIiBcclxuXHRcdFx0Y2xhc3M9XCJtaXgtbG9hZC1tb3JlX19pY29uXCIgXHJcblx0XHRcdHNyYz1cIi9zdGF0aWMvbG9hZGluZy5naWZcIlxyXG5cdFx0XHR2LWlmPVwic3RhdHVzID09IDFcIlxyXG5cdFx0PlxyXG5cdFx0PC9pbWFnZT5cclxuXHRcdDx0ZXh0IGNsYXNzPVwibWl4LWxvYWQtbW9yZV9fdGV4dFwiIDpjbGFzcz1cInsnbWl4LWxvYWQtbW9yZV9fdGV4dC0tZGlzYWJsZWQnOiBzdGF0dXM9PT0yfVwiPnt7dGV4dFtzdGF0dXNdfX08L3RleHQ+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwibWl4LWxvYWQtbW9yZVwiLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c3RhdHVzOiB7XHJcblx0XHRcdFx0Ly8w5Yqg6L295YmN77yMMeWKoOi9veS4re+8jDLmsqHmnInmm7TlpJrkuoZcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdFx0XHQn5LiK5ouJ5pi+56S65pu05aSaJyxcclxuXHRcdFx0XHRcdFx0J+ato+WcqOWKoOi9vS4uJyxcclxuXHRcdFx0XHRcdFx0J+aIkeS5n+aYr+acieW6lee6v+eahH4nXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lm1peC1sb2FkLW1vcmUge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNjB1cHg7XHJcblx0fVxyXG5cclxuXHQubWl4LWxvYWQtbW9yZV9faWNvbiB7XHJcblx0XHR3aWR0aDogMzZ1cHg7XHJcblx0XHRoZWlnaHQ6IDM2dXB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMnVweDtcclxuXHR9XHJcblxyXG5cdC5taXgtbG9hZC1tb3JlX190ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHRjb2xvcjogI2FhYTtcclxuXHR9XHJcblxyXG5cdC5taXgtbG9hZC1tb3JlX190ZXh0LS1kaXNhYmxlZCB7XHJcblx0XHRmb250LXNpemU6IDI0dXB4O1xyXG5cdFx0Y29sb3I6ICNiYmI7XHJcblx0fVxyXG5cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbWl4LWxvYWQtbW9yZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL21peC1sb2FkLW1vcmUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibWl4LWxvYWQtbW9yZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBycHhcIlxuICB9LFxuICBcIm1peC1sb2FkLW1vcmVfX2ljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIzNnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzZycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTJycHhcIlxuICB9LFxuICBcIm1peC1sb2FkLW1vcmVfX3RleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJtaXgtbG9hZC1tb3JlX190ZXh0LS1kaXNhYmxlZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNiYmJiYmJcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInl0aWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwieXRpY29uXCJcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhZ2UtaGVhZGVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlYzcwNmJcIlxuICB9LFxuICBcInBhZ2UtaGVhZGVyLXdyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwicGFnZS1oZWFkZXItbGVmdFwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDAuOVxuICB9LFxuICBcImxvZ29cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlci1jZW50ZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJzZWFyY2gtaW5wdXRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJwYWdlLWhlYWRlci1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjb250cmlidXRlLWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDRcIlxuICB9LFxuICBcImNvbnRyaWJ1dGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInNsaWRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJsaXN0LWNvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwibG9hZC1tb3JlLXdyYXBwZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibmV3cy1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMDMxMzNcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI0NlwiXG4gIH0sXG4gIFwiYm90XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcInRpbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcImltZy1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndpZHRoXCI6IFwiMjIwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNDBcIlxuICB9LFxuICBcImltZy13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjE0MFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiaW1nXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImltZy1lbXB0eVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwidmlkZW8tdGlwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwiaW1nLWxpc3QxXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogXCIzMFwiLFxuICAgIFwidG9wXCI6IFwiMjRcIlxuICB9LFxuICBcInRpdGxlMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0MFwiXG4gIH0sXG4gIFwiYm90MVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI0MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcImltZy1saXN0MlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjMwXCIsXG4gICAgXCJ0b3BcIjogXCIyNFwiXG4gIH0sXG4gIFwidGl0bGUyXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIxMFwiXG4gIH0sXG4gIFwiYm90MlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiXG4gIH0sXG4gIFwiaW1nLWxpc3QzXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzAwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBcIlxuICB9LFxuICBcImltZy13cmFwcGVyM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjRcIlxuICB9LFxuICBcImltZy1saXN0LXNpbmdsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjQwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBcIlxuICB9LFxuICBcImltZy13cmFwcGVyLXNpbmdsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyNDBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9