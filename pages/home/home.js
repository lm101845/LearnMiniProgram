// pages/home/home.js
Page({
  data:{
    counter:0,
    isShow:true
  },
  handleIncrement(event){
    console.log('----------',event);
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleTabClick(event){
    console.log(event);
  },
  handleIncrementCpn(){
    console.log('----------------');
    // 最终目的：修改my-sel中的counter
    // 组件对象.setData()
    // const my_sel = 获取组件对象
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel);

    // 2.通过setData修改组件中的数据
    // 但是这样的做法并不推荐(可以，但是不规范)
    // 变量的修改最好可以暴露出去一个统一的接口
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })

    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  },
  handleChangeShow(){
    this.setData({
      itShow:!this.data.isShow
    })
  }
})