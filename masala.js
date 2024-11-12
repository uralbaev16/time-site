// 1-chi masala
// Normal function
function greeting(name) {
    return `Assalomu alaykum ${name}`;
}
console.log(greeting("Ramazon"));

// Arrow function
const greetingArrow = name => `Assalomu alaykum ${name}`;

console.log(greeting("Ramazon"));

// IIFE
const greetingIIFE = (function(name) {
    return `Assalomu alaykum ${name}`;
});
console.log(greeting("Ramazon"));


// 3-chi masala
// Normal function
function booleanToNumber(bool) {
    return bool ? 1 : 0;
}
console.log(booleanToNumber(true));

// Arrow function
const booleanToNumberArrow = bool => bool ? 1 : 0;
console.log(booleanToNumberArrow(false));

// IIFE
const booleanToNumberIIFE = (function(bool) {
    return bool ? 1 : 0;
})
console.log(booleanToNumberIIFE(true));


// 4-chi masala
// Normal function
function ismHarifi(name) {
    return name[0];
}
console.log(ismHarifi("Ramazon"));

// Arrow function
const ismHarifiArrow = name => name[0];
console.log(ismHarifiArrow("Ramazon"));

// IIFE
const ismHarifiIIFE = (function(name) {
    return name[0];
})
console.log(ismHarifiIIFE("Ramazon"));