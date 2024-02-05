

//? Callback function - Function which we pass into another funcion is known as callback function

setTimeout(function() {
    console.log('setTimeout')
},5000)

function x(y){
    console.log("x");
    y()
}

x(function y(){
    console.log("y");
}) //! this function y is here a callback function


//? Blocking the main thread - If any operation block the callstack i.e blocking the main thread. It will stop executing other code until that operation gets completed.

//? Event Listener

//? Garbage collectors and remove event listeners - with event listeners there my be closures and if there will be so many event listeners there will be so many closures and then because of closures it will consume too much memory and make application slower so its better practice to remove all event listeners at end
