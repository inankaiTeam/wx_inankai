Page({
  data: {
    imgUrls: [
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    hot_topic: [
        {
            title:"热门话题1",
            url:"hhh"
        },
        {
            title:"热门话题2",
            url:"hhh"
        },
        {
            title:"热门话题2",
            url:"hhh"
        },
        {
            title:"热门话题3",
            url:"hhh"
        },
        {
            title:"热门话题4",
            url:"hhh"
        },
        {
            title:"热门话题5",
            url:"hhh"
        },
        {
            title:"热门话题6",
            url:"hhh"
        },
        {
            title:"热门话题7",
            url:"hhh"
        }

    ]
  },
  toTopic:function(){
    wx.navigateTo({
      url: '/pages/topic/topic'
    })
  },
  toSearchPage: function() {
     wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})
