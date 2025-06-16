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
        account: 94,
        science: 71
    }
}

]

<<<<<<< HEAD
/// calcualte the average percentage scored by all the students
totalPercentage = 0;
user.forEach((item) => {
    const eachScores = Object.values(item.scores);
    const scores = eachScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    totalPercentage = totalPercentage + (scores/300 * 100);
})
console.log(totalPercentage / 2);
=======
/// calculate the average percentage scored by all the students
let totalPercentage = 0;
user.forEach((item)=>{
        const eachScores = Object.values(item.scores)
        const scores = eachScores.reduce((acc, currentValue) => {
        return acc + currentValue;
        });

        totalPercentage = totalPercentage + (scores/300*100)
})
console.log(totalPercentage/2)

>>>>>>> ad6c457aa0bd2dc336e09d1b9e86051d5ce37c26
