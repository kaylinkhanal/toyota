const obj = {
    scores: 90,
    name: "John",
}

if(obj.scores>80) {

  obj.status = 'distinction';
}
else {
  obj.status = 'First Division';
}

// if score is greater than 80, add new item to obj, status: 'distinction', else
// status should be first division
// expected output :
// {
    // scores: 90,
    // name: "John",
    // status: "distinction"
// }

console.log(obj)