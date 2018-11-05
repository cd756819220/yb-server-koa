import {   createUser, getUserByMobile, } from '../services/UserService';
import statusCode from '../utils/statusCode';

import docrypt from '../utils/crypt';

export default class UserController {
  public static async register (ctx) {
    const user = ctx.request.body;
    const { mobile, password } = user;

    if (mobile && password) {
      try {
        const existUser = await getUserByMobile(mobile);
        if (existUser) {
          ctx.response.status = 200;
          ctx.body = statusCode.ERROR_EXISTED('用户已经存在');
        } else {
          user.password = docrypt(password);
          const res = await createUser(user);
          if (!res) {
            ctx.response.status = 200;
            ctx.body = statusCode.ERROR_SQL('创建失败: 访问数据库异常！');
          } else {
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('创建用户成功', null);
          }
        }
      } catch (err) {
        ctx.response.status = 200;
        ctx.body = statusCode.ERROR_SYSTEM('创建失败：服务器内部错误！');
      }
    } else {
      ctx.response.status = 200;
      ctx.body = statusCode.ERROR_PARAMETER('创建失败: 参数错误');
    }
  }
}
