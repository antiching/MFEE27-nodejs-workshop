// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]

let arr = [1, 4, 9, 16];

function map(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i]*2);
    }
    return result;
}
console.log(map(arr));