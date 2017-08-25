//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    groupList: [
      {
        groupName: "游戏",
        icon: "../../images/game.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "日迹",
        icon: "../../images/weather.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "看点",
        icon: "../../images/kan.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "音乐",
        icon: "../../images/song.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "直播",
        icon: "../../images/video.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "附近的群",
        icon: "../../images/qun.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "同城服务",
        icon: "../../images/cityse.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "运动",
        icon: "../../images/sport.png",
        rightImage: "../../images/tip.png"
      },
      {
        groupName: "腾讯课堂",
        icon: "../../images/class.png",
        rightImage: "../../images/tip.png"
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })

  },
  toSonPage: function (e) {
    var ind = e.currentTarget.dataset.ind;
    console.log(ind);
    switch(ind){
      case 3:
      wx.navigateTo({
        url: '/pages/dynamic/music/music',
      })
    }
    if(ind==3){

    }
  }
})
