 console.log("Working...");

// let element = document.createElement("div");
// element.id= "div1";
// element.innerHTML= " <div><b> i am creating a div tag using js</b></div>";
// console.log(element);
// document.querySelector("div#id").appendChild(element);

// let createelement = document.createElement("img");
// createelement.className="image";
// createelement.setAttribute("src","th.jpg");
// console.log(createelement);
// document.querySelector("div#id").appendChild(createelement);

// function a(){
//     console.log("I am function a");
// }

// var b = function(){//it does not support Hoisting 
//     console.log("I am function b");
// }
// b();

// a function expression is a unnamed function assained to a variable . the variable recives the function defination , which in turn ca call the function by calling the variable name.{ a(); }

//First class Functions - the functions can be passed as values into another function
// or can be returned from another functions as value. this unique future of function
// makes them call as first class functions/ First class function


// Higher Order Functions - The functions which accept the FCF's or return them are
//collected as a higher order functions


// let g = function(param){//HOF
//     console.log("I am function g");
//     console.log(param);
//     param();
// }

// function h(){//FCF
//     console.log("I am function h");
// }

// g(h);//h is passed as an argument

// let i = function(){//HOF
//     return function j(){//FCF
//         console.log("I am function J");
//     }
// }
// let returnVal = i();
// console.log(returnVal);

// Call Back Functions - 


// setTimeout(() => {
//     console.log("I am a default function of javascript");
// }, 4000);

// const sayHi = (nameoffriend) => {
//     console.log("Hello",nameoffriend);
// }

// const greeting = (friend,callBackFunction) => {
//     callBackFunction(friend); 
// }

// greeting("Bala",sayHi);



