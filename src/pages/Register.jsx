import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      toast.error("Registration Failed");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Login Failed");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          required
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="border p-2 w-full mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          required
        />

        <button className="btn btn-primary w-full">Register</button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full mt-3"
      >
        Google Login
      </button>

      <p className="mt-4">
        Already have an account?
        <Link to="/login" className="text-blue-500 ml-2">
          Login
        </Link>
      </p>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Register;
