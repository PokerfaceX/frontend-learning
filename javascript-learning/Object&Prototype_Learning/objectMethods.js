const person = {
  firstName: "John",
  lastName: "Doe",
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("hello world");
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    console.log("es6 declaring methods in an object");
  },
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

const sayHello = () => {
  console.log("Hello world");
};

person.greet = function () {
  console.log("hello");
};

person.greet = sayHello;

person.greet();
