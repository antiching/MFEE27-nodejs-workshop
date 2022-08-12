const fs = require("fs");

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
    });}


    async function test(){

try{
 let fileResult= await readFile("test.txt", "utf-8");
 console.log("yaaaa~~~成功印出", fileResult)
}
catch(err){
console.error("發生錯誤",err)
} }

test();