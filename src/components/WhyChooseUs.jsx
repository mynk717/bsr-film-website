import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Decades of Mastery",
      text: "With over 25 years of hands-on experience, we bring unparalleled expertise and insight to every project.",
      icon: "➤",
      gradient: "from-blue-100 via-blue-50 to-cyan-100",
    },
    {
      title: "Proven Trust",
      text: "As an empanelled partner for government departments, global NGOs, and leading corporations, our reliability is our reputation.",
      icon: "➤",
      gradient: "from-emerald-100 via-green-50 to-teal-100",
    },
    {
      title: "Artistry Meets Technology",
      text: "We seamlessly blend creative passion with technical excellence in our state-of-the-art, full-facility production house.",
      icon: "➤",
      gradient: "from-purple-100 via-violet-50 to-indigo-100",
    },
    {
      title: "Driven by Purpose",
      text: "We are passionate storytellers committed to social responsibility, ensuring your message not only gets seen, but felt.",
      icon: "➤",
      gradient: "from-orange-100 via-amber-50 to-yellow-100",
    }
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Experience the BSR advantage</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className={`
                p-6 rounded-xl shadow-sm hover:shadow-lg
                bg-gradient-to-br ${point.gradient}
                text-gray-800 
                transition-all duration-300 hover:-translate-y-1
                flex items-start space-x-4
                border border-white/50 backdrop-blur-sm
              `}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="text-3xl flex-shrink-0">{point.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
