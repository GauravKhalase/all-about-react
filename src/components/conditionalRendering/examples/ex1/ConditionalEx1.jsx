import React from "react";
import Home from "./Home";
import Error from "./Error";

const ConditionalEx1 = () => {
  localStorage.setItem("username", "demo@123");
  let username = localStorage.getItem("username");
  console.log(username);
  if (username == "demo@12") {
    return <Home></Home>;
  }
  return <Error></Error>;
};

export default ConditionalEx1;
