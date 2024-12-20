import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105';
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}