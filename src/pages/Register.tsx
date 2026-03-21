import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SideImageComponent from "../components/SideImageComponent";
import AppLogoComponent from "../components/AppLogoComponent";
import useAuthStore from "../store/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const { register, isLoading, isAuthenticated, error } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password || !cPassword) {
      toast.error("Enter credientials");
      return;
    }

    if (password !== cPassword) {
      toast.error("Password should be same");
      return;
    }
    const { success } = await register({
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: cPassword.trim(),
    });
    if (success) toast.success("Register successfully");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen grid grid-cols-12 text-black/80">
      <div className="col-span-7 p-10">
        <div className="px-10">
          <AppLogoComponent />
        </div>
        <div className="my-10 flex justify-center">
          <div className="">
            <h1 className="text-3xl font-semibold">
              Register and start sharing
            </h1>
            <p className="my-2">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-500 hover:underline hover:text-blue-600"
              >
                Log in
              </Link>
            </p>
            <form onSubmit={handleRegister} className="my-8">
              <p className="font-semibold my-2">Username</p>
              <input
                name="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <p className="font-semibold my-2 pt-3">Email</p>
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <p className="font-semibold my-2 pt-3">Password</p>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <p className="font-semibold my-2 pt-3">Confirm Password</p>
              <input
                name="password"
                type="password"
                onChange={(e) => setCPassword(e.target.value)}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <button
                disabled={
                  isLoading || !username || !email || !password || !cPassword
                }
                type="submit"
                className="my-8 bg-blue-600 hover:bg-blue-700 w-full p-2 text-lg font-medium text-white rounded disabled:bg-blue-400"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <SideImageComponent src="user1.svg" alt="Register User" />
    </div>
  );
};

export default Register;
