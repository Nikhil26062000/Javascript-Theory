//? ------------------- 1. different data types present in javascript? -----------------------------
//*1. Primitve type : stores only single value
//-String
//-Number
//-Boolean
//-BigInt
//-undefined
//-null
//-symbol
//2. Non primitve type :
//-Object

//!-Note- It is important to remember that any data type that is not a primitive data type, is of Object type in javascript.

//?---------------------- 2. Hoisting 👍 ----------------------------
//-// Hoisting takes place in the local scope as well
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
// }

//? ---------------- 3. Implicit Type Coercion in javascript. --------------------------
//Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

//*1.String coercion:
//String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.
//!-Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

//!Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.

//*2. Boolean Coercion: 
//To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

// Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false

//!All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.


//*3. Logical operators:
//Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands

//-OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned
//-AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

//*4 Equality Coercion:

// Equality coercion takes place when using ‘ == ‘ operator. As we have stated beforeThe ‘==’ operator, converts both the operands to the same type and then compares them.

//Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.


//? ---------------------4. NaN property -------------------------
// Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

//? ----------- 5.Passed by Value and Passed by reference ------------------------
//* primitive data types are passed by value.
// var y = #8454; // y pointing to address of the value 234
// var z = y;    
// var z = #5411; // z pointing to a completely new address of the value 234  
// Changing the value of y
// y = 23;
// console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
//* non-primitive data types are always passed by reference.
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
// In the above example, the assign operator directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.


//? ---------------------6. strict mode ----------------------
// In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.


//? ----------------- 7.this keyword ------------------
// The “this” keyword refers to the object that the function is a property of.


//? ----------------- 8. What do you mean by Self Invoking Functions?--------------------------------------------------------


// In JavaScript, a self-invoking function, also known as an Immediately Invoked Function Expression (IIFE), is a function that runs as soon as it is defined.

// While a self-invoking function can indeed be anonymous, not all anonymous functions are self-invoking.

//? --------------- 9.call apply and bind ---------------------
//call, bind, and apply are methods that are available on function objects and are used to control the context (this keyword) in which a function is executed.

//? -------------------- 10. difference between exec () and test () methods in javascript--------------------------------------------------------
// test () and exec () are RegExp expression methods used in javascript. 
// We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
// We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'

