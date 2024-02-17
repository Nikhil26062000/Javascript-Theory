
/*

? Closures : Function along with its lexical scope forms a closure and this is called closures
    - function X(){
        var a=7;
        function y(){
            console.log(a);
        }
        return y;
    }
    var z = x();

    z() // output 7
    now if we call z anywhere below the code it will print a's value = 7.

    This is what closures are . the function y remember its lexical scope

    ? - Another example
        function z(){
            var b=100;
            function x(){
                var a=7;
                function y(){
                    console.log(a,b);
                }
                y();
            }X();
        }
        z();

        This is still closures as the function y will remember its lexical scope and its parents lexical scope also;

    ? Another example
        var count = 0;
        return function incCounter(){
            count++;
            console.log(count);
        }

        suppose this is a code . at this time anyone can access the count variable . but by the help of closures we can protect data

        lets move this code into a function so that no one outside the function can access the count variable
        ? wrapping into function to form closure
        function counter(){
            var count = 0;
            return function incCounter(){
                count++
            }

        }

        ! now no one can access the count var outside counter()

        ? one more important point
        if we call the incCounter then
        var temp = counter();
        temp();
        temp();
        temp(); // will print 1 2 3

        now if we make 
        var temp2 = counter();
        temp2() // will print 1 .
        !this will be new incCounter() that will be returned and whole counter() will also be new for temp2 .

    ? Garbage Collector 
        - Todays some of browser have smart mechanism garbage collector which detect that which variable should get in garbage if it is not used in closure.In JavaScript, variables are garbage collected when they are no longer reachable, meaning there are no references to them.

 */