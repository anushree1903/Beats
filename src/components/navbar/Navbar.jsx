import { Link } from "react-router-dom";
import { FaBars, HiXMark } from "../../utils/icons";
import Search from "./Search";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../../features/homeSlice";

const Navbar = () => {
  const { menu } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  return (
    <div className="relative h-20 flex items-center justify-between px-2   bg-gray-800">
      <div className="flex items-center gap-x-3 md:gap-x-9">
        <div className="px-3 shrink-0">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[70px] sm:w-24 md:w-28" />
          </Link>
        </div>
        <Link
          to="/"
          className="font-mono hidden sm:text-lg md:hidden hover:border-b border-green-400 duration-150"
        >
          Home
        </Link>
      </div>
      <Search />
      <div className="gap-6 justify-center mx-16 hidden md:flex font-mono">
        <Link
          to="/"
          className="font-mono text-lg hidden md:flex hover:text-gray-300 duration-150 text-green-400"
        >
          Home
        </Link>
      </div>
      <div className="mr-4 sm:hidden ">
        {!menu ? (
          <FaBars size="20px"className="text-gray-300" onClick={() => dispatch(handleMenu("open"))} />
        ) : (
          <HiXMark size="20px" className="scale-125 text-gray-300 " onClick={() => dispatch(handleMenu("close"))} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
