import './App.css';
import FullPage from './Components/FullPage/FullPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/Architecture-Engineer-Portfolio-Website' element={<FullPage />} />
          <Route path='/Architecture-Engineer-Portfolio-Website/project/:name' element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
