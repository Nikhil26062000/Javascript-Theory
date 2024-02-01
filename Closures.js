
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

    This is what closures are . the function y remembe its lexical scope

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

 */