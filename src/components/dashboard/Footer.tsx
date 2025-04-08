
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={cn('py-6 px-6 border-t border-white/5', className)}>
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-seedlink-muted-text text-sm">
            © {new Date().getFullYear()} SEEDLINK Horizon Invest. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-seedlink-muted-text hover:text-seedlink-primary transition-colors">
              Help Center
            </a>
            <a href="#" className="text-seedlink-muted-text hover:text-seedlink-primary transition-colors">
              Contact Support
            </a>
            <a href="#" className="text-seedlink-muted-text hover:text-seedlink-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
          
          <div className="flex gap-4 md:ml-6">
            <a 
              href="#" 
              className="text-seedlink-muted-text hover:text-seedlink-primary"
              aria-label="Dribbble"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-seedlink-muted-text hover:text-seedlink-primary"
              aria-label="Behance"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.5 4.5H14C15.9 4.5 17.5 6.1 17.5 8C17.5 9.9 15.9 11.5 14 11.5H7.5V4.5Z"></path>
                <path d="M7.5 11.5H15.5C17.4 11.5 19 13.1 19 15C19 16.9 17.4 18.5 15.5 18.5H7.5V11.5Z"></path>
                <path d="M3 4.5H7.5"></path>
                <path d="M19 9.5H22"></path>
                <path d="M19 14.5H22"></path>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-seedlink-muted-text hover:text-seedlink-primary"
              aria-label="Lovable"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
