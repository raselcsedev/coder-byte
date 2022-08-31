import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
// import CodeEditor from './Components/CodeEditor/CodeEditor';
// import CodeEditor from './Components/Blogs/CreateB
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Footer from './Footer/Footer';
import PreparationKit from './Component/PreparationKit/PreparationKit';
import WeeklyPreparation from './Component/PreparationKit/WeeklyPreparation';
import Aproblem from './Component/PreparationKit/Aproblem';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Topic from './Component/Topicpoblem/Topic';
import DataStructure from './Component/Topicpoblem/DataStructure';
import Database from './Component/Topicpoblem/Database';
import Algo from './Component/Topicpoblem/Algo';
import AllCourses from './Components/AllCourses/AllCourses';
import Discussion from './Component/Discussion/Discussion';
import Temp from './Component/TempRout/Temp';
// import CourseDetail from './Components/CourseDetail/CourseDetail'
// import EnrollCourse from './Components/EnrollCourse/EnrollCourse';
// import CreateProblem from './Component/CreateProblem/CreateProblem';
// import Footer2 from './Footer/Footer2';
const queryClient = new QueryClient()

export const PassingPrblm = createContext("problem");
function App() {
  const [ProblemData, SetProblem] = useState([]);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=>res.json())
  //   .then(data=>SetProblem(data))
  // },[])
  return (
    <>
      <PassingPrblm.Provider value={[ProblemData, SetProblem]}>
        <div className="App">

          <QueryClientProvider client={queryClient}>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='discussion' element={<Discussion></Discussion>}></Route>
              <Route path='/courses' element={<AllCourses></AllCourses>}></Route>
              {/* <Route path='/:id' element={<CourseDetail></CourseDetail>}></Route> */}
              {/* <Route path='enroll/:id' element={<EnrollCourse></EnrollCourse>}></Route> */}

              <Route path='/preparation' element={<PreparationKit></PreparationKit>}></Route>
              <Route path='/weeklypre' element={<WeeklyPreparation></WeeklyPreparation>}></Route>
              {/* <Route path='weeklypre/:id' element={<CodeEditor></CodeEditor>}></Route> */}
              <Route path='/Topic' element={<Topic></Topic>}>

                <Route index element={<DataStructure></DataStructure>}></Route>
                <Route path='Database' element={<Database></Database>}></Route>
                <Route path='algo' element={<Algo></Algo>}></Route>
              </Route>
              {/* <Route path='/editor' element={<CodeEditor></CodeEditor>}></Route> */}
              <Route path='/profile' element={<Profile></Profile>}></Route>
              <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
              <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
              {/* <Route path='/temp' element={<Temp></Temp>}></Route> */}

              {/* <Route path='/createproblem' element={<CreateProblem></CreateProblem>}></Route> */}
              {/* hello world  */}
            </Routes>
            {/* <Footer></Footer> */}
          </QueryClientProvider>
          {/* <Footer2></Footer2> */}
        </div>
      </PassingPrblm.Provider>
    </>
  )
}
export default App;
