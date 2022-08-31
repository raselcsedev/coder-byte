import React from "react";
import { Link } from "react-router-dom";
import "./DashbordMain.css";
import { motion } from "framer-motion"
const DashbordMain = () => {
  return (
    <div className="DashbordMainContainer w-[80%] mx-auto pb-36">
      <h1 className="font-bold text-5xl mt-36 mb-20 text-center">Your Preparation</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.section 
        initial={{x:-100}} 
        whileInView={{x:0}}
        transition={{duration:1}}
         className="">
          <div className="rounded-lg  lg:w-6/6  border-solid border-4 p-5 lg:p-7 shadow-2xl ">
            <p className="text-[#8e9494]">PREPARATION KITS</p>
            <h1 className="font-bold text-3xl my-3">Interview preparation Kit</h1>
            <p className="text-[#757979]">
              {" "}
              <small>
                {" "}
                Get interview ready for top companies by solving
an interview preparation kit{" "}
              </small>
            </p>
            <Link to="/preparation">
              <button className="btn my-2">Explore Kits</button>
            </Link>
          </div>
        </motion.section>
        <motion.section 
        initial={{x:100}} 
        whileInView={{x:0}}
        transition={{duration:1}}
         className="">
          <div className="rounded-lg  lg:w-6/6  border-solid border-4 p-5 lg:p-7 shadow-2xl ">
            <p className="text-[#8e9494]">PREPARATION KITS</p>
            <h1 className="font-bold text-3xl my-3">Spacial preparation Kit </h1>
            <p className="text-[#757979]">
              {" "}
              <small>
                {" "}
                 coderAccess offers a variety of skills, tracks and tutorials for you to learn and improve.{" "}
              </small>
            </p>
            <Link to="/preparation">
              <button className="btn my-2">Explore Kits</button>
            </Link>
          </div>
        </motion.section>
      </div>

      <section className="mt-20">
        <h1 className="mb-10 mt-36 font-bold text-5xl text-center ">Certification</h1>
        <section className="md:flex flex-row">
          <motion.div 
          initial={{x:-100}} 
        whileInView={{x:0}}
        transition={{duration:1}}>
            <div class="card  w-[100%] md:w-96 bg-white border text-neutral-content shadow-2xl">
              <div class="card-body">
                <h2 class="card-title text-black text-2xl">Problem Solving (Basic)</h2>
                <h1 className="text-[#757979] mb-2">Increase Your programing skill by contest</h1>
                <Link to="getcertified">
                  <button class="py-2 px-4 border rounded border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">
                    Get Certified
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
          initial={{y:100}} 
        whileInView={{y:0}}
        transition={{duration:1}}>
            <div class="card w-[100%] md:w-96  my-4 md:my-0 md:mx-4 bg-white border text-neutral-content shadow-2xl">
              <div class="card-body">
                <h2 class="card-title text-black text-2xl  ">Contest</h2>
                <h1 className="text-[#757979] mb-2">Evaluate your programing skill</h1>
                <Link to="/contests">
                  <button class="py-2 px-4 border rounded text-white font-semibold bg-blue-500 ">View Contests</button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
          initial={{x:100}} 
        whileInView={{x:0}}
        transition={{duration:1}}>
            <div class="card w-[100%] md:w-96  bg-white border text-neutral-content shadow-2xl">
              <div class="card-body">
                <h2 class="card-title text-black text-2xl">Stand out from the crowd</h2>
                <h1 className="text-[#757979] mb-2">Take the coderAccess Skills Certification Test</h1>
                <Link to="/allcertificate">
                  <button class="py-2 px-4 border rounded border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white">
                    View All Skills
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default DashbordMain;
