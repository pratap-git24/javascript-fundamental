const promise =  new Promise(function(resolve,reject){
    setTimeout(function(){
        const msg = true
        if(msg === true){
            resolve("resolved")
        }
        else{
            reject("rejected ")
        }
    },1000)
})

promise.then(function(data){
    console.log(data);
    console.log("then called");
    
}).catch(function(err){
    console.log("catck the error",err);
})


async function asyncPromise (){
    const res = await promise
}
asyncPromise()
.then(() =>{
    console.log("success in async fun");
})
.catch(function(){
    console.log("reject on async fun");
})