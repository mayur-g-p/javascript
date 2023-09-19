// 1)  primitive data type
// 7 types (primitive are call by value)
// String , Number, Boolean, Null, undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp  = null
let userName

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId)

//2) reference data type(Non primitive)
//Array, Object, Functions

const heros = ["xyz","pqr","asd"]
let obj = {
    name : "mayur",
    age : 99

}

const myFunc = function (){
    console.log("hello")
}
myFunc()