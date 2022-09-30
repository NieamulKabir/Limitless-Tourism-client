
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';
import Event from './Pages/Event/Event';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </div>
  );
}

export default App;
