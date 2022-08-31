import React, { useState } from 'react';
import video from '../../code-video.mp4'


import ImageUploading from 'react-images-uploading';
import { Link } from 'react-router-dom';




const Codevideo = () => {

    return (
        <div className='bg-[#171B26] md:h-[110vh] h-[80vh] py-[2%]'>
            <div className='w-[80%] md:w-[60%] mx-auto'>

                <div>
                    <div >



                        <h2 class="text-3xl font-bold md:font-extrabold tracking-tight text-gray-900 text-2xl md:text-4xl">

                            <p className='text-slate-400 my-4'> coderAccess is simplifing your DevDream...</p>

                            <span class="block text-[white]">Ready to dive in?</span>
                            <span class="block text-indigo-600">Start exploring today.</span>
                        </h2>

                        <Link to='/explore'><button className='btn btn-sm  glass  my-5'>Get Started</button></Link>


                    </div>
                </div>

                <video className='rounded-xl border-2 border-slate-400 ' src={video} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Codevideo;