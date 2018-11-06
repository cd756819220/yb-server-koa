## yb-server-koa

### 项目背景
出于技术提升的需要，使用最近的js主流技术去开发前后端分离的web系统，本项目主要实现登录注册、修改密码，上传头像和修改用户基本信息的功能，没有具体的业务应用场景，主要用来学习掌握最基础的node开发知识！

### 技术架构
前后端分离，基于JS的超集TS开发，没有选用大而全360的thinkjs或阿里的egg, 而是基于它们底层都使用的web开发框框架koa, 同时使用sequelize作为ORM操作mysql数据库, 使用koa-jwt进行token校验，使用koa-body实现图片上传等。

核心库当前版本为：typescript 3.1.x, node v10.13.0, koa 2.6.x, sequelize 4.41.x, koa-jwt 3.5.x, koa-body 4.0.x等。

### 参与学习或开发
- 下载源码
  ```
  git clone https://github.com/yibiankeji/yb-server-koa.git   
  ```
- 安装项目有关依赖
  ```
  cd yb-server-koa &&  npm install 
  ```
- 安装mysql数据库并创建ybkj数据库
  ```
  brew install mysql (具体安装上网搜)
  mysql -u root -p   //进入数据库，需输密码
  create database ybkj;    //创建数据库
  exit  //退出数据库
  ```
- 启动项目
  ```
  npm start  
  ```
- 测试服务
  ```
  curl -H "Content-Type:application/json" -X POST -d '{"username":"18911681482", "password":"123456"}' http://localhost:8000/api/user/login
  // 若未创建，返回用户不存在即说明成功
  ```

### 各目录及文件功能
- ├── README.md 介绍项目的有关情况
- ├── assets  放项目的静态资源
- │   └── uploads 这里放的用户上传的头像图片
- ├── launch.json vscode编辑结合ts配置文件
- ├── node_modules 项目用到第三方依赖
- ├── nodemon.json 自动监测代码变化而不需重启的工具nodemon的配置文件。
- ├── package-lock.json npm借鉴yarn而在npm 5引入的锁定依赖版本的配置文件
- ├── package.json 项目有关依赖、运行脚本
- ├── src 项目我们实际写主要的代码
- │   ├── app.ts 入口文件，启动服务器、监听端口，引入各种中间件
- │   ├── config 项目的数据库等得配置文件
- │   ├── controllers 控制器，对各种请求进行处理，面向逻辑
- │   ├── middlewares 中间件，本地我们自己写得完善整个项目的功能
- │   ├── models 定义各种数据的表格，定义数据
- │   ├── routes 各种url对应的路由，于控制器的处理函数一一对应
- │   ├── services 定义各种操作数据库的方法，操作数据
- │   └── utils 定义各种工具函数
- ├── tsconfig.json ts的配置文件，包括作用的代码块，转为js输出路径等
- └── tslint.json ts的格式校验配置，各种规则