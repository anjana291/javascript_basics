products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach(element => {
    console.log(element.pName);
});
console.log('---------------------------------------');

//2. print all mobile details whose display is lcd
products.filter(item=>item.display=='lcd').forEach(lcd=>console.log(lcd))
console.log('---------------------------------------');

//3. print 5g mobile phone name
products.filter(item=>item.band=='5g').forEach(item=>console.log(item.pName))
console.log('---------------------------------------');

//4. sort mobile based on price
priceSort=products.sort((prod1,prod2)=>prod1.price-prod2.price).forEach(item=>console.log(item.price))
// console.log(priceSort);
console.log('---------------------------------------');


//5. print costly mobile
costly = products.reduce((cost1,cost2)=>cost1.price>cost2.price?cost1:cost2)
console.log(costly.pName);
console.log('---------------------------------------');

//6. print low cost mobile
lowCost = products.reduce((cost1,cost2)=>cost1.price<cost2.price?cost1:cost2)
console.log(lowCost.pName);
console.log('---------------------------------------');
