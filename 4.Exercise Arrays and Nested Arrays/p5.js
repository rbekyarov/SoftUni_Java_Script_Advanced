function solve(input) {

    let currentMaxNumber = input[0];
    let result = [];

    for (let currentNumber of input) {
        if (currentNumber >= currentMaxNumber) {
            result.push(currentNumber);
            currentMaxNumber = currentNumber;
        }
    }
    //console.log(result);
    return result;

}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

solve([20,
    3,
    2,
    15,
    6,
    1
]);