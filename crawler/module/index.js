const car = require("./cars"); //引用自己的module

console.log(car);
car.name = "BBB"; //改到的是物件從car宣告變數中複製到記憶體來的值
console.log(car.name);
console.log(car.getName());

const first = require("./first");
const second = require("./second");

console.log("i am index");

/*


ＣＪＳ重要特性 結論: second.js不會再被重複引用
i am second
I am first
i am index
*/
