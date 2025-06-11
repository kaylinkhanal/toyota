const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.

//hint:
// indexOf
// remove that index from array (splice)

const matchId = arr.indexOf(7)
if(matchId ==4){
    arr.splice(matchId,1)
}
console.log(arr)