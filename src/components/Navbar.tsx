import { Link } from "react-router-dom";
import AppLogoComponent from "./AppLogoComponent";
import useAuthStore from "../store/auth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="py-6 flex justify-between items-center">
      <AppLogoComponent />
      {isAuthenticated ? (
        <button
          className="bg-red-500 py-2 px-3 rounded text-white hover:bg-red-600 font-medium"
          onClick={() => logout()}
        >
          Log out
        </button>
      ) : (
        <div className="space-x-4">
          <Link
            to={"/login"}
            className="p-2 rounded hover:bg-slate-100 font-medium"
          >
            Log in
          </Link>
          <Link
            to={"/register"}
            className="bg-blue-500 p-2 rounded hover:bg-blue-600 font-medium text-white"
          >
            Register free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
