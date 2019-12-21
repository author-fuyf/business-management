'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require('./static/utils/system.js');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = App({
  //全局变量
  globalData: {},

  data: {
    WIN_WIDTH: wx.WIN_WIDTH,
    tabIndex: 0,
    tabBarList: [],
    navStyle: {},
    tabBar: {},
    tabBarHeight: 56,
    isApp: wx.IS_APP,
    headerHeight: wx.DEFAULT_HEADER_HEIGHT,
    paths: [],
    barHeight: wx.STATUS_BAR_HEIGHT,
    showSlideMenu: false
  },

  onReady: function onReady() {},
  onLaunch: function onLaunch() {
    _system2.default.attachInfo();
  }
});