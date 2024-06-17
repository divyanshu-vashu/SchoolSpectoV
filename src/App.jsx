

import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionForm from "./pages/Admission.jsx";
import BlogPage from "./pages/Blog.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import Carousel from "./component/Carousel.jsx";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import EventCalendar from "./component/EventCalendar.jsx";

import './index.css';


const notices = [
  { date: '2024-06-20', content: 'School will be closed for summer vacation from June 21 to July 5.' },
  { date: '2024-06-15', content: 'Annual Sports Day will be held on June 25.' },
  { date: '2024-06-10', content: 'Parent-Teacher meeting on June 15.' },
  { date: '2024-07-30', content: 'Summer vacation Ends, Next term commence.' },
];

const images = [
  slide1,slide2,slide3,
];


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div className='app_container'>
      <div className=''>
        <Navbar />
        <Carousel images={images}/>
        <EventCalendar notices={notices} />
      </div>
      
      
    </div>
  );
};

export default App;
