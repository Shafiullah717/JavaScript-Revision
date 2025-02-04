console.log("Currently Disscussing Arrow Functions")
// Arrow Function
// Syntax
   //normal function
//    function add(a,b){
//     return a+b
//    }
//    console.log(add(22,33))
   // Arrow function
//    add = (a,b) =>{
//     return a+b
//    }
//    console.log(add(22,44))
// Argument "keyword"
   // we can use argument keyword with only normal function not with arrow function
   // normal function
//    function add(){
//     console.log(arguments)
//    }
//    add(33,44,55,66)
  // Arrow function
//   add = (...numbers) =>{
//     console.log(numbers)
//   }
//   add(33,44,55,66,77)
// hoisting
   //normal function
//    Naam()

//    function Naam(){
//     console.log("Muhammad Shafiullah")
//    }
 // arrow function
//  Nalo()

//   Nalo = () =>{
//     console.log("Muhammad Shafiullah")
//   }
// This keyword
// In arrow function this keyword is use only for the purpose of using document attributes form web page.
// normal function
// const laptop={
//     name: "Lenovo",
//     model: 2023,
//     myfunction: function M_name(){
//         console.log("Model name is", this.name)
//     }
// }    
// laptop.myfunction()
 // Arrow Function
//  const Student={
//     firstName: "Muhammad",
//     lastName: "Shafiullah",
//     myfunction: l_name = () =>{
//         console.log("Last Name is ", this)
//     }
//  }
//  Student.myfunction()
