"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, FileText, Network, BarChart3, Brain } from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const dockItems: DockItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <Home className="w-full h-full" />,
    href: '#hero'
  },
  {
    id: 'problem',
    label: 'Problem Statement',
    icon: <FileText className="w-full h-full" />,
    href: '#problem'
  },
  {
    id: 'literature',
    label: 'Literature Survey',
    icon: <Brain className="w-full h-full" />,
    href: '#literature'
  },
  {
    id: 'architecture',
    label: 'System Architecture',
    icon: <Network className="w-full h-full" />,
    href: '#architecture'
  },
  {
    id: 'results',
    label: 'Results & Impact',
    icon: <BarChart3 className="w-full h-full" />,
    href: '#results'
  }
];

const DockIcon = ({ 
  item, 
  mouseY 
}: { 
  item: DockItem; 
  mouseY: any;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { top: 0, height: 0 };
    return val - bounds.top - bounds.height / 2;
  });

  const sizeSync = useTransform(distance, [-120, 0, 120], [48, 90, 48]);
  const size = useSpring(sizeSync, { mass: 0.05, stiffness: 400, damping: 25 });

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.a
      ref={ref}
      href={item.href}
      onClick={handleClick}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-full bg-white/95 backdrop-blur-xl
                 flex items-center justify-center text-gray-800 cursor-pointer
                 relative group transition-all duration-200 hover:shadow-lg hover:shadow-blue-300/50
                 border border-gray-200/50 hover:border-blue-300 flex-shrink-0"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {item.icon}
      </div>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          x: isHovered ? 0 : 10 
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                   px-3 py-1.5 rounded-lg bg-white/95 text-gray-800 text-xs font-medium
                   whitespace-nowrap pointer-events-none z-50 border border-gray-200 shadow-lg"
      >
        {item.label}
        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 
                        w-2 h-2 bg-white/95 rotate-45 border-r border-b border-gray-200" />
      </motion.div>
    </motion.a>
  );
};

const DockNavigation = () => {
  const mouseY = useMotionValue(Infinity);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction (optional - currently always visible)
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true); // Keep always visible, change to false to hide on scroll down
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: 'spring', stiffness: 800, damping: 25, mass: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto">
        {/* Dock Container */}
        <motion.div
          onMouseMove={(e) => mouseY.set(e.clientY)}
          onMouseLeave={() => mouseY.set(Infinity)}
          className="px-3 py-4 rounded-2xl bg-white/95 border border-gray-200
                     shadow-2xl shadow-gray-400/30 backdrop-blur-2xl
                     flex flex-col items-center gap-3"
        >
          {dockItems.map((item) => (
            <DockIcon key={item.id} item={item} mouseY={mouseY} />
          ))}
        </motion.div>

       
      </div>

      {/* Responsive Mobile Menu (for very small screens) */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .fixed.right-4 {
            right: 0.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .dock-icon-mobile {
            width: 45px !important;
            min-width: 45px !important;
          }
        }
        
        @media (max-width: 480px) {
          .fixed.right-4 {
            right: 0.25rem;
          }
          
          .dock-container-mobile {
            gap: 0.5rem !important;
            padding: 0.75rem 0.5rem !important;
          }
          
          .dock-icon-mobile {
            width: 40px !important;
            min-width: 40px !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default DockNavigation;
