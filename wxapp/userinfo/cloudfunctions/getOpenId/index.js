// 云函数入口文件
const cloud = require('wx-server-sdk')
// 初始化这朵云
cloud.init()
// cloud.init({
//   traceUser: true,
//   env: 'yky-0go849lrd628f36f'
// })

// 云函数入口函数
// 一个云函数就是一个项目,独立的,serverless
// main 入口
exports.main = async (event, context) => {
  // event 是一次向云端的请求事件
  return event.userInfo
}