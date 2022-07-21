import React from 'react';
import photo1 from '../HomePage/photo-1.jpg'
const About = () => {
    return (
        <>
        <h1></h1>
        <section className='grid grid-cols-2 about about'>
            <div className='flex justify-center items-center'>
                <img className='h-3/6' src={photo1} alt="" />
                </div>
            <div className='flex justify-center items-center'>
                <div className="dis">

                <h1 className='text-4xl font-bold mb-5'>About us</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi eius doloremque blanditiis reprehenderit cupiditate esse culpa dicta excepturi nulla atque fugit neque magni incidunt, obcaecati rerum pariatur voluptate sequi?</p>
                </div>
                
            </div>
        </section>
        </>
    );
};

export default About;