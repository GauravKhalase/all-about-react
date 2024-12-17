import React, { useState } from "react";

const Error = () => {
  let [theme, setTheme] = useState("dark");

  return (
    <div style={{ height: "100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div
        style={theme == "light" ? {} : { background: "black", color: "white" }}
      >
        404 - PAGE NOT FOUND
      </div>
      <div onClick={()=>{theme == "light"? setTheme("dark"):setTheme("light")}}>Change</div>
    </div>
  );
};

export default Error;
