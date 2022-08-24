import React from 'react';
import Banner from '../Banner/Banner';
import Certification from '../Certification/Certification';
import Comparisons from '../Comparison/Comparisons';
import Courses from '../Courses/Courses';
import Environment from '../Environment/Environment';
import Explore from '../Exploring/Explore';
import Global from '../Global/Global';
import Preparation from '../Preparation/Preparation';
import ReadyMessage from '../ReadyMessage/ReadyMessage';
import Testimonials from '../Testimonials/Testimonials';
import TrustedCompany from '../TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Explore></Explore>
            <Preparation></Preparation>
            <Comparisons></Comparisons>
            <Courses></Courses>
            <Certification></Certification>
            <TrustedCompany></TrustedCompany>
            <Testimonials></Testimonials>
            <Environment></Environment>
            <Global></Global>
            <ReadyMessage></ReadyMessage>
        </div>
    );
};

export default Home;