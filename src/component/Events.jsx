// src/components/Events.js

import React from 'react';
// import './Events.css';
import '../styles/school.css';

const Events = () => {
  return (
    <section id="events">
      <h1>Events</h1>
      <div className="event-container">
        {[
          { src: "img-1.jpg", title: "Event 1: School Fair" },
          { src: "img-2.jpg", title: "Event 2: Sports Day" },
          { src: "img-3.jpg", title: "Event 3: Science Exhibition" },
          { src: "img-4.jpg", title: "Event 4: Art Competition" },
          { src: "img-5.jpg", title: "Event 5: Music Concert" },
        ].map((event, index) => (
          <div className="event small" key={index}>
            <img src={`images/${event.src}`} alt={event.title} />
            <div className="overlay">
              <h1>{event.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                necessitatibus dolorum ducimus enim, quis dolor itaque veniam
                quibusdam, tenetur, illum eius. Voluptatem quod architecto, ea
                porro nobis veniam laboriosam iste.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;