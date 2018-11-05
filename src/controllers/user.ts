import * as jwt from 'jsonwebtoken';
import * as util from 'util';
import bcrypt from 'bcryptjs';
import docrypt from '../utils/crypt';
import statusCode from '../utils/statusCode';

import {   createUser, getUserByMobile, } from '../services/UserService';

const verify = util.promisify(jwt.verify);

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

  public static async login (ctx) {
    const user = ctx.request.body;
    const { mobile, password } = user;

    if (mobile && password) {
      try {
        const existUser = await getUserByMobile(mobile);
        if (!existUser) {
          ctx.response.status = 200;
          ctx.body = statusCode.ERROR_EXISTED('用户不存在');
        } else {
          const { id, name, role, profilePhoto, birthday, sex, address } = existUser;
          if (bcrypt.compareSync(password, existUser.password)) {
            const token = jwt.sign({ mobile, id }, 'jwtSecret', { expiresIn: '24h' });
            const userInfo = {
              id, name, mobile, role, profilePhoto, birthday, sex, address,
            };
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('登录成功', { token, userInfo });
          } else {
            ctx.response.status = 200;
            ctx.body = statusCode.ERROR_LOGIN('登录失败：用户名或密码错误');
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
