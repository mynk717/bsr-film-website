import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            A trusted name in creative storytelling with purpose.
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
    </section>
  );
};

export default About;