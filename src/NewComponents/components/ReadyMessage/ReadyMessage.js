import { faBook, faBookOpen, faCertificate, faCode, faComputer, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ReadyMessage = () => {
  return (
    <div className="bg-slate-900 pt-16 pb-24 hidden lg:block">
      <div className="lg:mx-48 border-2 border-gray-500 p-2 rounded-lg">
        <div className="border-2 border-gray-500 p-2 rounded-lg">
          <div className="border-2 border-gray-500 p-2 rounded-lg">
            <div className="border-2 border-gray-600 p-2 rounded-lg">
              <div className="border-2 border-gray-600 p-2 rounded-lg">
                <div className="border-2 border-gray-600 p-2 rounded-lg">
                  <div className="border-2 border-gray-700 p-2 rounded-lg">
                    <div className="border-2 border-gray-700 p-2 rounded-lg">
                      <div className="border-2 border-gray-700 p-2 rounded-lg">
                        <div className="border-2 border-gray-800 px-40 pb-16 pt-12 rounded-lg">

                        <div>
                            <h2 className="text-4xl text-white font-semibold text-center">Ready to build with us?</h2>
                        </div>

                        <div className="flex justify-center items-center space-x-8 mt-16 text-center">
                            <div>
                            <p><span className="border-2 border-green-500 bg-green-500 rounded-full p-4 text-white text-3xl"><FontAwesomeIcon icon={faCode} /></span></p>
                            <h2 className="text-xl text-white font-semibold mt-6">Free practice <br /> Problem</h2>
                            </div>

                            <div>
                            <p><span className="border-2 border-pink-500 bg-pink-500 rounded-full p-4 text-white text-3xl"><FontAwesomeIcon icon={faBookOpen} /></span></p>
                            <h2 className="text-xl text-white font-semibold mt-6">Premium <br /> Course</h2>
                            </div>

                            <div>
                            <p><span className="border-2 border-yellow-500 bg-yellow-500 rounded-full p-4 text-white text-3xl"><FontAwesomeIcon icon={faTrophy} /></span></p>
                            <h2 className="text-xl text-white font-semibold mt-6">Programming <br /> Contest</h2>
                            </div>

                            <div>
                            <p><span className="border-2 border-teal-500 bg-teal-500 rounded-full p-4 text-white text-3xl"><FontAwesomeIcon icon={faCertificate} /></span></p>
                            <h2 className="text-xl text-white font-semibold mt-6">Get <br /> Certificate</h2>
                            </div>
                            
                        </div>
                         <div className="flex justify-center items-center mt-12">
                         <p><Link to="/explore">
                            <button class="py-2 px-6 border rounded-md border-blue-600 text-sky-600 font-semibold hover:bg-sky-600 hover:text-white">Start Now</button></Link></p>
                            <p className="text-white text-lg ml-4">Explore more {">"}</p>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyMessage;
