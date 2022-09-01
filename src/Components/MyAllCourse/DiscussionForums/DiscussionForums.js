import React from "react";
import forums from "../../../Images/discussion.svg";
import forum from "../../../Images/blacrock.jpg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faReply } from "@fortawesome/free-solid-svg-icons";
const DiscussionForums = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const url = `https://coder-access.herokuapp.com/${email}`;

  const fetcher = async () => {
    const data = axios.get(url);

    return (await data).data;
  };

  let { data: profile, isLoading } = useQuery(["profile", email], () => fetcher());
  return (
    <div className="pt-16 mb-12">
      <div className="lg:mx-12 mx-4 grid grid-cols-12">
        <div className="col-span-4 flex justify-center">
          <img
            className="h-48 w-72 hidden lg:block"
            src="https://thumbs.dreamstime.com/b/question-answer-icon-comic-style-dialog-speech-bubble-cartoon-vector-illustration-white-isolated-background-forum-chat-225151967.jpg"
            alt=""
          />
        </div>
        <div className="col-span-4">
          <h2 className="text-4xl text-center font-semibold flex justify-center mt-4 lg:mt-8">coderAccess Forums</h2>
          <p className="font-mono mt-4 flex justify-center text-sm">
            Welcome to the friendliest place for anyone learning to code!
          </p>

          <div className="lg:flex justify-center items-center space-x-12 mt-6">
            <Link to="/">
              <p className="text-blue-600 text-xs font-bold underline">New User Guide</p>
            </Link>
            <Link to="/contactus">
              <p className="text-blue-600 text-xs font-bold underline">coderAccess Help</p>
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered" />
                <button class="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <img
            className="h-48 w-72 hidden lg:block"
            src="https://previews.123rf.com/images/feelisgood/feelisgood1709/feelisgood170900838/85757474-flat-speech-bubble-icon-chat-room-sign-forum-internet-button-quick-and-easy-recolorable-shape-isolat.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-16 lg:mx-48 mx-4">
        <h2 className="text-2xl font-semibold">Arrow syntax functions in React</h2>
        <div className="flex items-center space-x-4 mt-2">
          <Link to="/contactus">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500"></div>
              <p className="text-xs">Get Help</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500"></div>
              <p className="text-xs">React.js</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-gray-400"></div>
              <p className="text-xs">advanced-react</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:ml-48 ml-4  mt-4">
        <div class="card w-3/5 bg-base-100 shadow-md">
          <div class="card-body">
            <div className="flex items-center">
              <img
                className="w-12 border border-[blue] rounded-full"
                src={profile?.profilePhoto ? profile?.profilePhoto : "https://i.stack.imgur.com/frlIf.png"}
                alt=""
              />
              <h2 className="text-blue-500 ml-3">{user?.displayName}</h2>
              <p className="flex justify-end text-gray-500">Sep 2</p>
            </div>
            <div className="lg:ml-8">
              <h2>Hello there,</h2>
              <h2 className="text-justify text-sm text-black mt-4">
                Are you familiar with the “crbug/1173575, non-JS module files deprecated.” error in react? Why does it show up?
                How to I resolve the error? I have tried both deleting the launch.json file and changing the url in the
                launch.json file from 8080 to 3000, both approaches did not work. Please help
              </h2>
            </div>

            <div className="flex items-center justify-end space-x-4 mt-4">
              <h2 className="text-gray-600">
                <FontAwesomeIcon icon={faHeart} />
              </h2>
              <Link to="/">
                <h2 className="text-gray-600">
                  <FontAwesomeIcon icon={faLink} />
                </h2>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mr-6">
            <button class="px-2 py-1 border border-blue-600 text-white bg-blue-700 text-xs font-semibold mt-5 mb-5">
              <span>
                <FontAwesomeIcon icon={faReply} />
              </span>{" "}
              Reply
            </button>
          </div>
        </div>
      </div>

      <div className="lg:ml-48 ml-4 mt-20">
        <h2 className="text-lg font-bold">Suggested Topics</h2>
        <div className="w-4/5">
        <div className="flex items-center mt-2 mb-2">
            <div>
                <p className="text-sm ml-2">Topic</p>
            </div>
            <div className="ml-auto mr-4">
            <div className="flex items-center lg:space-x-6 space-x-4">
                <div>
                    <p>Replies</p>
                </div>
                <div>
                   <p>Views</p>
                </div>
                <div>
                <p>Activity</p>
                </div>
            </div>
            </div>
        </div>

        <div className="border-2 border-black py-4 px-2">
        <div className="flex items-center">
            <div>
                <p className="text-lg text-black">Jammming - this.state.searchResults is not rendering</p>
                <div className="flex items-center space-x-4 mt-1">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500"></div>
              <p className="text-xs">React.js</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-gray-500"></div>
              <p className="text-xs text-gray-600">general</p>
            </div>
          </Link>
        </div>
            </div>
            <div className="ml-auto">
            <div className="flex items-center lg:space-x-12 space-x-8">
                <div>
                    <p>3</p>
                </div>
                <div>
                   <p>295</p>
                </div>
                <div>
                <p>Sep 21</p>
                </div>
            </div>
            </div>
        </div>
        </div>


        <div className="border-2 border-black py-4 px-2 my-2">
        <div className="flex items-center">
            <div>
                <p className="text-lg text-black">Ravenous Part 2 Compile Error</p>
                <div className="flex items-center space-x-4 mt-1">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500"></div>
              <p className="text-xs">React.js</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-gray-500"></div>
              <p className="text-xs text-gray-600">general</p>
            </div>
          </Link>
        </div>
            </div>
            <div className="ml-auto">
            <div className="flex items-center lg:space-x-12 space-x-8">
                <div>
                    <p>1</p>
                </div>
                <div>
                   <p>186</p>
                </div>
                <div>
                <p>Aug 27</p>
                </div>
            </div>
            </div>
        </div>
        </div>


        <div className="border-2 border-black py-4 px-2">
        <div className="flex items-center">
            <div>
                <p className="text-lg text-black">Video Player nomenclature confusion</p>
                <div className="flex items-center space-x-4 mt-1">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500"></div>
              <p className="text-xs">React.js</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-gray-500"></div>
              <p className="text-xs text-gray-600">general</p>
            </div>
          </Link>
        </div>
            </div>
            <div className="ml-auto">
            <div className="flex items-center lg:space-x-12 space-x-8">
                <div>
                    <p>2</p>
                </div>
                <div>
                   <p>246</p>
                </div>
                <div>
                <p>Nov 17</p>
                </div>
            </div>
            </div>
        </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default DiscussionForums;
