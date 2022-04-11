function solve(dayOfWeek){
    let numOfDay =0;
     switch(dayOfWeek){
         case 'Monday':
             numOfDay = 1;
         break;
         case 'Tuesday':
             numOfDay = 2;
         break;
         case 'Wednesday':
             numOfDay = 3;
         break;
         case 'Thursday':
             numOfDay = 4;
         break;
         case 'Friday':
             numOfDay = 5;
         break;
         case 'Saturday':
             numOfDay = 6;
         break;
         case 'Sunday':
             numOfDay = 7;
         break;
         default:
             console.log(`error`);
     }
     if(numOfDay!=0){
        console.log(numOfDay);
     }
     
}
solve('Friday');
//solve('invalid');
