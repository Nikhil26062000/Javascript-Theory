
let user={
    name:"Nikhil",
    address:{
        personal:{
            city:"Muz",
            area:"Bhagwanpur"
        },
        office:{
            city:"Delhi",
            area:{
                landmarks:"New Area"
            }
        }
    }
}
console.log(user.address.office.city);
let finalObj={};

function magic(obj,parent){
    for(let key in obj){
        if(typeof obj[key]==="object"){
            magic(obj[key],parent+'-'+key);
        }else{
            finalObj[parent+"-"+key] =obj[key]; 
        }
    }

}
magic(user,"user");
console.log(finalObj)



//? Another example
const sum = (a) =>{
    return (b) =>{
        if(b){
            return sum(a+b)
        }else{
            return a;
        }
    }
}

console.log(sum(2)(3)(4)(5)());
