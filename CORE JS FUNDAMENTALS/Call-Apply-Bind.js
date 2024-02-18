// Define an object with a greet function
const person = {
    name: 'John',
    greet: function(greeting) {
        console.log(greeting + ', ' + this.name);
    }
};

// Define another object
const anotherPerson = {
    name: 'Alice'
};

// Example of using call method
person.greet.call(anotherPerson, 'Hello'); // Output: Hello, Alice

// Example of using apply method
person.greet.apply(anotherPerson, ['Hi']); // Output: Hi, Alice

// Example of using bind method
const boundGreet = person.greet.bind(anotherPerson, 'Hey');
boundGreet(); // Output: Hey, Alice




//------------- Another example ----------------------------------------------------------------
let name={
    firstName: 'John',
    lastName: 'Doe',
}

let printFullName = function(hometown,state){
    console.log(this.firstName + ' ' + this.lastName+" "+hometown+" "+state)
}

printFullName.call(name,"New York","NY")

let name2={
    firstName: 'Nikhil',
    lastName:"Raj"
}

// call
printFullName.call(name2,"Dehradun","Uttrakhand")

//apply
printFullName.apply(name2,["Mumbai","Maharashtra"])

//bind
//! bind methode will create a copy of the printFullName method and give them to printInfo 
let printInfo=printFullName.bind(name2,"Bangalore","Karnataka")
console.log(printInfo);
printInfo()