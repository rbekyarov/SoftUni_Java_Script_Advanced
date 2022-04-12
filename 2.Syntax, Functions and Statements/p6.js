function solve(speed, area){{
   let status = '';
   let speedLimit;
    switch(area){
       
        case 'city':
            speedLimit =50; 
            if (speed>speedLimit){
                let diff = speed-speedLimit;
                if(diff<20){
                    status = 'speeding';
                }else if(diff>=20 && diff<40){
                    status = 'excessive speeding';
                }else if(diff>=40){
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
           
        }else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
        break;

        case 'residential':
            speedLimit =20; 
            if (speed>speedLimit){
                let diff = speed-speedLimit;
                if(diff<20){
                    status = 'speeding';
                }else if(diff>=20 && diff<40){
                    status = 'excessive speeding';
                }else if(diff>=40){
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            
        }else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
        break;

        case 'interstate':
            speedLimit =90; 
            if (speed>speedLimit){
                let diff = speed-speedLimit;
                if(diff<20){
                    status = 'speeding';
                }else if(diff>=20 && diff<40){
                    status = 'excessive speeding';
                }else if(diff>=40){
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
        break;
        case 'motorway':
            speedLimit =130; 
            if (speed>speedLimit){
                let diff = speed-speedLimit;
                if(diff<20){
                    status = 'speeding';
                }else if(diff>=20 && diff<40){
                    status = 'excessive speeding';
                }else if(diff>=40){
                    status = 'reckless driving';
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            
            }else{
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
        break;
    }

}

}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');