import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import Header from './Components/Header/Header';
import Contests from './Components/GetCertificate/Contests';
import GetCertified from './Components/GetCertificate/GetCertified';

// new home page import
import Navbar from './NewComponents/components/Navbar/Navbar';
import Home from './NewComponents/components/Home/Home';
import Banner from './NewComponents/components/Banner/Banner';
import Explore from './NewComponents/components/Exploring/Explore';
import Preparation from './NewComponents/components/Preparation/Preparation';
import Certification from './NewComponents/components/Certification/Certification';
import Testimonials from './NewComponents/components/Testimonials/Testimonials';
import Environment from './NewComponents/components/Environment/Environment';
import ReadyMessage from './NewComponents/components/ReadyMessage/ReadyMessage';
import Footer from './NewComponents/components/Footer/Footer';
// end

import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import PreparationKit from './Component/PreparationKit/PreparationKit';
import WeeklyPreparation from './Component/PreparationKit/WeeklyPreparation';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Topic from './Component/Topicpoblem/Topic';
import DataStructure from './Component/Topicpoblem/DataStructure';
import Database from './Component/Topicpoblem/Database';
import Algo from './Component/Topicpoblem/Algo';
import AllCourses from './Components/AllCourses/AllCourses';
import CourseDetail from './Components/CourseDetail/CourseDetail'
import EnrollCourse from './Components/EnrollCourse/EnrollCourse';
import About from './Components/AboutUs/AboutUs';
import ReviewProfile from './Components/GetCertificate/ReviewProfile';
import TakeTest from './Components/GetCertificate/TakeTest';
import CertificateConfirmPage from './Components/GetCertificate/CertificateConfirmPage';
import AllCertificate from './Components/GetCertificate/AllCertificate';
import Dashboard from './Components/Dashboard/Dashboard';
import MyCourses from './Components/Dashboard/MyCourses';
import AddCourse from './Components/Dashboard/AddCourse';
import Blogs from './Components/Blogs/Blogs';
import Stories from './Components/Blogs/Stories';
import WriteBlogs from './Components/Blogs/WriteBlogs';
import Notifications from './Components/Blogs/Notifications';
import HomeBlogs from './Components/Blogs/HomeBlogs';
import HelpCenter from './Components/Blogs/HelpCenter';
const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>

        {/* <Header></Header> */}
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/:id' element={<CourseDetail></CourseDetail>}></Route>
          <Route path='enroll/:id' element={<EnrollCourse></EnrollCourse>}></Route>

          <Route path='/preparation' element={<PreparationKit></PreparationKit>}></Route>
          <Route path='/weeklypre' element={<WeeklyPreparation></WeeklyPreparation>}></Route>
          <Route path='weeklypre/:id' element={<CodeEditor></CodeEditor>}></Route>

          <Route path='/Topic' element={<Topic></Topic>}>
            <Route index element={<DataStructure></DataStructure>}></Route>
            <Route path='Database' element={<Database></Database>}></Route>
            <Route path='algo' element={<Algo></Algo>}></Route>
          </Route>

          <Route path='dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyCourses></MyCourses>}></Route>
            <Route path='addcourse' element={<AddCourse></AddCourse>}></Route>

          </Route>

            <Route path='blogs' element={<Blogs></Blogs>}>
            <Route index path='homeblogs' element={<HomeBlogs></HomeBlogs>}></Route>
            <Route path='stories' element={<Stories></Stories>}></Route>
            <Route path='writeblogs' element={<WriteBlogs></WriteBlogs>}></Route>
            <Route path='notifications' element={<Notifications></Notifications>}></Route>
            <Route path='helpcenter' element={<HelpCenter></HelpCenter>}></Route>
            </Route>

          <Route path='/getcertified' element={<GetCertified></GetCertified>}></Route>
          <Route path='/allcertificate' element={<AllCertificate></AllCertificate>}></Route>
          <Route path='/contests' element={<Contests></Contests>}></Route>
          <Route path='/reviewprofile' element={<ReviewProfile></ReviewProfile>}></Route>
          <Route path='/taketest' element={<TakeTest></TakeTest>}></Route>
          <Route path='/testconfirmation' element={<CertificateConfirmPage></CertificateConfirmPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/explore' element={<CodeEditor></CodeEditor>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/sign-in' element={<SignIn></SignIn>}></Route>





          <Route path="/" element={<Home></Home>}></Route>
        <Route path="/banner" element={<Banner></Banner>}></Route>
        <Route path="/explores" element={<Explore></Explore>}></Route>
        <Route path="/preparations" element={<Preparation></Preparation>}></Route>
        <Route path="/certification" element={<Certification></Certification>}></Route>
        <Route path="/testimonials" element={<Testimonials></Testimonials>}></Route>
        <Route path="/environment" element={<Environment></Environment>}></Route>
        <Route path="/ready" element={<ReadyMessage></ReadyMessage>}></Route>
        </Routes>
        <Footer></Footer>
        {/* <AllUsers></AllUsers> */}
      </QueryClientProvider>


    </div>)
}
export default App;
