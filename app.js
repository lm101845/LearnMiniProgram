const TOKEN = 'token'
App({
  // 对象这个东西，一旦小程序关闭掉，内存会被回收，这个东西就没有
  // 下次用户再进来的时候，用户还得登陆
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 1.先从缓存中取出token
    // 如果取不出来token，之后再进行登陆
    // 如果可以取出来token的话，我只要验证一下token有没有过期就可以了
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值
    if(token && token.length !== 0){
      // 首先token要有值，并且也不能是空字符串
      // 这种情况下表示已经有token了
      // 现在只需要验证token是否过期就可以了
      this.check_token(token)
    }else{
      // 没有token才进行登陆操作
      this.login()
      // 代码抽离，直接调用login方法就可以了
    }
    // 登陆操作
  },
  check_token(token){
    // 检查token有无过期的函数
    console.log('执行了验证token的操作');
    wx.request({
      url:'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        console.log(res);
        if(!res.data.errCode){
          console.log('token有效');
          this.globalData.token = token
        }else{
          // 一旦这个token有问题的话
          // 就再来进行一次登陆操作
          this.login()
        }
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  },
  login(){
    // 把这个代码抽出来一个login函数
    console.log('执行了登陆操作');
    wx.login({
      // code只有5分钟的有效期
      success:(res)=>{
        console.log(res);
        // 1.获取code
        const code  = res.code

        // 2.将code发送给我们的服务器
        wx.request({
          // url: 'http://152.136.185.210:7878/api/m5/login',
          url: 'http://123.207.32.32:3000/login',
          method:'post',
          data:{
            // code:code
            code
            // es6增强写法
          },
          success:(res)=>{
            console.log(res);
            // 1.取出token
            const token = res.data.token

            // 2.将token保存在globalData中
            this.globalData.token = token
            // 这个要注意用箭头函数，否则拿到的这个this是undefined

            // console.log(this.globalData.token);
            // 除了把token保存到app.js以外，还要进行本地存储
            // 不然把小程序页面关了就没有了

            // 3.还要进行本地存储
            wx.setStorageSync(TOKEN,token)
              // setStorage方法是异步的
              // setStorageSync方法是同步的
          }
        })
      }
    })
  }
})
