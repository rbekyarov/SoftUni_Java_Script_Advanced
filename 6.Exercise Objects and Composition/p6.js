function solve(input) {
    input.sort((a, b) => a.localeCompare(b));
    let length = input.length;
    let dictionary = {};
    for (let i = 0; i < length; i++) {

        let [product, price] = input.shift(i).split(' : ');
        dictionary[product] = price;

    }
    let char = '';
    for (dict in dictionary) {


        if (dict[0][0] !== char) {
            char = dict[0][0];
            console.log(`${char}`);

        }
        console.log(`  ${dict}: ${dictionary[dict]}`);
    };
    
};
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);