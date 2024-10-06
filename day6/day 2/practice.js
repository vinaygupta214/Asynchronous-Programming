
// let a=100;
// let b=500;
// let c=a+b;
// console.log(c);

// let a=5;
// let b=6;
// let c=a+b;
// console.log(c);
   
// let a=8;
// let b=9;
// let c=a+b;
// console.log(c);

// var a=900;
// var b=800;
// var c=a+b;
// console.log(c);

// var a=7;
// var b=8;
// var c=a+b;
// console.log(c);

// var a=11;
// var b=15;
// var c=a+b;
// console.log(c);

// let numbers = [7, 8, 9, 0];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [14, 16, 18, 0]

// let numbers = [1, 3, 6, 9];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 6, 12, 18]

//  const pi=3.14159;
//  console.table(pi);

// let arr[]=[2];
// console.log(arr);

// let myArray=[2,3,5,6];
// console.log(myArray);

// let myArray2=new Array[7,8,9];
// console.log(myArray2);

// const newFun = (x = 5, y=6) => x+y;
// newFun();
// newFun(100,80);
// neeFun(500,600);

// let [firstName,lastName]=['Vinay','Gupta'];
// console.log(firstName);
// console.log(lastName);

// let [firstName,lastName]=['John','Doe'];
// console.log(firstName);
// console.log(lastName);

   //practice
// let num=59;
// console.log(num);
   
// let num=42;
// console.log(num);

// let str='bye';  
// console.log(str);

// let str='hello';  
// console.log(str);

// let isValid=true;
// console.log(isRight);

// let isRight=true;
// console.log(isValid);

// let notAssigned;
// console.log(notAssigned);

// let emptyValue=zero;
// console.log(emptyValue);

// let emptyValue=null;
// console.log(emptyValue);

// let uniqueId=Symbol('id');
// console.log(uniqueId);

// let bignumber=456123753156478965425544554455644555n;
// console.log(bignumber);

// let bignumber=1234567890123456789012345678901234567890n;
// console.log(bignumber);

// const num=42;
// console.log(num);

// const str='hello';  
// console.log(str);


// const isValid=true;
// console.log(isValid);

// const notAssigned;
// console.log(notAssigned);

// const emptyValue=null;
// console.log(emptyValue);

// const uniqueId=Symbol('id');
// console.log(uniqueId);

// const bignumber=1234567890123456789012345678901234567890n;
// console.log(bignumber);

// refence data type*****

     //object destructing
//  let user={
//      id:10,
//      username:'Vinay',
//      email:'vinay@example.com',
//  };

// console.log(user.username);
// console.log(user.id);
// console.log(user.email);

//  let user={
//      id:50,
//      username:'Mahesh',
//      email:'mahesh@example.com',
//  };

// console.log(user.username);
// console.log(user.id);
// console.log(user.email);
     
//  let user={
//      id:1,
//      username:'John',
//      email:'john@example.com',
//  };

// console.log(user.username);
// console.log(user.id);
// console.log(user.email);

// let {username, email}= user;
// console.log(username);
// console.log(email);

    //Destructing in function parameters**

    
      //Type Conversion
      
      // let numStr ='8962';
      // let num =Number(numStr);  //convert string to number
      // console.log(typeof num);  //output: 'number'
      // let str1 =String(num);  //convert number to string
      
      // let numStr ='4523';
      // let num =Number(numStr);  //convert string to number
      // console.log(typeof num);  //output: 'number'
      // let str2 =String(num);  //convert number to string 

      // let numStr ='123';
      // let num =Number(numStr);  //convert string to number
      // console.log(typeof num);  //output: 'number'
      // let str3 =String(num);  //convert number to string

      // let bool =Boolean(0);
      // console.log(bool);     //false
      // let str =String(100); //100
      // console.log(str);

      //Type Coercion

      // console.log('10'*6);  //output: 60 (string '60' is coercion)
      // console.log('15'+2);  //output: '152' (numbre 152 is coercion)
      // console.log(str1);

      // console.log('5'*5);  //output: 25 (string '25' is coercion)
      // console.log('1'+3);  //output: '13' (numbre 13 is coercion)
      // console.log(str1);
      


      // console.log('5'*2);  //output: 10 (string '5' is coercion)
      // console.log('5'+2);  //output: '52' (numbre 2 is coercion)
      // console.log(str1);

      //precedence

      // let result =50+8*2; // result is 66
      // let adjustResult = (50+8)*2;  //adjustResult is 166
      // console.log(result);  
      // console.log(adjustResult);

      // let result =10+5*2; // result is 20

      // let adjustResult = (10+5)*2;  //adjustResult is 30

      // console.log(result);   //op-20
      // console.log(adjustResult); //o/p-30

      // let ewResult=(15+6)-8*3+9/2;
      // console.log(ewResult);
       

      //creat and access array
   // let empty=[];
   // console.log(empty);

   // let array1 =[1,23,4];
   // console.log(array1);

   // let mixarr=[1,2,'apple']

   //iterate

// let arr=['cherry','banana'];
// let arr1=['orange'];
// console.log(arr.push('apple'));   

// let fruits = ['mango','banana'];
//  fruits.push('orange');
//  console.log(fruits);
 

// let last=fruits.pop();
// console.log(fruits);

// let upperFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(upperFruits);

 let arr=['Lichi','banana'];
// // let arr1=['grapes'];
//  console.log(arr.push('date'));
//  console.log(arr.pop());
//  arr.unshift('lemon','pineapple');
//  console.log(arr);
//  arr.shift('pineapple');
//  console.log(arr);


 let fruit = ['date','banana'];
  fruit.push('grapes');
  console.log(fruit);
  console.log(fruit.push('mango'));
 
 console.log(fruit.pop('date'));

//  let last=fruit.pop();
// console.log(fruits);

// let upperFruits = fruits.map(fruit => fruit.toLowerCase());
// console.log(upperFruits);


