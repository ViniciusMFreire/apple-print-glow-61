
import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dashboard' | 'card' | 'header';
}

export const ResponsiveContainer = ({ 
  children, 
  className, 
  variant = 'default' 
}: ResponsiveContainerProps) => {
  const baseClasses = "w-full";
  
  const variantClasses = {
    default: "container mx-auto px-4",
    dashboard: "container mx-auto px-4 py-6 max-w-7xl",
    card: "p-3 md:p-4 lg:p-6",
    header: "p-3 md:p-4"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};
