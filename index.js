const koa = require('koa');
const app = new koa();

const md = ctx => {
  ctx.response.body = '您好！';
};

app.use(md);
app.listen(8000);