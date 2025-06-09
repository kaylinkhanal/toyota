const arr = [1,4,5,5]

//Q1. Check if array consists number 4, if yes, then remove that item 
// form the array.


for(let a=0; a<arr.length; a++)
{
    if(arr[a] === 4)
    {
        arr.splice(a, 1);
        break; // Exit the loop after removing the first occurrence
    }
}

console.log(arr); // Expected output: [1, 5, 5]

if (arr.includes(4))  
{
  arr.splice(arr.indexOf(4), 1);
}
console.log(arr);


const arr2 = [1, 4, 5, 5];
const matchId = arr2.indexOf(4);
if(matchId !== -1) {
  arr2.splice(matchId, 1);
}
console.log(arr2);