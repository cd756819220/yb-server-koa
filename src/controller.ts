import User from './model';

export default class UserController {
  public static async getUser (ctx) {
    if (1) {
      const user = await User.findOne( {where: { id: 1 }} );
      ctx.status = 200;
      ctx.body = user;
    } 
  }
}
