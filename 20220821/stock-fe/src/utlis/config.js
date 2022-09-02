//全站設定  前端相關設定放在config.js這裡

//REACT_APP_BSE_URL=http://localhost:3002

// 打出去的API長這樣http://localhost:3002/api/1.0/stocks
export const API_URL = process.env.REACT_APP_BSE_URL + "/api/1.0";

//perfix
//postfix
// Refactor 重構 Martin Fowler 
// 寫完功能就該確定是否可以重構（日後好維護...） 
//react是ＥＳＭ寫法所以都用import
