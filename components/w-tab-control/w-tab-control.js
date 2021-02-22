// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },
  data: {
    currentIndex:0
  },
  methods: {
    handleItemClick(event){
      // 我想知道我点击的是哪个？是衣服？裤子？还是鞋子？
      // 这时候可以使用event来取出index了
      const index = event.currentTarget.dataset.index
      console.log('--------------',event);

      // 2.修改currentIndex
      this.setData({
        currentIndex:index
      })

      // 3.通知页面内部的点击事件
      // this.triggerEvent('itemClick',{index:index,title:this.properties.titles[index]},{})
      this.triggerEvent('itemClick',{index,title:this.properties.titles[index]},{})
    }
  }
})
