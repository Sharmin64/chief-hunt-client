import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../Pages/Provider/AuthProvider";
//import {FaUserCircle} from "react-icons/fa";
import navfood from "../../assets/navfood.png";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-gray-400 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <h2 className="btn btn-ghost normal-case text-5xl text-white">
          Food Valley
        </h2>
        <img className="inline" src={navfood} alt="" />
      </div>
      <div className="navbar-center hidden  items-center lg:flex">
        <ul className="menu menu-horizontal items-center justify-around px-1">
          <NavLink
            className={({isActive}) => (isActive ? "text-[#848AFE]" : "")}
            to="/about"
          >
            <li>About</li>
          </NavLink>
          <li tabIndex={0}>
            <NavLink
              className={({isActive}) => (isActive ? "text-[#848AFE]" : "")}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className={({isActive}) => (isActive ? "text-[#848AFE]" : "")}
              to="/blog"
            >
              <li>Blog</li>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span>
          {user ? (
            <>
              <button
                className="btn border-4 border-hidden divide-neutral-50 rounded-xl px-8 py-4 mx-4 outline-slate-100 shadow-xl text-lg"
                onClick={handleLogOut}
              >
                Logout
              </button>
              <div>
                <img
                  className=" rounded-full w-10"
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn border-4 border-hidden divide-neutral-50 rounded-full mx-4 outline-slate-100 shadow-xl text-2xl">
                Login
              </button>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
