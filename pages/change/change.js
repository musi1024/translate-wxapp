//change.js
const app = getApp()

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow: function() {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function(e) {
    let langObj = e.currentTarget.dataset
    this.setData({ curLang: langObj})
    wx.setStorageSync('curLang', langObj)
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index' })
  }
})
