App({
  // 这些都是一些生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成了：onLaunch');
    // wx.request({
    //   url: 'url',
    // })

    // 因为它是异步调用，所以下面的代码是在'界面显示出来：onShow'后面才显示出来的
    wx.getUserInfo({
      // 获取用户信息
      // 数据拿到之后再进行回调的
      success:function(res){
        console.log(res);
      }
    }),

    // 模拟一个错误
    setTimeout(() => {
      const err = new Error()
      throw err
    }, 3000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来：onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
      console.log('界面被隐藏时会执行：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生一些错误时会执行');
  }
})
