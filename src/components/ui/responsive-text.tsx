
import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'success' | 'warning' | 'error';
}

export const ResponsiveText = ({ 
  children, 
  className, 
  size = 'base',
  weight = 'normal',
  color = 'default'
}: ResponsiveTextProps) => {
  const sizeClasses = {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base", 
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
    "2xl": "text-2xl md:text-3xl"
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold", 
    bold: "font-bold"
  };

  const colorClasses = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    success: "text-green-600",
    warning: "text-orange-500",
    error: "text-red-600"
  };

  return (
    <span className={cn(sizeClasses[size], weightClasses[weight], colorClasses[color], className)}>
      {children}
    </span>
  );
};
