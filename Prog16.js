//w.a.p to print nos from 1 to 10
for(i=1;i<=10;i++){
    console.log(i);
}
console.log('----------------');
//w.a.p to print from 10 -1
for(i=10;i>0;i--){
    console.log(i);
}
console.log('----------------');
//w.a.p to find the factorial of a no. using for loop
num = 4
fact=1
// for(i=1;i<=num;i++){
//     fact=fact*i;
// }

for(i=num;i>0;i--){
    fact=fact*i;
}
console.log(fact);

console.log('----------------');


//w.a.p to create a loop which can iterate 10 times but can display only upto 5

for(i=1;i<=10;i++){
    console.log(i);
    if(i>=5){
        break;
    }
}