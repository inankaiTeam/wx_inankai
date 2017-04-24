var i_feed_1 = {
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
Feed.prototype.onclickopen = function(self){
  self.setData({
    isHide: true
  })
}
Feed.prototype.onclickclose = function(self){
  self.setData({
    isHide: false
  })
}
var feed = new Feed();
module.exports = feed;

    