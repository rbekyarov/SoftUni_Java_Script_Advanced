function solve(array){
 let initialNumber = 0;
 let result = [];
 for (const commands of array) {
     initialNumber++;
     if (commands==='add'){
         result.push(initialNumber);
     }else if (commands==='remove'){
        result.pop();
     }
     
 } 
 if (result.length>0){
    for (const element of result) {
        console.log(element);
    }  
 } else{
     console.log('empty');
 }
 
}
solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);