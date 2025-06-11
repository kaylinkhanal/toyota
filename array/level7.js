const arr = [3,5,2,5,12,4]
//q1. return only even numbers
const output = arr.filter((item)=>{
    return item %2 === 0
})
console.log(output)

//q2. add 1 to each numbers if its divisible by 5
const output2 = arr.map((item)=>
  {
    if (item % 5 === 0)
    return item + 1
  else
  return item
})

console.log(output2)