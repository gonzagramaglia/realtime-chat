import "./Login.css";
import { useState } from "react";
import assets from "../../assets/assets.js";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      signup(username, email, password);
      console.log(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <>
      <div className="login">
        <img src={assets.logo_big} alt="logo" className="logo" />
        <form onSubmit={onSubmitHandler} className="login-form">
          <h2>{currentState}</h2>
          {currentState === "Sign Up" ? (
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
              required
              className="form-input"
            />
          ) : null}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="form-input"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="form-input"
          />
          <button type="submit">{currentState}</button>

          {currentState === "Sign Up" ? (
            <>
              <div className="login-term">
                <input type="checkbox" required />
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
