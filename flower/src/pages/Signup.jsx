import React from "react";
import "..//pages/Signup.css";
import img from "../images/Colorful Illustration Florist Logo.png";
const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verfiyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://642829d7161067a83b08563b.mockapi.io/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup sucess");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div className="signup-container">
      <div className="right">
        <img src={img} alt="" />
        <h3>Welcome Back!</h3>
        <h2>
          CELEBRATIONS <br />
          FAMILY OF BRANDS
        </h2>
      </div>
      <div className="left">
        <h1>Create Account</h1>
        <form onSubmit={verfiyform} className="signupform">
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, name: e.target.value })
            }
            required
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="input"
          />
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input"
          />
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            required
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="input"
          />
          <input type="checkbox" name="" id="check" style={{dispalay:"inline"}} /> 
          <p> Email me about special offers, new products and promotions.</p>
          <button className="submit">Create Account</button>
          <p>
            By continuing, you agree to our Terms of Use and Privacy Notice.
          </p>
          <label htmlFor="">Or sign in with</label>
          <div className="social">
            <button className="facebook">Sign In With Facebook</button>
            <button className="google">Sign In With Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
