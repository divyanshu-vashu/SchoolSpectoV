import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Admission = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    DOB: "",
    city: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.DOB) newErrors.DOB = "Date of Birth is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.number) newErrors.number = "Mobile Number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_DOB: form.DOB,
          from_city: form.city,
          from_number: form.number,
          to_name: "Prakashplayschool",
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching to us. We will get back to you as soon as possible😊.");
          setForm({
            name: "",
            email: "",
            DOB: "",
            city: "",
            number: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-white rounded-2xl">
      <motion.div className="flex-[0.75] bg-white p-8 rounded-2xl">
        <p>Get in touch</p>
        <h3>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Child's Age</span>
            <input
              type="date"
              name="DOB"
              value={form.DOB}
              onChange={handleChange}
              placeholder="What's your child's age?"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.DOB && <span className="text-red-500">{errors.DOB}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Mobile Number</span>
            <input
              type="number"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.number && <span className="text-red-500">{errors.number}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email ID"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your City</span>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Your City"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.city && <span className="text-red-500">{errors.city}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">your message</span>
            <textarea

              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              required
            />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <div className="contact-img">
          <img src="/c2.png" alt="Contact Image" />
        </div>
      </motion.div>
    </div>
  );
};

export default Admission;
