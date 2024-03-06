//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('HIGHEST POSITIVE CASES');
positive=covid_data.reduce((element1,element2)=>element1[2]>element2[2]?element1:element2)
console.log(positive[1]);
console.log('------------------------------------');

//2. district having Highest 1st dose vaccine
console.log('HIGHEST 1st DOSE VACCINE');
highest=covid_data.reduce((ele1,ele2)=>ele1[5]>ele2[5]?ele1:ele2)
console.log(highest[1]);
console.log('------------------------------------');

//3. district having lowest death rate
console.log('DISTRICT WITH LOWEST DEATH RATE');
lowest=covid_data.reduce((item1,item2)=>item1[3]<item2[3]?item1:item2)
console.log(lowest[1]);
console.log('------------------------------------');

//4. sort data with +ve case in descending order
console.log('POSITIVE CASE IN DESCENDING ORDER');
sorted=covid_data.sort((case1,case2)=>case2[2]-case1[2]).forEach(element => {
    console.log(element);
});
// console.log(sorted);
console.log('------------------------------------');

//5. is district with +ve cases > 15000
console.log('POSITIVE>15000');
positiveCase=covid_data.some(item => item[2]>15000)
console.log(positiveCase?'Yes':'No');
console.log('------------------------------------');

//6. sort data with 1st dose vaccine ascending order
console.log('1st DOSE VACCINE ASCENDING ORDER');
covid_data.sort((item1,item2)=> item1[5]-item2[5]).forEach(element=>{console.log(element)})
console.log('------------------------------------');

//7. Print Thrissur details
console.log('THRISSUR DETAILS');
thrissur=covid_data.find(item=>item[1]=='Thrissur')
console.log(thrissur);
console.log('------------------------------------');

//8. Print total number of positive cases
console.log('TOTAL POSITIVE CASE');
total=covid_data.map(index=>index[2]).reduce((item1,item2)=>item1+item2)
console.log(total);
console.log('------------------------------------');

//9. Print total number of cured cases
console.log('TOTAL CURED CASE');
totalCure=covid_data.map(item=>item[4]).reduce((case1,case2)=>case1+case2)
console.log(totalCure);
console.log('------------------------------------');

//10. Print cured cases in Idukk
console.log('CURED CASE IN IDUKKI');
curedIdk=covid_data.filter(item=>item[1]=='Idukki').forEach(element=>console.log(element[4]))
// console.log(curedIdk);
