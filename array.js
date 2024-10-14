const arr = [1,2,8,[3,4],5];
const arrnew = new Array("a","b","c")
//arr.push(6);
//console.log(arr);

//const arr2 = arr;
//console.log(arr2);
/* arr.pop()
console.log(arr);
console.log(arr2); */

//const modifyArr = arr.slice(1,3)
/* const spliceArr = arr.splice(1,3)
console.log(spliceArr);
console.log(arr);
console.log(arrnew); */

//console.log(arr.concat(arrnew)) // [1,2,3,4,5,'a','b','c']
/* const arrcopy = arr.copyWithin(1,2); // []
console.log(arrcopy); */
const arrIterable = arr.entries()
/* console.log(arrIterable.next().value)
console.log(arrIterable.next().value) */

/* const filterVal = arr.filter((item)=> item >= 3)
console.log(filterVal); */

function getMaxVal(val){
    return val > 3
}

const filterVal = arr.filter(getMaxVal)
//console.log(filterVal);

/* console.log(arr.find((val)=>val>4)); // return first value
console.log(arr.findIndex((val)=>val>4)); // return index of the first value

 */

//console.log(arr.flat()); // [1,2,3,[4,5]] => [1,2,3,4,5]; // create new array from the sub array

const arrIterable2 = arrnew.keys();

for(const key of arrIterable2){
    //console.log(key);
}

const initial2 =2
const arrReduce = arr.reduce((acc,initial) => acc + initial,initial2)
//console.log(arrReduce);

const months = ['feb','dec','aug']
//console.log(months.sort());

const arrValues = arr.values()
/* console.log(arrValues.next())
console.log(arrValues.next())
console.log(arrValues.next())
 */
for (const value of arrValues) {
    //console.log(value);
}

/* console.log(arr.shift());
console.log(arr);
arr.unshift(7)
console.log(arr); */

/* console.log(Array.from(arr, (val)=> val+1))

console.log(arr);

console.log(Array.of());

console.log(Array.isArray(arr));
 */

/* for (const key in arr) {
   console.log(key);
}
for (const val of arr) {
    console.log(val)
}*/
// arr.forEach((element) => {
//     console.log(element);
// });

/*for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);    
} */







