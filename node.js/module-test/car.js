let brand = "ford";
let color = "red";
let size = "1000";
let price = "100";

// 模組除了給人共用以外，可以封裝不想要透漏的資料、功能。

function getBrand() {
  return brand;
}

function showInfo() {
  console.log(`這台車的顏色是${color}、CC數是`);
}


// module.exports = {
//   getBrand,
//   showInfo,
//   price,
// };

exports.getBrand=getBrand;

