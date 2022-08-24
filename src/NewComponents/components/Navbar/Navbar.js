import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contests">Emulate</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/explore">IDE</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </>
  );

  const blogs = (
    <>
      <li>
        <Link to="/blogs">
          <button class="py-2 px-4 border rounded border-blue-600 text-xs text-sky-600 font-bold hover:bg-sky-600 hover:text-white">
            Blogs
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {/* <div class="navbar  bg-slate-700">
        <div className="ml-auto text-white mr-4">
          <Link to="/">Sign In</Link>
        </div>
      </div> */}

      <div className="navbar bg-slate-900 fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-2xl font-extrabold normal-case">
            coder<span className="text-lime-500">A</span>ccess
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-white menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="text-white menu menu-horizontal p-0">{blogs}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
