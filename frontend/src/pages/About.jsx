import React from 'react'


function About() {
  return (
    <div>
        <section className="text-center px-4 sm:px-8 lg:px-16  mb-11">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block relative">
          About Us
          {/* Blue Underline */}
          <span className="absolute top-15 bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-blue-500 rounded-full "></span>
        </h2>
        {/* Small Blue Dot */}
        {/* <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mt-4"></div> */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-10">
          We are a leading real estate agency dedicated to providing exceptional service and expertise in the property market. Our team of experienced professionals is committed to helping you find your dream home or investment property with ease and confidence.
        </p>
        <button className="mt-6 bg-blue-100 border border-b-6 px-20 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300 ">
          Learn More
        </button>
      </section>
    </div>
  )
}

export default About