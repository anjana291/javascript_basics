//w.a.p to check a given persion is eligible to vote
//age>18

var age = 10;
if(age>=18){
    console.log("This person is eligible to vote");
}
else{
    console.log("This person is not eligible to vote");
}

//w.a.p to check given number is positive/negative

var num = -10;
if(num>0){
    console.log(`Given number ${num} is positive`);
}
else if(num == 0){
    console.log(`Given number ${num} is neither positive nor negative`);
}
else{
    console.log(`Given number ${num} is negative`);
}

//w.a.p to find the largest number among given 2 nos

var num1 = 100;
var num2 = 100;
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
}
else if(num1<num2){
    console.log(`${num2} is greater than ${num1}`);
}
else{
    console.log('both numbers are equal');
}

//w.a.p to find the 2nd largest number from the given 3 nos and sort the given 3 nos in descending order

var n1 = 1001;
var n2 = 1250;
var n3 = 123;
if(n1>n2 && n1>n3){
    if(n2>n3){
    console.log(`n2 ${n2} is the second largest number`);    
    console.log(`descending order ${n1} ${n2} ${n3}`);
    }
    else{
        console.log(`n3 ${n3} is the second largest number`); 
    }
}
else if(n2>n1 && n2>n3){
    if(n1>n3){
        console.log(`n1 ${n1} is the second largest number`);
        console.log(`descending order ${n2} ${n1} ${n3}`);
    } 
    else{
        console.log(`n2 ${n3} is the second largest number`);
        console.log(`descending order ${n2} ${n3} ${n1}`);
    }
    
}
else if(n3>n2 && n3>n1){
    if(n1>n2){
        console.log(`n1 ${n1} is the second largest number`);
        console.log(`descending order ${n3} ${n1} ${n2}`);
    } 
    else{
        console.log(`n2 ${n2} is the second largest number`);
        console.log(`descending order ${n3} ${n2} ${n1}`);
    }
}
else{
    console.log("All nos are equal");
}