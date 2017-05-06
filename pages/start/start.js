// pages/start/start.js
Page({
  data:{
    isnew:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    var that=this
    var appInstance = getApp()
    // 页面显示
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://ask.nankai.edu.cn/setUserid',
            data: {
              code: res.code
            },
            success(res){
        appInstance.globalData.userinfo=res.data.data
              
              that.setData({
                isnew:appInstance.globalData.userinfo.isnew
              })
              console.log(appInstance.globalData.userinfo)
            },
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  start(){
    var url=''
    if(this.data.isnew){
      url='/pages/regist/regist'
    }else{
      url='/pages/index/index'
    }
    wx.switchTab({
      url: '/pages/index/index',
      success(){
        console.log(1)
      },
      fail(e){
        console.log(e)
      }
    })
  }
})