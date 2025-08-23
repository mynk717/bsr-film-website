import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion


const About = () => {
  return (
    <motion.section id="about" 
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our Philosophy: More Than Media
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            For over two decades, our mission has been clear: to create with purpose. We believe that the most powerful stories are those that educate, inspire, and drive meaningful change. At BSR Films, we are more than a production house; we are a platform for hidden talent and a hub for innovation. By blending timeless cultural storytelling with world-class technology, we don't just produce content—we build connections and foster universal growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Leading Media Production House</h3>
            <p className="text-gray-300 mb-6">
              BSR Films is one of the leading media production houses based in Raipur, Chhattisgarh. Since the formation of the state, we have been creating innovative and impactful audio-visual content including radio jingles, serials, songs, ad films, documentaries, and docudramas.
            </p>
            <p className="text-gray-300">
              Our clientele spans government, corporate, private, and NGO sectors. We are empanelled with NFDC, All India Radio, and Chhattisgarh Samvad.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision & Motto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✔</span>
                <p className="text-gray-300"><strong className="font-semibold">Work with a purpose:</strong> Create infotainment that spreads awareness and educates.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✔</span>
                <p className="text-gray-300"><strong className="font-semibold">Promote culture & talent:</strong> Providing platforms for artists, actors, and technicians.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✔</span>
                <p className="text-gray-300"><strong className="font-semibold">Adapt & Evolve:</strong> Embracing new technologies to deliver world-class content.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;