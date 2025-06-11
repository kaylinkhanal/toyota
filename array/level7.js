const arr = [3,5,2,5,12,4]
//q1. return only even numbers
<<<<<<< HEAD
const output = arr.filter((item)=>{
    return item % 2 === 0
=======
const output = arr.map((item)=>{
    if(item % 2 == 0) 
        {return item;}
    // return item % 2 == 0;
    
>>>>>>> dd733c50f03ab3a9eb1b6a9b70fb7322d111ba58
})
console.log(output)

//q2. add 1 to each numbers if its divisible by 5
const output2 = arr.map((item)=>{
    if(item % 5 == 0)
<<<<<<< HEAD
    {
       return item + 1;
    }
    return item;
=======
    return item + 1;
>>>>>>> dd733c50f03ab3a9eb1b6a9b70fb7322d111ba58
})

console.log(output2)