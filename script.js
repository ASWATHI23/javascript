// a=10
// b=22
// c=22.5
// if(a>=b && a>=c){
//     console.log("a is greater")
// }
// else if(b>=c){
//     console.log("b is greater")
// }
// else{
//     console.log("c is greater")
// }


// d=new Date()
// console.log(d.getDay())
// switch(d.getDay()){
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//          break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     default:
//         console.log("invalid")
//         break;
// }

// a=1
// while(a<=10){
//     res=a*2
//     a+=1
//     console.log(res)
// }

// program to find the factorial of a number


number = 10;
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number == 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}