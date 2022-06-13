class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.store = [];

    }

    loadingVegetables(vegetables) {
        for (let element of vegetables) {
            let type = element.split(' ')[0];
            let quantity = element.split(' ')[1];
            let price = element.split(' ')[2];
            let vegetable = {};
            vegetable.type = type;
            vegetable.quantity = quantity;
            vegetable.price = price;


            let searchVegetable = this.store.filter(a => a.type == type);
            let searchE = searchVegetable[0];

            if (searchVegetable.length < 1) {
                throw new Error(`${searchVegetable.type} is not available in the store.`)
            } else if (searchVegetable.length == 1) {
                searchE[0].quantity += quantity;
                if (searchE[0].price < price) {
                    searchE[0].price = price;

                }
            }

            this.store.push(vegetable);



        }
        let output = [];
        output.push(`Successfully added `)
        for (let product of this.store) {
            output.push(product.type);
        }
        return output.join(', ');

    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));