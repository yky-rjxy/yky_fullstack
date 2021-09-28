# ES6
  - js 的最新版本
    传统的es5 + 最新的es6 + 版本
    1. ES6手册， 阮一峰
    https://es6.ruanyifeng.com/
    2. ES6 15篇

  ES6知识点通过大厂的审核
  通过阮一峰的ES6在线刷， 每周看一篇冴羽的文章 (ES6 完全使用手册)

http://localhost:8080/
http://127.0.0.1:8080      http://127.0.0.1:8080/user.json

1. HTTP Server
  live-server 启动， HTTP服务， 双击打开一个页面要一直刷新
  协议 http://
  fetch(url)  // Promise 的一个实例
    .then(data => {

    })  //  异步的， 所以要等
2. new Promise((resolve, reject) => {
  resolve(2)
}) // 有费时的任务 不能同步

3. p1.then()