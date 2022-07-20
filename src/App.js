import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
     
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>

      </Routes>
    </div>
  );
}

export default App;
