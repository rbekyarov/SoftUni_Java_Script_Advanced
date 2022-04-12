function solve(year, monht, day){
     
    const inputDate = new Date(year,monht,day);
    
    inputDate.setDate(inputDate.getDate() - 1);
    console.log(inputDate.toString(inputDate));
  
    
}

solve(2016, 9, 30);
solve(2016, 10, 1);