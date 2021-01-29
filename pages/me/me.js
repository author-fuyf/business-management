'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    imgUrl: '../../static/img/me-top-bg.jpg'
  },
  jumpCorrespond(e) {
    let path = e.currentTarget.dataset.path
    if (!path) return
    wx.navigateTo({
      url: `/pages/me/${path}`
    });
  }
});