import koa from 'koa'
let app = new koa()

app.experimental = true

app.use(async function () {
  this.body = await Promise.resolve('Hello WWW!')
})

app.listen(3000)
