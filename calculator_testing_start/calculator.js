const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

// EXTENSION TASK
// Use modulus function as a callback within even function
const even = function(a){
    return modulus(a, 2) === 0;
};

// EXTENSION TASK
// Use modulus function as a callback within odd function
const odd = function(a){
    return modulus(a, 2) !==0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
