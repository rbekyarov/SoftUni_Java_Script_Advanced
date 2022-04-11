function solve(input){
    let type_input = typeof(input);

    if (type_input == 'number'){
     let circle_area = Math.pow(input,2)*Math.PI;
       console.log(circle_area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type_input}.`)
    }
}
//solve(5);
solve('name');