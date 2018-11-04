import * as Koa from 'koa';
const app = new Koa();

const md = ctx => {
  ctx.response.body = '您好！';
};

app.use(md);
app.listen(8000);