function cartPrice(...price){
    //return price.reduce((acc,curr)=> acc+curr)
    //return price
    //return price.forEach((num)=> {console.log(num)})
   return price.filter((val)=> val > 50)
}

console.log(cartPrice(100,50,20))

function test(){
    test2()
   console.log("test");
   
}
function test2(){
    console.log("test2");
 }
console.log(test())