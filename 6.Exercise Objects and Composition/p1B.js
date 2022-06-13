function solve(arr) {
    const obj = {};
    while (arr.length > 0) {
        let product = arr.shift();
        let calories = Number(arr.shift());
        obj[product] = calories;

    }
    //console.log(obj);

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);