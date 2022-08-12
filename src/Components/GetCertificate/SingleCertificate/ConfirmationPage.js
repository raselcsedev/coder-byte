import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { certificatelist } from '../certificateList';

const ConfirmationPage = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()

    const certificate =certificatelist?.find(item => id == item?._id)
    const { register, handleSubmit } = useForm();
    return (
        <div className="sm:mx-24 lg:mx-32 pt-20 mb-12">
        <div class="card lg:mx-20 bg-base-100 shadow-xl">
          <div class="card-body">
            <div>
              <h1 className="text-2xl font-extrabold">
                coder<span className="text-lime-600">A</span>ccess
              </h1>
              <h1 className="text-sm font-semibold">Develop your skills</h1>
              <div class="divider"></div>
            </div>
  
            <div className="lg:mb-28 mb-8 lg:mt-5">
              <div className="lg:flex items-center">
                <div>
                  <p className="text-3xl font-bold">
                    Welcome to <br /> coderAccess <br />{certificate?.name}  Skills Certification Test
                  </p>
                </div>
                <div className="flex lg:ml-64">
                  <p>
                    <span className="text-sm">Test duration</span> <br />
                    <span className="text-lg font-semibold">90 mins</span>
                  </p>
                  <p className="ml-7">
                    <span className="text-sm">No. of questions</span> <br />
                    <span className="text-lg font-semibold">2 questions</span>
                  </p>
                </div>
              </div>
              {/* <div class="divider"></div> */}
            </div>
  
            <div>
              <h2 className="text-center text-slate-700 mb-5 text-3xl font-semibold">Instructions</h2>
              <div className="lg:mx-20">
                <p className="mb-2">
                  1. This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused
                  once started.
                </p>
                <p>2. Please ensure you have a stable internet connection.</p>
                <p className="mt-2">
                  3. We recommend you to try the sample test for a couple of minutes, before taking the main test.
                </p>
              </div>
              <Link to="/explore">
                <button class="py-2 px-5 border rounded border-green-600 text-green-600 font-bold lg:ml-20 mt-5 hover:bg-green-600 hover:text-white">
                  Try Sample Test
                </button>
              </Link>
            </div>
  
            <div className="lg:mt-24 mt-8">
              <h2 className="text-center text-slate-700 mb-2 text-3xl font-semibold">Confirmation Form</h2>
              <p className="text-sm text-center">Before we start, here is some extra information we need to assess you better.</p>
            </div>
  
            <div className="mt-5 lg:mb-12 mb-8">
              <h2>Logged in as</h2>
              {user && <p className="font-bold mt-2">{user.email}</p>}
            </div>
  
            <div>
              <form>
                <h2>
                  Declaration Statement <span className="text-red-600">*</span>
                </h2>
                <div className="flex items-center mt-6 mb-5 lg:mb-12">
                  <div>
                    <input type="checkbox" name="agree" class="checkbox checkbox-accent" value="yes" {...register("agree")} />
                  </div>
                  <div>
                    <h2 className="ml-3">
                      I will not consult/copy code from any source including a website, book, or friend/colleague to complete these
                      tests, though may reference language documentation or use an IDE that has code completion features.
                    </h2>
                  </div>
                </div>
                <h2 className="text-sm">
                  You agree to coderAccess cookie policy. We use cookies to ensure you have the best browsing experience on our
                  website
                </h2>
                <Link to="/explore">
                  <button class="py-2 px-5 border rounded border-green-600 text-white bg-green-600 font-bold mt-5 mb-5">
                    Agree & Start
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmationPage;