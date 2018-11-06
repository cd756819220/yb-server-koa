import * as jwt from 'jsonwebtoken';
import * as util from 'util';
import * as bcrypt from 'bcryptjs';
import docrypt from '../utils/crypt';
import statusCode from '../utils/statusCode';

import { updateUserById, getUserById, createUser, getUserByMobile } from '../services/UserService';

const verify = util.promisify(jwt.verify);

export default class UserController {
  public static async updateUserById (ctx) {
    const { id } = ctx.params;
    const reqData = ctx.request.body;
    if (!id) {
      ctx.response.status = 200;
      ctx.body = statusCode.ERROR_PARAMETER('更新失败: 参数错误');
    } else {
      try {
        await updateUserById(id, reqData);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('更新成功', null);
      } catch (err) {
        ctx.response.status = 200;
        ctx.body = statusCode.ERROR_SYSTEM('更新失败：服务器内部错误！');
      }
    }
  }

  public static async getUserById (ctx) {
    const { id } = ctx.params;
    if (!id) {
      ctx.response.status = 200;
      ctx.body = statusCode.ERROR_PARAMETER('查询失败: 参数错误');
    } else {
      try {
        const user = await getUserById(id);
        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS('查询成功', user);
      } catch (err) {
        ctx.response.status = 200;
        ctx.body = statusCode.ERROR_SYSTEM('查询失败：服务器内部错误！');
      }
    }
  }

  public static async register (ctx) {
    const reqData = ctx.request.body;
    const { mobile, password } = reqData;

    if (mobile && password) {
      try {
        const existUser = await getUserByMobile(mobile);
        if (existUser) {
          ctx.response.status = 200;
          ctx.body = statusCode.ERROR_EXISTED('用户已经存在');
        } else {
          reqData.password = docrypt(password);
          if (!reqData.hasOwnProperty('role')) { // 如果没有传入role，则默认为游客，后期管理员可以改变角色
            reqData.role = 4;
          }
          const newUser = await createUser(reqData);
          if (!newUser) {
            ctx.response.status = 200;
            ctx.body = statusCode.ERROR_SQL('创建失败: 访问数据库异常！');
          } else {
            const user = await getUserByMobile(newUser.mobile);
            const { name, realName, mobile, id } = user;
            const userInfo = { id, name, realName, mobile };
            const token = jwt.sign({ mobile, id }, 'jwtSecret', { expiresIn: '24h' });
            ctx.response.status = 200;
            ctx.body = statusCode.SUCCESS('创建用户成功', { token, userInfo });
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
    const reqData = ctx.request.body;
    const { mobile, password } = reqData;

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
        console.log('ddd', err)
        ctx.response.status = 200;
        ctx.body = statusCode.ERROR_SYSTEM('登录失败：服务器内部错误！');
      }
    } else {
      ctx.response.status = 200;
      ctx.body = statusCode.ERROR_PARAMETER('登录失败: 参数错误');
    }
  }
}
