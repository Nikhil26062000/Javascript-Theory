

//? Every function has prototype. its basically a empty object. Only functions have prototype

//? new Keyword : It does 3 things
    //1. create a empty object {} and made it equals to this . i.e this={}
    //2. return this
    //3. link __proto__ = prototype.

//! __proto__ and [[prototype]] both are same .In ECMASCRIPT DOCUMENTATION __proto__ is written as [[prototype]]
//! but prototype and [[prototype]] are different

//! The prototype property is specific to constructor functions (or classes in ES6). It is an object that is associated with every function and serves as a blueprint for instances created by that function or class.

//!The [[Prototype]] internal slot is an internal property of JavaScript objects that defines the actual prototype (i.e., the object from which the current object inherits).

//constructor
function CreateUser(name,age,email,address){
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
}

CreateUser.prototype.sing = function(){
    return "oo la la oo la la"
}
const user1 = new CreateUser("Nikhil", 18, "nik@gmail.com", "xyz");

const user2 = new CreateUser("Nikhil_Raj", 18, "nik@gmail.com", "xyz");

console.log(user1.__proto__);
console.log(user2.prototype);
console.log(CreateUser.prototype);

for(let key in user1){
    if(user1.hasOwnProperty(key)) console.log(key);
    
}

let num = new Array(1,2,3)
console.log(num.prototype);
console.log(Object.getPrototypeOf(user1));
console.log(Object.getPrototypeOf(num));

/*
----------------------chatgpt ------------------------------
Prototypal inheritance is a core feature of JavaScript that allows objects to inherit properties and methods from other objects


Prototypal inheritance is a core feature of JavaScript that allows objects to inherit properties and methods from other objects. Unlike class-based inheritance found in languages like Java or C++, JavaScript uses a prototype-based approach where objects can inherit directly from other objects.

Key Concepts of Prototypal Inheritance
Prototype Chain:

Every JavaScript object has an internal property called [[Prototype]] (often accessible through __proto__ or Object.getPrototypeOf()), which points to another object.
This object is referred to as the prototype of the original object.
If a property or method is not found on the original object, JavaScript looks up the prototype chain until it finds the property or reaches the end of the chain (i.e., null).
Object Creation:

You can create new objects using constructor functions, classes, or the Object.create() method. Each object created will have its own [[Prototype]] link.
Inheritance:

By setting an object as the prototype of another object, the latter inherits all properties and methods of the former. This enables a form of inheritance where an object can use properties and methods defined in its prototype object.
*/