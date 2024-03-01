

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