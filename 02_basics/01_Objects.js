const sym = Symbol("ABC")

const myObj = {
    name : "Abhishek",
    age : 20,
    [sym] : "ABCD"
}

myObj["name"] = "Aman"

// console.log(myObj["name"])
// console.log(sym)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
let obj4 = {}
Object.assign(obj3, obj1, obj2, obj3)

console.log(obj3)