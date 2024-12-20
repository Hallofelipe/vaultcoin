import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="30" height="30" fill="white"/>
        <rect x="70" y="0" width="30" height="30" fill="white"/>
        <rect x="35" y="0" width="30" height="60" fill="white"/>
        <rect x="0" y="35" width="30" height="65" fill="white"/>
        <rect x="70" y="35" width="30" height="65" fill="white"/>
        <rect x="35" y="70" width="30" height="30" fill="white"/>
      </svg>
      <span className="ml-3 text-2xl font-black tracking-wider text-white">VAULT</span>
    </div>
  );
}