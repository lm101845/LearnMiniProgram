// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，小程序！',
    firstname:'kobe',
    lastname:'bryant',
    age:20,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:45,
    movies:['星际穿越','星球大战','星星'],
    nums:[
      [10,84,11,8],
      [30,14,51,18],
      [94,14,91,73],
    ],
    letters:['a','b','c','d']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    // console.log('--------');
    // 注意：一定要先使用setData 
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score + 6
    })
  },
  numberFoFixed(value){
    return  value.toFixed(2)
  }
})