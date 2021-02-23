// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title:'加载中ing',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功');
      },
      fail:function(){
        console.log('展示弹窗失败');
      },
      complete:function(){
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModal(){
  wx.showModal({
    title:'我是标题',
    content:'我是内容哈哈哈',
    // showCancel:false,
    cancelText:'退出',
    cancelColor:'red',
    success:function(res){
      console.log(res);
      if(res.cancel){
        console.log('用户点击了取消按钮');
      }
      if(res.confirm){
        console.log('用户点击了确定按钮');
      }
    }
  })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })

    setTimeout(()=>{
      // 必须手动调用hideLoading才会让Loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res);
        // switch(res.tapIndex)
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title:'你好啊！',
      path:'/pages/about/about',
      // imageUrl:'图片的地址/本地图片/网络图片均可'
      imageUrl:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3026930057,3755157843&fm=26&gp=0.jpg'
    }
  }
})

