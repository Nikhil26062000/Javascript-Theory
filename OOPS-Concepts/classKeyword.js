

class CreateStudent {
    constructor(name, email, age, address) {
        console.log("constructor called");
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `My name is ${this.name}`
    }
    myAge(){
        return `Age is ${this.age}`
    }
}

const user1 = new CreateStudent("Nikhil","nikhil@gmail.com",23,"xyz");

console.log(user1);
console.log(Object.getPrototypeOf(user1));

//Inheritence
class Student extends CreateStudent{
    constructor(name, email, age, address, marks){
        super(name, email, age, address)
        this.marks = marks
    }
    isTopper(){
        if(this.marks >= 90){
            return true
        }else{
            return false
        }
    }
}

const student1 = new Student("Ayu","nikhil@gmail.com",22,"xxx",88);
console.log(student1)
console.log(student1.isTopper());