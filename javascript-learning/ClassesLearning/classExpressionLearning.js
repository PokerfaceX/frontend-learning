let Person = class A {
  constructor(name) {
    this._name = name;
    this._age = 10;
  }
  get name() {
    return this._name + "1111";
  }
  sayA = () => console.log("AAAA");
};

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi = () => console.log("nihao");
  }
);

greeting.sayHi();

const p = new Person("John");
console.log(p);

let app = new (class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  start() {
    console.log(`Starting the ${this.name} ${this.age}...`);
  }
})("Awesome App", 99);

app.start(); // Starting the Awesome App 99...
