let a = 10
const b = 20
var c = 30

function scope(){
    console.log(a);
    a=40;
}
a=50;
console.log(a);
scope()
console.log(b);
console.log(c);



