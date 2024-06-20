// src/components/Workplace.js

import React from 'react';
// import './Workplace.css';
import '../styles/school.css';

const Workplace = () => {
  return (
    <section id="workplace">
      <h1>Workplace</h1>
      <div className="workplace">
        <div>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, recusandae!</h4>
          <h1>Making Today's Learning Count in Tomorrow's Workplace</h1>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia odio ipsum quis voluptatem eaque quo nisi repellat nemo adipisci animi perspiciatis, expedita similique numquam pariatur delectus fuga maiores ex vero rem. Deleniti, voluptate sint officiis optio cum perspiciatis voluptas voluptatibus ea, aliquam perferendis atque, vitae impedit soluta dolorum.
          </h4>
        </div>
        <img className="workplace-img" src="images/img-11.jpg" alt="Workplace" />
      </div>

      <div className="vision">
        <div className="circle"></div>
        <div className="links">
          <p>Quick Link</p>
          <hr />
          <p><a href="#">ENROLLING AT DAV</a></p>
          <hr />
          <p><a href="#">LATEST NEWS</a></p>
          <hr />
          <p><a href="#">APPLICATION ENQUIRY</a></p>
          <hr />
        </div>
      </div>
      <div className="png-image">
        <div>
          <div><img className="png" src="images/img-10.jpg" alt="Educational Vision" /></div>
          <div className="text">
            <h4>HIGH-QUALITY SECONDARY LEARNING</h4>
            <h1>Educational Vision</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatum cum exercitationem consectetur alias eius deleniti ad asperiores possimus pariatur.</h4>
            <p className="about-sh"><a href="#">ABOUT OUR SCHOOL</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workplace;