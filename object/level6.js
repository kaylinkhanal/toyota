
const scores = {
    math: 120,
    english: 100,
    science: 90,
}

//calcualte total percentage using for in loop
totalMarks= 0;
for(let key in scores)
{
    totalMarks= totalMarks+scores[key]
}

percentage= (totalMarks/450)*100
console.log(percentage)