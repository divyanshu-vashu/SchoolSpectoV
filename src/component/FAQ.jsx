import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  { question: "What is the admission process?", answer: "The admission process includes submitting an application form, attending an interview, and completing the necessary paperwork." },
  { question: "What are the school hours?", answer: "The school hours are from 8:00 AM to 3:00 PM from Monday to Friday." },
  { question: "What extracurricular activities are offered?", answer: "We offer a variety of extracurricular activities including sports, music, dance, and art." },
  // Add more FAQs here
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}>&#9660;</span>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
