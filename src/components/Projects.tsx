import React, { useState } from 'react';
import { Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [

    {
      title: 'Nebula AI Chat App',
      description: 'A modern AI chat application with Python code execution capabilities run locally, built with Next.js frontend and FastAPI backend. Features LM Studio integration for local AI model inference, real-time streaming responses, PostgreSQL database, JWT authentication, and an integrated code IDE with Monaco Editor.',
      image: '/nebula.png',
      category: ['aiml', 'fullstack'], 
      technologies: ['Next.js', 'FastAPI', 'Python', 'LM Studio', 'PostgreSQL', 'TailwindCSS', 'Monaco Editor', 'Pyodide'],
      github: 'https://github.com/samaron123/nebulallm',
    },
    {
      title: 'Mental Health Prediction App',
      description: 'A Streamlit-based application that predicts mental health conditions using machine learning models. Includes data preprocessing, EDA, and interactive visualizations.',
      image: '/mhprediction.png',
      category: ['aiml'], 
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/SaMaRoN123/mhprediction',
    },
    {
      title: 'SmoothBooks - Accounting & Bookkeeping App',
      description: 'A comprehensive full-stack accounting application built with React frontend and Flask backend. Features invoice management, expense tracking, payroll processing, financial reports, and analytics with modern UI/UX.',
      image: '/smoothbooks.png',
      category: ['fullstack'],
      technologies: ['React', 'Flask', 'Python', 'SQLAlchemy', 'JWT', 'Docker'],
      github: 'https://github.com/SaMaRoN123/SmoothBooks',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'aiml', label: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my AI and web development work, built using modern tools and frameworks.
          </p>

          {/* Category filters */}
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
              className="group bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
