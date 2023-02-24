// //              0         1       2      3        4
let names = ["Jalindar", "amol", "Swami", "Gopal", "Satendra"]
let numbers = [22, 33, 44, 55, 66, 77, 88, 99, 10]
let info = ["Sanket", "Shinde", 9876543210, false]

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(info[0])
console.log(info[1])
console.log(info[2])
console.log(info[3])
console.log(typeof info[3])
console.log(typeof info[2])
console.log(typeof info[1])
console.log(typeof info[0])
console.log(typeof info)
console.log(typeof numbers)
console.log(typeof names)
console.log(typeof names[0])


// - Looing  to print element of array 

//             0        1        2       3
let cities = ["pune", "mumbai", "nagpur", "wardha"]
// console.log(cities[0])
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

for (let i = 0; i <= 3; i++) { // 1 // 2 // 3
    // console.log(i) // 0 , 1 , 2 , 3
    console.log(cities[i])
    // 1st i = 0 
    // 2nd i = 1
    // 3rd i = 2
    // 4th i = 3
}


// Javascript object 
// Array - Object 
// Object Property and Method


// Property Lenngth 
//               0          1           2            3
let country = ["India", "Pakistan", "Srilanka", "Bangladesh"]
console.log(country.length)     //to get the length
console.log(country.length - 1)   //to get index
for (let i = 0; i < country.length; i++) {
    console.log(country[i])
}


for (let i = 0; i <= 3; i++) {
    //console.log(i)
    console.log(country[i])
}

// Methods
// Action
// Return type

//////////////////////////////////////////////////////////////////////
//push
// action - adds the element the last
// return - new length of array
//                   0           1          2          3
let vegetables = ["cabbage", "brinjal", "cauliflower", "tomato"]
console.log(vegetables)
// console.log(vegetables.length)
let a1 = vegetables.push("ladyfinger")
console.log(a1)
console.log(vegetables)

// unshift()
// action -- add the element at start of array
// return - new length of array

let a2 = vegetables.unshift("carrot")
console.log(vegetables)
console.log(a2)

// pop()
// action - removes the last element
// return - returns the same
let a3 = vegetables.pop()
console.log(vegetables)
console.log(a3)

// shift()
// action - removes the first element
// return -first element

let a4 = vegetables.shift()
console.log(vegetables)
console.log(a4)


//  4 method
// push() - new length
// unshift() - new length
// pop() - returns last element
// shift() - returns first element
///////////////////////////////////////////////////////////////////////////////



// includes()
// action - search for element
// return - boolean value
let animals = ["tiger", "lion", "panthar", "rabbit"]
console.log(animals.includes("Tiger"))
let a5 = animals.includes("Tiger")
console.log(a5)
console.log(animals.includes("tiger"))
let q6 = animals.includes("tiger")
console.log(q6)



// reverse()
// console.log(animals.reverse())
let a6 = animals.reverse()
console.log(a6)

// indexOf()
//           0    1   2   3   4    5
let nums = [555, 666, 777, 8888, 9999, 8888]

console.log(nums)
console.log(nums.indexOf(8888))

let b1 = nums.indexOf(555)
console.log(b1)


// join()
let infoB = ["Jalindar", "Jadhav", 23, 967790781]
console.log(infoB.join("_"))
let b2 = infoB.join("****")
console.log(b2)


// program 1
//calculate the age 
let birthYear = [2019, 2020, 2021, 2022]
let ages = []          //[4,3,2,1]
for (let i = 0; i < birthYear.length; i++) {
    console.log(2023 - birthYear[i])
    ages.push(2023 - birthYear[i])
}
console.log(ages)




// program 2

let num2 = [11, 22, 33, 44, 22, 33, 44, 55, 66, 77]
let above40 = [] // [44,44,55,66,77]
let below40 = [] //[11,22,33,22,33]
for (let i = 0; i < num2.length; i++) {
    console.log(num2[i])
    if (num2[i] > 40) {
        above40.push(num2[i])
    } else {
        below40.push(num2[i])
    }

}
console.log(above40)
console.log(below40)


let num3 = [11, 22, 33, 44, 22, 33, 44, 55, 66, 77]
let above50 = []
let below50 = []
for (let i = 0; i < num3.length; i++) {
    console.log(num3[i])
    if (num3[i] <= 50) {
        below50.push(num3[i])
    } else {
        above50.push(num3[i])
    }

}
console.log(above50)
console.log(below50)


// program3

let addition = [11, 22, 33] // 66
let total = 0
for (let i = 0; i < addition.length; i++) {
    // console.log(addition[i])
    total = total + addition[i]
}
console.log(total)



let additionB = [11, 22, 33, 44, 55]
let totalB = 0
for (let i = 0; i < additionB.length; i++) {
    // console.log(i)
    // console.log(addition[i])
    totalB = totalB + additionB[i]
    //       0    +  11 ========> 11
    //       11   +  22 ========> 33
    //       33   +  33 ========> 66
}
console.log(totalB)

// program 4
let students=["Jalindar","Pravin","Sameer","Shankar"]
for(let i=0;i<students.length;i++){
    // console.log(students[i])
    console.log("Welcome "+students[i])
}


// program 5
let students2=["Jalindar","Pravin","Sameer","Shankar"]
for(let i=0;i<students2.length;i++){
    // console.log(students[i])
    console.log("Welcome"+" "+students2[i])
}






