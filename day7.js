// switch case
//with break
let cityN="chennai"
switch (cityN){
    case "mumbai":
        console.log("MH")
        break;
    case "pune":
        console.log("MH")
        break;
    case "jaipur":
        console.log("RJ")
        break;
    case "kanpur":
        console.log("UP")
        break;
    case "banglore":
        console.log("BANG")
        break;
    case "kolkatta":
        console.log("kol")
        break;
    default:
        console.log("undefined state")
}

//switch case 
// without break

let names="siddhant"
switch (names){
    case "siddhant":
        console.log("parje")
    case "raghav":
        console.log("juyal")
    case "sarthak":
        console.log("kawade")
    case "amol":
        console.log("jadhav")
    case "vishal":
        console.log("chandgude")
    default:
        console.log("undefined name")
}



// multiple case same ouput
let city2="bhopal"
switch (city2){
    case "pune":
    case "mumbai":
        console.log("MH")
        break;
    case "bhopal":
    case "indore":
        console.log("MP")
        break;
    case "jaipur":
    case "udaipur":
        console.log('RJ')
        break;
    case "kanpur":
    case "lucknow":
        console.log('UP')
        break;
    default:
        console.log("incorrect city name ")

}

// Truthy or falsy 

//Truthy values  -  1 , -99, "A" , "chinmay","Chi12" , 
//true, 2==2 ," ", [] , {},2323
// Falsy - 0 , undefined , NaN , null , false , 45 < 23

//---------------------------------------------
if(0){
    console.log("Hello")
}
else {
    console.log("Bye")
}//Bye
//--------------------------------------
if(0<10){
    console.log("Hello")
}
else {
    console.log("Bye")
}//Hello
//-------------------------------------
if(0>10){
    console.log("Hello")
}
else {
    console.log("Bye")
}//Bye

//----------------------------------------------
//undefined 
let x;
console.log(x)
let y;
console.log(y)
let z;
console.log(z)
let x1;
console.log(x1)
let y1;
console.log(y1)
let z1;
console.log(z1)

//NaN--->not a number
console.log(undefined+undefined)
//--------------------
let a;
let b;
console.log(a+b)
//undefined +undefined ===NaN
//////////////////////////

//loop
//1 to 5
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)



// 1 to 100  (loop) for while
// loop , array , object

//for(intialisation;condition;increament /decreament){
//     console.log()
// }

//print Hello 5 times with the help of for loop
for (let i=1;i<=5;i++){
    // console.log("Hello")
    // console.log(i)
    console.log("jalindar")
}

for(let i=1;i<=3;i++){
    console.log(i)
}

for(let i=1;i<=4;i++){
    console.log(i)
}

//table of two 
for(let i=2;i<=20;i=i+2){
    console.log(i)
}
