import React from 'react'
import v1 from './v-1/Software developer programming code, looping 4K background.mp4'
import './Video.css'
const Video = () => {
    return (
        <section className='mb-100'>
        <div className='vdo '>
            <div className='flex justify-center '>
                <video src={v1} autoPlay loop muted></video>
            </div>
            <div className='mainvdo'>
                <h1 className='text-white text-7xl font-bold'>Hello world</h1>
            </div>
        </div>
        </section>
    );
};

export default Video;