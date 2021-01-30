// pages/home/home.js

const app = getApp()
// getApp()函数可以获取App()函数产生的示例对象
console.log(app.globalData.name);
console.log(app.globalData.age);

const name = app.globalData.name
const age =  app.globalData.age

Page({
  handleGetUserInfo(event){
    // console.log('---------');
    // 这个函数会传过来一个事件对象的
    // 当用户的手指点击小程序的界面的时候，它就会产生一个对象
    // 小程序是有把event对象传给我们的
    // 但是这个event对象是没有我们当前用户的信息的
    console.log(event);
  }
})