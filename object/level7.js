const user = [
    {
    name: "John Doe",
    age: 30,
    scores: {
        math: 85,
        english: 90,
        science: 78
    }
},
{
    name: "ram thapa",
    age: 30,
    scores: {
        math: 82,
        english: 94,
        science: 71
    }
}

]

/// calcualte the average percentage scored by all the students
let totalPercentage = 0;
user.forEach((item) => {
  let sum = 0;
  let subjectCount = 0;

  for (let subject in item.scores) {
    sum += item.scores[subject];
    subjectCount++;
  }

  let percentage = sum / subjectCount;
  totalPercentage += percentage;
});

const averagePercentage = totalPercentage / user.length;

console.log("Average Percentage:", averagePercentage.toFixed(2));