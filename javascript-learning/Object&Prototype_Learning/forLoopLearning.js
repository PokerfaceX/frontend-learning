const person = {
  firstName: "John",
  lastName: "Doe",
  ssn: "299-24-2351",
};

const decoration = {
  color: "red",
};

const circle = Object.create(decoration);
circle.radius = 20;

for (const prop in person) {
  console.log(prop + ":" + person[prop]);
}

for (const prop in circle) {
  console.log(prop + ": " + circle[prop]);
}

for (const prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

const items = [10, 20, 30];
let total = 0;

for (const item in items) {
  console.log(items[item]);
}
