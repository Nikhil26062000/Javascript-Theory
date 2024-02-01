

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

   ! Let and const are block scope
   ! var is global scope
   - we can access a but we cant access b and c outside the block


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

    ! Shadowing works same for function as well as block

    ! var a in the bloc
    
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
 */
