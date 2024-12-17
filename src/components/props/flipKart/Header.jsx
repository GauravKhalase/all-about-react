import React, { useState } from "react";
import toast from "react-hot-toast";

const Header = (props) => {
  console.log(props);

  return (
    <div className="w-full flex py-5 bg-slate-300">
      <div className="w-[50%] flex justify-center items-center">LOGO</div>
      <div className="w-[50%] flex justify-center items-center gap-20">
        <div
          href=""
          onClick={() => {
            toast.success("You are on Home Page");
            props.data.setHome(true);
            props.data.setProduct(false);
            props.data.setCart(false);
          }}
        >
          HOME
        </div>
        <div
          href=""
          onClick={() => {
            toast.success("You are on Product Page");
            props.data.setHome(false);
            props.data.setProduct(true);
            props.data.setCart(false);
          }}
        >
          PRODUCTS
        </div>
        {props.data.isLogedIn ? (
          <div className="flex justify-center items-center gap-20">
            <div
              href=""
              onClick={() => {
                props.data.setIsLogedIn(false);
                props.data.setHome(true);
                props.data.setCart(false);
              }}
            >
              LOGOUT
            </div>
            <div
              href=""
              onClick={() => {
                toast.success("You are on Product Page");
                props.data.setHome(false);
                props.data.setProduct(false);
                props.data.setCart(true);
              }}
            >
              CART
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-20">
            <div href="">SIGN UP</div>
            <div
              href=""
              onClick={() => {
                props.data.setIsLogedIn(true);
              }}
            >
              LOGIN
            </div>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Header;
