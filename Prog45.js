a=[10,5,2,12,56,90,1];
//highest number of the array
highest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest);
//lowest number of the array
lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);
//sum of all numbers in the array
sum=a.reduce((num1,num2)=>num1+num2)
console.log(sum);