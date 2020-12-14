let daysOfPower = function get_days_of_power(){


                function get_days_of_power_d1(R1, D1, D2 ){
                    var ans = [];
                for (let i = D1; i <= D2; i++) {
                    ans.push(i);
                }
                let dayOfPower1 = ans.length
                dayOfPower1 * R1;

                return function get_days_of_power_d2(R2, D2, D3 ){
                    var ans = [];
                for (let i = D2; i <= D3; i++) {
                    ans.push(i);
                }
                let dayOfPower2 = ans.length
                dayOfPower2 * R2;
                return  function get_days_of_power_d3(R3, D3, D4 ){
                    var ans = [];
                for (let i = D3; i <= D4; i++) {
                    ans.push(i);
                }
                let dayOfPower3 = ans.length
                dayOfPower3 * R3;
                return dayOfPower1+dayOfPower2+dayOfPower3
            }

        }

    }
}
    
    
    
    
    
   







     
  
   
   
get_days_of_power(3,6)



