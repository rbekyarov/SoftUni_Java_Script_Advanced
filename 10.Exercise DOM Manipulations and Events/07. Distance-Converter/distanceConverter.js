function attachEventsListeners() {
let input = document.getElementById('inputDistance');

let output = document.getElementById('outputDistance');
let inputUnit = document.getElementById('inputUnits');
let outputUnit = document.getElementById('outputUnits');
let btn = document.getElementById('convert');
btn.addEventListener('click', calculate);

function calculate (){

    let convert = Number(input.value);
    let result = 0;
    switch (inputUnit.value){
        case 'km':
            convert *=1000;
            break;
        case 'm':
            convert =convert;
            break;
        case 'cm':
            convert *=0.1;
            break;
        case 'mm':
            convert *=0.001;
            break;
        case 'mi':
            convert *=1609.34;
            break;
        case 'yrd':
            convert *= 0.9144;
            break;
        case 'ft':
            convert *= 0.3048
            break;
        case 'in':
             convert *= 0.0254
             break;
    }
    //console.log(convert)
    switch (outputUnit.value){
        case 'km':
            result = convert /1000;
            break;
        case 'm':
            result =convert;
            break;
        case 'cm':
            result = convert /0.1;
            break;
        case 'mm':
            result = convert /0.001;
            break;
        case 'mi':
            result = convert /1609.34;
            break;
        case 'yrd':
            result = convert /0.9144;
            break;
        case 'ft':
            result = convert /0.3048
            break;
        case 'in':
            result = convert /0.0254
            break;
    }
    //console.log(result)
    output.value = result;
}
}