//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var i_feed = require('../../utils/feed.js');
var util = require('../../utils/util.js');
console.log(i_feed);

let page = 0;
let hotDataArr = [];
let newDataArr = [];
let currentPage = 0;
for (let [index, item] of i_feed.i_feeds.entries()){
  var opt = {
      isHide:true,
      textHide:"i-text-hide",
      textShow:"i-text-show",
      isLike:true,
      isCollection:true,
      isDislike:true,
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
    hotDataArr:[],
    newDataArr:[],
    userInfo:{}
  },
  //事件处理函数
  tabClick: function (e) {
    console.log(e.currentTarget);
    currentPage = e.currentTarget.id;
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
    // this.setData({
    //   hotDataArr:i_feed.i_feeds,
    //   newDataArr:i_feed.i_feeds
    // });
    console.log(this.data.hotDataArr);
    // 请求渲染最热列表
      wx.request({
        url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
        data: {
          userid:1,
          type:'hot',
          page: page
        },
        success: function(res) {
          let data = res.data.data;
          console.log(data);
          for(let i = 0;i<data.length;i++){
            let isAllHide = i_feed.isHide(data[i].content);
            let topics = util.getTopics(data[i].content);
            data[i].content = util.filterTopics(data[i].content);
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
                index: i,
                topics:topics
              };
            data[i] = util.increase_attr(data[i],opt);
            // console.log(data[i]);

          }
          hotDataArr = hotDataArr.concat(data);
          that.setData({
            hotDataArr:hotDataArr
          })
        }
      });

    // 请求渲染最新列表
      wx.request({
        url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
        data: {
          userid:1,
          type:'new',
          page: page
        },
        success: function(res) {
          let data = res.data.data;
          for(let i = 0;i < data.length;i++){
            let isAllHide = i_feed.isHide(data[i].content);
            let topics = util.getTopics(data[i].content);
            data[i].content = util.filterTopics(data[i].content);
            var opt = {
                type: 'new',
                avatar: '/images/logo.jpg',
                username: '陈静韬真的会修电脑喵',
                isHide: true,
                isAllHide: isAllHide,
                textHide: "i-text-hide",
                textShow: "i-text-show",
                isLike: false,
                isCollection: false,
                isDislike: false,
                index: i,
                topics:topics
              };
            data[i] = util.increase_attr(data[i],opt);
            // console.log(data[i]);
          }
          newDataArr = newDataArr.concat(data);
          console.log(newDataArr)
          that.setData({
            newDataArr:newDataArr
          })
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
  },
  onReachBottom: function(){
    page++;
    var that = this;
    if(currentPage == 0) {
      console.log("最热");
      // 请求渲染最热列表
        wx.request({
          url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
          data: {
            userid:1,
            type:'hot',
            page: page
          },
          success: function(res) {
            let data = res.data.data;
            console.log(data);
            for(let i = 0;i<data.length;i++){
              let isAllHide = i_feed.isHide(data[i].content);
              let topics = util.getTopics(data[i].content);
              data[i].content = util.filterTopics(data[i].content);
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
                  index: i,
                  topics:topics
                };
              data[i] = util.increase_attr(data[i],opt);
              // console.log(data[i]);

            }
            hotDataArr = hotDataArr.concat(data);
            that.setData({
              hotDataArr:hotDataArr
            })
          }
        });
    } else {
      console.log("最新");
      // 请求渲染最新列表
        wx.request({
          url: 'https://ask.nankai.edu.cn/getCard', //仅为示例，并非真实的接口地址
          data: {
            userid:1,
            type:'new',
            page: page
          },
          success: function(res) {
            let data = res.data.data;
            for(let i = 0;i < data.length;i++){
              let isAllHide = i_feed.isHide(data[i].content);
              let topics = util.getTopics(data[i].content);
              data[i].content = util.filterTopics(data[i].content);
              var opt = {
                  type: 'new',
                  avatar: '/images/logo.jpg',
                  username: '陈静韬真的会修电脑喵',
                  isHide: true,
                  isAllHide: isAllHide,
                  textHide: "i-text-hide",
                  textShow: "i-text-show",
                  isLike: false,
                  isCollection: false,
                  isDislike: false,
                  index: i,
                  topics:topics
                };
              data[i] = util.increase_attr(data[i],opt);
              // console.log(data[i]);
            }
            newDataArr = newDataArr.concat(data);
            console.log(newDataArr)
            that.setData({
              newDataArr:newDataArr
            })
          }
        });
    }
    

    
  }
})
