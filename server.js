import koa from 'koa'
let app = koa()

app.experimental = true

app.use(async function () {
  this.body = await Promise.resolve('Hello WWW!')
})

app.listen(3000)
