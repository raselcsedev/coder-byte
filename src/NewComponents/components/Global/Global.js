import React from 'react';
import globe from "../../../Images/globe.png";

const Global = () => {
    return (
        <div className='bg-slate-800 pt-12'>
            <div>
                <h2 className='text-4xl text-white text-center font-semibold'>Ready for enterprise</h2>
                <h2 className='text-lg text-white text-center text-slate-400 mt-8'>coderAccess is built by the team that created the infrastructure</h2>
                <h2 className='text-lg text-white text-center text-slate-400'>for some of the world's largest problem solving platform</h2>
            </div>

            <div className='mt-12 mb-12'>
                <div className='flex justify-center items-center space-x-12 mb-4'>
                     <h2 className='text-5xl text-white font-semibold'>99.99%</h2>
                     <h2 className='text-5xl text-white font-semibold'>24 x 7</h2>
                </div>
                <div className='flex justify-center items-center space-x-12'>
                   <h2 className='text-xl text-white text-center text-slate-400'>Guaranteed Uptime</h2>
                   <h2 className='text-xl text-white text-center text-slate-400'>Expert Support</h2>
                </div>
            </div>

            <div className='flex justify-center '>
                <img className='w-9/12' src={globe} alt="" />
            </div>
        </div>
    );
};

export default Global;