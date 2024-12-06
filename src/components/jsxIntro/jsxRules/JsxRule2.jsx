import React from 'react'

const JsxRule2 = () => {

//! We can only return one JSX element at a time... 
//! If we want to return more than one element then we must wrap them inside one single parent element

return (
    <div>
        <h2>JSX Rule 2</h2>
        <div>We can only return one JSX element at a time... </div>
        <div>If we want to return more than one element then we must wrap them inside one single parent element</div>
        <br />
    </div>
  )

//! It will work
//   return (
//     <div>
//         <div>element1</div>
//         <div>element2</div>
//     </div>
//   )

//! It will not work
//   return (
//         <div>element1</div>
//         <div>element2</div>
//   )
}

export default JsxRule2