const user = [
  {
    name: "John Doe",
    age: 30,
    scores: {
      math: 85,
      english: 90,
      science: 78,
    },
  },
  {
    name: "ram thapa",
    age: 30,
    scores: {
      math: 82,
      english: 94,
      science: 71,
    },
  },
];

/// calcualte the average percentage scored by all the students

let totalPercentage = 0;

user.forEach((item) => {
  const eachScores = Object.values(item.scores);

  const scores = eachScores.reduce((acc, CurrentValue) => {
    return acc + CurrentValue;
  });

  console.log(eachScores);
  console.log(scores);
  totalPercentage = totalPercentage + (scores * 100) / 300;
});

console.log(totalPercentage);

console.log(`Average Percentage = ${totalPercentage / user.length}`);
