function solve(input) {
    let towns = {};
    for (let inputLine of input) {
        let currnetTownInfo = inputLine.split(' <-> ');
        let townName = currnetTownInfo[0];
        let townPopulation = Number(currnetTownInfo[1]);
        if (!towns[townName]) {
            towns[townName] = 0;
        }
        towns[townName] +=townPopulation;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }

}


solve(['Istanbul <-> 100000',
   'Honk Kong <-> 2100004',
 'Jerusalem <-> 2352344',
 'Mexico City <-> 23401925',
  'Istanbul <-> 1000'
]);