import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srijanprakash01@gmail.com',
      link: 'mailto:srijanprakash01@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (519) 718-3301',
      link: 'tel:+15197183301'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, Canada',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/srijan-prakash-9155771b4/',
      color: 'hover:text-orange-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/SaMaRoN123',
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Let's Connect</h3>
              <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, link }) => (
                <a 
                  key={label}
                  href={link}
                  className="flex flex-col items-center space-y-2 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 touch-manipulation"
                >
                  <div className="bg-orange-500 p-3 md:p-4 rounded-full">
                    <Icon size={18} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-center text-gray-900">{label}</p>
                    <p className="text-gray-700 text-sm md:text-base break-all text-center">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-base md:text-lg font-semibold mb-4 text-gray-900">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, label, link, color }) => (
                  <a 
                    key={label}
                    href={link}
                    className={`bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 touch-manipulation`}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={24} className="md:w-7 md:h-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;