// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../index/images/banner-addr.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 300,
    circular: false,
    vertical: false,
    markers: [{
      // iconPath: "/resources/others.png",
      id: 0,
      latitude: 31.87356894426543,
      longitude: 117.31440711408617,
      title:"合肥中山医院",
      width: 15,
      height: 32,
      alpha:0.7
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})