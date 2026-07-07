import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome, HiSearch, HiQuestionMarkCircle } from 'react-icons/hi';

const NotFound = () => {
  const triggerSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6">
      
      {/* Animated 404 Text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <span className="font-sans font-extrabold text-[120px] md:text-[180px] leading-none text-brand-orange/10 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <HiQuestionMarkCircle className="w-24 h-24 md:w-36 md:h-36 text-brand-orange animate-bounce" />
        </div>
      </motion.div>

      {/* Message */}
      <div className="space-y-2 max-w-md">
        <h1 className="font-sans font-bold text-2xl md:text-3xl text-brand-navy dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-slate-400">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Redirect Options */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link 
          to="/" 
          className="btn-primary"
        >
          <HiHome className="w-5 h-5 mr-1" />
          <span>Go Back Home</span>
        </Link>
        
        <button
          onClick={triggerSearch}
          className="btn-secondary"
        >
          <HiSearch className="w-5 h-5 mr-1" />
          <span>Search Guides</span>
        </button>
      </div>

    </div>
  );
};

export default NotFound;
