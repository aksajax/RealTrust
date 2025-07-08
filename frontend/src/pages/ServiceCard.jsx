import React from 'react'

function ServiceCard({ icon, title, description }) {
  return (
    <div>
         <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {/* Icon placeholder - replace with actual SVG or Font Awesome icon */}
        <div className="text-blue-600 text-3xl">    
          {icon === 'home' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )}
          {icon === 'design' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-3m-6-6h6" />
            </svg>
          )}
          {icon === 'marketing' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12h-3.812c-.436 1.166-1.66 2-3.188 2H12c-1.528 0-2.752-.834-3.188-2H3l.012-.012A3.5 3.5 0 005 10a3.5 3.5 0 00-2.474-3.5L12 4z" />
            </svg>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
    </div>
  )
}

export default ServiceCard