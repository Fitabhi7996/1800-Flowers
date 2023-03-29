import React from "react";
import "..//pages/Login.css";
const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(`https://api-ak.vercel.app/users`);
      let data = await usersData.json();
      for (let i = 0; i <= data.length - 1; i++) {
        if (
          loginUser.email === data[i].email &&
          loginUser.password === data[i].password
        ) {
          alert(`Welcome Back ${data[i].name}`);
          return;
        }
      }
      alert("Login Error");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div className="login-container">
      <div className="right"></div>
      <div className="left">
        {" "}
        <form onSubmit={verifyLogin} className="form">
          <h3>Sign In</h3>
          <p>Not registered? Create Account</p>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            required
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            required
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button>Submit now</button>
          <p>
            By continuing, you agree to our Terms of Use and Privacy Notice.
          </p>
          <label htmlFor="">Or sign in with</label>
          <button>Sign In With Facebook</button>
          <button>Sign In With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
