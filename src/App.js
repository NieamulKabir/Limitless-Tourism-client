
import './App.css';
// import ScrollToTop from "react-scroll-to-top";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';

import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
       
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
