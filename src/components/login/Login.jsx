import React, { useState } from "react";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [error, setError] = useState("");

  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loadingSignup, setLoadingSignup] = useState(false);
  const [loadingSignin, setLoadingSignin] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingSignin(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      const v = await signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoadingSignin(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoadingSignup(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) throw new Error(`HTTP error: ${res}`);

      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("Account Created!you can login now!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoadingSignup(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button className="signup" disabled={loadingSignin}>
            {loadingSignin ? "Loading" : "Sign In"}
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
          />
        </form>
      </div>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
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
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button className="signup" disabled={loadingSignup}>
            {loadingSignup ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
