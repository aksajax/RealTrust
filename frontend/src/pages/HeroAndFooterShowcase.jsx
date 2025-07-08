import React from 'react';

const HeroAndFooterShowcase = () => {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('../Rectangle.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
            Learn more about our listing process, as well as our additional staging and design work.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      
      <div className="bg-blue-700 text-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm sm:text-base">
          <a href="/" className="hover:text-blue-200 transition-colors duration-200">Home</a>
          <a href="/" className="hover:text-blue-200 transition-colors duration-200">Services</a>
          <a href="/" className="hover:text-blue-200 transition-colors duration-200">Projects</a>
          <a href="/" className="hover:text-blue-200 transition-colors duration-200">Testimonials</a>
          <a href="/" className="hover:text-blue-200 transition-colors duration-200">Contact</a>
        </nav>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <span className="text-sm">Subscribe In</span>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="p-2 rounded-md text-white w-full sm:w-auto min-w-[180px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="bg-gray-900 text-gray-400 py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; All Rights Reserved 2023</p>
        <div className="flex items-center gap-2">
         
          <span className="text-lg font-bold text-white">Real Trust</span>
        </div>
        <div className="flex gap-4">
          
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.403 0-6.162 2.759-6.162 6.162 0 .483.055.953.161 1.404-5.124-.257-9.663-2.716-12.703-6.441-.533.918-.84 1.987-.84 3.136 0 2.145 1.097 4.038 2.766 5.148-.203-.006-.39-.01-.58-.01-1.002 0-1.943-.272-2.766-.764-.002.025-.002.05-.002.076 0 2.99 2.13 5.474 4.943 6.042-.49.134-.99.204-1.51.204-.37 0-.73-.035-1.08-.104.782 2.457 3.05 4.24 5.74 4.289-2.09 1.64-4.74 2.62-7.61 2.62-.495 0-.986-.029-1.468-.086 2.703 1.734 5.92 2.744 9.37 2.744 11.248 0 17.41-9.319 17.41-17.41 0-.265-.008-.528-.014-.79z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.103-1.333h2.897v-5h-3.972c-3.122 0-4.028 2.217-4.028 4.9v1.1z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-10.04 3.72z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroAndFooterShowcase;
