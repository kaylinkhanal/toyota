const arr = [3,5,2,5,12,4]
//q1. return only even numbers
const output = arr.map((item)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    if (item % 2 === 0) {
    return item;
  } 
=======
    yedi ( item lai 2 le divide garda reminder === 0){
=======
    if ( item % 2 === 0){
>>>>>>> 22ee69cd2097bb960f593551be3c7cf1d71cbb0f
        return item
    }
>>>>>>> 4b26123fa333d57e2fda3da4c190dc9c0fb3683b
})
console.log(output)

//q2. add 1 to each numbers if its divisible by 5
const output2 = arr.map((item)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    if (item % 5 === 0){//write if condition here
    return item+1;
    } 
=======
    if(item % 5 == 0)
    return item + 1;
>>>>>>> 4b26123fa333d57e2fda3da4c190dc9c0fb3683b
=======
    if(item % 5 == 0){
    return item + 1}
>>>>>>> 22ee69cd2097bb960f593551be3c7cf1d71cbb0f
})

console.log(output2)