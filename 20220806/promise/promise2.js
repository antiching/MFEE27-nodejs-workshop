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
  // 刷牙3 -> 吃早餐4 -> 寫功課5
  let brushPromise =
  console.log(brushPromise); //=>pending還不知道結果「外包公司正在做事時」

  doWork("刷刷牙", 3000)
//   brushPromise => doWork本身回傳promise直接跟.then
    .then((data) => {
      //用來接住resolve
      console.log("在promise裡", data);
      
      return doWork('吃早餐',5000)
    //   let eatPromise= doWork('吃早餐',5000);
    //   return eatPromise;
    })
    .then((data)=>{
      console.log("在promise裡", data)
      return doWork('寫功課',3000);
  
    //   let writePromise=doWork('寫功課',3000);
    //   return writePromise;
    })
    .then((data)=>{
      console.log("在promise裡", data)
    })
    .catch((err) => {
      //用來接住前面所有promise任何的reject 
      console.log("在promise裡發生錯誤", err);
    });


    //如果刷完牙失敗   不可以吃早餐  只能直接寫功課
   //Promise 很難作流程控制 ＝> Async / Await 解決 Promise的語法糖

   