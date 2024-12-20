import React from 'react';

interface WhyCardProps {
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

export default function WhyCard({ title, description, delay, isVisible }: WhyCardProps) {
  return (
    <div 
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-1000 hover:border-white/20 hover:transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
    </div>
  );
}