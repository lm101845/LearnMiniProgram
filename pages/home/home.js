Page({
  // js代码里面必须调用Page函数，并且传入对象的字面量的
  // 注意，这个Page要大写
  // 这个大括号就对象的字面量
  // 双大括号语法{{}}：Mustache
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      {id:110,name:'Kobe',age:30},
      {id:120,name:'James',age:44},
      {id:130,name:'Curry',age:10},
      {id:140,name:'Why',age:18},
    ],
    // 我们很多数据如果不想写死的话，就在data里面给它一个定义
    // 而且data里面的数据你也可以不写死
    // 这些数据可能来自服务器
    counter:0
  },
  handleBtnClick(){
    console.log('点击了加号');
    // 1.错误的做法：界面是不会刷新的
    // this.data.counter+=1
    // 但是这样写界面上没有效果，但是counter已经变化了
    // console.log(this.data.counter);
    // 小程序不像Vue，数据变化，页面也跟着变化
    // 小程序，数据变化了，页面不会发生变化
    // 界面没办法监听数据发生变化的，它是监听不到的

    // 2.this.setData()——和React有点相似
    this.setData({
      // 传入对象字面量：就是一个大括号
      // counter:100
      // 这个表示点击一次，就把counter改为100
      // 之后再点击就不再有反应了

      // 如果希望递增则这样做
      counter:this.data.counter + 1
      // 我试了写++不行
    })
  },
  handleSubtraction(){
    console.log('点击了减号');
    this.setData({
      counter:this.data.counter-1
    })
  }
})

// 编程范式
// 1.命令式编程：原生操纵DOM  
// 2.声明式编程: Vue/React/Angular