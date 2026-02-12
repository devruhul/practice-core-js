// declaring a variable
var name = "John Doe";
const age = 30;
let isStudent = true;
let hobbies = ["reading", "traveling", "coding"];

console.log("Hobbies:", hobbies);
console.log("Person:", person);

// fucntion declaration
function add(a, b){
    console.log("Sum:", a + b);
}

add(5, 10);

// arrow function
const multiply = (a, b) => {
    console.log("Product:", a * b);
}

multiply(5, 10);

// conditional statement
if (age > 30) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// loop
for (i = 0; i < hobbies.length; i++) {
    console.log("Hobby:", hobbies[i]);
}

// while loop
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

// do while loop
let num = 0;
do {
    console.log("Number:", num);
    num++;
} while (num < 5);

// switch statement
let day = "sd";
switch (day) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    default:
        console.log("It's another day.");
}

// try-catch block
try {
    let result = 10 / 2;
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

// class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 28);
person1.greet();







