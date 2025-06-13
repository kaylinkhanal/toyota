const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop
<<<<<<< HEAD

let sum = 0;
let subjects = 0;

for (let subject in scores) {
  sum += scores[subject];
  subjects++;                
}

let totalMarks = subjects * 150;
let percentage = (sum / totalMarks) * 100;

console.log("Total Percentage:", percentage.toFixed(2) + "%");
=======
// each subject score is 150

let sum =0 
for (let item in scores ) {
sum = sum + scores[item]
}


console.log(sum/450 * 100)
>>>>>>> 646c212fbb7aa927e158f270d7b2759b84e99945
