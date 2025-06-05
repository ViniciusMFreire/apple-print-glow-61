
import { useIsMobile } from "@/hooks/use-mobile";

// Breakpoint utilities
export const useResponsiveBreakpoints = () => {
  const isMobile = useIsMobile();
  
  return {
    isMobile,
    isTablet: !isMobile && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
    isXl: window.innerWidth >= 1280,
  };
};

// Responsive class utilities
export const getResponsiveClasses = {
  // Text sizes
  textSize: {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base", 
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
    "2xl": "text-2xl md:text-3xl"
  },
  
  // Padding
  padding: {
    sm: "p-3 md:p-4",
    md: "p-4 md:p-6", 
    lg: "p-6 md:p-8"
  },
  
  // Gaps
  gap: {
    sm: "gap-3 md:gap-4",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8"
  },
  
  // Icon sizes
  iconSize: {
    sm: "h-4 w-4 md:h-5 md:w-5",
    md: "h-5 w-5 md:h-6 md:w-6",
    lg: "h-8 w-8 md:h-10 md:w-10",
    xl: "h-10 w-10 md:h-12 md:w-12"
  },
  
  // Circle sizes (for charts and avatars)
  circle: {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-32 h-32 md:w-40 md:h-40"
  }
};

// Grid utilities
export const getGridClasses = {
  responsive: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cards: "grid grid-cols-1 sm:grid-cols-3",
  layout: "grid grid-cols-1 xl:grid-cols-2"
};
