'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    autoplay: {
      delay: 1000
    },
    height: wx.DEFAULT_CONTENT_HEIGHT,
    imgHeight: parseInt(wx.WIN_WIDTH / 1125 * 628)
  },

  onReady: function onReady() {}
});