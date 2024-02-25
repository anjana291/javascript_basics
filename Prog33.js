// i/p = [4,5,6] 4+5+6 = 15
// o/p = [11,10,9]  15-4=11, 15-5=10, 15-6=9

const arr = [4, 5, 6];
sum=0
final=[]
for(let num of arr){
    sum=sum+num;        
}
for(let x of arr){
    final.push(sum-x);
    // final=sum-x;
    // console.log(final);
}
// console.log(sum);
console.log(final);