//router在Express裡有個定義叫mini app
//這裡存放API

//起手式
/*
const express=require('express')
const router = express.Router();

module.exports=router
*/

const express = require("express");
const router = express.Router();

//引用db
const pool = require("../utils/db");
/* app字眼換成router
router.get
router.use
router.post
*/

// ∆ 頁面顯示列出所有股票代碼
// GET /stocks
router.get("/", async (req, res, next) => {
  // 寫法1

  console.log("/api/1.0/stocks"); //驗證是否有進來這個函式（路徑寫錯？）
  let result = await pool.execute("SELECT * FROM stocks");
  // console.log('result',result)
  let data = result[0]; //觀察資料結構
  // result[
  //   ({ id: "2330", name: "台積電" },
  //   { id: "2412", name: "中華電" },
  //   { id: "2603", name: "長榮" })
  // ];

  // 寫法2:=寫法1的濃縮
  // let [data] = await pool.execute("SELECT * FROM stocks");

  // console.log("result", data);
  res.json(data);
  // let result = await connection.execute;

  //res.json(["長榮航", "聯發科", "台積電"]); //先寫死驗證是否讀得到資料
});

// ∆ 列出某個股票代碼的所有報價資料
// GET /stocks/2330
// api/1.0/stocks 「寫在server.js app.use第一個參數上」 ＋ :變數
router.get("/:stockId", async (req, res, next) => {
  const stockId = req.params.stockId;

  // 分頁
  // 透過 query string 取得目前要第幾頁的資料
  // 如果沒有設定，就預設要第一頁的資料
  //api/1.0/stocks/:stockId?page=abc  使用下面語法就可以取出  abc
  let page = req.query.page || 1;
  //每一頁拿五筆
  const perPage = 3;
  //取得總比數=>才知道有幾頁
  // TODO: 去資料庫撈資料
  let [total] = await pool.execute(
    "SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id=?",
    [stockId]
  );
  //Prepared Statement -》防止SQL injection
  // 參照https://weikaiwei.com/web/what-is-prepared-statement/

  // 使用接字串的語法的話SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id=${stockId}
  //SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id = 2330 || 1=1  --後面都註解掉 ＝>資料庫被駭
  //  console.log(total)輸出結果長這樣[ { total: 9 } ] -第0筆資料的.total

  console.log(total[0].total); //驗證
  total = total[0].total; //從陣列裡再拿出物件

  // TODO: 取得總頁數Math.ceil
  let lastPage = Math.ceil(total / perPage);

  // TODO: offset要略過的筆數
  const offset = perPage * (page - 1);

  //根據 LIMIT 和 OFFSET 取資料（這兩個數值是自己定義的非使用者填寫所以用變數帶進去不會造成sql injection的問題）
  //後端不能相信前端送來的任何資料
  let [data] = await pool.execute(
    "SELECT * FROM stock_prices WHERE stock_id=? ORDER BY date LIMIT? OFFSET?  ",
    [stockId, perPage, offset]
  );

  console.log(lastPage, offset);

  // TODO: 把取得的資料回覆給前端 (給前端關於分頁的物件 自己設計)
  res.json({
    pagination: {
      total,
      perPage,
      page,
      lastPage,
    },
    data,
  });
  //測試網址  http://localhost:3002/api/1.0/stocks/2330?page=2 結果是否如預期
});

module.exports = router;
