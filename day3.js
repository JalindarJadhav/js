
let x = 10;
console.log(x)
x = 100
console.log(x)

const a = 10
console.log(a)
// a=1000   //TypeError: Assignment to constant variable.

let p = 100
let q = 50
console.log(p + q)
console.log(p - q)
console.log(p * q)
console.log(p / q)
console.log(p % q)

// DRY -- donot repeat yourself 

function calculater(x1, y1) {
    console.log(x1 + y1)
    console.log(x1 - y1)
    console.log(x1 * y1)
    console.log(x1 / y1)
    console.log(x1 % y1)
}
calculater(5,2)


// function without parameter and without return type

function addition(){
    console.log(1+2)
}
addition()

function substraction(){
    console.log(5-1)
}
substraction()

function multiplication(){
    console.log(5*5)
}
multiplication()

function dividation(){
    console.log(10/1)
}
dividation()

function modulus(){
    console.log(50%100)
}
modulus()


// // Human
// // Property -- age height weight color gender
// // Method - talk() , walk()

// // Vehicle
// // Property - color , model ,type , color
// // Method - start() , stop()


// // Bank - ICICI bank
// // Propery - bal, accNo ,accName , IFSCcode, accType
// // Method - deposit() , withdrawl()

let x2=02
console.log(x2)
console.log(typeof x2)

let x3=false
console.log(x3)
console.log(typeof x3)

let x4="Jalindar"
console.log(x4)
console.log(typeof x4)

//comparison operator
//<,>,<=,>=,==,!=,===,!==
// === , !==    (value and type)
// == , !=   (value)

console.log(5<10) //true
console.log(10<10)  //false
console.log(5>10) //false
console.log(50>10) //true
console.log(50>=50) //true
console.log(5<=5)  //true
console.log(50>=51) //false
console.log(50>=49) //true
console.log(77 < 88)
console.log(66 >= 34)
console.log(34 <= 33)
console.log(34 >= 33)
console.log(34 >= 34)
console.log(35 <= 35)
console.log(7 == 7)
console.log(7 != 6)
console.log(7 != 7)
console.log(7 == '7')
console.log(7 != '7')
console.log(7 != '6')
console.log(7 === '7')
console.log(7 !== '7')
console.log(7 === 7)
console.log(7 !== 7)
