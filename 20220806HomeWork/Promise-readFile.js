const fs = require("fs");

// readFile 去讀硬碟 這是很慢的事情  她是非同步

// 執行readFile這個函式 readFile.js和要找的檔案要在同一層檔案夾裡cd

// fs.readFile('test.txt','utf-8', (err, data) => {
//     if (err) {
//       return console.error(err);
//     };
//     console.log(data);
//   });

// 把 readfile 改成 promise 版本（自己包成 Promise）
function readFile(filesName, encoding) {
  // executor 本身也是一個函式 有兩個參數 resolve  reject
  return new Promise((resolve, reject) => {
    fs.readFile(filesName, encoding, (err, data) => {
      if (err) {
        reject(console.error("發生錯誤", err));
      } else {
        resolve(data);
      }
    });
  });
}

readFile("test.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // 用來接住 reject
    console.error("在 promise 發生錯誤:", err);
  });
  


