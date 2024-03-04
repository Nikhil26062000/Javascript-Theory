
//!https://www.interviewbit.com/javascript-interview-questions/







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

// Example:
// var x = 0;
// var y = 23;
        
// if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
// if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

//!All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.


//*3. Logical operators:
//Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands

//-OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned
//-AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

//*4 Equality Coercion:

// Equality coercion takes place when using ‘ == ‘ operator. As we have stated beforeThe ‘==’ operator, converts both the operands to the same type and then compares them.

//Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.


//? ------------------ IIFE / self invoking function----------------------------
/*

While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

function() {
 // Do something;
}

!Compiler gives an error since the syntax of declaring a function is wrong in the code above.
To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.

(function (){
   //Do something;
})

And to invoke the function immediately after declaration we use one more ()

(function (){
  //Do something;
})();


*/




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
// In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.Characteristics of strict mode in javascript:
        //1.Duplicate arguments are not allowed by developers
        //2.In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
        //3.Engineers will not be allowed to create global variables in 'Strict Mode.


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



//? ---------- What is currying in JavaScript ----------------
        // Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
        //Example:
                // function add (a) {
                //     return function(b){
                //       return a + b;
                //     }
                //   }
                
                //   add(3)(4) 



//? ----------------- scope chain ------------------------------
        // var y = 24;

        // function favFunction(){
        // var x = 667;
        // var anotherFavFunction = function(){
        //     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
        // }

        // var yetAnotherFavFunction = function(){
        //     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
        // }

        // anotherFavFunction();
        // yetAnotherFavFunction();
        // }
        // favFunction();

        // As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.



//? ---------------------  What are object prototypes ------------------------------
        // All javascript objects inherit properties from a prototype. For example,

        // Date objects inherit properties from the Date prototype
        // Math objects inherit properties from the Math prototype
        // Array objects inherit properties from the Array prototype.
        // On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.
        // A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

        // Example:
        // var arr = [];
        // arr.push(2);
        
        // console.log(arr); // Outputs [2]

        // In the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.
        // The reason is the use of prototypes. As we discussed before, Array objects inherit properties from the Array prototype.The javascript engine sees that the method push does not exist on the current array object and therefore, looks for the method push inside the Array prototype and it finds the method.


//! Functions that are used as an argument to another function are called callback functions.

//? ------------------  What is memoization ------------------------------
        function addTo256(num){
            return num + 256;
        }
        addTo256(20); // Returns 276
        addTo256(40); // Returns 296
        addTo256(20); // Returns 276

        //In the code above, we have written a function that adds the parameter to 256 and returns it.

        // When we are calling the function addTo256 again with the same parameter (“20” in the case above), we are computing the result again for the same parameter.

        // Computing the result with the same parameter, again and again, is not a big deal in the above case, but imagine if the function does some heavy-duty work, then, computing the result again and again with the same parameter will lead to wastage of time.

        // This is where memoization comes in, by using memoization we can store(cache) the computed results based on the parameters. If the same parameter is used again while invoking the function, instead of computing the result, we directly return the stored (cached) value.

        //! if want to see code of how to make memoized function use google / website/ chatgpt


//? --------------  What is the use of a constructor function in javascript ------------------------------
        // Constructor functions are used to create objects in javascript.

        // When do we use constructor functions?

        // If we want to create multiple objects having similar properties and methods, constructor functions are used.


//? ---------------------  What is DOM -----------------------------
        //DOM is a programming interface for HTML and XML documents. When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.



//! Browser Object Model is known as BOM