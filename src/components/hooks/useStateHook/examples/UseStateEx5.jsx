import React, { useState } from "react";

const UseStateEx5 = () => {
  // useState with an array
  let [array, setArray] = useState(["html", "css", "js", "react js"]);

  return (
    <div>
      <div>Ex 5:</div>
      {array.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
      <br />
      <br />
    </div>
  );
};

export default UseStateEx5;
