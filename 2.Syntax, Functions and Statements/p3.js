function solve(num){
    let text= String(num);
    for (let i = 0; i <= text.length; i++) {
        if(text[i+1]!=null){
            if(text[i]!=text[i+1]){
                console.log('false') ;
                return;
            }
        }
        
    }
    console.log('true') ;
}
solve(555555555155);
solve(11111111111111);