import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const majorClients = [
    { name: "World Bank", logo: "", url: "https://www.worldbank.org" },
    { name: "NABARD", logo: "", url: "https://www.nabard.org" },
    { name: "UNICEF", logo: "", url: "https://www.unicef.org" },
    { name: "SHRC", logo: "", url: null },
    { name: "CHRI", logo: "", url: null },
    { name: "IFFCO", logo: "", url: "https://www.iffco.in" },
    { name: "Birla Group", logo: "", url: "https://www.adityabirla.com" },
    { name: "DDUGKY", logo: "", url: null },
    { name: "SRLM", logo: "", url: null },
    { name: "PRIYA NGO", logo: "", url: null }
  ];

  const govDepartments = [
    "Public Relations", "Labour Department", "Panchayat & Rural Development",
    "Public Health Engineering", "Urban Administration", "Health & Family Welfare",
    "Women & Child Development", "School Education", "Water Resources Dept.",
    "Agriculture Dept.", "Forest Department", "Social Welfare Dept.", "CG Police",
    "Chhattisgarh Women Commission"
  ];

  // UPDATED: Napkin-style soft, soothing gradients with dark text
  const lightGradients = [
    "from-blue-100 to-blue-200",      // soft blue
    "from-green-100 to-emerald-200",  // soft green
    "from-purple-100 to-violet-200",  // soft purple
    "from-orange-100 to-amber-200",   // soft orange
    "from-pink-100 to-rose-200",      // soft pink
    "from-teal-100 to-cyan-200",      // soft teal
  ];

  // Repeat clients for seamless scrolling
  const repeatedClients = [...majorClients, ...majorClients];
  const repeatedGov = [...govDepartments, ...govDepartments];

  return (
    <motion.section
      id="clients"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Trusted By The Best</h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Our work has earned the trust of the nation's most respected institutions.
          </p>
        </div>

        {/* Top Row: Major Clients - scrolling left */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Esteemed Organizations</h3>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex w-[200%] animate-marquee">
              {repeatedClients.map((client, idx) => (
                <div key={`client-${idx}`} className="mx-3">
                  {client.url ? (
                    <a href={client.url} target="_blank" rel="noopener noreferrer">
                      <div className={`bg-gradient-to-r ${lightGradients[idx % lightGradients.length]} text-gray-800 py-3 px-6 rounded-xl font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 min-w-[180px] text-center`}>
                        {client.logo ? (
                          <img src={client.logo} alt={`${client.name} logo`} className="h-6 mx-auto mb-2" />
                        ) : null}
                        <span className="text-sm">{client.name}</span>
                      </div>
                    </a>
                  ) : (
                    <div className={`bg-gradient-to-r ${lightGradients[idx % lightGradients.length]} text-gray-800 py-3 px-6 rounded-xl font-medium shadow-sm min-w-[180px] text-center`}>
                      {client.logo ? (
                        <img src={client.logo} alt={`${client.name} logo`} className="h-6 mx-auto mb-2" />
                      ) : null}
                      <span className="text-sm">{client.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Government Departments - scrolling right */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Government Departments</h3>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex w-[200%] animate-marqueeReverse">
              {repeatedGov.map((dept, idx) => (
                <div key={`gov-${idx}`} className="mx-3">
                  <div className={`bg-gradient-to-r ${lightGradients[idx % lightGradients.length]} text-gray-800 py-3 px-6 rounded-xl font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 min-w-[180px] text-center`}>
                    <span className="text-sm">{dept}</span>
                  </div>
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
