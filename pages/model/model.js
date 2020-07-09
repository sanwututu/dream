// pages/model/model.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentModelIndex: 0,
    curImgSrc:"",
    modelSrc: [
      '../images/back1.jpg',
      '../images/back2.jpg',
      '../images/back3.jpg',
      '../images/back4.jpg'
      ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  imgChange(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentModelIndex: e.target.dataset.current
      })
    }
  },
  saveModel(){
    var num = this.data.currentModelIndex;
    wx.setStorageSync('modelBack', this.data.modelSrc[num]);
    wx.redirectTo({
      url: '../editor/editor'
    })
  },
  back(){
    wx.removeStorageSync('msgDetail'); 
    wx.navigateBack({
      delta: 1
    }) 
  },
  onShareAppMessage: function () {
    return {
      title: '梦纪',
      desc: '纪录你的点滴',
      path: '/pages/index/index'
    }
  }
})