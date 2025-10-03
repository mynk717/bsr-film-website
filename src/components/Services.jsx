import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceList = [
    {
      title: "Visual Storytelling",
      description: "From cinematic documentaries and corporate films to compelling ad campaigns and web content, we bring every vision to life on screen.",
      icon: "/Visual-storytelling.png",
      gradient: "from-blue-100 via-blue-50 to-cyan-100"
    },
    {
      title: "Audio Excellence",
      description: "Crafting memorable radio jingles, immersive radio serials, and broadcast-quality songs that resonate with audiences.",
      icon: "/audio-excellence.png",
      gradient: "from-emerald-100 via-green-50 to-teal-100"
    },
    {
      title: "Digital & Creative",
      description: "Leveraging cutting-edge animation, VFX, and graphic design to build dynamic social media campaigns and digital publicity.",
      icon: "/digital-creative.png",
      gradient: "from-purple-100 via-violet-50 to-indigo-100"
    },
    {
      title: "Strategic Campaigns",
      description: "Providing end-to-end media strategy and execution for high-stakes political campaigns, PR initiatives, and outreach programs.",
      icon: "/Strategic Campaigns.png",
      gradient: "from-orange-100 via-amber-50 to-yellow-100"
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300"
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
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We offer a 360° suite of production solutions, meticulously managed from the first creative spark to the final cut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`
                relative overflow-hidden rounded-xl p-8 shadow-sm hover:shadow-lg
                bg-gradient-to-br ${service.gradient} 
                text-gray-800 
                transition-all duration-300 hover:-translate-y-2
                border border-white/50 backdrop-blur-sm
              `}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="relative z-10">
                {/* Custom Icon Image */}
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
