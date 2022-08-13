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
console.log(`開始工作 at ${dt.toISOString()}`);;

// doWork("刷牙", 3000, function (err, data) {
//

//     if (err) {
//       console.error("發生錯誤了", err);
//     } else {
//       console.log("執行成功", data);}})

// callback hell....
doWork("刷牙", 3000, function (err, data) {
  // 一件事情做完才能坐下一件事情
  // 只有在這裡 這個地方callback被呼叫的時候 才可以很確定這件事情做完了
  if (err) {
    console.error("發生錯誤了", err);
  } else {
    // err = null 宣告變數為空值
    //if (null) ->false
    // null，undefined，if判斷都是假
    console.log("執行成功", data);

    doWork("早餐", 4000, function (err, data) {
      if (err) {
        console.error("發生錯誤了", err);
      } else {
        console.log("執行成功", data);

        doWork("寫作業", 5000, function (err, data) {
          if (err) {
            console.error("發生錯誤了", err);
          } else {
            console.log("執行成功", data);
          }
        });
      }
    });
  }
});
// 這一行時 知道刷完牙了嗎？  不知道 外包公司執行完後透過callback告訴我

doWork("刷牙", 3000, function (err, data) {
  // 一件事情做完才能坐下一件事情
  // 只有在這裡 這個地方callback被呼叫的時候 才可以很確定這件事情做完了
  if (err) {
    console.error("發生錯誤了", err);
    return;
  } else {
    // err = null 宣告變數為空值
    //if (null) ->false
    // null，undefined，if判斷都是假

    console.log("執行成功", data);
  }
});

// ∆ 兩種 if-else寫法都一樣的效果
// 我們會選擇判斷式是正向 （人腦習慣的思考模式）
// 看一下分別要處理的程式碼中哪一個比較短
//而且 if-else後沒有其他工作
// 把比較短的放上面  然後就接一個return

// 反向思考的用途 if(!err) -> if(!null) 不是空值-> true

if (!err) {
  //處理正確的地方
} else {
  //處理錯誤的地方
}

// 讓程式碼寫的有段落感
// early return寫法
doWork("刷牙", 3000, function (err, data) {
  if (err) {
    console.error("發生錯誤", err);
    return;
  }

  console.log("執行成功", data);
  doWork("早餐", 4000, function (err, data) {
    if (err) {
      console.error("發生錯誤了", err);
      return;
    }
    console.log("執行成功", data);

    doWork("寫作業", 5000, function (err, data) {
      if (err) {
        console.error("發生錯誤了", err);
        return;
      }
      console.log("執行成功", data);
    });
  });
});
