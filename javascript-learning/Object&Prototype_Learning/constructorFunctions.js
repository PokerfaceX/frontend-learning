function Person(firstName, lastName) {
  if (!new.target) {
    throw Error("Cannot be called without the new keyword");
  }
  console.log(new.target);
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const person1 = Person("jason", "jin");
//console.log(person1.getFullName());

// const person2 = Person("jason", "jin");
// console.log(person2);
