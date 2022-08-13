//千萬部要把 .then 和await寫在一起  搞混執行順序

function doWork(job, timer) {
  //非同步運算
  return new Promise((resolve, reject) => {
    //為了模擬非同步工作 [一定會成功]
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


// async函式特性回傳的都是promise
async function test() {

    console.log('in test')
    // js 有non-blocking 的特性
    //await 並非block住

  // await (暫停鍵)關鍵字一定只能出現在Async裡面
  //＝> 因為要告訴他暫停的範圍 async就像檔案夾（做完一半先蓋起來做待回爾再繼續做）
  // => await 暫停  當被await的promise被resolve or reject的時候解除暫停
  // => async 是暫停的範圍

  // callback 是因為js把東西交接給別人後 交接回來的方式叫callback
  
  //錯誤處理 try catch
try{
    let brushResult = await doWork("刷刷牙", 3000);
    console.log("await brush", brushResult);
  
    let eatResult = await doWork("吃早餐", 5000);
    console.log("await eat", eatResult);
  
    let writeResult = await doWork("寫功課", 4000);
    console.log("await write", writeResult);
}catch(err){
    //await /async沒有內建的錯誤處理機制就用js原本的try-catch處理
    console.error(err);
}



}


test();
console.log('finish')

// brushPromise
//   .then((data) => {

//   })
//   .catch((err) => {

//     console.error("在promise裡發生錯誤", err);
//   });
