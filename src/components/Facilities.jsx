import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilitiesList = [
    { 
      icon: '/video-editing.png', // Camera setup for movie recording
      iconType: 'image',
      title: "Modern Editing Setup", 
      description: "Two state-of-the-art editing suites for post-production.",
      gradient: "from-blue-100 via-blue-50 to-cyan-100"
    },
    { 
      icon: '/audio-recording.png', // Person using mic for recording
      iconType: 'image',
      title: "Audio Recording Studio", 
      description: "High-end studio for professional voice-overs and music.",
      gradient: "from-emerald-100 via-green-50 to-teal-100"
    },
    { 
      icon: '/green-screen.png', // Your custom green screen icon
      iconType: 'image',
      title: "Green Screen Studio", 
      description: "Multi-camera setup with professional lighting for VFX.",
      gradient: "from-green-100 via-green-50 to-emerald-100"
    },
  ];

  return (
    <motion.section
      id="facilities"
      className="py-20 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Our Facilities</h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            End-to-end production with world-class quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => (
            <motion.div 
              key={index} 
              className={`
                p-8 rounded-xl shadow-sm hover:shadow-lg
                bg-gradient-to-br ${facility.gradient} 
                text-gray-800 
                transition-all duration-300 hover:-translate-y-2
                border border-white/50 backdrop-blur-sm
              `}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Conditional rendering for emoji vs image icons */}
              {facility.iconType === 'emoji' ? (
                <div className="text-6xl mb-4">{facility.icon}</div>
              ) : (
                <img 
                  src={facility.icon} 
                  alt={`${facility.title} icon`}
                  className="w-16 h-16 mb-4 mx-auto object-contain"
                />
              )}
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {facility.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Facilities;
