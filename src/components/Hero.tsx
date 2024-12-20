import React from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';
import NetworkAnimation from './animations/NetworkAnimation';

export default function Hero() {
  const scrollToRoadmap = () => {
    const roadmapSection = document.querySelector('#roadmap');
    roadmapSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NetworkAnimation />
      </div>
      
      <div className="relative z-10 pt-32 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center">
            <h1 className="text-[12rem] font-black text-white mb-8 tracking-tight leading-none">
              VAULT
            </h1>
            
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white mb-8">
              The Future of Fitness
            </h2>
            
            <p className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-light">
              Revolutionary AI-powered training meets blockchain technology.
              Train smarter, earn tokens, and transform your fitness journey.
            </p>
            
            <div className="flex justify-center gap-8">
              <Button variant="primary" className="text-xl px-12 py-6">
                Buy VAULT Token
              </Button>
              <Button variant="secondary" className="text-xl px-12 py-6">
                Join Presale
              </Button>
            </div>
          </div>

          <button 
            onClick={scrollToRoadmap}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white opacity-50 hover:opacity-100 transition-opacity"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm uppercase tracking-wider">Explore</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}