import React from 'react';
import Course from '../../Component/Courses/Course';
import DashbordMain from '../../Component/DashbordMain/DashbordMain';
import Homepage from '../../Component/HomePage/HomePage';
import Codevideo from '../CodeVideo/Codevideo';
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies';
import Languages from '../Languages/Languages';

const Home = () => {
    return (
        <div className=''>
            <Homepage></Homepage>
            <Codevideo></Codevideo>
            <DashbordMain></DashbordMain>
            <Languages></Languages>
            <Course></Course>
            <FeaturedCompanies></FeaturedCompanies>
            
        </div>
    );
};

export default Home;
