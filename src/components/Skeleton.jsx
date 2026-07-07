import React from 'react';

export const SkeletonArticle = () => {
  return (
    <div className="animate-pulse space-y-6 py-4">
      {/* Title */}
      <div className="h-9 bg-gray-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
      
      {/* Meta tags line */}
      <div className="flex space-x-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-24"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-32"></div>
      </div>
      
      {/* Paragraph chunks */}
      <div className="space-y-3 pt-4">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-5/6"></div>
      </div>

      <div className="h-48 bg-gray-100 dark:bg-slate-800 rounded-xl w-full"></div>

      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-4/5"></div>
      </div>
    </div>
  );
};

export const SkeletonBlogCard = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-brand-navyDark overflow-hidden shadow-sm h-full flex flex-col">
      <div className="h-48 bg-gray-200 dark:bg-slate-800 w-full"></div>
      <div className="p-6 flex-1 space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-1/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-md w-5/6"></div>
        <div className="flex items-center space-x-3 pt-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-700"></div>
          <div className="space-y-2 flex-1">
            <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-md w-1/3"></div>
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-md w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonSidebar = () => {
  return (
    <div className="animate-pulse space-y-4 py-2">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-2">
          <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded-md w-1/2"></div>
          <div className="pl-4 space-y-2">
            <div className="h-4 bg-gray-100 dark:bg-slate-800/80 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-100 dark:bg-slate-800/80 rounded-md w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
