function doWork(job, timer, callback) {
  // setTimeout為了模擬非同步工作
  setTimeout(() => {
    let dt = new Date();
    callback(null, `完成工作 ${job} at ${dt.toISOString()}`);
    // callback慣用設計給兩個參數
    //第一個參數 通常習慣是寫 error
    //第二個參數 正確執行完畢要回覆的資料
  }, timer);
}

let dt = new Date(); //抓執行前的時間
console.log(`開始工作 at ${dt.toISOString()}`);

// callback hell.... 
//耦合性 - 彈性修改幅度低

brush();

function brush() {
  doWork("刷牙", 3000, function (err, data) {
    // 一件事情做完才能坐下一件事情
    // 只有在這裡 這個地方callback被呼叫的時候 才可以很確定這件事情做完了
    if (err) {
      console.error("發生錯誤了", err);
      return;
    }
    // err = null 宣告變數為空值
    //if (null) ->false
    // null，undefined，if判斷都是假
    console.log("執行成功", data);
    eat();
  });
}

function eat() {
  doWork("早餐", 4000, function (err, data) {
    if (err) {
      console.error("發生錯誤了", err);
    } else {
      console.log("執行成功", data);
      write();
    }
  });
}

function write() {
  doWork("寫作業", 5000, function (err, data) {
    if (err) {
      console.error("發生錯誤了", err);
    } else {
      console.log("執行成功", data);
    }
  });
}
