//w.a.p to find numbers greater than 25
const arr=[[2,49],[34,24],[3,5],[67,15]]

// for(num of arr){
//     // console.log(num);
//     for(n of num){
//         // console.log(n);
//         if(n>25){
//             console.log(n);
//         }
//     }
// }

console.log(arr);

a=arr.flat();
console.log(a);
for(n of a){
    if(n>25){
 console.log(n);
    }
}

console.log(arr.flat(2));