function solve(arr) {
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

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);