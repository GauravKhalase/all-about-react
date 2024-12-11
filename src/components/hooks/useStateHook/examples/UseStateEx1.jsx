import React, { useState } from "react";

const UseStateEx1 = () => {
  let [state, setState] = useState(0);

  //! useState hook internal implementation
  // let useMyState = (a) =>{
  //     let setMyState = (a) ={
  //         //? modify current state
  //     }
  //     return [a,setMyState]
  // }
  // let [state, setState] = useMyState();
  // console.log(state)

  return (
    <div>
      <div>Ex 1:</div>
      <h1>UseState</h1>
      <div>Count: {state}</div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increase
      </button>
      <br />
      <br />
    </div>
  );
};

export default UseStateEx1;
