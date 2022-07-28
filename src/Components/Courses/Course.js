import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Course = () => {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  const data = datas.slice(0, 9);
  return (
    <div className="">
      <h2 className="text-4xl font-smibold font-serif text-center py-12">Sharpen Your Skills With Our</h2>
      <section className=" flex justify-center mb-36 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3  gap-12">
          {data.map((data) => (
            <>
              <div class="card w-[100%] md:w-96  bg-base-100 shadow-2xl">
                <div class="card-body  ">
                  <div className="flex">
                    <img width="50px" height="50px" src={data.img} alt="" />
                    <h2 class=" ml-4 card-title">{data.title}</h2>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Course;
