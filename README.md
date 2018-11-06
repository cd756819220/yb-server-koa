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
