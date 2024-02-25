//w.a.p to display the numbers whose exponential is in the range of 8-36
// ...here the user can input the exponetial valur(power)

power = 2
num=1
while(num<=36){
    if(8<num**power && num**power<=36){
        console.log(num);
    }
    num++;
}