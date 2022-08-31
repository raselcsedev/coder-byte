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

const courses =[
  {
      id: 1,
      img: "https://i.ibb.co/5hQCFby/database-6.png",
      title: "DataBase",
      msg:"Smash it"
  },
  {
      id: 2,
      img: "https://i.ibb.co/yqJsQcj/C-image.jpg",
      title: "C++",
      msg:"Grab it"
  },
  {
      id: 3,
      img: "https://i.ibb.co/5hQCFby/database-6.pnghttps://i.ibb.co/XtSbYmc/java.png",
      title: "Java",
      msg:"Achive it"
  },
  {
      id: 4,
      img: "https://i.ibb.co/xYnTyRs/python.gif",
      title: "Python",
      msg:"Drill it"
  },
  {
      id: 5,
      img: "https://i.ibb.co/1rg3Jpr/aws-1869025-1583149.webp",
      title: "AWS",
      msg:"Store it"
  },
  {
      id: 6,
      "img": "https://i.ibb.co/SQg67m4/image-15.png",
      "title": "Javascript",
      "msg":"Web it"
  },
  {
      "id": 7,
      "img": "https://i.ibb.co/S6TbNN1/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blu.png",
      "title": "SQL",
      "msg":"Home it"
  },
  {
      "id": 8,
      "img": "https://i.ibb.co/fS8XtpY/png-clipart-cosmos-db-document-oriented-database-microsoft-azure-nosql-microsoft-text-rectangle-thum.png",
      "title": "NoSQL",
      "msg":"Scale it"
  },
  {
      "id": 9,
      "img": "https://i.ibb.co/hF549wQ/download.jpg",
      "title": "C#",
      "msg":"Net it"
  }
 
]

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
