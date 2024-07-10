/*



In JavaScript, every object has a special property called prototype, which is a reference to another object. The prototype object is used as a fallback mechanism for property access when the object itself does not have a certain property. This mechanism is central to JavaScript's prototypal inheritance model.

Here's a brief explanation of prototypal inheritance:

Prototype:

The prototype property is an object that serves as a template or blueprint for creating new objects.
Each object in JavaScript has an associated prototype object, accessible via the __proto__ property or, more commonly, via the Object.getPrototypeOf() method.
When you access a property or method on an object, JavaScript first checks if the object itself has that property. If it doesn't, it looks for the property in the object's prototype chain by following the __proto__ chain until it finds the property or reaches the end of the chain.

Prototypal Inheritance:

In JavaScript, objects can inherit properties and methods from other objects through a mechanism called prototypal inheritance.
When you create a new object using either object literals {} or the new keyword with a constructor function, the new object inherits properties and methods from its prototype.
You can set an object's prototype explicitly using the Object.create() method or implicitly by setting the prototype property of a constructor function.
Prototypal inheritance allows for the creation of object hierarchies and promotes code reuse by sharing behavior among objects.

*/