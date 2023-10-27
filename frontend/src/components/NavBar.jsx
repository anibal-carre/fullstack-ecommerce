import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
const Navbar = () => {
  return (
    <header className="w-full max-w-[1800px] h-28 border px-5 flex items-center justify-between self-center text-zinc-900">
      <img src={logo} alt="logo" className="w-24 h-24 rounded-[50%]" />
      <nav className="hidden md:flex items-center w-full md:w-[500px] border">
        <ul className="w-full flex justify-around gap-[20px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
        </ul>
      </nav>
      <nav className="hidden md:flex items-center border">
        <ul className="flex gap-3">
          <li>Login</li>
          <li>Language</li>
          <li>Info</li>
        </ul>
      </nav>

      <span className="md:hidden">Menu</span>
    </header>
  );
};

export default Navbar;
