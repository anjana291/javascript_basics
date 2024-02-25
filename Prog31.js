let expense = [12000,23000,40000,34000,55000,22000,10000];
min=expense[0];
max=expense[0];
//find the lowest expense
for(let x of expense){
    // console.log(x);
    if(x<=min){
        min=x
    }
}
console.log('Lowest No:',min);

//find the highest expense
for(let y of expense){
    if(y>=max){
        max=y;
    }
}
console.log('Largest No:',max);

sum=0;
//find the total expense
for(let z of expense){
    sum+=z;
}
console.log('Total expense',sum);