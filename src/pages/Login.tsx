import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 text-black/80">
      <div className="col-span-7 p-10">
        <div>
          <img className="h-12 mx-10" src="./logo.png" alt="logo" />
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
            <div className="my-8">
              <p className="font-semibold my-2">Email</p>
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
              <button className="my-8 bg-blue-600 hover:bg-blue-700 w-full p-2 text-lg font-medium text-white rounded">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 flex flex-col justify-center items-center bg-slate-100">
        <img src="./user.svg" alt="user" />
        <p className="font-semibold my-5">
          Connect Shortfox to the tools you use every day
        </p>
      </div>
    </div>
  );
};

export default Login;
