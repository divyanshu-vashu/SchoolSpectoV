import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Popup = ({ show, onClose }) => {
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching to us. We will get back to you as soon as possible😊.",
          );
          setForm({
            name: "",
            email: "",
            DOB: "",
            city: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative mt-[15vh] rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 font-bold text-black"
        >
          X
        </button>
        <h1 className="text-2xl font-bold">Enquire Now!</h1>
        <h2>Fill out this form and we'll contact you!</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-black">Child's Date of Birth*</span>
            <input
              type="date"
              name="DOB"
              value={form.DOB}
              onChange={handleChange}
              placeholder="What's your child's age?"
              className="bg-tertiary rounded-lg border-none px-4 py-2 text-black outline-none placeholder:text-black"
              required
            />
            {errors.DOB && <span className="text-red-500">{errors.DOB}*</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black">Your Name*</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary rounded-lg border-none px-4 py-2 text-black outline-none placeholder:text-black"
              required
            />
            {errors.name && (
              <span className="text-red-500">{errors.name}*</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-black">Your Mobile Number*</span>
            <input
              type="number"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="bg-tertiary rounded-lg border-none px-4 py-2 text-black outline-none placeholder:text-black"
              required
            />
            {errors.number && (
              <span className="text-red-500">{errors.number}*</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-black">Email*</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email ID"
              className="bg-tertiary rounded-lg border-none px-4 py-2 text-black outline-none placeholder:text-black"
              required
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}*</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-black">Your City*</span>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Your City"
              className="bg-tertiary rounded-lg px-4 py-2 text-black outline-none placeholder:text-black"
              required
            />
            {errors.city && <span className="text-red-500">{errors.city}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-black">Any questions or extra details?</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary placeholder:text-md border-1 rounded-lg border-solid border-black bg-[#dcdcdc] px-4 py-2 text-black outline-none placeholder:text-black"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>
          <button
            type="submit"
            className="bg-tertiary text-md shadow-primary rounded-xl bg-gray-400 px-6 py-2 text-[1.5rem] font-bold text-black shadow-md"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
