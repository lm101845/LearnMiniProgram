// 注册一个小程序示例
// 在app.js里面我们可能不会去做请求大量数据的操作 
// 主要用途有：
// 判断用户通过什么场景(方式)打开我们的小程序的(微信下拉、别人分享等)
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 在onLaunch这里其实也是可以有一个参数options的
    // console.log(options);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1.判断小程序的进入场景
      // console.log(options);
      switch(options.scene){
        case 1001:
        break;
        //你要对哪种场景做特殊处理，就对哪种场景进行判断
        case 1005:
        break;
      }

      // 2.获取用户的信息，并且获取到用户信息之后，将用户信息传递给服务器
      // 服务器可能想保存当前用户的登陆信息

      // 第1种获取用户信息的方式(getUserInfo接口以后可能废弃)
      wx.getUserInfo({
        success:function(res){
          // console.log(res)
        }
      })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData:{
    // 在app.js里面定义的全局数据是可以在所有的其他地方进行共享的
      name:'coderwhy',
      age:18
  }
})
