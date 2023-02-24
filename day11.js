console.log("Hello world!")

let a = "Jalindar"
let b = (a.length - 1)
console.log(b)
//reverce the String charactor
for (let i = 7; i >= 0; i--) {
    console.log(a[i])
}

//reverce string using the for loop
let aa = "Amol";
let rev = "";
for (let i = 0; i < aa.length; i++) {
    rev = aa[i] + rev;

}
console.log(rev)

//reverce the string using the splite(),reverce(),join('')


let String = "Sarthak"
let output = String.split("").reverse("").join('')
console.log(output)

let str = 'Gopal'
let output2 = str.split('').reverse('').join('')
console.log(output2)





// Math

console.log(Math.floor(23.4)) // 23
console.log(Math.floor(-23.4))  // -24
console.log(Math.ceil(23.4))  // 24
console.log(Math.ceil(-23.4)) // -23
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3

console.log(Math.random()) // 0 - 1
console.log(Math.random() * 6)// 0-6
console.log(Math.floor(Math.random() * 6)) // 0,1,2,3,4,5
console.log(Math.floor(Math.random() * 6) + 1) // 1,2,3,4,5,6
console.log("**************************")
// ///////////////////////////////////////////////////////////////////////
// // prompt function works in browser only

// let randomNumbe = Math.floor(Math.random() * 5)
// console.log(randomNumbe)
// let userInput = prompt('guess the no')
// if (randomNumbe == userInput) {
//     console.log('correct quess')
// } else {
//     console.log('incorrect quess')
// }


// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput1 = prompt('Please guess the number')
// if(randomNumber == userInput){
//     console.log("Guess is correct")
// }
// else {
//     console.log("Guess is incorrect")
// }

// // // Ternary operatory
// // randomNumber == userInput ? console.log("Guess is correct"):console.log("Guess is incorrect")

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// //=================================================================================================

// // for loop
// let randomNumber2 = Math.floor(Math.random()*6)+1
// console.log(randomNumber2)
// for(let i = 1 ; i <= 5 ; i++){
//    let userInput = prompt('Please guess the number')
//    if(userInput == randomNumber2){
//         console.log('Guess is correct')
//         break;
//    }
//    else {
//         console.log("Guess is incorrect")
//    }
// }

// while loop
let randomNumber3 = Math.floor(Math.random()*6)+1  // 4
console.log(randomNumber)
let userInput3;
console.log(userInput) // undefined
while(userInput3 != randomNumber3){
    userInput = prompt('Guess the number') // 3 // 4
    if(userInput == randomNumber){
        console.log('Guess is correct')
        //break
    }
    else {
        console.log('Guess is incorrect')
    }
}




