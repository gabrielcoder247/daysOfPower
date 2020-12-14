def get_days_of_power_d1(D1,D2):
    ans = []
    for i in range(D1,D2):
        ans.append(i) 
        print(len(ans))


def get_days_of_power_d2(D2,D3):
    ans = []
    for i in range(D2,D3):
        ans.append(i) 
        print(len(ans))


def get_days_of_power_d3(D3,D4):
    ans = []
    for i in range(D3,D4):
        ans.append(i) 
        print(len(ans))
       

get_days_of_power_d1(3,7)   


def get_days_of_power(R1,get_days_of_power_D1):
    d1 = get_days_of_power_D1()
    

    dayOfPower1 = d1 * R1
    print(dayOfPower1)


get_days_of_power(1000,3)    





# js codes


function get_days_of_power(){
    
}

function get_days_of_power_d1(R1, D1, D2 ){
    var ans = [];
for (let i = D1; i <= D2; i++) {
    ans.push(i);
}
 let dayOfPower = ans.length
return dayOfPower * R1;
}


function get_days_of_power_d2(R2, D2, D3 ){
    var ans = [];
for (let i = D2; i <= D3; i++) {
    ans.push(i);
}
 let dayOfPower = ans.length
return dayOfPower * R2;
}


function get_days_of_power_d3(R3, D3, D4 ){
    var ans = [];
for (let i = D3; i <= D4; i++) {
    ans.push(i);
}
 let dayOfPower = ans.length
return dayOfPower * R3;
}






     
  
   
   
get_days_of_power(3,6)



