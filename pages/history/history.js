const app = getApp()
Page({
  data: {
    history: []
  },
  onShow: function() {
    this.setData({
      history: wx.getStorageSync('history')
    })
  },
  onTapItem: function(e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}&langId=${e.currentTarget.dataset.langid}`
    })
    console.log(e.currentTarget.dataset.langid)
  },
  onClearAll: function() {
    let _this = this
    wx.showModal({
      title: '提示',
      content: ' 确定清除全部记录?',
      success(res) {
        if (res.confirm) {
          wx.removeStorageSync('history')
          _this.setData({history: []}) 
        }
      }
    })
  }
})