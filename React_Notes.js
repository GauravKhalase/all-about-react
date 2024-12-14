//! 04/12/2024 ---------->

//! What is JSX?
// JSX stands for Javascript & XML
// return statement should be the last statement in component

//! Rule 1
// you must return JSX. If you are not returning then you will not get output

//! Rule 2
// We can only return one JSX element at a time... 
// If we want to return more than one element then we must wrap them inside one single parent element

//! Rule 3
// Each and every element in jsx must be closed

//! Rule 4
// We cant use attribute licke "class" and "for" while writing the jsx. instead of that we have to use "className" and "htmlFor"

//! Rule 5 - Fragment
// React fragments are the empty angular braces
// react fragment is used to prevent creating an extra tag (<> Fragment </>)
// The main purpose of react fragment is to improve the performance 
// 1. <> </> - With empty angular braces
// 2. <React.Fragment> </React.Fragment> - As React.Fragment
// 3. <Fragment> </Fragment> - As Fragment
// but for this we need to import fragment from react first by destructuring
// import { Fragment } from "react";
// React fragments are the empty angular braces

//! named export example
// export 

//! import example for named export
// import { Fragment } from "react";

//! 06/12/2024 ---------->

//! npm - node package manager
// npm will compulsarily download all the packages & libraries
// means we are downloading the packages and then only we can use them
// Installation size will be around 500 to 600 MB.

//! npx - node package executer
// npx will download only the necessary packages 
// and remaining packages we can access without downloading them

//! Example
// If we want to use facebook in our mobile then there are two ways
//  1. npm way - meaans we are downloading facebook app and use it
//  2. npx way - only download the necessary package such as browser and we can use facebook using browser
// In this example we are not downloading the facebook app but instead we are downloading necessary package (eg. browser) and use facebook using browser
// Installation size will be around 300 to 400 MB.

//! React installation steps using npx

// To install : 
// npx create-react-app project_name (in lowercase only)

// Folder Structure :

// 1] node_modules
// 2] public
// 3] src
// 4] .gitignore
// 5] package-lock.json
// 6] package.json
// 7] Readme.md

// To start the App : npm start
// Default port : 3000
// We can create js & jsx file.
// We can write JSX inside both .jsx & .js file & JavaScript inside .js & .jsx both file.

//! npm create vite :

// Installation size will be around 55 to 65 MB.
// To start the App : npm run dev
// Default port : 5173
// We can create js & jsx file.
// We can write JSX inside .jsx file only & JavaScript inside .js file only.

//? NPM vs NPX
//? Class based component vs Function based component

//! 10/12/2024 ---------->

//! Hot Module Replacement (or HMR)
// Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. 
// It allows all kinds of modules to be updated at runtime without hte need for a full page refresh
// HMR is not intended for use in production, meaning it should only be used in development

//! What is hooks?
// Hooks are nothing but he inbuilt methods or functions
// Hook names starts with use
// eg. useState(), useEffect(), useContext(), useDispatch(), useReducer(), useCallback(),useMemo, etc
// we can create any function and we will name it use_____ .
// such functions can be treated as custom hooks 
// eg. useAddition:
// let useAddition = (a,b) =>{
//     return a+b;
// }
// let sum = useAddition(10,20);
// console.log(sum);

//! Features of React :

//! 1] React follows Component Based Architecture.
// Ex. Daigram (Landing Page)

//! 2] React is Declarative in Nature.
// Everything is declared internally, we are just using it.
// Ex. We don't need to write or use any DOM methods beacause everything is declared with JSX.
// We can call React as Declarative cause it provides many in-Built Hooks for different functionalities.
// Imperative means we have to create it first & then use it.

//! 3] Write once use anywhere

// We can create components for such functionalities that are repetative & we can use such components n no. of times
// Ex. We can create Button component & use it anywhere in the application by calling it.


//! Interview Questions
//? What is react?
//? Features of react?
//? Diff between library and framework?
//? what is single page application?
//? What is declarative?
//? What is virtual dom?
//? How many virtual dom react maintain? How? //2
//? Diff between virtual dom and real dom?
//? What is reconsilaition?
//? What is react fiber?
//? Diff between these two?
//? Folder Structure of react?
//? What is the use of scipts in package.json?
//? What is component?
//? What are types of components
//? Diff between class based and function based components
//? What is hooks?
//? What is lifecycle methods? tell me some lifecycle methods?
//? What is createRoot?
//? What is react-dom? use? 
//? What are the methods in react-dom?
//? What is the use of cdn links?
//? What is render?
//? What is useState?
//? What is props?
//? What is props.children?
//? Diff between props and state?
//? What is prop drilling?
//? How to avoid prop drilling?
//?

//! JS
//? Functions & its types?
//? generator functions?
//? How this keyword works in those functions?
//? Onject & object methods?
//? Array & array methods?
//? String & string methods?
//? What is closure?
//? Promises
//? Async-Await
//? Hoisting
//? Destructuring
//? call, apply, bind & their difference?