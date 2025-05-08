import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../Firebase/firebase";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setSuccess("Profile Updated successfully");
      setIsEditing(false);
    } catch (err) {
      console.error("Update error", err);
      setError("Failed to update Profile");
    }
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center my-10">
      <div className="p-5 rounded-2xl shadow-md w-full max-w-md bg-blue-200">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          ></img>
        )}
        <p className="text-center mb-6">
          <b>User Name:</b> {user.displayName}
        </p>
        <p className="text-center mb-6">
          <b>Email:</b> {user.email}
        </p>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-blue-600 rounded-2xl hover:bg-blue-700 py-2 text-white"
          >
            {" "}
            Edit Profile
          </button>
        )}

        {isEditing && (
          <form onSubmit={handleUpdate} className="space-y-5">
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-2xl bg-white"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-2 rounded-2xl bg-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700"
            >
              {" "}
              Save Changes
            </button>

            {success && <p className="text-green-600 text-center">{success}</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
