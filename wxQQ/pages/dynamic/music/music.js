// pages/dynamic/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       tabBar:[
         {
           name:"我的",
           hclass:"on"
         },
         {
           name: "好友在听",
           hclass: ""
         },
         {
           name: "电台",
           hclass: ""
         }
       ],
       userInfo:{
         userInfoimg:"http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
         userInfoname:"codeAndroid"
        },
        mtabNav:[
          {
            icon:"../../../images/like.png",
            tit:"我喜欢"
          },
          {
            icon: "../../../images/songmenu.png",
            tit: "我的歌单"
          },
          {
            icon: "../../../images/replay.png",
            tit: "最近播放"
          }
        ],
        musicList:[
          {
            imgUrl:"http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            name:"从你的全世界路过",
            author:"邓超"
          },
          {
            imgUrl: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            name: "从你的全世界路过",
            author: "邓超"
          },
          {
            imgUrl: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            name: "从你的全世界路过",
            author: "邓超"
          },
          {
            imgUrl: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            name: "从你的全世界路过",
            author: "邓超"
          },
          {
            imgUrl: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
            name: "从你的全世界路过",
            author: "邓超"
          }
        ]
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changeTab:function(e){
      var ind=e.currentTarget.dataset.ind;
      var tabBar = this.data.tabBar;
      for(var i=0;i<tabBar.length;i++){
        tabBar[i].hclass="";
      }  
      tabBar[ind].hclass = "on";
      this.setData({"tabBar":tabBar});
  }
})