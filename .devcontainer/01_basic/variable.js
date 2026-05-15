// Variables in JavaScript

// var
var accountName = "Vishal"
console.log(accountName)

// let
let accountEmail = "vishal@gmail.com"
console.log(accountEmail)

// const
const accountId = 12345
console.log(accountId)


// changing values

accountName = "Vishu"
accountEmail = "vishu@gmail.com"

console.log(accountName)
console.log(accountEmail)


// const value cannot be changed
// accountId = 999


// different data types

let userName = "Vishal"     // string
let age = 25                // number
let isLoggedIn = true       // boolean
let city = null             // null
let state;                  // undefined

console.log(userName)
console.log(age)
console.log(isLoggedIn)
console.log(city)
console.log(state)


// typeof keyword

console.log(typeof userName)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof city)
console.log(typeof state)
/*
never use var, use let and const instead because var has function scope and can lead to unexpected behavior, while let and 
const have block scope and provide better control over variable declarations.
*/

// table output

console.table([
    accountName,
    accountEmail,
    accountId,
    userName,
    age
]) 