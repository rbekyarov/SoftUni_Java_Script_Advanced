class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let output = [];
        let out = `Successfully added `
        for (const veg of vegetables) {

            let obj = {};
            let currentVeg = veg.split(' ');
            obj.type = currentVeg[0];
            obj.quantity = Number(currentVeg[1]);
            obj.price = Number(currentVeg[2]);
            let searchType = this.availableProducts.find(x => x.type == obj.type);
            if (!searchType) {
                this.availableProducts.push(obj)
                output.push(obj.type)
            } else {
                searchType.quantity += Number(currentVeg[1]);
                if (searchType.price < Number(currentVeg[2])) {
                    searchType.price = Number(currentVeg[2]);
                }
            }
        }
        return out + output.join(', ')
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let product of selectedProducts) {
            let type = product.split(' ')[0]
            let quantity = product.split(' ')[1]

            let searchProduct = this.availableProducts.find(x => x.type == type)
            if (!searchProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if (quantity > searchProduct.quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                let currentPrice = Number(quantity) * searchProduct.price;
                totalPrice += currentPrice;
                searchProduct.quantity -= quantity;


            }

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let searchProduct = this.availableProducts.find(x => x.type == type)
        if (!searchProduct) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity > searchProduct.quantity) {
            searchProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            searchProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }
    revision() {
        let result = []
        result.push(`Available vegetables:`);
        this.availableProducts.sort((a, b) => a.price - b.price);
        for (const product of this.availableProducts) {
            result.push(`${product.type}-${product.quantity}-$${product.price}`)

        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n')
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());