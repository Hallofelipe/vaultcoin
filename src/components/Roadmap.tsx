import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import RoadmapAnimation from './animations/RoadmapAnimation';
import { roadmapData } from './roadmap/RoadmapData';
import RoadmapPhase from './roadmap/RoadmapPhase';
import CentralLine from './roadmap/CentralLine';

export default function Roadmap() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div id="roadmap" className="relative py-32 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <RoadmapAnimation />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-7xl font-black text-white text-center mb-24">
          Roadmap
        </h2>

        <div ref={ref} className="relative">
          <CentralLine totalPhases={roadmapData.length} />
          
          <div className="space-y-32">
            {roadmapData.map((phase, index) => (
              <RoadmapPhase
                key={index}
                data={phase}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}