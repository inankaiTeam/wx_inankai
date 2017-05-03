//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var i_feed = require('../../utils/feed.js');
var util = require('../../utils/util.js');
console.log(i_feed);

for (let [index, item] of i_feed.i_feeds.entries()){
  var opt = {
      isHide:true,
      textHide:"i-text-hide",
      textShow:"i-text-show",
      isLike:true,
      isCollection:true,
      isDislike:true,
      likeUrl:"/images/like.png",
      collectionUrl:"/images/collection.png",
      dislikeUrl:"/images/dislike.png",
      index: index
    };
  util.increase_attr(item,opt);
}
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    tabs: ["最热", "最新"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    grids: [0, 1, 2, 3, 4, 5, 6, 7],
    i_feed_1:i_feed.i_feed_1,
    i_feed_2:i_feed.i_feed_2,
    hotDataArr:[],
    newDataArr:[],
    userInfo:{}
  },
  //事件处理函数
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,activeIndex: e.currentTarget.id
    });
  },
  onclickopen: function(e) {
    console.log(e);
      var that = this;
      // console.log(that);
      i_feed.onclickopen(that);
  },
  onclickclose: function() {
      var that = this;
      i_feed.onclickclose(that);
  },
  onclickLike: function(e) {
      var checkStatus = e.currentTarget.dataset.isLike;
      var that = this;
      i_feed.onclickLike(that,checkStatus);
  },
  toComment: function(e) {
      var cardid = e.currentTarget.dataset.cardid;
      console.log(cardid);
      var pageUrl = '/pages/singlecomment/singlecomment';
      var paramName = 'cardid';
      i_feed.toPage(pageUrl, paramName, cardid);
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      
      that.setData({
        userInfo:userInfo
      })
    });

    // 模拟ajax请求数据
    this.setData({
      hotDataArr:i_feed.i_feeds,
      newDataArr:i_feed.i_feeds
    });
    console.log(this.data.hotDataArr);
    // ajax请求渲染所需数据
      wx.request({
        url: 'https://ask.nankai.edu.cn/getCard?userid=1', //仅为示例，并非真实的接口地址
        data: {
          
        },
        success: function(res) {
          let data = res.data.data;
          console.log(data);
          for(let i = 0;i<data.length;i++){
            var opt = {
                avatar:'/images/logo.jpg',
                username: '陈静韬真的会修电脑喵',
                isHide:true,
                textHide:"i-text-hide",
                textShow:"i-text-show",
                isLike:true,
                isCollection:true,
                isDislike:true,
                likeUrl:"/images/like.png",
                collectionUrl:"/images/collection.png",
                dislikeUrl:"/images/dislike.png",
                index: i
              };
            data[i] = util.increase_attr(data[i],opt);
            console.log(data[i]);
          }
          console.log(data)
        }
      });


    // 顶部tab滑块动画
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth)/2 ,
                      sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          });
        }
      });
  }
})
