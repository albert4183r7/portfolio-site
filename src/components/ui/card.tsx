import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-2xl shadow-sm p-4">{children}</div>;
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-left ${className}`}>{children}</div>;
}
