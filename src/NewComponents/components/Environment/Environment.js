import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import environment from "../../../Images/environment.png";

const Environment = () => {
    const bounceTransition = {
        y: {
          duration:0.9,
          yoyo:Infinity,
          ease: "easeOut"
        }
      }
  return (
    <div className="lg:mb-24 mb-8 ">
        <div className="h-px mx-12 lg:mx-32 bg-black lg:mt-32 hidden lg:block"></div>
        <p className="hidden lg:block">
        <Link to="/"><span className="flex justify-end mr-40 mt-2 mb-8 lg:mb-16 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
      /></span></Link>
      </p>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <motion.img
          transition={bounceTransition}
          animate = {{
            y: ["1%", "-1%"]
          }}
          
          src={environment} class="max-w-xs md:max-w-xl rounded-lg shadow-2xl lg:ml-24 shadow-2xl shadow-blue-500/50" alt=""/>
          <div className="max-w-[100vw]">
            <h1 class="text-3xl font-semibold">The Perfect Practice Environment.</h1>
            <p class="py-6">
            In an ideal world, you'd prepare for coding interviews by writing out <br />solutions to problems in your language of choice, getting some hints if <br />necessary, running your code against test cases, and looking at solutions <br />when done. <br /><br />We've turned that ideal world into the real world. Pick a language. Read the <br />prompt. Write your solution. Run your code. Get some hints. Run your code <br />again. Check the output. Pass the tests. View our solution. <br />It's time to develop your skills.
              
            </p>
            <p><Link to="/explore">
            <button class="py-2 px-6 border rounded-md border-blue-600 text-sky-600 font-semibold hover:bg-sky-600 hover:text-white">Try Our Workspace</button></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
