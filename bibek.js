const person = {
  firstName: "Bibek",
  lastName: "Bhatta",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
 }
};
console.log(person)
