const char = 'aabsshdfowakaaaalswwwl'
//output should be 7

const charArr  = char.split('')
console.log(charArr)

const countMap = {}
charArr.forEach((item) => {
    countMap[item] = countMap[item] ? countMap[item] +1 : 1
})
console.log(countMap)

const maxValue = Math.max(...Object.values(countMap));
console.log(maxValue)