import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 py-12 transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">Bhishmadev Chaturvedi</p>
          
          <address className="not-italic mt-4 space-y-1 text-gray-600 dark:text-gray-400">
            <p>Behind Rajkumar College, Sonkar Badi, Ashwini Nagar</p>
            <p>Raipur, Chhattisgarh - 492013 (Post Sundar Nagar)</p>
          </address>

          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 text-lg flex-wrap">
            <a href="tel:+919826167533" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              +91 98261 67533
            </a>
            <span className="text-gray-500">|</span>
            <a href="tel:+917000866323" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              +91 70008 66323
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a 
            href="https://m.facebook.com/profile.php?id=100064075840334" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-600 dark:to-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            Follow on Facebook
          </a>
          
          <a 
            href="https://www.youtube.com/@bsrfilmsoriginal2461" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-red-100 to-red-200 dark:from-red-600 dark:to-red-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-xl hover:from-red-200 hover:to-red-300 dark:hover:from-red-500 dark:hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} BSR Films. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
