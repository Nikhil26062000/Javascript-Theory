

/*

? 1.Function Statement / Function Declaration : hoisted
    function a(){
        console.log("I am a function");
    }

? 2.Function expression : Not hoisted
    var b = function() {
        console.log("b is called");
    }

! Difference b/w above two is Hoisting 

? 3.Anonymous Function - function without a name
    function(){

    }

? 4.Named function expression
    var b = function xyz() {

    }

    if we try  to call it like this: xyz(); It will throw an error because the variable xyz is not defined in that context. 

    but if we call it like this:
    function xyz(){
        console.log(xyz) // output : whole function will be printed
    }

    ! diff b/w 2 & 4 is one has name and another is anonymous function

? 5.First Class Function
    The ability of functions to be used as values , passed into other functions as arguments, returned from other functionss in JavaScript.

    ? It is also called first class Citizens




*/