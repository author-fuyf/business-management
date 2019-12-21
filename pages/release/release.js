'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    list: ['中国', '美国', '巴西', '日本'],
    value: 1
  },

  onReady: function onReady() {},
  handleChange: function handleChange(val) {
    this.value = val;
  },
  resetPickerr00: function resetPickerr00() {
    this.value = 0;
  }
});