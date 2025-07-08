import React from 'react';

const ProjectsShowcase = () => {
  // Dummy data for project cards
  
  const projects = [
    {
      id: 1,
      image: "../pexels-andres-ayrton-6578391.svg", // Replace with your actual image path
      title: "Consultation",
      subtitle: "Project name - location",
    },
    {
      id: 2,
      image: "../pexels-brett-sayles-2881232-1.svg",
      title: "Dodgs",
      subtitle: "Project name - location",
    },
    {
      id: 3,
      image: "../pexels-brett-sayles-2881232-2.svg",
      title: "Marketing & Design",
      subtitle: "Project name - location",
    },
    {
      id: 4,
      image: "../pexels-brett-sayles-2881232.svg",
      title: "Marketing",
      subtitle: "Project name - location",
    },
    {
      id: 5,
      image: "../pexels-fauxels-3182834.svg",
      title: "Consultation",
      subtitle: "Project name - location",
    },
  ];

  return (
    <div className="relative min-h-screen bg-blue-100 overflow-hidden py-16 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Background Decorative Elements (similar to previous design) */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500 rounded-lg opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-5"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500 rounded-full opacity-5"></div>
      <div className="absolute top-1/2 right-1/2 w-48 h-48 border-4 border-blue-400 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-blue-500 rounded-tr-lg opacity-10"></div>
      <div className="absolute top-1/4 left-0 w-16 h-2 bg-orange-400 opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-16 h-2 bg-orange-400 opacity-30"></div>
      <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-orange-500 rounded-full opacity-70"></div> {/* Small orange dot */}


      {/* Header Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Our Projects</h2>
        <p className="text-gray-600 text-lg">
          We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 shadow-md">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
