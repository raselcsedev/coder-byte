import React from 'react';
import video from '../../code-video.mp4'

const Codevideo = () => {
    return (
        <div className='bg-[#171B26] h-[120vh] pt-[5%]'>
            <div className='w-[60%] mx-auto'>
               
                <div>
                    <div >
                        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">

                            <p className='text-slate-400 my-4'> coderAccess is simplifing your DevDream...</p>

                            <span class="block text-[white]">Ready to dive in?</span>
                            <span class="block text-indigo-600">Start exploring today.</span>
                        </h2>
                       
                           <button className='btn btn-sm  glass  my-5'>Get Started</button>
                       
                        
                    </div>
                </div>

                <video className='rounded-xl border-2 border-slate-400 ' src={video} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Codevideo;