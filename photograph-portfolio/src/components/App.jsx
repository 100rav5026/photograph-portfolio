import React from "react";
import NavigationBar from "./TopNavigationBar";
// import Slideshow from './SlideShow';
// import HomeSectionTwo from './HomeSectionTwo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="about" Component={AboutUs}/>
            <Route path="contact" Component={ContactUs}/>
          </Routes>
      </BrowserRouter>
    </div>)
}

export default App;