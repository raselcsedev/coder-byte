import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import * as FaIcons from "react-icons/fa";

const Blogs = () => {
  const [user] = useAuthState(auth);

  return (
    <div className=" pt-20  overflow-x-auto">
      <label htmlFor='my-drawer-2' tabindex="1" class="btn btn-ghost lg:hidden text-[brown]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <div class="drawer drawer-mobile  ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">

          <Outlet></Outlet>

        </div>
        <div class="drawer-side  ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <div className="w-[50vw] md:w-60 bg-white">
            
            <ul class="menu md:ml-12 mt-10 overflow-y-auto  w-40 bg-base-100 text-base-content space-y-2">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs"><FaIcons.FaHome></FaIcons.FaHome>Surroundings</Link>
              </li>

              <li>
                <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/blog-editor"><FaIcons.FaRegEdit></FaIcons.FaRegEdit>Write Blogs</Link>
              </li>
              <li>
                <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/stories"><FaIcons.FaRegListAlt></FaIcons.FaRegListAlt>Your Stories</Link>
              </li>


            </ul>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Blogs;
