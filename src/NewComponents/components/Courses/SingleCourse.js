import React, { useState } from 'react';
import { motion } from "framer-motion"
import './SingleCourse.css'


const SingleCourse = ({ data }) => {

  
    

    const [show, setShow] = useState(false)

    return (
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
            {
                show ?
                 <a cl href="/courses">
                       <div

                    class="after text card w-[100%0] h-[150px] md:w-72 bg-base-100 shadow-2xl bg-slate-800">
                    <div class=" card-body">
                        <div className='after2 text-white flex justify-around items-center py-6 pl-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className=' font-semibold text-lg'>{data?.msg}</p>
                        </div>
                    </div>
                </div>
                 </a>
                    :
                    <div
                        

                        class="after card w-[100%] h-[150px] md:w-72 bg-base-100 shadow-2xl bg-slate-800">
                        <div class=" card-body">
                            <div>
                                <img className="mx-auto" width="50px" height="50px" src={data.img} alt="" />
                                <h2 class="flex justify-center card-title mt-4 text-white">{data.title}</h2>
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default SingleCourse;