const firstName = ["kaylin", "james", "maria", "john", "sarah"];

const surnameMap = {
  kaylin: "khanal",
  james: "smith",
  gopal: "hamal",
  shiva: "shrestha",
  sarah: "johnson",
};

// expected output :
// 'kaylin khanal', 'james smith', 'maria', 'john', 'sarah johnson'];

<<<<<<< HEAD
const output = firstName.map((item)=>{
    if(surnameMap[item]){
        return `${item} ${surnameMap[item]}`
    }else{
        return item
    }
})

console.log(output)



// const output = firstName.forEach((names)=>{
//   if(surnameMap[names]){
//     console.log(`${names} ${surnameMap[names]}`);
//   }
// })

=======
const output = firstName.map((item) => {
    if(surnameMap[item]){
        return item +" "+ surnameMap[item];
    }else{
        return item;
    }
});

console.log(output);
>>>>>>> 8365af9868a78988f58c4754b93d4e76728423a2
