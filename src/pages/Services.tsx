import React from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to ensure performance, security, and scalability.",
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Performance Optimization"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android that provide seamless user experiences.",
      features: ["iOS Development", "Android Development", "React Native Solutions", "App Maintenance & Support"]
    },
    {
      title: "Digital Strategy",
      description: "Strategic consulting to help businesses navigate the digital landscape and achieve their goals.",
      features: ["Digital Transformation", "User Experience Design", "Technology Selection", "Growth Strategy"]
    },
    {
      title: "Cloud Services",
      description: "Leverage the power of cloud technology for scalable, secure, and cost-effective solutions.",
      features: ["Cloud Migration", "AWS/Azure/GCP Services", "Serverless Architecture", "DevOps Integration"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h2>
            <p className="text-gray-700 mb-6">{service.description}</p>
            
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;