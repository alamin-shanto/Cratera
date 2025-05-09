import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BookDown } from "lucide-react";
import AuthContext from "../Context/AuthContext";

const activeNavLink = ({ isActive }) =>
  `font-bold ${
    isActive ? "bg-blue-500 text-white shadow" : "hover:bg-blue-100 text-white"
  }`;

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("log out failed", error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={activeNavLink}>
                Home
              </NavLink>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <NavLink to="/blogs" className={activeNavLink}>
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-4xl text-extrabold jacquard-24"
        >
          Cratera
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={activeNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <NavLink to="/blogs" className={activeNavLink}>
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>

      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar tooltip tooltip-left"
              data-tip={user.displayName || "User"}
            >
              <div className="w-10 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-blue-400 text-white rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="profile"> Profile</Link>
              </li>
              <li>
                <Link to="/subscribe">Subscriptions</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn m-1 bg-blue-400 rounded-2xl text-white"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
