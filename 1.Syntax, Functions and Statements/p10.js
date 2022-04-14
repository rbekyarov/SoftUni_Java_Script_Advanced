function solve(inputArr) {
    let sum =0;
    let sumInversValue =0;
    let concanete = "";
     
    for (let i = 0; i < inputArr.length; i++) {
        sum += Number(inputArr[i]);
        sumInversValue +=Number(1/inputArr[i]);
        concanete += String(inputArr[i]);
     }
     console.log(sum);
     console.log(sumInversValue.toFixed(4));
     console.log(concanete);
  
}
//solve([1, 2, 3]);
solve([2, 4, 8, 16]);