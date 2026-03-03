import { Link } from "react-router-dom";
import AppLogoComponent from "./AppLogoComponent";

const Navbar = () => {
  return (
    <nav className="py-6 px-20 flex justify-between items-center">
      <AppLogoComponent />
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
    </nav>
  );
};

export default Navbar;
