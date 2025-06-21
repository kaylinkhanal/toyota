 const char = "aabbbbccc"

 const arr = char.split('');
 const charMap = {}

 arr.forEach((item)=>{
     charMap[item] = charMap[item] ? charMap[item] + 1 : 1
 })
 console.log(charMap);

 // how to display the alphabet with the maximum count
 const [maxChar, maxCount] = Object.entries(charMap).reduce((max, current) => {
     return current[1] > max[1] ? current : max;
 }, ['', 0]);
 console.log(`The character with the maximum count is '${maxChar}' with a count of ${maxCount}.`);
