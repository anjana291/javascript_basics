//w.a.p to print factorial of given number
num1=5
i=1
fact=1
while(i<=num1){
    fact=fact*i;
    i++;
}
console.log(fact);

//w.a.p to check whether the given 3 digit num i s armstrong or not
//153 = 1**3 + 5**3 + 3**3 = 1+125+27 = 153

n=153
temp=n
sum=0
while(n>0){
    ld=n%10
    sum=sum+ld**3
    n=Math.floor(n/10)
}
console.log(temp==sum?'armstrong':'not armstrong');

