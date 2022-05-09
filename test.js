const phonebook = { 'Tim': '555-111',
                    'Bill': '555-333',
                    'Peter': '555-777' };
const keys = Object.keys(phonebook);
console.log(keys);

const entries = Object.entries(phonebook);
console.log(entries);
// [ ['Tim', '555-111'],
//   ['Bill', '555-333'],
//   ['Peter', '555-777'] ]

console.log(entries[0])// - ще върне масива на 0-вия ред ->['Tim', '555-111']
console.log(entries[0][0])// - ще върне ключа на 0-вия елемент -> 'Tim'
console.log(entries[0][1])// - ще върне стойноста на 0-вия елемент -> '555-111'