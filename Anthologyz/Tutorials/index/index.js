// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
// Are case-sensitive
let firstName = "Mosh"; // , lastname; 

// Logs in the console
console.log(firstName);

// const keeps it at .3
const interestRate = 0.3;
// Changes interestRate to 1
// interestRate = 1;
console.log(interestRate);

// Primitive Types
let name = "Mosh"; // String Literal
let age = 30; //Number Literal
let isApproved = true; // Boolean Literal and can be either true or false
let middleName = undefined; // Can also be left blank and default value of variables
let lastname = null; // Clear the value of a variable, type and value

// Languages - Static (String) and Dynamic (let and is fluid)
// Not floating integars
// typeof, finds the type of the value

// Objects - object, array, function
let person = {
    name: "Mosh",
    age: 30
};

// Dot Notation
person.name = "John";

// Bracket Notation
person["name"] = "Mary";

console.log(person);
console.log(person.name);

// Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Functions
// Performing a task
function greet(name, lastName) { // Parameter
    console.log("Hello " + name + " " + lastName);
} // No ;

// Calculationg a value
function square (number) {
    return number * number;
}

greet("John", "Smith"); // Argument
greet("Mary");

let number = square(2);
console.log(number);
console.log(square(2));