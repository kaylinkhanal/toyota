
const arr = [3,5,2,5,12,4]
//q1. return only even numbers
<<<<<<< HEAD
let output = arr.filter((item)=>{
    if ( item % 2==0)
    return item
//return item %2==0
=======
const output = arr.map((item)=>{
    if ( item % 2 === 0){
        return item
    }
>>>>>>> 22ee69cd2097bb960f593551be3c7cf1d71cbb0f
})
console.log(output)

//q2. add 1 to each numbers if its divisible by 5
<<<<<<< HEAD
let output2 = arr.map((item)=>{
    if(item %5 ==0)
    return item +1;
=======
const output2 = arr.map((item)=>{
    if(item % 5 == 0){
    return item + 1}
>>>>>>> 22ee69cd2097bb960f593551be3c7cf1d71cbb0f
})

console.log(output2)