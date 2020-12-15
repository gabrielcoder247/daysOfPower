 function get_days_of_power(k){


               return  function get_days_of_power(R1, D1, D2 ){
                    var ans = [];
                for (let i = D1; i <= D2; i++) {
                    ans.push(i);
                }
                let dayOfPower1 = ans.length
                let sumOfdayRate = dayOfPower1 * R1;
                if(k > sumOfdayRate){
                    return k -sumOfdayRate
                }


                return function get_days_of_power(R2, D2, D3 ){
                    var ans = [];
                for (let i = D2; i <= D3; i++) {
                    ans.push(i);
                }
                let dayOfPower2 = ans.length
                let sumOfdayRate = dayOfPower2 * R2;
                if(k > sumOfdayRate){
                    return k -sumOfdayRate
                }
                
                return  function get_days_of_power(R3, D3, D4 ){
                    var ans = [];
                for (let i = D3; i <= D4; i++) {
                    ans.push(i);
                }
                let dayOfPower3 = ans.length
                let sumOfdayRate =  dayOfPower3 * R3;
                if(k > sumOfdayRate){
                    return k - sumOfdayRate
                }
                return dayOfPower1+dayOfPower2+dayOfPower3
                // return D1+D2+D3
            }

        }

    }
}
    
    
    
    
    
   







     
  
   
   
get_days_of_power(3,6)



