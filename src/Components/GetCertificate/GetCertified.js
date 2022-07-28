import React from "react";
import problem from "../../Images/problem.jpg";
import problem1 from "../../Images/problem2.jpg";
const GetCertified = () => {
  return (
    <div>
      <h1 className="ml-32 mt-12 text-2xl font-bold">Problem Solving (Basic) Skills Certification Test</h1>
      <div class="mx-32 divider"></div>
      <div class="hero  flex flex-col space-y-2">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={problem} class="max-w-sm rounded-lg shadow-2xl ml-8" alt="" />
          <div className="mr-8">
            <h1 class="text-4xl font-medium leading-normal">Verify your Problem Solving Skills. Accelerate your Job Search.</h1>
            <p class="py-6">
              Take the HackerRank Skills Certification Test and showcase your <br /> knowledge as a HackerRank verified developer.
            </p>
            <button class="btn btn-accent">Take the coderAccess Skills Test</button>
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
        <div class="hero-content flex-col lg:flex-row space-x-40">
          <img src={problem1} class="max-w-sm rounded-lg shadow-2xl" alt=""/>
          <div>
            <h1 class="text-3xl font-bold leading-normal"><span className="ml-28 text-amber-400">Best</span><br />Tips to Solve any <br />Programming <span className="text-red-400">Problem</span></h1>
            <div class="divider"></div>
            <p class="pb-4 text-lg font-semibold">
              How to read a problem and <br /> write a code for it?.
            </p>
            <button class="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertified;
