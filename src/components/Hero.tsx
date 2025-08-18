import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [displayGreeting, setDisplayGreeting] = useState('Hi');
  const roles = ['Generative AI', 'Full Stack Developer', 'Problem Solver'];
  const greetings = [
    'Hi',
    'नमस्ते',
    'Bonjour',
    'வணக்கம்',
    'നമസ്കാരം',
    'నమస్కారం',
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    'السلام علیکم'

  ];
  
  // Animate greeting text transitions
  useEffect(() => {
    const currentGreeting = greetings[currentGreetingIndex];
    let timeouts: number[] = [];
    
    // Reset display state
    setDisplayGreeting('');
    
    // Character-by-character typing effect
    for (let i = 0; i <= currentGreeting.length; i++) {
      timeouts.push(setTimeout(() => {
        setDisplayGreeting(currentGreeting.slice(0, i));
      }, i * 150));
    }
    
    // Pause before transitioning to next greeting
    const totalTypingTime = currentGreeting.length * 150;
    timeouts.push(setTimeout(() => {
      // Character-by-character erase effect
      for (let i = currentGreeting.length; i >= 0; i--) {
        timeouts.push(setTimeout(() => {
          setDisplayGreeting(currentGreeting.slice(0, i));
        }, (currentGreeting.length - i) * 50));
      }
      
      // Cycle to next greeting in array
      timeouts.push(setTimeout(() => {
        setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
      }, currentGreeting.length * 50 + 300));
      
    }, totalTypingTime + 2000));
    
    return () => timeouts.forEach(clearTimeout);
  }, [currentGreetingIndex]);

  // Animate professional roles
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeouts: number[] = [];
    
    // Type out current role
    for (let i = 0; i <= currentRole.length; i++) {
      timeouts.push(setTimeout(() => {
        setDisplayText(currentRole.slice(0, i));
      }, i * 100));
    }
    
    // Transition to next role
    timeouts.push(setTimeout(() => {
      for (let i = currentRole.length; i >= 0; i--) {
        timeouts.push(setTimeout(() => {
          setDisplayText(currentRole.slice(0, i));
        }, (currentRole.length - i) * 50 + 2000));
      }
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 3000);
    }, currentRole.length * 100 + 1000));
    
    return () => timeouts.forEach(clearTimeout);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full opacity-5 animate-bounce delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            <span className="inline-block">
              <span className="border-r-2 border-orange-500 pr-2 animate-pulse">
                {displayGreeting}
              </span>
            </span>, I'm{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Srijan Prakash
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 md:mb-8 h-10 md:h-12 flex items-center justify-center">
            <span className="border-r-2 border-orange-500 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate software developer with expertise in full-stack development, AI/ML and modern web technologies. 
            I create applications and innovative solutions that drive me to learn and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 touch-manipulation"
            >
              <span>Get In Touch</span>
              <ExternalLink size={20} />
            </button>
            
            <a 
              href="/Srijan_Prakash_Resume.docx" 
              download="Srijan_Prakash_Resume.docx"
              className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:border-orange-500 hover:text-orange-500 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 touch-manipulation"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;