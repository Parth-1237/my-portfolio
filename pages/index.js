// pages/index.js
import React from 'react';
import CountUp from 'react-countup';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/work1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Final Group project.</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
          Develop and deploy a professionally looking, stunning, eye-catching portfolio website using Next.js.</p>
        </div>
      </section>
    </div>
  );
}
