/* w.a.p to display FIZZ when a number is divisible by 3 & 
BUZZ when a number is divisible by 3 &  
FIZZBUZZ  when a number is divisible by 15 */

var num = 150;
if(num % 3 == 0 && num % 5 == 0){
    console.log("FIZZBUZZ");
}
else if(num % 3 == 0){
    console.log("FIZZ");
}
else if(num % 5 == 0){
    console.log("BUZZ");
}
else{
    console.log("not divisible");
}

/* Ternary operator*/
var age=8;
console.log(age>=18?'person eligible':'not eligible'); 
