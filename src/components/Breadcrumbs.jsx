import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi';

const Breadcrumbs = ({ customPaths = [] }) => {
  const location = useLocation();
  
  // If custom paths are supplied, use them; otherwise, build from location pathname.
  const pathnames = customPaths.length > 0 
    ? customPaths 
    : location.pathname.split('/').filter(x => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-slate-400 no-print py-3">
      <Link 
        to="/" 
        className="flex items-center hover:text-brand-orange transition-colors duration-200"
      >
        <HiHome className="w-4 h-4 mr-1" />
        <span>Home</span>
      </Link>
      
      {pathnames.map((path, index) => {
        const isLast = index === pathnames.length - 1;
        
        // Format path string for display
        const name = typeof path === 'object' 
          ? path.name 
          : path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          
        const to = typeof path === 'object'
          ? path.to
          : `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div key={index} className="flex items-center space-x-2">
            <HiChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="font-semibold text-brand-navy dark:text-white capitalize">
                {name}
              </span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-brand-orange transition-colors duration-200 capitalize"
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
