// pure vs impure function

// pure-
// same input same output
// no side effect in pure function
// no effects on external variable
// testing is easier and output is predictable

 
// impure-
// may have different output for a given output
// may have side effect in impure function
// will modify external variable


// unit testing 
// integration testing
// end to end testing
// black box 
// white box
// manual automatic




// reduce:
// -> can returns single/combined value 
// -> doesn't change original array values
// -> paramter: accumulator, currentvalue, currentId
// -> we can set initial value for accumulator
// -> 

const total = arr.reduce((accumulator,currentvalue ) => {
  return accumulator+(currentvalue.price * currentvalue.quantity)},0);
//write your code here
   console.log(total);
