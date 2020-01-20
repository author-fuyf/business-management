'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    industryList: ["制造业", "工业", "金融行业"],
    industryIndex: null,
    provinceList: ['安徽省', '江苏省', '浙江省'],
    provinceIndex: null,
    cityList: ['宣城市', '南京市', '宁波市'],
    cityIndex: null,
    areaList: ['宣州区', '雨花台区', '江东区'],
    areaIndex: null
  },
  bindCountryChange(e) {
    this.setData({
      industryIndex: e.detail.value
    })
  },
  bindProvinceChange(e) {
    this.setData({
      provinceIndex: e.detail.value
    })
  },
  bindCityChange(e) {
    this.setData({
      cityIndex: e.detail.value
    })
  },
  bindAreaChange(e) {
    this.setData({
      areaIndex: e.detail.value
    })
  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  }
});