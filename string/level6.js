const char= 'aabbbbccc'

// Output should be 4

let charArr= char.split('')
charMap= {}

charArr.forEach((item,id)=>{
    if(charMap[item]){
        charMap[item]++
    }

    else
    {
        charMap[item]= 1
    }
})

let objArr= Object.values(charMap)

let max= Math.max(...objArr)
console.log(max)