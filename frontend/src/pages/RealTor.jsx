import React from 'react';
import ServiceCard from './ServiceCard';

// Placeholder image URLs - replace with your actual image paths or URLs
//const mainImage = "../../assets/images/Ellipse12.svg";
const mainImage = "../Ellipse12.svg";
const topRightImage = "../Ellipse11.svg";
const bottomRightImage = "../Ellipse13.svg";

function RealTor() {
  return (
    <div className="min-h-screen bg-white font-inter ">
      {/* Main Content Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-16 lg:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">

        {/* Subtle background dots (left side) */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="0.5" fill="#e0e0e0" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#dot-pattern)" />
          </svg>
        </div>

        {/* Left Section: Text Content */}
        <div className="w-full lg:w-5/12 text-center lg:text-left z-10 mb-12 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight mb-6">
            Not Your Average Realtor
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
            Real estate has always been a game of property, we work on smart selling designs and effective marketing to get homes sold for top dollars on the market.
          </p>
        </div>

        {/* Right Section: Image Collage and Decorative Circles */}
        <div className="relative w-full lg:w-7/12 flex items-center justify-center p-4 lg:p-0 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          {/* Main Agent Image (Central) */}
          <div className="relative  w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl z-10">
            <img
              src={mainImage}
              alt="Main Agent holding a house model"
              className="w-full h-full object-cover bg-cover"
            />
          </div>
          

          {/* Top-Right Image (Couple) */}
          <div className="absolute top-10 md:top-16 right-20 md:right-16 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl z-20">
            <img
              src={topRightImage}
              alt="Young couple examining blueprints"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-Right Image (Second Agent) */}
          <div className="absolute bottom-4 md:bottom-16 right-24 md:right-32 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl z-20">
            <img
              src={bottomRightImage}
              alt="Real estate agent smiling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Blue Circle 1 */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full opacity-80 z-0"></div>
          {/* Decorative Orange Circle 1 */}
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full opacity-80 z-0"></div>

          {/* Decorative Blue Circle 2 (top left of image section) */}
          <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full opacity-80 z-0"></div>
          {/* Decorative Orange Circle 2 (bottom right of image section) */}
          <div className="absolute bottom-0 right-0 w-10 h-10 md:w-14 md:h-14 bg-orange-500 rounded-full opacity-80 z-0"></div>
        </div>
      </section>

      {/* "Why Choose Us?" Section */}
      <section className="text-center px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block relative">
          Why Choose Us?
          {/* Blue Underline */}
          <span className="absolute top-15 bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-blue-500 rounded-full "></span>
        </h2>
        {/* Small Blue Dot */}
        {/* <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mt-4"></div> */}
      </section>
  <div>
    {/* Our Services Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="home"
              title="Potential ROI"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ServiceCard
              icon="design"
              title="Design"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ServiceCard
              icon="marketing"
              title="Marketing"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
          {/* Navigation Arrows (Optional) */}
          <div className="flex justify-end mt-8">
            {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 focus:outline-none mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>  
       <div className="relative min-h-screen bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500 rounded-lg transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-15"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 right-1/2 w-48 h-48 border-4 border-blue-400 transform translate-x-1/2 -translate-y-1/2 opacity-15 rounded-full"></div> {/* Large Circle */}

      {/* L-Shape top right */}
      <div className="absolute top-10 right-40 w-24 h-24 border-t-8 border-r-8 border-blue-500 rounded-tr-lg"></div>

      {/* Orange accents (approximating from image) */}
      <div className="absolute top-1/4 left-0 w-16 h-2 bg-orange-400 opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-16 h-2 bg-orange-400 opacity-70"></div>

      {/* Main Content Area - Flex container for the three image sections */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto items-start justify-center">
        {/* Image Section 1 */}
        <div className="relative p-2 bg-white shadow-xl rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
            <img
              src="../Ellipse12.svg"
              alt="Two men shaking hands in front of a building"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative orange bar (left) */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-orange-500 rounded-full"></div>
        </div>

        {/* Image Section 2 (Center, slightly larger/prominent) */}
        <div className="relative p-3 bg-white shadow-2xl rounded-lg z-20 transform scale-105 hover:scale-110 transition-transform duration-300">
          <div className="w-full h-64 md:h-80 overflow-hidden rounded-md">
            <img
              src="../Ellipse11.svg"
              alt="Real estate agent showing a property to clients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Image Section 3 */}
        <div className="relative p-2 bg-white shadow-xl rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
            <img
              src="../Ellipse13.svg"
              alt="Couple discussing with a consultant"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative orange bar (right) */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default RealTor;
