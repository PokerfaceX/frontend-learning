this.color = "red";

// simple function invocation
function show() {
  console.log(this === window);
}

let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Harley Davidson",
};

function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

const car1 = new Car("Nissan");
console.log(car1.getBrand());
const brand = car.getBrand.bind(bike);

show();

console.log(this);
console.log(car.getBrand());
console.log(brand());

const canFetch = typeof globalThis.fetch === "function";
console.log(canFetch);
