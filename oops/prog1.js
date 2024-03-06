// create a class :
 
class employee{
    //property
    empId
    empName
    empDesig
    empSalary
    //constructor
    constructor(id,ename,desig,salary){
        this.empId=id   //thiskeyword.variable : instance variable
        this.empName=ename
        this.empDesig=desig
        this.empSalary=salary
    }
    //method
    display(){           //methodname(){ }
        console.log(`employee name is ${this.empName}, designation is ${this.empDesig} and salary is ${this.empSalary}`);
    }
}

//create object

obj1 = new employee(1,'Neel','ui/ux',25000)
obj1.display()

obj2 = new employee(2,'John','HR',20000)
obj2.display()

obj3 = new employee(3,'Maxwell','Developer',29000)
obj3.display()

obj4 = new employee(1,'River','Tester',23000)
obj4.display()