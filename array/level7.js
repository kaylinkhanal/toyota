const arr = [3,5,2,5,12,4]
//q1. return only even numbers
const output = arr.map((item)=>{
<<<<<<< HEAD
    if (item % 2 === 0) {
    return item;
  } 
=======
    yedi ( item lai 2 le divide garda reminder === 0){
        return item
    }
>>>>>>> 4b26123fa333d57e2fda3da4c190dc9c0fb3683b
})
console.log(output)

//q2. add 1 to each numbers if its divisible by 5
const output2 = arr.map((item)=>{
<<<<<<< HEAD
    if (item % 5 === 0){//write if condition here
    return item+1;
    } 
=======
    if(item % 5 == 0)
    return item + 1;
>>>>>>> 4b26123fa333d57e2fda3da4c190dc9c0fb3683b
})

console.log(output2)