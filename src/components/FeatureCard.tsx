import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
      <div className="text-white mb-6 group-hover:scale-110 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
}