const firstName = ["kaylin", "james", "maria", "john", "sarah"];

const surnameMap = {
  kaylin: "khanal",
  james: "smith",
  gopal: "hamal",
  shiva: "shrestha",
  sarah: "johnson",
};

// expected output : 
// ['kaylin khanal', 'james smith', 'maria', 'john', 'sarah johnson'];

const output = firstName.map((item)=>{
return surnameMap[item] ?   item + surnameMap[item]  : item
})

console.log(output);
