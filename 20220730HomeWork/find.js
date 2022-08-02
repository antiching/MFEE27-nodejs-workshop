// const arr = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);
// expected output: 12


// 用 for-loop

const arr = [5, 12, 8, 130, 44];

function find(arr) {
  for (let i = 1; arr.length; i++) {
    if (arr[i] > 10) {
      return arr[i];
    }
  }
}

console.log(find(arr));
