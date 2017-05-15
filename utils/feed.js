var i_feeds = [
  {
      cardid:"33",
      avatar: '/images/logo.jpg',
      username: '陈静韬真的会修电脑喵',
      sent_date: '1小时前',
      feed_content: '南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙',
      like: 12,
      comment: 12,
      img_arr: ['/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg']
  },{
    cardid:"34",
          avatar: '/images/logo.jpg',
      username: '陈静韬真的会修电脑喵',
      sent_date: '1小时前',
      feed_content: '南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙',
      like: 12,
      comment: 12,
      img_arr: ['/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg']
  }
];
var i_feed_1 = {
      cardid:"34",
      avatar: '/images/logo.jpg',
      username: '陈静韬真的会修电脑喵',
      sent_date: '1小时前',
      feed_content: '南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙',
      like: 12,
      comment: 12,

      img_arr: ['/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg'],
      isHide:true,
      textHide:"i-text-hide",
      textShow:"i-text-show"
    };

var i_feed_2 = {
      cardid:"34",
      avatar: '/images/logo.jpg',
      username: '陈静韬',
      sent_date: '1小时前',
      feed_content: '南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙南开大学与世界一流大学真的只有一堵墙',
      like: 12,
      comment: 12,
      img_arr: ['/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg', '/images/icon_tabbar.jpg'],
      isHide:true,
      textHide:"i-text-hide",
      textShow:"i-text-show"
    };


var Feed = function(){
  this.i_feeds = i_feeds;
  this.i_feed_1 = i_feed_1;
  this.i_feed_2 = i_feed_2;
};

Feed.prototype.getLength = function(str) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		var countCode = str.charCodeAt(i);
		if(countCode > 0 && countCode < 128){
			count++;
		}
		else{
			count += 2;
		}
	};
	return count;
}
Feed.prototype.isHide = function(str) {
  if(this.getLength(str) > 140){
    return true;
  } else {
    return false;
  }
}
Feed.prototype.getAttr = function(event,attrname){
  let attr;
  if(attrname){
    attrname = "."+attrname;
  } else {
    attrname = "";
  }
  if(event.currentTarget.dataset.feed.type == "new" ){
    attr = "newDataArr["+ event.currentTarget.dataset.feed.index + "]" + attrname;
  }
  if(event.currentTarget.dataset.feed.type == "hot" ){
    attr = "hotDataArr["+ event.currentTarget.dataset.feed.index + "]" + attrname;
  }
  return attr;
}
Feed.prototype.onclickopen = function(self, event){
  let attr = this.getAttr(event,"isHide");
  self.setData({
    [attr]: false
  })
}
Feed.prototype.onclickclose = function(self, event){
  let attr = this.getAttr(event,"isHide");
    self.setData({
      [attr]: true
    })
}
Feed.prototype.onclickLike = function(self, event){
  console.log(event.currentTarget.dataset)
  let checkStatus = event.currentTarget.dataset.feed.isLike;
  let attrIsLike = this.getAttr(event,"isLike");
  // let attrLikeUrl = this.getAttr(event,"likeUrl");
  let attrZanNum = this.getAttr(event,"zanNum");
  let zanNum = event.currentTarget.dataset.feed.zanNum;
  if(checkStatus) {
    self.setData({
       [attrIsLike]: false,
      //  [attrLikeUrl]: "/images/like.png",
       [attrZanNum]: zanNum - 1
    });
  } else {
    self.setData({
       [attrIsLike]: true,
      //  [attrLikeUrl]: "/images/like_act.png",
       [attrZanNum]: zanNum + 1
    });
  }
  wx.request({
    url: 'https://ask.nankai.edu.cn/setBehavior',
    method:"POST",
    data:{
      // userid要改
      userid:2,
      cardid:event.currentTarget.dataset.feed.cardid,
      type:'zan',
      revoked:Number(checkStatus)
    },
    success: function(res){
      console.log(res.data);
    }
  })
}
Feed.prototype.onclickDislike = function(self,event){
  let checkStatus = event.currentTarget.dataset.feed.isDislike;
  let attrIsDislike = this.getAttr(event,"isDislike");
  // let attrDislikeUrl = this.getAttr(event,"dislikeUrl");
  if(checkStatus) {
    self.setData({
       [attrIsDislike]: false,
      //  [attrDislikeUrl]: "/images/dislike.png",
    });
  } else {
    self.setData({
       [attrIsDislike]: true,
      //  [attrDislikeUrl]: "/images/dislike_act.png",
    });
  }
  wx.request({
    url: 'https://ask.nankai.edu.cn/setBehavior',
    method:"POST",
    data:{
      // userid要改
      userid:2,
      cardid:event.currentTarget.dataset.feed.cardid,
      type:'cai',
      revoked:Number(checkStatus)
    },
    success: function(res){
      console.log(res.data);
    }
  })
}
Feed.prototype.onclickCollection = function(self, event){
  let checkStatus = event.currentTarget.dataset.feed.isCollection;
  let attrIsCollection = this.getAttr(event,"isCollection");
  // let attrCollectionUrl = this.getAttr(event,"collectionUrl");
  if(checkStatus) {
    self.setData({
       [attrIsCollection]: false,
      //  [attrCollectionUrl]: "/images/like.png"
    });
  } else {
    self.setData({
       [attrIsCollection]: true,
      //  [attrCollectionUrl]: "/images/like_act.png"
    });
  }
  wx.request({
    url: 'https://ask.nankai.edu.cn/setBehavior',
    method:"POST",
    data:{
      // userid要改
      userid:2,
      cardid:event.currentTarget.dataset.feed.cardid,
      type:'collection',
      revoked:Number(checkStatus)
    },
    success: function(res){
      console.log(res.data);
    }
  })
}
Feed.prototype.toPage = function(pageURL,paramName,id){
  console.log(pageURL,paramName,id);
  var url = pageURL + "?" + paramName + "=" + id;
  console.log(url);
  wx.navigateTo({
    url: url
  })
}
var feed = new Feed();
module.exports = feed;

    