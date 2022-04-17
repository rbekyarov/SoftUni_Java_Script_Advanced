function solve(name,population,treasury){

    let city = {
        name:name,
        population:population,
        treasury:treasury,
        taxRate:10,
        collectTaxes: function(){
            return  this.treasury +=population*this.taxRate; 
        },
        applyGrowth: function(percentage){
            let percent = percentage / 100;
            return this.population *= percent + 1;
        },
        applyRecession: function(percentage){
            let percent = percentage / 100;
            return this.treasury *= 1 - percent;
        }
    };
    
    return city;
   
}
let city = solve('Tortuga',7000,15000);
console.log(city);

console.log(``);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);