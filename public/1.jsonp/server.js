let  express = require("express");
let app = express();
// app.get : 前端是get请求； 请求的路由是/getData;
app.get("/getData",function (req,res) {
    // req: 请求体  res : 响应体；
    let  {cb} =  req.query;
    //console.log(cb);
    // res.end :
    res.end(`show("我喜欢你们")`)
})
app.listen(3000);
