

//? Every function has prototype. its basically a empty object. Only functions have prototype

//? new Keyword : It does 3 things
    //1. create a empty object {} and made it equals to this . i.e this={}
    //2. return this
    //3. link __proto__ = prototype.

//! __proto__ and [[prototype]] both are same .In ECMASCRIPT DOCUMENTATION __proto__ is written as [[prototype]]
//! but prototype and [[prototype]] are different

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