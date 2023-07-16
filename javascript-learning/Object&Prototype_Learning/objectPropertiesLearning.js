"use strict";

let person = {
  firstName: "John",
  lastName: "Doe",
};

Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },

  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});

Object.defineProperty(person, "ssn", {
  configurable: false,
  enumerable: true,
  writable: true,
  value: "012-38-9999",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "ssn");

person.ssn = "123";
console.log(person);
console.log(person.fullName);

console.log(descriptor);
