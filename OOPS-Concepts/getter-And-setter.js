

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //static properties
    static address = "This is static property only be called with class name . we can't call it by objects"
    //getters
    get info(){
        return this.name;
    }
    //setters
    set personName(name){
        this.name = name;
    }
    // static methods
    static importantInfo(){
        return `this method can't be called with objects, we can call this method directly with class name`
    }
}

const person1 = new Person("Ayush Raj",20)
console.log(person1); //Person {name: "Ayush Raj", age: 20
console.log(person1.info);// Ayush Raj

person1.personName = "Nikhil Raj"
console.log(person1);


console.log(Person.importantInfo());// this method can't be called with
console.log(Person.address);