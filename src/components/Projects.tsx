import React, { useState } from 'react';
import { Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'SmoothBooks - Accounting & Bookkeeping App',
      description: 'A comprehensive full-stack accounting application built with React frontend and Flask backend. Features invoice management, expense tracking, payroll processing, financial reports, and analytics with modern UI/UX.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fullstack',
      technologies: ['React', 'Flask', 'Python', 'SQLAlchemy', 'JWT', 'Docker'],
      github: 'https://github.com/SaMaRoN123/SmoothBooks',

    },
    {
      title: 'Nebula AI Chat App',
      description: 'A full-stack, private AI chat application featuring a React frontend and a FastAPI backend. The app uses a locally-hosted Mistral 7B model served via LM Studio, ensuring 100% data privacy and real-time conversational memory.',
      image: 'https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'aiml', // Changed category
      technologies: ['React', 'FastAPI', 'Python', 'LM Studio', 'Mistral 7B', 'TailwindCSS'],
      github: '#', // Add your GitHub link here

    },
    {
      title: 'Mental Health Prediction App',
      description: 'A Streamlit-based application that predicts mental health conditions using machine learning models. Includes data preprocessing, EDA, and interactive visualizations.',
      image: 'https://images.pexels.com/photos/6749779/pexels-photo-6749779.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'aiml', 
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/SaMaRoN123/mhprediction',

    },
    {
      title: 'Simphony – Music Player Web App',
      description: 'A full-stack music player built with React, featuring user-friendly UI, audio controls, and library management.',
      image: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fullstack',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/SaMaRoN123/simphony',

    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'aiml', label: 'AI/ML' } // Changed from Backend to AI/ML
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my AI and web development work, built using modern tools and frameworks.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Filter className="text-gray-400" size={20} />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => window.open(project.github, '_blank')}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;