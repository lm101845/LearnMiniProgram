// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options);
  },
  onUnload(){
    console.log('页面退出的时候回调这个函数');
    // 1.获取首页的页面对象
    // getCurrentPages返回当前所有栈的页面的
    const pages = getCurrentPages()
    console.log(pages);
    const home = pages[pages.length - 2]

    // 2.调用页面对象的方法
    home.setData({
      title:'呵呵呵'
    })
  },
  handleBackHome(){
    wx.navigateBack({
      delta: 0,
    })
  }
})