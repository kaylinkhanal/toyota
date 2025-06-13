const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop
//each subject score is 150

let sum = 0
for (let  key in scores){
    sum+= scores [key]


}
console.log(sum/450 *100)
