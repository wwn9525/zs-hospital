// pages/brands/brands.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/pages/index/images/banner-a.jpg',
      '/pages/index/images/banner-b.jpg',
      '/pages/index/images/banner-c.jpg'
    ],
    
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 300,
    circular: false,
    vertical: false
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '05514008865728'
    })
  },
  getLocal() {
    console.log(111);
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