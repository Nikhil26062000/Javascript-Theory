
//? Function currying :It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 

//?Function currying is useful in scenarios where you want to create reusable functions with preset arguments, or when you want to create more specialized versions of existing functions without modifying the original function. It helps improve code modularity, readability, and reusability.




let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(3)
//here we can do like this also that if we pass one more arguement:
    // -let multiplyByTwo = multiply.bind(this,2,5); then it will ignore the arguement which we pass in multiplyByTwo(3)

// one more thing we can do is if we dont pass any thing after "this" then we have to pass the 2 values in  multiplyByTwo(2,6);

let multiplyByFour = multiply.bind(this,4,7);
multiplyByFour()

let multiplyByThree = multiply.bind(this);
multiplyByThree(3,4)


//! above example is of function currying .
//! ------------------------------- we can achieve this by closures also . below is code of function currying using closures --------------------------------------


// Regular function that takes two arguments and returns their sum
function add(x, y) {
    return x + y;
}

// Curried version of the add function
function curryAdd(x) {
    return function(y) {
        return x + y;
    };
}

// Usage of the curried function
const addFive = curryAdd(5); // Partially applying the first argument
console.log(addFive(3)); // Output: 8


