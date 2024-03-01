
/*

? 1. Var is hoisted
    - it lies in Global space and it gets value undefined if we access it before initialization
? 2. let and const is also hoisted but differently
    - let and const also hoisted but they dont lies in Global space instead they lie in script and there they get value undefined 
    - we can't access let and const variable before initialization before they are not in global space 
!    - Time b/w let and const are in script and till they get initialize that is called Temporal dead zone

? 3. difference b/w Reference error , Syntax error and typeerror
    - Reference error : if we are accessing a vaiable a and this variable doesnt lies in global space then it will give you a reference error
    - syntax error  : if we are reassigning the let variable then its syntax error or if we just write const a; and dont assign any value then it will be syntax error
    - typeerror : if we are reassigning the const variable then its type error


*/