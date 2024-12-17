import React, { useState } from "react";
import Header from "./Header";
import AllProducts from "./AllProducts";
import Home from "./Home";
import Cart from "./Cart";

const Flipkart = () => {
  let [isLogedIn, setIsLogedIn] = useState(false);
  let [product, setProduct] = useState(false);
  let [home, setHome] = useState(true);
  let [cart, setCart] = useState(false);

  return (
    <div>
      <Header
        data={{
          isLogedIn,
          setIsLogedIn,
          product,
          setProduct,
          home,
          setHome,
          cart,
          setCart
        }}
      ></Header>
      {home ? <Home></Home> : <div></div>}
      {product ? <AllProducts></AllProducts> : <div></div>}
      {cart ? <Cart></Cart> : <div></div>}
    </div>
  );
};

export default Flipkart;
