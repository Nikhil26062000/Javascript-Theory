"use strict";

//* --------------- this keyword in global space----------------

    console.log(this); // the value of this keyword in global space can be different in browser , it can be different in node js . it can be different in in different place where we r running js .

    // in browser : this = window object
    // in node js : this = global object

//* -------- this keyword in function scope ------------

    function x(){
        console.log(this)
    }
    x(); // in strict mode : output : undefined
    // in non strict mode : output : window object in browser 

    //! this inside non-strict mode (this substitution) : if the value of this keyword is undefined or null , this keyword will be replaced with global object...

    //! this keyword value depends on how the function is called...
    x();// undefined
    // but if i called like this
    window.x(); // it will be different . output : window object in browser


//* ---------------- this keyword in object's method -----------------------------------------
    const obj = {
        a:10,
        x:function(){
            console.log(this);
        } //! if function created in object its called method
    };

    obj.x(); // value of this keyword = obj . because this keyword is inside object obj

//* ------------- call , apply , bind methods --------------------
    const student1 ={
        name:"Nikhil",
        printName:function(){
            console.log(this.name); // Nikhil
        }

    }

    const student2 ={
        name:"Nisha",
    }

    // if u want to change the value of this keyword which is consoled log in student1. we can do this using call(),apply(),bind()

    student1.printName.call(student2); // Nisha

//* ----------------- this keyword inside arrow function --------------------------------------
    const objj ={
        a:10,
        x:()=>{
            console.log(this);
        }
    }
    objj.x(); //window object

    // inside arrow function this keyword = value of lexical context.in above example objj is in global space so this = window object for browser and global object for node js

    const obj2 ={
        a:20,
        x:function(){
            const y =()=>{
                console.log(this);
            }
            y() //! see video for better understanding
        }
    }
    obj2.x();


    /*
    !explain:
     Method x:
    -Defined as a regular function within obj2.
    -When called, this inside x refers to obj2.
        
    Arrow Function y:
    -Defined inside the method x.
    -Arrow functions do not have their own this context. Instead, they inherit this from their enclosing lexical context.
    -Since y is defined within x, the this in y is inherited from x.
    -Therefore, this inside y is the same as this inside x.
    
    Result:
    -this in x: Refers to obj2.
    -this in y: Also refers to obj2, as it inherits this from the lexical context of x
    */

//* -------------- this keyword inside DOM ---------------
    // see video





