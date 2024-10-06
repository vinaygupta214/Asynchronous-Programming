//code injection prevention exercise********

// if(true)
// {
// console.log('The condition is true')
// }else{
// console.erroe('The condition is failed')
// }

// 5>7?console.log('the statement is true'):console.error('the satement is false')

//slice***

// let arr=[1,2,3,4,5,6];
// let arr2=arr.slice(2,5);
// console.log(arr2);

//splice*******
// let x=[11,12,13,14,15,16];
// let y=x.slice(2,5);
// console.log(y);

// let numbers=[1,2,3,4,5,6,7,8,9]
// numbers.splice(2,5,3,4,4,5,6);
// console.log(numbers);

// let a=[1,2,3,4,5,6,7,8];
// let b=a.splice(3,1,50);
// console.log(b);


//reducer******

let a=[1,2,3,4,5,6];
let b=a.reduce((acc,num)=>acc+ num,10);
console.log(b);

    
//filter******
// const a = [20, 40, 17, 99, 59, 77];
// const fa = a.filter(function (a) {
//     return a > 20;
// });
  
// console.log(fa);


// let b=[1,2,3,4,5,6];
// let fb=b.filter(function(b){
//    return b>4
// });

// console.log(fb);

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// };

//function*****
// let result;
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

//
