'use client';
import Features from "./Features";
import Working from "./Working";
import About from "./About";
import Link from "next/link"
export default function Hero() {
  const handleDemoClick = () => {
    window.location.replace('https://oq8b3ijdzp5.typeform.com/to/T5CyLQtG');
  };

  return (
    <>
      <div className="flex h-auto">
        <div className="flex-1">
          <div className='container mx-auto py-12 px-4 ml-6 mt-9'>
            <h1 className='text-2xl text-white font-bold mb-4'>
              <span className="bg-gradient-to-r from-neonPink to-neonBlue text-transparent bg-clip-text">Welcome to StatusQuo</span>
            </h1>
            <p className='text-6xl mb-6 font-bold text-white mt-8'>
              Focus on Innovation, Leave the Progress Tracking to Us
            </p>
            <p className='text-xl text-white mt-8'>
              Your AI-Powered Project Manager Tracking Progress From GitHub Repositories
            </p>
            {/* Buttons container with Flexbox layout */}
            <div className="flex space-x-4 mt-8">
              <button className='bg-gradient-to-br from-neonPink to-neonBlue text-black py-2 px-4 rounded-lg text-lg font-extrabold'>
                <Link href="/login">Get Started</Link>
              </button>
              <button 
                className='bg-transparent border border-gradient-to-br from-neonPink to-neonBlue text-neonBlue font-bold py-2 px-4 rounded-lg text-lg'
                onClick={handleDemoClick}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src="hero.gif" className="h-3/4 ml-24 mt-12" alt=""/>
        </div>
      </div>
      <Working/>
      <Features/>
      <About />
    </>
  );
}
