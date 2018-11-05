## yb-server-koa
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
