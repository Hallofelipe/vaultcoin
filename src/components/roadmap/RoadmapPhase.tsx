import React from 'react';
import type { RoadmapPhase as RoadmapPhaseType } from './RoadmapData';

interface RoadmapPhaseProps {
  data: RoadmapPhaseType;
  index: number;
  isVisible: boolean;
}

export default function RoadmapPhase({ data, index, isVisible }: RoadmapPhaseProps) {
  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`
      }}
    >
      <div className={`
        flex items-center gap-8
        ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
      `}>
        {/* Connecting Line */}
        <div className={`
          flex-1 h-[2px]
          ${index % 2 === 0 
            ? 'bg-gradient-to-r from-transparent to-white' 
            : 'bg-gradient-to-l from-transparent to-white'
          }
        `} />

        {/* Content */}
        <div className="w-[500px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
          <div className="text-white/50 text-xl mb-2">{data.phase}</div>
          <h3 className="text-3xl font-bold text-white mb-6">{data.title}</h3>
          <ul className="space-y-3">
            {data.items.map((item, i) => (
              <li 
                key={i} 
                className="text-gray-300 flex items-center gap-4 transition-all duration-500"
                style={{ 
                  transitionDelay: `${(index * 200) + (i * 100)}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Connecting Line */}
        <div className={`
          flex-1 h-[2px]
          ${index % 2 === 0 
            ? 'bg-gradient-to-l from-transparent to-white' 
            : 'bg-gradient-to-r from-transparent to-white'
          }
        `} />
      </div>
    </div>
  );
}