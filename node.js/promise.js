// Promise 是一個表示非同步運算的最終完成或失敗的物件
// 物件
// 最終成功
// 最終失敗
// 最終: 非同步完成的時候

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      resolve(`完成工作 ${job} at ${dt.toISOString()}`);
    }, timer);
  });
};

let dt = new Date();
console.log(`開始工作 at ${dt.toISOString()}`);
let brushPromise = doWork("刷牙", 3000);
console.log("brushPromise: ", brushPromise);
brushPromise
  .then(
    (data) => {
      console.log("fulfilled", data);
      let eatPromise = doWork("吃早餐", 5000); 
      return eatPromise;
    (err) => {
      console.error("rejected", err);
    }
  )
  .then((data) => {
    console.log("fulfilled", data);
    let homeworkPromise = doWork("寫功課", 3000);
    return homeworkPromise;
    },
    (err) => {
      console.error("rejected", err);
    }
  )
  .then(
    (data) => {
    console.log("fulfilled", data);
    },
    (err) => {
    console.error("rejected", err);
    }
  );

