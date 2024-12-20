import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatSection from './components/WhatSection';
import WhySection from './components/why/WhySection';
import TokenStats from './components/TokenStats';
import Features from './components/Features';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhatSection />
      <WhySection />
      <TokenStats />
      <Features />
      <Roadmap />
    </div>
  );
}

export default App;