function solve(car) {
    let carOrder = {};
    carOrder.model = car.model;

    let engine = {};
    if (Number(car.power) <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }
    let carriage = {};
    carriage.type = car.carriage;
    carriage.color = car.color;
    let wheels = [4];
    let wheel = 0;
    if (Number(car.wheelsize) % 2 == 0) {
        wheel = car.wheelsize - 1;
    } else {
        wheel = car.wheelsize;
    }
    wheels = [wheel, wheel, wheel, wheel];

    carOrder.engine = engine;
    carOrder.carriage = carriage;
    carOrder.wheels = wheels;
    return carOrder;


};
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});