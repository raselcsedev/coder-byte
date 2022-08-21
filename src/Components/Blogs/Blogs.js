import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import * as FaIcons from "react-icons/fa";

const Blogs = () => {
    const [user] = useAuthState(auth);

  return (
    <div className=" pt-20 h-full overflow-visible">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content lg:mx-20 pl-5">
        {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                          Open drawer
                         </label> */}
                         <label htmlFor='my-drawer-2' tabindex="1" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
            {/* <h2 className="text-2xl text-purple-500 font-bold lg:ml-5 lg:mt-2 ml-2">Welcome to our blogs site</h2> */}
          <Outlet></Outlet>
          
        </div>
        <div class="drawer-side sticky top-0">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <div>
          <div className="ml-12 mt-8">
            <h1 className="text-2xl font-extrabold">
              coder<span className="text-lime-600">A</span>ccess
            </h1>
            <h1 className="text-sm font-semibold">Develop your skills</h1>
            <div class="divider w-40"></div>
          </div>
          <ul class="menu md:mx-12  overflow-y-auto  w-40 bg-base-100 text-base-content space-y-2">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/homeblogs"><FaIcons.FaHome></FaIcons.FaHome>Home</Link>
            </li>
            <li>
              <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/notifications"><FaIcons.FaRegBell></FaIcons.FaRegBell>Notifications</Link>
            </li>
            <li>
              <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/create-blog"><FaIcons.FaRegEdit></FaIcons.FaRegEdit>Write Blogs</Link>
            </li>
            <li>
              <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/stories"><FaIcons.FaRegListAlt></FaIcons.FaRegListAlt>Stories</Link>
            </li>
            <li>
              <Link className="bg-[teal] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold rounded-lg" to="/blogs/helpcenter"><FaIcons.FaRegQuestionCircle></FaIcons.FaRegQuestionCircle>Help Center</Link>
            </li>
           
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
