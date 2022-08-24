import React from "react";
import google from "../../../Images/google.png";
import amazon from "../../../Images/amazon.png";
import microsoft from "../../../Images/microsoft.jpg";
import facebook from "../../../Images/facebook.jpg";
import bloomberg from "../../../Images/bloomberg.png";
import zillow from "../../../Images/zillow.jpeg";
import twosigma from "../../../Images/sigma.jpg";
import morgan from "../../../Images/morgan.png";
import blacrock from "../../../Images/blacrock.jpg";
import hashicorp from "../../../Images/hashicorp.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const TrustedCompany = () => {
  return (
    <div className="lg:mx-32 lg:mt-40 mt-20 mb-12">
      <div className="h-px bg-black hidden lg:block"></div>
           <p className="hidden lg:block">
          <Link to="/"><span className="flex justify-end mr-40 mt-2 mb-8 lg:mb-16 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
          /></span></Link>
            </p>

      <div class="card w-100 border-2 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl font-semibold flex justify-center mb-3">Trusted By Amazing Companies</h2>
          <p className="text-xl text-gray-500 flex justify-center mb-8">Our customers have gotten offers from awesome companies.</p>
           <Marquee speed={50}>
            <div className="flex justify-center items-center space-x-16 mb-8">
              <img className="h-20 w-40 opacity-25" src={google} alt="" />
              <img className="h-20 w-40 opacity-25" src={amazon} alt="" />
              <img className="h-20 w-40 opacity-25" src={bloomberg} alt="" />
              <img className="h-20 w-40 opacity-25" src={microsoft} alt="" />
              <img className="h-20 w-40 opacity-25" src={facebook} alt="" />
            </div>
          </Marquee>
          <Marquee speed={50} direction="right">
            <div className="flex justify-center items-center space-x-16 mb-4">
              <img className="h-20 w-40 opacity-25" src={blacrock} alt="" />
              <img className="h-20 w-40 opacity-25" src={zillow} alt="" />
              <img className="h-20 w-40 opacity-25" src={morgan} alt="" />
              <img className="h-20 w-40 opacity-25" src={hashicorp} alt="" />
              <img className="h-20 w-40 opacity-25" src={twosigma} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
