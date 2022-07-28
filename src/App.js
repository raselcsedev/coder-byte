import logo from './logo.svg';
import './App.css';
import DashbordMain from './Component/DashbordMain/DashbordMain';
import Nav from './Component/Nav/Nav';
import HomePage from './Component/HomePage/HomePage';
import Video from './Component/Video/Video';
import Footer from './Footer/Footer';
import Course from './Component/Courses/Course';
import PreparationKit from './Component/PreparationKit/PreparationKit';
import { Route, Routes } from 'react-router-dom';
import WeeklyPreparation from './Component/PreparationKit/WeeklyPreparation';
import Aproblem from './Component/PreparationKit/Aproblem';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Topic from './Component/Topicpoblem/Topic';
import DataStructure from './Component/Topicpoblem/DataStructure';
import Database from './Component/Topicpoblem/Database';
import Algo from './Component/Topicpoblem/Algo';
const queryClient = new QueryClient()
function App() {
  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
      <Nav></Nav>
      {/* <DashbordMain></DashbordMain> */}
      {/* <HomePage></HomePage> */}
      {/* <Video></Video> */}
      {/* <Course></Course> */}
      {/* <Footer></Footer> */}
      <Routes>
        <Route path='/'element={<HomePage></HomePage> }></Route>
        <Route path='/preparation'element={<PreparationKit></PreparationKit>}></Route>
        <Route path='/weeklypre'element={<WeeklyPreparation></WeeklyPreparation>}></Route>
        <Route path='weeklypre/:id'element={<Aproblem></Aproblem>}></Route>
        <Route path='/Topic'element={<Topic></Topic>}>

          <Route index element={<DataStructure></DataStructure>}></Route>
          <Route path='Database' element={<Database></Database>}></Route>
          <Route path='algo' element={<Algo></Algo>}></Route>
        </Route>
        
      </Routes>
   
      </QueryClientProvider>
    </div>
  );
}

export default App;
