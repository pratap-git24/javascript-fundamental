class student{
    constructor(studentname,rollno,marks){
        this.studentname = studentname,
        this.rollno = rollno,
        this.marks = marks
    }
    get studentname(){
        return this._studentname
    }
    set studentname(name){
        this._studentname = name
    }
    
}

const stud1 = new student("pratap",51,200);

console.log(stud1.studentname)