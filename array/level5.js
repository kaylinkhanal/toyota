const arr = [1, 4, 5, 5];

const index = arr.indexOf(4);  // Find index of 4
if (index !== -1) {
  arr.splice(index, 1);        // Remove 1 item at that index
}

console.log(arr); // Output: [1, 5, 5]


//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.


