import React, { useRef, useState } from "react";
import validateform from "../utils/Validateform";

const LoginForm = () => {
  const [mode, setmode] = useState("Sign In");
  const [errmessage, seterrmessage] = useState(null);

  const handelClick = () => {
    mode == "Sign In" ? setmode("Sign Up") : setmode("Sign In");
  };
  const email = useRef(null);
  const password = useRef(null);

  const handelButtonclick = () => {
    const message = validateform(email.current.value, password.current.value);
    seterrmessage(message);
  };

  return (
    <div className="absolute top-[15%]   left-[37%] text-white ">
      <form
        onSubmit={(e) =>  (!errmessage)?  e.preventDefault() :console.log(0)
        }
        className="flex-col flex items-center justify-between bg-black p-8 w-100  text-white text-lg  gap-y-8 gap-x-12  rounded-xl opacity-85"
        action=""
      >
        <h1 className="text-center text-2xl   font-bold">{mode}</h1>

        {mode == "Sign Up" && (
          <input
            type="text"
            className="bg-zinc-700 border-1 w-[80%] px-3 py-2 rounded-lg  border-white"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={email}
          id="email"
          type="text"
          className="bg-zinc-700 border-1 w-[80%] px-3 py-2 rounded-md  border-white"
          placeholder="Enter Your Email"
        />
        <input
          ref={password}
          type="password"
          className="bg-zinc-700 border-1 w-[80%] px-3 py-2 rounded-md border-white"
          placeholder="Password"
        />
        {errmessage && (
          <p className="text-red-500 text-start mx-[-20px] font-bold text-lg">
            {errmessage}
          </p>
        )}
        <button
          onClick={handelButtonclick}
          className=" cursor-pointer w-[60%] rounded-lg border-2  hover:bg-red-600 duration-200 bg-red-500 px-4 py-2.5 font-medium border-red-500"
        >
          {mode}
        </button>

        {mode == "Sign In" && (
          <p onClick={handelClick} className=" cursor-pointer hover:underline">
            New to Netflix? Sign Up now
          </p>
        )}
        {mode == "Sign Up" && (
          <p onClick={handelClick} className="cursor-pointer hover:underline">
            Already have account? Sign In now
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
