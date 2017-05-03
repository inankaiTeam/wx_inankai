var util=require('../../utils/util.js')
var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]

Page({
  data: {
    anonymous:0,
    content:'',
    imageList:[],
    showHot:false,
    hotTopics:[],
    sourceTypeIndex: 3,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 9,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  onShow(){
    let that=this
    //test
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log(res.code)
          //发起网络请求
          wx.request({
            url: 'https://ask.nankai.edu.cn/setUserid',
            data: {
              code: res.code
            },
            success(data){
              console.log(data)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    wx.request({
      method:'GET',
      url: 'https://ask.nankai.edu.cn/getHotTopic', //仅为示例，并非真实的接口地址
      data: {
      },
      success: function(res) {
        that.setData({
          hotTopics:res.data.data,
        })
      },
      fail(e){
        console.warn(e)
      }
    })

    //每次页面打开都会调用
    wx.getStorage({
      key: 'iContent',
      success(res) {
          console.log(res.data)
          //设置content
          that.setData({
            content: res.data
          })
      } 
    })
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function (res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
        
      }
    })
  },
  publishCard(){
    var data = this.data
    // console.log(data.imageList)
    if(!data.content.trim()){
      //文字和图片不能均为空
      return
    }
    
    //上传图片
    var promiseArr=[]
    data.imageList.forEach((item,index)=>{
      promiseArr[index]=new Promise((resolve,reject)=>{
        wx.uploadFile({
          url: 'https://inankai.nankai.edu.cn/upload_action.php', //仅为示例，非真实的接口地址
          filePath: item,
          name: 'file',
          formData:{
            'userid': 'xxxx'
          },
          success: function(res){
            var data = JSON.parse(res.data)
            //do something
            console.log(data)
            resolve(data.data)
          },
          fail(e){
            reject(e)
          }
        })
      })
    })
    //所有图片发送完成后，返回图片地址再发送文本消息，带上图片地址
    Promise.all(promiseArr).then((posts)=>{
      console.log(posts)
      //上传文本
      wx.request({
        method:'POST',
        url: 'https://ask.nankai.edu.cn/setCard', //仅为示例，并非真实的接口地址
        data: {
          userid:1,
          imageNum:posts.length,
          imgurls:posts,
          topics:util.getTopics(data.content),
          anonymous: data.anonymous?1:0 ,
          content: data.content
        },
        success: function(res) {
          console.log(res.data)
        },
        fail(e){
          console.warn(e)
        }
    })
    }).catch((reason)=>{
      console.warn(reason)
    })
    //发布成功后清除草稿，
    wx.setStorage({
      key:"iContent",
      data:''
    })
    //跳转首页
    // wx.showToast({
    //   title: '发布成功',
    //   icon: 'success',
    //   duration: 1500,
    //   complete(){
    //     setTimeout(function(){
    //       wx.switchTab({
    //         url: '../index/index'
    //       })
    //     },1500)
    //   }
    // })
    
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  },
  setContent(e){
    //设置content
    this.setData({
      content: e.detail.value
    })
    //本地缓存content，存储草稿，可以再次打开编辑
    wx.setStorage({
      key:"iContent",
      data:e.detail.value
    })
    // console.log(e.detail.value)
  },
  setAnonymous(){
    // console.log(this.data.anonymous)
    this.setData({
      anonymous: this.data.anonymous==0?1:0
    })
  },
  setShowHot(){
    this.setData({
      showHot: !this.data.showHot
    })
  },
  addHotTopic(e){
    let topic= '#'+e.target.dataset.topic+'# '
    console.log(e.target.dataset.topic)
    //加过的话题就不再加了
    if(this.data.content.indexOf(topic)>-1){
      return
    }
    this.setData({
      content:topic+this.data.content
    })
  }
})
