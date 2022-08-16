import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';


const Dashboard = () => {
  const [user] = useAuthState(auth);



  const email = user?.email

  const url = `http://localhost:5000/profiles/${email}`

  const fetcher = async () => {
    const data = axios.get(url)
    // console.log('axios', (await data).data);

    return (await data).data

    //also could be used[axios retun without destructuring]
    // return data
  }

  let { data: profile, isLoading } = useQuery(["profile", email], () => fetcher())
  return (
    <div className="sm:mx-24 lg:mx-32 pt-20 px-4">
      <label htmlFor='my-drawer-2' tabindex="1" class="btn btn-ghost lg:hidden text-[brown]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">

          <h2 className="text-2xl text-[brown] font-bold ">Welcome to your Dashboard</h2>
          <Outlet></Outlet>

        </div>
        <div class="drawer-side drop-shadow-lg">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu md:mx-8  overflow-y-auto md:w-60 w-40 bg-base-100 text-base-content space-y-1">
            {/* <!-- Sidebar content here --> */}
            <Link to="/profile">

              <li className="md:mx-10 pr-4 mx-auto mx-4 md:mt-8">
                <img className='md:w-60 w-24  mx-4 border border-[brown]  rounded-full'
                  src={profile?.profilePhoto ? profile?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"} />

              </li>
            </Link>
            <Link to="/profile">
              <li className="font-semibold text-[black] md:mx-10 mx-4 mt-2 mb-5 text-lg hover:text-[brown]  word-break">
                {profile?.displayName}
                <button className="btn btn-xs bg-[brown] text-white  pt-2"> View Profile</button>
              </li>
            </Link>
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard">All Courses </Link>
            </li>
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/addcourse">Add Course</Link>
            </li>
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/all-users">Users List</Link>
            </li>
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/publish-Challenge">Publish A Challenge</Link>
            </li>
            {/* <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/publish-Challenge">All Challenges</Link>
            </li> */}
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/add-skill-test">Add A Skill-Test</Link>
            </li>
            <li>
              <Link className="bg-[brown] text-white active:text-[brown] active:bg-[#e6a1a1] font-semibold" to="/dashboard/all-skill-tests">All Skill-Tests</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
