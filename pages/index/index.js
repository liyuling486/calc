//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   show: 0
  },
  clickNum: function(e){
    let num = e.currentTarget.dataset.num

    if (this.data.show != 0){
      num = this.data.show + num
    }

    this.setData({
      show: num
    })
  },
  add: function(){

    this.setData({
      show: this.data.show + '+'
    })

  },
  equal: function(){

    this.setData({
      show: binding.eval(this.data.show)
    })

  },
  onLoad: function () {
    
  }
})
