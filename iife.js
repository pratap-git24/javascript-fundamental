(function (){
    console.log("hello");
})();

const getValue = (function(){
    let num = 40;
    return {
        increment:function(){
            num++;
            return num
        },
        decrement:function(){
            num--;
            return num
        }
    };
    
})()

console.log(getValue.increment());
console.log(getValue.decrement());

(()=>{
    console.log(`iife in arrow fun`);
})();