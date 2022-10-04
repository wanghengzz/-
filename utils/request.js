// 发送ajax请求

// 封装功能函数
import config from '../utils/condig'
export default (url,method='GET',data={})=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      //  http://localhost:3000/banner
       url:config.host+url,
       method,
       data,
       success:(res)=>{
        resolve(res.data)
       },
       fail:(err)=>{
         reject(err)
       }
     })
  })
}