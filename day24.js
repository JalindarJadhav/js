let student="Jalindar"
let rev=""
for (let i=0;i<student.length;i++){
    console.log(student[i])
    rev=student[i]+rev
        //    J      + ""         =="J"
        //    a      + "J"        =="aJ"
        //    l      + "aJ"       =="laJ"
        //    i      +"laJ"       =="ilaJ"
        //    n      + "ilaJ"     =="nilaJ"
        //    d      +"nilaJ"     =="dnilaJ"
        //    a      + "dnilaJ"   =="adnilaJ"
        //    r      + "adnilaJ"  =="radnilaJ"

}

console.log(rev)