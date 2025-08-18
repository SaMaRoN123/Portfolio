import React from 'react';
import { Music, Play, Headphones, Video } from 'lucide-react';

const Hobbies: React.FC = () => {
  const musicPlatforms = [
    {
      name: 'YouTube',
      icon: Play,
      url: 'https://www.youtube.com/@samaron',
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Official Artist Channel'
    },
    {
      name: 'Spotify',
      icon: Headphones,
      url: 'https://open.spotify.com/artist/5gM3UormXxgasxGzUPDN9x?si=3FD5UdsiR0yEK9bb_ET_sw',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Stream my latest tracks and playlists'
    },
    {
      name: 'SoundCloud',
      icon: Music,
      url: 'https://soundcloud.com/sam-aron',
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Discover unreleased tracks and demos'
    }
  ];

  return (
    <section id="hobbies" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Creative Hobbies
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond coding, I'm passionate about music production and creative content creation. 
            Music is one of the things that drives me to learn and helps me expand my creativity.
          </p>
        </div>

        {/* Content layout container */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content column */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Video className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Music Production
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                I create music that helps me express myself with artistic expression. Each project is an opportunity to experiment with new sounds, 
                techniques, and auditory storytelling. 
              </p>

               {/* Skills showcase */}
               <div className="space-y-4">
                 <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                   <Music className="w-5 h-5 text-purple-600 mr-2" />
                   Technical Skills
                 </h4>
                 
                 <div className="grid gap-4">
                   {/* DAW software */}
                   <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm p-1">
                           <img 
                             src="/ableton.png" 
                             alt="Ableton Live" 
                             className="w-8 h-8"
                           />
                         </div>
                         <div>
                           <h5 className="font-bold text-green-800 text-lg">Ableton Live Studio</h5>
                           <p className="text-green-700 text-sm">Main DAW for music production & composition</p>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Audio editor */}
                   <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm p-1">
                           <img 
                             src="/audacity.png" 
                             alt="Audacity" 
                             className="w-8 h-8"
                           />
                         </div>
                         <div>
                           <h5 className="font-bold text-blue-800 text-lg">Audacity</h5>
                           <p className="text-blue-700 text-sm">Advanced audio processing & editing</p>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Video effects software */}
                   <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                           <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#9999ff">
                             <rect width="24" height="24" rx="4" fill="#00005b"/>
                             <path d="M7 17h2l1-3h4l1 3h2l-4-10h-2L7 17zm3.5-5L12 9l1.5 3h-3z" fill="#9999ff"/>
                           </svg>
                         </div>
                         <div>
                           <h5 className="font-bold text-purple-800 text-lg">Adobe After Effects</h5>
                           <p className="text-purple-700 text-sm">Animation & visual effects for music videos</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Music platform links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Find my music on:
                </h4>
                                 <div className="grid gap-4">
                   {musicPlatforms.map((platform) => {
                     const IconComponent = platform.icon;
                     return (
                       <a
                         key={platform.name}
                         href={platform.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className={`${platform.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-4 group`}
                       >
                         {/* Platform logo */}
                         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                           {platform.name === 'YouTube' && (
                             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF0000">
                               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                             </svg>
                           )}
                           {platform.name === 'Spotify' && (
                             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1DB954">
                               <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                             </svg>
                           )}
                           {platform.name === 'SoundCloud' && (
                             <img 
                               src="/SoundCloud.jpg" 
                               alt="SoundCloud" 
                               className="w-full h-full object-cover rounded-lg"
                             />
                           )}
                         </div>
                         
                         <div className="flex-grow">
                           <div className="font-semibold text-lg">{platform.name}</div>
                           <div className="text-sm opacity-90">{platform.description}</div>
                         </div>
                         <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                           →
                         </div>
                       </a>
                     );
                   })}
                </div>
              </div>
            </div>

            {/* Media showcase */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Play className="w-5 h-5 text-red-500 mr-2" />
                  Featured Video
                </h4>
                
                {/* Embedded video player */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/Kq3iY-IQZAI"
                    title="Music Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Video className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="font-medium">Production Details</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This music video features custom animations and visual effects created using 
                    <strong> Adobe After Effects</strong>. The motion graphics and transitions were 
                    designed to complement the musical composition and create an immersive viewing experience.
                  </p>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Music className="w-5 h-5 mr-2" />
                  Why Music?
                </h4>
                <p className="text-purple-100 leading-relaxed">
                  Music production helps me compartmentalize my thoughts and analytical skills in a way that I understand it the most, through music.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Collaborate!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're interested in my technical skills or creative projects, 
            I'd love to connect and explore potential collaborations.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <Music className="w-5 h-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
