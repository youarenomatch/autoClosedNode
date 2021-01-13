const koa=require('koa')
const Router=require('koa-router')
const mongoose=require('mongoose')

// 实例化koa
const app=new koa()
const router=new Router()

// 路由
router.get("/",async ctx=>{
    ctx.body={msg:'hello koa'}
})

// 连接数据库
mongoose.connect('mongodb://localhost:27017/koa-test',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log('mongodb已经成功连接')
})
.catch(err=>{
    console.log(err)
})
// 配置路由
app.use(router.routes()).use(router.allowedMethods())

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})