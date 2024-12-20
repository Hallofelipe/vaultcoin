import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import WhyCard from './WhyCard';
import { whyData } from './WhyData';
import Button from '../Button';

export default function WhySection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="why" 
      className="relative min-h-screen bg-black py-32 border-t border-white/10"
    >
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className={`text-7xl font-black text-white mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          Why Vault Coin?
        </h2>
        
        <p className={`text-3xl text-gray-300 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`} style={{ transitionDelay: '200ms' }}>
          The Best Decision You Will Make
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {whyData.map((item, index) => (
            <WhyCard
              key={index}
              title={item.title}
              description={item.description}
              delay={300 + (index * 200)}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`} style={{ transitionDelay: '1300ms' }}>
          <h3 className="text-3xl font-bold text-white mb-8">
            Join the Movement Today
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            The earlier you invest, the more rewards you will secure. Don't just observe the fitness and crypto revolution—become a key part of it with Vault Coin.
          </p>
          <Button variant="primary" className="text-xl px-12 py-6">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}