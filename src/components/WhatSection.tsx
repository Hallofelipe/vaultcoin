import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function WhatSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="what" 
      className="relative min-h-screen bg-black py-32 border-t border-white/10"
    >
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-7xl font-black text-white mb-16 tracking-tight">
          WHAT IS VAULTCOIN
        </h2>

        <div className="space-y-8 text-xl leading-relaxed text-gray-300">
          <p className="transition-all duration-500" style={{ transitionDelay: '200ms' }}>
            Vault Coin is not just a cryptocurrency; it's your gateway to the future of fitness and financial growth. 
            Built on cutting-edge blockchain technology, Vault Coin is secure, fast, and ready to power the most 
            innovative gym ecosystem ever created.
          </p>

          <p className="transition-all duration-500" style={{ transitionDelay: '400ms' }}>
            Imagine a coin that grows in value as you invest in your health. Vault Coin is designed to reward 
            your fitness journey while offering you exclusive perks and unmatched profitability. Whether you're 
            an investor or a fitness enthusiast, Vault Coin is the key to unlocking a new world of possibilities.
          </p>

          <p className="transition-all duration-500" style={{ transitionDelay: '600ms' }}>
            With Vault Coin, you're not just holding currency—you're holding potential. From early adoption 
            benefits to integration with the upcoming Vault Gym, every Vault Coin you own positions you for 
            success. Its limited supply and growing demand make it a profitable opportunity today and a powerful 
            tool for tomorrow.
          </p>

          <p className="text-2xl font-bold text-white transition-all duration-500" style={{ transitionDelay: '800ms' }}>
            Join the movement. Vault Coin isn't just a coin—it's a revolution. Get in early and be part of the future.
          </p>
        </div>
      </div>
    </section>
  );
}