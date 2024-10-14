const arr1 = [1,2,3,4,5]

// const filterArr = arr1.filter((val)=>{return val < 3})
// console.log(filterArr);
// console.log(arr1);

// const init = 3
// const reduceArr = arr1.reduce((acc,curr)=> acc + curr,init)
// console.log(reduceArr);
// console.log(arr1);

const myOrder = [
    {
        product:"shoe",
        price:300,
    },
    {
        product:"bag",
        price:550
    },
    {
        product:"pen",
        price:100
    }
]

const initialVal = 200;

const finalPrice = myOrder.filter((val)=> val.price > initialVal)
                          .reduce((acc,curr)=>acc+curr.price,0)  
//console.log(finalPrice);


const orders = [
    { id: 1, amount: 250 },
    { id: 2, amount: 450 },
    { id: 3, amount: 50 },
    { id: 4, amount: 600 },
  ];
  
  const minimumAmount = 200;
  
  const totalSales = orders
    .filter(order => order.amount > minimumAmount)
    .reduce((accumulator, order) => accumulator + order.amount, 0);
  
//  console.log(totalSales); // Output: 1300
// arr1.map((val,index,arr)=>{
//     console.log(val);
// })

const maps = arr1.map((num)=> num +10)
    .map((num)=> num + 1)
    .filter((num) => num > 14)

console.log(maps);








