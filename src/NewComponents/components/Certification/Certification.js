import { faArrowUp, faC, faCode, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Certification = () => {
    return (
        <div className='mt-12 lg:mt-2 md:w-[80vw] w-[40vw] mx-auto'>
            <p className="hidden lg:block">
          <Link to="/"><span className="flex justify-end mr-40 mt-2 mb-8 lg:mb-16 text-3xl"><FontAwesomeIcon icon={faArrowUp} 
          /></span></Link>
            </p>
             <h2 className='text-3xl text-teal-600 text-center font-bold lg:mb-16 mb-8'>Certification</h2>
            <div className='lg:flex items-center lg:space-x-32 justify-center'>

                <div className=''>
                    <p className='text-2xl mb-6 hidden lg:block'>
                    <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    
                    className="border-2 border-green-500 rounded-xl p-2 text-green-600"><FontAwesomeIcon icon={faCode} /></motion.span>
                    </p>
                    <motion.h2
                    initial={{x:-100}} 
                    whileInView={{x:0}}
                    transition={{duration:0.10}}
                    
                    className='text-2xl text-sky-900 font-bold mb-3'>Problem Solving (Basic)</motion.h2>
                    <h2 className='mb-3'>Increase Your programing skill by contest</h2>
                    <Link to="/getcertified">
                        <button class="py-2 px-4 border rounded border-sky-600 text-xs text-sky-600 font-bold hover:bg-sky-800  hover:text-white">Get Certified
                 </button>
                 </Link>
                </div>
                <div>
                <p className='mb-6 hidden lg:block'>
                <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay:0.7 }}
                
                ><img className='h-12 w-12 border-2 border-green-500 rounded-xl ' src="https://www.pngitem.com/pimgs/m/31-312064_programming-icon-png-python-logo-512-transparent-png.png" alt="" /></motion.span>
                    </p>
                <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay:0.4 }}
                
                className='text-2xl text-amber-700 font-bold mb-3'>Python (Basic)</motion.h2>
                    <h2 className='mb-3'>Increase Your programing skill by contest</h2>
                    <Link to="/getcertified">
                        <button class="py-2 px-4 border rounded border-amber-600 text-xs text-sky-600 font-bold hover:bg-amber-800  hover:text-white">Get Certified
                 </button>
                 </Link>
                </div>
                <div>
                <p className='text-2xl mb-6 hidden lg:block'>
                <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay:0.5 }}
                
                className="border-2 border-green-500 rounded-xl p-2 text-orange-600"><FontAwesomeIcon icon={faShare} /></motion.span>
                    </p>
                <motion.h2
                initial={{x:100}} 
                whileInView={{x:0}}
                transition={{duration:0.10}}
                
                className='text-2xl text-lime-800 font-bold mb-3'>Stand out from the crowd</motion.h2>
                    <h2 className='mb-3'>Take the coderAccess Skills Certification Test</h2>
                    <Link to="/allcertificate">
                        <button class="py-2 px-4 border rounded border-lime-600 text-xs text-sky-600 font-bold hover:bg-lime-800  hover:text-white">View All Skills
                 </button>
                 </Link>
                </div>
            </div>
        </div>
    );
};

export default Certification;
