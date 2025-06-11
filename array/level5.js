const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.
const index = arr.indexOf(4);
if(index !== -1){
   arr.splice[index,1]; 
}

<<<<<<< HEAD
console.log(arr);
=======
//hint:
// indexOf
// remove that index from array (splice)
>>>>>>> 4b26123fa333d57e2fda3da4c190dc9c0fb3683b

const matchId = arr.indexOf(7)
if(matchId !== -1){
    arr.splice(matchId,1)
}
console.log(arr)