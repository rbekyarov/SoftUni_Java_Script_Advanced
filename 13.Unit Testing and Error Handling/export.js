function myFunc(arr) {

    let firstElement = Number(arr[0]);
    //let firstElement = Number(arr.shift());
    let lastElement = Number(arr[arr.length - 1]);
    //let lastElement =  Number(arr.pop());
    let sum = firstElement + lastElement;
    console.log(sum);

}
myFunc(['20', '30', '40']);
//myFunc(['5', '10']);
module.exports = myFunc;