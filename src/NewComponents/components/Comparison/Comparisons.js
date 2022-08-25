import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Comparisons = () => {
    const [data, setdata] = useState([]);
const url = "http://localhost:3000/compareData.json" || 'https://coder-access.web.app/compareData.json'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);


  const comparisionData =[
    {
        id: 1,
        feature:"100+ Practice Problem",
        DC1: "✔",
        DC2: "✔",
        DC3: "✔",
        DC4: "✔",
        DC5: "✔"
    },
    {
        id: 2,
        feature:"Real Life Project",
        DC1: "❌",
        DC2: "❌",
        DC3: "❌",
        DC4: "✔",
        DC5: "✔"
    },
    {
        id: 3,
        feature:"Course Enrollment",
        DC1: "✔",
        DC2: "✔",
        DC3: "❌",
        DC4: "❌",
        DC5: "✔"
    },
    {
        id: 4,
        feature:"Write Blogs",
        DC1: "❌",
        DC2: "❌",
        DC3: "❌",
        DC4: "❌",
        DC5: "✔"
    },
    {
        id: 5,
        feature:"Certificate",
        DC1: "✔",
        DC2: "❌",
        DC3: "❌",
        DC4: "✔",
        DC5: "✔"
    }
]
    return (
        <div className="lg:mb-32 mb-20 mt-16 lg:mt-56 md:max-w-[100vw] max-w-[95vw]  mx-auto">
             <div className="h-px mx-12 lg:mx-32 bg-black hidden lg:block"></div>
           <p className="hidden lg:block">
          <Link to="/"><span className="flex justify-end mr-40 mt-2 mb-8 lg:mb-16 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
          /></span></Link>
            </p>

            <h2 className="text-3xl text-teal-600 text-center font-bold mb-3">A Better Way to Prep for Coding Interviews.</h2>
            <h2 className='text-xl font-semibold text-amber-400 text-center lg:mb-12 mb-6'>Compare to other site</h2>
             <section>
                <div className='grid grid-cols-6 lg:mx-48 lg:gap-4 content-center overflow-x-scroll md:overflow-x-auto gap-[24%]'>
                    <h2 className='lg:text-xl text-center lg:font-bold grid content-center mb-8 '>Features</h2>
                    <h2 className='lg:text-xl text-center lg:font-bold grid content-center mb-8'>Hackerrank</h2>
                    <h2 className='lg:text-xl text-center lg:font-bold grid content-center mb-8'>LeetCode</h2>
                    <h2 className='lg:text-xl text-center lg:font-bold grid content-center mb-8'>CoderByte</h2>
                    <h2 className='lg:text-xl text-center lg:font-bold grid content-center mb-8'>TopH</h2>
                    <h2 className='lg:text-xl text-center font-bold grid content-center mb-8 lg:bg-sky-500 lg:py-2 rounded lg:text-white'>coderAccess</h2>
                </div>
                <div>
                    {
                        comparisionData.map(data=>(
                            <>
                            <div className='grid grid-cols-6 lg:mx-48 lg:gap-4 content-center'>
                                <h2 className='font-bold text-gray-500 text-center grid content-center'>{data.feature}</h2>
                                <h2 className='border text-center grid content-center bg-green-100'>{data.DC1}</h2>
                                <h2 className='border text-center grid content-center bg-green-100'>{data.DC2}</h2>
                                <h2 className='border text-center grid content-center bg-green-100'>{data.DC3}</h2>
                                <h2 className='border text-center grid content-center bg-green-100'>{data.DC4}</h2>
                                <h2 className='border text-center grid content-center bg-green-100'>{data.DC5}</h2>
                                </div>
                            <div class="divider w-8/12 mx-auto"></div> 
                            </>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Comparisons;