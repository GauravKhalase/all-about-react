import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Header = (props) => {
  // console.log(props);

  return (
    <div className="w-[100vw] flex py-5 bg-slate-300">
      <div className="w-[40%] flex justify-center items-center">LOGO</div>
      <div className="w-[60%] flex justify-center items-center gap-20">
        <div href="" onClick={() => toast.success("You are on Home Page")}>
          HOME
        </div>
        <div href="">Products</div>
        {props.data.isLogedIn ? (
          <div>
            <div
              href=""
              onClick={() => {
                props.data.setIsLogedIn(false);
              }}
            >
              LOGOUT
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
