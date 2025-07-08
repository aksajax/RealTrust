import React from 'react'

import backgroundImage from '../assets/images/background.svg';
import RealTor from '../pages/RealTor';
import About from '../pages/About';
import ProjectsShowcase from '../pages/ProjectsShowcase';
import TeamTestimonialsShowcase from '../pages/TeamTestimonialsShowcase';
import HeroAndFooterShowcase from '../pages/HeroAndFooterShowcase';

const Home = () => {
  return (
    <>
   
      <div className='pt-16'>
      <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-center p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     <div className='flex  gap-4 items-center justify-around w-full h-full'>
       <div className=''>
        {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

      {/* Content Container */}
      <div className="relative z-10 text-white text-left max-w-4xl mx-auto mt-32 px-4">
        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
          Consultation,
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Design,
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          & Marketing.
        </h1>
        
      </div>
</div>
        
        <div>
          <div className="mt-8 ml-10">
          <div className=" text-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-md mx-auto border-amber-50 border-2">
            <h2 className="text-3xl text-center font-bold text-gray-800">Get A Free</h2>
            <h2 className="text-2xl text-center font-bold mb-4 text-gray-800">Consultation</h2>
            <form>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-3 mb-4 border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-3 mb-4 border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 mb-4 border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Area, City"
                className="w-full p-3 mb-4 border border-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
              >
                Get Quick Quote
              </button>
            </form>
          </div>
        </div>
        </div>
     </div>
      </div>
    <RealTor />
    <About />
    <ProjectsShowcase />
    <TeamTestimonialsShowcase />
    <HeroAndFooterShowcase />
    </div>
    </>
  )
}

export default Home