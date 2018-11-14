let express = require('express');
let app = express();
//
/*app.use(express.static(__dirname))*/
// app.use: express 的一个中间件；
// 会在所有的返回数据之前对当前的请求进行处理；
app.use(function (req,res,next) {
    // 设置允许的访问的url的源;
    res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
    // put 需要重新设置；
    // 允许put的请求方式
    res.setHeader("Access-Control-Allow-Methods","PUT");
    // 允许设置请求头；
    res.setHeader("Access-Control-Allow-Headers","name");
    // 下一步；
    next();
});
app.put("/getData",function (req,res) {
    console.log(req.headers);
    res.end("222")
})

app.get("/getData",function (req,res) {
    res.end("1111")
})

app.listen(3000);
