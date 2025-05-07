import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../Firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(" ");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or Password");
      console.error("login error", err);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError("Google Sign In Failed");
      console.error("login error", err);
    }
  };

  return (
    <div className="flex justify-center items-center m-5 lg:my-20">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-5 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-center font-extrabold text-2xl my-5">Login Page</h2>
        {error && <p className="text-red-500 mb-5 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="bg-white w-full mb-5 p-3 rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white w-full mb-5 p-3 rounded-2xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 font-bold"
        >
          Sign In
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full hover:text-blue-700 font-bold mt-5"
        >
          Sign In With Google
        </button>

        <p className="text-center mt-2">
          Don't have an Account?{" "}
          <Link to="/register" className="text-blue-900 font-bold">
            Sign up here
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
