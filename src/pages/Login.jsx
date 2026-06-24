import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Login Failed");
      });
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
      <h2 className="text-3xl font-bold mb-5">Login</h2>

      <form onSubmit={handleLogin}>
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

        <button className="btn btn-primary w-full">Login</button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full mt-3"
      >
        Google Login
      </button>

      <p className="mt-4">
        Don't have an account?
        <Link to="/register" className="text-blue-500 ml-2">
          Register
        </Link>
      </p>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Login;
