//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    query: '',
    hideClearIcon: true,
    result: [],
    curLang: {}
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
    
  }
  
})
