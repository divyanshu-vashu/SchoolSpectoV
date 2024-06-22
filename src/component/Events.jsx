import React from "react";

const Events = () => {
  return (
    <section id="events" className="relative h-[110vh]">
      <h1 className="mb-6 text-3xl font-bold ">Events</h1>
      <div className="flex w-fit overflow-x-scroll absolute mb-12">
        {[
          { src: "img-1.jpg", title: "Event 1: School Fair" },
          { src: "img-2.jpg", title: "Event 2: Sports Day" },
          { src: "img-3.jpg", title: "Event 3: Science Exhibition" },
          { src: "img-4.jpg", title: "Event 4: Art Competition" },
          { src: "img-5.jpg", title: "Event 5: Music Concert" },
        ].map((event, index) => (
          <div key={index} className="relative w-[50vh] h-[100vh]">
            <img
              src={`images/${event.src}`}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 items-center justify-center bg-black bg-opacity-50 p-4 text-white">
              <h1 className="mb-2 text-lg font-bold">{event.title}</h1>
              <p className="text-sm">
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
};

export default Events;
