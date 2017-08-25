//logs.js
var util = require('../../utils/util.js')
Page({
  data: {   
    groupList:[
        {
           gName:"特别关心",
           gNum:0,
           flag:false,
           trans: "",
           gList:[
             {
               userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
               userName: "zyy",
               userSay: "zqs,I like you!"
             }
           ]                    
        },
        {
            gName: "常用群聊",
            gNum: 0,
            flag: false,
            trans: "",
            gList: [
              {
                userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
                userName: "李彦宏",
                userSay: "抄袭我的吧，我早都做过了"
              },
              {
                userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
                userName: "马云",
                userSay: "兄弟,跟我混吧,让你做CEO!",
              },
              {
                userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
                userName: "习近平",
                userSay: "小伙子,我最近缺人手,只要您愿意,我让你做省委书记",
              }
            ]      
        },
        {
          gName: "我的好友",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "zyy",
              userSay: "好久不见,最近还好吗？"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "刘诗诗",
              userSay: "最近拍戏好烦!",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "刘亦菲",
              userSay: "咱两认识多年了,试着交往交往吧",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "吴京",
              userSay: "兄弟,有意向拍战狼3吗？",
            }
          ]     
        },
        {
          gName: "三年情",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "马化腾",
              userSay: "小伙纸,别把腾讯玩坏了!",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "马云",
              userSay: "支付宝,交给你管理了!",
            }
          ]     
        },
        {
          gName: "大学情",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            }
          ]     
        },
        {
          gName: "前端开发组",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            }
          ]     
        },
        {
          gName: "家人",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            }
          ]     
        },
        {
          gName: "娇人笑",
          gNum: 0,
          flag: false,
          trans: "",
          gList: [
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了"
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            },
            {
              userImg: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
              userName: "李彦宏",
              userSay: "抄袭我的吧，我早都做过了",
            }
          ]     
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
  isShowList:function(e){
    var groupList = this.data.groupList;
    var ind=e.currentTarget.dataset.ind;
    groupList[ind].flag = groupList[ind].flag?false:true;
    groupList[ind].trans = groupList[ind].flag!="" ? "trans" : "";
    this.setData({ "groupList": groupList});
  }
})
