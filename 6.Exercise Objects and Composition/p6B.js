function solve(array) {
    array.sort((a, b) => a.localeCompare(b));
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let letter = element[0][0];
        let product = element.split(' : ')[0];
        let price = Number(element.split(' : ')[1]);
        if (obj.hasOwnProperty(letter) == false) {
            obj[letter] = {};
        }
        obj[letter][product] = price;

    }
    let arr = Object.keys(obj)
    for (const letter of arr) {
        {
            console.log(letter);
            let products = Object.values(obj[letter])
            for (const product in products) {
                console.log(` ${product}: ${obj[letter][product]}`);

            }
        }
    }

}



solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);