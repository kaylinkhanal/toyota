const obj = {
    scores: 90,
    name: "John",
}


// if score is greater than 80, add new item to obj, status: 'distinction', else
// status should be first division
// expected output :
// {
    // scores: 90,
    // name: "John",
    // status: "distinction"
// }

<<<<<<< HEAD
if (obj.scores > 80) {
    obj.status = 'distinction'
} else {
    obj.status = 'first division'
}

console.log(obj)
=======
if(obj.scores >= 80){
obj.status = "distinction"
} else{
obj.status = "first division"
}


console.log(obj)



>>>>>>> 29b5897132d131e6adce79713dc0c0f76102b0c2
