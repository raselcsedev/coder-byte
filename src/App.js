import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Codevideo from './Components/CodeVideo/Codevideo';
import FeaturedCompanies from './Components/FeaturedCompanies/FeaturedCompanies';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Header from './Components/Header/Header';
import Languages from './Components/Languages/Languages';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
     
        <Route path='/lan' element={<Languages></Languages>}></Route>
        <Route path='/video' element={<Codevideo></Codevideo>}></Route>
        <Route path='/com' element={<FeaturedCompanies></FeaturedCompanies>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>

      </Routes>
    </div>
  );
}

export default App;
