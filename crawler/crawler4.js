//去查詢股票代碼中文名稱

// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require("axios");
const moment = require("moment");
const fs = require("fs").promises;

// 開始抓資料
// 2330 台積電
// 2603 長榮


  
// TODO: 需要從 stock.txt 的檔案裡讀取股票代碼

// axios.get(url, 設定)


// console.log(fs);

(async () => {
  try {
    //得到時間
    let queryDate = moment().format('YYYYMMDD'); //'20220814';
    //  得到代碼
    let stockNo= await fs.readFile("stock.txt", "utf-8");
    let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
      params: {
        response: 'json',
        date: queryDate,
        stockNo: stockNo,
      },
    });

    //查中文名稱
    let queryNameResponse = await axios.get('https://www.twse.com.tw/zh/api/codeQuery', {
        params: {
          query: stockNo,
        },
      });

      let suggestions=queryNameResponse.data.suggestions;
      let suggestion =suggestions[0];
      if(suggestion==='(無符合之代碼或名稱)'){
        console.log(suggestion);
        throw new Error(suggestion);
      }
      let stockName=suggestion.split('/t').pop();
      console.log('stockName',stockName);



    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();





