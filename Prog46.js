a=[10,5,2,13,58,1]
//w.a.p to print all even numbers in given array
even=a.filter(num=>num%2==0)
console.log(even);
//w.a.p to print all numbers > 10
greater=a.filter(num=>num>10)
console.log(greater);
//is there any number greater than 10 : true or false
x = a.some(num=> num>10)
console.log(x?'Yes':'No');

