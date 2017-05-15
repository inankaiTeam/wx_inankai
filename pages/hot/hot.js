Page({
  data: {
    imgUrls: [],
    hot_topic: []
  },
  toTopic:function(e){
      console.log(e);
      let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/topic/topic?url='+url
    })
  },
  toSearchPage: function() {
     wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    console.log(this.data.hotDataArr);
    // ajax请求渲染所需数据
      wx.request({
        url: 'https://ask.nankai.edu.cn/getBanner', //仅为示例，并非真实的接口地址
        data: {
        },
        // header: {
        //     'content-type': 'application/json'
        // },
        success: function(res) {
          let data = res.data.data;
          let imgUrl = [];
          for(let i = 0;i<data.length;i++){
              imgUrl.push(data[i].imageUrl);
          }
          that.setData({
            imgUrls:imgUrl
          })
        }
      });
      wx.request({
        url: 'https://ask.nankai.edu.cn/getHotTopic', //仅为示例，并非真实的接口地址
        data: {
            length:4
        },
        // header: {
        //     'content-type': 'application/json'
        // },
        success: function(res) {
            let data = res.data.data;
            console.log(res.data);
            let hot_topic = [];
            for(let i = 0;i<data.length;i++){
              hot_topic.push({
                  title: data[i].topic,
                  url:data[i].topic
                });
            }
            that.setData({
                hot_topic: hot_topic
            })
        }
      });
  }
})
