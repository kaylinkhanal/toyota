const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop

let sum = 0;
let subjects = 0;

for (let subject in scores) {
  sum += scores[subject];
  subjects++;                
}

let totalMarks = subjects * 150;
let percentage = (sum / totalMarks) * 100;

console.log("Total Percentage:", percentage.toFixed(2) + "%");
