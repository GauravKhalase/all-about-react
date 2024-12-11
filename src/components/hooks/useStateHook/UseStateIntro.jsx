import React from "react";
import UseStateEx1 from "./examples/UseStateEx1";
import UseStateEx2 from "./examples/UseStateEx2";
import UseStateEx3 from "./examples/UseStateEx3";
import UseStateEx4 from "./examples/UseStateEx4";
import UseStateEx5 from "./examples/UseStateEx5";
import UseStateEx6 from "./examples/UseStateEx6";
import UseStateEx7 from "./examples/UseStateEx7";
import UseStateEx8 from "./examples/UseStateEx8";

const UseStateIntro = () => {
  // ! What is hooks?
  // Hooks are nothing but he inbuilt methods or functions
  // Hook names starts with use
  // eg. useState(), useEffect(), useContext(), useDispatch(), useReducer(), useCallback(),useMemo, etc
  // we can create any function and we will name it use_____ .
  // such functions can be treated as custom hooks
  // eg. useAddition:
  // let useAddition = (a,b) =>{
  //     return a+b;
  // }
  // let sum = useAddition(10,20);
  // console.log(sum);

  return (
    <div>
      <div className="grid grid-cols-6">
        <UseStateEx1></UseStateEx1>
        <UseStateEx2></UseStateEx2>
        <UseStateEx3></UseStateEx3>
        <UseStateEx4></UseStateEx4>
        <UseStateEx5></UseStateEx5>
        <UseStateEx6></UseStateEx6>
      </div>
      <UseStateEx7></UseStateEx7>
      <UseStateEx8></UseStateEx8>
    </div>
  );
};

export default UseStateIntro;
