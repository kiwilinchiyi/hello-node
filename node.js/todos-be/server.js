const express = require("express");
const app = express();
const mysql = require("mysql");
const Promise = require("bluebird");
require("dotenv").config();

// connect ro DB
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection = Promise.promisifyAll(connection);
connection.connect();

// middleware
app.use((req, res, next) => {
  console.log("Hit this middleware!!!");
  next();
});

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/api/member", (req, res) => {
  connection.query("SELECT * FROM members", function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
  connection.end();
});

app.get("/post", (req, res) => {
  res.send("post page");
});

app.get("/api/todos", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM todos");
  res.json(data);
  console.log(data);
});

app.use((req, res, next) => {
  res.send("404 page not found!!!");
});

app.listen(3502, () => {
  console.log("running on port 3502");
});
