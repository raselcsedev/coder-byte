import React from 'react';
import Codevideo from '../CodeVideo/Codevideo';
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies';
import Languages from '../Languages/Languages';
import Homepage from '../HomePage/HomePage';
import DashbordMain from '../DashbordMain/DashbordMain'
import Courses from '../Courses/Courses';
import AllUsers from '../../features/Profiles/AllUsers';
import CountDown from '../GetCertificate/SingleCertificate/SkillTestWindow/CountDown';
import CreateBlog from '../../Footer/CreateBlog/CreateBlog';

const Home = () => {
    return (
        <div className=''>

            <Homepage></Homepage>
            <Codevideo></Codevideo>
            <DashbordMain></DashbordMain>
            <Languages></Languages>
            <Courses></Courses>
            <CreateBlog></CreateBlog>
            <FeaturedCompanies></FeaturedCompanies>
            
        </div>
    );
};

export default Home;
