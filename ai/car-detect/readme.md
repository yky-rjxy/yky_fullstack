# 基于百度大脑做node AI应用

- node 项目搭建 project 开发工序
   1. 运行在后端
   npm 命令集
   - npm init 初始化命令
       package.json
       scripts
       -y             npm init -y   加了-y则自动生成
   - npm run  dev 
       node index.js
   - npm  yarn 都叫包管理器工具
       第三方 库 
   - npm i -g baidu-aip-sdk
       安装 到 全局
       不带-g 当前目录下
   - node_modules 目录
    npm init
       version: (1.0.0) 0.1.0    
       description: my first AI project    
       author: yky
       yes   
       在package.json里的scripts添加一行"dev": "node index.js",
    npm run    可以查看package.json里的scripts字段里有哪些脚本命令， 如 test、dev
    npm run dev
- AI 作为黑盒子
    SDK        
        npm i baidu-aip-sdk   
        npm i -g yarn   
        yarn --version   
        删掉node_modules   
        yarn add baidu-aip-sdk
- fs 模块
    1. 语言内置模块
        fs.readFile/writeFile/isDirectory/staStas
    2. url, callback 异步的
        先处理错误,err第一位
        data 数据

    百度大脑
        登录 创建应用 https://login.bce.baidu.com/  
        车辆识别 https://ai.baidu.com/docs#/ImageClassify-API/fe686c3a 
        车牌识别 https://ai.baidu.com/docs#/OCR-Node-SDK/70688016
