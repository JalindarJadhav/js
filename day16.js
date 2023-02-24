//map

let arr = [11,22,33,44,55]
let a = arr.map(function(el,index,arr){
    return el + 2
})
console.log(a)

let birthYear = [2019,2020,2021,2022]
let ages = birthYear.map(function(el,index,array){
    return 2023 - el
})
console.log(ages)

// program 2
//filter
let numbers = [22,33,44,55,22,33,44,55,66]
let above50 = numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(above50)
numbers = [22,33,44,55,22,33,44,55,66]
let even = numbers.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(even)

// program 3
//reduce

let nnm = [11,22,33]  // 66
let sum = 0
for(let i = 0 ;i < nnm.length ; i++){
    sum = sum + nnm[i]
}
console.log(sum)


let sumA = nnm.reduce(function(acc,el,index,arr){
    return acc + el  // 33
},5)
console.log(sumA)


let bal = [11,22,33,44,55,66,110,123,-190,323,-900,-99000]
let deposit = bal.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)


let withdrawl = bal.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

let totalBal = deposit.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(totalBal)


// forEach()
let names = ['Jalu',"Raghav","Samarth"]
names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


/////////////////////////////////////////////////////
// map() , filer() , reduce() ,forEach()

// map()
let arrA = [11,22,33,44,55,66,77,88,99,100]
let q1 = arrA.map(function(el){
    return el * 10
})
console.log(q1)

// filter()
let transactions = [333,444,55,-56,77,-89,199,22,-900,800,1000] 
let deposits = transactions.filter(function(el){
    return el > 0
})
console.log(deposits)
//===============================================
let withdrawls = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawls)

//reduce()

let totalD = deposits.reduce(function(acc,el){
    return acc + el
},0)
console.log(totalD)

let totalW = withdrawls.reduce(function(acc,el){
        return acc + el   
},0)
console.log(totalW)

// forEach()
let city = ["pune","mumbai","banglore","kolkata","chennai"]
city.forEach(function(el){
    console.log('welcome '+ el)
})

let a1 = [44,66,33,66,55,77] 

//find()
let qq = a1.filter(function(el){
    return el > 50
})
console.log(qq)

let qqa = a1.find(function(el){
    return el > 50
})
console.log(qqa)

// findIndex()

let qqaa = a1.findIndex(function(el){
    return el > 50
})
console.log(qqaa)

// some()
let marks = [33,55,66,77,44,55,66]
let w1 = marks.some(function(el){
    return el > 700
})
console.log(w1)

// every()
let w2 = marks.every(function(el){
    return el > 10
})
console.log(w2)


