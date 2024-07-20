import React from "react";

const SignSection = () => {
  return (
    <section className="sign">
      <div className="container">
        <div className="sign-part">
          <h1 className="sign-tag">Sign in</h1>
          <p>Please complete the information below:</p>
          <form>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="E-mail" />
            <div className="password-container">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">create my account</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignSection;
