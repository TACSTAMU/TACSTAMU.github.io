import logo from './logo.svg';
import Test from './Test';
import Test2 from './test2.js';
import Mentor from './Mentor';
import Volunteer from './Volunteer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    

      
      
      <Routes>
          <Route path="/TACSTAMU.github.io" element={<Test />} />
          
          <Route path="/build4good" element={<Test2 />} />
          <Route path="/b4g-mentor" element={<Mentor />} />
          <Route path="/b4g-volunteer" element={<Volunteer />} />
        </Routes>
      
    
    
    </Router>
  );
}

export default App;
