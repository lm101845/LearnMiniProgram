// components/my-mslot/my-mslot.js
Component({
  // ------------让使用者可以给组件传入数据------------------
  properties:{
    title:{
      type:String,
      value:'',
      observer:function(newVal,oldVal){

      }
    }
  },
  // ------------定义组件内部的初始化数据------------------
  data:{
    counter:0
  },
  // ------------定义组件内部的函数------------------
  methods:{
    foo(){

    }
  },
  // ------------定义组件的配置选项-----------------
  // multipleSlots:在使用多插槽时需要设置为true
  // styleIsolation:设置样式的隔离方式
  options:{
    multipleSlots:true
    // 只有加上这个属性的话才可以使用多插槽
  },

  // ------------外界给组件传入额外的样式-----------------
  externalClasses:[],

  // ------------可以监听属性的改变-----------------
  observers:{
    counter:function(newVal){
      // 注意，它这里只有newVal
      // oldVal为undefined
      console.log(newVal);
    }
  },

// --------------------组件中监听生命周期函数------------------------
// 分成了2种
// 1.监听所在页面的生命周期
pageLifetimes:{
  show(){
    console.log('监听组件所在页面显示出来时');
  },
  hide(){
    console.log('监听组件所在页面隐藏起来时');
  },
  resize(){
    console.log('监听页面尺寸的改变');
  }
},
// 2.监听组件本身的生命周期
lifetimes:{
  created(){
    console.log('组件被创建');
  },
  attached(){
    console.log('组件被添加到页面中');
  },
  ready(){
    console.log('组件被渲染出来');
  },
  moved(){
    console.log('组件被移动到节点另一个位置');
  },
  detached(){
    console.log('组件被移除掉了');
    // 为什么这个移除了没有显示啊！！！！！！！！！
  }
}
})
