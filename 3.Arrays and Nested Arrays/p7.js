function solve(arr, start, end) {
    let indexStart = arr.indexOf(start)
    let indexEnd = arr.indexOf(end)
    let newArr = arr.slice(indexStart, indexEnd + 1);
    return newArr;
}
solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
)