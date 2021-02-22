// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String
    // 这种写法有个缺点，title没有设置默认值
    // 如果别人没有传title，则不会显示任何内容
    title:{
      type:String,
      value:'我是默认标题',
      observer:function (newVal,oldVal) {
        console.log(newVal,oldVal)
      }
    },
  },
  externalClasses:['titleclass']
})
