'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {},

  onReady: function onReady() {},
  goPromte: function goPromte() {
    wx.navigateTo({
      url: '/pages/me/join-promote'
    });
  },
  goResources: function goResources() {
    wx.navigateTo({
      url: '/pages/me/resources'
    });
  },
  goMyRelease: function goMyRelease() {
    wx.navigateTo({
      url: '/pages/me/my-release'
    });
  },
  goProcessing: function goProcessing() {
    wx.navigateTo({
      url: '/pages/me/processing'
    });
  }
});