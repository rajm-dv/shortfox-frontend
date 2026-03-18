import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SideImageComponent from "../components/SideImageComponent";
import AppLogoComponent from "../components/AppLogoComponent";
import useAuthStore from "../store/auth";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, isAuthenticated, error } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Enter credientials");
      return;
    }
    await login({ email: email.trim(), password: password.trim() });
    if (error) toast.error(error);
  };

  return (
    <div className="min-h-screen grid grid-cols-12 text-black/80">
      <div className="col-span-7 p-10">
        <div className="px-10">
          <AppLogoComponent />
        </div>
        <div className="my-10 flex justify-center">
          <div className="">
            <h1 className="text-3xl font-semibold">Log in and start sharing</h1>
            <p className="my-2">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-blue-500 hover:underline hover:text-blue-600"
              >
                Register
              </Link>
            </p>
            <form className="my-8" onSubmit={handleLogin}>
              <p className="font-semibold my-2">Email</p>
              <input
                name="email"
                type="emain"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <p className="font-semibold my-2 pt-3">Password</p>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 border border-slate-300 h-12 w-full"
                required
              />
              <button
                type="submit"
                disabled={isLoading || !email || !password}
                className="my-8 bg-blue-600 hover:bg-blue-700 w-full p-2 text-lg font-medium text-white rounded disabled:bg-blue-400"
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <SideImageComponent src="user.svg" alt="Login User" />
    </div>
  );
};

export default Login;
