var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]

Page({
  data: {
    anonymous:0,
    content:'',
    imageList:[],
    sourceTypeIndex: 3,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 9,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
    console.log(data.imageList)
    wx.request({
      method:'POST',
      url: 'https://ask.nankai.edu.cn', //仅为示例，并非真实的接口地址
      data: {
        anonymous: data.anonymous?1:0 ,
        content: data.content
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    //上传图片
    data.imageList.forEach((item)=>{
      wx.uploadFile({
        url: 'https://ask.nankai.edu.cn', //仅为示例，非真实的接口地址
        filePath: item,
        name: 'file',
        formData:{
          'userid': 'xxxx'
        },
        success: function(res){
          var data = res.data
          //do something
          console.log(data)
        }
      })
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  },
  setContent(e){
    this.setData({
      content: e.detail.value
    })
    // console.log(e.detail.value)
  },
  setAnonymous(e){
    // console.log(e.detail.value[0])
    this.setData({
      anonymous: !!e.detail.value[0]
    })
  }
})
