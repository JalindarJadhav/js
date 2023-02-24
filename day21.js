// Object literal
let Sarthak = {
    firstName:"Sarthak",
    lastName:"Kawade",
    age:29,
    skills:["python","sql","html","css"]
}

let Pramod = {
    firstName:"Pramod",
    lastName:"Gunjal",
    age:23,
    skills:["python","html","css"]
}

// 4 lines 
// 40 object ---- 160 lines
// user defined data type

class Student {
    firstName = undefined
    lastName = undefined
    age = undefined
    skills = undefined
}

let Gopal = new Student()
let Ram = new Student()
console.log(Gopal)
console.log(Ram)

// setting the value outside the class
Gopal.firstName = "Gopal"
Gopal.lastName = "Gadakh"
Gopal.age = 22
Gopal.skills = ["python", 'html']
console.log(Gopal)

// setting the value at the time of object creation

class Person {
    constructor(fn,ln,ag,sk){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.skills = sk
    }
}
let amolJ = new Person("amol","jadhav",23,["python","sql"])
let ramJ = new Person("ram","jadhav",23,["python3","sql"])
console.log(amolJ)
console.log(ramJ)
ramJ.city = "ujjain"
console.log(ramJ)


class PersonD {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setSkills(sk){
        this.skills = sk
    }
}
let amolc = new PersonD()
console.log(amolc)
amolc.setFirstName("amol")
amolc.setLastName('vani')
amolc.setAge(24)
amolc.setSkills(["python","css","html"])
console.log(amolc)




