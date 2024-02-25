let arr = [10,23,11,2,5,3];

//w.a.p to check whether 2 is present in the array

searchItem = 25;
isPresent = false;
for(let n of arr){
    if(searchItem == n){
        isPresent = true;
    }
}
console.log(isPresent?'Present':'Not Present');

//WRONG
// for(let n of arr){
//     if(n == 2){
//         console.log('The number is present');
//     }
//     else{
//         console.log('The number is not present');
//     }
// }