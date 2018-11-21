//index.js
//获取应用实例
import {
  translate
} from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '',
    oldQuery: '',
    hideClearIcon: true,
    result: [],
    curLang: {}
  },
  onLoad: function(options) {
    this.setData({
      query: options.query || ''
    })
  },
  onShow: function() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      this.onConfirm()
    }
  },
  onInput: function(e) {
    this.setData({
      'query': e.detail.value
    })
    console.log(e)
    if (this.data.query.length > 0) {
      this.setData({
        'hideClearIcon': false
      })
    } else {
      this.setData({
        'hideClearIcon': true
      })
    }
  },
  onTapClose: function() {
    this.setData({
      query: '',
      hideClearIcon: true
    })
  },
  onConfirm: function() {
    if (this.data.query === this.data.oldQuery) {
      return 
    } else {
      this.data.oldQuery = this.data.query
    } 
    translate(this.data.query, {
      from: 'auto',
      to: this.data.curLang.lang
    }).then(res => {
        this.setData({
          'result': res.trans_result
        })
        let history = wx.getStorageSync('history') || []
        history.unshift({
          query: this.data.query,
          result: res.trans_result[0].dst
        })
        history.length = history.length > 15 ? 15 : history.length
        wx.setStorageSync('history', history)
    })
  }
})