import { Link } from "react-router-dom";

import SideImageComponent from "../components/SideImageComponent";
import AppLogoComponent from "../components/AppLogoComponent";

const Register = () => {
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
            <div className="my-8">
              <p className="font-semibold my-2">Username</p>
              <input
                name="username"
                type="text"
                className="px-3 border border-slate-300 h-12 w-full"
              />
              <p className="font-semibold my-2 pt-3">Email</p>
              <input
                name="email"
                type="emain"
                className="px-3 border border-slate-300 h-12 w-full"
              />
              <p className="font-semibold my-2 pt-3">Password</p>
              <input
                name="password"
                type="password"
                className="px-3 border border-slate-300 h-12 w-full"
              />
              <p className="font-semibold my-2 pt-3">Confirm Password</p>
              <input
                name="password"
                type="password"
                className="px-3 border border-slate-300 h-12 w-full"
              />
              <button className="my-8 bg-blue-600 hover:bg-blue-700 w-full p-2 text-lg font-medium text-white rounded">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideImageComponent src="user1.svg" alt="Register User" />
    </div>
  );
};

export default Register;
