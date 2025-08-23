import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  // Update this list with your client names and URLs
  // Use 'null' for the URL if you don't want a client name to be a link
  const majorClients = [
    { name: "World Bank", url: "https://www.worldbank.org" },
    { name: "NABARD", url: "https://www.nabard.org" },
    { name: "UNICEF", url: "https://www.unicef.org" },
    { name: "SHRC", url: null },
    { name: "CHRI", url: null },
    { name: "IFFCO", url: "https://www.iffco.in" },
    { name: "Birla Group", url: "https://www.adityabirla.com" },
    { name: "DDUGKY", url: null },
    { name: "SRLM", url: null },
    { name: "PRIYA NGO", url: null }
  ];

  const govDepartments = [
    "Public Relations", "Labour Department", "Panchayat & Rural Development",
    "Public Health Engineering", "Urban Administration", "Health & Family Welfare",
    "Women & Child Development", "School Education", "Water Resources Dept.",
    "Agriculture Dept.", "Forest Department", "Social Welfare Dept.", "CG Police",
    "Chhattisgarh Women Commission"
  ];

  const ClientTag = ({ client }) => {
    const content = (
      <div className={`bg-gray-800 py-2 px-4 rounded-full text-sm whitespace-nowrap ${client.url ? 'hover:bg-blue-600 transition-colors' : ''}`}>
        {client.name}
      </div>
    );

    if (client.url) {
      return (
        <a href={client.url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return content;
  };

  return (
    <motion.section
      id="clients"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
Trusted By The Best          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Our work has earned the trust of the nation's most respected institutions, from global NGOs to key government bodies. We are proud to be the creative force behind their stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Major Clients */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Esteemed Organizations</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {majorClients.map((client, index) => (
                <ClientTag key={index} client={client} />
              ))}
            </div>
          </div>
          {/* Column 2: Government Departments */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Government Departments (Chhattisgarh)</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {govDepartments.map((dept, index) => (
                <div key={index} className="bg-gray-800 py-2 px-4 rounded-full text-sm whitespace-nowrap">
                  {dept}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;