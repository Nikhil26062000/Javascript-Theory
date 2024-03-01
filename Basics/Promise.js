
const cart = ["shoes","pants","kurta"]

const promise = createOrder();
console.log(promise);


promise.then(function (orderId){
    console.log("Order created :",orderId)
    return orderId; //* whatever i m returning here will be passed to next level  of then() 
})
.then(function (){
    return paymentProcess()
})//we can do catch() here also but this catch will only catch error for the then() above it. if there will be 4 then() above this then this catch() will handle error for those 4 then's only. and if there will be then() below this catch() then the below then() will occur.
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch((error) => {
    console.log(error)
})

function createOrder() {
    //* creating the promise
    const pr = new Promise(function (resolve, reject) {
        if(!validteCart()){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        const orderId = "7t43y@3#"
        setTimeout(() =>{
            resolve(orderId)
        },5000)
        
    })

    return pr
}

function validteCart() {
    return true;
}

function paymentProcess(){
    return new Promise((resolve, reject) =>{
        resolve("Payment successfull");
    })
}