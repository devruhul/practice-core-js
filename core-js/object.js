let person = {
  name: "Jane Smith",
  age: 25,
  isStudent: false,
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);

// object methods
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start() {
        console.log("Car started.");
    }
};

console.log("Car Make:", car.make);
console.log("Car Model:", car.model);
console.log("Car Year:", car.year);
car.start();

// object destructuring
let { make, model, year } = car;
console.log("Destructured Make:", make);
console.log("Destructured Model:", model);
console.log("Destructured Year:", year);

// spread operator with objects
let car2 = { ...car, color: "red" };
console.log("Car 2:", car2);

// object keys and values
let keys = Object.keys(car);
let values = Object.values(car);
console.log("Car Keys:", keys);
console.log("Car Values:", values);

// object entries
let entries = Object.entries(car);
console.log("Car Entries:", entries);

// object modification
car.year = 2021; // modify existing property
car.color = "blue"; // add new property
console.log("Modified Car:", car);

// object deletion
delete car.model; // delete a property
console.log("Car after deletion:", car);

// object methods with 'this' keyword
let person2 = {
    name: "Alice",
    // arrow function does not have its own 'this', it inherits 'this' from the surrounding scope
    hello: () => {
        console.log("Hello, my name is " + this.name); // 'this' refers to the global object, not person2
    },
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

person2.greet(); // 'this' refers to the person2 object
person2.hello(); // 'this' does not refer to person2, it refers to the global object, so it will not print the name