
function info(){
    console.log(`Name is ${this.name} and age is ${this.age}`)
}

function xyz(place,money){
    console.log(`Name is ${this.name} and age is ${this.age} and place is ${place} and money is ${money}`);
}

const person1 = {
    name : 'John',
    age : 21,
    about : info
}

const person2 = {
    name : 'Wick',
    age : 52,
    about : info
}

const person3 = {
    name : 'Johnny',
    age : 15,
    about : info
}

const person4 = {
    name : 'Johnny leaver',
    age : 35,
    
}

person1.about();
person2.about();
person3.about();

//* call()
person1.about.call(person4);

//* apply()
xyz.apply(person4,["muz",1500])

//* bind()
const fun = xyz.bind(person4,"darbhanga",2000)
fun()



