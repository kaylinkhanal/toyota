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

const arr = [
    {
      "productId": "PROD-A001",
      "name": "Wireless Bluetooth Headphones",
      "price": 59.99,
      "quantity": 2,
    },
    {
      "productId": "PROD-B002",
      "name": "Ergonomic Office Chair",
      "price": 249.00,
      "quantity": 1,
    },
    {
      "productId": "PROD-C003",
      "name": "USB-C Fast Charger",
      "price": 19.50,
      "quantity": 3,
    }
  ]

  // calculate the total cost of all items using reduce

  const total = arr.reduce((accumulator, currentValue) => {
//write your code here
    return (accumulator + currentValue.price * currentValue.quantity)
   
  },0) // if 0 is not written then it will take entire first object value, so it better to keep it 0;


  console.log(total);
