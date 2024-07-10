
//!Polyfills are pieces of code (typically JavaScript) that provide functionality that is not natively supported by some browsers or environments. They are used to fill in gaps and ensure that web applications work consistently across different browsers, especially when dealing with new or non-standard features.


let name = {
    firstname: 'John',
    lastname: 'Doe'
}

let printName = function(hometown,state,country){
    console.log(this.firstname + ' ' + this.lastname+" " + this.firstname + " " + hometown+" "+state+" "+country);

}

let printMyName = printName.bind(name,"Dehdradun","Uttarakhand","India");
printMyName();

// Define a custom method 'mybind' on the prototype of the Function constructor.
Function.prototype.mybind = function(...args) {
    // Inside 'mybind', 'this' refers to the function object to which 'mybind' is applied.
    let obj = this; // Store a reference to the function object.i.e this = printName()

    // Extract the arguments passed to 'mybind', excluding the first one (which is 'this').
    params = args.slice(1);

    // Return a new function that wraps the original function and applies the desired context and arguments.
    return function(...args2) {
        // Inside this returned function, 'obj' still refers to the original function.
        // Apply the original function with the specified context and arguments using 'apply'.
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name,"Dehdradun","Uttarakhand");
printMyName2("India") 