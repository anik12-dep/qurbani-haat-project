import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-md mx-auto p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold">My Profile</h2>

      <img
        src={user?.photoURL}
        alt="profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 object-cover"
      />

      <p className="text-lg font-semibold">
        Name: {user?.displayName || "No Name"}
      </p>

      <p className="text-gray-600">Email: {user?.email || "No Email"}</p>

      <Link
        to="/update-profile"
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block"
      >
        Update Profile
      </Link>
    </div>
  );
};

export default Profile;
