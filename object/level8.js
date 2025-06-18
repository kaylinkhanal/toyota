<<<<<<< HEAD
const firstName = ['bipin','beepin','bpin','b_pin','bee_pin']

const surnameMap = {
    bipin : 'sainju',
    beepin : 'shrestha',
    bpin : 'sainjushrestha',
    b_pin : 'stha',
    beepin : 'hero'
}

const fullname = firstName.map((item)=>{
    console.log(surnameMap[item] ?  item + surnameMap[item] : item)
})


const char = 'aabbbbccccccddddddddddd'
//output should be the longest character needs to be count

let maximumNummber = 0;
const charArr = char.split('')
const charMap = {}

charArr.forEach((item)=>{
    charMap[item] = charMap[item] ? charMap[item] + 1 : 1
    console.log(charArr)
    
})
console.log(charMap)
=======
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

const output = firstName.map((item) => {
    if(surnameMap[item]){
        return item +" "+ surnameMap[item];
    }else{
        return item;
    }
});

console.log(output);
>>>>>>> 8365af9868a78988f58c4754b93d4e76728423a2
