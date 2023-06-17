import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Navbar} from "./components/navbar/Navbar";
import {Home} from "./components/home/Home";
import {Portfolio} from "./components/portfolio/Portfolio";
import {About} from "./components/about/About";
import {Contact} from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
