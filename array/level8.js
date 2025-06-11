const arr = [
    {
      "productId": "PROD-A001",
      "name": "Wireless Bluetooth Headphones",
      "price": 59.99,
      "quantity": 2
    },
    {
      "productId": "PROD-B002",
      "name": "Ergonomic Office Chair",
      "price": 249.00,
      "quantity": 1
    },
    {
      "productId": "PROD-C003",
      "name": "USB-C Fast Charger",
      "price": 19.50,
      "quantity": 3
    }
  ]

  // calculate the total cost of all items
let totalSum =  0

arr.forEach((item)=>{
    totalSum = totalSum + (item.price * item.quantity)
})
console.log(totalSum)