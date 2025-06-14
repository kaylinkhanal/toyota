const char = 'aaabbbbccc'

const charArr = char.split('')
console.log(charArr)
let charMap = {}


charArr.forEach((item)=>{
  charMap[item]  = charMap[item] ? charMap[item] + 1 : 1
   count = Object.values(charMap)
   maxCount = Math.max(...count)
})

console.log(maxCount)

