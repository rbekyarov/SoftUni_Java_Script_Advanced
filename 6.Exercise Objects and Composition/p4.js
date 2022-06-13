function solve(hero) {
    const array = [];

    for (let i = 0; i < hero.length; i++) {
        const obj = {};
        let line = hero[i].split(' / ');
        let name = line[0];
        let level = Number(line[1]);
        let items = line[2] ? line[2].split(', ') : [];
        obj['name'] = name;
        obj['level'] = level;
        obj['items'] = items;
        array.push(obj)
    }
    console.log(JSON.stringify(array));

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])