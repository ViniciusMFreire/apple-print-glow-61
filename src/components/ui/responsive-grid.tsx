
import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'auto' | 'cards' | 'dashboard' | 'stats';
  gap?: 'sm' | 'md' | 'lg';
}

export const ResponsiveGrid = ({ 
  children, 
  className, 
  variant = 'auto',
  gap = 'md'
}: ResponsiveGridProps) => {
  const baseClasses = "grid w-full";
  
  const variantClasses = {
    auto: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    cards: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
    dashboard: "grid-cols-1 xl:grid-cols-3",
    stats: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  };

  const gapClasses = {
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6", 
    lg: "gap-4 sm:gap-6 lg:gap-8"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], gapClasses[gap], className)}>
      {children}
    </div>
  );
};
