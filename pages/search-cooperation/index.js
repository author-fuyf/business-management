'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    items: [],
    offsetTop: wx.DEFAULT_HEADER_HEIGHT,
    imgHeight: parseInt(wx.WIN_WIDTH / 1125 * 628),
    customStyle: {
      'background-color': '#eee',
      height: '46px',
      'line-height': '46px'
    },
    searchText: '',
    height: wx.DEFAULT_CONTENT_HEIGHT,
    searchHeight: 38
  },

  onReady: function onReady() {
    //首屏页面需要在mounted中延时才能调用框架api，其他页面不需要延时
    // setTimeout(() => {
    //   //关闭app启动图
    //   ui.closeSplashscreen()
    // }, 1000)
    for (var i = 1; i <= 50; i++) {
      this.data.items.push(i + ' - 内容文本');
    }
  },
  goDetail: function goDetail() {
    wx.navigateTo({
      url: '/pages/corporate-information/corporateInformation'
    });
  },
  handleInput: function handleInput() {
    console.log('input');
  },
  sliderShow: function sliderShow() {
    this.isShow = true;
  },
  navHandle: function navHandle() {
    wx.navigateTo({
      url: '/pages/detail'
    });
  }
});