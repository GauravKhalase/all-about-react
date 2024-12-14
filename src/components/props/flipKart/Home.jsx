import React, { useState } from "react";
import Header from "./Header";
const Home = () => {
  let [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div>
      <Header data={{ isLogedIn, setIsLogedIn }}></Header>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default Home;
