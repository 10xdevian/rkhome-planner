"use client"
import React from "react"

const About = () => {
  return (
    <section className="w-full bg-gray-600  py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          What We Can Do For You
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto mb-12">
          We specialize in designing, planning, and transforming your living spaces with creativity, functionality, and elegance. 
          From customized home plans to modern interiors, we bring your vision to life.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Home Design</h3>
            <p className="text-gray-600">
              Tailored house plans that match your lifestyle and preferences with smart space utilization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Interior Planning</h3>
            <p className="text-gray-600">
              Modern and functional interiors that combine aesthetics with practicality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Customization</h3>
            <p className="text-gray-600">
              Fully customized plans and designs that fit your unique requirements and budget.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Consultation</h3>
            <p className="text-gray-600">
              Expert guidance to help you make the right decisions for your dream home project.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Renovation</h3>
            <p className="text-gray-600">
              Transform existing spaces into modern, functional, and elegant living environments.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Support</h3>
            <p className="text-gray-600">
              Ongoing support and services to ensure your project is executed perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
