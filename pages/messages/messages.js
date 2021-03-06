var app = getApp();
var sliderWidth = 96;
var atme = require('../../utils/atme.js');
var comment = require('../../utils/comment.js');
var zan = require('../../utils/zan.js');

Page({
    data: {
        // tabs: ["@我的", "评论", "赞"],
        tabs: ["评论", "赞"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        // atme: atme,
        comment: comment,
        zan: zan,
        userInfo: {}
    },
    //事件处理函数
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
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
        // 顶部tab滑块动画
        wx.getSystemInfo({
            success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth)/2 ,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
            }
        });
    },
    onShow(){
        let that=this
        wx.request({
            method:'GET',
            url: 'https://ask.nankai.edu.cn/getUnread', //仅为示例，并非真实的接口地址
            data: {
                userid:1
            },
            success: function(res) {
                console.log(res.data)
                let arr=res.data.data
                zan=arr.filter((item)=>{
                    return item.type==3  //点赞
                })
                that.setData({
                    zan:zan
                })
            },
            fail(e){
                console.warn(e)
            }
        })
    }
})