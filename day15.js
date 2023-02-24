


// //           0    1    2    
let birthyear=[2020,2021,2022]
let age=[]
for(let i=0;i<birthyear.length;i++){
    console.log(2023-birthyear[i])
    age.push(2023-birthyear[i])
}
console.log(age)



// map()
birthYearB = [1989,1990,1991,1992]

let q1 = birthYearB.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2023 - el 
})
console.log(q1)

let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let q2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q2)

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

let a6=num2.filter(function(el,index,arr){
    return el<=40
})
console.log(a6)

let a7=num2.filter(function(el,index,arr){
    return el>=40
})
console.log(a7)




