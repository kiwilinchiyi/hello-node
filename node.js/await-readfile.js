const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});
console.log(p); // pending -> fulfilled / reject

(async () => {
  try {
    let data = await p;
    console.log("await 讀檔正確", data);
  } catch (e) {
    console.error(e);
  }
})();

// // 改用 catch 來接錯誤
// p.then((data) => {
//   console.log("promise讀檔正確", data);
// }).catch((err) => {
//   console.error("promise讀檔失敗", err);
// });
