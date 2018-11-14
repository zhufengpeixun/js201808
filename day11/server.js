//
let express = require("express");

let  app = express();

app.get("/",function (req,res) {
    console.log(100);
    res.end("1")
})
app.listen(3000);

