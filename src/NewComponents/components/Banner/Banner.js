import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import './Banner.css';
import Discussion from "../../../Component/Discussion/Discussion";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Banner = () => {
  const bounceTransition = {
    y: {
      duration:0.9,
      yoyo:Infinity,
      ease: "easeOut"
    }
  }
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-900 ">
      <div class="hero pb-16 pt-40 ">
      <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1650 320"><path fill="#1e293b" fill-opacity="1" d="M0,320L720,32L1440,0L1440,0L720,0L0,0Z"></path></svg>
        <div class="hero-content flex-col lg:flex-row lg:space-x-40">
          <motion.img
          transition={bounceTransition}
          animate = {{
            y: ["2%", "-2%"]
          }}
          
          src="https://i.ibb.co/YZx3Stg/My-project-1.png" class="md:max-w-lg max-w-xs rounded-lg shadow-2xl" alt=""></motion.img>
          <div>
            <h1 class="text-5xl font-bold text-white">Best Platform to solve <br />competitive <span className="text-red-400">programming</span></h1>
            <p class="py-6 text-white">
            coderAccess is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
            </p>
            
            {
              !user&& <Link to="/sign-up">
              <button className="bg-white rounded-md flex py-3 px-4 space-x-2 items-center">
<img src="https://www.100ms.live/_next/image?url=%2Fassets%2Fhero%2Fgoogle.svg&w=32&q=75" alt="" /> <span className="font-bold text-lg">Try for free</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

              </button>
            </Link>
            }

          </div>
        </div>
      </div>
      {/* <Discussion></Discussion> */}
    </div>
  );
};

export default Banner;
