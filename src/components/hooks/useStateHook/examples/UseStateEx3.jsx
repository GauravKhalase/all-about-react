import React, { useState } from "react";

const UseStateEx3 = () => {
  // State with boolean value
  let [changeBg, setChangeBg] = useState(false);

  return (
    <div>
        <div>Ex 3:</div>
      <div
        style={{
          backgroundColor: changeBg ? "red" : "white",
          color: changeBg ? "white" : "black",
        }}
      >
        Hello
      </div>
      <button
        onClick={() => {
          setChangeBg(!changeBg);
        }}
      >
        Click
      </button>
      <br />
      <br />
    </div>
  );
};

export default UseStateEx3;
