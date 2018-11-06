## yb-server-koa

### 技术架构
JavaScript 只是一个脚本语言，并非设计用于开发大型 Web 应用，JavaScript 没有提供类和模块的概念，而 TypeScript 扩展了 JavaScript 实现了这些特性。

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript的设计解决了JavaScript的“痛点”：弱类型和没有命名空间；这导致程序很难模块化，不适合开发大型程序。

 初始创建须知
 1.GitHub账号创建（此步可不操作）
 2.打开Terminal终端下载源码（来自GitHub）
 ```
 mkdir course  //创建一个名为couse的目录
 cd course    //进入course目录
 git clone https://github.com/yibiankeji/yb-server-koa.git   //下载源码
 npm install  //更新依赖
 mysql -u root -p   //进入数据库，需输密码
 create database ybkj;    //创建数据库
 exit  //退出数据库
 npm start  //启动KOA
 ```
打开浏览器输入    http://localhost:8000/api/user
反馈数据即为成功
