// pages/user/user.js
Page({
  data:{
    part2:[
      {
          title:"我的主页",
          url:"hhh",
          img:"/images/home.png"
      },{
          title:"草稿箱",
          url:"hhh",
          img:"/images/draft.png"
      }
    ],
    part3:[
      {
          title:"使用说明",
          url:"hhh",
          img:"/images/explain.png"
      },{
          title:"分享给好友获取南开周边",
          url:"hhh",
          img:"/images/share.png"
      },{
          title:"关于我们",
          url:"hhh",
          img:"/images/about.png"
      }
    ]
  },
  toPeople: function(){
    wx.navigateTo({
      url: '/pages/people/people'
    })
  },
  toEdit: function(){
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  },
  toCollection: function(){
    wx.navigateTo({
      url: '/pages/collection/collection'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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