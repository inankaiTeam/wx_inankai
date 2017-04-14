var app = getApp();
var sliderWidth = 96;
var atme = require('../../utils/atme.js');
console.log(atme);
Page({
    data: {
        tabs: ["@我的", "评论", "赞"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        atme: atme
    },
    //事件处理函数
  tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
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