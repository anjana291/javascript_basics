//w.a.p to find the cube of each items in the given array
a=[10,11,12,13,14,15]

a.forEach(element => {
    console.log(element**3);
});

console.log('----------------------------------------------');

cube=a.map((item)=>item**3)
console.log(cube);
console.log('----------------------------------------------');

//w.a.p to create anew array with numbers<=13 the increment the number
// and numbers>13 decrement
a1=[10,11,12,13,14,15]

arr=a1.map((item1)=> item1<=13? item1+1: item1-1);
console.log(arr);