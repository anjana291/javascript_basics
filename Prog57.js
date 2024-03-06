//w.a.p to check whether location key is present or not
employee = {
    empID : 1000,    //0:1000
    empName :'Neel',  //1:neel
    empDesig :'Developer',
    location :'kochi',
    salary : 25000
}

// if("Location" in employee){
//     console.log("Present");
// }
// else{
//     console.log("Not Present");
// }

console.log('location' in employee?'Prsent':'not Present');

//w.a.p to check whether gender is present in the object employee.
//if present print 'present' else add new key as gender with value as male

// if('gender' in employee){
//     console.log('Present');
// }
// else{
//     employee['gender'] = 'male'
// }
// console.log(employee);

'gender' in employee?console.log('Present'): (employee['gender'] = 'male',console.log(employee))
'gender' in employee?console.log('Present'): employee['gender'] = 'male'
console.log(employee);

