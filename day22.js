// Object literal
let amol = {
    fullName:"Amol",
    lastName:"Jadhav",
    age:23,
    skills:["python","django"]
}

let Govind = {
    fullName:"Govind",
    lastName:"Navale",
    age:29,
    skills:["python3","django3"]
}
//40 objects - 160
// Setting the value outside the class
class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let amolB =  new Person() 
console.log(amolB)

amolB.firstName = "amol"
amolB.lastName = "jadhav"
amolB.age = 18
amolB.rollNo = 12
console.log(amolB)

// Setting the value at the time on object creation

class PersonD {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
    }
}

let Shankar = new PersonD("Shankar","Jadhav",23,22)
let Vishal = new PersonD("Vishal","Jadhav",27,26)

console.log(Shankar)
console.log(Vishal)

Shankar.city = "nagpur"
console.log(Shankar)


class PersonE {
    setFirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(roll){
        this.rollNo = roll
    }
}

let Sarthak  = new PersonE()
console.log(Sarthak)



Sarthak.setFirstName("Sarthak")
Sarthak.setlastName("Kawade")
Sarthak.setRollNo(18)
Sarthak.setAge(33)
console.log(Sarthak)











