import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { label: 'Total Supply', value: '1,000,000' },
  { label: 'Circulating Supply', value: '400,000' },
  { label: 'Market Cap', value: '$25M' },
  { label: 'Holders', value: '12,000+' }
];

export default function TokenStats() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="relative py-32 bg-black border-t border-white/10">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
            style={{ 
              transitionDelay: `${index * 200}ms`
            }}
          >
            <div className="text-5xl font-black text-white mb-4">{stat.value}</div>
            <div className="text-gray-400 text-lg uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}