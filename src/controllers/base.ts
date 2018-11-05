import statusCode from '../utils/statusCode';

export default class BaseController {
  public static async getOptions (ctx) {
    try {
      const data = {
        roleOpts: [
          { text: '管理员', value: 0 }, 
          { text: '讲师', value: 1 }, 
          { text: '助教', value: 2 }, 
          { text: '学员', value: 3 }, 
          { text: '游客', value: 4 },
        ],
        sexOpts: [
          { text: '男', value: 0 }, 
          { text: '女', value: 1 }, 
        ],
      };
      ctx.response.status = 200;
      ctx.body = statusCode.SUCCESS('查询成功', data);
    } catch (err) {
      ctx.response.status = 200;
      ctx.body = statusCode.ERROR_SYSTEM('查询失败: 服务器内部错误！');
    }
  }
}