import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';


const App =() =>{
 return(
    <>
    <Navbar />
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/service" element={<Service/>}/>
<Route exact path="/contact" element={<Contact/>}/>
</Routes>
<Footer />
    </>
 );
};

export default App;