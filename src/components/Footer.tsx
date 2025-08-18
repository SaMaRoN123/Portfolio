import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-gray-400 text-sm md:text-base px-4">"Life is what you make of it." - Eleanor Roosevelt</p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6 text-sm md:text-base px-4">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={20} />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="border-t border-gray-700 pt-6 space-y-4">
            <p className="text-gray-400 text-sm md:text-base px-4">
              © {new Date().getFullYear()} Srijan Prakash. All rights reserved.
            </p>
            
            {/* Legal disclaimer */}
            <div className="text-xs text-gray-500 px-4 max-w-4xl mx-auto leading-relaxed">
              <p className="mb-2">
                <strong>Trademark Disclaimer:</strong> All brand names, logos, and trademarks displayed on this website are the property of their respective owners. 
                This includes but is not limited to Ableton Live Studio, Audacity, Adobe After Effects, YouTube, Spotify, SoundCloud, and any other third-party brands referenced.
              </p>
              <p>
                The use of these logos and brand names is for identification and reference purposes only and does not imply endorsement, 
                sponsorship, or affiliation with the respective trademark holders. All rights to these trademarks are reserved by their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 touch-manipulation z-50"
        title="Scroll to top"
      >
        <ArrowUp size={18} className="md:w-5 md:h-5" />
      </button>
    </footer>
  );
};

export default Footer;