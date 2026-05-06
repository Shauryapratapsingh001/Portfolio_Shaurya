import React, { useState } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // you can send this to backend later
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-[#0d1117] px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5 mt-15  text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 text-center md:text-left">
            About Me
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl">
            I am a passionate
            <span className="text-blue-500 font-semibold">
              {" "}
              MERN Stack Developer and Prompt Engineer{" "}
            </span>
            with experience building responsive and scalable web applications. I
            specialize in developing full-stack solutions using **{" "}
            <span className="text-blue-500 font-semibold">
              React.js, and Node.js
            </span>
            **, along with working knowledge of **MySQL** for relational
            database management.
            <br />
            <br />
            During my **
            <span className="text-blue-500 font-semibold">
              Full Stack Web Development Internship at SpeakingFever
            </span>
            **, I worked on building responsive frontend modules and developing
            backend APIs using modern JavaScript technologies. This experience
            helped me strengthen my skills in creating efficient and
            user-friendly applications.
            <br />
            <br />I have also completed coursework from **
            <span className="text-blue-500 font-semibold">Great learning</span>
            **, gaining hands-on experience in database management, data
            modeling, and backend optimization.
            <br />
            <br />I enjoy solving real-world problems, learning new
            technologies, and building modern applications that deliver scalable
            and meaningful user experiences....
          </p>
          <button
            onClick={() =>
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-500 hover:bg-orange-600 py-3 px-3 mb-5 rounded-lg font-semibold"
          >
            View work
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-5  text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 text-center">
            Contact
          </h1>

          <div className="flex flex-col gap-3 text-lg items-center">
            <h4 className="flex items-center gap-2">
              <IoMdMailUnread className="text-blue-500" />
              shauryapsingh000@gmail.com
            </h4>

            <h4 className="flex items-center gap-2">
              <MdContactPhone className="text-blue-500" />
              +91 798-290-0000
            </h4>

            <h4 className="flex items-center gap-2">
              <FaLocationDot className="text-blue-500" />
              Lucknow, India
            </h4>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col gap-5"
          >
            <h2 className="text-2xl font-bold text-center">Contact Me</h2>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
