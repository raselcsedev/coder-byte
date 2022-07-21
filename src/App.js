import logo from './logo.svg';
import './App.css';
import DashbordMain from './Component/DashbordMain/DashbordMain';
import Nav from './Component/Nav/Nav';
import HomePage from './Component/HomePage/HomePage';
import Video from './Component/Video/Video';
import Footer from './Footer/Footer';
import Course from './Component/Courses/Course';


function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      {/* <DashbordMain></DashbordMain> */}
      <HomePage></HomePage>
      {/* <Video></Video> */}
      <Course></Course>
      <Footer></Footer>

      
     

    </div>
  );
}

export default App;
