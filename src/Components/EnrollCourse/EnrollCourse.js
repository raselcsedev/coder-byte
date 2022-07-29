import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EnrollCourse = (props) => {


    const { id } = useParams()

    const [courses,setCourses] =useState([])

    let url ='http://localhost:3000/courses.json' || 'https://coder-access.web.app/'
   
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])




    const course = courses?.find(item => id == item?.id)

    console.log('cc',courses,course);

    // if (!courses.length) {
    //     return <Loading></Loading>
    // }


    return (
        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-10 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
               
                <div class="">
                    <div className='card'>
                        <div class=" before inline-block  card-compact md:w-96 w-[100%]  bg-base-100 shadow-xl">
                            <figure><img loading='lazy' src={course?.course_img}
                                alt="course" /></figure>

                            <div class="card-body h-auto">
                                <h2 class="card-title text-base text-[black]">Titile : {course?.title}</h2>
                                <h2 class="card-title text-base text-[black]">Topic : {course?.topic}</h2>
                                <div className='flex flex-col items-center text-center '>
                                    <img loading='lazy' className='w-20 h-20 border border-[brown] p-1 mt-1 rounded-full'
                                        src={course?.instructor_img}

                                        alt="" />
                                    <p className='mb-1 '>
                                        <p className='text-[gray]'>Guided by </p>

                                        <p className='text-[brown]'>{course?.instructor}</p>

                                    </p>


                                </div>

                                <p className='text-[black]'>Duration :{course?.duration}</p>
                                <p className='text-[black]'>Lectures :{course?.lecture_quantity} </p>


                                <div className="flex w-full text-[black] font-normal">
                                    <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                    </svg>
                                    <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                    </svg>
                                    <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                    </svg>
                                    <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                    </svg>
                                    <svg width="16" height="20" fill="currentColor">
                                        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                                    </svg>
                                </div>
                               
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Billing Specifications</h2>
                    <p class="mt-4 text-gray-500">Fill the form carefully</p>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="adddress" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Course Title</span>
                        </label>
                        <input type="text" placeholder="Course Title" class="input input-bordered" />
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn bg-[brown]">Procced Payment</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default EnrollCourse;