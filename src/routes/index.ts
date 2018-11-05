import * as Router from 'koa-router';
import userController from '../controllers/user';
import baseController from '../controllers/base';

const router = new Router();

router.post('/api/user/register', userController.register);
router.get('/api/base/options', baseController.getOptions);

export { router };