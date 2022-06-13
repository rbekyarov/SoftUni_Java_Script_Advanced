function solve(car) {
    const orderCar = {};
    const engins = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }


    const carriage = {
        Hatchback: { type: 'hatchback', color: car.color },
        Coupe: { type: 'coupe', color: car.color }
    }
    orderCar.model = car.model;
    if (car.power < 120) {
        orderCar.engine = engins["Small engine"]
    } else if (car.power < 200) {
        orderCar.engine = engins["Normal engine"]
    } else {
        orderCar.engine = engins["Monster engine"]
    }
    if (car.carriage == 'hatchback') {
        orderCar.carriage = carriage["Hatchback"]
    } else {
        orderCar.carriage = carriage["Coupe"]
    }
    if (car.wheelsize % 2 == 0) {
        car.wheelsize = car.wheelsize - 1;
    }
    orderCar.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    return orderCar;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

//{ model: 'VW Golf II',
//engine: { power: 90,
// volume: 1800 },
//carriage: { type: 'hatchback',
//    color: 'blue' },
//wheels: [13, 13, 13, 13] }