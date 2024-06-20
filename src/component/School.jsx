// src/components/School.js

import React from 'react';
// import './School.css';
import '../styles/school.css';

const School = () => {
  return (
    <section id="school">
      <h1>About Our School</h1>
      <h2>A complete international <br /> Baccalaureate education</h2>
      <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore impedit suscipit et, perspiciatis temporibus quaerat, nemo laboriosam, quisquam veritatis labore blanditiis accusamus commodi dignissimos. Labore culpa hic consectetur expedita optio sit ratione natus officiis atque maxime fuga saepe, deserunt facilis rem nostrum porro sunt dicta odit officia laborum ipsa ab?</h3>
      <div>
        {["img-1.jpg", "img-2.jpg", "img-3.jpg"].map((src, index) => (
          <img src={`images/${src}`} alt={`School ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
}

export default School;