
Page({
  data: {
    logs: [],
    name: "zyy",
    sex: "女",
    age: 20
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })

  },
  viewTap: function () {
    var nage = 18;
    this.setData({
      age: nage
    })
    console.log(this.data);
  }
})
