const axios = require("axios");
const moment = require("moment");

let stockNo = "2330";
let format = "json";
let date = moment().format("yyyymmdd");




axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      stockNo,
      response: format,
      date,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

