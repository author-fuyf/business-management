'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    searchText: ''
  },
  goDetail() {
    // wx.navigateTo({
    //   url: '/pages/corporate-information/corporateInformation'
    // });
  },
  handleInput(data) {
    console.log('input', data.detail);
  }
});