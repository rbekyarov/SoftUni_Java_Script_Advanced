function solve(arr) {
    const result = {};

    for (let index = 0; index < arr.length; index++) {
        let line = arr[index];
        let arrSplited = line.split(' | ');
        let product = arrSplited[1];
        let town = arrSplited[0];
        let price = Number(arrSplited[2]);
        if (!result.hasOwnProperty(product))
            result[product] = { town: town, price: price };
        else {
            if (price < result[product].price) {

                result[product] = { town: town, price: price };
            }
        }

    }
    //Sample Product -> 1000 (Sample Town)
    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);
    }


}


solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);