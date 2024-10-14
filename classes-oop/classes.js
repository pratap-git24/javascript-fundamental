class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    getDetails(){
        console.log(`Username is ${this.username}`);
    }
}

class student extends User{
    constructor(username,email,password,marks){
        super(username)
        this.marks = marks
    }

    getStudentMarks(){
        console.log(`${this.username} has scored ${this.marks}`);
    }
    
}
const usr = new student("pratap","pk@gamil.com",123,50)
usr.getDetails()
usr.getStudentMarks();

console.log(Math.ceil(Math.PI));