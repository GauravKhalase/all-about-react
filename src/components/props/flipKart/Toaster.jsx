import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Toaster = () => {
  const notify = () => toast("Here is your toast.");

  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      
    </div>
  );
};

export default Toaster;
