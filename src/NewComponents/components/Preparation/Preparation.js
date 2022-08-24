import { faBook, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Preparation = () => {
    return (
        <div className='lg:mt-32 mt-12'>
                <h2 className='text-3xl text-teal-600 text-center font-bold lg:mb-16 mb-8'>Your Preparation</h2>
            <div className='lg:flex items-center lg:space-x-72 justify-center'>

                <div>
                    <p className='text-3xl mb-6 hidden lg:block'><motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay:0.7 }}
                    
                    className="border-2 border-green-500 rounded-xl p-2 text-green-600"><FontAwesomeIcon icon={faBook} /></motion.span>
                    <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay:0.9}}

                    className="ml-2 border-2 border-green-500 rounded-xl p-2 text-teal-600"><FontAwesomeIcon icon={faBookOpenReader} /></motion.span>
                    </p>
                    <motion.h2
                    initial={{x:-100}} 
                    whileInView={{x:0}}
                    transition={{duration:0.10}}

                    className='text-2xl text-lime-700 font-bold mb-3'>Interview preparation kit</motion.h2>
                    <h2 className='mb-3'>Get interview ready for top companies by solving <br /> an interview preparation kit.</h2>
                    <Link to="/preparation">
                        <button class="py-2 px-4 border rounded border-green-600 text-xs text-lime-500 font-bold hover:bg-lime-600  hover:text-white">View all kits
                 </button>
                 </Link>
                </div>
                <div>
                <p className='text-3xl  mb-6 hidden lg:block'>
                    <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay:0.7 }}
                    
                    className="border-2 border-green-500 rounded-xl p-2 text-orange-600"><FontAwesomeIcon icon={faBook} /></motion.span>
                    <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay:0.9 }}
                    
                    className="ml-2 border-2 border-green-500 rounded-xl p-2 text-teal-600"><FontAwesomeIcon icon={faBookOpenReader} /></motion.span>
                    </p>
                     <motion.h2
                     initial={{x:100}} 
                     whileInView={{x:0}}
                     transition={{duration:0.10}}

                     className='text-2xl text-amber-600 font-bold mb-3'>Special preparation kit</motion.h2>
                    <h2 className='mb-3'>Get interview ready for top companies by solving <br /> an interview preparation kit.</h2>
                    <Link to="/preparation">
                        <button class="py-2 px-4 border rounded border-amber-600 text-xs text-amber-500 font-bold hover:bg-amber-600  hover:text-white">View all kits
                 </button>
                 </Link>
                </div>

            </div>
        </div>
    );
};

export default Preparation;