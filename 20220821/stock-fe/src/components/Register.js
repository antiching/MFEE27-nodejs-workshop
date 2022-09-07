import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";

const Register = () => {
  //物件管理
  const [member, setMember] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  //  1. input綁上狀態 => 因為被react控制輸入後產生值馬上被react蓋掉
  //  2. onChange事件觸發利用set 建立新的物件綁定到原本的值

  function handleChange(e) {
    console.log("handleChange", e.target.name, e.target.value);
    let newMember = { ...member };

    //newMember.email = e.target.value;
    //newMember[]＝>取得物件的屬性
    //e.target.name ＝ 物件屬性名稱 （取名相同）
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
  }
  /*  共用這一段程式碼
  onChange={(e) => { 
            //原生的
            console.log(e.target.value);
            //(x)不能直接更動state本身   member.email = e.target.value
            //set  將原生的物件複製過來
            let newMember = { ...member };
            newMember.email = e.target.value;
            setMember(newMember);
          }}
     */

  //打API給後端
  //把預設行為關掉 submit在single page會跳頁
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(`${API_URL}/auth/register`, member);
      console.log(response.data);
    } catch (e) {
      console.error(`register`,e);
    }
  }


  function handleUpload(e) {
    
  }

  return (
    <form className="bg-purple-100 h-screen md:h-full md:my-20 md:mx-16 lg:mx-28 xl:mx-40 py-16 md:py-8 px-24 text-gray-800 md:shadow md:rounded flex flex-col md:justify-center">
      <h2 className="flex justify-center text-3xl mb-6 border-b-2 pb-2 border-gray-300">
        註冊帳戶
      </h2>
      <div className="mb-4 text-2xl">
        <label htmlFor="name" className="flex mb-2 w-32">
          Email
        </label>
        <input
          value={member.email}
          className="w-full border-2 border-purple-200 rounded-md h-10 focus:outline-none focus:border-purple-400 px-2"
          type="text"
          id="email"
          name="email"
          onChange={(e) => {
            //原生的
            console.log(e.target.value);
            //(x)不能直接更動state本身   member.email = e.target.value
            //set  將原生的物件複製過來
            let newMember = { ...member };
            newMember.email = e.target.value;
            setMember(newMember);
          }}
        />
      </div>
      <div className="mb-4 text-2xl">
        <label htmlFor="name" className="flex mb-2 w-32">
          姓名
        </label>
        <input
          value={member.name}
          onChange={handleChange}
          className="w-full border-2 border-purple-200 rounded-md h-10 focus:outline-none focus:border-purple-400 px-2"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="mb-4 text-2xl">
        <label htmlFor="password" className="flex mb-2 w-16">
          密碼
        </label>
        <input
          value={member.password}
          onChange={handleChange}
          className="w-full border-2 border-purple-200 rounded-md h-10 focus:outline-none focus:border-purple-400 px-2"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div className="mb-8 text-2xl">
        <label htmlFor="password" className="flex mb-2 w-32">
          確認密碼
        </label>
        <input
          value={member.confirmPassword}
          onChange={handleChange}
          className="w-full border-2 border-purple-200 rounded-md h-10 focus:outline-none focus:border-purple-400 px-2"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        />
      </div>
      <div className="mb-8 text-2xl">
        <label
          htmlFor="photo" className="flex mb-2 w-32">
          圖片
        </label>
        <input
          onChange={handleUpload}
          className="w-full border-2 border-purple-200 rounded-md h-10 focus:outline-none focus:border-purple-400 px-2"
          type="file"
          id="photo"
          name="photo"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="text-xl bg-indigo-300 px-4 py-2.5 rounded hover:bg-indigo-400 transition duration-200 ease-in"
      >
        註冊
      </button>
    </form>
  );
};

export default Register;
