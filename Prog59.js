//w.a.p to find the number count from the given array
arr=[10,20,50,20,30,80,10,20,70,50,20,10]


obj={}
// for(let num of arr){
//     if(num in obj){
//         obj[num]+=1
//     }
//     else{
//         obj[num]=1
//     }
// }
// console.log(obj);

arr.map(item=>item in obj?obj[item]+=1:obj[item]=1)
console.log(obj);

//w.a.p to find first recursive letter
pattern='ABCBACCBAA'  //B

characters=Array.from(pattern)

objs={}
for(let char of characters){
    if(char in obj){
        console.log(`first recursive letter is ${char}`);
        // break
    }
    else{
        obj[char]=1
    }
}