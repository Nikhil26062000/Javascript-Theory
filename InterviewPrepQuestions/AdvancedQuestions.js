


//? -------------------- What do mean by prototype design pattern ----------------------
        // The Prototype Design Pattern is a creational design pattern that focuses on creating objects based on a template of an existing object, known as the prototype. Instead of instantiating new objects directly, the prototype pattern involves cloning the prototype object and modifying the cloned copy as needed. This pattern is particularly useful when the construction of a new object is more efficient by copying an existing object rather than creating it from scratch.

        //Example:
                                
                const carPrototype = {
                    make: "Unknown",
                    model: "Unknown",
                    year: "Unknown",
                    clone: function () {
                    return Object.create(this); // Cloning the prototype object
                    },
                    toString: function () {
                    return `${this.year} ${this.make} ${this.model}`;
                    }
                };
                
                // Client code
                const car = carPrototype.clone();
                car.make = "Toyota";
                car.model = "Camry";
                car.year = "2022";
                
                console.log(car.toString()); // Output: 2022 Toyota Camry

                // In this JavaScript example:

                // We define a carPrototype object that serves as the template for cloning.
                // The clone method of the carPrototype object is responsible for creating a new object that inherits properties from the prototype.
                // We then create a new car object by cloning the carPrototype and customize its properties as needed.
                // Finally, we log the string representation of the car object, which demonstrates that the object has been successfully created and customized based on the prototype.
  

//? ---------------- Rest Operator and Spread Operator ------------------------
            //* Rest operator
            function sum(...numbers) {
                return numbers.reduce((total, num) => total + num, 0);
            }

            console.log(sum(1, 2, 3, 4)); // Output: 10

            //! Incorrect way to use rest parameter
            // function randomFunc(a,...args,c){
            //     //Do something
            //     }
                
            //! Correct way to use rest parameter
            //     function randomFunc2(a,b,...args){
            //     //Do something
            //     }

            //!Rest parameter should always be used at the last parameter of a function:


            //* Spread Operator
            // Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it


//? --------------  In JavaScript, how many different methods can you make an object --------------------
// In JavaScript, there are several ways to declare or construct an object.
        // Object.
        // using Class.
        // create Method.
        // Object Literals.
        // using Function.
        // Object Constructor.


//?-------------------- What is the use of promises in javascript --------------------
        //!Promises are used to handle asynchronous operations in javascript.
        // Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.


//? -------------------- What are classes in javascript ------------------------------
        // Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript. 
         
        //Key points to remember about classes:

        // Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
        // A class can inherit properties and methods from other classes by using the extend keyword.
        // All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed



//? -------------- What are generator functions ------------------------------
        // Introduced in the ES6 version, generator functions are a special class of functions.

        // They can be stopped midway and then continue from where they had stopped.

        // Generator functions are declared with the function* keyword instead of the normal function keyword.In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.The generator object consists of a method called next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.


//? ---------------  Explain WeakSet in javascript ------------------
        // In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:

        // Weakset contains only objects and no other type.
        // An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
        // Unlike Set, WeakSet only has three methods, add() , delete() and has() .


//? -------------------  Explain WeakMap in javascript. ------------------
        // In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

        // The keys and values in weakmap should always be an object.
        // If there are no references to the object, the object will be garbage collected.


//? -------------------- Difference between prototypal and classical inheritance ----------------------
        // Key Differences:

        // Creation: Classical inheritance involves creating objects from classes using constructors, whereas prototypal inheritance involves creating objects directly from other objects or using constructor functions.

        // Hierarchy: Classical inheritance establishes a rigid hierarchy of classes, while prototypal inheritance allows for more flexible object relationships without a strict class hierarchy.

        // Base Entity: In classical inheritance, objects inherit from classes, while in prototypal inheritance, objects inherit directly from other objects or constructors.

        // Flexibility: Prototypal inheritance is generally considered more flexible because objects can be modified at runtime, and relationships between objects can be more dynamic.

        // Overall, classical inheritance provides a more structured approach to building object-oriented systems, while prototypal inheritance offers greater flexibility and is well-suited to the dynamic nature of JavaScript.


//? -----------------------  What do you mean by JavaScript Design Patterns -------------------------
        // JavaScript design patterns are repeatable approaches for errors that arise sometimes when building JavaScript browser applications. They truly assist us in making our code more stable.

        // They are divided mainly into 3 categories 

        // Creational Design Pattern
        // Structural Design Pattern
        // Behavioral Design Pattern.