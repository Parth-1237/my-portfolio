import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Blog</h1>

        {/* Blog Post 1 */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src="/images/blog1.jpg" 
              alt="Best Practices for Web Server Security" 
              className="w-full h-60 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-3">
              <Link href="/blog/post1" className="text-blue-600 hover:underline">
                Best Practices for Web Server Security
              </Link>
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Web server security is essential for averting data losses and security breaches since web servers are a key element of the web architecture. By protecting your web server with best practices, you may drastically lower the chance that a hostile cyberattack would jeopardize your assets and reputation.
            </p>
            <Link href="https://medium.com/@parthgaradhariya04/best-practices-for-web-server-security-c4a654d29ffc" className="text-blue-600 hover:underline text-lg">
              Read more...
            </Link>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src="/images/blog2.jpg" 
              alt="Programmers’ Guide to NodeJS" 
              className="w-full h-60 object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-3">
              <Link href="/blog/post2" className="text-blue-600 hover:underline">
                Programmers’ Guide to NodeJS
              </Link>
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              NodeJS is a popular, open-source JavaScript runtime environment. In this guide for programmers, our expert explains how to use NodeJS and what NodeJS is used for.
            </p>
            <Link href="https://medium.com/@parthgaradhariya04/programmers-guide-to-nodejs-2b6ce08551d4" className="text-blue-600 hover:underline text-lg">
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
