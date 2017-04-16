//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var i_feed = require('../../utils/feed.js');
console.log(i_feed);

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
    i_feed_2:i_feed.i_feed_2
  },
  //事件处理函数
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,activeIndex: e.currentTarget.id
    });
  },
  onclickopen: function() {
      var that = this;
      i_feed.onclickopen(that);
  },
  onclickclose: function() {
      var that = this;
      i_feed.onclickclose(that);
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
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
