import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300" 
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Our Philosophy: More Than Media</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            For over two decades, our mission has been clear: to create with purpose. We believe that the most powerful stories are those that educate, inspire, and drive meaningful change. At BSR Films, we are more than a production house; we are a platform for hidden talent and a hub for innovation. By blending timeless cultural storytelling with world-class technology, we don't just produce content—we build connections and foster universal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 p-8 rounded-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Leading Media Production House</h3>
              <p className="text-gray-700 mb-6">
                BSR Films is one of the leading media production houses based in Raipur, Chhattisgarh. Since the formation of the state, we have been creating innovative and impactful audio-visual content including radio jingles, serials, songs, ad films, documentaries, and docudramas.
              </p>
              <p className="text-gray-700">
                Our clientele spans government, corporate, private, and NGO sectors. We are empanelled with NFDC, All India Radio, and Chhattisgarh Samvad.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 p-8 rounded-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Our Vision & Motto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✔</span>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-800">Work with a purpose:</strong> Create infotainment that spreads awareness and educates.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✔</span>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-800">Promote culture & talent:</strong> Providing platforms for artists, actors, and technicians.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✔</span>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-800">Adapt & Evolve:</strong> Embracing new technologies to deliver world-class content.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
