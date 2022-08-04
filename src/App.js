import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import Header from './Components/Header/Header';
import Contests from './Components/GetCertificate/Contests';
import GetCertified from './Components/GetCertificate/GetCertified';

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Footer from './Footer/Footer';
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
import AllUsers from './features/Profiles/AllUsers';
import ReviewProfile from './Components/GetCertificate/ReviewProfile';
import TakeTest from './Components/GetCertificate/TakeTest';
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
          <Route path='weeklypre/:id' element={<CodeEditor></CodeEditor>}></Route>

          <Route path='/Topic' element={<Topic></Topic>}>
            <Route index element={<DataStructure></DataStructure>}></Route>
            <Route path='Database' element={<Database></Database>}></Route>
            <Route path='algo' element={<Algo></Algo>}></Route>
          </Route>

          <Route path='/getcertified' element={<GetCertified></GetCertified>}></Route>
          <Route path='/contests' element={<Contests></Contests>}></Route>
          <Route path='/reviewprofile' element={<ReviewProfile></ReviewProfile>}></Route>
          <Route path='/taketest' element={<TakeTest></TakeTest>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/explore' element={<CodeEditor></CodeEditor>}></Route>
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
