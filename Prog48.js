//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log('EMPLOYEE NAME...')
employee.forEach(element => {
    console.log(element[1]);    
});

employee.map((emp)=>emp[1]).forEach(element=> {console.log(element);})

console.log('---------------------------------------------------------');
//print total numbers of employee


//print developer employee details
console.log('DEVELOPER EMPLOYEE DETAILS....');
devEmp=employee.filter(emp=>emp[2]=='developer').forEach(element=>console.log(element))
// console.log(devEmp);

console.log('-------------------------------------------------------');

//print employee whose salary > 30000
console.log('SALARY>30000');
sal=employee.filter(emp=>emp[4]>30000).forEach(item=>console.log(item))
// console.log(sal);

console.log('-------------------------------------------------------');

// print details of employee Laisha
console.log('EMPLOYEE DETAILS OF Laisha');
empName=employee.filter(emp=>emp[1]=='Laisha').forEach(item=>console.log(item))
// console.log(empName);

console.log('--------------------------------------------------');

//print the employ name whose have the highest salary
console.log('EMPLOYEE NAME WITH HIGHEST SALARY');
highestSal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highestSal[1]);

console.log('--------------------------------------------------');
//print the employ name whose have the lowest salary
console.log('EMPLOYEE NAME WITH LOWEST SALARY');
lowestSal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp2:emp1)
console.log(lowestSal[1]);

console.log('--------------------------------------------------');

//print total salary expense of the company
console.log('TOTAL SALARY');
total=employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);
