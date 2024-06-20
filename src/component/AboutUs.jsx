import React from 'react';
import '../styles/AboutUs.css';

const images = [
  { src: '/images/1.jpg', heading: 'Over Vision', content: 'Our vision is to create a lovable and nurturing environment for both parents and children by setting new benchmarks through a trans disciplinary, competency driven and reformative ecosystem and make them self-adaptive & resilient future ready global citizens' },
  { src: '/images/2.jpg', heading: 'Our Mission', content: 'Our mission is to create lifelong leaders. Leaders International School is dedicated towards imbibing moral, spiritual and ethical values in each child. We not only focus upon teaching a concept but create environment where children can hone their own skills and potential.' },
  { src: '/images/3.jpg', heading: 'Our Core Team', content: 'She is a dynamic educationist and parenting proficient whose commitment to the cause of education is well known by all. As an expert on parenting, she has given parenting its due importance and popularity. Her work has been acknowledged by HRD ministry along with ASSOCHAM' },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Prakash Play School</h1>
      <p>Little Leaders School under the aegis of Leaders Learning House Pvt. Ltd. is an innovative social enterprise with a vision to transform India's schools. The school is promoted by alumni of IIM/ IIT and professionals having more than 50 years of experience in the field of education. Little Leaders has high-quality curriculum, training, assessment and on-going support capabilities, the single goal of all the teachers in 'Little Leaders' is to provide children with a culturally sound environment, right values, love and protection needed for a healthy body, mind and soul in the most critical phase of a child's growing years. </p>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.src} alt={image.heading} className="image" />
            <div className="image-overlay">
              <p>{image.content}</p>
            </div>
            <div className="image-heading">
              <h2>{image.heading}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
