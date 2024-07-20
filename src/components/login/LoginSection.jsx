import React from "react";
import { NavLink } from "react-router-dom";

const LoginSection = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-part">
          <h1 className="login-tag">Login</h1>
          <p>Enter email - password</p>
          <form>
            <input type="email" placeholder="E-mail" />
            <div className="password-container">
              <input type="password" placeholder="Password" />
              <NavLink to={'/forget'}>
              <p className='forget'>Forgot password?</p>
              </NavLink>
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <p className="create-account row">
            Don't have an account?{" "}
            <NavLink to={'/sign'}>
              <p>Create one</p>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
