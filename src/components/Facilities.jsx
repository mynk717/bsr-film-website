import React from 'react';

const Facilities = () => {
  const facilitiesList = [
    { icon: '🎬', title: "Modern Editing Setup", description: "Two state-of-the-art editing suites for post-production." },
    { icon: '🎤', title: "Audio Recording Studio", description: "High-end studio for professional voice-overs and music." },
    { icon: '🎥', title: "Green Screen Studio", description: "Multi-camera setup with professional lighting for VFX." },
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Our Facilities</h2>
          <p className="mt-4 text-xl text-gray-400">End-to-end production with world-class quality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">{facility.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
              <p className="text-gray-400">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;