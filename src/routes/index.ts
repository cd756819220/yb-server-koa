import * as Router from 'koa-router';
import * as KoaBody from 'koa-body';
import * as path from 'path';

import userController from '../controllers/user';
import baseController from '../controllers/base';

const router = new Router();

router.post('/api/user/login', userController.login);
router.post('/api/user/register', userController.register);
router.get('/api/user/:id', userController.getUserById);
router.put('/api/user/:id', userController.updateUserById);

router.get('/api/base/options', baseController.getOptions);
router.post('/api/base/upload', KoaBody({
  multipart: true,
  strict: false,
  formidable: {
    uploadDir: path.join(__dirname, '../../assets/uploads/'),
  },
}), baseController.uploadPhoto);

export { router };