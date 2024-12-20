import React from 'react';
import Logo from './Logo';
import Button from './Button';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Logo />
          <div className="hidden md:flex items-center space-x-12">
            <NavLink onClick={() => scrollToSection('what')}>What</NavLink>
            <NavLink onClick={() => scrollToSection('why')}>Why</NavLink>
            <NavLink onClick={() => scrollToSection('how')}>How</NavLink>
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className="text-lg text-gray-300 hover:text-white transition-colors font-medium"
    >
      {children}
    </button>
  );
}