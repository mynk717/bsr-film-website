import React from 'react';

const Clients = () => {
  const majorClients = [
    "World Bank", "NABARD", "UNICEF", "SHRC", "CHRI", "IFFCO",
    "Birla Group", "DDUGKY", "SRLM", "PRIYA NGO"
  ];

  const govDepartments = [
    "Public Relations", "Labour Department", "Panchayat & Rural Development",
    "Public Health Engineering", "Urban Administration", "Health & Family Welfare",
    "Women & Child Development", "School Education", "Water Resources Dept.",
    "Agriculture Dept.", "Forest Department", "Social Welfare Dept.", "CG Police",
    "Chhattisgarh Women Commission"
  ];

  return (
    <section id="clients" className="py-20 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our Major Clients
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Trusted by government, corporate, and private sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1: Major Clients */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Esteemed Organizations</h3>
            <ul className="space-y-3">
              {majorClients.map((client, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md">
                  {client}
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2: Government Departments */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Government Departments (Chhattisgarh)</h3>
            <ul className="space-y-3">
              {govDepartments.map((dept, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md">
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;