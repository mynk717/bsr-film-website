import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceList = [
    {
      title: "Visual Storytelling",
      description: "From cinematic documentaries and corporate films to compelling ad campaigns and web content, we bring every vision to life on screen."
    },
    {
      title: "Audio Excellence",
      description: "Crafting memorable radio jingles, immersive radio serials, and broadcast-quality songs that resonate with audiences."
    },
    {
      title: "Digital & Creative",
      description: "Leveraging cutting-edge animation, VFX, and graphic design to build dynamic social media campaigns and digital publicity."
    },
    {
      title: "Strategic Campaigns",
      description: "Providing end-to-end media strategy and execution for high-stakes political campaigns, PR initiatives, and outreach programs."
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our Canvas of Capabilities
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            We offer a 360° suite of production solutions, meticulously managed from the first creative spark to the final cut.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;