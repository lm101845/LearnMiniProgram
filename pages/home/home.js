// pages/home/home.js

const app = getApp()
// getApp()函数可以获取App()函数产生的示例对象
console.log(app.globalData.name);
console.log(app.globalData.age);

const name = app.globalData.name
const age = app.globalData.age

// 注册一个页面
// 每个页面也有自己的生命周期函数
Page({
  // --------------------2.初始化数据---------------------------------
  data: {
    message: '哈哈哈',
    list: []
  },
  handleGetUserInfo(event) {
    // console.log('---------');
    // 这个函数会传过来一个事件对象的
    // 当用户的手指点击小程序的界面的时候，它就会产生一个对象
    // 小程序是有把event对象传给我们的
    // 但是这个event对象是没有我们当前用户的信息的
    console.log(event);
  },

  // --------------------1.监听页面的生命周期函数---------------------
  // 页面被加载出来
  onLoad() {
    console.log('onLoad');
    const _this = this
    wx.request({
      // 你要发送网络请求，必须在某个地方进行一下配置才行
      // 箭头函数中的this是一层层向上找的(最后找的是page对象的this)
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      // success :(res)=>{
      //   console.log(res);
      //   const data = res.data.data.list
      //   this.setData({
      //     list:data
      //   })
      // }

      // 如果不写箭头函数的写法，这里的this可能就有问题
      success: function (res) {
        console.log(res);
        const data = res.data.data.list
        // console.log(this);
        console.log(_this);
        // 此时这里的this指向的是undefined！所以产生了报错
        // 我们可以前面写const _this = this,然后这里写_this.setData()才行
        // this.setData({
          _this.setData({
          list: data
        })
      }
    })
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady');
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow');
  },
  // 当页面隐藏起来时
  onHide() {
    console.log('onHide');
  },
  onUnload() {
    console.log('onUnload');
  },

  // ---------------------3.监听wxml中相关的事件------------------------------------
  handleViewClick() {
    console.log('哈哈哈被点击了');
  },

  // ----------------------4.监听其他事件-----------------------------------------------
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj);
  },

  // 监听页面滚动到顶部(上拉加载更多)
  onReachBottom() {
    console.log('页面滚动到了顶部');
  },
  onPullDownRefresh() {
    console.log('下拉刷新的事件');
    // 前提是必须在home.json里面将enablePullDownRefresh改成true才能监听到
  }
})