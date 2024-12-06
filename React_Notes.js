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

//! npx - node package executer
// npx will download only the necessary packages 
// and remaining packages we can access without downloading them

//! Example
// If we want to use facebook in our mobile then there are two ways
//  1. npm way - meaans we are downloading facebook app and use it
//  2. npx way - only download the necessary package such as browser and we can use facebook using browser
// In this example we are not downloading the facebook app but instead we are downloading necessary package (eg. browser) and use facebook using browser

//! React installation steps using npx
//  1. npx create-react-app project_name (in lowercase only)

//

