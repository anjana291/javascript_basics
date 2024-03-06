//student class

class Student{
    rollNo
    studentName
    studentClass
    studentStream
    studentPercentage
    studentRemark

    constructor(roll,name,sclass,stream,percentage,remark){
        this.rollNo=roll
        this.studentName=name
        this.studentClass=sclass
        this.studentStream=stream
        this.studentPercentage=percentage
        this.studentRemark=remark
        this.studentdisplay()
    }

    studentdisplay(){
        console.log(`${this.studentName} roll number ${this.rollNo} in class ${this.studentClass} and stream ${this.studentStream} has ${this.studentRemark} with ${this.studentPercentage}%. `);
    }    
}


console.log('-------------------------------------------------------------------------------');
obj1 = new Student('001','John',11,'Computer',77,'Passed')
// obj1.studentdisplay()

obj2 = new Student('002','Smith',11,'Biology',97,'Passed')
// obj2.studentdisplay()

obj3 = new Student('003','Emma',12,'Computer',87,'Passed')
// obj3.studentdisplay()

obj4 = new Student('004','Sandy',12,'Commerce',88,'Passed')
// obj4.studentdisplay()

obj5 = new Student('005','James',12,'Humanities',38,'Failed')
// obj5.studentdisplay()
console.log('-------------------------------------------------------------------------------');
