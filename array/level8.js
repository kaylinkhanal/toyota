arr = [
  {
    "id": "P1001",
    "name": "Wireless Bluetooth Headphones",
    "description": "Noise-cancelling over-ear headphones with 20 hours of battery life.",
    "category": "Electronics",
    "brand": "SoundPro",
    "price": 79.99,
    "quantity": 15
  },
  {
    "id": "P1002",
    "name": "Smart Fitness Watch",
    "description": "Fitness tracker with heart rate monitor and sleep tracking.",
    "category": "Wearables",
    "brand": "FitGear",
    "price": 59.99,
    "quantity": 30
  },
  {
    "id": "P1003",
    "name": "Ergonomic Office Chair",
    "description": "Mesh back office chair with lumbar support and adjustable height.",
    "category": "Furniture",
    "brand": "WorkComfort",
    "price": 129.00,
    "quantity": 8
  },
  {
    "id": "P1004",
    "name": "Electric Kettle",
    "description": "1.7L stainless steel electric kettle with auto shut-off feature.",
    "category": "Home Appliances",
    "brand": "KitchenPro",
    "price": 34.50,
    "quantity": 22
  },
  {
    "id": "P1005",
    "name": "Gaming Mouse",
    "description": "RGB wired gaming mouse with customizable buttons.",
    "category": "Accessories",
    "brand": "GamerTech",
    "price": 25.99,
    "quantity": 0
  },
  {
    "id": "P1006",
    "name": "Cotton T-Shirt",
    "description": "Soft and breathable cotton t-shirt available in various sizes.",
    "category": "Clothing",
    "brand": "StyleMate",
    "price": 14.99,
    "quantity": 50
  }
]




let totalSum = 0;

arr.forEach((item) => {

  totalSum =  totalSum + (item.price*item.quantity); ;
});
console.log("Total Sum of Prices: NPR " + totalSum.toFixed(2));
