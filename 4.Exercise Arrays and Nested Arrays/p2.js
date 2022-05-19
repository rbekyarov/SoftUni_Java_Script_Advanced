function solve(array, n) {
    let arr = [];

    for (let index = 0; index < array.length; index += Number(n)) {
        arr.push(array[index]);

    }

    //arr.forEach(element => console.log(element));
    return arr;
}

solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
);

solve(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2
);
solve(['1',
        '2',
        '3',
        '4',
        '5'
    ],
    6
);