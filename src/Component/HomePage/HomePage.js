import React from 'react';
import "./HomePage.css";
import pic1 from './4548450.jpg'
import Banner from './Banner';
import About from '../AboutUS/About';
import DashbordMain from '../DashbordMain/DashbordMain';
const Homepage = () => {
    return (
        <>
            {/* banner */}
            <Banner></Banner>
            {/* <About></About> */}
            <DashbordMain></DashbordMain>
            {/* about */}
            {/* <section>
                <div className='mx-52 lg:px-30'>
                    <h1 className='text-3xl font-bold mt-10'>About US</h1>

                </div>
            </section> */}
        </>
    );
};

export default Homepage;