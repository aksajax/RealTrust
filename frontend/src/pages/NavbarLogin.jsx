import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLogin() {
  return (
    
         <nav className="fixed top-0 left-0 w-full  bg-transparent shadow-md px-4 sm:px-8 lg:px-16 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                           
                       
                        <img src="../logo.svg" alt="Hero" className="w-1/2 h-auto " />
                       
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6 ">
                        <Link to="/register" className="text-gray-900 relative inline-block hover:text-blue-600 px-3 py-2 hover:text-xl text-sm font-medium  group">
                        <span className="relative">Sign Up<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </span>
                        </Link>
                        <Link to="/Login" className="text-gray-900 relative inline-block hover:text-blue-600 px-3 py-2  text-sm font-medium group">
                        <span className="relative">Login<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </span>
                        </Link>
                        
                       
                        
                        
                        <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">Contact Us</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                           
                        </button>
                    </div>
                </div>
            </div>
            </nav>
            

  )
}

export default NavbarLogin