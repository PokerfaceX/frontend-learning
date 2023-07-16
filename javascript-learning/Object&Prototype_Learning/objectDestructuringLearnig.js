let person = {
  firstName: "John",
  lastName: "Doe",
};

function getPerson() {
  return null;
}

// let firstName = person.firstName;
// let lastName = person.lastName;

let { firstName: fName, lastName: lname } = person;
let { firstName, lastName, middleName = "", currentAge: age = 100 } = person;
console.log(firstName, lastName, middleName, age);

let { a, b } = getPerson() || {};
console.log(a, b);

let employee = {
  id: 1001,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
};

let {
  name: { firstName: c, lastName: d },
} = employee;
console.log(c);
console.log(d);

let display = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);

let person1 = {
  firstName: "name",
  lastName: "last",
};

display(person1);
