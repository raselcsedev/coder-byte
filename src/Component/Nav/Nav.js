import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
  const menu = <>
        <Link className='mx-12' to="/">Home</Link>
        <Link  className='mx-12' to="/preparation">prepartion</Link>
  </>
  return (
    <div>
      <div class="navbar bg-slate-600">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;