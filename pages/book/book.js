// pages/book/book.js
var app = getApp();
let tableID = 3043
let Product = new wx.BaaS.TableObject(tableID)
let product = Product.create()
const formData = {
  name: '',
  phone: '',
  description: ''
}
const date = new Date()
const years = []
const months = []
const days = []
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date:date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),
    imgUrls: [
      '../index/images/banner-book.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 300,
    circular: false,
    vertical: false
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  submitForm: function (e) {
    let product = Product.create()
    product.set('name', e.detail.value.name)
    product.set('phone', e.detail.value.phone)
    product.set('time', e.detail.value.time)
    product.set('description', e.detail.value.description)
    if (e.detail.value.name === '') {
      wx.showToast({
        title: '姓名不得为空',
        icon: 'loading'
      })
    } else if (e.detail.value.phone === '' || e.detail.value.phone.length != 11){
      console.log(e.detail.value.phone.length);
      wx.showToast({
        title: '电话格式不正确',
        icon: 'loading'
      })
    } else if (e.detail.value.description === ''){
      wx.showToast({
        title: '需求不得为空',
        icon: 'loading'
      })
    } else{
      product.save().then((res) => {
        console.log(e.detail.formId)
        wx.BaaS.wxReportTicket(e.detail.formId)
        console.log(res.statusCode)
        if (res.statusCode === 201) {
          console.log("success!")
          wx.showToast({
            title: '发送成功',
            icon: 'success'
          })
        }
        else {
          console.log("error!!")
        }
      }, (err) => {

      })
      this.setData({
        formData
      })
    }
    
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '4008865728'
    })
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