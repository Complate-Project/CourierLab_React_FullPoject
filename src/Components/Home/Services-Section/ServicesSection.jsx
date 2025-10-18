import React from 'react';
import {
  FiClock,
  FiTruck,
  FiGlobe,
  FiBriefcase,
  FiShield,
  FiDollarSign,
} from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      title: 'Same Day Delivery',
      description:
        'Get your packages delivered within the same day across major cities.',
    },
    {
      icon: <FiTruck className="w-8 h-8 text-green-600" />,
      title: 'Express Delivery',
      description:
        'Fast and reliable delivery service with next-day delivery guarantee.',
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-purple-600" />,
      title: 'International Shipping',
      description:
        'Global delivery services to 50+ countries with door-to-door service.',
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-orange-500" />,
      title: 'Corporate Solutions',
      description:
        'Customized logistics solutions for businesses with volume discounts.',
    },
    {
      icon: <FiShield className="w-8 h-8 text-red-600" />,
      title: 'Secure Delivery',
      description:
        'Premium service with enhanced security and signature confirmation.',
    },
    {
      icon: <FiDollarSign className="w-8 h-8 text-teal-500" />,
      title: 'Cash on Delivery',
      description:
        'Trusted COD service with secure cash collection and instant settlement.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Delivery Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl ">
            Fast, secure, and reliable services for individuals and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
