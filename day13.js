let x=10
console.log(x)
console.log(typeof x)

let fName="Jalindar"
console.log(fName)
console.log(typeof fName)

let booleanT=false
console.log(booleanT)
console.log(typeof booleanT)

//             0           1        2       3     4
let names = ["Jalindar","Amol","Sarthak","Krish","Jay"]
console.log(names[0])
console.log(names[4])
console.log(names[3])
console.log(names[2])
console.log(names[1])

//              0       1         2       3       4
let cities = ["pune","mumbai","nagpur","wardha","amarvati"]
console.log(cities[4])
console.log(cities[1])
console.log (cities[0])
console.log (cities[2])
console.log (cities[3])


for(let i=0;i<=4;i++){
    // console.log(i)
    console.log(cities[i])
}



//              0           1         2          3
let country = ["india","srilanka","pakistan","bangladesh"]

for(let i=0;i<country.length;i++){
    console.log(country[i])
}

for(let i = 0  ; i <= 3 ; i++){
    console.log(i)
    console.log(country[i])
}


let abc=0
while(abc<=3){
    console.log(country[abc])
    abc++
}


// Object - Human
// Property  - age , color ,gender , height
// Method - talk() , walk()


// Object - Vehicle
// Property - model , type , color
// Method - start() , stop()

// Object - Bank account
// Property = accNo , accHolder ,type
// Method - withdrawl() , deposit()


// Gym()
// action -- excercise
// return --- health

// Sleep()
// action -  go to bed and close eye
// return rest

//              0        1      2        3
let fruits = ["apple","mango","banana","grapes"]
// let a1=fruits.length
// console.log(a1)
console.log(fruits.length)


// methods
// push()
// action - adds the element at last 
// return  - new length of array
//["apple","mango","banana","grapes"]
let a2=fruits.push("Papaya")
console.log(fruits)
console.log(a2)


// unshift()
// action - add the element at start
// return new length of array

let a4=fruits.unshift("Orange")
console.log(fruits)
console.log(a4)
 

//--------------------------------------------------------


