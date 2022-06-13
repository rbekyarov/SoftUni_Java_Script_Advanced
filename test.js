function personInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, Sex: ${person.sex}`
};

function adressInfo(person) {
    return `Country: ${person.adress.country}, City: ${person.adress.city}`
};
const person = {
    name: 'Stan',
    age: 18,
    sex: 'M',

    adress: { country: 'Bulgaria', city: 'Sofia' },


};

const person2 = {
    name: 'Joo',
    age: 54,
    sex: 'M',

    adress: { country: 'Bulgaria', city: 'Sliven' },


};
console.log(personInfo(person));
console.log(adressInfo(person));
console.log('-----------');
console.log(personInfo(person2));
console.log(adressInfo(person2));