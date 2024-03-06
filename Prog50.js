//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(element => {
    console.log(element[1]);    
});
console.log('-----------------------------------');
//2. display product whose price < Rs.50
products.filter(item=>item[2]<50).forEach(element=>console.log(element[1]))
// console.log(price);
console.log('-----------------------------------');

//3. print price of oreo
// price=products.filter(item=>item[1]=='oreo').forEach(ele=>console.log(ele[3]))
priceOreo=products.find(item=>item[1]=='oreo')
console.log(priceOreo[2]);

console.log('-----------------------------------');

//4. print costly product name
costly=products.reduce((item1,item2)=>item1[2]<item2[2]?item2:item1)
console.log(costly[1]);
console.log('-----------------------------------');

//5. display out of stock product
outstock=products.filter((item)=>item[3]==0).forEach(element=>console.log(element[1]))
console.log('-----------------------------------');

//6. sort products based on stock in decsending order
sorted=products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))
console.log('-----------------------------------');

//7. print product having maximum available stock
maxstock=products.reduce((prod1,prod2)=>prod1[3]>prod2[3]?prod1:prod2)
console.log(maxstock[1]);
console.log('-----------------------------------');

//8. is there any product can be purchased by Rs. 10
prods=products.some(item=>item[2]<=10)
console.log(prods?'Yes':'No');

console.log('-----------------------------------');

//9. Is there any product in the range of 10 to 30
prods1=products.some(item=>item[2]>=10 && item[2]<=30)
console.log(prods1?'Yes':'No');

console.log('-----------------------------------');

//10.print all products in the range of 10 to 30
product = products.filter(item=>item[2]>=10 && item[2]<=30).forEach(element=>console.log(element[1]))

