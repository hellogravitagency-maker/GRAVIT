import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" className={className}>
    <title>GRAVIT Logo</title>
    <path d="M138 55 A55 55 0 1 0 138 145" fill="none" stroke="#F8F8F0" strokeWidth="16" strokeLinecap="round"/>
    <line x1="138" y1="100" x2="102" y2="100" stroke="#F8F8F0" strokeWidth="16" strokeLinecap="round"/>
  </svg>
);
