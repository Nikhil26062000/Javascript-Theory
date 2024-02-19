

/*

? Block 
- It is also compound Statement
- Group of statements can bw used in place where javascript expects a single statement is known as block

? Block Scope
    - {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    !- Variables declared with let and const are block-scoped, meaning they are only accessible within the block in which they are defined.
    !- Variables declared with var have function scope if declared inside a function, or global scope if declared outside any function.




? Shadowing in Js
    - var a = 100;
    - let b = 100; //! this b will lie in script
    - const c = 100; //! this c will lie in script
    {
        var a = 50
        let b = 20;//!  this b will lie in block scope
        const c 30;//! this c will lie in block scope
        console.log(a) // Output: 50
        console.log(b) // Output: 20
        console.log(c) // Output: 30
    }
    console.log(a) // Output: 50
    console.log(b) // Output: 100
    console.log(c) // Output: 100

    ! Shadowing works same for function as well as block but little different
    -here is an example:
        var a = 100; // Global variable 'a' declared

        function myFunction() {
        var a = 20; // Declaration of a new local variable 'a' within the function scope
        console.log(a); // Output: 20 (value of the local variable 'a' within the function)
        }

        console.log(a); // Output: 100 (value of the global variable 'a')
        myFunction(); // Call the function
        console.log(a); // Output: 100 (value of the global variable 'a' remains unchanged)


    ! var a in the block
    
        ? Illegal shadowing
        - let a = 20;
        {
            var a =20; //! ILLEGAL SHADOWING , will cause error 

            let a = 20 // this is fine
        }

           ? var is function scope -
            let a=10;
            function x(){
                var a = 10; //! Not a ILLEGAL SHADOWING
            } 






!------------------------------ above code is being explained by CHATGPT--------------------------------------------------

            /*

? Block 
- It is also a compound statement.
- A group of statements that can be used in a place where JavaScript expects a single statement is known as a block.

? Block Scope
    - {
        var a = 10; // Global scope
        let b = 20; // Block scope
        const c = 30; // Block scope
    }

   - Variables declared with let and const are block-scoped, meaning they are only accessible within the block in which they are defined.
   - Variables declared with var have function scope if declared inside a function, or global scope if declared outside any function.

? Shadowing in JavaScript
    - Shadowing occurs when a variable declared in a local scope has the same name as a variable in a higher scope, effectively hiding the outer variable within the local scope.
    - Shadowing works the same for functions and blocks, but with slight differences in behavior.

    Example:
        var a = 100; // Global variable 'a' declared

        function myFunction() {
            var a = 20; // Declaration of a new local variable 'a' within the function scope
            console.log(a); // Output: 20 (value of the local variable 'a' within the function)
        }

        console.log(a); // Output: 100 (value of the global variable 'a')
        myFunction(); // Call the function
        console.log(a); // Output: 100 (value of the global variable 'a' remains unchanged)

    ! In the above example, the local variable 'a' declared within myFunction shadows the global variable 'a' within the function's scope.

    Illegal Shadowing:
        - let a = 20; // this will be in block scope becuase let is a block scope
        {
            var a = 20; // ILLEGAL SHADOWING - This will cause an error and the error occurs not because var a would be in the global scope, but because it's trying to re-declare the same variable var a within the same block where let a is already declared. This is not allowed due to illegal shadowing.

            let a = 20; // This is fine
        }

        Explanation: 
        - Since var is function-scoped, re-declaring 'a' with var within the block will cause an error due to illegal shadowing.
        - However, re-declaring 'a' with let within the block creates a new block-scoped variable 'a' and is allowed.

    ? var is function-scoped:
        - let a = 10;
        function x(){
            var a = 10; // Not illegal shadowing
        }

    Explanation:
        - The 'a' declared with var inside the function 'x' is not considered illegal shadowing because var is function-scoped.

 */

 



