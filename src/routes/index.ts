import * as Router from 'koa-router';
import userController from '../controllers/user';

const router = new Router();

router.get('/api/user', userController.getUser);

export { router };