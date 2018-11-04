import * as Koa from 'koa';
import * as koaJwt from 'koa-jwt';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as pathToRegexp from 'path-to-regexp';

import { router } from './routes';
import { token } from './token';

const app = new Koa();

app.use(token());
app.use(cors());
app.use(bodyParser());
app.use(koaJwt({
  secret: 'jwtSecret',
}).unless((ctx) => {
  if (/^\/api/.test(ctx.path)) {
    return pathToRegexp([
      '/api/user',
    ]).test(ctx.path);
  }
  return true;
}));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);