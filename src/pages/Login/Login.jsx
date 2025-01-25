import "./Login.css";
import { useState } from "react";
import assets from "../../assets/assets.js";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <>
      <div className="login">
        <img src={assets.logo_big} alt="logo" className="logo" />
        <form className="login-form">
          <h2>{currentState}</h2>
          {currentState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Username"
              required
              className="form-input"
            />
          ) : null}
          <input
            type="email"
            placeholder="Email"
            required
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="form-input"
          />
          <button type="submit">{currentState}</button>

          {currentState === "Sign Up" ? (
            <>
              <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
              </div>
            </>
          ) : null}

          <div className="login-forgot">
            {currentState === "Sign Up" ? (
              <p className="login-toggle">
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Login")}>Click here</span>
              </p>
            ) : (
              <p className="login-toggle">
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
