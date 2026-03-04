import { Github, Linkedin, Twitter } from "lucide-react";
import AppLogoComponent from "./AppLogoComponent";

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center py-10">
      <div>
        <AppLogoComponent />
      </div>
      <div>
        <p className="text-lg font-medium">Made with ❤️ Shortfox</p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li className="bg-white hover:bg-slate-200 cursor-pointer p-2 rounded-full">
            <a href="#">
              <Github />
            </a>
          </li>
          <li className="bg-white hover:bg-slate-200 cursor-pointer p-2 rounded-full">
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li className="bg-white hover:bg-slate-200 cursor-pointer p-2 rounded-full">
            <a href="#">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
