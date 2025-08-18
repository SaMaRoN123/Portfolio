import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Ernst & Young (Technology Consulting)',
      location: 'New Delhi, India',
      period: 'Jan 2024 - May 2024',
      description:
        'Contributed to public sector projects by analyzing large datasets and developing AI/ML models to address complex business and security challenges.',
      achievements: [
        'Researched and implemented machine learning models in PyTorch',
        'Integrated models into Flask-based applications for demonstrative and client-facing tools.',
        'Implemented Docker containerization for seamless dependency management and consistent deployment environments across development and research',
        'Conducted stakeholder meetings with firm partners and senior executives, gathering feedback to refactor required parameters and user experience based on client requirements',
      ],
      technologies: [
        'Python',
        'PyTorch',
        'Flask',
        'Hugging Face',
 
        'Docker'
        
      ]
    }
  ];

  const certifications = [
    'Oracle Cloud Infrastructure AI Foundations Associate (2023)',
    'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    'Workday Basics Series'
  ];

  return (
    <>
      {/* Work history */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey through my professional career, highlighting key achievements
              and the impact I've made.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative md:ml-16 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  {/* Timeline marker */}
                  <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <ExternalLink size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 items-center space-x-1 text-blue-600 bg-blue-50 px-4 py-2 rounded-full flex-shrink-0">
                        <Calendar size={16} />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications showcasing my expertise and commitment to continuous learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <Award size={28} className="text-blue-500 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
