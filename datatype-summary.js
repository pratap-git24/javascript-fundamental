// two types of datatypes
// primitive
// number,string,boolean,undefined,null,symobl,bigint


let id = Symbol("1");

let id2 = Symbol("2");

console.log(id === id2);

// nonprimitive(reference)
// array, object , functions

const arr = ["ram","syam","sita"];

const student = {
    name:"pk",
    rollno:1,
    score:50
}

const testfun = () =>{

}

//****************   stack and heap     **************** */

// stack(primitive, give a copy of memory, if you change the copy varivale then original value will not change)
// heap(nonprimitive, give a reference of the memory, if you change the copy varivale then original value will change)

let studentName = "pratap";

let studentNamecopy = studentName;
studentNamecopy = "Pooja"

console.log(studentName) // pratap
console.log(studentNamecopy) //Pooja

const obj1 = {
    name:"pk",
    email:"pk@gmail.com"
}

const obj2 = obj1;
obj2.email="nk@google.com";
obj1.name="nk"

console.log(obj1)
console.log(obj2)

