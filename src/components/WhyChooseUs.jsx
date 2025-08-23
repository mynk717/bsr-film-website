import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    "25+ Years of Experience",
    "Trusted by Government, Corporates & NGOs",
    "Blend of Creativity & Technical Excellence",
    "Full-Facility Production House",
    "Passion for Storytelling & Social Responsibility"
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
              <li key={index} className="flex items-center text-lg bg-gray-800 p-4 rounded-lg">
                <span className="text-green-400 mr-4 text-2xl">✔</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;