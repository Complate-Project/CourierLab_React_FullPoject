import React from 'react';
import {
  FiPackage,
  FiMapPin,
  FiTruck,
  FiCheckCircle,
  FiArrowRight,
} from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiPackage className="w-6 h-6" />,
      step: '01',
      title: 'Schedule Pickup',
      description:
        'Book a pickup through our app, website, or phone. Provide package details and pickup address.',
      details: [
        'Online booking',
        'Mobile app',
        'Phone call',
        '24/7 availability',
      ],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'blue',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      step: '02',
      title: 'Package Handover',
      description:
        'Our verified rider arrives at your location to collect the package with proper documentation.',
      details: [
        'Verified riders',
        'Secure handover',
        'Digital receipt',
        'Package inspection',
      ],
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'green',
    },
  ];

  const getColorClasses = color => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className=" mb-16">
          <span className="text-blue-600 font-semibold text-lg mb-2 block">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our Delivery{' '}
            <span className="text-blue-600">Service Works</span>
          </h2>
        </div>

        {/* Steps with Images */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const colorClass = getColorClasses(step.color);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative ${
                  isEven ? '' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row items-center gap-12`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
                    />
                    {/* Step Badge on Image */}
                    <div
                      className={`absolute -top-4 -left-4 ${colorClass.bg} ${colorClass.text} w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg`}
                    >
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="max-w-lg">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`${colorClass.bg} ${colorClass.text} p-3 rounded-xl`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${colorClass.bg} ${colorClass.border} border-2`}
                          ></div>
                          <span className="text-gray-700 font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button
                      className={`flex items-center gap-2 ${colorClass.text} font-semibold hover:gap-3 transition-all`}
                    >
                      Learn more about this step
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Connecting Arrow (Desktop only) */}
                {/* {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-12 h-12 ${colorClass.bg} ${colorClass.border} border-2 rounded-full flex items-center justify-center`}
                    >
                      <FiArrowRight className={`w-6 h-6 ${colorClass.text}`} />
                    </div>
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
