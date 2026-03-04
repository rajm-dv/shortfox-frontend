import { Link } from "react-router-dom";

const AppLogoComponent = () => {
  return (
    <Link to={"/"}>
      <img className="h-12" src="./logo.png" alt="logo" />
    </Link>
  );
};

export default AppLogoComponent;
