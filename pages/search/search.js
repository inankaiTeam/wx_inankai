// pages/search/search.js
Page({
  data:{ 
    hot_topic: [
        {
            title:"热门话题1",
            url:"hhh"
        },
        {
            title:"热门话题2",
            url:"hhh"
        },
        {
            title:"热门话题2",
            url:"hhh"
        },
        {
            title:"热门话题3",
            url:"hhh"
        },
        {
            title:"热门话题4",
            url:"hhh"
        },
        {
            title:"热门话题5",
            url:"hhh"
        },
        {
            title:"热门话题6",
            url:"hhh"
        },
        {
            title:"热门话题7",
            url:"hhh"
        }
    ],
    history: [
        {
            title:"热门话题1",
            url:"hhh"
        },
        {
            title:"热门话题2",
            url:"hhh"
        },
        {
            title:"热门话题3",
            url:"hhh"
        }
    ]
  },
  toHotPage: function(e) {
     wx.navigateBack()
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