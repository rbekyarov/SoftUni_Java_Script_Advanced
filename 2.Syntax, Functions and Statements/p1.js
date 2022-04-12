function solve(fruit,grams, price){
    let kilograms = Number(grams)/1000;
    let totalPrice = kilograms*Number(price);
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)

}
solve ('orange', 2500, 1.80);
//solve ('apple', 1563, 2.35);