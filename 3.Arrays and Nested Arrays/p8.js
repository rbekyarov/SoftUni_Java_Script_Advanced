function solve(arr) {

    arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        if (i % 2 === 1) {
            arrResult.push(element * 2);
        }

    }
    arrResult.reverse();
    console.log(arrResult.join(' '));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);