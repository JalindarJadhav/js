
console.log("Jalindar")

//numberT > 0 && numberT <= 5  // 5 % discount
//numberT > 5 && numberT <= 10  // 10 % discount
//numberT > 10  // 20 % discount

let numT = 50

if(numT > 0  && numT <= 5){
    console.log('5 % discount')
}
if(numT > 5  && numT <= 10){
    console.log('10 % discount')
}
if(numT > 0  && numT <= 5){
    console.log('5 % discount')
}
else if(numT > 0  && numT <= 50){
    console.log("8% discount")
}

// else{
//     console.log("8% discount")
// }

let marks=77
if (marks>90){
    console.log("grade 'A'")
}
else if (marks>70){
    console.log("grade 'B'")
}
else if (marks>50){
    console.log("grade 'C'")
}
else {
    console.log("fail")
}


// if else 
let a=10
let b=5

if (a<b){
    console.log("a is grater")
}
else{
    console.log("a is grater")
}



let a1 = 10
let b1 = 50
let c1 = 250

if(a1 > b1 && a1 > c1){
    console.log('a1 is greater')
}
else if( b1 > a1 && b1 > c1){
    console.log('b1 is greater')
}
else {
    console.log("c1 id greater")
}


let x = 10
let y = 50
if(x > y){
    console.log('x is greater')
}
else {
    console.log('y is greater')
}

// ternary operator
// let x = 10
// let y = 50
x > y ? console.log("X IS GRATER"):console.log("Y IS GRATER")

let age = 17
let o=age>16 ? "college student": "school student"
console.log(o)

let age1 = 17
let q1 = age1 >= 18 ? "can drive":"cannot drive"
console.log(q1)

