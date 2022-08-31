import { faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import video from '../../../code-video.mp4';
import Discussion from "../../../Component/Discussion/Discussion";

const Explore = () => {
  return (
    <div className="">
      <div class="hero">
      <svg className="mb-28 hidden lg:block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fill-opacity="1" d="M0,32L1440,192L1440,0L0,0Z"></path></svg>
        <div class="hero-content flex-col lg:flex-row-reverse">
        <video className='rounded-xl border-2 border-slate-400 h-6/12 w-6/12 lg:ml-24 hidden lg:block' src={video} autoPlay loop muted></video>
          <div className="">
            <h1 class="text-3xl font-bold text-teal-600 lg:flex justify-end items-center mb-6">Start Exploring<span className="ml-4 border-2 border-green-500 rounded-full p-2 hidden lg:block"><FontAwesomeIcon icon={faGraduationCap} /></span></h1>
            <p class="lg:flex justify-end mb-2 text-gray-500">
            Explore is a well-organized tool that helps you get the most out of 
            </p>
            <p class="lg:flex justify-end mb-2 text-gray-500">coderAccess by providing structure to guide your progress towards the next</p>
             <p class="lg:flex justify-end mb-4 text-gray-500">step in your programming career</p>
            <Link to="/"><h2 className="lg:flex justify-end text-sky-500">Get Started <span className="ml-2"><FontAwesomeIcon icon={faArrowRight} /></span></h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
