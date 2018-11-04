export default class UserController {
  public static async getUser (ctx) {
    if (1) {
      ctx.status = 200;
      ctx.body = '你很帅，写代码更帅！';
    } 
  }
}
