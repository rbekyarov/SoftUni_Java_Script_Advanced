class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = [];

    }
    shopping(product) {
        let [type, price] = product;
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')

        } else {
            this.products.push(type);
            this.budget -= price;
            return `You have successfully bought ${type}!`
        }
    }
    recipes(recipe) {
        let recipeproductsList = recipe.productsList;
        for (let searchProduct of recipeproductsList) {
            if (!this.products.includes(searchProduct)) {
                throw new Error("We do not have this product")
            }
        }
        this.dishes.push(recipe.recipeName);
        return `${recipe.recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {

        let searchDish = this.dishes.find(x => x == dish);
        if (!searchDish) {
            throw new Error("We do not have this dish")
        }
        let searchGuest = this.guests.find(x => x == name);
        if (searchGuest) {
            throw new Error("This guest has already been invited")
        }
        this.guests.push({ name, dish });
        return `You have successfully invited ${name}!`
    }
    showAttendance() {

    }
}
let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(['Fruits', 1]));
console.log(dinner.shopping(['Honey', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Beans', 3]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.inviteGuests('Ivan', 'Oshav'));