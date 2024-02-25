let fruits = ['Apple','Orange','Kiwi','Pineapple'];
console.log(fruits);

for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}

for(let y in fruits){
    console.log(y);
}
for(let y in fruits){
    console.log(fruits[y]);
}
console.log('----------------------');

for(let z of fruits){
    console.log(z);
}