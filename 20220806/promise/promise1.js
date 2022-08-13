//Promise 是物件「 取代promise的交接 」物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值
// 物件 new Promise（）;
// 建構式Promise , 呼叫的時候需要傳一個參數 executor 給他
// new Promise （ executor ）
// executor 本身也是一個函式 有兩個參數 resolve  reject
// function executor (resolve,reject)

// ∆ 非同步：把非同步程式碼丟進 executor 裡
// ∆ 外包公司不會告訴你啥時完成但最終會成功或失敗
// -最終完成：呼叫resolve -> resolve傳資料
// -最終失敗：呼叫reject  -> reject 失敗原因（字串 數字 error物件）

//Promise 有幾種狀態 
// 外包公司正在做pending 
// 呼叫resolve  pending->fulfilled
// 呼叫reject  pending->rejected

// 若沒有return物件 -> brushPromise會變成undefine
function doWork(job, timer) {
  
  return new Promise((resolve, reject) => {
    //為了模擬非同步工作 [一定會成功]
  
  //非同步運算
    setTimeout(() => {
      let dt = new Date();
      //如果失敗 呼叫reject
      //成功的訊息呼叫resolve把成功的訊息丟進去
      resolve(`完成工作 ${job} at ${dt.toISOString()}`);
    }, timer);
  });
}

let dt = new Date();
console.log(`開始工作 at ${dt.toISOString()}`);
// 刷牙3 -> 吃早餐4 -> 寫功課5
let brushPromise = doWork("刷刷牙", 3000);
console.log(brushPromise); //=>pending還不知道結果「外包公司正在做事時」
//有結果時會呼叫 reject or resolve

//  .then 會把是函式 要再傳一個函式進去 ,傳入值是resolve丟回來的東西
//new出來的Promise 成功的話會呼叫resolve , .then會把他接住
//失敗的話會呼叫reject , .catch 會把他接住
brushPromise
  .then((data) => {
    //用來接住resolve
    console.log("在promise裡", data);
    
    let eatPromise= doWork('吃早餐',5000);
    return eatPromise;
  })
  .then((data)=>{
    console.log("在promise裡", data)

    let writePromise=doWork('寫功課',3000);
    return writePromise;
  })
  .then((data)=>{
    console.log("在promise裡", data)
  })
  .catch((err) => {
    //用來接住前面所有promise任何的reject 
    console.log("在promise裡發生錯誤", err);
  });

