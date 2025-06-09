const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.

if (arr.includes(4)) {
    const index = arr.indexOf(4)
    arr.splice(index , 1)
    console.log(arr)
}
