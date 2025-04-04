import React, { useState } from "react";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.warn("Please fill form data", {
      position: "bottom-right",
    });
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button className="signup">Sign In</button>
          <ToastContainer />
        </form>
      </div>

      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">
            <img
              src={avatar.url || "./images.png"}
              alt=""
              className="avatarpic"
            />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            className="displayProp"
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="Email" />
          <input type="password" placeholder="password" name="password" />
          <button className="signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
