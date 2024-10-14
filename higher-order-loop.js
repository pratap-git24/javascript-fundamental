const myarr = [1,2,3,4,5,6,7]

const myObj = {
    name:"pratap",
    rollno:120
}

for(const item of myarr){
   // console.log(item);
}
const str = "pooja"
for (const char of str) {
    //console.log(char);   
}

const map = new Map();
map.set("in","india")
map.set("pak","pakistan")

for (const [key,val] of map) {

    //console.log(`key is ${key} , value is ${val}`);
}

/* 
for (const key of myObj) { // not iterable on object
    console.log(myObj['key']);
} */

for(const key in myObj){
    //console.log(myObj[key]);
}

const lang = ["javascript","PHP","Ruby"]

lang.forEach((item,index,arr)=>{
    //console.log(`${item} - ${index} - ${arr}`);
})

const students = [
    {
        name:"pratap k",
        marks:20
    },
    {
        name:"pooja k",
        marks:30
    }
]

students.forEach((item)=>{
    console.log(item.name);
})


