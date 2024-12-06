import React from "react";

const JsxRule3 = () => {
  //! Each and every element in jsx must be closed

  //! It will work
  return (
    <div>
      <h2>JSX Rule 3</h2>
      <div>Each and every element in jsx must be closed</div>
      <br />
    </div>
  );

  //! It will not work
  // return (
  //     <div>
  //         <h2>h2<h2>
  //         <div>div<div>
  //         <br >
  //         <hr >
  //     </div>
  //   )
  
};

export default JsxRule3;
