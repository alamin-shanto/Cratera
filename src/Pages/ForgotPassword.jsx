import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../Firebase/firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "Password Reset mail sent to the gmail. Redirecting to gmail..."
      );
      setTimeout(() => {
        window.location.href = "https://mail.google.com/";
      }, 2000);
    } catch (error) {
      console.error("Error Sending password reset email", error);
      setError("Error Sending password reset email");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 px-5">
      <form
        onSubmit={handleReset}
        className="bg-[var(--n)] p-5 rounded-2xl shadow-2xl w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-5 text-center">Forgot Password</h2>
        {message && (
          <p className="text-green-600 mb-2 text-center">{message}</p>
        )}
        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-5 mb-4 rounded-2xl border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 font-bold"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
