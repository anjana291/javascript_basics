//w.a.p to check whether given number is prime or not

num=170;
isPrime = true;
for(i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}
console.log(isPrime?'is a prime number.':'not a prime number');

//w.a.p to print all prime numbers b/w 1-50

for(i=1;i<=50;i++){
    count=0;
    for(j=2;j<1;j++){
        if(i%j==0){
            count=count+1;
            break;
        }        
    }
    if(count==0){
        console.log(i);
    }
}

//w.a.p to display all armstrong number between 8 -500

num2=4;
num3=50;
for(i=num2; i<=num3; i++){

}

//w.a.p to find gcd/hcf of given 2 no.

num1=12
num2=28
gcd=0
for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i;
    }    
}
console.log(gcd);