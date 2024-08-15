import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Portfolio</h1>

        {/* Weather App */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src="/images/weather-api.jpg" 
              alt="Weather App" 
              className="w-full h-60 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-3">
              <Link href="/projects/weather-api" className="text-blue-600 hover:underline">
                Weather Dashboard
              </Link>
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              A real-time weather dashboard that provides current weather conditions, forecasts, and alerts using the OpenWeatherMap API.
            </p>
            <Link href="/weather" className="text-blue-600 hover:underline text-lg">
              View Project
            </Link>
          </div>
        </div>

        {/* movie Converter */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src="/images/movie.jpg" 
              alt="Currency Converter" 
              className="w-full h-60 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-3">
              <Link href="/projects/currency-converter" className="text-blue-600 hover:underline">
                movie search engine
              </Link>
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Search any movie here.
            </p>
            <Link href="/movie" className="text-blue-600 hover:underline text-lg">
              View Project
            </Link>
          </div>
        </div>

        {/* country Database */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src="/images/country.jpg" 
              alt="Movie Database" 
              className="w-full h-60 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-3">
              <Link href="/projects/movie-database" className="text-blue-600 hover:underline">
                country Data
              </Link>
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Find a Capital, Population, Region, Area, GDP, ETC.
            </p>
            <Link href="/country" className="text-blue-600 hover:underline text-lg">
              View Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
