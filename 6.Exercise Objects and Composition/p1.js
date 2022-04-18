function solve(inputAray){
    let obj = {};
    for (let index = 0; index < inputAray.length; index+=2) {
        let name = inputAray[index];
        let calories  = Number(inputAray[index+1]);

        obj[name] = calories;
        
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);