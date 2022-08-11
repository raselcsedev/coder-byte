import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="sm:mx-24 lg:mx-32 pt-20">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
        {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                          Open drawer
                         </label> */}
                         <label htmlFor='my-drawer-2' tabindex="1" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
            <h2 className="text-2xl text-purple-500 font-bold lg:ml-5 lg:mt-2 ml-2">Welcome to your Dashboard</h2>
          <Outlet></Outlet>
          
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <Link to="/profile">
              <li>
                <img className="w-14 border border-[brown]  rounded-full" src="https://i.stack.imgur.com/frlIf.png" alt=""/>
              </li>
            </Link>
            <Link to="/profile">
              <li className="font-semibold text-[teal] mt-2 mb-5 text-lg hover:text-[purple]  word-break">{user.displayName}</li>
            </Link>
            <li>
              <Link to="/dashboard">My Courses</Link>
            </li>
            <li>
              <Link to="/dashboard/addcourse">Add Course</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
