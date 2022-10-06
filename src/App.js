
import './App.css';
// import ScrollToTop from "react-scroll-to-top";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';

import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packageDetails/:packageId" element={<PackageDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
