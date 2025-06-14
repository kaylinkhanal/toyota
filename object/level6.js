const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop
let sum = 0;
for (let key in scores){
    sum = sum +scores[key];
   
}
 let result = sum / 450 *100;
console.log(result);
