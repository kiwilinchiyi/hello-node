// Promise 是一個表示非同步運算的最終完成或失敗的物件
// 物件
// 最終成功
// 最終失敗
// 最終: 非同步完成的時候

let doWork = function (job, timer, isOK) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      if (isOK) {
        resolve(`完成工作 ${job} at ${dt.toISOString()}`);
      } else {
        reject("故意失敗了");
      }
    }, timer);
  });
};

let dt = new Date();
console.log(`開始工作 at ${dt.toISOString()}`);

// 刷牙(3000) --> 吃早餐(5000) --> 寫功課(3000)
async function allJobs() {
  let data1 = await doWork("刷牙", 3000, true);
  console.log("data1", data1);

  let data2 = await doWork("吃早餐", 5000, true);
  console.log("data2", data2);

  let data3 = await doWork("寫功課", 3000, true); // doWork 本身是回傳 promise
  console.log("data3", data3);
}

console.log("Before");
allJobs();
console.log("After");
