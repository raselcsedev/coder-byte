import React from 'react';
import { faCaretRight, faCircleExclamation, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { certificatelist } from '../certificateList';



const ParticipantInfo = () => {

    const { id } = useParams()

    const { register, handleSubmit } = useForm();

    const certificate =certificatelist?.find(item => id == item?._id)


    const onSubmit = (data) => {

    }

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
                <kbd class="kbd text-white bg-green-600">1</kbd>
              </span>
              <span className="text-green-600 font-bold ml-3">Review Profile</span>
              <span className="text-gray-400 text-2xl ml-7 mr-7">
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
              <span className="text-sm">
                <kbd class="kbd text-slate-400 font-bold bg-slate-200">2</kbd>
              </span>
              <span className="text-slate-300 font-bold ml-3">Skills Certification Test</span>
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-slate-500 text-xl mb-2">
                Personal<span className="ml-2">Information</span>
              </p>

              <div>
                <div className="lg:flex lg:space-x-24">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        First Name <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      class="input input-bordered w-full max-w-xs"
                      {...register("firstName", { required: true, maxLength: 15 })}
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        Last Name <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      class="input input-bordered w-full max-w-xs"
                      {...register("lastName", { required: true, maxLength: 15 })}
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm">
                  <span>
                    <FontAwesomeIcon className="text-gray-500 mr-2" icon={faCircleExclamation}></FontAwesomeIcon>
                  </span>
                  The above mentioned name will be displayed on your certificate and cannot be changed later.
                </p>
              </div>

              <div className="mt-3 mb-7">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">
                      Country of Residence <span className="text-red-600">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Country Name"
                    class="input input-bordered w-full max-w-xs"
                    {...register("countryName", { required: true, maxLength: 20 })}
                  />
                </div>

                <div className="mt-3">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        Phone Number <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      class="input input-bordered w-full max-w-xs"
                      {...register("fhone", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-xl mb-2">Pofessional</p>

                <div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        I am currently a <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <select class="select select-bordered" {...register("work")}>
                      <option>Student</option>
                      <option>Professional</option>
                    </select>
                  </div>

                  <div class="form-control w-full max-w-xs mt-3">
                    <label class="label">
                      <span class="label-text text-sm">
                        School <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter School Name"
                      class="input input-bordered w-full max-w-xs"
                      {...register("schoolName", { required: true })}
                    />
                  </div>
                </div>

                <div className="lg:flex lg:space-x-24 mt-3">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        Expected year of Graduation <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <select class="select select-bordered" {...register("expectedYear")}>
                      <option disabled selected>
                        Year
                      </option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>I am still in highschool</option>
                    </select>
                  </div>

                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">
                        Expected month of Graduation <span className="text-red-600">*</span>
                      </span>
                    </label>
                    <select class="select select-bordered" {...register("expectedMonth")}>
                      <option disabled selected>
                        Month
                      </option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                </div>

                <div className="lg:flex lg:space-x-24 mt-3">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">Degree</span>
                    </label>
                    <select class="select select-bordered" {...register("degree")}>
                      <option selected>BE</option>
                      <option>BS</option>
                      <option>B.Tech</option>
                      <option>ME</option>
                      <option>MS</option>
                      <option>M.Tech</option>
                      <option>PhD</option>
                    </select>
                  </div>

                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-sm">Program</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Program"
                      class="input input-bordered w-full max-w-xs"
                      {...register("program")}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:ml-48 mt-4 mb-7">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-sm">LinkedIn / Resume</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Add your linkedIn url"
                    class="input input-bordered w-full max-w-xs"
                    {...register("linkedInUrl")}
                  />
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-xl mb-3">Work Authorization</p>
                <p>
                  Are you legally authorized to work in the Bangladesh?<span className="text-red-600 ml-1">*</span>
                </p>
                <div className="flex mt-2">
                  <div>
                    <label class="label cursor-pointer">
                      <span class="label-text mr-2">Yes</span>
                      <input
                        type="radio"
                        name="radio-6"
                        class="radio checked:bg-green-500"
                        value="Yes"
                        {...register("radio-6")}
                      />
                    </label>
                  </div>
                  <div class="ml-2">
                    <label class="label cursor-pointer">
                      <span class="label-text mr-2">No</span>
                      <input type="radio" name="radio-6" class="radio checked:bg-red-500" value="No" {...register("radio-6")} />
                    </label>
                  </div>
                </div>
              </div>
              <Link to={`/start-test/${certificate?._id}`}>
              <input className="px-6 py-2 rounded bg-green-600 max-w-xs text-white mt-5 mb-4" type="submit" value="Proceed" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ParticipantInfo;