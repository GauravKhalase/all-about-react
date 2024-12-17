import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const ConditionalEx2 = () => {
  let username = prompt("Enter username");

  let pageName = prompt("Enter pagename");

  switch (pageName) {
    case 'home':
      return <Home username={username}></Home>;
      break;
    case 'about':
      return <About username={username}></About>;
      break;
    case 'contact':
      return <Contact username={username}></Contact>;
      break;
    default:
      break;
  }

  return <div>ConditionalEx2</div>;
};

export default ConditionalEx2;
