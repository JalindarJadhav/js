// intilization 
// while(condition){
//     // statements
//     // increment / decrement
// }

// print 1 to 5
// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }

// print 'hello'  5 times
// let i=1;
// while(i<=5){
//     console.log("Hello")
//     i++
// }

//print 5 to 1
// let i=5;
// while(i>=1){
//     console.log(i)
//     i--
// }


// table of 2
// let i=2;
// while(i<=20){
//     console.log(i)
//     i=i+2
// }

// table of 2 in reverse
// let i=20;
// while(i>=2){
//     console.log(i)
//     i=i-2
// }

// break statement with while loop
// let i=1;
// while(i<=10){
//     if (i==5){
//         break;
//     }
//     console.log(i)
//     i++
// }

// let i=5;
// while(i>=1){
//     if (i==2){
//         break;
//     }
//     console.log(i)
//     i--
// }

// continue with while 


let i9 = 5

while (i9 >= 1) {
    if (i9 == 2) {
        i9-- // 1
        continue
    }
    console.log(i9) // 5 // 4 // 3 //1
    i9-- // 4 // 3 // 2  // 0
}