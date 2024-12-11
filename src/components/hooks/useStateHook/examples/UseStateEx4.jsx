import React, { useState } from "react";

const UseStateEx4 = () => {
  let [circle, setCircle] = useState(false);
  return (
    <div>
      <div>Ex 4:</div>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: circle ? "red" : "green",
          borderRadius: circle ? "":50,
        }}
      ></div>
      <div onClick={()=>{setCircle(!circle)}}>Click</div>
      <br />
      <br />
    </div>
  );
};

export default UseStateEx4;
