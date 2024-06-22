import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionForm from "./pages/Admission.jsx";
import BlogPage from "./pages/Blog.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import Carousel from "./component/Carousel.jsx";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import Footer from "./component/Footer.jsx";
import FAQ from "./component/FAQ.jsx";
import Fees from "./component/Fees.jsx";
import AboutUs from "./component/AboutUs.jsx";
import EventCalendar from "./component/EventCalendar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Account from "./pages/Account.jsx";
import UpdateNotice from "./pages/UpdateNotice.jsx";
import CreateNotice from "./pages/CreateNotice.jsx";
import Events from './component/Events';
import School from './component/School';
import Workplace from './component/Workplace';

import './index.css';


const images = [
  slide1, slide2, slide3,
];

const App = () => {
  const aboutUsRef = useRef(null);
  const feesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <Navbar onScrollToSection={scrollToSection} aboutUsRef={aboutUsRef} feesRef={feesRef} />
      <Routes>
        <Route path="/" element={<MainLayout aboutUsRef={aboutUsRef} feesRef={feesRef} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin/create" element={<CreateNotice />} />
        <Route path="/admin/update/:id" element={<UpdateNotice />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = ({ aboutUsRef, feesRef }) => {
  return (
    <div className='app_container'>
      <Navbar />
      <Carousel images={images} />
      <EventCalendar />
      <Hero />
      <Events />
      <School />
      <Workplace />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={feesRef}>
        <Fees />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
