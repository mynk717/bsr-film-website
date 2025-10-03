import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center 
        bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 
        dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-800"
    >
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      <div className="relative z-20 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-white">
          Shaping Narratives. Crafting Legacies.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mx-auto animate-fade-in-up">
          From the heart of Chhattisgarh, BSR Films is a powerhouse of creative production, translating impactful ideas into unforgettable audio-visual experiences for government, corporate, and global partners.
        </p>
        <a
          href="https://www.youtube.com/@bsrfilmsoriginal2461/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-gray-900 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up shadow-lg"
          style={{ animationDelay: '0.8s' }}
        >
          🎬 Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
