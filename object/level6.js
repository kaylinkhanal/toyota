const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop
let sum = 0;
for (let x in scores){
    sum += scores[x];
}
console.log(sum/450*100);