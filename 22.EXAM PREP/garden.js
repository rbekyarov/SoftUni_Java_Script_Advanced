class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.")
        } else {
            let plant = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0

            }
            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }
    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        let searchPlant = this.plants.find(x => x.plantName == plantName);

        if (!searchPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (searchPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        searchPlant.ripe = true;
        searchPlant.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let searchPlant = this.plants.find(x => x.plantName == plantName);
        if (!searchPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (searchPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let plantForStorage = {
            plantName: searchPlant.plantName,
            quantity: searchPlant.quantity
        }
        this.storage.push(plantForStorage);
        let removedPlant = this.plants.indexOf(searchPlant);
        this.plants.splice(removedPlant, 1);
        this.spaceAvailable += searchPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let output = [];
        output.push(`The garden has ${this.spaceAvailable} free space left.`);
        let line2Part1 = `Plants in the garden: `
        let line2Part2 = '';
        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let nameArr = [];
        for (const plant of sorted) {
            nameArr.push(plant.plantName);
        }
        line2Part2 = nameArr.join(', ')
        output.push(line2Part1 + line2Part2);
        let line3Part1 = 'Plants in storage: ';
        let line3Part2 = '';
        let storageArr = [];
        for (const stor of this.storage) {
            storageArr.push(`${stor.plantName} (${stor.quantity})`);
        }
        line3Part2 = storageArr.join(', ');
        if (this.storage.length > 0) {
            output.push(line3Part1 + line3Part2);
        } else {
            output.push(`Plants in storage: The storage is empty.`)
        }

        return output.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('raspberry'));




//The apple has been successfully planted in the garden.
//The orange has been successfully planted in the garden.
//The raspberry has been successfully planted in the garden.
//10 apples have successfully ripened.
//1 orange has successfully ripened.
//The orange has been successfully harvested.
//The garden has 220 free space left.
//Plants in the garden: apple, raspberry
//Plants in storage: orange (1)