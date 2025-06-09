const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.


const numIndex = arr.indexOf(4);
if (numIndex !== -1) {
    arr.splice(numIndex, 1);
}
console.log(arr);