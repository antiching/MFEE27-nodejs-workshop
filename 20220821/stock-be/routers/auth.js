/* 
TODO: 確認資料有沒有收到: 使用 express.json 中間件
TODO: 檢查 email 有沒有重複
TODO: 如果有，回覆 400 跟錯誤訊息
TODO: 密碼要雜湊 hash
TODO: 資料存到資料庫
TODO: 回覆前端
*/

/*
express有內建的中間件
有些版本曾經把內建抽出來要額外再引入

// 如果要讓 express 認得 json
// Content-Type: application/json
// 就要在server.js檔案加上express內建的.json中間件

*/

const express = require("express");
const router = express.Router();

router.use(express.json());//這行以下的router裡有效（會經過）

//記得寫入server.js 引用這個router
//  /api/1.0/auth/register
router.post("/api/1.0/auth/register", express.json(), (req, res, next) => {
  console.log(req.body); //post來的資料會存在body
  res.json({});
    //express.json()放在這就只在/api/1.0/auth/register網址有用,可以放入多個中間件
    //也可用陣列包起來帶入多個中間件
  //確認content-type  application/json
});

module.exports = router;
