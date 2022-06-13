class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (condition != 'child' && condition != 'student' && condition != 'collegian') {
            throw new Error('Unsuccessful registration at the camp.')
        }
        if (condition == 'child' && money < 150 || condition == 'student' && money < 300 || condition == 'collegian' && money < 500) {
            return 'The money is not enough to pay the stay at the camp.'
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        let searchName = this.listOfParticipants.filter(n => n.name == name)
        if (searchName.length > 0) {

            return `The ${name} is already registered at the camp.`

        }
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`


    }
    unregisterParticipant(name) {
        let searchName = this.listOfParticipants.filter(n => n.name == name)
        if (searchName.length == 0) {

            return `The ${name} is not registered in the camp.`

        } else {
            let index = this.listOfParticipants.indexOf(name);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        }

    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let searchName1 = this.listOfParticipants.filter(n => n.name == participant1);
        let searchName2 = this.listOfParticipants.filter(n => n.name == participant2);

        if (searchName1.length < 1 && searchName2.length < 1) {
            throw new Error('Invalid entered name/s.')
        } else if (searchName1.length == 1 || searchName2.length == 1)
            if (typeOfGame == 'WaterBalloonFights') {
                if (searchName1[0].power > searchName2[0].power) {
                    searchName1[0].wins = 1
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if ((searchName1[0].power < searchName2[0].power)) {
                    searchName2[0].wins = 1
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`
                }
            } else if (typeOfGame == 'Battleship') {
            searchName1[0].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else {
            throw new Error('Choose players with equal condition.')
        }
    }
    toString() {
        let output = [];
        output.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let participant of this.listOfParticipants) {
            output.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        }
        return output.join('\n');

    }


}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));