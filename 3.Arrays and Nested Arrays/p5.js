function solve(arr) {
    let arrResult = [];


    for (let i = 0; i < 2; i++) {
        let currentMinElement = Math.min.apply(Math, arr) //най - малкото число в масива
        let index = arr.indexOf(currentMinElement); //вземам индекса на най малкото число
        arr.splice(index, 1); //изтривам индекса
        arrResult.push(currentMinElement); //добавям най-малкото число в нов масив

    }
    console.log(arrResult.join(' '));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);