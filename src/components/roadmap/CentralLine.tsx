import React from 'react';

interface CentralLineProps {
  totalPhases: number;
}

export default function CentralLine({ totalPhases }: CentralLineProps) {
  return (
    <>
      {/* Main Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent" />
      
      {/* Connected Dots */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[10px] -ml-[4px]">
        {Array.from({ length: totalPhases }).map((_, index) => (
          <div
            key={index}
            className="absolute w-[10px] h-[10px] bg-white rounded-full transform -translate-x-1/2 transition-all duration-500"
            style={{ 
              top: `${(index * 100) / (totalPhases - 1)}%`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>
    </>
  );
}