import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <Link to="/" className="text-xl font-bold">
        Qurbani Haat
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/animals">Animals</Link>

        {user && <Link to="/profile">My Profile</Link>}

        {!user ? (
          <>
            <Link to="/login" className="text-blue-600">
              Login
            </Link>

            <Link to="/register" className="text-green-600">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
