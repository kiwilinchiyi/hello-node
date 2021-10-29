const express = require("express");

// 路由
// app.Method(path,Handler)
// Method:GET,POST,PUT,DELETE,PATCH,....

let app = express();

app.get("/", (req, res) => {
  res.send("我是 Express 首頁");
});

app.get("/member", (req, res) => {
  res.send("我是 member");
});

// 3001 port
app.listen(3001, () => {
  console.log("express app 啟動了噢");
});
