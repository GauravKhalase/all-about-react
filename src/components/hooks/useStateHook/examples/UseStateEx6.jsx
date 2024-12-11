import React from 'react'

const UseStateEx6 = () => {
    // useState with object
    let obj = {
        name: "Gaurav",
        age: 22
    }
  return (
    <div>
        <div>Ex 6:</div>
        <div>{obj.name}</div>
        <div>{obj.age}</div>        
        <br />
        <br />
    </div>
  )
}

export default UseStateEx6