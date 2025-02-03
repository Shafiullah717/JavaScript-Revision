// console.log("Testing")
// //Functions in JavaScript

// function add(a,b){
//     console.log(a+b)
// }
// add(22,44)
// function sub(a,b){
//     console.log(a-b)
// }
// sub(22,10)
// function mul(a,b){
//     console.log(a*b)
// }
// mul(10,10)
// function div(a,b){
//     console.log(a/b)
// }
// div(10,2)

// function InRupee(num_dollar){
//     Result = num_dollar*279
//     return Result;
// }
// let num_d = 13
// console.log("Your current money in rupee is" , InRupee(num_d))
// create a function for adding unlimited numbers.
function addingnumbers(){
    result = 1;
    for(let i = 1; i<arguments.length; i++){
        result = result + arguments[i]
    }
    return result;
    
}
console.log(addingnumbers(22,33,55,66))

function mulnumbers(...numbers){
    result = 1;
    for(let i = 0; i< numbers.length; i++){
        result = result * numbers[i]
    }
    return result
    
}

console.log(mulnumbers(10,10,10,10,55))