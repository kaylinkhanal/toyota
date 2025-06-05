const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log("Full Name:", person.fullName());
console.log("Person id:", person.id);