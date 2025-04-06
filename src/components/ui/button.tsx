import React from 'react';

export function Button({ children, asChild = false, variant = 'outline' }: any) {
  const baseStyle = 'px-4 py-2 border rounded-xl text-sm hover:bg-gray-100 transition';
  if (asChild) return children;
  return <button className={baseStyle}>{children}</button>;
}
