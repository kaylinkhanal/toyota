const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.

//hint:
// indexOf
// remove that index from array (splice)

const index = arr.indexOf(4)
 if (index !== -1) arr.splice(index, 1)

console.log(arr)