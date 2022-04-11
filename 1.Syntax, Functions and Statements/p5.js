function solve (num1,num2, operator){
    let calculate = 0;
    switch (operator){
        case `+`:
            calculate = num1+num2;
            break;
        case `-`:
            calculate = num1-num2;
                break;
        case `*`:
            calculate = num1*num2;
                break;
         case `/`:
            calculate = num1/num2;
                break;   
         case `%`:
            calculate = num1%num2;
                break;  
         case `**`:
            calculate = num1**num2;
                break;      
    }   
    console.log(calculate);
}
//solve(5, 6, '+');
solve(3, 5.5, '*');