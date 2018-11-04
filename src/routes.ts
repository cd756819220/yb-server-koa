import * as Router from 'koa-router';
import controller from './controller';

const router = new Router();

router.get('/api/user', controller.getUser);

export { router };