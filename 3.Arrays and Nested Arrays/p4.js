function solve1(arr) {
    let arrResult = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let currentMinElement = Math.min.apply(Math, arr) //най - малкото число в масива
        let index = arr.indexOf(currentMinElement); //вземам индекса на най малкото число
        arr.splice(index, 1); //изтривам индекса
        arrResult.push(currentMinElement); //добавям най-малкото число в нов масив

    }
    for (let element of arrResult) {
        console.log(element);
    }
}

function solve2(arr1) {
    
    arrResult  = [];

    for (let element of arr1) {
        if (element < 0) {
            arrResult.unshift(element);
        } else {
            arrResult.push(element);
        }
    }
    console.log(arrResult.join('\n'));
}


solve1([7, -2, 8, 9]);
solve1([3, -2, 0, -1]);

solve2([7, -2, 8, 9]);
solve2([3, -2, 0, -1]);