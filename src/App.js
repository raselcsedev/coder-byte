import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import SignIn from './Components/Auth/SignIn';
// import SignUp from './Components/Auth/SignUp';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import GetCertified from './Components/GetCertificate/GetCertified';
/* import Editor from './Components/CodeEditor/Editor';
import Codevideo from './Components/CodeVideo/Codevideo';
import FeaturedCompanies from './Components/FeaturedCompanies/FeaturedCompanies'; */
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/editor' element={<CodeEditor></CodeEditor>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/getcertified' element={<GetCertified></GetCertified>}></Route>
        {/* <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
