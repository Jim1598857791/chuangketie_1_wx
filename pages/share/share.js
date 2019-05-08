const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    isShowCav: true,
    id: "",
    display: "block",
    scores: 99,
    balance: 99,
    canvasWidth: 300,
    canvasHeight: 300,
    shareImgSrc: null,
  },
  hideview: function () {
    this.setData({
      display: "none"
    })
  },

  onShareTap: function () {
    wx.showLoading({
      title: '生成中',
    })
    this.doCanvas();

  },
  funShareToFriend: function () {

    console.log("分享给朋友")
  },
  funShareToFriendCycle: function () {
    wx.previewImage({
      current: this.data.shareImgSrc, // 当前显示图片的http链接
      urls: [this.data.shareImgSrc] // 需要预览的图片http链接列表
    })
    console.log("分享到朋友圈")
  },
  funSaveToMoblie: function () {
    wx.saveImageToPhotosAlbum({
      filePath: "",
      success(res) {
        console.log("储存成功!res=", res);
      },
      fail(res) {
        console.log("储存失败!res=", res);
      }
    })
    console.log("保存到本地")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = wx.getSystemInfoSync()
    let pix = info.windowWidth / 750
    let canvasHeight = 925 * pix

    let canvasWidth = 520 * pix
    this.setData({
      canvasWidth, canvasHeight
    })
    this.onShareTap()
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
    this.setData({
      windowWidth: wx.getSystemInfoSync().windowWidth,
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
    console.log("宽度=", this.data.windowWidth, "高度=", this.data.windowHeight)
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
    console.log("已分享")
    return {
      title: '创客贴',
      desc: '作图神器!',
      path: '/page/StartPage/StartPage'
    }
  },
  doCanvas: function () {
    var width = this.data.canvasWidth;
    var height = this.data.canvasHeight;
    var ratio = width / 750;
    var that = this;

    // canvas绘制文字和图片
    const ctx = wx.createCanvasContext('myCanvas');
    //背景图
    var bgImagePath = '../../images/share/backgroundImage.png';
    //二维码
    var qrImgPath = '../../images/share/qrCode.png';

    // 画背景
    ctx.drawImage(bgImagePath, width * 0.153, height * 0.133, width * 0.693, height * 0.561);

    // 画二维码
    ctx.drawImage(qrImgPath, width * 0.153, height * 0.695 - 1, width * 0.693, height * 0.131 * 0.76);

    ctx.draw(false, setTimeout(function () {
      wx.canvasToTempFilePath({
        width: that.data.windowWidth,
        height: that.data.windowHeight,
        destWidth: that.data.windowWidth * 4,
        destHeight: that.data.windowHeight * 4,
        canvasId: 'myCanvas',
        success: function (res) {
          console.log("res.tempFilePat=", res.tempFilePath);
          wx.hideLoading();
          that.setData({
            shareImgSrc: res.tempFilePath
          })

        },
        fail: function (res) {
          wx.hideLoading();
          wx.showToast({
            title: '生成失败',
            icon: "none"
          })
        }
      })
    }, 200));
  },
  navigate: function () {
    console.log("点击了自定义状态栏");
  }

})