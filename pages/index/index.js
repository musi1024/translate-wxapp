//index.js
//获取应用实例
import { translate } from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '',
    hideClearIcon: true,
    result: [],
    curLang: {}
  },
  onShow: function() {
    if(this.data.curLang.lang !== app.globalData.curLang.lang){
      this.setData({ curLang: app.globalData.curLang })
    }
  },
  onInput: function(e) {
    this.setData({ 'query': e.detail.value })
    if(this.data.query.length > 0){
      this.setData({ 'hideClearIcon': false })
    } else {
      this.setData({ 'hideClearIcon': true }) 
    }
  },
  onTapClose: function () {
    this.setData({ query: '', hideClearIcon: true })
  },
  onConfirm: function() {
    if(!this.data.query) return
    translate(this.data.query, {from: 'auto', to: this.data.curLang.lang}).then(res => {
      this.setData({ 'result': res.trans_result })
    })
  }
  
})
