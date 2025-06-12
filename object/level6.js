const scores = {
  math: 120,
  english: 100,
  science: 90,
};
let sum = 0;

//calcualte total percentage using for in loop

for (score in scores) {
  sum += scores[score];
}
console.log((sum / (150 * 3)) * 100);
