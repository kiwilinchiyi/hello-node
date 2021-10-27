const mysql = require("mysql");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "kiwi",
  password: "123456",
  database: "stock", //my_db
});

connection.connect();
// connection.query("select*from stock", function (error, results) {
//   if (error) {
//     console.error("資料庫錯誤", error);
//   } else {
//     console.log("茶道資料", results);
//   }
// });

// connection.end();
