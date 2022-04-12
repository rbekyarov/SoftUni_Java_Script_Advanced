function solve (num1,num2){
    let min = Math.min(num1,num2);
    for (let i = min; i > 0; i--) {
        
        let result1 = Number(num1)/i;        
        let result2 = Number(num2)/i;
        
        if(Number.isInteger(result1) && Number.isInteger(result2)){
            console.log(i);//най голям общ делител
            break;
        }        
    }
}
//solve(15,5);
solve(2154, 458);