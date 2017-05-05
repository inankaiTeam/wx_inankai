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
    wx.request({
      url: 'https://ask.nankai.edu.cn/setUserInfo',
      data: {
        openId:1,
        nickName:"彭老板asdad",
        gender:1,
        city:"天津",
        province:"天津",
        country:"中国",
        avatarUrl:"/images/logo.jpg",
        newNickName:"彭朝阳zxcas",
        grade:"大四",
        hometown:"云南",
        major:"计控"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    wx.request({
      url: 'https://ask.nankai.edu.cn/getUserInfo',
      data: {
        openId:1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
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