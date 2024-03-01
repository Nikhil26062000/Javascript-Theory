
//? ------------------ 1.Promise.all() -----------------------

const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p1 promise success");
    },3000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p2 promise success");
    },1000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p3 promise success");
    },2000)
})

// const p4 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         reject("p4 promise rejected");
//     },2000)
// })


Promise.all([p1,p2,p3]).then((result)=>{
    console.log("Promise.all :");
    console.log(result);  // ["p1 promise success", "p2 promise success", "p3 promise success"]
}).catch((error)=>{
    console.error(error); // if any error is thrown it will come here
    console.log(error.errors) // this will give array of errors for Promise.any()
})

// here in abvoe example all promises are resolved so it will wait for all promises to be resolved and then return the array containing all the promises

//* but if any promises are rejected it will return the error message of that promise and not wait for rest of the promises

//? ---------------- Promise.allSettled() ------------------

Promise.allSettled([p1,p2,p3]).then((result) => {
    console.log("Promise.allSettled :")
    console.log(result); 
})

// here in allSettled() also if all the promises are resolved then it will give array containig the value of all the promises.

//* but if any promises are rejected then what it will do is that it will still wait for rest of the promises to be settled whether they are resolve or reject it will wait and after all the promises are settled it will give the result in an array containg the result.
    // example : suppose p2 get reject then the result will be like  ["p1 promise success",["p2 promise rejected or whatever we write in the reject block will bee the result for p2"],["p3 promise success"]]

//? --------------------- Promise.race() ---------------------

Promise.race([p1,p2,p3]).then((result)=>{
    console.log("Promise.race :");
    console.log(result);
})

// in this case the promise who settled first will be returned as the result . it may be resolved or rejected. "settled means it may be resolve or reject or we can say it maybe success or failure or can say fulfilled or rejected. THESE ARE THE COMMON  LINGO'S USED BY THE INTERVIEWERS"

//? --------------------- Promise.any() ------------------

Promise.any([p1,p2,p3]).then((result) => {
    console.log("Promise.any :");
    console.log(result);
})

// in this case the promise who settled first will be returned as the result but that promise must be resolved . what i meant to say that it will wait for the first promise to be resolved among all the promises. 

//* suppose if p2 was rejected them the output will be p3 becz p2 takes 1 sec and p3 takes 2 sec but p2 is rejected that is why p3 will be in result. And suppose p2 and p3 both reject then p1 will be in rsult as output. And suppose if all the promises are rejected the all the error will be returned as an array or can say "aggregate error" will be returned