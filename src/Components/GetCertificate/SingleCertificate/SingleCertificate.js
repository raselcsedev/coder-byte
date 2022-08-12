import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import problem from "../../../Images/problem.jpg";
import problem1 from "../../../Images/problem2.jpg";
import { certificatelist } from '../certificateList';

const SingleCertificate = () => {

    const { id } = useParams()

    const certificate =certificatelist?.find(item => id == item?._id)

    return (
        <div className="md:mx-32 mx-8 pt-20">
        <h1 className="md:text-2xl text-lg font-bold">{certificate?.name} Skills Certification Test</h1>
        <div class="divider"></div>
        <div class="hero  flex flex-col space-y-2">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={problem} class="max-w-sm rounded-lg shadow-2xl ml-8 w-[100%]" alt="" />
            <div className="mr-8 md:w-[100%] w-[80%] mx-auto">
              <h1 class="md:text-4xl text-lg font-medium leading-normal ">Verify your {certificate?.name} Skills. Accelerate your Job Search.</h1>
              <p class="py-6">
                Take the coderAccess Skills Certification Test and showcase your <br /> knowledge as a HackerRank verified developer.
              </p>
              <Link to={`/participant-info/${certificate?._id}`}>
                <button class="btn btn-accent">Take the coderAccess Skills Test</button>
              </Link>
            </div>
          </div>
        </div>
  
        <div class="bg-base-200 p-8 mt-16">
          <h1 class="text-4xl font-semibold text-center">No Worries. Zero risk.</h1>
          <p class="py-6 text-lg text-center font-normal">
            If you fail to clear the test, no harm done. Your scores will remain private and will not be shared with any company.{" "}
            <br /> You will be allowed to retake the test (if available) after a stipulated number of days.
          </p>
        </div>
  
        <div class="hero my-16">
          <div class="hero-content flex-col lg:flex-row lg:space-x-40">
            <img src={problem1} class="lg:max-w-sm rounded-lg shadow-2xl" alt="" />
            <div>
              <h1 class="text-3xl font-bold leading-normal">
                <span className="ml-28 text-amber-400">Best</span>
                <br />
                Tips to Solve any <br />
                Programming <span className="text-red-400">Problem</span>
              </h1>
              <div class="divider"></div>
              <p class="pb-4 text-lg font-semibold">
                How to read a problem and <br /> write a code for it?.
              </p>
              <Link to="/explore">
                <button class="btn btn-success">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleCertificate;