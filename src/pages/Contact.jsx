import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      feedback: "",
    });

    const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      feedback: "",
    });
  };


  return (
     <section className="w-full  bg-[#CCCFDA] pt-[20vh] pb-[10vh] ">
      <div
        className="
          max-w-3xl
          mx-auto
          bg-[#E3E6F3]
          rounded-2xl
          shadow-lg
          py-8 px-16
          border-[#088178]
          border-2
        "
      >
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-800
            "
          >
            Contact Us
          </h2>

          <p className="text-gray-500 mt-1">
            We'd love to hear your suggestions and feedback.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="
                block
                mb-2
                font-semibold
                text-gray-700
              "
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="
                w-full
                border
              
                rounded-lg
                px-4
                py-3
                outline-none
                border-[#088178]
                transition-all
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="
                block
                mb-2
                font-semibold
                text-gray-700
              "
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full
                border
              
                rounded-lg
                px-4
                py-3
                outline-none
                border-[#088178]
                transition-all
              "
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="
                block
                mb-2
                font-semibold
                text-gray-700
              "
            >
              Suggestion / Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your subject"
              required
              className="
                w-full
                border
              
                rounded-lg
                px-4
                py-3
                outline-none
                border-[#088178]
                transition-all
              "
            />
          </div>

          {/* Feedback */}
          <div>
            <label
              htmlFor="feedback"
              className="
                block
                mb-2
                font-semibold
                text-gray-700
              "
            >
              Feedback
            </label>

            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write your feedback..."
              required
              className="
                w-full
                border
              
                rounded-lg
                px-4
                py-3
                outline-none
                resize-none
                border-[#088178]
                transition-all
              "
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              bg-[#088178]
              text-white
              py-3
              rounded-lg
              font-semibold
              hover:bg-[#066963]
              transition-all
              duration-300
              cursor-pointer
              hover:scale-95
            "
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
    
  );
};

export default Contact
