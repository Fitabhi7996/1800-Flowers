import React from "react";
import "..//pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../Image/Colorful Illustration Florist Logo.png";
const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(
        `https://642829d7161067a83b08563b.mockapi.io/users`
      );
      let data = await usersData.json();
      for (let i = 0; i <= data.length - 1; i++) {
        if (
          loginUser.email === "admin@gmail.com" &&
          loginUser.password === "admin"
        ) {
          navigate("/admin");
          alert(`Welcome Back Admin`);
          return;
          
        } else if (
          loginUser.email === data[i].email &&
          loginUser.password === data[i].password
        ) {
          localStorage.setItem("User", data[i].name);
          alert(`Welcome Back ${data[i].name}`);
          navigate("/checkout");
          return;
        }
      }
      
    } catch (error) {
      console.log("error ", error);
      alert("Login Error");
    }
  };
  return (
    <div className="login-container">
      <div className="right">
        <img src={img} alt="" />
        <h3>Welcome Back!</h3>
        <h2>
          CELEBRATIONS <br />
          FAMILY OF BRANDS
        </h2>
      </div>
      <div className="left">
        <form onSubmit={verifyLogin} className="signinform">
          <h3>Sign In</h3>
          <p>
            Not registered?
            <Link to={`/login/signup`}>
              Create Account
            </Link>
          </p>
          <label htmlFor="">E-mail</label>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            required
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            required
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button className="submit">Sign In</button>
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

export default Login;
