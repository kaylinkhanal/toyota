const char = 'aabbbbccc'

//output should be 4

const charArr = char.split('')
const charMap = {}

charArr.forEach((item) => {
    debugger;
    charMap[item]= charMap[item] ? charMap[item] + 1 : 1
})

console.log(charMap)