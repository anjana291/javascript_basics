// p = [1000,'Neel','developer','kochi',25000,3]
// console.log(typeof(p));
// console.log(p[2]);

employee = {
    empID : 1000,    //0:1000
    empName :'Neel',  //1:neel
    empDesig :'Developer',
    loc :'kochi',
    salary : 25000
}

console.log(employee);
// console.log(employee["empID"]);
// console.log(employee.empDesig);

console.log('After adding element to object...');

employee['exp']=3
console.log(employee);

Object.assign(employee,{'time':"full-time"})
console.log(employee);

delete employee.time
console.log(employee);

//updating employee name
employee["empName"]='Neel John'
console.log(employee);

employee["exp"]+=4
console.log(employee);

for(let x in employee){
    console.log(x);
}