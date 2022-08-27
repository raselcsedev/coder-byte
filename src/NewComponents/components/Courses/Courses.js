import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  const data = datas.slice(0, 9);
  return (
    <div>
      <p className=" lg:mt-40 pt-2 bg-slate-900 hidden lg:block ">
        <Link to="/"><span className="flex animate-bounce  justify-end mt-2 mr-32 text-3xl text-white"><FontAwesomeIcon icon={faArrowUp} 
      /></span></Link>
      </p>
      <div className="pt-16 pb-12 bg-slate-900">
      

      <h2 className="text-3xl text-white text-center font-bold mb-16">Sharpen Your Skills With Our Courses</h2>
      <section className=" flex justify-center ">
        <div
         className=" grid grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-12">
          {datas.map((data) =><SingleCourse key={data.id}  data={data}></SingleCourse>)}
        </div>
      </section>

      <div className="w-60 mx-auto my-12">
      <Link to="/courses"><h2 className="lg:flex justify-end text-xl text-sky-500">Explore the courses <span className="ml-2"><FontAwesomeIcon icon={faArrowRight} /></span></h2></Link>
      </div>
    </div>
    </div>
  );
};

export default Courses;
