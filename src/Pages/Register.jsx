import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/firebase";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredentials.user, {
        displayName: `${firstname} ${lastname}`,
      });
      navigate("/");
    } catch (error) {
      console.error("SIgnup error", error);
      setError("Signup failed try again");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Google Sign up error", error);
      setError("Google Sign Up Failed. Try Again");
    }
  };
  return (
    <div className="flex justify-center items-center m-5 lg:my-20">
      <form
        onSubmit={handleSignup}
        className="bg-blue-200 p-5 rounded-2xl shadow-md w-full max-w-sm"
      >
        {error && <p className="text-red-500 mb-5 text-center">{error}</p>}
        <h2 className="text-center font-extrabold text-2xl my-5">Sign up</h2>
        <input
          type="text"
          placeholder="First Name"
          className="bg-white w-full mb-5 p-3 rounded-2xl"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-white w-full mb-5 p-3 rounded-2xl"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
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
          Sign Up
        </button>
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full hover:text-blue-700 font-bold mt-5"
        >
          Sign up With Google
        </button>
        <p className="text-center mt-2">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-900 font-bold">
            Log in here
          </Link>{" "}
        </p>
        <p></p>
      </form>
    </div>
  );
};

export default Register;
