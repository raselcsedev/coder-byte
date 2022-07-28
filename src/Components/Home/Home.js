import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Codevideo from '../CodeVideo/Codevideo';
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies';
import Languages from '../Languages/Languages';
import Homepage from '../HomePage/HomePage';
import DashbordMain from '../DashbordMain/DashbordMain'
import Course from '../Courses/Course'

const Home = () => {
    return (
        <div className=''>
            
<Homepage></Homepage>
<DashbordMain></DashbordMain>
            <Codevideo></Codevideo>
            {/* <DashbordMain></DashbordMain> */}
            <Languages></Languages>
            <Course></Course>
            <FeaturedCompanies></FeaturedCompanies>
            <CodeEditor></CodeEditor>

            {/* <Editor></Editor> */}
            
        </div>
    );
};

export default Home;
