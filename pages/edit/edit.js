// pages/edit/edit.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    wx.request({
      method:'GET',
      url: 'https://ask.nankai.edu.cn/getUserInfo', //仅为示例，并非真实的接口地址
      data: {
        openid:'oBoUa0WRoLj-3T_9VC2esoOVCCdk'
      },
      success: function(res) {
        console.log(res.data)
      },
      fail(e){
        console.warn(e)
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏

  },
  onUnload:function(){
    // 页面关闭
  }
})