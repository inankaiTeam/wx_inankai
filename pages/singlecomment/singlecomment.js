// pages/singlecomment/singlecomment.js
var i_feed = require('../../utils/feed.js');
var data = require('../../utils/singlecomment.js');
console.log(data.comment)
Page({
  data:{
    feed: data.feed,
    comment: data.comment,
    //回复帖子1，回复楼主2，回复楼中楼评论3
    commentLevel:1,
    focus:false
  },
  writeComment: function(event) {
    console.log(event);
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
      this.setData({
        commentLevel:1
      })

  }
})