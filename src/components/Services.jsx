import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: "Films & Videos",
      description: "Documentaries, Corporate Films, Ad Films, TV Commercials, Web Content."
    },
    {
      title: "Audio Production",
      description: "Radio Jingles, Radio Serials, and Songs (Audio & Video)."
    },
    {
      title: "Creative & Digital",
      description: "Animation, VFX, Social Media Handling, and Graphic Designing."
    },
    {
      title: "Political Campaigns",
      description: "End-to-end media solutions for political campaigns and outreach."
    },
    {
      title: "Events & Outreach",
      description: "PR Campaigns, Workshops, and Orientation Programs."
    },
    {
      title: "Technology",
      description: "Mobile Apps, Technical Upgrades, and Content Partnerships."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Providing 360° media production solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;