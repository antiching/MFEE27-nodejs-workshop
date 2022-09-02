import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utlis/config";

const StockDetails = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const [lastPage, setLastPage] = useState(3); //總共有幾頁（放入預設值）
  const [page, setPage] = useState(1); //在第幾頁

  const { stockId } = useParams(); // 把網址上的 :stockId 拿出來
  console.log("StockDetail - stockId", stockId); //是否有拿到網址變數 :stockId
  console.log(page);

  // 去後端撈資料(axios.get   setData）
  useEffect(() => {
    let getStockDetail = async () => {
      //1. axios.get -> 在哪個 useEffect 裡做？
      let response = await axios.get(
        `${API_URL}/stocks/${stockId}?page=${page}`
      );
      // 2. setData 取得response.data自訂物件裡面的.data值
      setData(response.data.data);
      // console.log("useEffect[] after set", data);

      //從後端撈總頁數(lastPage)
      setLastPage(response.data.pagination.lastPage);
    };
    getStockDetail();
  }, [page]);
  // FIXME 忘記加上[page]

  //製作頁碼按鈕
  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <li
          style={{
            display: "inline-block",
            margin: "2px",
            backgroundColor: page === i ? "#00d1b2" : "",
            borderColor: page === i ? "#00d1b2" : "#dbdbdb",
            color: page === i ? "#fff" : "#363636",
            borderWidth: "1px",
            width: "28px",
            height: "28px",
            borderRadius: "3px",
            textAlign: "center",
          }}
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    //FIXME return加錯地方...
    return pages;
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {/* 顯示頁碼 */}
      <ul>{getPages()}</ul>
      目前在第{page}頁{/* 3. 在畫面上 render 資料, data.map */}
      {data.map((item) => {
        return (
          <div
            className="bg-white bg-gray-50 p-6 rounded-lg shadow m-6"
            key={item.date}
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              日期：{item.date}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              成交金額：{item.amount}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              成交股數：{item.volume}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              開盤價：{item.open_price}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              收盤價：{item.close_price}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              漲跌價差：{item.delta_price}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              最高價：{item.high_price}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              最低價：{item.low_price}
            </h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              成交筆數：{item.transactions}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default StockDetails;
