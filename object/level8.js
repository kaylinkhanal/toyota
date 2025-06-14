const firstName = ["Sophia", "Summer", "Ceth", "Shivank", "Rajani"];

const surname = {
  Sophia: "Thapa",
  Summer: "Magar",
  Shiva: "Pun",
  Shivank: "Ale",
  Rajani: "Shrestha",
};

const fullName = firstName.map((item) => {
  if (surname[item]) {
    return item + " " + surname[item];
  } else {
    return item;
  }
});

console.log(fullName);
