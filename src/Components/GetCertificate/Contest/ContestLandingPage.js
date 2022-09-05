import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const ContestLandingPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/contest-algo");
  };
  return (
    <div className="mb-8">
      <div className="lg:mx-16 mx-4 grid grid-cols-12">
        <div className="col-span-4 mt-24 border-r-2 sticky left-[0%] top-[15%] h-[80vh] w-[100%]">
          <div>
            <h1 className="text-2xl font-extrabold">
              coder<span className="text-lime-600">A</span>ccess
            </h1>
            <h1 className="text-sm font-semibold">Develop your skills</h1>
            <div className="lg:mt-24 mt-8">
              <h2 className="text-4xl text-black font-semibold">
                coderAccess <br />
                2022 Coding Contest
              </h2>
              <div className="flex items-center space-x-8 my-6">
                <div>
                  <h2 className="text-sm text-gray-500">Competition Duration</h2>
                  <h2 className="text-xl text-gray-600">180 minutes</h2>
                </div>
                <div>
                  <h2 className="text-sm text-gray-500">No. of questions</h2>
                  <h2 className="text-xl text-gray-600">4 questions</h2>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div>
                  <h2 className="text-sm text-gray-500">Starts at</h2>
                  <h2 className="text-xl text-gray-600">6/18/2021 - 10:00PM</h2>
                </div>
                <div>
                  <h2 className="text-sm text-gray-500">Ends at</h2>
                  <h2 className="text-xl text-gray-600">6/21/2021 - 10:00PM</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 mt-24 lg:ml-12 ml-4 lg:mt-64 lg:mr-24">
          <div>
            <h2 className="text-2xl text-black font-bold">Welcome!</h2>
            <p className="mt-4 text-justify">
              Welcome to coderAccess Celebrate Juneteenth 2021 Coding Challenge, a coding contest where your winnings help support
              a cause in need. Compete against top coders from around the world to give $500 to a U.S. charity that increases
              opportunities for African-Americans/Black individuals.
            </p>
            <h2 className="font-bold mt-6 mb-4">Prizes:</h2>
            <p className="leading-7">1st place: MacBook Pro 13-inch</p>
            <p className="leading-7">2nd place: Airpods Pro</p>
            <p className="leading-7 mb-2">3rd place: Beats solo3</p>
            <p className="text-justify font-medium">
              coderAccess will also donate $1000 in the top competitor's name to an <br /> organization of your choice from a
              curated list of U.S.-based charities.
            </p>

            <div className="flex items-center space-x-6 mt-4">
              <Link to="/explore">
                <button class="py-2 px-5 border rounded border-green-600 text-white bg-green-600 font-bold mt-5 mb-5">
                  Try Sample Test
                </button>
              </Link>
 
            </div>
          </div>

          <div className="lg:mt-48">
            <h2 className="text-2xl text-black font-bold">Registration Form</h2>
            <h2 className="my-6">
              Logged in as <span className="font-bold">{user.email}</span>
            </h2>
            <p className="mb-4">
              Before we begin, there are a couple more details that could help us improve our <br /> service.
            </p>

            <form onSubmit={onSubmit}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-sm">
                    Name <span className="text-red-600">*</span>
                  </span>
                </label>
                <input type="text" class="input input-bordered w-full max-w-xs" value={user.displayName} />
              </div>

              <div className="lg:flex lg:space-x-24 mt-3">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">
                      Country <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <select class="select select-bordered">
                    <option selected>Bangladesh</option>
                    <option>United State</option>
                    <option>Saudi Arabia</option>
                    <option>Afganisthan</option>
                    <option>Finland</option>
                    <option>Germany</option>
                  </select>
                </div>

                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">
                      City <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input type="text" placeholder="Enter your city name" class="input input-bordered w-full max-w-xs" required />
                </div>
              </div>

              <div className="lg:flex lg:space-x-24 mt-3">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">
                      University / Program <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <select class="select select-bordered">
                    <option>Daffodil International University</option>
                    <option>North South University</option>
                    <option>City University</option>
                    <option>Brac University</option>
                    <option>University of Honkonk</option>
                    <option>German International University</option>
                  </select>
                </div>

                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">
                      Class of <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input type="text" class="input input-bordered w-full max-w-xs" required/>
                </div>
              </div>

              <div className="form-control mt-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <input type="radio" name="radio-2" class="radio radio-primary" />
                  </div>
                  <div>
                    <span class="">I agree to share my contest results and profile information with sponsor companies.</span>
                  </div>
                </div>
              </div>
              <div className="form-control mt-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <input type="radio" name="radio-2" class="radio radio-primary" />
                  </div>
                  <div>
                    <span class="">I'm interested in new job opportunities.</span>
                  </div>
                </div>
              </div>
              <div className="form-control mt-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <input type="radio" name="radio-2" class="radio radio-primary" />
                  </div>
                  <div>
                    <span class="">I'm legally authorized to work in the U.S.</span>
                  </div>
                </div>
              </div>
              <input
                className="px-6 py-2 rounded bg-green-600 max-w-lg font-semibold text-white mt-5 mb-4"
                type="submit"
                value="Let's start"
              />
            </form>
          </div>

          <div className="lg:mt-48">
            <h2 className="text-2xl text-black font-bold mb-4">The rules</h2>
            <p className="mb-4 text-justify">
              1. Only U.S.-based participants can win prizes and only U.S.-based charities can be chosen for donations.
            </p>
            <p className="mb-4 text-justify">
              2. If a winner would like to donate to an organization not listed as an approved charity, it must be approved by
              contest administrators. Charities receiving a donation must be officially registered and crowdfunding sites are not
              eligible.
            </p>
            <p className="mb-4 text-justify">3. This contest is for individuals; teams are not allowed.</p>
            <p className="mb-4 text-justify">
              4. Any competitor found cheating will be disqualified and banned from future coding contests.
            </p>
            <p className="mb-4 text-justify">
              5. By participating and selecting "I agree to share my contest results and profile information with sponsor
              companies," you are granting HackerRank permission to share your contest results and your HackerRank community
              profile with any sponsors listed. If there are contest sponsors, they will be plainly displayed on the contest page.
            </p>
            <p className="mb-4 text-justify">
              6. By participating and selecting "I'm interested in new job opportunities", you are indicating that you are willing
              to be considered for employment by companies using HackerRank for recruitment purposes.
            </p>
            <p className="font-bold">
              7. Contestants who have already won a prize in a monthly coding contest hosted by HackerRank with the past three
              months are not eligible to win prizes in this contest.{" "}
            </p>
            <h2 className="font-bold my-2">Scoring:</h2>
            <p className="text-justify">
              Participants are ranked by score. Your score is determined by the number of test cases your code submission
              successfully passes. If two participants have the same score, the tie is broken by the contestant with the lowest
              amount of time taken.
            </p>

            <div className="flex items-center space-x-6 mt-4">
             
              <Link to="/explore">
                <button class="py-2 px-5 border rounded border-green-600 text-green-600 font-bold mt-5 mb-5">
                  Try Sample Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestLandingPage;
