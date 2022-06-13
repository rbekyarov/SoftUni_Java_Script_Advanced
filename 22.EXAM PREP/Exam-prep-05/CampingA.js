class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        const keys = Object.keys(this.priceForTheCamp);
        let searchKeys = keys.find(x => x == condition);
        if (!searchKeys) {
            throw new Error(`Unsuccessful registration at the camp.`)
        }
        if (this.listOfParticipants.length > 0) {
            let searchName = this.listOfParticipants.find(x => x.name == name);
            if (searchName) {
                return `The ${name} is already registered at the camp.`
            }
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        } else {
            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(participant);
            return `The ${name} was successfully registered.`
        }

    }
    unregisterParticipant(name) {
        let searchName = this.listOfParticipants.find(x => x.name == name);
        if (!searchName) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let paricipiantForRemove = this.listOfParticipants.indexOf(name);
            this.listOfParticipants.splice(paricipiantForRemove, 1);
            return `The ${name} removed successfully.`

        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            let searchParticipant1 = this.listOfParticipants.find(x => x.name == participant1);
            let searchParticipant2 = this.listOfParticipants.find(x => x.name == participant2);

            if (!searchParticipant1 || !searchParticipant2) {
                throw new Error(`Invalid entered name/s.`)
            }
            if (searchParticipant1.condition != searchParticipant2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            if (searchParticipant1.power > searchParticipant2.power) {
                searchParticipant1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (searchParticipant1.power < searchParticipant2.power) {
                searchParticipant2.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame === 'Battleship') {
            let searchParticipant1 = this.listOfParticipants.find(x => x.name == participant1);
            if (!searchParticipant1) {
                throw new Error(`Invalid entered name/s.`)
            } else {
                searchParticipant1.power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }
        }

    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let participan of this.listOfParticipants) {
            result.push(`${participan.name} - ${participan.condition} - ${participan.power} - ${participan.wins}`)
        }
        return result.join('\n')
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());