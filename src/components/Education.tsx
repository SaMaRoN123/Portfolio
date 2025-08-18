import React from 'react';
import { BookOpen, Building2, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Symbiosis Institute of Technology',
      location: 'Pune, India',
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            My academic foundation in computer science and engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-xl shadow-lg p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">{edu.degree}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Building2 size={16} className="md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-semibold text-sm md:text-base">{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm md:text-base">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;