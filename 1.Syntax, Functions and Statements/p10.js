function solve( inputArr) {
    let sum =0;
    let sumInversValue =0;
    let concanete = "";
    let arr = [];
    for (let i = 0; i < inputArr.length; i++) {
        arr.push(inputArr[i]);
    }
      
     for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        sumInversValue +=Number(1/arr[i]);
        concanete += String(arr[i]);
     }
     console.log(sum);
     console.log(sumInversValue.toFixed(4));
     console.log(concanete);
  
}
//solve([1, 2, 3]);
solve([2, 4, 8, 16]);