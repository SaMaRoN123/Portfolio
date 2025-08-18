import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Tailwind CSS', 'Vue.js'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'MongoDB',],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      category: 'Tools & DevOps',
      items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
      color: 'from-orange-600 to-red-500'
    },
    {
      category: 'Design',
      items: ['Figma', 'Photoshop', 'After Effects', 'UI/UX', 'Prototyping'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      category: 'AI/ML',
      items: [
  'Python',
  'PyTorch',
  'Scikit-learn',
  'Pandas',
  'Matplotlib'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly learning new technologies and finding creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver outstanding results.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            I am computer science graduate with hands-on experience in data-driven AI/ML development, model evaluation, and visualization tools. Proficient in Python, SQL, React and JavaScript with demonstrated ability to apply analytical techniques to real-world problems. Adept at translating business challenges into technical solutions through data modeling and statistical analysis. Detail-oriented, a strong communicator, and thrives both independently and in collaborative environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 leading-relaxed">
              My journey in software development began with a deep curiosity about how 
              technology can transform businesses and improve user experiences. I've 
              developed expertise in both frontend and backend technologies, with a 
              focus on creating robust, user-friendly applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm committed to writing clean, maintainable code and following best 
              practices in software development. I enjoy collaborating with teams to 
              deliver high-quality solutions and am always eager to take on new 
              challenges that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={title}
                className="bg-gray-50 p-4 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 touch-manipulation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-6 md:w-8 h-6 md:h-8 text-orange-500 mb-3 md:mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 md:mb-10 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 touch-manipulation"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-10 md:w-12 h-10 md:h-12 rounded-lg bg-gradient-to-r ${skill.color} mb-3 md:mb-4 flex items-center justify-center`}>
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-white/50 rounded opacity-80"></div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div 
                      key={item}
                      className="bg-gray-50 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm text-gray-700 inline-block mr-1 md:mr-2 mb-1 md:mb-2 hover:bg-gray-100 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;