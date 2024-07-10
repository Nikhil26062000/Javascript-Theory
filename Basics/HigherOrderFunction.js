
/*
Accepts Functions as Arguments: A higher-order function can take other functions as arguments.
Returns Functions: A higher-order function can return a function as its result.

!Example with Array Methods: These are example of higher order functions

map: Applies a function to each element in an array and returns a new array with the results.
filter: Applies a function to each element in an array and returns a new array with elements that pass the function's test.
reduce: Applies a function to an accumulator and each element in an array to reduce it to a single value.
*/


const radius = [2,4,3,6,5]

const area = (radius) => {
    return Math.PI*radius*radius
}
const circumference = (radius) => {
    return 2 * Math.PI*radius
}

const diameter = (radius) => {
    return 2 * radius
}

const calc = (radius,logic) => {
    let res = []
    for(let i=0;i<radius.length;i++){
        res.push(logic(radius[i]))
    }
    return res
}

console.log(calc(radius,area));
console.log(calc(radius,circumference));
console.log(calc(radius,diameter));

Array.prototype.calc2 = function (logic){
    let res = []
    for(let i=0;i<this.length;i++){
        res.push(logic(this[i]))
    }
    return res
}

console.log(radius.calc2(area));