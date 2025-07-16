"use strict";
// const jasurjonName: string = "Jasurjon";
function greet(person) {
    return `Hello, ${person.name}, you are ${person.age} years old.`;
}
console.log(greet({ name: "Jasurjon", age: 17 }));
