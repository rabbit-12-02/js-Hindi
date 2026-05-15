"use strict"; //treats all JS code as modern and secure, preventing the use of deprecated features 
                // and catching common coding mistakes. It helps in writing cleaner and more 
                // efficient code by enforcing stricter parsing and error handling.

//alert(3+3); // we are using nodejs, so alert will not work, it is used in browser environment to show pop-up messages


console.log(3+3) // this will print the result in the console, it is used in both browser and nodejs environment

console.log("Hello World") // this will print the string in the console 


let name="Vishal"   
let age=25
let isLoggedIn=true 

//number=== 2 to power 53 -1
//bigint=== larger than number
//null=== empty value--- standalone value that represents the absence of any object value
//undefined=== variable declared but not assigned a value
//string=== sequence of characters enclosed in single or double quotes
//boolean=== true or false
//symbol=== unique and immutable primitive value, often used as object property keys   uniques and immutable data type that 
// can be used as identifiers for object properties
//object=== collection of properties, where each property is a key-value pair, and the value can be of any data type, 
// including other objects. Objects are used to store and organize data in a structured way.


console.log(typeof name) // this will print the data type of the variable name
console.log(typeof age) // this will print the data type of the variable age
console.log(typeof isLoggedIn) // this will print the data type of the variable isLoggedIn  
console.log(name)
console.log(age)
console.log(isLoggedIn)

console.log(typeof null) // this will print the data type of null, which is object (this is a known bug in JavaScript)
console.log(typeof undefined) // this will print the data type of undefined, which is undefined 