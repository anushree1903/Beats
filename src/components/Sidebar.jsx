import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleMenu } from "../features/homeSlice";
const Sidebar = () => {
  const { menu } = useSelector((store) => store.home);
  const dispatch = useDispatch();

  return (
    <section
    
      className={`${
        menu ? "right-0" : "hidden"
      } absolute h-fit rounded-bl-2xl duration-500 z-10 bg-gray-800 sm:z-0 sm:flex sm:relative sm:left-0 sm:rounded-bl-none sm:translate-x-0 sm: px-5 py-3  w-48 md:w-56 sm:h-[calc(100vh-5rem)] flex-col gap-y-5 sm:pb-24 overflow-y-scroll border-r-2  border-gray-700 sm:border-b-0 scrollbar`}
    >
      <div
        onClick={() => {
          dispatch(handleMenu("close"));
        }}
      >
        <div className="mb-3 text-gray-300">
          <h3 className="text-lg md:text-lg py-2 font-semibold text-gray-300">Browse</h3>
          <hr ></hr>
          <div className="flex flex-col gap-y-2 mt-2  md:text-md capitalize font-sans ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              New Releases
            </NavLink>
            <NavLink
              to="top_charts"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              Top Charts
            </NavLink>
            <NavLink
              to="top_playlists"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              Top Playlists
            </NavLink>
            <NavLink
              to="top_albums"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              Top Albums
            </NavLink>
          </div>
        </div>
        <div className="text-gray-300 ">
          <h3 className="text-lg md:text-lg py-2 font-semibold text-gray-300">My Library</h3>
          <hr></hr>
          <div className="flex flex-col gap-y-2 md:text-md capitalize font-sans mt-2 ">
            <NavLink 
              to="history"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              history
            </NavLink>
            <NavLink
              to="songs"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              songs
            </NavLink>
            <NavLink
              to="albums"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              albums
            </NavLink>
            <NavLink
              to="playlists"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 scale-105 translate-x-2"
                  : "duration-300 hover:translate-x-1"
              }
            >
              playlists
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* <div>
        <h3 className="text-xl py-2 font-semibold">My Playlists</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="library/my_playlists">podcasts</Link>
          <h3>my playlists</h3>
        </div>
      </div> */}
     
    </section>
  );
};
export default Sidebar;
