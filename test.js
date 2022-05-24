let arr = [5, 5, 6, 2];

let s = arr.slice();
s.push(arr, 4)
console.log(arr);
console.log(s);
console.log(s != arr);