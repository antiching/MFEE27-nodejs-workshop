//sum.js


/* ∆ 1  for loop

function sum(n) {
  //1+2+3..n

  let total = 0;
  for (let i = 1; i <= n; i++) {
    //這行的執行次數跟輸入成正比
    //時間複雜度 O (n)
    total += i;
  }
  return total;
}

console.log(sum(1));
console.log(sum(3));
console.log(sum(10));

*/


/*

要考量到情境
O (n) ->n很小會用這個寫法  O(1)-> n很大會用這個寫法

*/

/* ∆ 2 公式解

function sum2(n){
    return ((n+1)*n)/2;
}

*/

/* ∆ 3

//呼叫自己  遞迴寫法   recursive

function sum3(n){
    if(n===1){
        return n ;
    }
return sum3(n-1)+n;
}

*/


/* ∆ 4 reduce



*/

