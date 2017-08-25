//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     talkList:[
       {
         userImg:"../../images/icon.png",
         userName:"我的电脑",
         userSay:"你已在电脑登录，可传文件到电脑。",
         userTime:"15：15",
         mesNum:5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
         userName: "马云",
         userSay: "神魔鬼,我有支付宝",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
         userName: "马化腾",
         userSay: "哈哈哈，我要一统江湖啦",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "../../images/icon1.png",
         userName: "一声问候",
         userSay: "朋友生日要到了，送个祝福吧",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
         userName: "李彦宏",
         userSay: "抄袭我的吧，我早都做过了",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
         userName: "雷军",
         userSay: "微信给你下线，看你还嘚瑟",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
         userName: "前端开发者",
         userSay: "我们的春天来啦，哈哈哈",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/e10e8faa201671b5a2e8a6146f80d99e.jpg",
         userName: "微信小程序",
         userSay: "谁有内测资格啊啊，300万买一个",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/e10e8faa201671b5a2e8a6146f80d99e.jpg",
         userName: "小程序",
         userSay: "这个IDE方便都不要配置了",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userImg: "http://img1.3lian.com/gif/more/11/201212/8f3762fb4d791410ec970baa2641344d.jpg",
         userName: "微信应用号开发群",
         userSay: "这个IDE方便都不要配置了",
         userTime: "15：15",
         mesNum: 5
       },
       {
         userName: "闯天下",
         userImg: "http://img1.3lian.com/gif/more/11/201212/04378257474004fcdd62f619d724db0c.jpg",
         userSay: "微信太强大了",
         userTime: "01:09",
         mesNum: 0
       },
       {
         userName: "小程序",
         userImg: "http://img1.3lian.com/gif/more/11/201212/58ec7c89b16c529fc9d0dc440a72e14d.jpg",
         userSay: "有快来看直播啦，学习开始啦",
         userTime: "00:24",
         mesNum: 2
       }
     ]
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      // console.log(userInfo);
      // that.setData({
      //   userInfo:userInfo
      // })
    })
  }
})
