// pages/home/home.js
// import request from '/service/network.js'
// 这里不能写绝对路径，要写相对路径
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.原生的方式发送网络请求
    this.get_data_origin()

    // 2.使用封装的request发送网络请求
    // promise最大的好处就是防止出现回调地狱
    request({
      url:'http://152.136.185.210:7878/api/m5/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
  },
  get_data_origin(){
    // 发送网络请求
    // 1.发送最简单的get请求
    wx.request({
      url:'http://152.136.185.210:7878/api/m5/recommend',
      // method:'post',
      // 注意：post请求是不能够把参数拼到后面的，要写到data里面
      success:function(res){
        console.log(res);
      }
    })

    // get请求并且携带参数
    wx.request({
      url:'http://152.136.185.210:7878/api/m5/home/data',
      data:{
        // get请求后面的参数你可以单独拼到后面，也可以在data里单独去写
        type:'sell',
        page:1
      },
      success:function(res1){
        console.log(res1);
      }
    }),
    // post请求并且携带参数
    wx.request({
      url:'http://httpbin.org/post',
      method:'post',
      data:{
        name:'coderwhy',
        age:18
      },
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      }
    })
  }
})