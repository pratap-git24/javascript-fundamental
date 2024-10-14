const myid = Symbol("pkd")

const student = {
    "name" : "Pratap",
    "rollnumber" : 22,
    [myid]:"pk",
    marks:300,
    email:"pratap@gmail.com",
    address:{
        addresss1 : "bangalore",
        pincode:"650068"
    }
}

//console.log(typeof student[myid]);
//console.log(student.address.addresss1);
// console.log(student.name);

// console.log(student["marks"]);

// const obj = new Object({name:"pooja"}) // you can use without new keyword because object is a constructor
// console.log(obj.name);

// const obj2 = Object.assign({score:400})
// console.log(obj2["score"]);

const studentCopy = student;

studentCopy.email="richu@gmail.com"
//Object.freeze(student)
student.email="pooja@gmail.com"

//console.log(studentCopy.email);
//console.log(student.email);

student.result = function(){
   // console.log(`student result ${this.marks}`);
}

//console.log(student.result())

const ob1 = {1:'a',2:'b'};
const ob2 = {3:'c',4:'d'}
const ob4 = {5:'e'}

//const ob3 = {ob1,ob2}
//console.log(ob3); // { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }

const ob3 = Object.assign({},ob1,ob2,ob4);
//console.log(ob2);
//console.log(ob3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const ob3 = {...ob1,...ob2,...ob4}
// console.log(ob3);

//console.log(Object.keys(ob1));
//console.log(Object.values(ob1));

//console.log(student.hasOwnProperty('fullname'));

const courses = {
    name:"javascript",
    pice:5000,
    author:"pratap"
}

const {name:cname} = courses;
console.log(cname);






