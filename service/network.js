// export default function request(options) {
//   // wx.request({
//   //   url:options.url,
//   //   method:options.method || 'get',
//   //   data:options.data || {},
//   //   success:function(res){
//   //     console.log(res);
//   //   },
//   //   fail:function(err){
//   //     console.log(err)
//   //   }
//   // })
//   return new Promise((resolve, reject) => {
//       wx.request({
//         url: options.url,
//         method: options.method || 'get',
//         data: options.data || {},
//         success: function (res) {
//           // console.log(res);
//           resolve(res)
//         },
//         fail: function (err) {
//           // console.log(err)
//           reject(err)
//         }
//       })
//     })
//   }

// 更加简洁的写法
  export default function request(options) {
    return new Promise((resolve, reject) => {
        wx.request({
          url: options.url,
          method: options.method || 'get',
          data: options.data || {},
          success: resolve,
          fail: reject
        })
      })
    }