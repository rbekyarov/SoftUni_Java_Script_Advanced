function solve(arr) {
    
    arr.sort((a, b) => a - b);
    
    let arrLength = (arr.length - 1) / 2;
    
    arrLength = Math.round(arrLength);
    
    let resultArr = [];
    
    for (let i = arrLength; i < arr.length; i++) {
        let element = arr[i];
        resultArr.push(element);


    }

    console.log(resultArr);

}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);