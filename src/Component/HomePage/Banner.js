import React from 'react';
import pic from './photo1.jpg'
import py from './py-svgrepo-com.svg'
import js from './js-svgrepo-com.svg'
import java from "./java-logo-svgrepo-com.svg"
import c1 from './c-logo-svgrepo-com.svg'
import c2 from './c-sharp-svgrepo-com (1).svg'
import './HomePage.css'
const Banner = () => {
    return (
        <div className='banner '>

            <div className='bannerbgphoto bg-cover  grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex justify-center items-center '>
                    <h1 className='text-white font-serif md:font-bold font-semiblod text-4xl md:text-5xl lg:text-7xl '>Best platform to <br /> solve competitive <br /> programming</h1>
                </div>
                <div className='text-white text-2xl flex flex-col justify-around '>
                    <div className='flex justify-around'>
                        <div className='flex items-center'>
                            <img className='w-10 h-10 mr-3' src={c1} alt="" /><h1> C++</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 h-10 mr-3' src={c2} alt="" /><h1> C#</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>

                        <div className='flex items-center'>
                            <img className='w-10 h-10 mr-3' src={java} alt="" /><h1> Java</h1>
                        </div>

                    </div>
                    <div className='flex justify-around'>

                        <div className='flex items-center'>
                            <img className='w-10 h-10 mr-3' src={js} alt="" /><h1> JavaScritp</h1>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 h-10 mr-3' src={py} alt="" /><h1> Python</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;