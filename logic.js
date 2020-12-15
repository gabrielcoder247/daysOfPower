 function get_days_of_power(k){


               return  function get_days_of_power(R1, D1, D2 ){
                    var ans = [];
                    // loop through the range of days for power

                for (let i = D1; i <= D2; i++) {
                    ans.push(i);
                }
                // check the length of the array which is the total number of the account days range

                let dayOfPower1 = ans.length
                let sumOfdayRate = dayOfPower1 * R1;
                if(k > sumOfdayRate){
                    return k -sumOfdayRate
                }


                return function get_days_of_power(R2, D2, D3 ){
                    var ans = [];
                    // loop through the range of days for power
                for (let i = D2; i <= D3; i++) {
                    ans.push(i);
                }

                // check the length of the array which is the total number of the account days range

                let dayOfPower2 = ans.length
                let sumOfdayRate = dayOfPower2 * R2;
                if(k > sumOfdayRate){
                    return k -sumOfdayRate
                }
                
                return  function get_days_of_power(R3, D3, D4 ){
                    var ans = [];
                     // loop through the range of days for power
                for (let i = D3; i <= D4; i++) {
                    ans.push(i);
                }
                // check the length of the array which is the total number of the account days range

                let dayOfPower3 = ans.length
                let sumOfdayRate =  dayOfPower3 * R3;
                if(k > sumOfdayRate){
                    return k - sumOfdayRate
                }
                return dayOfPower1+dayOfPower2+dayOfPower3
                
            }

        }

    }
}
    
    
    
    
    
   







     
  
   
   
get_days_of_power(3,6)



