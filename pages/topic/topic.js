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
    title:'',
    feeds_num:0,
    tabs: ["热门帖子", "最新帖子"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
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
      i_feed.onclickopen(that,e);
  },
  onclickclose: function(e) {
      var that = this;
      i_feed.onclickclose(that,e);
  },
  onclickLike: function(e) {
      var that = this;
      i_feed.onclickLike(that, e);
  },
  onclickDislike: function(e) {
      var that = this;
      i_feed.onclickDislike(that, e);
  },
  onclickCollection:function(e) {
      var that = this;
      i_feed.onclickCollection(that, e);
  },
  toComment: function(e) {
      var cardid = e.currentTarget.dataset.cardid;
      console.log(cardid);
      var pageUrl = '/pages/singlecomment/singlecomment';
      var paramName = 'cardid';
      i_feed.toPage(pageUrl, paramName, cardid);
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      title:options.url
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      
      that.setData({
        userInfo:userInfo
      })
    });
    // 请求渲染最热列表
      wx.request({
        url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
        data: {
          userid:1,
          topic:options.url,
          type:'hot'
        },
        success: function(res) {
          let data = res.data.data;
          console.log('res.data');
          console.log(options.url);
          for(let i = 0;i<data.length;i++){
            let isAllHide = i_feed.isHide(data[i].content);
            var opt = {
                type:'hot',
                avatar:'/images/logo.jpg',
                username: '陈静韬真的会修电脑喵',
                isHide:true,
                isAllHide:isAllHide,
                textHide:"i-text-hide",
                textShow:"i-text-show",
                isLike:false,
                isCollection:false,
                isDislike:false,
                index: i
              };
            data[i] = util.increase_attr(data[i],opt);
            // console.log(data[i]);
          }
          that.setData({
            hotDataArr:data
          })
        }
      });

    // 请求渲染最新列表
      wx.request({
        url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
        data: {
          userid:1,
          topic:options.url,
          type:'new'
        },
        success: function(res) {
          let data = res.data.data;
          console.log(data);
          for(let i = 0;i<data.length;i++){
            let isAllHide = i_feed.isHide(data[i].content);
            var opt = {
                type:'new',
                avatar:'/images/logo.jpg',
                username: '陈静韬真的会修电脑喵',
                isHide:true,
                isAllHide:isAllHide,
                textHide:"i-text-hide",
                textShow:"i-text-show",
                isLike:false,
                isCollection:false,
                isDislike:false,
                index: i
              };
            data[i] = util.increase_attr(data[i],opt);
            // console.log(data[i]);
          }
          that.setData({
            newDataArr:data
          })
        }
      });

    console.log(this.data.hotDataArr);
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
