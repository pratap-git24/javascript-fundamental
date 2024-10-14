
const student = {
    name:"pratap",
    score:"400",
    printName: function(){
        console.log(this.name);
    }
}

student.printName()

function hello(){
    let msg = "pooja"
    console.log(this.msg);
}

hello()