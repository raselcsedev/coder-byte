import React from 'react';
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
const queryClient = new QueryClient()

function App() {
  return (
    <div>
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

          <Route path='/Topic' element={<Topic></Topic>}>
            <Route index element={<DataStructure></DataStructure>}></Route>
            <Route path='Database' element={<Database></Database>}></Route>
            <Route path='algo' element={<Algo></Algo>}></Route>
          </Route>

          <Route path='/getcertified' element={<GetCertified></GetCertified>}></Route>
          <Route path='/contests' element={<Contests></Contests>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/explore' element={<IDELanding></IDELanding>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        </Routes>
        <Footer></Footer>
        {/* <AllUsers></AllUsers> */}
      </QueryClientProvider>


    </div>)
}
export default App;
