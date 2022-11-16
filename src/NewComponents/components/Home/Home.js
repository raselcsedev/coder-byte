import React from "react";
import Languages from "../../../Components/Languages/Languages";
import Banner from "../Banner/Banner";
import Certification from "../Certification/Certification";
import Comparisons from "../Comparison/Comparisons";
import Courses from "../Courses/Courses";
import Environment from "../Environment/Environment";
import Explore from "../Exploring/Explore";
import Footer from "../Footer/Footer";
import Global from "../Global/Global";
import Preparation from "../Preparation/Preparation";
import ReadyMessage from "../ReadyMessage/ReadyMessage";
import Testimonials from "../Testimonials/Testimonials";
import TrustedCompany from "../TrustedCompany/TrustedCompany";
import SpeechNarration from "./SpeechNarration";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Explore></Explore>

      <Environment></Environment>
 
      <Preparation></Preparation>
      <Courses></Courses>
      <Certification></Certification>
      <Comparisons></Comparisons>
      <TrustedCompany></TrustedCompany>
      <Testimonials></Testimonials>
      <Global></Global>
      <ReadyMessage></ReadyMessage>
      <Footer></Footer>
    </div>
  );
};

export default Home;
