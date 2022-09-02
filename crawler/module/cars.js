//CJS重點
//1.這兩行
//exports = module.exports = {};
//底層回傳˚return module.exports

//2.
//不會重複引用相同module

//每個資料夾都是一個module

//˚底層運作
//˚exports = module.exports = {};

//Alert

let name = "AAA";
function getName() {
  return name;
}

module.exports = {
  name,
  getName,
};

//若用物件的形式匯出使用exports出錯（要用module.exports）
let car = {
  getName: () => {
    return "988";
  },
  age: 18,
};

// module.exports = car; 正確

exports = car; //FIXME:error ->return module.exports

// exports.name = "aaa";
// exports.getName = () => {
//   return "988";
// };

//底層回傳˚return module.exports


// exporting at the end of line => 比較受歡迎
let nameFirst = 'naming';
function test() {
}
module.exports = { nameFirst, test };

//匯入物件 從物件中拿 readFile（這個模組的好處是方便辨識從其他模組匯入而非自行開發）
const fs = require('fs');


//只匯入readFile
const { readFile } = require('fs')
readFile();  
