import React from "react";
import Header from "./Header";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <>
      <Header />

      <div className=" fixed brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/NP-en-20250519-TRIFECTA-perspective_5c5173f6-a3f5-44a2-b36f-7a4f0e0665d0_large.jpg"
          alt="background"
        />
      </div>
            <LoginForm />
    </>
  );
};

export default Login;
