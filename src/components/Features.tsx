import React from 'react';
import { Brain, Dumbbell, Coins, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'AI-Powered Training',
    description: 'Advanced algorithms analyze your performance and adapt your training in real-time'
  },
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: 'Smart Equipment',
    description: 'Connected fitness equipment tracks and optimizes your workouts automatically'
  },
  {
    icon: <Coins className="w-12 h-12" />,
    title: 'Token Rewards',
    description: 'Earn VAULT tokens for achieving fitness goals and maintaining consistency'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Community Governance',
    description: 'Shape the future of VAULT through decentralized voting and proposals'
  }
];

export default function Features() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="absolute -inset-1 bg-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-white mb-6 group-hover:scale-110 transform transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}