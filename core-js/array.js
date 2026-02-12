// array methods
let sports = ["soccer", "basketball", "tennis"];
sports.push("baseball"); //insert at the end of the array
sports.pop(); //remove the last element of the array
sports.unshift("volleyball"); //insert at the beginning of the array
sports.shift(); //remove the first element of the array

console.log(sports);
sports.forEach((sport) => {
  console.log("Sport:", sport); //iterating through the array
});

let upperCaseSports = sports.map((sport) => sport.toUpperCase());
console.log("Upper Case Sports:", upperCaseSports); //map method to create a new array with uppercase sports

let filteredSports = sports.filter((sport) => sport.length > 6);
console.log("Filtered Sports:", filteredSports); //filter method to create a new array with sports that have more than 6 characters

let hasSoccer = sports.some((sport) => sport === "soccer");
console.log("Has Soccer:", hasSoccer); //some method to check if at least one sport is soccer

let allHaveBall = sports.every((sport) => sport.includes("ball"));
console.log("All Have Ball:", allHaveBall); //every method to check if all sports include the word "ball"
// spread operator
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = [...numbers1, ...numbers2];
console.log("Combined Numbers:", combinedNumbers);
