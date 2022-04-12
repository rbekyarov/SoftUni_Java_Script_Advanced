function solve(num){
    let text= String(num);
    let sum = 0;
    let isTrue = true;
    for (let i = 0; i < text.length; i++) {
        let num = text[i];
        sum += Number(num); 
        if(text[i+1]!=null){
            if(text[i]!=text[i+1]){
                isTrue = false;
            }
        }
        
    }
    if(isTrue){
        console.log(isTrue);
    }else{
        console.log(isTrue);
    }
    console.log(sum);

}
solve(2222222);
solve(1234);