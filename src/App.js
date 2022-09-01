import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Student from './Component/Student';
import Details from './Component/Details';
import AddStudent from './Component/AddStudent';
// import EditDetails from './Component/EditDetails';

function App() {
  return (
    <div className="App">
      <Details>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element = {<Home />} />
          <Route path='/student' element = {<Student />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/add-student' element = {<AddStudent />} />
          {/* <Route path='/add-student' element={<EditDetails />} /> */}

        </Routes>

      </BrowserRouter>
      </Details>
    </div>
  );
}

export default App;
