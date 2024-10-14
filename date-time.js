const currDate = new Date();

console.log(currDate.getDate());
console.log(currDate.toLocaleDateString());
console.log(currDate.toLocaleString());
console.log(currDate.toLocaleTimeString());
console.log(currDate.toString());
console.log(currDate.toTimeString());

const newDate = Date.now()
console.log(typeof newDate);

const newway = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newway);