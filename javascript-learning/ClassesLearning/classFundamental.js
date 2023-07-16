// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name + " 123";
  }
}

var john = new Person("John Doe");
console.log(john.getName());
console.log(typeof Person);
