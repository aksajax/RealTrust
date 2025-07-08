import React from 'react';

const TeamTestimonialsShowcase = () => {
  // Dummy data for team member testimonials/profiles
  const teamMembers = [
    {
      id: 1,
      avatar: "../Ellipse28.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Rowhan Smith",
      title: "CEO, Foreclosure",
    },
    {
      id: 2,
      avatar: "../Ellipse29.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Shipra Kayak",
      title: "Brand Designer",
    },
    {
      id: 3,
      avatar: "../Ellipse31.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "John Lepore",
      title: "CEO, Foreclosure",
    },
    {
      id: 4,
      avatar: "../Ellipse33.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Marry Freeman",
      title: "Marketing Manager at Mait",
    },
    {
      id: 5,
      avatar: "../Ellipse35.svg",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Lucy",
      title: "Sales Rep at Alibaba",
    },
  ];

  return (
   <div >
    <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mt-9">
        Happy Clients
      </h1>
    <div className="relative min-h-screen bg-white pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-inter">
      {/* Main Content: Grid of Testimonial Cards */}
      
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg pt-12 px-6 pb-6 flex flex-col items-center text-center">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-white shadow-md"
            />
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {member.quote}
            </p>
            <h3 className="text-blue-700 font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-500 text-xs">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default TeamTestimonialsShowcase;
