import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { certificatelist } from '../certificateList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faClock } from "@fortawesome/free-solid-svg-icons";
import laptop from "../../../Images/laptop.jpg";

const StartTest = () => {

    const { id } = useParams()

    const certificate =certificatelist?.find(item => id == item?._id)

    return (
        <div className="sm:mx-24 lg:mx-32 pt-20 mb-12">
        <h1 className="text-2xl font-bold">{certificate?.name} Skills Certification Test</h1>
        <div class="divider"></div>
  
        <div class="card lg:mx-20 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-3xl">{certificate?.name} Skills Certification Test</h2>
            <p>
              <span>
                <FontAwesomeIcon className="text-normal" icon={faClock}></FontAwesomeIcon>
              </span>
              <span className="font-light ml-2">90 min</span>
              <span className="border border-indigo-600 text-xs px-2 ml-2">Algorithms</span>
              <span className="border border-indigo-600 text-xs px-2 ml-2">Data Structures</span>
            </p>
            <div class="divider mt-5 mb-5"></div>
            <div className="mb-12">
              <p className="flex items-center">
                <span className="text-sm">
                  <kbd class="kbd text-green-600 border-2 border-green-600">1</kbd>
                </span>
                <span className="text-green-500 font-bold ml-3">Review Profile</span>
                <span className="text-gray-400 text-2xl ml-7 mr-7">
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <span className="text-sm">
                  <kbd class="kbd text-white font-bold bg-green-600">2</kbd>
                </span>
                <span className="text-green-600 font-bold ml-3">Skills Certification Test</span>
              </p>
            </div>
  
            <div className="mb-8">
              <p className="text-slate-600">Make sure you’re in a quiet environment with a stable internet connection and limited distractions. Good luck!</p>
            </div>
            <div className="max-w-lg border border-green-400 p-8">
            <h1 className="text-xl font-bold">{certificate?.name} Skills Certification Test</h1>
            <img src={laptop} class="h-44 w-44 ml-24" alt="" />
            </div>
            <Link to={`/testconfirmation/${certificate?._id}`}><input className='px-6 py-2 rounded bg-green-600 max-w-xs text-white mt-5 mb-4' type="submit" value="Take Test" /></Link>
          </div>
        </div>
      </div>
    );
};

export default StartTest;