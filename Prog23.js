//w.a.p to find cube of a given number using function

function cubeofNum(num){
    let cube=num**3;
    // return num**3;
    console.log(cube);
}

cubeofNum(3);

//w.a.p to check whether a given number is odd/even

// function oddoreven(num){
//     if(num%2==0){
//         console.log('Even number');
//     }
//     else{
//         console.log('Odd number');
//     }
// }

// oddoreven(4);

function oddoreven(num){
    return num%2==0?'even':'odd';
}

console.log(oddoreven(47));


//Positive / negative

function posinegtive(num){
    return num>0? 'Positive':num<0?'Negative':'neither positive nor negative';
}

console.log(posinegtive(0));