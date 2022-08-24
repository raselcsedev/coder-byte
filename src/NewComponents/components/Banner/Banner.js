import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import './Banner.css';
const Banner = () => {
  const bounceTransition = {
    y: {
      duration:0.9,
      yoyo:Infinity,
      ease: "easeOut"
    }
  }
  return (
    <div>
      <div class="hero bg-slate-900 pb-16 pt-40">
      <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1650 320"><path fill="#1e293b" fill-opacity="1" d="M0,320L720,32L1440,0L1440,0L720,0L0,0Z"></path></svg>
        <div class="hero-content flex-col lg:flex-row lg:space-x-40">
          <motion.img
          transition={bounceTransition}
          animate = {{
            y: ["2%", "-2%"]
          }}
          
          src="https://img.freepik.com/premium-vector/programming-software-flat-design-concept-illustration-people-characters_9209-5424.jpg?w=2000" class="max-w-sm rounded-lg shadow-2xl" alt=""></motion.img>
          <div>
            <h1 class="text-5xl font-bold text-white">Best Platform to solve <br />competitive <span className="text-red-400">programming</span></h1>
            <p class="py-6 text-white">
            coderAccess is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
            </p>
            <Link to="/sign-up">
          <button class="py-2 px-3 border rounded-full border-blue-600 text-sm text-sky-600 font-bold hover:bg-sky-600 hover:text-white">
            Create Account<span className="ml-2"><FontAwesomeIcon icon={faAngleRight} /></span>
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
