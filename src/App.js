import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Header from './Components/Header/Header';
import Contests from './Components/GetCertificate/Contests';
import GetCertified from './Components/GetCertificate/GetCertified';

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Footer from './Footer/Footer';
import PreparationKit from './Component/PreparationKit/PreparationKit';
import WeeklyPreparation from './Component/PreparationKit/WeeklyPreparation';
import Topic from './Component/Topicpoblem/Topic';
import DataStructure from './Component/Topicpoblem/DataStructure';
import Database from './Component/Topicpoblem/Database';
import Algo from './Component/Topicpoblem/Algo';
import AllCourses from './Components/AllCourses/AllCourses';
import CourseDetail from './Components/CourseDetail/CourseDetail'
import EnrollCourse from './Components/EnrollCourse/EnrollCourse';
import About from './Components/AboutUs/AboutUs';
import IDELanding from './Components/IDE/IDEMain/IDELanding';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AllUsers from './features/Profiles/AllUsers';
import ReviewProfile from './Components/GetCertificate/ReviewProfile';
import TakeTest from './Components/GetCertificate/TakeTest';
import CertificateConfirmPage from './Components/GetCertificate/CertificateConfirmPage';
import AllCertificate from './Components/GetCertificate/AllCertificate';
import Dashboard from './Components/Dashboard/Dashboard';
import MyCourses from './Components/Dashboard/MyCourses';
import AddCourse from './Components/Dashboard/AddCourse';
import SingleCertificate from './Components/GetCertificate/SingleCertificate/SingleCertificate';
import ParticipantInfo from './Components/GetCertificate/SingleCertificate/ParticipantInfo';
import StartTest from './Components/GetCertificate/SingleCertificate/StartTest';
import ConfirmationPage from './Components/GetCertificate/SingleCertificate/ConfirmationPage';
import CreateProblem from './Component/CreateProblem/CreateProblem';
import AllSkillTests from './Components/Dashboard/AllSkillTests';
import AddSkillTest from './Components/Dashboard/AddSkillTest';
import SkillTestWindow from './Components/GetCertificate/SingleCertificate/SkillTestWindow/SkillTestWindow';
import SecondaryTest from './Components/GetCertificate/SingleCertificate/SkillTestWindow/SecondaryTest';
import CongratulationWindow from './Components/GetCertificate/SingleCertificate/CongratulationWindow';
import Testimonials from './Components/Testimonial/Testimonals';

import Blogs from './Components/Blogs/Blogs';
import Stories from './Components/Blogs/Stories';
import WriteBlogs from './Components/Blogs/WriteBlogs';
import Notifications from './Components/Blogs/Notifications';
import HomeBlogs from './Components/Blogs/HomeBlogs';
import HelpCenter from './Components/Blogs/HelpCenter';
import MediumDraft from './Footer/CreateBlog/MediumDraft';
import AllTestimonials from './Components/Testimonial/AllTestimonials';
import BlogDetail from './Components/Blogs/BlogDetail';

// import CourseDetail from './Components/CourseDetail/CourseDetail'
// import EnrollCourse from './Components/EnrollCourse/EnrollCourse';
// import CreateProblem from './Component/CreateProblem/CreateProblem';
// import Footer2 from './Footer/Footer2';
const queryClient = new QueryClient()

function App() {
  return (
    <div >
      <QueryClientProvider client={queryClient}>

        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/:id' element={<CourseDetail></CourseDetail>}></Route>
          <Route path='enroll/:id' element={<EnrollCourse></EnrollCourse>}></Route>

          <Route path='/preparation' element={<PreparationKit></PreparationKit>}></Route>
          <Route path='/weeklypre' element={<WeeklyPreparation></WeeklyPreparation>}></Route>
          <Route path='weeklypre/:id' element={<IDELanding></IDELanding>}></Route>
          <Route path='all-testimonials' element={<AllTestimonials></AllTestimonials>}></Route>

          <Route path='/Topic' element={<Topic></Topic>}>
            <Route index element={<DataStructure></DataStructure>}></Route>
            <Route path='Database' element={<Database></Database>}></Route>
            <Route path='algo' element={<Algo></Algo>}></Route>
            
          </Route>

          <Route path='dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyCourses></MyCourses> }></Route>
            <Route path='addcourse' element={<AddCourse></AddCourse>}></Route>
            <Route path='all-users' element={<AllUsers></AllUsers>}></Route>
            <Route path='publish-Challenge' element={<CreateProblem></CreateProblem>}></Route>
            <Route path='all-skill-tests' element={<AllSkillTests></AllSkillTests>}></Route>
            <Route path='add-skill-test' element={<AddSkillTest></AddSkillTest>}></Route>
          </Route>
          

            <Route path='blogs' element={<Blogs></Blogs>}>
            <Route index  element={<HomeBlogs></HomeBlogs>}></Route>
            <Route path='stories' element={<Stories></Stories>}></Route>
            <Route path='writeblogs' element={<WriteBlogs></WriteBlogs>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>
            <Route path='helpcenter' element={<HelpCenter></HelpCenter>}></Route>
            <Route path='create-blog' element={<MediumDraft></MediumDraft>}></Route>
            <Route path='blog-detail' element={<BlogDetail></BlogDetail>}></Route>

            </Route>

          <Route path='/getcertified' element={<GetCertified></GetCertified>}></Route>
          <Route path='/allcertificate' element={<AllCertificate></AllCertificate>}></Route>
          <Route path='/skill-test-window' element={<SkillTestWindow></SkillTestWindow>}></Route>

          <Route path='/single-certificate/:id' element={<SingleCertificate></SingleCertificate>}></Route>
          <Route path='/participant-info/:id' element={<ParticipantInfo></ParticipantInfo>}></Route>
          <Route path='/start-test/:id' element={<StartTest></StartTest>}></Route>
          <Route path='/skill-test-window/:id' element={<SkillTestWindow></SkillTestWindow>}></Route>
          <Route path='/secondary-test/:id' element={<SecondaryTest></SecondaryTest>}></Route>
          

          <Route path='/contests' element={<Contests></Contests>}></Route>
          <Route path='/congratulation-window' element={<CongratulationWindow></CongratulationWindow>}></Route>
          <Route path='/reviewprofile' element={<ReviewProfile></ReviewProfile>}></Route>
          <Route path='/taketest' element={<TakeTest></TakeTest>}></Route>
          <Route path='/testconfirmation' element={<CertificateConfirmPage></CertificateConfirmPage>}></Route>
          <Route path='/testconfirmation/:id' element={<ConfirmationPage></ConfirmationPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/explore' element={<IDELanding></IDELanding>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        </Routes>
        
        <Footer></Footer>
      </QueryClientProvider>


    </div>)
}
export default App;
