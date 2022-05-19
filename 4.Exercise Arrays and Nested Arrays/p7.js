function solve(arr) {

    let newArr = [];

    while (arr.length > 0) {

        if (arr.length === 1) {
            newArr.push(arr[0]);
            arr.splice(0, 1);
        } else {
            let smallNum = Math.min(...arr);
            let biggerNum = Math.max(...arr);
            newArr.push(smallNum);
            newArr.push(biggerNum);

            let indexSmallNum = arr.indexOf(smallNum);
            arr.splice(indexSmallNum, 1);
            let indexBiggerNum = arr.indexOf(biggerNum);
            arr.splice(indexBiggerNum, 1);

        }

    }
    return newArr;

}

//solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([1, 65, 3]);