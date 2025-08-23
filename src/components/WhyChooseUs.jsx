import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Decades of Mastery",
      text: "With over 25 years of hands-on experience, we bring unparalleled expertise and insight to every project."
    },
    {
      title: "Proven Trust",
      text: "As an empanelled partner for government departments, global NGOs, and leading corporations, our reliability is our reputation."
    },
    {
      title: "Artistry Meets Technology",
      text: "We seamlessly blend creative passion with technical excellence in our state-of-the-art, full-facility production house."
    },
    {
      title: "Driven by Purpose",
      text: "We are passionate storytellers committed to social responsibility, ensuring your message not only gets seen, but felt."
    }
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Why Choose BSR Films?</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-lg bg-gray-800 p-6 rounded-lg">
                <span className="text-green-400 mr-4 text-2xl mt-1">✔</span>
                <div>
                  <h3 className="font-bold text-white">{point.title}</h3>
                  <p className="text-gray-400">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;